
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Threshold to prevent jitter

    // Toggle Menu
    menuBtn.addEventListener('click', () => {
        // We use translate-x-full to check state (hidden off-screen)
        const isClosed = mobileMenu.classList.contains('translate-x-full');
        
        if (isClosed) {
            // Open Menu: Slide in
            mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'invisible', 'pointer-events-none');
            mobileMenu.classList.add('translate-x-0', 'opacity-100', 'visible', 'pointer-events-auto');
            
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>';
            
            // Ensure header is visible and opaque when menu is open
            header.style.transform = 'translateY(0)';
            header.classList.add('bg-black/95', 'backdrop-blur-md', 'border-zinc-800');
        } else {
            // Close Menu: Slide out
            mobileMenu.classList.add('translate-x-full', 'opacity-0', 'invisible', 'pointer-events-none');
            mobileMenu.classList.remove('translate-x-0', 'opacity-100', 'visible', 'pointer-events-auto');
            
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
        }
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full', 'opacity-0', 'invisible', 'pointer-events-none');
            mobileMenu.classList.remove('translate-x-0', 'opacity-100', 'visible', 'pointer-events-auto');
            
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
        });
    });

    // Scroll Effect (Background & Hide/Show)
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Prevent negative scroll values (bounce on mobile)
        if (scrollTop < 0) scrollTop = 0;

        // Background consistency
        if (scrollTop > 50) {
            header.classList.add('bg-black/95', 'backdrop-blur-md', 'border-zinc-800', 'py-4');
            header.classList.remove('bg-transparent', 'border-transparent', 'py-6');
        } else {
            // Only transparent if menu is closed
            if (mobileMenu.classList.contains('translate-x-full')) {
                header.classList.remove('bg-black/95', 'backdrop-blur-md', 'border-zinc-800', 'py-4');
                header.classList.add('bg-transparent', 'border-transparent', 'py-6');
            }
        }

        // Hide/Show Logic
        // Only trigger if not at the very top AND menu is closed
        if (scrollTop > 100 && mobileMenu.classList.contains('translate-x-full')) {
            // Check threshold to prevent jitter
            if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
                if (scrollTop > lastScrollTop) {
                    // Scrolling Down -> Hide
                    header.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling Up -> Show
                    header.style.transform = 'translateY(0)';
                }
                lastScrollTop = scrollTop;
            }
        } else {
            // At top or menu open -> Show
            header.style.transform = 'translateY(0)';
            lastScrollTop = scrollTop; // Sync
        }
    });
});
