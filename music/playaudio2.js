//모든 노래출처 https://artlist.io/ko/

"use-strict";
var inputTDV;
var rateEachIndex = [];
function loadAllMusic(){
    var musicarr = [];
    
    var audio1  = "./musicresumepicture/hopeanddreams.mp3";
    var audio2  = "./musicresumepicture/starnight.mp3";
    var audio3  = "./musicresumepicture/duda.mp3";
    var audio4  = "./musicresumepicture/cantstopwontstop.mp3";

    var audio5  = "./musicresumepicture/spicylatin.mp3";
    var audio6  = "./musicresumepicture/commingbackhome.mp3";
    var audio7  = "./musicresumepicture/hoodbabies.mp3";
    var audio8  = "./musicresumepicture/pullmecloser.mp3";
    var audio9  = "./musicresumepicture/chemtrails.mp3";
    var audio10 = "./musicresumepicture/hardway.mp3";
    var audio11 = "./musicresumepicture/dittybomb.mp3";
    var audio12 = "./musicresumepicture/makeitbreakit.mp3";
    var audio13 = "./musicresumepicture/warmup.mp3";
    var audio14 = "./musicresumepicture/howlingatthemoon.mp3";
    var audio15 = "./musicresumepicture/lovelife.mp3";
    var audio16 = "./musicresumepicture/idontgetthelesson.mp3";
    var audio17 = "./musicresumepicture/elmonte.mp3";
    var audio18 = "./musicresumepicture/rockit.mp3";
    var audio19 = "./musicresumepicture/friendtilltheend.mp3";
    var audio20 = "./musicresumepicture/tangobolero.mp3";

    musicarr[0] = audio1;
    musicarr[1] = audio2;
    musicarr[2] = audio3;
    musicarr[3] = audio4;
    musicarr[4] = audio5;
    musicarr[5] = audio6;
    musicarr[6] = audio7;
    musicarr[7] = audio8;
    musicarr[8] = audio9;
    musicarr[9] = audio10;
    musicarr[10] = audio11;
    musicarr[11] = audio12;
    musicarr[12] = audio13;
    musicarr[13] = audio14;
    musicarr[14] = audio15;
    musicarr[15] = audio16;
    musicarr[16] = audio17;
    musicarr[17] = audio18;
    musicarr[18] = audio19;
    musicarr[19] = audio20;
    
    

    
    return musicarr;
}

function loadAllImg(){
    var imgarr = [];

    var imgArea1 = "./musicresumepicture/hopeanddreams.png";
    var imgArea2 = "./musicresumepicture/starnight.png";
    var imgArea3 = "./musicresumepicture/duda.png";
    var imgArea4 = "./musicresumepicture/cantstopwontstop.png";
    
    var imgArea5 = "./musicresumepicture/spicylatin.png";
    var imgArea6 = "./musicresumepicture/commingbackhome.png";
    var imgArea7 = "./musicresumepicture/hoodbabies.png";
    var imgArea8 = "./musicresumepicture/pullmecloser.png";
    var imgArea9 = "./musicresumepicture/chemtrails.png";
    var imgArea10 = "./musicresumepicture/hardway.png";
    var imgArea11 = "./musicresumepicture/dittybomb.png";
    var imgArea12 = "./musicresumepicture/makeitbreakit.png";
    var imgArea13 = "./musicresumepicture/warmup.png";
    var imgArea14 = "./musicresumepicture/howlingatthemoon.png";
    var imgArea15 = "./musicresumepicture/lovelife.png";
    var imgArea16 = "./musicresumepicture/idontgetthelesson.png";
    var imgArea17 = "./musicresumepicture/elmonte.png";
    var imgArea18 = "./musicresumepicture/rockit.png";
    var imgArea19 = "./musicresumepicture/friendtilltheend.png";
    var imgArea20 = "./musicresumepicture/tangobolero.png";



    imgarr[0] = imgArea1;
    imgarr[1] = imgArea2;
    imgarr[2] = imgArea3;
    imgarr[3] = imgArea4;
    imgarr[4] = imgArea5;
    imgarr[5] = imgArea6;
    imgarr[6] = imgArea7;
    imgarr[7] = imgArea8;
    imgarr[8] = imgArea9;
    imgarr[9] = imgArea10;
    imgarr[10] = imgArea11;
    imgarr[11] = imgArea12;
    imgarr[12] = imgArea13;
    imgarr[13] = imgArea14;
    imgarr[14] = imgArea15;
    imgarr[15] = imgArea16;
    imgarr[16] = imgArea17;
    imgarr[17] = imgArea18;
    imgarr[18] = imgArea19;
    imgarr[19] = imgArea20;
    
    return imgarr;
}
var sliceinterval; 

