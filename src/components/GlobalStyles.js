import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    a {
        text-decoration:none;
        color:inherit;
    }

    * {
        box-sizing:border-box;
    }

    body {
        font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size:12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:55px;
    }
`;

export default GlobalStyles;