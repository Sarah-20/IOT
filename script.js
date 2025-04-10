let menu = document.querySelector("#menu-icon");
        let navbar = document.querySelector(".navbar");
    
        menu.onclick = () => {
            menu.classList.toggle('bx-x');     // تغير شكل الأيقونة
            navbar.classList.toggle('active'); // يظهر أو يخفي القائمة
        };
    
        window.onscroll = () => {
            menu.classList.remove('bx-x');
            navbar.classList.remove('active');
        };