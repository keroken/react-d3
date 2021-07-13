import { createGlobalStyle } from 'styled-components';

export const Scaffolding = createGlobalStyle`
  /* Reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    &, &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    overflow-x: hidden;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
  }
  
  article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  a {
    color: inherit;
  }

  a:not([href]):not([tabindex]) {
    text-decoration: none;
    &:focus {
      outline: 0;
    }
  }

  nav, ul {
    list-style: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  input, button, select, optgroup, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  input {
    min-width: 0;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-webkit-input-placeholder {
      padding-top: 0.2em;
    }

    &:focus {
      outline: none;
    }
  }

  select::-ms-expand {
    display: none;
  }

  button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"], input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: none;
    }
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  div:focus {
    outline: none;
  }
  
  /* Scaffolding */
  html, body {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-feature-settings: "palt" 1;
    -webkit-text-size-adjust: 100%;
  }
`;
