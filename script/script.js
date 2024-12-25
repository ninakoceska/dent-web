
var a = 0;
function myFunction() {

    const myList = document.getElementById('main-nav')
    const div = document.getElementById('mobile-menu');
    const header = document.getElementById('header');
    if(a===0) {
        a=1;
        const clonedList = myList.cloneNode(true);
        div.innerHTML = ``;
        div.appendChild(myList);

        header.style.height = '20em'

        div.style.display = 'flex';
        div.style.height = '11em'
        div.style.flexDirection = 'column';

        myList.style.width = '100%';

        nav = document.getElementById('main-nav');
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.backgroundColor = '#f3f3eb'

    }else{
        myList.style.display = 'none';
        div.style.display = 'none';
        header.style.height = '9em'
        a=0;

    }
}

window.onload=function(){
    document.getElementById("pp-frame").style.display = "none";
}

function locationSK() {
    document.getElementById("pp-frame").style.display = "none";
    document.getElementById("sk-frame").style.display = "flex";

    document.getElementById("info-sk").style.display = "grid";
    document.getElementById("info-pp").style.display = "none";


}

function locationPP() {
    document.getElementById("pp-frame").style.display = "flex";
    document.getElementById("sk-frame").style.display = "none";

    document.getElementById("info-sk").style.display = "none";
    document.getElementById("info-pp").style.display = "grid";

}

function makeCall() {
    window.location.href = "tel:+38977840982";
}

function openService(a){
    window.location.href=a
}

function openIndex(){
    window.location.href='index.html'
}

function openIndex2(){
    window.location.href='../index.html'
}


// slide show
