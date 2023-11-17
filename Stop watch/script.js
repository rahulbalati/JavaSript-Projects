let [hours,minute,second]=[0,0,0];
let displaytime=document.getElementById('displaytime');
let timer=null;

function stopwatch(){
    second++;
    if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minute<10?"0"+minute:minute;
    let s=second<10?"0"+second:second;
    displaytime.innerHTML=h+":"+m+":"+s;
}
function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
   timer=setInterval(stopwatch,1000);
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    [hours,minute,second]=[0,0,0];
    displaytime.innerHTML="00:00:00"
}