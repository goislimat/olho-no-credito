import { css } from "styled-components";

import { breakpoints } from "ui/theme";

export default {
  h1: {
    component: "h1",
    style: css`
      font-family: Inter, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;
      font-weight: 600;

      ${breakpoints.desktop} {
        font-size: 45px;
        line-height: 55px;
      }
    `,
  },
  h2: {
    component: "h2",
    style: css`
      font-family: Inter, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;
      font-weight: 600;

      ${breakpoints.desktop} {
        font-size: 40px;
        line-height: 48px;
      }
    `,
  },
  h3: {
    component: "h3",
    style: css`
      font-family: Inter, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;
      font-weight: 600;

      ${breakpoints.desktop} {
        font-size: 35px;
        line-height: 42px;
      }
    `,
  },
  h4: {
    component: "h4",
    style: css`
      font-family: Inter, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;

      ${breakpoints.desktop} {
        font-size: 30px;
        line-height: 36px;
      }
    `,
  },
  h5: {
    component: "h5",
    style: css`
      font-family: Inter, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;
      font-weight: 600;

      ${breakpoints.desktop} {
        font-size: 18px;
        line-height: 21px;
      }
    `,
  },
  h6: {
    component: "h6",
    style: css`
      font-family: Inter, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;
      font-weight: 600;

      ${breakpoints.desktop} {
        font-size: 18px;
        line-height: 21px;
      }
    `,
  },
  p1: {
    component: "p",
    style: css`
      font-family: Roboto, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;

      ${breakpoints.desktop} {
        font-size: 25px;
        line-height: 29px;
      }
    `,
  },
  p2: {
    component: "p",
    style: css`
      font-family: Roboto, "Arial Narrow Bold", sans-serif;
      font-size: 20px;
      line-height: 25px;

      ${breakpoints.desktop} {
        font-size: 18px;
        line-height: 25px;
      }
    `,
  },
  p3: {
    component: "p",
    style: css`
      font-family: Roboto, "Arial Narrow Bold", sans-serif;
      font-size: 10px;
      line-height: 12px;

      ${breakpoints.desktop} {
        font-size: 12px;
        line-height: 14px;
      }
    `,
  },
  p4: {
    component: "p",
    style: css`
      font-family: Roboto, "Arial Narrow Bold", sans-serif;
      font-size: 25px;
      line-height: 30px;

      ${breakpoints.desktop} {
        font-size: 10px;
        line-height: 11px;
      }
    `,
  },
};
