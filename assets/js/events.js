(function () {
	function createTagList(tags) {
		return tags.map(function (tag) {
			return "<li>" + escapeHtml(tag) + "</li>";
		}).join("");
	}

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	function createDetailBlocks(details) {
		if (!details || !details.length) {
			return "";
		}

		return details.map(function (detail) {
			var items = detail.items || [];

			if (!detail.title || !items.length) {
				return "";
			}

			return [
				'<section class="event-detail-block">',
					'<h4>' + escapeHtml(detail.title) + '</h4>',
					'<ul>',
						items.map(function (item) {
							return "<li>" + escapeHtml(item) + "</li>";
						}).join(""),
					'</ul>',
				'</section>'
			].join("");
		}).join("");
	}

	function escapeAttribute(value) {
		return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
	}

	function t(key, params) {
		return window.LastAsylumI18n ? window.LastAsylumI18n.t(key, params) : key;
	}

	function field(item, key) {
		return window.LastAsylumI18n ? window.LastAsylumI18n.field(item, key) : item[key];
	}

	function initEventGrid() {
		var events = window.LAST_ASYLUM_EVENTS;
		var eventGrid = document.getElementById("event-grid");
		var modal = document.getElementById("event-modal");
		var closeButton = document.getElementById("event-modal-close");

		if (!events || !eventGrid || !modal || !closeButton) {
			return;
		}

		if (modal.parentNode !== document.body) {
			document.body.appendChild(modal);
		}

		var dialog = modal.querySelector(".event-modal-dialog");
		var titleNode = document.getElementById("event-modal-name");
		var tagNode = document.getElementById("event-modal-tag");
		var galleryNode = document.getElementById("event-modal-gallery");
		var summaryNode = document.getElementById("event-modal-summary");
		var detailsNode = document.getElementById("event-modal-details");
		var overviewNode = document.getElementById("event-modal-overview");
		var sourceNode = document.getElementById("event-modal-source");
		var lastTrigger = null;

		function findEvent(slug) {
			return events.find(function (entry) {
				return entry.slug === slug;
			}) || null;
		}

		function setModalContent(eventItem) {
			var detailImages = eventItem.detailImages && eventItem.detailImages.length ? eventItem.detailImages : [eventItem.image];

			titleNode.textContent = eventItem.name;
			tagNode.textContent = eventItem.tag;
			galleryNode.innerHTML = detailImages.map(function (imagePath, index) {
				return '<img src="' + imagePath + '" alt="' + escapeAttribute(eventItem.name + ' image ' + (index + 1)) + '" loading="lazy" />';
			}).join("");
			summaryNode.textContent = field(eventItem, "extraSummary") || field(eventItem, "summary");
			detailsNode.innerHTML = createDetailBlocks(eventItem.details);
			detailsNode.hidden = !eventItem.details || !eventItem.details.length;
			sourceNode.textContent = t("eventSource", { source: eventItem.source });
			overviewNode.innerHTML = createTagList(eventItem.overview);
		}

		function openModal(eventItem, trigger) {
			lastTrigger = trigger || null;
			setModalContent(eventItem);
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

		eventGrid.innerHTML = events.map(function (eventItem) {
			return [
				'<section class="event-card" data-event="' + eventItem.slug + '" role="button" tabindex="0" aria-haspopup="dialog" aria-label="' + escapeAttribute(t("openEvent", { name: eventItem.name })) + '">',
					'<span class="event-card-media"><img src="' + eventItem.image + '" alt="' + eventItem.name + '" loading="lazy" /></span>',
				'</section>'
			].join("");
		}).join("");

		window.addEventListener("last-asylum-language-change", function () {
			var openEventSlug = null;
			var openEventItem;

			if (modal.classList.contains("is-visible") && lastTrigger) {
				openEventSlug = lastTrigger.getAttribute("data-event");
			}

			eventGrid.querySelectorAll("[data-event]").forEach(function (node) {
				var item = findEvent(node.getAttribute("data-event"));
				if (item) {
					node.setAttribute("aria-label", t("openEvent", { name: item.name }));
				}
			});

			if (openEventSlug) {
				openEventItem = findEvent(openEventSlug);
				if (openEventItem) {
					setModalContent(openEventItem);
				}
			}
		});

		eventGrid.addEventListener("click", function (event) {
			var trigger = event.target.closest("[data-event]");
			var eventSlug;
			var eventItem;

			if (!trigger) {
				return;
			}

			eventSlug = trigger.getAttribute("data-event");
			eventItem = findEvent(eventSlug);

			if (eventItem) {
				openModal(eventItem, trigger);
			}
		});

		eventGrid.addEventListener("keydown", function (event) {
			var trigger;
			var eventSlug;
			var eventItem;

			if (event.key !== "Enter" && event.key !== " ") {
				return;
			}

			trigger = event.target.closest("[data-event]");
			if (!trigger) {
				return;
			}

			event.preventDefault();
			eventSlug = trigger.getAttribute("data-event");
			eventItem = findEvent(eventSlug);

			if (eventItem) {
				openModal(eventItem, trigger);
			}
		});

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
		document.addEventListener("DOMContentLoaded", initEventGrid);
	} else {
		initEventGrid();
	}
})();
