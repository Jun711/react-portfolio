import { css } from 'styled-components';

const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  larger: 1170
};

const minSizes = {
  phone: 377,
  tablet: 769,
  desktop: 993,
  larger: 1171
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})


export const mediaBeyond = Object.keys(minSizes).reduce((accumulator, label) => {
  const emSize = minSizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})