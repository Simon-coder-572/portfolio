// translations.js
const translations = {
    en: {
        // navbar
        home: "Home",
        about: "About Me",
        skills: "My Skills",
        projects: "All My Projects",
        dashboard: "Templates",
        contact: "Contact",
        login: "Go to my Dashboard",

        //! Home page

        // title
        title: "Welcome to my website",
        title_subtext: "This is my website, where I show my personal and professional details and my projects. I created a simple website with HTML, CSS and JavaScript",
        about_me: "read more about me",

        // dahboard
        dashboard_title: "check out my dashboard",
        dashboard_subtitle: "on my dashboard website, you can get your own dashboard and connect directly to my services. NOTE: this is only available on request for friends and family.",
        dashboard_button: "go to my dashboard",        

        // skills
        skills_title: "My best skills:",
        skill_1_h2: "Fullstack Development",
        skill_1_p: "Experienced in building dynamic websites and applications using modern technologies like HTML, CSS, PHP, Python, JavaScript, React, Node.js, and more.",
        skill_2_h2: "Server & Cloud Management",
        skill_2_p: "Proficient in managing and securing servers, both physical and virtual, using tools like Proxmox, Docker, Ubuntu, MySQL, and AWS.",
        skill_3_h2: "Cybersecurity & Networking",
        skill_3_p: "Skilled in securing networks, performing penetration tests, and managing firewalls, VPNs, and encryption protocols to protect systems.",
        main_button_1: "Show all skills",

        // projects
        project_title: "My best projects:",
        project_1_h2: "AI School Project",
        project_1_p: "I Built an AI racecar using NEAT for my school project to navigate a racecourse autonomously.",
        project_2_h2: "Personal Website",
        project_2_p: "Developed this portfolio website using Docker for containerized deployment and building skills for interactive websites.",
        project_3_h2: "Home Server",
        project_3_p: "Built a powerful server to host personal and public applications and serve as a test environment.",
        main_button_2: "Show all projects",

        // templates
        templates_title: "Top 5 templates:",
        templates_1_h2: "title 1",
        templates_1_p: "text 1",
        templates_2_h2: "title 2",
        templates_2_p: "text 2",
        templates_3_h2: "title 3",
        templates_3_p: "text 3",
        templates_4_h2: "title 4",
        templates_4_p: "text 4",
        templates_5_h2: "title 5",
        templates_5_p: "text 5",
        main_button_3: "Show all templates"
    
        // contact
    }, nl: {
        // navbar
        home: "Home",
        about: "Over mij",
        skills: "Mijn vaardigheden",
        projects: "Al mijn projecten",
        dashboard: "Templates",
        contact: "Contact",
        login: "Ga naar mijn dashboard",

        //! Home page

        // title
        title: "Welkom op mijn website",
        title_subtext: "Dit is mijn website, waar ik mijn persoonlijke en professionele details en projecten toon. Ik heb een eenvoudige website gemaakt met HTML, CSS en JavaScript",
        about_me: "Lees meer over mij",

        // dahboard
        dashboard_title: "bekijk mijn dashboard",
        dashboard_subtitle: "Op mijn dashboard-website kun je je eigen dashboard aanvragen en direct verbinding maken met mijn services. Let op: dit is exclusief beschikbaar op aanvraag voor vrienden en familie.",
        dashboard_button: "ga naar mijn dashboard",        

        // skills
        skills_title: "Mijn beste skills:",
        skill_1_h2: "Fullstack developer",
        skill_1_p: "Ervaren in het bouwen van dynamische websites en applicaties met moderne technologieën zoals HTML, CSS, PHP, Python, JavaScript, React, Node.js en meer.",
        skill_2_h2: "Server & Cloudbeheer",
        skill_2_p: "Bekwaam in het beheren en beveiligen van servers, zowel fysiek als virtueel, met tools zoals Proxmox, Docker, Ubuntu, MySQL en AWS.",
        skill_3_h2: "Cybersecurity & Netwerken",
        skill_3_p: "Vaardig in het beveiligen van netwerken, uitvoeren van penetratietests en beheren van firewalls, VPN's en encryptieprotocollen om systemen te beschermen.",
        main_button_1: "Toon alle vaardigheden",

        // projects
        project_title: "Mijn beste projecten:",
        project_1_h2: "AI Schoolproject",
        project_1_p: "Ik heb een AI-raceauto gebouwd met NEAT voor mijn schoolproject om zelfstandig een racecircuit te navigeren.",
        project_2_h2: "Persoonlijke Website",
        project_2_p: "Deze portfolio-website ontwikkeld met Docker voor containerized deployment en het opbouwen van skills voor dynamishe website's.",
        project_3_h2: "Home Server",
        project_3_p: "Een krachtige server gebouwd om persoonlijke en openbare applicaties te hosten en als testomgeving te dienen.",
        main_button_2: "Toon alle projecten",

        // templates
        templates_title: "Mijn beste templates:",
        templates_1_h2: "title 1",
        templates_1_p: "tekst 1",
        templates_2_h2: "title 2",
        templates_2_p: "tekst 2",
        templates_3_h2: "title 3",
        templates_3_p: "tekst 3",
        templates_4_h2: "title 4",
        templates_4_p: "tekst 4",
        templates_5_h2: "title 5",
        templates_5_p: "tekst 5",
        main_button_3: "Alle templates"

        // contact
    }
};

function changeLanguage() {
    const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
    localStorage.setItem("selectedLanguage", selectedLanguage); // Opslaan in localStorage

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[selectedLanguage][key]) {
            element.innerText = translations[selectedLanguage][key];
        }
    });
}

// Automatisch de taal instellen bij pagina laden
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    
    // Check de juiste radio button op basis van opgeslagen taal
    const radioToCheck = document.querySelector(`input[name="language"][value="${savedLanguage}"]`);
    if (radioToCheck) {
        radioToCheck.checked = true;
    }

    changeLanguage(); // Pas direct de vertalingen toe
});
