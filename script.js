const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const backgroundImage = document.querySelector('#background-image');
// song titles
const songs=['Non-Stop-Pop','Radio-Mirror-Park','Flash','MSX','K109',`Rebel-Radio
`,'The-Beat','Vladivostok','Radio-Vice-City','Still-Slippin','Fever','Radio-Los-Santos','Integrity'
,'WKTT','Los-Pollos','Blue-Ark'];
//keep track of songs
let songIndex = 0;
//inital load song info DOM
loadSong(songs[songIndex]);
//update song deets
function loadSong(song){
    title.innerText = song;
    audio.src=`radios/${song}.mp3`;
    cover.src=`radioImage/${song}.jpg`;
    backgroundImage.src=`radioBackground/${song}.jpg`;

}
function startSong(LoadSong){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    console.log(audio.duration);
    console.log(audio.duration * Math.random());
    audio.play();
}

function playSong(){
musicContainer.classList.add('play');
playBtn.querySelector('i.fas').classList.remove('fa-play');
playBtn.querySelector('i.fas').classList.add('fa-pause');
console.log(audio.duration);
console.log(audio.duration * Math.random());
audio.play();


}
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong(){
songIndex--
if(songIndex <0){
    songIndex = songs.length -1;
}
loadSong(songs[songIndex])
playSong();
}
function nextSong(){
    songIndex++
    if(songIndex> songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex])
    
    
    playSong();
}
function updateProgress(e){
const { duration, currentTime } = e.srcElement;
const progressPercent = (currentTime / duration)*100;
progress.style.width=`${progressPercent}%`;
}

function setProgress(e){
    const width =this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime=(clickX/width) * duration;

}
function loopSong(){
    audio.currentTime=0;
    playSong();
}

//event listners 
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()

    }else{
        playSong()
    }
})

//change song events
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);

audio.addEventListener('timeupdate',updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended',loopSong);


let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})