const counter = document.getElementById('counter');
const vid = document.querySelector('.vid');
const birthdayDate = 11;
const birthdayMonth = 7;

setInterval(()=>{
    let time = new Date();
    let date = time.getDate();
    let month = time.getMonth() + 1;
    let s = 60 - time.getSeconds();
    let m = 60 - time.getMinutes();
    let h = (24 * (birthdayDate - date)) - time.getHours();

    if(month == birthdayMonth && date == birthdayDate){
        counter.innerHTML="";
        // setInterval(birthday, 300);
    }
    else{
        if(s<10){
            s = "0" + s;
        }
        if(m < 10){
            m = "0" + m;
        }
        if(h < 10 && h > -1){
            h = "0" + h;
        }
        counter.innerHTML = `${h}:${m}:${s}`;
    }
})


function birthday(){
    const totalImg = 26;
    const getImg = 100 + Math.floor(Math.random() * totalImg) + 1;
    console.log(getImg);
    const container = document.querySelector('.container');
    var size = 200 + Math.random() * 60;
    if(screen.width <= 768){
        var size = 100 + Math.random() * 60; 
    }
    const createElement = document.createElement('span');

    createElement.style.width = size + "px";
    createElement.style.height = size +"px";
    createElement.style.left = Math.random() * innerWidth + "px";
    createElement.style.backgroundImage = `url(./img/${getImg}.jpeg)`;
    container.appendChild(createElement);

    // videoPlay();
    setTimeout(()=>{
        createElement.remove()
    }, 10000);
}
// setInterval(birthday, 300);
const t = new Date();
const d = t.getDate();
const mon = t.getMonth() + 1; 
if(mon == birthdayMonth && d == birthdayDate){
    vid.style.display = "block";
    setTimeout( () => {
        // vid.style.display = "none";
        if(screen.width <= 768){
            setInterval(birthday, 1000); 
        }
        else{
            setInterval(birthday, 200);
        }
         
    }, 100)
    
}
// counter.innerHTML = vid;
