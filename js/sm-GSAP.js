$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();


  $('.top-menu').each(function(){

    //build a scene
  var ourScene8 = new ScrollMagic.Scene({
      triggerElement: '#news',
      triggerHook: 0.2,
      reverse: true
  })
  .setClassToggle(this, 'fix-bar') //add class to section1-pic
  .addTo(controller);
  });


  $('.news1').each(function(){

    //build a scene
  var ourScene25 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      reverse: false
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

  $('.news1-pic').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: false
  })
  .setClassToggle(this, 'fade-in-left') //add class to section1-pic
  .addTo(controller);
  });

  $('.news1-list').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: false
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

  $('.news2').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

  $('.inter-wrapper').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

  $('.inter-list').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

  $('.inter-pic').each(function(){

    //build a scene
  var ourScene13 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in-left') //add class to section1-pic
  .addTo(controller);
  });

  $('.album-wrapper').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

  $('.index-belt').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });


});
