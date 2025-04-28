window.addEventListener("load", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const navIndicator = document.createElement("div");
    navIndicator.classList.add("nav-indicator");
    document.querySelector(".nav-links").appendChild(navIndicator);

    function updateIndicator(link) {
        const linkRect = link.getBoundingClientRect();
        const navRect = document.querySelector(".nav-links").getBoundingClientRect();
        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
    }

    function findActiveLink() {
        const currentPage = window.location.pathname.split("/").pop();
        return [...navLinks].find(link => link.getAttribute("href") === currentPage);
    }

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => updateIndicator(link));
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            updateIndicator(link);
        });
    });

    // Highlight de huidige pagina
    const activeLink = findActiveLink();
    if (activeLink) {
        activeLink.classList.add("active");
        updateIndicator(activeLink);
    } else {
        navIndicator.style.width = "0";
    }

    // Update de indicator als het schermformaat verandert
    window.addEventListener("resize", () => {
        const active = document.querySelector(".nav-links a.active");
        if (active) {
            updateIndicator(active);
        }
    });
});