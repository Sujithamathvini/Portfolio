var crsr = document.querySelector("#cursor")

// move cursor
document.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    });
})

// projects - visit cursor
var visit = document.querySelector("#visit")
document.querySelectorAll(".child").forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
        gsap.to("#visit",{
            opacity: 1,
            scale: 1
        })
    })
    ele.addEventListener("mouseleave",()=>{
        gsap.to("#visit",{
            opacity: 0,
            scale: 0
        })
    })
    ele.addEventListener("mousemove",(dets)=>{
        gsap.to(visit,{
            left: dets.x+40,
            top: dets.y+10,
        })
    })
})

// cursor color change black to white and vice versa
document.querySelectorAll('#about,#projects,#projects_content,#projects_heading,#contact>#content').forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
        crsr.style.background = "#fff"
    })
})
document.querySelectorAll("#about,#projects,#projects_content,#contact>#content").forEach((ele)=>{
    ele.addEventListener("mouseleave",()=>{
        crsr.style.background = "#000"
    })
})

// navbar reveal at bottom of screen
let aboutSec = document.querySelector("#about")
let navbar = document.querySelector("#nav2")

function showmenu(){
    navbar.style.opacity=1,
    navbar.style.top='90%'
}

window.onscroll = ()=>{
    let top = window.scrollY
    let offset = aboutSec.offsetTop - 600

    if(top>=offset){
        navbar.style.opacity=1,
        navbar.style.top='90%'
    }
    else{
        navbar.style.opacity=0,
        navbar.style.top='100%'
    }
}
