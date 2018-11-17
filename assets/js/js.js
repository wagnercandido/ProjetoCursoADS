$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 100) {
			$(".sidebar-wrapper").addClass("cor-Nav");
		} else {
			$(".sidebar-wrapper").removeClass("cor-Nav");
		}
	});
});
