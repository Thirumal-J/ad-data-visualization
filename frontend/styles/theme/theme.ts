import { DefaultTheme } from 'styled-components';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            selection: {
                /** `#DE5000` */
                primary: string;
                /** `#EE6D25` */
                hover: string;
                toggleLabel: string;
                gradient: string;
                gradientInverted: string;
            };
            fg: {
                /**
                 * - shade: `10`
                 * - code: `#FFFFFF, 86%`
                 */
                light: string;
                /**
                 * - shade: `20`
                 * - code: `#FFFFFF, 66%`
                 */
                medium: string;
                /**
                 * - shade: `30`
                 * - code: `#FFFFFF, 46%`
                 */
                dark: string;
            };
            bg: {
                main: string;
                /**
                 * - shade: `70`
                 * - code: `#222222`
                 */
                light: string;
                /**
                 * - shade: `80`
                 * - code: `#161718`
                 */
                medium: string;
                /**
                 * - shade: `90`
                 * - code: `#121314`
                 */
                toggleOn: string;
                dark: string;
                gradient: string;
                offScreenBackground: string;
                mediumDark: string;
                mediumLight: string;
                inverse: string;
            };
            info: string;
            danger: string;
            warning: string;
            button: {
                background: string;
                hover: string;
                disabled: string;
            };
            shadow: {
                dark: string;
                toggle1: string;
                toggle2: string;
                zoneBox: string;
            };
        };
        spacing: (scalar: number) => number;
        typography: {
            heading1: string;
            heading2: string;
            subtitle: string;
            body1: string;
            body2: string;
            label: string;
            control: string;
            navigation: string;
            programCategory: string;
            topBar: string;
            sectionTitle: string;
            program: string;
            labelLarge: string;
            button: string;
            overrideIndicator: string;
            badge: string;
            subtitle2: string;
            dialogTitle: string;
            mobileMediumText: string;
        };
    }
}

const themes: { [key: string]: DefaultTheme } = {
    light: lightTheme,
    dark: darkTheme,
};

const getDefaultTheme = () => themes['light'];

const theme = (val: string): DefaultTheme => (val in themes ? themes[val] : getDefaultTheme());

export { theme, theme as default };
