$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();


  $('.news1').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

  $('.news1-pic').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: true
  })
  .setClassToggle(this, 'fade-in-left') //add class to section1-pic
  .addTo(controller);
  });

  $('.news1-list').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      reverse: true
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


});
