async function themeSelection() {
    const themeModule = await import("./theme.js");
    const currentHr = new Date().getHours();
    if (currentHr < 6 || currentHr > 18) {
        themeModule.setDarkTheme();
    } else {
        themeModule.setLightTheme();
    }
}
themeSelection();
    