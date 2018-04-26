import { css } from 'styled-components';

const BREAKPOINTS = {
    sm: 40,
    md: 52,
    lg: 64,
};

const media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label]}em) {
      ${css(...args)}
    }
  `;

    return acc
}, {});

export default media;
