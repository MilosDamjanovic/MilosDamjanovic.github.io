$(document).ready(function(){
			//menjanje pozadine i boje naslova 
			$(".naslovi").hover(function(){
				$(this).css("border", "4px dashed orange");				
			}, function() {
				$(this).css("background-image", "url('img/gray.jpg')", "padding", "10px 10px 15px 15px");
			})

			//skill set

			 $("#skills h3.skill-name[data-type='oop']").css("background-color", "#2982D0");
			 $("#skills h3.skill-name[data-type='front-end']").css("background-color", "#e6e600");
			 $("#skills h3.skill-name[data-type='back-end']").css("background-color", "#b32400");
			 $("#skills h3.skill-name[data-type='cms']").css("background-color", "#66a3ff");
			 $("#skills h3.skill-name[data-type='stats']").css("background-color", "#00cc00");

			 //smooth scrolling
			 $("a").on('click', function(event) {
			    if (this.hash !== "") {
			      event.preventDefault();
			      var hash = this.hash;

			      $('html, body').animate({
			        scrollTop: $(hash).offset().top
			      }, 950, function(){
			   
			        window.location.hash = hash;
			      });
			    } 
			  });

	});