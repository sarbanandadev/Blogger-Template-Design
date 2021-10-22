var spSiteMapConfig = { url: 'https://sammapanna.blogspot.com', containerId: 'spSitemap', showNew: 15, newText: '<strong class="sp-sitemap-new-item"> New!</strong>', sortAlphabetically: { thePanel: true, theList: true }, maxResults: 9999, activePanel: 1, slideSpeed: { down: 400, up: 400 }, slideEasing: { down: null, up: null }, slideCallback: { down: function() {}, up: function() {} }, clickCallback: function() {}, jsonCallback: 'sp', delayLoading: 0 };
! function(e, o) {
  var t = o.getElementById(spSiteMapConfig.containerId),
    c = o.getElementsByTagName("head")[0],
    n = [];
  e[spSiteMapConfig.jsonCallback] = function(e) {
    for (var o, c, i = e.feed.entry, a = e.feed.category, l = "", s = 0, d = a.length; d > s; ++s) n.push(a[s].term);
    for (var r = 0, f = i.length; f > r; ++r)(spSiteMapConfig.showNew || spSiteMapConfig.showNew > 0) && r < spSiteMapConfig.showNew + 1 && (i[r].title.$t += " %new%");
    i = spSiteMapConfig.sortAlphabetically.theList ? i.sort(function(e, o) { return e.title.$t.localeCompare(o.title.$t) }) : i, spSiteMapConfig.sortAlphabetically.thePanel && n.sort();
    for (var g = 0, h = n.length; h > g; ++g) {
      l += '<span class="sp-sitemap-header">' + n[g] + "</span>", l += '<div class="sp-sitemap-container">';
      for (var sm = 0, p = i.length; p > sm; ++sm) {
        o = i[sm].title.$t;
        for (var w = 0, u = i[sm].link.length; u > w; ++w)
          if ("alternate" == i[sm].link[w].rel) { c = i[sm].link[w].href; break } for (var v = 0, m = i[sm].category.length; m > v; ++v) n[g] == i[sm].category[v].term && (l += '<a class="sp-sitemap-link" href="' + c + '">' + o.replace(/\%new\%$/, "") + (o.match(/\%new\%/) ? " " + spSiteMapConfig.newText : "") + "</a>")
      }
      l += "</div>"
    }
    t.innerHTML = l, "undefined" != typeof jQuery && ($("#" + spSiteMapConfig.containerId + " .sp-sitemap-container").hide(), $("#" + spSiteMapConfig.containerId + " .sp-sitemap-header").click(function() { $(this).hasClass("active") || (spSiteMapConfig.clickCallback(this), $("#" + spSiteMapConfig.containerId + " .sp-sitemap-header").removeClass("active").next().slideUp(spSiteMapConfig.slideSpeed.up, spSiteMapConfig.slideEasing.up, spSiteMapConfig.slideCallback.up), $(this).addClass("active").next().slideDown(spSiteMapConfig.slideSpeed.down, spSiteMapConfig.slideEasing.down, spSiteMapConfig.slideCallback.down)) }).eq(spSiteMapConfig.activePanel - 1).addClass("active").next().slideDown(spSiteMapConfig.slideSpeed.down, spSiteMapConfig.slideEasing.down, spSiteMapConfig.slideCallback.down))
  };
  var i = o.createElement("script");
  i.src = spSiteMapConfig.url.replace(/\/$/, "") + "/feeds/posts/summary?alt=json-in-script&max-results=" + spSiteMapConfig.maxResults + "&callback=" + spSiteMapConfig.jsonCallback, "onload" == spSiteMapConfig.delayLoading ? e.onload = function() { c.appendChild(i) } : e.setTimeout(function() { c.appendChild(i) }, spSiteMapConfig.delayLoading)
}(window, document);
spSitemapPower.innerHTML = "<p class='sp-sitemap-power'>Powered by SammāPaññā</p>";