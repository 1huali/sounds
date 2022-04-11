/**
Title of Project
Author Name

1. audio controls only shows at play, title  change color when is playing
*/
window.onload = function (){

    "use strict";
    
    let playlist =[];
    let audio1="assets/sounds/clouds to earth.mp3";
    let audio2= "assets/sounds/waterfalls.mp3";
    let audio3= "assets/sounds/back to reality.mp3";
    
    let audioPlayer = document.getElementById(`audio1`);

    //set current
    let currentTrack = audio1;
    
    //set previous to null
    let previousTrack =null;
    
    //to keep track of who is playing
    let currentTrackIndex = 0;
    
    //push the actual tracks :)
    playlist.push(audio1);
    playlist.push(audio2);
    playlist.push(audio3);
    
    let nextButton= document.getElementById(`nextButton`);
    let previousButton = document.getElementById(`previousButton`);
    // window.requestAnimationFrame(animate)
    
    nextButton.addEventListener("click", function (event){

    
    if(previousTrack!==null){
        audioPlayer.pause(); 
    }
    
    
    currentTrackIndex++;
    
    if(currentTrackIndex === playlist.length){
        currentTrackIndex =0;
    
    }
    currentTrack = playlist[currentTrackIndex];
    console.log(currentTrack);
    console.log(previousTrack);
      
    audioPlayer.src= currentTrack;
    //resets the pointer on the player 
    audioPlayer.currentTime=0;
    audioPlayer.play();
    titleChange();
    previousTrack =currentTrack;

    });

    previousButton.addEventListener("click", function (event){

        if(currentTrack!==null){
            audioPlayer.pause(); 
        }
        
        
        currentTrackIndex--;
        
        if(currentTrackIndex ===-1){
            currentTrackIndex = playlist.length-1;
        
        }
        currentTrack = playlist[currentTrackIndex];
          
        audioPlayer.src= currentTrack;
        //resets the pointer on the player 
        audioPlayer.currentTime=0;
        audioPlayer.play();
        titleChange();
    
        
    });
    
    // function animate(){
    
    function titleChange(){
        // track playing underlined
            for (let i=0; i < playlist.length; i++){
            if (i === currentTrack){
                    playlist[i].classList.remove("notPlayingTrack");
          playlist[i].classList.add("playingTrack");
          }
        
    }
    
    }
    // }
} //end onLoad