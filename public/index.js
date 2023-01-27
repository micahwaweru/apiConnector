var refreshBtn = document.getElementById('refreshBtn');
var pauseBtn = document.getElementById('pauseBtn');
var hMove = document.getElementById('hMove');
var isPaused = false;

var pause = function(){
    hMove.classList.add('paused');
}
var resume = function(){
    hMove.classList.remove('paused');
}

var pauseBtnHandler = function(){
    console.log('Pause Btn: Animation-Play-State set to Pause')
    if(isPaused!=true){
        isPaused=true
        console.log(`Is Paused?: ${isPaused}`)
        pause();
        pauseBtn.innerHTML="Resume"
    }
    else if(isPaused!=false){
        isPaused=false
        console.log(`Is Paused?: ${isPaused}`)
        resume();
        pauseBtn.innerHTML = "Pause";
    }
}

var refreshBtnHandler = function(){
    console.log('Refresh Btn: api/vewNote/1 Route Triggered');
    location.reload();
    //http get request: /api/viewNote/1
    
}


pauseBtn.addEventListener('click',pauseBtnHandler)
refreshBtn.addEventListener('click',refreshBtnHandler)