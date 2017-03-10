
        
        var ctlscroll = false;

        $(document).ready(function () {
          $(window).scroll(function(){
              if(ctlscroll) {
                console.log("ligando scroll");
                $(document).on("scroll", onScroll);  
              }
            });

          $(document).on("scroll", onScroll);
                                 
          //smoothscroll
          $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            ctlscroll = false;
            
            $(document).off("scroll");
            var $anchor = $(this);
                                 
            if (!(($anchor).hasClass('grid'))) {   

              $('a').each(function () {
                $(this).removeClass('active');
              })


              $('nav a').each(function() {
                 var menu_href = $(this).attr('href');
                 var link_href = $($anchor).attr('href');

                 if (menu_href == link_href) {
                  $(this).addClass('active'); 
                 }

              });

              $('body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
              }, 1500,'easeInOutExpo', function() {
                    ctlscroll = true;
                  
              });

          }
                              
          });
        });

        function onScroll(event){
          var scrollPos = $(document).scrollTop();
          $('.navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('nav a').removeClass("active");
              currLink.addClass("active");
            }
            else{
              currLink.removeClass("active");
            }
          });
        }
      