// variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let now = document.getElementById('now1');
let songs = [
    {songName: "On-Time", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "On-Time", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "On-Time", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "On-Time", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "On-Time", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "On-Time", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "On-Time", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
]

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        now.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        now.style.opacity = 0;
    }
});

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate'); 
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
    })
});

document.getElementById('myProgressBar').oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' + value + '%, #fff ' + value + '%, white 100%)'
  };