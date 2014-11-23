$(document).ready(function(){
		
			  });var pull = $('#pull');
		menu = $('nav ul');
		menuHeight = menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function(){
			var w = $(window).width();
			if(w > 320 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});

		$("hehe").click(function(){
			var data = {
			    sql:'SELECT * FROM "539525df-fc9a-4adf-b33d-04747e95f120" LIMIT 10 OFFSET 5' // query for 'jones'
			  };
			  $.ajax({
			    url: 'http://philgeps.cloudapp.net:5000/api/action/datastore_search_sql',
			    data: data,
			    dataType: 'json',
			    success: function(data) {

			    }
		});
});
			