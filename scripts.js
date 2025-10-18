/* ======================================================
   FILE: scripts.js
   Logika untuk animasi scroll, menu burger, DAN form kontak
   ====================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // === KODE ANIMASI SCROLL (YANG SUDAH ADA) ===
    const options = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Memicu saat 10% elemen terlihat
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke viewport
            if (entry.isIntersecting) {
                // Tambahkan kelas 'is-visible'
                entry.target.classList.add('is-visible');
                
                // (Opsional) Berhenti mengamati elemen ini setelah animasi berjalan
                observer.unobserve(entry.target);
            }
        });
    };

    // Buat observer baru
    const observer = new IntersectionObserver(callback, options);
    // Ambil semua elemen yang ingin dianimasikan
    const targets = document.querySelectorAll('.animate-on-scroll');
    // Mulai amati setiap elemen
    targets.forEach(target => {
        observer.observe(target);
    });


    // === KODE MENU BURGER (YANG SUDAH ADA) ===
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) { // Pastikan elemen ada
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('burger-active');
        });
    }


    // ===================================
    // === KODE FORM KONTAK (BARU) ===
    // ===================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) { // Pastikan form ada
        contactForm.addEventListener('submit', function(event) {
            // Hentikan submit default untuk validasi
            event.preventDefault();

            // Validasi input form
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validasi input
            if (!name || !email || !message) {
                alert('Harap isi semua kolom sebelum mengirim pesan.');
                return;
            }
            
            // Jika validasi berhasil, kirim form secara manual
            console.log('Form valid, submitting to FormSubmit.co');
            contactForm.submit();
        });
    }
    
});