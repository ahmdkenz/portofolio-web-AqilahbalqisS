/* ======================================================
   FILE: scripts.js
   Logika untuk memicu animasi saat di-scroll
   ====================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Konfigurasi observer (pemicu)
    const options = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Memicu saat 10% elemen terlihat
    };

    // Fungsi callback saat elemen terlihat
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
});