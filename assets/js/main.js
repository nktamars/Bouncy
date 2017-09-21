//////////////////FILTER////////////////
$(function() {

  let portfolioList = $('.portfolio__list');

  portfolioList.imagesLoaded(function() {
    portfolioList.isotope({
      itemSelector: '.portfolio__item',
      columnWidth: '.grid-sizer',
      
    });
  });

  $("[data-filter]").on("click", function(e) {
    e.preventDefault();
    let selector;
    $("[data-filter]").removeClass("filters__link--active");
    $(this).addClass("filters__link--active");
    if ($(this).data("filter") == "all") {
      selector = "*";
    } else {
      selector = '[data-type="' + $(this).data("filter") + '"]';
    }
    portfolioList.isotope({
      filter: selector
    });
  });
});


//////////////////SLIDER1////////////////

var mySiema = new Siema({
  loop: true
});

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener('click', function() {
  return mySiema.prev(1);
});
next.addEventListener('click', function() {
  return mySiema.next(1);
});
////////////////SLIDER2//////////////

$('.testimonials__sl').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true
});


///////////MAP//////////////////

function initMap() {
  let styledMapType = new google.maps.StyledMapType();
  let coords = {
    lat: 50.2546448,
    lng: 28.6564205
  };
  let popupContent = '<p class="content">Дом Правосудия</p>';
  let map = new google.maps.Map(document.querySelector('.map'), {
    center: {
      lat: 50.2546448,
      lng: 28.6564205
    },
    zoom: 16,
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        'styled_map'
      ]
    }

  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
  let markerImage = {
    url: "http://icon-icons.com/icons2/317/PNG/512/map-marker-icon_34392.png",

    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)

  };
  let marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: markerImage
  });

  infowindow = new google.maps.InfoWindow({
    content: popupContent
  });
  infowindow.open(map, marker);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}



/////////////////////ACTIVE NAV//////////////////
document.addEventListener('DOMContentLoaded', function() {
  let links = Array.from(document.querySelectorAll('.header__link'));
  for (i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      links.forEach((link) => {
        if (link.classList.contains('is--active')) link.classList.remove('is--active');
      });
      this.classList.add('is--active');
    });
  }
});
////////////////////SMOOTH SCROLL/////////////////

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });
