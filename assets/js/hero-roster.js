(function () {
	function initHeroRoster() {
		var heroes = window.LAST_ASYLUM_HEROES;
		var roster = document.getElementById("hero-roster");
		var modal = document.getElementById("hero-modal");
		var closeButton = document.getElementById("hero-modal-close");

		if (!heroes || !roster || !modal || !closeButton) {
			return;
		}

		if (modal.parentNode !== document.body) {
			document.body.appendChild(modal);
		}

		var dialog = modal.querySelector(".hero-modal-dialog");
		var nameNode = document.getElementById("hero-modal-name");
		var roleNode = document.getElementById("hero-modal-role");
		var imageNode = document.getElementById("hero-modal-image");
		var summaryNode = document.getElementById("hero-modal-summary");
		var overviewNode = document.getElementById("hero-modal-overview");
		var statsNode = document.getElementById("hero-modal-stats");
		var skillsNode = document.getElementById("hero-modal-skills");
		var compareSelectionNode = document.getElementById("hero-compare-selection");
		var compareContentNode = document.getElementById("hero-compare-content");
		var compareClearButton = document.getElementById("hero-compare-clear");
		var lastTrigger = null;
		var maxComparedHeroes = 3;
		var selectedHeroes = [];

		function t(key, params) {
			return window.LastAsylumI18n ? window.LastAsylumI18n.t(key, params) : key;
		}

		function field(item, key) {
			return window.LastAsylumI18n ? window.LastAsylumI18n.field(item, key) : item[key];
		}

		function createTagList(tags) {
			return tags.map(function (tag) {
				return "<li>" + tag + "</li>";
			}).join("");
		}

		function escapeAttribute(value) {
			return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
		}

		function findHero(slug) {
			return heroes.find(function (entry) {
				return entry.slug === slug;
			}) || null;
		}

		function isHeroSelected(slug) {
			return selectedHeroes.indexOf(slug) !== -1;
		}

		function renderCards() {
			roster.innerHTML = heroes.map(function (hero) {
				var selected = isHeroSelected(hero.slug);

				return [
					'<article class="hero-card' + (selected ? ' is-selected' : '') + '" data-hero="' + hero.slug + '">',
						'<span class="hero-card-media"><img src="' + hero.image + '" alt="' + hero.name + '" loading="lazy" /></span>',
						'<div class="hero-card-body">',
							'<span class="hero-role">' + hero.role + '</span>',
							'<h3>' + hero.name + '</h3>',
							'<p>' + field(hero, "summary") + '</p>',
							'<ul class="hero-meta">' + createTagList(hero.overview) + '</ul>',
							'<div class="hero-card-actions">',
								'<button type="button" class="hero-card-button hero-details-trigger" data-hero-action="details" data-hero-slug="' + hero.slug + '" aria-haspopup="dialog">' + t("details") + '</button>',
								'<button type="button" class="hero-card-button hero-compare-trigger' + (selected ? ' is-active' : '') + '" data-hero-action="compare" data-hero-slug="' + hero.slug + '" aria-pressed="' + (selected ? 'true' : 'false') + '">' + (selected ? t("selected") : t("compare")) + '</button>',
							'</div>',
							'<span class="hero-card-hint">' + t("cardHint") + '</span>',
						'</div>',
					'</article>'
				].join("");
			}).join("");
		}

		function createCompareMeta(hero) {
			return [
				'<ul class="hero-compare-meta">',
					'<li><strong>' + t("faction") + '</strong><span>' + hero.faction + '</span></li>',
					'<li><strong>' + t("classLabel") + '</strong><span>' + hero.heroClass + '</span></li>',
					'<li><strong>' + t("rarity") + '</strong><span>' + hero.rarity + '</span></li>',
					'<li><strong>' + t("overview") + '</strong><span>' + hero.overview.join(', ') + '</span></li>',
				'</ul>'
			].join('');
		}

		function createCompareStats(hero) {
			return [
				'<ul class="hero-compare-stats">',
					Object.keys(hero.stats).map(function (key) {
						return '<li><strong>' + key + '</strong><span>' + hero.stats[key] + '</span></li>';
					}).join(''),
				'</ul>'
			].join('');
		}

		function createCompareSkillCard(hero, skill) {
			var effectsMarkup = '';

			if (skill.additionalEffects && skill.additionalEffects.length) {
				effectsMarkup = [
					'<ul class="hero-compare-effects">',
						skill.additionalEffects.map(function (effect) {
							return '<li>' + effect + '</li>';
						}).join(''),
					'</ul>'
				].join('');
			}

			return [
				'<article class="hero-compare-skill">',
					'<div class="hero-compare-skill-head">',
						'<img src="' + skill.image + '" alt="' + escapeAttribute(skill.name) + '" loading="lazy" />',
						'<div class="hero-compare-skill-title">',
							'<span>' + hero.name + '</span>',
							'<strong>' + skill.name + '</strong>',
						'</div>',
					'</div>',
					'<p>' + skill.description + '</p>',
					'<ul class="hero-compare-skill-meta">',
						'<li><strong>' + t("type") + '</strong><span>' + skill.type + '</span></li>',
						'<li><strong>' + t("cooldown") + '</strong><span>' + skill.cooldown + '</span></li>',
						'<li><strong>' + t("damage") + '</strong><span>' + skill.damageType + '</span></li>',
					'</ul>',
					effectsMarkup,
				'</article>'
			].join('');
		}

		function renderCompareSelection(selectedHeroEntries) {
			if (!compareSelectionNode) {
				return;
			}

			if (!selectedHeroEntries.length) {
				compareSelectionNode.innerHTML = [
					'<li>' + t("slot") + ' 1</li>',
					'<li class="is-empty">' + t("slot") + ' 2</li>',
					'<li class="is-empty">' + t("slot") + ' 3</li>'
				].join('');
				return;
			}

			compareSelectionNode.innerHTML = selectedHeroEntries.map(function (hero) {
				return '<li>' + hero.name + '</li>';
			}).join('');

			while (compareSelectionNode.children.length < maxComparedHeroes) {
				compareSelectionNode.insertAdjacentHTML('beforeend', '<li class="is-empty">' + t("emptySlot") + '</li>');
			}
		}

		function renderComparePanel() {
			var selectedHeroEntries;
			var skillCount;
			var skillsMarkup;

			if (!compareContentNode) {
				return;
			}

			selectedHeroEntries = selectedHeroes.map(findHero).filter(Boolean);
			renderCompareSelection(selectedHeroEntries);

			if (!selectedHeroEntries.length) {
				compareContentNode.innerHTML = '<div class="hero-compare-empty">' + t("noHeroSelected") + '</div>';
				if (compareClearButton) {
					compareClearButton.disabled = true;
				}
				return;
			}

			if (compareClearButton) {
				compareClearButton.disabled = false;
			}

			skillCount = selectedHeroEntries.reduce(function (maxCount, hero) {
				return Math.max(maxCount, hero.skills.length);
			}, 0);

			skillsMarkup = [];
			for (var index = 0; index < skillCount; index += 1) {
				skillsMarkup.push([
					'<section>',
						'<h3>' + t("skillSlot") + ' ' + (index + 1) + '</h3>',
						'<div class="hero-compare-skill-grid">',
							selectedHeroEntries.map(function (hero) {
								var skill = hero.skills[index];

								if (!skill) {
									return '<article class="hero-compare-skill"><div class="hero-compare-skill-title"><span>' + hero.name + '</span><strong>' + t("noSkill") + '</strong></div></article>';
								}

								return createCompareSkillCard(hero, skill);
							}).join(''),
						'</div>',
					'</section>'
				].join(''));
			}

			compareContentNode.innerHTML = [
				'<div class="hero-compare-grid">',
					selectedHeroEntries.map(function (hero) {
						return [
							'<article class="hero-compare-card">',
								'<img src="' + hero.image + '" alt="' + escapeAttribute(hero.name) + '" loading="lazy" />',
								'<span class="hero-role">' + hero.role + '</span>',
								'<h3>' + hero.name + '</h3>',
								'<p>' + field(hero, "summary") + '</p>',
								createCompareMeta(hero),
								createCompareStats(hero),
							'</article>'
						].join('');
					}).join(''),
				'</div>',
				'<div class="hero-compare-skills">',
					skillsMarkup.join(''),
				'</div>'
			].join('');
		}

		function toggleHeroComparison(slug) {
			var selectedIndex = selectedHeroes.indexOf(slug);

			if (selectedIndex !== -1) {
				selectedHeroes.splice(selectedIndex, 1);
			} else {
				if (selectedHeroes.length >= maxComparedHeroes) {
					selectedHeroes.shift();
				}

				selectedHeroes.push(slug);
			}

			renderCards();
			renderComparePanel();
		}

		function setModalContent(hero) {
			nameNode.textContent = hero.name;
			roleNode.textContent = hero.role;
			summaryNode.textContent = field(hero, "summary");
			imageNode.src = hero.image;
			imageNode.alt = hero.name;

			overviewNode.innerHTML = [
				'<li><strong>' + t("heroFaction") + '</strong><span>' + hero.faction + '</span></li>',
				'<li><strong>' + t("classLabel") + '</strong><span>' + hero.heroClass + '</span></li>',
				'<li><strong>' + t("rarity") + '</strong><span>' + hero.rarity + '</span></li>',
				'<li><strong>' + t("source") + '</strong><span>Last Asylum Plague</span></li>'
			].join("");

			statsNode.innerHTML = Object.keys(hero.stats).map(function (key) {
				return '<li><strong>' + key + '</strong><span>' + hero.stats[key] + '</span></li>';
			}).join("");

			skillsNode.innerHTML = hero.skills.map(function (skill) {
				var effectsMarkup = "";

				if (skill.additionalEffects && skill.additionalEffects.length) {
					effectsMarkup = [
						'<span class="hero-skill-section-label">' + t("additionalEffects") + '</span>',
						'<ul class="hero-skill-effects">',
							skill.additionalEffects.map(function (effect) {
								return '<li>' + effect + '</li>';
							}).join(""),
						'</ul>'
					].join("");
				}

				return [
					'<li class="hero-skill-item">',
						'<img src="' + skill.image + '" alt="' + skill.name + '" loading="lazy" />',
						'<div>',
							'<h4>' + skill.name + '</h4>',
							'<p>' + skill.description + '</p>',
							'<ul class="hero-skill-meta">',
								'<li><strong>' + t("type") + '</strong><span>' + skill.type + '</span></li>',
								'<li><strong>' + t("cooldown") + '</strong><span>' + skill.cooldown + '</span></li>',
								'<li><strong>' + t("damage") + '</strong><span>' + skill.damageType + '</span></li>',
							'</ul>',
							effectsMarkup,
						'</div>',
					'</li>'
				].join("");
			}).join("");
		}

		function openModal(hero, trigger) {
			lastTrigger = trigger || null;
			setModalContent(hero);
			modal.classList.add("is-visible");
			modal.setAttribute("aria-hidden", "false");
			document.body.classList.add("hero-modal-open");
			closeButton.focus();
		}

		function closeModal() {
			modal.classList.remove("is-visible");
			modal.setAttribute("aria-hidden", "true");
			document.body.classList.remove("hero-modal-open");
			if (lastTrigger) {
				lastTrigger.focus();
			}
		}

		renderCards();
		renderComparePanel();

		window.addEventListener("last-asylum-language-change", function () {
			renderCards();
			renderComparePanel();
			if (modal.classList.contains("is-visible") && lastTrigger) {
				var hero = findHero(lastTrigger.getAttribute("data-hero-slug"));
				if (hero) {
					setModalContent(hero);
				}
			}
		});

		roster.addEventListener("click", function (event) {
			var trigger = event.target.closest("[data-hero-action]");
			var hero;
			var heroSlug;

			if (!trigger) {
				return;
			}

			heroSlug = trigger.getAttribute("data-hero-slug");

			if (trigger.getAttribute("data-hero-action") === "compare") {
				toggleHeroComparison(heroSlug);
				return;
			}

			hero = findHero(heroSlug);

			if (hero) {
				openModal(hero, trigger);
			}
		});

		roster.addEventListener("keydown", function (event) {
			var trigger;
			var hero;
			var heroSlug;

			if (event.key !== "Enter" && event.key !== " ") {
				return;
			}

			trigger = event.target.closest("[data-hero-action]");
			if (!trigger) {
				return;
			}

			event.preventDefault();
			heroSlug = trigger.getAttribute("data-hero-slug");

			if (trigger.getAttribute("data-hero-action") === "compare") {
				toggleHeroComparison(heroSlug);
				return;
			}

			hero = findHero(heroSlug);

			if (hero) {
				openModal(hero, trigger);
			}
		});

		if (compareClearButton) {
			compareClearButton.addEventListener("click", function () {
				selectedHeroes = [];
				renderCards();
				renderComparePanel();
			});
		}

		closeButton.addEventListener("click", closeModal);

		modal.addEventListener("click", function (event) {
			if (!dialog.contains(event.target)) {
				closeModal();
			}
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" && modal.classList.contains("is-visible")) {
				closeModal();
			}
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initHeroRoster);
	} else {
		initHeroRoster();
	}
})();