var checkpointinterval;

//settime관련 함수
function plustimepoint(){
    //https://kyounghwan01.github.io/blog/JS/JSbasic/getElementById/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8 출처
    document.getElementById("musicslice").value = parseInt(document.getElementById("musicslice").value)+1;
    
    var val = parseInt(document.getElementById("musicslice").value);
    
    if((val-1) >= inputTDV){
        clearInterval(sliceinterval);
        clearInterval(checkpointinterval);
    }
}


function playmusic(){
    
    inputTDV = parseInt(document.getElementById("inputTD").value);
    if(inputTDV==0){
        //https://developer.mozilla.org/ko/docs/Web/API/Window/alert 출처
        window.alert('time duration을 적어주세요');
        return;
    }
    
    
    document.getElementById("playbtn").style.display = 'none';


    if(inputTDV <= parseInt(document.getElementById("musicslice").value)){
        return;
    }

    document.getElementById("musicslice").setAttribute('max',inputTDV);
    

    var musicarray=[];
    var imgarray=[];
    musicarray = loadAllMusic();
    imgarray = loadAllImg();

    
    var playtime;
    
    //첫시작
    var randcnt = Math.floor(Math.random()*19);
    document.getElementById("imgelement").src=`${imgarray[randcnt]}`;
    var audio = new Audio(musicarray[randcnt]);

    audio.loop = false;
    audio.play();

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName 출처
    var srcaudio = document.getElementsByClassName("srcaudio");
    for(var i=0;i<3;i++){
        srcaudio[i].setAttribute("src",musicarray[randcnt]);
        setTimeout(()=>{
            
            playtime = Math.floor(document.getElementById("Test_Audio").duration);
            console.log(playtime*1000);
        },1000);
        
    }
    
    
    
    //첫시작
    //https://ko.javascript.info/settimeout-setinterval 출처
    setInterval(()=>{
        var randcnt = Math.floor(Math.random()*19);
        document.getElementById("imgelement").src=`${imgarray[randcnt]}`;
        
        
        console.log(playtime);
        //오디오 받아오는 코드 

        srcaudio = document.getElementsByClassName("srcaudio");
        for(var i=0;i<3;i++){
            srcaudio[i].setAttribute("src",musicarray[randcnt]);
            setTimeout(()=>{
                
                playtime = Math.floor(document.getElementById("Test_Audio").duration);
                console.log(playtime*1000);
            },1000);
            
        }
        
        //https://mjmjmj98.tistory.com/31 오디오 객체 출처
        audio = new Audio(musicarray[randcnt]);
        audio.loop = false;
        audio.play();
        
        
        //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN 출처 isnan()에 대해
    },(( isNaN(playtime) ) ? 168000 : parseInt(playtime)*1000));


    
    
    
    checkpointinterval = setInterval(()=>{
        
        if(document.getElementById("musicslice").value >= inputTDV){
            for(var i=0;i<20;i++){
                //https://homzzang.com/b/js-1960 audio 플레이 앤 퍼즈 출처
                audio.pause();
                document.getElementById("imgelement").src="";
            }
        }    
    },1000);
    sliceinterval = setInterval(()=>{
        plustimepoint();
    },1000);

};
var min;
function btn1act(){
    document.getElementById("inputTD").value = (document.getElementById("inputTDarr1").value) * 60;
    min = document.getElementById("inputTDarr1").value;
    document.getElementById("selectedduration").innerText = `selected durtion : ${min}`;
}
function btn2act(){
    document.getElementById("inputTD").value = (document.getElementById("inputTDarr2").value) * 60;
    min = document.getElementById("inputTDarr2").value;
    document.getElementById("selectedduration").innerText = `selected durtion : ${min}`;
}
function btn3act(){
    document.getElementById("inputTD").value = (document.getElementById("inputTDarr3").value) * 60;
    min = document.getElementById("inputTDarr3").value;
    document.getElementById("selectedduration").innerText = `selected durtion : ${min}`;
}
function btn4act(){
    document.getElementById("inputTD").value = (document.getElementById("inputTDarr4").value) * 60;
    min = document.getElementById("inputTDarr4").value;
    document.getElementById("selectedduration").innerText = `selected durtion : ${min}`;
}
function btn5act(){
    document.getElementById("inputTD").value = (document.getElementById("inputTDarr5").value) * 60;
    min = document.getElementById("inputTDarr5").value;
    document.getElementById("selectedduration").innerText = `selected durtion : ${min}`;
}
function btn6act(){
    document.getElementById("inputTD").value = (document.getElementById("inputTDarr6").value) * 60;
    min = document.getElementById("inputTDarr6").value;
    document.getElementById("selectedduration").innerText = `selected durtion : ${min}`;
}