
setTimeout(() => {
    const darkBtn = document.getElementById("dark-btn")
    const darkBtnImg = document.getElementById("moonBtnImg")
    const darkmodeText = document.getElementById("darkmodetext")
    const logo = document.getElementById("class-finder-logo")
    const logoTop = document.getElementById("top-logo")
    // const resultSection=document.getElementById("result")

    let defaultBrowserTheme = localStorage.getItem('DARKMODE_FLAG');
    if (!defaultBrowserTheme) {
        localStorage.setItem('DARKMODE_FLAG', 'false');
    }
    let DARKMODE_FLAG = defaultBrowserTheme || 'false';

    function darkmodeConfig() {
        const isDarkTheme = localStorage.getItem('DARKMODE_FLAG');
        if (isDarkTheme == 'true') {
            document.body.style.backgroundColor = "#212121"
            darkBtnImg.name = "sunny"
            darkmodeText.innerText = "Light"
            try {
                logoTop.src = "img/LOGO6.png"
                logo.src = "img/LOGO_DARK.png"
                resultSection.style.backgroundImage = "url('img/NightGEHU.jpeg')";
            }
            catch (TypeError) { }
        }
        else {
            document.body.style.backgroundColor = "lightgrey"
            darkBtnImg.name = "moon-outline"
            darkmodeText.innerText = "Dark"
            try {
                logoTop.src = "img/LOGO-2.png"
                logo.src = "img/mainLogo.png"
                resultSection.style.backgroundImage = "url('img/GEHU-bg-filter.png')"
            }
            catch (TypeError) { }

        }
    }

    darkBtn.addEventListener("click", () => {
        if (DARKMODE_FLAG === 'false') {
            DARKMODE_FLAG = 'true';
        } else if (DARKMODE_FLAG === 'true') {
            DARKMODE_FLAG = 'false';
        }
        localStorage.setItem('DARKMODE_FLAG', DARKMODE_FLAG);
        darkmodeConfig();
    });
    darkmodeConfig();
})