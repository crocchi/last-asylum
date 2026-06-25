(function () {
	function formatNumber(value) {
		var language = window.LastAsylumI18n ? window.LastAsylumI18n.current() : "en";
		var localeMap = {
			en: "en-US",
			it: "it-IT",
			es: "es-ES",
			fr: "fr-FR",
			de: "de-DE",
			ja: "ja-JP"
		};

		return new Intl.NumberFormat(localeMap[language] || "en-US").format(value || 0);
	}

	function t(key, params) {
		return window.LastAsylumI18n ? window.LastAsylumI18n.t(key, params) : key;
	}

	function formatDuration(totalSeconds) {
		if (!totalSeconds) {
			return "0s";
		}

		var seconds = totalSeconds;
		var days = Math.floor(seconds / 86400);
		seconds -= days * 86400;
		var hours = Math.floor(seconds / 3600);
		seconds -= hours * 3600;
		var minutes = Math.floor(seconds / 60);
		seconds -= minutes * 60;
		var parts = [];

		if (days) {
			parts.push(days + "d");
		}
		if (hours) {
			parts.push(hours + "h");
		}
		if (minutes) {
			parts.push(minutes + "m");
		}
		if (seconds || !parts.length) {
			parts.push(seconds + "s");
		}

		return parts.join(" ");
	}

	function initBuildingCalculator() {
		var data = window.LAST_ASYLUM_BUILDINGS;
		var requirements = window.LAST_ASYLUM_BUILDING_REQUIREMENTS || {};
		var buildingSelect = document.getElementById("building-select");
		var currentSelect = document.getElementById("building-current-level");
		var targetSelect = document.getElementById("building-target-level");
		var note = document.getElementById("building-note");
		var requirementsPanel = document.getElementById("building-requirements");
		var requirementsList = document.getElementById("building-requirements-list");

		if (!data || !buildingSelect || !currentSelect || !targetSelect || !note) {
			return;
		}

		var output = {
			wood: document.getElementById("rss-wood"),
			grain: document.getElementById("rss-grain"),
			herb: document.getElementById("rss-herb"),
			time: document.getElementById("rss-time"),
			steps: document.getElementById("rss-steps")
		};

		var entries = Object.keys(data).map(function (slug) {
			return {
				slug: slug,
				name: data[slug].name,
				rows: data[slug].rows
			};
		});

		entries.forEach(function (entry) {
			var option = document.createElement("option");
			option.value = entry.slug;
			option.textContent = entry.name;
			buildingSelect.appendChild(option);
		});

		function fillSelect(select, start, end, selected) {
			select.innerHTML = "";
			for (var level = start; level <= end; level += 1) {
				var option = document.createElement("option");
				option.value = String(level);
				option.textContent = t("level") + " " + level;
				if (level === selected) {
					option.selected = true;
				}
				select.appendChild(option);
			}
		}

		function setTotals(totals) {
			output.wood.textContent = formatNumber(totals.wood);
			output.grain.textContent = formatNumber(totals.grain);
			output.herb.textContent = formatNumber(totals.herb);
			output.time.textContent = formatDuration(totals.time);
			output.steps.textContent = formatNumber(totals.steps);
		}

		function renderRequirements(slug, rows) {
			if (!requirementsPanel || !requirementsList) {
				return;
			}

			var buildingRequirements = requirements[slug] || {};
			var groups = rows.map(function (row) {
				var targetLevel = row.from + 1;
				return {
					level: targetLevel,
					items: buildingRequirements[String(targetLevel)] || []
				};
			}).filter(function (group) {
				return group.items.length;
			});

			requirementsList.innerHTML = "";

			if (!groups.length) {
				requirementsPanel.classList.add("is-empty");
				requirementsList.innerHTML = "<p>Nessun requisito building disponibile per il range selezionato.</p>";
				return;
			}

			requirementsPanel.classList.remove("is-empty");

			groups.forEach(function (group) {
				var groupNode = document.createElement("section");
				var title = document.createElement("h4");
				var list = document.createElement("ul");

				title.textContent = t("level") + " " + group.level;

				group.items.forEach(function (item) {
					var listItem = document.createElement("li");
					var name = document.createElement("span");
					var level = document.createElement("strong");

					name.textContent = item.building;
					level.textContent = t("level") + " " + item.level;
					listItem.appendChild(name);
					listItem.appendChild(level);
					list.appendChild(listItem);
				});

				groupNode.appendChild(title);
				groupNode.appendChild(list);
				requirementsList.appendChild(groupNode);
			});
		}

		function syncLevels() {
			var selectedBuilding = data[buildingSelect.value];
			if (!selectedBuilding) {
				return;
			}

			var maxFrom = selectedBuilding.rows.reduce(function (max, row) {
				return Math.max(max, row.from);
			}, 1);
			var currentLevel = parseInt(currentSelect.value || "1", 10);
			if (currentLevel > maxFrom) {
				currentLevel = 1;
			}

			fillSelect(currentSelect, 1, maxFrom, currentLevel);

			var minTarget = Math.min(currentLevel + 1, maxFrom + 1);
			var currentTarget = parseInt(targetSelect.value || String(minTarget), 10);
			if (currentTarget <= currentLevel || currentTarget > maxFrom + 1) {
				currentTarget = minTarget;
			}

			fillSelect(targetSelect, minTarget, maxFrom + 1, currentTarget);
		}

		function updateCalculator() {
			var selectedBuilding = data[buildingSelect.value];
			if (!selectedBuilding) {
				return;
			}

			syncLevels();

			var currentLevel = parseInt(currentSelect.value, 10);
			var targetLevel = parseInt(targetSelect.value, 10);
			var requiredSteps = targetLevel - currentLevel;
			var rows = selectedBuilding.rows.filter(function (row) {
				return row.from >= currentLevel && row.from < targetLevel;
			});

			var totals = rows.reduce(function (sum, row) {
				sum.wood += row.wood;
				sum.grain += row.grain;
				sum.herb += row.herb;
				sum.time += row.time;
				sum.steps += 1;
				return sum;
			}, { wood: 0, grain: 0, herb: 0, time: 0, steps: 0 });

			setTotals(totals);
			renderRequirements(buildingSelect.value, rows);

			if (rows.length !== requiredSteps) {
				note.textContent = t("partialData", { building: selectedBuilding.name });
				return;
			}

			note.textContent = t("buildingNote", { building: selectedBuilding.name, current: currentLevel, target: targetLevel });
		}

		buildingSelect.addEventListener("change", function () {
			targetSelect.value = "";
			currentSelect.value = "1";
			updateCalculator();
		});
		currentSelect.addEventListener("change", updateCalculator);
		targetSelect.addEventListener("change", updateCalculator);

		buildingSelect.value = entries[0].slug;
		fillSelect(currentSelect, 1, data[buildingSelect.value].rows[data[buildingSelect.value].rows.length - 1].from, 1);
		fillSelect(targetSelect, 2, data[buildingSelect.value].rows[data[buildingSelect.value].rows.length - 1].from + 1, 2);
		updateCalculator();

		window.addEventListener("last-asylum-language-change", updateCalculator);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initBuildingCalculator);
	} else {
		initBuildingCalculator();
	}
})();
