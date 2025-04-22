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

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => updateIndicator(link));
        link.addEventListener("click", () => updateIndicator(link));
    });

    // Actieve pagina highlighten
    const currentPage = window.location.pathname.split("/").pop();
    const activeLink = [...navLinks].find(link => link.getAttribute("href") === currentPage);

    if (activeLink) {
        activeLink.classList.add("active");
        updateIndicator(activeLink);
    } else {
        navIndicator.style.width = "0";
    }
});