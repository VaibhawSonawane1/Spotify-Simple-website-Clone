console.log("Welcome To spotify");

// Initialize the variable 

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    { songName:"Warriyo -mortal ",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    { songName:"cielo- huma-huma ",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    { songName:"deaf kev - invincible  ",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    { songName:"janji-heroes-tonight-feat-johning",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    { songName:"Sanam re ",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    { songName:"Agar tumh saath ho ",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    { songName:"NAvratri Special songs",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    { songName:"Musurana Vaja Tumh ho ",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    { songName:"Me Tera BoyFriend Tu meri GirlFriend",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    { songName:"Khaab Song By Akhil ",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]



songItems.forEach((element,i)=>{
    console.log(element ,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

});
/// audioElement.play();

// handle play/pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

// Listen To event 
audioElement.addEventListener('timeupdate',()=>{
    // console.log("TimeUpdate");

    // update seekbar 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100); 
    // console.log(progress);

    myProgressBar.value=progress;
});


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays=()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }


    )}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play--circle');
        e.target.classList.add('fa-pause--circle');
        console.log(e);
        
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();

        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})


document.getElementById('next').addEventListener('click',()=>{

    if(songIndex >=9)
    {
        songIndex=0;
    }

    else{
        songIndex +=1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;

    masterSongName.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})



document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex <=0)
    {
        songIndex=0;
    }

    else{
        songIndex -=1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;

    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})