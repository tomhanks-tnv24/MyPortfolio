/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};



/*==================== scroll reveal ====================*/
// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra sự tồn tại của phần tử about-img trong DOM
    if (document.querySelector('.about-img')) {
        // Cấu hình ScrollReveal
        ScrollReveal({ 
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        // Thêm hiệu ứng cho about-img
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img, .contact-info', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    } else {
        console.error('Phần tử .about-img không tồn tại trong DOM');
    }
});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: [
        '<span class="text-color-1">Hello, nice to meet you!</span>',
        '<span class="text-color-2">こんにちは、はじめまして。</span>',
        '<span class="text-color-3">안녕하세요, 만나서 반갑습니다!</span>',
        '<span class="text-color-4">你好，很高兴认识你!</span>'
    ],
    typeSpeed: 100,   // Giảm tốc độ gõ
    backSpeed: 100,    // Giảm tốc độ xóa
    backDelay: 500,    // Thay đổi thời gian chờ giữa các vòng lặp
    loop: true
});

// download CV
function downloadCV() {
    alert('Oops! The CV is currently unavailable. \nPlease try again later ^^');
}

