console.log("Welcome to spotify")
//Intializing the variables
let songIndex = 0;
let audio = new Audio("./songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById("myProgressBar");
let songInformation = document.getElementById("songInformation");
let songInfo = document.getElementsByClassName("songInfo");
let Item = Array.from(document.getElementsByClassName("musicItem"));
let songPlay = Array.from(document.getElementsByClassName("songPlay"));
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let songs = [
  {
    songName: "          Karma ",
    filepath: "./songs/1.mp3",
    coverpath: "./covers/1.jpg",
  },
  {
    songName: "  MahaBharat  ",
    filepath: "./songs/2.mp3",
    coverpath: "./covers/2.jpg",
  },
  {
    songName: "  Jai Shree Ram  ",
    filepath: "./songs/3.mp3",
    coverpath: "./covers/3.jpg",
  },
  {
    songName: "      Mehbooba ",
    filepath: "./songs/4.mp3",
    coverpath: "./covers/4.jpg",
  },
  {
    songName: "  Ram Siya Ram  ",
    filepath: "./songs/5.mp3",
    coverpath: "./covers/5.jpg",
  },
  { 
    songName: "   Massu Maranam",
    filepath: "./songs/6.mp3",
    coverpath: "./covers/6.jpg",
  },
  {
    songName: "Khulke Jeene ka ",
    filepath: "./songs/7.mp3",
    coverpath: "./covers/7.jpg",
  },
  {
    songName: "           Panjaa     ",
    filepath: "./songs/8.mp3",
    coverpath: "./covers/8.jpg",
  }
];

//inserting
songs.forEach((element, i) => {
  document.getElementsByClassName("img1")[i].src = songs[i].coverpath;
  document.getElementsByClassName("songName")[i].innerText = songs[i].songName;
});
//playing an audio
masterplay.addEventListener("click", function () {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    songInformation.style.opacity = 1;
  } else if (audio.played) {
    audio.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    songInformation.style.opacity = 0;
  }
});
//events
audio.addEventListener("timeupdate", function () {
  let percentage = parseInt((audio.currentTime / audio.duration) * 100); //p=(ct/d)*100;
  progressbar.value = percentage;
});
progressbar.addEventListener("change", function () {
  audio.currentTime = (progressbar.value * audio.duration) / 100;
});
const musicAllPlays=()=>{
  songPlay.forEach((element)=>{
      element.classList.remove("fa-circle-pause")
      element.classList.add("fa-circle-play")
})
}
songPlay.forEach((element)=>{
  element.addEventListener("click",(e)=>{
    musicAllPlays();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove("fa-circle-play")
    e.target.classList.add("fa-circle-pause")
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    audio.src = ("./songs/" + (songIndex) +".mp3")
    audio.play();
    audio.currentTime = 0;
    songInformation.innerText = songs[songIndex].songName
  })
})
backward.addEventListener("click",()=>{
  if (songIndex<=1){
    songIndex = 1
  }
  else{
    songIndex -= 1;
  }
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  audio.src = ("./songs/" + (songIndex) +".mp3")
  audio.play();
  playingSongName
  audio.currentTime = 0;
  songInformation.innerText = songs[songIndex].songName
})
forward.addEventListener("click",()=>{
  if (songIndex>=9){
    songIndex = 9
  }
  else{
    songIndex += 1;
  }
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  audio.src = ("./songs/" + (songIndex) +".mp3")
  audio.play();
  audio.currentTime = 0;
  songInformation.innerText = songs[songIndex].songName
})
console.log("The Project is End")