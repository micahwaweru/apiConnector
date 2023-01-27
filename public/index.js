var refreshBtn = document.getElementById('refreshBtn');
var pauseBtn = document.getElementById('pauseBtn');
var hMove = document.getElementById('hMove');
var hItems = document.getElementsByClassName('hitem');
var isPaused = false;
var userObj = {};
var areElements = false;

var pause = function(){
    hMove.classList.add('paused');
}
var resume = function(){
    hMove.classList.remove('paused');
}
var viewNoteReq = function(){
    apiUrl = '/api/viewNote/1';
    $.ajax({
        url: apiUrl,
        type:"Get",
        success: function(result){
            console.log(result)
            userObj.userNm = result.userName;
            userObj.userDn = result.donationAmt;
            userObj.userMsg = result.chatMsg;
            tickerBuilder(userObj)
        },
        error:function(error){
            console.log(`Error ${error}`);
        }
    })
}

var elDeleter = function(){
    document.getElementById('uNField').remove();
    document.getElementById('dNField').remove();
    document.getElementById('cHField').remove();
    
}

var tickerBuilder = function(obj){

var uNField = document.createElement('div')
uNField.classList.add('hitem')
uNField.setAttribute('id','uNField')
uNField.innerHTML = `Username: ${obj.userNm}`;
hMove.appendChild(uNField);

var dNField = document.createElement('div')
dNField.classList.add('hitem')
dNField.setAttribute('id','dNField')
dNField.innerHTML = `Donation Ammount: $${obj.userDn}`;
hMove.appendChild(dNField);

var cHField = document.createElement('div')
cHField.classList.add('hitem')
cHField.setAttribute('id','cHField')
cHField.innerHTML = `Chat Message: ${obj.userMsg}`;
hMove.appendChild(cHField);

areElements = true;
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


viewNoteReq();

if(isPaused!=true){
    setInterval(()=>{
        viewNoteReq();
        elDeleter();
    },35000)
}


pauseBtn.addEventListener('click',pauseBtnHandler)
refreshBtn.addEventListener('click',refreshBtnHandler)