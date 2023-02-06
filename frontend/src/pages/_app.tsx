import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { configureAxios } from '../libs/axios';
import { GlobalStyles } from '../../styles/globals';
import '../../styles/common.css';
import theme from '../../styles/theme/theme';
import { LogsProvider } from '../providers/LogsProvider';

configureAxios();

const appTheme = theme('light');

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="root">
            <ThemeProvider theme={appTheme}>
                <LogsProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </LogsProvider>
            </ThemeProvider>
        </div>
    );
};

export default MyApp;
