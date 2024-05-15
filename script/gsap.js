// trigger
const aboutMenu = document.querySelector('.menu');
 // gsap.timeline() 으로 시간 순으로 애니메이션 연속 사용.
 const menuScroll = gsap.timeline();
// 대상을 설정하고 애니메이션 각각 지정하기.
 menuScroll.from(".menu .li1", {y: -100, autoAlpha:0})
     .from(".menu .li2", {y: 100, autoAlpha:0})
     .from(".menu .li3", {y: -100, autoAlpha:0})

 ScrollTrigger.create ({
     animation: menuScroll,
     trigger: aboutMenu,
     start: "top top",
     end: "+=1500",
     scrub: true,
     pin: true, 
    //  요소를 자연스럽게 한다.
     anticipatePin: 1,
     markers: false,
 });

