const toggleBtn = document.getElementById('themeToggle');

// Functie om cookie te zetten
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

// Functie om cookie te lezen
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cname, cvalue] = cookie.trim().split('=');
        if (cname === name) {
            return cvalue;
        }
    }
    return null;
}

// Kijkt of systeemvoorkeur dark is
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Check of er al een cookie is
const savedTheme = getCookie('theme');

// Initialiseer op basis van cookie of systeemvoorkeur
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
} else if (systemPrefersDark) {
    document.body.classList.add('dark-mode');
}

// Zet juiste icoon op basis van thema
function updateIcon() {
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '🌚' : '🌞';
}

// Toggle dark mode aan/uit
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Sla nieuwe voorkeur op in cookie
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    setCookie('theme', theme, 30);
    updateIcon();
});

// Bij het laden juiste icoon tonen
updateIcon();
