$(function () {
	var $content = $('#blogposts_container');
	var data = {
		rss_url: 'https://medium.com/feed/@chiragswadia'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
		var output = '';
		if (response.status == 'ok') {
			$.each(response.items, function (k, item) {
				output += '<div class="progress-box">' +
								'<h5><a style="text-decoration: underline;" href="'+ item.link +'" target="_blank">'+ item.title +'</a></h5>'+
                          '</div>';
			});
		}else{
			// fallback
			output = '<p>Faied to fetch blog posts. Please <a href="https://medium.com/@chiragswadia">click here</a> to visit my blog</p>';
		}
		
		$content.html(output);
	});
});