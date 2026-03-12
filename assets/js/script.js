//AOS



// music
var tempMusic = ''
music = document.querySelector('.music')
if (tempMusic) {
    music.src = tempMusic
}

//door mulai
function mulai() {
    // back to top
    window.scrollTo(0, 0)

    // sound door
    var soundDoor = document.querySelector('.sound-door')
    soundDoor.play()

    // bottom backsoound
    document.getElementById("musicBtn").style.display = "flex";



    // door section
    var doorSection = $('#door-section')
    var doors = document.querySelectorAll('.door')
    doors.forEach(function (door, index) {
        if (index === 0) {
        door.style.transform = 'rotateY(120deg)'  // kiri
            } else {
                door.style.transform = 'rotateY(-120deg)'   // kanan
            }
    })

    setTimeout(function () {
    music.play()

    const musicButton = document.getElementById('music-button')
    musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>'
    musicButton.classList.add('rotate')

    doorSection.css('transform', 'scale(6)')
}, 1000)

    // set timeout door section
setTimeout(function () {
    doorSection.css('opacity', 0)

    // tampilkan hero
    $('#hero-section').css('display', 'flex')

    $('body').removeClass('overflow-hidden')
    $('body').addClass('transition')
    doorSection.css('display', 'none')

    // INIT AOS SETELAH SEMUA TERBUKA
    AOS.init({
        once: true,
        duration: 1200,
        offset: 120
    })
    setTimeout(function () {
    AOS.refresh()
    }, 200)

}, 2000)
}

// button music
function toggleMusic(event) {
    event.preventDefault()

    const musicButton = document.getElementById('music-button')

    if (music.paused) {
        // PLAY
        music.play()
        musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>'
        musicButton.classList.add('rotate')
    } else {
        // PAUSE
        music.pause()
        musicButton.innerHTML = '<i class="fas fa-fw fa-pause"></i>'
        musicButton.classList.remove('rotate')
    }


}

// countdown wedding
var countDownDate = new Date("March 25, 2026 09:00:00").getTime()

var x = setInterval(function() {
    var now = new Date().getTime()

    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("countdown-wedding").innerHTML = `
                <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${days}</h5>Hari</div></div>
                <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${hours}</h5>Jam</div></div>
                <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${minutes}</h5>Menit</div></div>
                <div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${seconds}</h5>Detik</div></div>
                `

    if (distance < 0) {
        clearInterval(x)
        document.getElementById("countdown-wedding").innerHTML = "<span class='text-center p-3 rounded text-light m-2'><h2>Sudah Dimulai!</h2></span>"
    }
}, 1000)

// nama sambutan
const urlParams = new URLSearchParams(window.location.search)
const panggilan = urlParams.get('p')
const nama = urlParams.get('n')

const namaSambutan = document.getElementById('nama-sambutan')

if (namaSambutan) {
    if (panggilan && nama) {
        namaSambutan.innerText = `${panggilan} ${nama},`
    } else {
        namaSambutan.innerText = "Tamu Undangan,"
    }
}

function copyText(el){

    const nomor = el.parentElement.querySelector(".card-number").innerText.replace(/\s/g,'')

    navigator.clipboard.writeText(nomor)

    el.innerHTML = "✔ Berhasil disalin"

    setTimeout(()=>{
        el.innerHTML = '<i class="fas fa-copy"></i> Copy'
    },2000)

}

const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

for(let i=0;i<120;i++){
snowflakes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
d:Math.random()*1
});
}

function drawSnow(){

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";
ctx.beginPath();

for(let i=0;i<snowflakes.length;i++){
let f=snowflakes[i];
ctx.moveTo(f.x,f.y);
ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);
}

ctx.fill();
moveSnow();
}

let angle=0;

function moveSnow(){

angle+=0.01;

for(let i=0;i<snowflakes.length;i++){

let f=snowflakes[i];

f.y+=Math.cos(angle+f.d)+1+f.r/2;
f.x+=Math.sin(angle)*2;

if(f.y>canvas.height){
snowflakes[i]={x:Math.random()*canvas.width,y:0,r:f.r,d:f.d};
}

}

}

setInterval(drawSnow,33);

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});

// youtube player control
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytvideo', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {

    var music = document.querySelector('.music');

    if(event.data == YT.PlayerState.PLAYING){
        music.pause(); // video play → backsound stop
    }

    if(event.data == YT.PlayerState.PAUSED){
        music.play(); // video pause → backsound lanjut
    }

    if(event.data == YT.PlayerState.ENDED){
        music.play(); // video selesai → backsound lanjut
    }

}

var music = document.querySelector(".music");
var btn = document.getElementById("musicBtn");

function toggleMusic(){

    if(music.paused){
        music.play();
        btn.innerHTML = "🎵";
        btn.style.transform = "rotate(0deg)";
    }else{
        music.pause();
        btn.innerHTML = "🔇";
        btn.style.transform = "scale(0.9)";
    }

}
