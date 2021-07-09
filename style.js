// var audio = document.getElementById("sounds");
// audio.play();

var audio = new Audio('./songs/C.mp3');

function playAudio(audioName) {

    audio.src = "./songs/" + audioName + ".mp3";
    audio.play();
}

a
/*udio.addEventListener('click', function () {
    audio.play("A");
})
*/
document.getElementById('a').addEventListener('click', function () {
    setAllOpacityZero();
    playAudio("A");
    document.getElementById('fadeouta').style.opacity = '1';
    document.getElementById('schumann').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#CD5334';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeouta').style.opacity = '0';
        document.getElementById('schumann').style.opacity = '0';
    }, 5000);
})
document.getElementById('b').addEventListener('click', function () {
    setAllOpacityZero();
    playAudio("B");
    document.getElementById('fadeoutb').style.opacity = '1';
    document.getElementById('paganini').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#FFFFB3';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeoutb').style.opacity = '0';
        document.getElementById('paganini').style.opacity = '0';
    }, 5000);
})

document.getElementById('c').addEventListener('click', function () {
    setAllOpacityZero();
    playAudio("C");
    document.getElementById('fadeoutc').style.opacity = '1';
    document.getElementById('chopin').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#002500';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeoutc').style.opacity = '0';
        document.getElementById('chopin').style.opacity = '0';
    }, 5000);
})


document.getElementById('d').addEventListener('click', function () {
    setAllOpacityZero();
    playAudio("D");
    document.getElementById('fadeoutd').style.opacity = '1';
    document.getElementById('beethoven').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#929982';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeoutd').style.opacity = '0';
        document.getElementById('beethoven').style.opacity = '0';
    }, 5000);
})

document.getElementById('e').addEventListener('click', function () {
    setAllOpacityZero();
    playAudio("E");
    document.getElementById('fadeoute').style.opacity = '1';
    document.getElementById('brahms').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#EDCBB1';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeoute').style.opacity = '0';
        document.getElementById('brahms').style.opacity = '0';
    }, 5000);
})

document.getElementById('f').addEventListener('click', function () {
    setAllOpacityZero()
    playAudio("F");
    document.getElementById('fadeoutf').style.opacity = '1';
    document.getElementById('debussy').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#B7245C';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeoutf').style.opacity = '0';
        document.getElementById('debussy').style.opacity = '0';
    }, 5000);
})

document.getElementById('g').addEventListener('click', function () {
    setAllOpacityZero();
    playAudio("G");
    document.getElementById('fadeoutg').style.opacity = '1';
    document.getElementById('albinoni').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#7C3238';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeoutg').style.opacity = '0';
        document.getElementById('albinoni').style.opacity = '0';
    }, 5000);
})

document.getElementById('c2').addEventListener('click', function () {
    setAllOpacityZero();
    playAudio("C");
    document.getElementById('fadeoutc').style.opacity = '1';
    document.getElementById('chopin').style.opacity = '1';
    let key = this;
    key.style.backgroundColor = '#E8D7F1';
    setTimeout(function () {
        key.style.backgroundColor = 'transparent';
    }, 500);
    setTimeout(function () {
        document.getElementById('fadeoutc').style.opacity = '0';
        document.getElementById('chopin').style.opacity = '0';
    }, 5000);
})

function setAllOpacityZero() {

    document.getElementById('fadeouta').style.opacity = '0';
    document.getElementById('schumann').style.opacity = '0';
    document.getElementById('fadeoutb').style.opacity = '0';
    document.getElementById('paganini').style.opacity = '0';
    document.getElementById('fadeoutc').style.opacity = '0';
    document.getElementById('chopin').style.opacity = '0';
    document.getElementById('fadeoutd').style.opacity = '0';
    document.getElementById('beethoven').style.opacity = '0';
    document.getElementById('fadeoutf').style.opacity = '0';
    document.getElementById('debussy').style.opacity = '0';
    document.getElementById('fadeoutg').style.opacity = '0';
    document.getElementById('albinoni').style.opacity = '0';
    document.getElementById('fadeoute').style.opacity = '0';
    document.getElementById('brahms').style.opacity = '0';
}

function changeImage() {

    if (document.getElementById("c").src == "./images/.chopin.jpeg") {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
    } else {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    }
}
/* 
    
    window.onload = function () {
         window.setTimeout(fadeout, 1000); //1 seconds
     }
     var image = new Image('./images/.jpeg');

     function showImage(imageName) {

         image.src = "./images/" + imageName + ".jpeg";
         image.show();
     }

     document.getElementById('c').addEventListener('click', function () {
         showImage("Chopin");
     })

     document.getElementById('c').addEventListener('click', function () {
         showImage("brahms");
     })
     document.getElementById('c').addEventListener('click', function () {
         showImage("debussy");
     })
     document.getElementById('c').addEventListener('click', function () {
         showImage("Albinoni");
     })
     document.getElementById('c').addEventListener('click', function () {
         showImage("schuhmann");
     })
     document.getElementById('c').addEventListener('click', function () {
         showImage("Beethoven");
     })
*/
