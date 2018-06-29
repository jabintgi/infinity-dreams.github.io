$(document).ready(function(){
    
//onload animations
    var t1=new TimelineLite();
      TweenMax.from('.heading h1' ,0.7,{opacity:0,y:500,ease: Back.easeOut.config(1.2)});
      t1.from('.heading p'  ,0.7,{opacity:0,y:500,ease: Back.easeOut.config(1.2)},0.1);
      t1.staggerFrom('.navbar-div li',0.5,{opacity:0},0.2);     
});