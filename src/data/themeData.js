/* eslint-disable */
import { 
    greenThemeLight, greenThemeDark, bwThemeLight, bwThemeDark, blueThemeLight, blueThemeDark, redThemeLight, redThemeDark, orangeThemeLight, orangeThemeDark, purpleThemeLight, purpleThemeDark, pinkThemeLight, pinkThemeDark, yellowThemeLight, yellowThemeDark
} from '../theme/theme'


function getRandomTheme() {
    const themes = [
        greenThemeLight, 
        blueThemeLight, blueThemeDark, redThemeLight, purpleThemeLight, purpleThemeDark, yellowThemeLight, yellowThemeDark
    ];

    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
}

export const themeData = {
    theme: getRandomTheme()
    
}


// Choose theme from above
