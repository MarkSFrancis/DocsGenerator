var themeManager = function () {
    var themeCookieKey = 'theme';
    var darkTheme = 'dark';
    var themeSwitchedHandlers = [];

    function cookieIsDarkTheme() {
        return Cookies.get(themeCookieKey) === darkTheme;
    }

    function executeThemeSwitchHandlers(switchedToDark) {
        for (var i = 0; i < themeSwitchedHandlers.length; ++i) {
            themeSwitchedHandlers[i](switchedToDark);
        }
    }

    return {
        get isDarkTheme() {
            return cookieIsDarkTheme();
        },

        set isDarkTheme(val) {
            if (val) {
                Cookies.set(themeCookieKey, darkTheme);
            } else {
                Cookies.remove(themeCookieKey);
            }

            executeThemeSwitchHandlers(val);
        },

        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
        },

        addThemeSwitchedEvent(handler) {
            themeSwitchedHandlers.push(handler);
        }
    }
}();