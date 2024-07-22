
const cartoonAudio = new Audio('./song/KSHATRAVEER _ GOVIND GADHVI _ KULDIP GADHVI _ OFFICIAL VIDEO.mp3');
const forceAudio = new Audio('./song/Rajbha Gadhvi __ Dwarka Na Devni To Vat J No Thay __ Okho To Duniya Thi Nokho Kevay __ New Song 2022.mp3');
const squeakyAudio = new Audio('./song/SnapSave.io - Ochhav _ Aavad Ne Bheliyo (128 kbps).mp3');
const hopeAudio = new Audio('./song/SnapSave.io - ટેંટુડો _ Geeta Rabar is Latest Hit Song _tetudo_ Taking The Internet By Storm! (128 kbps).mp3');
const janjiAudio = new Audio('./song/આંગણિયે અવસરિયો __ ANGANIYE AVSARIYO __ BHAVESH AHIR __ NEW GUJARATI SONG __ LAGAN GEET.mp3');

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: cartoonAudio, audioName: 'KSHATRAVEER' },
  { ele: forceAudio, audioName: 'Dwarka Na Devni To Vat J No Thay' },
  { ele: squeakyAudio, audioName: 'Ochhav' },
  { ele: hopeAudio, audioName: 'ટેંટુડો' },
  { ele: janjiAudio, audioName: 'આંગણિયે અવસરિયો' },
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

  if(action == 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action == 'prev'){
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
