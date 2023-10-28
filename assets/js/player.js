$(document).ready(function(){
    var songis = document.getElementById("music");
    
    $("#music").each(function(){
        var mp3 = $.trim($(this).attr("src"));
        mp3 = mp3.replaceAll("?dl=0","");
        $(this).attr("src",mp3)
    })

    $(".circ").each(function(){
        $(this).append("<div class='play-btn'>");
        $(this).append("<div class='equalizer-bar'>");
    })
    
    $(".circ .equalizer-bar").each(function(){
        $(this).prepend("<div class='bar'>");
        for(var idkloops=0; idkloops<5; ++idkloops){
            $(this).find(".bar").append("<div class='equalizer'>");
        }
    })

    setTimeout(function(){

        setTimeout(function(){
            $(".player").css({
                "visibility":"visible",
                "opacity":"1"
            });
        },)

        $(".circ").click(function(){
            if(songis.paused){
                songis.play();
                $(".profile-image").html("<div class='album-art'></div>");
                $(".profile-name").show().html("The Cranberries")
			.addClass("bounceInLeft");
			setTimeout( function(){ 
					$(".profile-name").removeClass("bounceInLeft");
				}, 3000 );

                $(".profile-text").show().html("Zombie")
			.addClass("bounceInRight");
			setTimeout( function(){ 
					$(".profile-text").removeClass("bounceInRight"); 
				}, 3000 );
       
                $(".play-btn").hide();
                $(".equalizer-bar").show();
                $(".current-status").hide();

            } else {
                songis.pause();
                $(".album-art").hide().html("<div class='profile-image'></div>");
                $(".play-btn").show();
                $(".equalizer-bar").hide();
                $(".current-status").show();
                $(".profile-name").show().html("Gabi")
			.addClass("bounceInLeft");
			setTimeout( function(){ 
					$(".profile-name").removeClass("bounceInLeft");
				}, 3000 );
                $(".profile-text").show().html("I Love Butterflys")
			.addClass("bounceInRight");
			setTimeout( function(){ 
					$(".profile-text").removeClass("bounceInRight"); 
				}, 3000 );


            }
        })

        var ap = $("#music").attr("autoplay");
        
        $("#music[autoplay]").each(function(){
            $(this).removeAttr("autoplay");
            $(this).addClass("ap-yes");
        })
        
        if($("#music").hasClass("ap-yes")){
            $(".play-btn").hide();
            $(".equalizer-bar").show();
            if(songis.paused){
                songis.play();
            }
			
			$(window).load(function(){
				if(songis.paused){
					songis.play();
				}
			});
        }
        songis.onended = function(){
                $(".play-btn").show();
                $(".equalizer-bar").hide();
                $(".current-status").show();
                $(".album-art").hide().html("<div class='profile-image'></div>");
                $(".profile-name").show().html("Gabi")
			.addClass("bounceInLeft");
			setTimeout( function(){ 
					$(".profile-name").removeClass("bounceInLeft");
				}, 3000 );
                $(".profile-text").show().html("I Love Butterflys")
			.addClass("bounceInRight");
			setTimeout( function(){ 
					$(".profile-text").removeClass("bounceInRight"); 
				}, 3000 );
        }
    },420)
})