const menu = document.querySelector('.menu');
const menuList = document.querySelectorAll('li');
console.log(menuList);

let observer = new IntersectionObserver((e)=>{
    e.forEach((li)=>{
        if(li.isIntersecting){
            li.target.style.opacity = 1;
            li.target.style.transform = 'translateY(0%)'
        } else {
            li.target.style.opacity = 0;
            li.target.style.transform = 'translateY(-30%)'
        }
    })
});

// .observe() = 원하는 html요소를 감시해준다. 
// 화면에 보이는지 안보이는지 능동적으로 감시.
observer.observe(menuList[0])
observer.observe(menuList[1])
observer.observe(menuList[2])