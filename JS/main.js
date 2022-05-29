const counter1 =document.querySelector(".counter1"),
      counter2=document.querySelector(".counter2"),
      counter3=document.querySelector(".counter3"),
      counter4=document.querySelector(".counter4");


let count = 1;

setInterval( ()=>{
    if(count <= 500){
        count++;
        counter1.innerHTML = count;
        counter2.innerHTML = count;
    } 
}, 10)
setInterval( ()=>{
    if (count <= 10){
        count++;
        counter3.innerHTML = count
    }
} ,1000)
setInterval( ()=>{
    if (count <= 150){
        count++;
        counter4.innerHTML = count
    }
} ,100)


const arb = document.getElementById('arb'),
      home = document.getElementById("home"),
      about = document.getElementById("about"),
      courses =document.getElementById("courses"),
      team =document.getElementById("team"),
      Accomplishments =document.getElementById("Accomplishments"),
      gallary =document.getElementById("gallary"),
      contact=document.getElementById("contact"),
      img = document.querySelectorAll('.who img'),
      theSpan = document.querySelectorAll('.lang span'),
      icon =document.querySelectorAll( '.fa-graduation-cap' ),
      cLock =document.querySelectorAll('.fa-clock'),  
      List =document.querySelectorAll('.info'),    
      infoIcon =document.querySelectorAll('.info i'),
      locList =document.querySelectorAll('.locList'),    
      locHead =document.querySelectorAll('.head'),
      contactUs =document.querySelectorAll( ' .contact-us h3'),
      ourCourses =document.querySelectorAll('.our-courses .line'),  
      spanCourse =document.querySelectorAll('.our-courses span'),  
      Glob =document.querySelectorAll('.our-courses .fa-globe'),
      arabFooter =document.querySelectorAll('footer ul '),
      logo =document.querySelectorAll('footer .logo')

function Arabic(){
    arb.style.direction = "rtl";
    home.innerHTML =" الرئيسية " ;
    about.innerHTML ="نبذة عنا";
    courses.innerHTML="كورسات";
    team.innerHTML="فريق العمل";
    Accomplishments.innerHTML="الانجازات";
    gallary.innerHTML="المعرض";
    contact.innerHTML="تواصل معنا";
    
    img.forEach(el => {
       el.classList.add('arabImg');
    });

    theSpan.forEach(el => {
        el.classList.add('arabic')
    });   
    
    icon.forEach(el => {
        el.classList.add('arabIcon' )
    });

    List.forEach(el => {
        el.classList.add('arabInfo' )
    });

    infoIcon.forEach(el => {
        el.classList.add('infoIcon')
    });

    locList.forEach(el => {
        el.classList.add('arabLocList')
    });

    locHead.forEach(el => {
        el.classList.add('arabHeading')
    });

    arabFooter.forEach(el => {
        el.classList.add('arabFooter')
    });

    contactUs.forEach(el => {
        el.classList.add('arabContact')
    });

    ourCourses.forEach(el => {
        el.classList.add('arabCourse')
    });

    spanCourse.forEach(el => {
        el.classList.add('spanCourse')
    });

    Glob.forEach(el => {
        el.classList.add('arabGlobe')
    });

    logo.forEach(el => {
        el.classList.add('arabLogo')
    });

    cLock.forEach(el => {
        el.classList.add('arabClock')
    });

    
}

const eng = document .querySelector(".eng");
function English(){
    eng.style.direction = "ltr";
    home.innerHTML =" Home " ;
    about.innerHTML ="About-Us";
    courses.innerHTML="Courses";
    team.innerHTML=" Team";
    Accomplishments.innerHTML="Accomplishments";
    gallary.innerHTML="Gallary";
    contact.innerHTML=" Contact-Us";
    
       
    img.forEach(el => {
        el.classList.remove('arabImg');
     });
 
     theSpan.forEach(el => {
         el.classList.remove('arabic');
     });   
     
     icon.forEach(el => {
         el.classList.remove('arabIcon');
     });
 
     List.forEach(el => {
         el.classList.remove('arabInfo');
     });
 
     infoIcon.forEach(el => {
         el.classList.remove('infoIcon');
     });
     
    locList.forEach(el => {
        el.classList.remove('arabLocList');
    });
    
    locHead.forEach(el => {
        el.classList.remove('arabHeading');
    });
    
    arabFooter.forEach(el => {
        el.classList.add('arabFooter');
    });
    
    contactUs.forEach(el => {
        el.classList.remove('arabContact');
    });
    
    ourCourses.forEach(el => {
        el.classList.remove('arabCourse');
    });
    
    spanCourse.forEach(el => {
        el.classList.remove('spanCourse');
    });

    Glob.forEach(el => {
        el.classList.remove('arabGlobe');
    });
    
    logo.forEach(el => {
        el.classList.remove('arabLogo');
    });
    
    cLock.forEach(el => {
        el.classList.remove('arabClock');
    });
}



