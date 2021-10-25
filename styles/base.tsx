import css from 'styled-jsx/css'

export const cssBase = css.global`
  :root {
    --font-family-sans-serif: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

    --casper-orange: #ea7600;
    --casper-orange-hover: #9c4e00;
    --casper-blue: #002f6c;
    --casper-background: #fff;
    --casper-foreground: #5c7380;
    --casper-intro-bg: #ccc;
    --casper-footer-background: #394049;

    /* Chat WhatsApp */
    --casper-color-wsp: #25d366;
    --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
    --message-primary: #303030;
    --incoming-background: #fff;
    --shadow-rgb: 0, 0, 0;
    --bubble-meta: rgba(0, 0, 0, 0.45);
    --compose-panel-background: #f0f0f0;
    --rich-text-panel-background: #f0f0f0;
    --border-stronger: rgba(0, 0, 0, 0.08);
    --compose-primary: #4a4a4a;
    --input-placeholder: #999;
    --compose-input-background: #fff;
    --compose-input-border: #fff;
  }
`
