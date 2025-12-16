// 1. 移动端菜单控制
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.querySelector('#menu-btn i');
    menu.classList.toggle('open');
    
    if (menu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        document.body.style.overflow = 'hidden'; // 禁止背景滚动
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }
}

document.getElementById('menu-btn').addEventListener('click', toggleMenu);

// 2. Scroll Reveal Animation (滚动入场动画)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// 3. 导航栏自动高亮 (Active Link Highlighting)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
