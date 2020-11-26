import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/device';

const GlobalStyle = createGlobalStyle`
  /**
  * http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* ---------------------- CUSTOM STYLES ---------------------- */

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    line-height: 1;
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    background-color: #2f3b52;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;

    @media ${device.mobileAndAbove} {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media ${device.mediumAndAbove} {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`;

export { GlobalStyle };
