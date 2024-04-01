

function getDarkModeFlag() {
    let defaultBrowserTheme = localStorage.getItem('DARKMODE_FLAG');

    if (!defaultBrowserTheme) {
        localStorage.setItem('DARKMODE_FLAG', 'false');
        defaultBrowserTheme = 'false'
    }

    let DARKMODE_FLAG = defaultBrowserTheme;
    return DARKMODE_FLAG;
}

document.addEventListener("DOMContentLoaded", function () {

    const darkBtn = document.getElementById("dark-btn");
    const darkBtnImg = document.getElementById("moonBtnImg");
    const darkmodeText = document.getElementById("darkmodetext");
    const logo = document.getElementById("class-finder-logo");
    const logoTop = document.getElementById("top-logo");
    const headingOfMissing = document.getElementById("textMissing");

    function darkmodeConfig() {

        const isDarkTheme = getDarkModeFlag();

        if (isDarkTheme == 'true') {
            document.body.style.backgroundColor = "#212121"
            try {
                darkBtnImg.name = "sunny"
                darkmodeText.innerText = "Light"
                logoTop.src = "img/LOGO6.png"
                logo.src = "img/LOGO_DARK.png"
                resultSection.style.backgroundImage = "url('img/NightGEHU.jpeg')"
            }
            catch (TypeError) { }
            try {
                headingOfMissing.style.color = "white"
            }
            catch (TypeError) { }
        }
        else {
            document.body.style.backgroundColor = "lightgrey"
            try {
                darkBtnImg.name = "moon-outline"
                darkmodeText.innerText = "Dark"
                logoTop.src = "img/LOGO-2.png"
                logo.src = "img/mainLogo.png"
                resultSection.style.backgroundImage = "url('img/GEHU-bg-filter.png')"
            }
            catch (TypeError) { }

            try {
                headingOfMissing.style.color = 'black'
            }
            catch (TypeError) { }
        }
    }
    darkBtn.addEventListener("click", () => {
        let DARKMODE_FLAG = getDarkModeFlag();
        if (DARKMODE_FLAG === 'false') {
            DARKMODE_FLAG = 'true';
        }
        else if (DARKMODE_FLAG === 'true') {
            DARKMODE_FLAG = 'false';
        }
        localStorage.setItem('DARKMODE_FLAG', DARKMODE_FLAG);
        darkmodeConfig();
    });

    darkmodeConfig();
});
