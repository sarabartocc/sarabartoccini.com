/*jQuery.get('projects.txt', function(data) {
	var myText = data;

	const projTitles = myText.match(/<title>.*?<\/>/g);
	const projLink = myText.match(/<link>.*?<\/>/g);
	const projDescr = myText.match(/<desc>.*?<\/>/g);
	const projMore = myText.match(/<more>.*?<\/>/g);
	const projImages = myText.match(/<images>.*?<\/>/g);

  	$(document).ready(function() {
  	
	  	for (i=0; i<projTitles.length; i++){

			if(i==0){
				$( "<div class='project proj_"+i+"'>"+
						"<div class='text'>"+
							"<p class='title'><a target='_blank' href='"+projLink[i].replaceAll('<link>','').replaceAll('</>','')+"'>"+projTitles[i].replaceAll('<title>','')+
							"&nbsp;↗</a></p>"+
							"<p class='more'>"+projMore[i].replaceAll('<more>','').replaceAll('</>','')+"</p>"+
							"<p class='descr'>"+projDescr[i].replaceAll('<desc>','').replaceAll('</>','')+"</p>"+
						"</div>"+
						"<div class='figure open'>"+
							"<img src='images/"+projImages[i].replaceAll('<images>','').replaceAll('</>','')+"'>"+
						"</div>"+
					"</div>"+
				"</div>" ).appendTo($('.projects'));
			} else if(projLink[i].replaceAll('<link>','').replaceAll('</>','').length < 2) {
				$( "<div class='project proj_"+i+"'>"+
						"<div class='text'>"+
							"<p class='title unactive'>"+projTitles[i].replaceAll('<title>','').replaceAll('</>','')+"</p>"+
							"<p class='more'>"+projMore[i].replaceAll('<more>','').replaceAll('</>','')+"</p>"+
							"<p class='descr'>"+projDescr[i].replaceAll('<desc>','').replaceAll('</>','')+"</p>"+
						"</div>"+
						"<div class='figure'>"+
							"<img src='images/"+projImages[i].replaceAll('<images>','').replaceAll('</>','')+"'>"+
						"</div>"+
					"</div>"+
				"</div>" ).appendTo($('.projects'));
			} else {
				$( "<div class='project proj_"+i+"'>"+
						"<div class='text'>"+
							"<p class='title'><a target='_blank' href='"+projLink[i].replaceAll('<link>','').replaceAll('</>','')+"'>"+projTitles[i].replaceAll('<title>','')+
							"&nbsp;↗</a></p>"+
							"<p class='more'>"+projMore[i].replaceAll('<more>','').replaceAll('</>','')+"</p>"+
							"<p class='descr'>"+projDescr[i].replaceAll('<desc>','').replaceAll('</>','')+"</p>"+
						"</div>"+
						"<div class='figure'>"+
							"<img src='images/"+projImages[i].replaceAll('<images>','').replaceAll('</>','')+"'>"+
						"</div>"+
					"</div>"+
				"</div>" ).appendTo($('.projects'));
			}
	  	};
		countProjects();
	});
});

let desc_eng = [];
let desc_ita = [];
jQuery.get('projects_descr.txt', function(data) {
	var myText = data;

	const desc_eng_all = myText.match(/<desc>.*?<\/>/g);
	const desc_ita_all = myText.match(/<desc_ita>.*?<\/>/g);

	for (i=0; i<desc_eng_all.length; i++){
		desc_eng.push(desc_eng_all[i].replaceAll('<desc>','').replaceAll('</>',''));
		desc_ita.push(desc_ita_all[i].replaceAll('<desc_ita>','').replaceAll('</>',''));
	}
});*/



function toggleAbout(e) {
	$(e).toggleClass('rotated');
	$('header').toggleClass('opened');
	$('header span.name').toggleClass('invisible');
	$('header .big').toggleClass('visible');
	//if(e.classList.contains('active')){}
}
function openWork(e) {
	$(e).addClass('active');
	if(e.classList.contains('active')){
		$('main.about').removeClass('open');
		$('footer').removeClass('open');
		$('header').removeClass('open');
		$('header .openAbout').removeClass('active');
	}
}