/* ======================================================
   FILE: scripts.js
   Logika untuk animasi scroll DAN menu burger
   ====================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // === KODE ANIMASI SCROLL (YANG SUDAH ADA) ===
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach(target => {
        observer.observe(target);
    });


    // ===================================
    // === KODE MENU BURGER (BARU) ===
    // ===================================
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;

    // Tambahkan event listener saat burger di-klik
    burger.addEventListener('click', () => {
        // Toggle (tambah/hapus) kelas 'nav-active' pada <ul>
        nav.classList.toggle('nav-active');
        
        // Toggle (tambah/hapus) kelas 'burger-active' pada icon burger
        burger.classList.toggle('burger-active');
        
        // Mencegah scrolling di background saat menu terbuka
        if (nav.classList.contains('nav-active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
    
    // Tutup menu saat link di klik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('burger-active');
            body.style.overflow = '';
        });
    });

});