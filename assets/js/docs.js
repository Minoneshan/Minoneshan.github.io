/* Documentation page JS:
   - sidebar search filtering
   - scrollspy (active section highlight)
   - mobile sidebar toggle
*/
(function () {
  var sidebar = document.querySelector(".docs-sidebar");
  if (!sidebar) return;

  var search = document.getElementById("docs-search-input");
  var navItems = Array.prototype.slice.call(
    sidebar.querySelectorAll(".docs-nav li")
  );
  var parts = Array.prototype.slice.call(
    sidebar.querySelectorAll(".docs-nav .nav-part")
  );
  var noResults = sidebar.querySelector(".no-results");

  // ---- Search filtering ----
  if (search) {
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      var anyVisible = false;

      navItems.forEach(function (li) {
        var text = li.textContent.toLowerCase();
        var match = q === "" || text.indexOf(q) !== -1;
        li.classList.toggle("hidden", !match);
        if (match) anyVisible = true;
      });

      // Hide part labels when searching
      parts.forEach(function (p) {
        p.style.display = q === "" ? "" : "none";
      });

      if (noResults) noResults.classList.toggle("show", !anyVisible);
    });
  }

  // ---- Scrollspy ----
  var headings = Array.prototype.slice.call(
    document.querySelectorAll(".docs-content h2[id], .docs-content h3[id]")
  );
  var navLinks = Array.prototype.slice.call(
    sidebar.querySelectorAll('.docs-nav a[href^="#"]')
  );
  var linkByHash = {};
  navLinks.forEach(function (a) {
    linkByHash[a.getAttribute("href")] = a;
  });

  function setActive(id) {
    navLinks.forEach(function (a) {
      a.classList.remove("active");
    });
    var active = linkByHash["#" + id];
    if (active) active.classList.add("active");
  }

  if (headings.length && "IntersectionObserver" in window) {
    var visible = new Set();
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        // pick the topmost visible heading
        var topMost = headings.filter(function (h) {
          return visible.has(h.id);
        })[0];
        if (topMost) setActive(topMost.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach(function (h) {
      observer.observe(h);
    });
  }

  // ---- Mobile sidebar toggle ----
  var sbToggle = document.querySelector(".docs-sidebar-toggle");
  if (sbToggle) {
    sbToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
    sidebar.addEventListener("click", function (e) {
      if (e.target.closest("a")) sidebar.classList.remove("open");
    });
  }
})();
