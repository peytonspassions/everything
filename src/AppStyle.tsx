import { createGlobalStyle } from 'styled-components';
import AppStyles from 'styles';

const AppStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        height: 100%;
    }

    body {
        background: ${AppStyles.colors.white};
        font-family: ${AppStyles.fonts.sansSerif};
        color: ${AppStyles.colors.black};
    }
`;

export default AppStyle;
