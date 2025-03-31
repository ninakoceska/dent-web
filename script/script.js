
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
    document.getElementById("pp-frame").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11774.780570472481!2d21.392103736362266!3d41.99795772629826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c0dddbd261fe607%3A0xd615f4221bd98d5e!2z0JTRgC4g0I_QsNC80LHQsNC30L7QstGB0LrQuCAtIERyLiBEemFtYmF6b3Zza2k!5e0!3m2!1smk!2smk!4v1733450276467!5m2!1smk!2smk";
}

function locationSK() {
    document.getElementById("pp-frame").src="";
    document.getElementById("pp-frame").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11774.780570472481!2d21.392103736362266!3d41.99795772629826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c0dddbd261fe607%3A0xd615f4221bd98d5e!2z0JTRgC4g0I_QsNC80LHQsNC30L7QstGB0LrQuCAtIERyLiBEemFtYmF6b3Zza2k!5e0!3m2!1smk!2smk!4v1733450276467!5m2!1smk!2smk";
    // document.getElementById("sk-frame").style.display = "flex";

    document.getElementById("info-sk").style.display = "flex";
    document.getElementById("info-pp").style.display = "none";


}

function locationPP() {
    document.getElementById("pp-frame").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.204169083656!2d21.54599161709484!3d41.34402980291249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1356ebe0de86137b%3A0x214aff6a3c29fbca!2z0JTRgC4g0I_QsNC80LHQsNC30L7QstGB0LrQuCAtIERyLiBEemFtYmF6b3Zza2k!5e0!3m2!1smk!2smk!4v1733450607750!5m2!1smk!2smk";
    // document.getElementById("sk-frame").style.display = "none";

    document.getElementById("info-sk").style.display = "none";
    document.getElementById("info-pp").style.display = "flex";

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
