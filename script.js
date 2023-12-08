const cartoonAudio = new Audio('./music/Dive.mp3');
const forceAudio = new Audio('./music/Dont.mp3');
const squeakyAudio = new Audio('./music/Shape of You.mp3');
const hopeAudio = new Audio('./music/Photograph.mp3');
const janjiAudio = new Audio('./music/Thinking Out Loud.mp3');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: cartoonAudio, audioName: 'Dive by Ed Sheeren' },
  { ele: forceAudio, audioName: 'Dont by Ed Sheeren' },
  { ele: squeakyAudio, audioName: 'Shape of You by Ed Sheeren' },
  { ele: hopeAudio, audioName: 'Photograph by Ed Sheeren' },
  { ele: janjiAudio, audioName: 'Thinking Out Loud by Ed Sheeren' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}
