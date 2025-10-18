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
                
                // Berhenti mengamati elemen ini setelah animasi berjalan
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
    // === KODE FORM KONTAK (DIPERBARUI DENGAN LOGIKA BARU ANDA) ===
    // ===================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) { // Pastikan form ada
        contactForm.addEventListener('submit', function(event) {
            
            // 1. Hentikan form agar tidak terkirim
            event.preventDefault();

            // 2. Ambil nilai input (logika baru yang lebih aman)
            const name = (document.getElementById('name') || { value: '' }).value.trim();
            const email = (document.getElementById('email') || { value: '' }).value.trim();
            const message = (document.getElementById('message') || { value: '' }).value.trim();

            // 3. Atur email penerima
            const to = 'aqilahbalais@gmail.com'; // <-- Email Anda
            
            // 4. Siapkan Subjek dan Body
            const subject = encodeURIComponent(`Portofolio Contact — ${name || 'Visitor'}`);
            // Buat body dengan baris baru (%0D%0A atau \r\n)
            const bodyPlain = [
              `Name: ${name || '-'}`,
              `Email: ${email || '-'}`,
              '',
              'Message:',
              message || '-'
            ].join('\r\n');
            const body = encodeURIComponent(bodyPlain);

            // 5. Buat link mailto:
            const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

            // 6. Coba buka aplikasi email (Mobile/Desktop App)
            window.location.href = mailto;

            // 7. Fallback: Buka Gmail di tab baru (untuk Desktop non-app)
            try {
              const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
              if (!isMobile) {
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;
                // Buka di tab baru
                window.open(gmailUrl, '_blank');
              }
            } catch (err) {
              // jika error, biarkan saja (mailto sudah dijalankan)
              console.warn('Gagal membuka Gmail web sebagai fallback:', err);
            }
        });
    }
    
});