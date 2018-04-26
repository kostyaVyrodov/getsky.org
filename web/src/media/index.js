import { css } from 'styled-components';
import { BREAKPOINTS } from 'components/config';

const media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label]}em) {
      ${css(...args)}
    }
  `;

    return acc
}, {});

export default media;
