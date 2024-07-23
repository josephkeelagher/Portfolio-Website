function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openLinkedIn() {
    window.open('https://www.linkedin.com/in/joseph-keelagher-b67170292/', '_blank');
}
function openGitHub(input) {
    if (input) {
        switch (input) {
            case 'P1':
                window.open('https://github.com/josephkeelagher/AFL-brownlow-predictor', '_blank');
            case 'P2':
                window.open('https://github.com/josephkeelagher/ShadowDance-game', '_blank');
            case 'P3':
                window.open('https://github.com/josephkeelagher/mock-database-concert', '_blank');
            case 'P4':
                window.open('https://github.com/josephkeelagher/IDMB-Predictor-Machine-Learning', '_blank');
            case 'P5':
                window.open('https://github.com/josephkeelagher/AI-Tetress-Agent', '_blank');
            case 'P6':
                window.open('https://github.com/josephkeelagher/Portfolio-Website', '_blank');
        }
    }
    else {window.open('https://github.com/josephkeelagher', '_blank');}
}
function openProjectOne() {
    windown.open('https://github.com/josephkeelagher', '_blank');
}