function collapseNavbar() {
  50 < $(".navbar").offset().top
    ? $(".navbar-fixed-top").addClass("top-nav-collapse")
    : $(".navbar-fixed-top").removeClass("top-nav-collapse");
}
$(window).scroll(collapseNavbar),
  $(document).ready(collapseNavbar),
  $(".navbar-collapse ul li a").click(function () {
    $(this).closest(".collapse").collapse("toggle");
  }),
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var a = $(this.hash);
      if ((a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length)
        return $("html, body").animate({ scrollTop: a.offset().top }, 1e3), !1;
    }
  }),
  (function (i) {
    i.fn.visible = function (a) {
      var o = i(this),
        l = i(window),
        e = l.scrollTop(),
        n = e + l.height(),
        l = o.offset().top,
        o = l + o.height();
      return (!0 === a ? l : o) <= n && e <= (!0 === a ? o : l);
    };
  })(jQuery);
var win = $(window),
  allMods = $(
    ".col-sm-4, .secs, .sectionhead>img , .mapimg, .head, .butn, .line, .prez, .bod3, .mlogo , .heading, .copyright, .links, .bline"
  );
allMods.each(function (a, o) {
  (o = $(o)).visible(!0) && o.addClass("already-visible");
}),
  win.scroll(function (a) {
    allMods.each(function (a, o) {
      (o = $(o)).visible(!0) && o.addClass("come-in");
    });
  });
var ssPreloader = function () {
  $WIN.on("load", function () {
    $("html, body").animate({ scrollTop: 0 }, "normal"),
      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(300).fadeOut("slow");
      });
  });
};
