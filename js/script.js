// Refer the UI Elements
const cover = document.querySelector('.cover');
const playBtn = document.querySelector('#playBtn');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const fillBar = document.querySelector('#fillBar');

//Songs Data in Array of objects
const data = [{
            name: 'Tum Hi Ho-Aashiqui 2',
            artist: 'Arijit Singh',
            blur: 'blur1.png',
            cover: 'first.jpg',
            src: 'musics/first.mp3'
      },
      {
            name: 'Shayad(From "Love Aaj Kal")',
            cover: 'second.jpg',
            blur: 'blur2.png',
            artist: 'Arijit Singh',
            src: 'musics/second.mp3'
      },
      {
            name: 'Pal',
            cover: 'third.jpg',
            blur: 'blur3.png',
            artist: 'Arijit Singh',
            src: 'musics/third.mp3'
      },
      {
            name: 'Bekhayali(Arijit Singh Version)',
            cover: 'fourth.jpg',
            blur: 'blur4.png',
            artist: 'Arijit Singh',
            src: 'musics/fourth.mp3'
      }

      ,
      {
            name: 'Aaj Bhi',
            cover: 'fifth.jpg',
            blur: 'blur5.png',
            artist: 'Vishal Mishra',
            src: 'musics/fifth.mp3'
      },
      {
            name: 'Lal Chunariya',
            cover: 'sixth.jpg',
            blur: 'blur6.png',
            artist: 'Akull',
            src: 'musics/sixth.mp3'
      }

];


//Make Audio object as global object beacuse it use every where where we want to use.

const song = new Audio();

//imagine now current song is at 0th position so first songs data can be access using array of
//object
var currentSong = 0;



// Custom Function to Play the Song First Time or First Loaded Song
const playSong = () => {
      song.src = data[currentSong].src;
      $('#title').html(data[currentSong].name);
      $('#author').html('--by ' + data[currentSong].artist);
      $('.cover').css('background-image', 'url(assets/' + data[currentSong].cover + ')');
      $('#blur').css('background-image', 'url(assets/' + data[currentSong].blur + ')');
      song.play();
}
window.onload=playSong;

function isPlayed() {
      if (song.paused) {
            song.play();
            $('#play').html('pause');
      } else {
            song.pause();
            $('#play').html('play_arrow');
      }
}
playSong();

playBtn.addEventListener('click', function () {
      isPlayed();
});

nextBtn.addEventListener('click', function () {
      next();
});

prevBtn.addEventListener('click', function () {
      prev();
});

song.addEventListener('timeupdate', function () {
      var pos = song.currentTime / song.duration;
      fillBar.value = pos * 100;

});

const next = () => {
      currentSong++;
      if (currentSong > data.length) {
            currentSong = 0;
      }
      playSong();
      fillBar.value=0;
      $('#play').html('pause');
      cover.style.backgroundImage = 'url(assets/' + data[currentSong].cover + ')';

}

const prev = () => {
      currentSong--;
      if (currentSong < 0) {
            currentSong = data.length;
      }
     
      $('#play').html('pause');
      cover.style.backgroundImage = 'url(assets/' + data[currentSong].cover + ')';


}
song.onended = function () {
      next();
}