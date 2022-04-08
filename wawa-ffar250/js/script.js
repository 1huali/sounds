/**
Title of Project
Author Name

1. audio controls only shows at play, title  change color when is playing
*/
window.onload = function (){

    "use strict";
    
    let playlist =[];
    let audio1= document.getElementById(`audio1`);
    let audio2= document.getElementById(`audio2`);
    let audio3= document.getElementById(`audio3`);
    
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
    
    // window.requestAnimationFrame(animate)
    
    nextButton.addEventListener("click", function (event){
        
    //currentTrack=`audio1`
    
      //  for (let i=0; i < playlist.length; i++){
    
    if(previousTrack!==null){
        previousTrack.pause(); 
    }
    
    currentTrack.play();
    previousTrack =currentTrack;
    
    currentTrackIndex++;
    
    if(currentTrackIndex === playlist.length){
        currentTrackIndex =0;
    
    }
    currentTrack = playlist[currentTrackIndex];
    console.log(currentTrack);
    console.log(previousTrack);
         
    });
    
    // function animate(){
    
    // function titleChange(){
        // track playing underlined
        //     for (let i=0; i < playlist.length; i++){
                //     playlist[i].element.classList.remove(playlist[currentTrackIndex]);
    
        //   playlist[i].element.classList.add(playlist[currentTrackIndex]);
        
    
    
        //   if (currentTrackIndex===3){
        //     playlist[i].element.textContent="";
        //   } else {
        //     playlist[i].element.textContent=playlist[i].trackDisplayText;
        //   }
        
    // }
    
    // }
    }