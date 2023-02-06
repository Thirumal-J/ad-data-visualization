import { DefaultTheme } from 'styled-components';

export const SPACING_UNIT = 8;

const lightTheme: DefaultTheme = {
    palette: {
        selection: {
            primary: '#DE5000',
            hover: '#EE6D25',
            toggleLabel: '#E8F0DB',
            gradient: 'linear-gradient(0.25turn, #F59601 0%, #CA0029 100%)',
            gradientInverted: 'linear-gradient(90deg, #CA0029 -5%, #F59601 100%)',
        },
        fg: {
            light: 'rgba(255, 255, 255, 0.86)',
            medium: 'rgba(255, 255, 255, 0.66)',
            dark: 'rgba(255, 255, 255, 0.46)',
        },
        bg: {
            main: '#fffff',
            light: '#c3ae69',
            medium: '#78a5e2',
            dark: '#a04257',
            toggleOn: '#83A748',
            gradient: 'linear-gradient(#070707 39.58%, #101010 100%)',
            offScreenBackground: 'rgba(228, 190, 94, 0.08)',
            mediumDark: 'rgba(255, 255, 255, 0.02)',
            mediumLight: 'rgba(255, 255, 255, 0.06)',
            inverse: 'rgba(255, 255, 255, 0.86)',
        },
        info: '#D4EFA9',
        danger: '#DF3F41',
        warning: '#E4BE5E',
        button: {
            background: 'rgba(255, 255, 255, 0.1)',
            hover: 'rgba(255, 255, 255, 0.2)',
            disabled: 'rgba(255, 255, 255, 0.04)',
        },
        shadow: {
            dark: 'rgba(0, 0, 0, 0.25)',
            toggle1: 'rgba(0, 0, 0, 0.12)',
            toggle2: 'rgba(0, 0, 0, 0.24)',
            zoneBox: 'rgba(0, 0, 0, 0.48)',
        },
    },
    spacing: (scalar: number) => SPACING_UNIT * scalar,
    typography: {
        heading1: `
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 1.18;
            text-transform: uppercase;
            `,
        heading2: `
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 1.18;
            `,
        subtitle: `
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 1.18;
            `,
        body1: `
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 1.18;
            `,
        body2: `
            font-weight: 400;
            font-style: italic;
            font-size: 16px;
            line-height: 1.18;
            `,
        label: `
            font-weight: 400;
            font-style: normal;
            font-size: 12px;
            line-height: 1.18;
            text-transform: uppercase;
            `,
        control: `
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 1.18;
            `,
        navigation: `
            font-weight: 600;
            font-style: normal;
            font-size: 12px;
            line-height: 1.2;
            `,
        programCategory: `
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 1.18;
            `,
        topBar: `
            font-weight: 600;
            font-style: normal;
            font-size: 20px;
            `,
        labelLarge: `
            font-size: 18px;
            font-style: normal;
            font-weight: 400,
            line-height: 1.18
            `,
        sectionTitle: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            text-transform: uppercase;
            `,
        program: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            `,
        button: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            `,
        overrideIndicator: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            `,
        badge: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            text-transform: uppercase;
            `,
        subtitle2: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            `,
        dialogTitle: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            `,
        mobileMediumText: `
            font-family: Gilroy;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
            `,
    },
};

export { lightTheme };
