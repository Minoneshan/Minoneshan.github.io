/* Shared site JS: mobile nav toggle + project filters */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Project filters (Projects page)
  var chips = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll("[data-tags]");
  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("active");
        });
        chip.classList.add("active");
        var filter = chip.getAttribute("data-filter");
        cards.forEach(function (card) {
          var tags = card.getAttribute("data-tags");
          if (filter === "all" || tags.indexOf(filter) !== -1) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
})();
