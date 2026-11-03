setTimeout(() => {
    const splashscreenLogo = document.getElementById('splashScreenLogo');
    splashscreenLogo.classList.add('hidden');
}, 1000);

setTimeout(() => {
    const splashscreen = document.getElementById('splashScreen');
    splashscreen.classList.add('hidden');
}, 1500);

setTimeout(() => {
    const splashscreen = document.getElementById('splashScreen');
    splashscreen.classList.add('disabled');
}, 2000);

function navigateToPage(pageId) {

    const buttons = document.querySelectorAll('.activeBtn');
    buttons.forEach(button => {
        button.classList.remove('activeBtn');
    });

    const pages = document.querySelectorAll('.show');
    pages.forEach(page => {
        page.classList.remove('show');
    });

    const navBtn = document.querySelector(`.navBtn[onclick="navigateToPage('${pageId}')"]`);
    navBtn.classList.add('activeBtn');

    const page = document.getElementById(pageId);
    page.classList.add('show');
}