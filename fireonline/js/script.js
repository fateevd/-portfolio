$(document).ready(function(){
$('.slider').slick({
  arrows:false,
  slidesToShow:6,
  slidesToScroll:3,
  touchThreshold:10,
  waitForAnimate:false,
  centerMode:true,
  variableWidth: true,
  infinite:true,
  speed:300,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
centerMode:true,
      }
     
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
centerMode:true,
      }
     
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
centerMode:true,
      }
     
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode:true,
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
      }
    },
  ]
});
$('.sliderbig').slick({
  arrows:true,
  slidesToShow:3,
  slidesToScroll:3,
  touchThreshold:8,
  waitForAnimate:false,
centerMode:true,
adaptiveHeight:true,
variableWidth: true,
responsive:[
  {
    breakpoint: 1100,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode:true,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
centerMode:true,
  }
},
 {
    breakpoint: 600,
    settings: {
      arrows:false,
  }
},
{
  breakpoint: 330,
  settings: {
    arrows:true,
}
},
]
});
$('.slider_comments').slick({
  arrows:true,
  slidesToShow:3,
  slidesToScroll:3,
  touchThreshold:8,
  waitForAnimate:false,
centerMode:true,
adaptiveHeight:true,
variableWidth:true,
responsive:[
  {
    breakpoint: 1100,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode:true,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
centerMode:true,
  }
},
]
});
});