var Video1 = document.getElementById("vid1");
var Video2 = document.getElementById("vid2");
var Video3 = document.getElementById("vid3");
var Button = document.getElementById("button");



function playPause1() { 
    if (Video1.paused)
      Video1.play();
    else 
      Video1.pause(); 
  }

function playPause2() { 
    if (Video2.paused) 
      Video2.play(); 
    else 
      Video2.pause(); 
  }

function playPause3() { 
    if (Video3.paused) 
      Video3.play(); 
    else 
      Video3.pause(); 
  }