const nav_btn = document.getElementById('nav-menu-btn');
const menuRotate = document.querySelector('.menu');
const nav_bar = document.querySelector('.nav-bar');

nav_btn.addEventListener('click',()=>{
    if(!nav_bar.classList.contains('nav-slide')){
        nav_bar.classList.add('nav-slide');
        menuRotate.style.transform = 'rotate(0deg)';
    }else{
        nav_bar.classList.remove('nav-slide');
        menuRotate.style.transform = 'rotate(90deg)';
    }
})

document.getElementById('portraiture').addEventListener('click',()=>{
    window.parent.location = '/previews/Portratiture.html';
});
document.getElementById('landscape').addEventListener('click',()=>{
    window.parent.location = '/previews/Landscape.html';
});
document.getElementById('street').addEventListener('click',()=>{
    window.parent.location = '/previews/Street_Photograph.html';
});

console.log('ส่องไรไม่รู้ รู้แต่ไอต้นหล่อมาก');
