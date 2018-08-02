function main_page() {

  pepe.onclick = changeImage;
  pepe1.onclick = changeImage1;

  function changeImage() {
    var a = document.getElementById('pepe');
    if (a.src.indexOf("pepe_calm.png") > 0) {
      a.setAttribute("src", "rage_pepe_the_frog.png");
    } else {
      a.setAttribute("src", "pepe_calm.png");
    }
  }

  function changeImage1() {
    var b = document.getElementById('pepe1');
    if (b.src.indexOf("pepe_finger") > 0) {
      b.setAttribute("src", "pepe_calm.png");
    } else {
      b.setAttribute("src", "pepe_finger.png");
      b.setAttribute("height", "190px");
    }
  }

  button.onclick = rect;

  function rect() {
    var c = document.getElementById('rec');
    bro1.style.bottom = "0px";
    bro2.style.bottom = "0px";
    bro3.style.bottom = "0px";
    if (c.style.visibility === "visible") {
      c.style.visibility = "hidden";
    } else {
      c.style.visibility = "visible";
    }

  }

  bro1.onclick = function() {
    animate(function(timePassed) {
      bro1.style.bottom = timePassed / 5 + 'px';
      bro1_fire.style.bottom = timePassed / 5 + 'px';
      bro1_fire.style.visibility = 'visible';


    }, 4000);

  };


  bro2.onclick = function() {
    animate(function(timePassed) {

      bro2.style.bottom = timePassed / 5 + 'px';
      bro2_fire.style.bottom = timePassed / 5 + 'px';
      bro2_fire.style.visibility = 'visible';

    }, 4000);


  };

  bro3.onclick = function() {
    animate(function(timePassed) {

      bro3.style.bottom = timePassed / 5 + 'px';
      bro3_fire.style.bottom = timePassed / 5 + 'px';
      bro3_fire.style.visibility = 'visible';

    }, 4000);


  };

  // Рисует функция draw
  // Продолжительность анимации duration
  function animate(draw, duration) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
      // определить, сколько прошло времени с начала анимации
      var timePassed = time - start;

      // нарисовать состояние анимации в момент timePassed
      draw(timePassed);

      // если время анимации не закончилось - запланировать ещё кадр
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }

    });
  }





}


window.onload = main_page;
