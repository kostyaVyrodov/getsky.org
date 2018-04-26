const breakpoints = [
    '40em', '52em', '64em'
];

const colors = {
    blue: '#0072FF',
    blueAlpha7: '#4c9dff',
    grayBlue: '#687B93',
    darkBlue: '#07172E',
    prussianBlue: '#001127',
    lightBlue: '#F3F7FC',
    lightGreen: '#DDF6EE',

    mint: '#35E1EA',
    mintAlpha7: 'rgba(53, 225, 234, 0.7)',

    lightGray: '#F3F5F7;',
    lightGray2: '#F6F7F7',
    darkGray: '#B3BDCA',
    black: '#000',
    blackAlpha7: '#525252',
    white: '#FFF',

    separator: '#E1E3E6',
    lightOrange: '#FDAE70',

    lightPink: '#C681D5',
    red: '#EB5A6B',
    gray: '#424242',
    warning: '#ff6a00',
    warningLight: '#ffb887',
    warningTransparent: 'rgba(245,166,35,0.25)',
    success: '#DDF6EE',
};

const space = [
    5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 75, 90, 100
];

const fontSizes = [
    12, 14, 18, 24, 28, 38, 56
];

const fontFamilies = {
    sans: '"skycoin-light", sans-serif',
    sansBold: '"skycoin-bold", sans-serif',
};

const lineHeights = [
    1, 1.125, 1.25, 1.5
];

export default {
    breakpoints,
    colors,
    space,
    fontSizes,
    fontFamilies,
    lineHeights,
    fontLight: '\'skycoin-light\'',
    fontBold: '\'skycoin-bold\'',
    introTabsHeight: 96,
    controlHeight: 40,
    logoSize: 30,
    container: {
        width: '90%',
        maxWidth: '1280px',
    }
};
