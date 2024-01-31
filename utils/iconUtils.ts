type weatherIconsObjType = {
    [key: string]: string
}

const weatherIcons: weatherIconsObjType = {
    d000: require('./../assets/icons/d000.png'),
    d100: require('./../assets/icons/d100.png'),
    d200: require('./../assets/icons/d200.png'),
    d300: require('./../assets/icons/d300.png'),
    d400: require('./../assets/icons/d400.png'),
    d500: require('./../assets/icons/d500.png'),
    d600: require('./../assets/icons/n600.png'),

    d210: require('./../assets/icons/d210.png'),
    d310: require('./../assets/icons/d310.png'),
    d410: require('./../assets/icons/d410.png'),

    d220: require('./../assets/icons/d220.png'),
    d320: require('./../assets/icons/d320.png'),
    d420: require('./../assets/icons/d420.png'),
    d430: require('./../assets/icons/d430.png'),

    d240: require('./../assets/icons/d240.png'),
    d340: require('./../assets/icons/d340.png'),
    d440: require('./../assets/icons/d440.png'),

    d211: require('./../assets/icons/d211.png'),
    d311: require('./../assets/icons/d311.png'),
    d411: require('./../assets/icons/d411.png'),

    d221: require('./../assets/icons/d221.png'),
    d321: require('./../assets/icons/d321.png'),
    d421: require('./../assets/icons/d421.png'),

    d431: require('./../assets/icons/d431.png'),

    d212: require('./../assets/icons/d212.png'),
    d312: require('./../assets/icons/d312.png'),
    d412: require('./../assets/icons/d412.png'),
    d222: require('./../assets/icons/d222.png'),
    d322: require('./../assets/icons/d322.png'),
    d422: require('./../assets/icons/d422.png'),
    d432: require('./../assets/icons/d432.png'),

    n000: require('./../assets/icons/n000.png'),
    n100: require('./../assets/icons/n100.png'),
    n200: require('./../assets/icons/n200.png'),
    n300: require('./../assets/icons/n300.png'),
    n400: require('./../assets/icons/d400.png'),
    n500: require('./../assets/icons/n500.png'),
    n600: require('./../assets/icons/n600.png'),

    n210: require('./../assets/icons/n210.png'),
    n310: require('./../assets/icons/n310.png'),
    n410: require('./../assets/icons/d410.png'),

    n220: require('./../assets/icons/n220.png'),
    n320: require('./../assets/icons/n320.png'),
    n420: require('./../assets/icons/d420.png'),
    n430: require('./../assets/icons/d430.png'),

    n240: require('./../assets/icons/n240.png'),
    n340: require('./../assets/icons/n340.png'),
    n440: require('./../assets/icons/d440.png'),

    n211: require('./../assets/icons/n211.png'),
    n311: require('./../assets/icons/n311.png'),
    n411: require('./../assets/icons/d411.png'),

    n221: require('./../assets/icons/n221.png'),
    n321: require('./../assets/icons/n321.png'),
    n421: require('./../assets/icons/d421.png'),

    n431: require('./../assets/icons/d431.png'),

    n212: require('./../assets/icons/n212.png'),
    n312: require('./../assets/icons/n312.png'),
    n412: require('./../assets/icons/d412.png'),
    n222: require('./../assets/icons/n222.png'),
    n322: require('./../assets/icons/n322.png'),
    n422: require('./../assets/icons/d422.png'),
    n432: require('./../assets/icons/d432.png'),


    default: require('./../assets/icons/dxxx.png'),
};



export const IconSelector = (symbol: string): string => {

    const iconPath = weatherIcons[symbol] || weatherIcons.default;
    return iconPath;
};
