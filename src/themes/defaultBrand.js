import utils from '../lib/utils';

const globalDefault = {
    colors: {
      primary: '#9055A2',
      secondary: '#70798C',
      tertiary: '#DAD2BC',
      text: '#000000',
      light: '#ffffff',
      dark: '#000000',
      reversed: {
        primary: '#ffffff',
        secondary: '#ffffff',
        tertiary: '#000000',
        text: '#ffffff',
        light: '#000000',
        dark: '#ffffff',
      }
    },
    spacing: {
      padding: '10',
      margin: '15'
    }
  }
  
  // BUTTON COMPONENT ------------------------------------------------------
  const buttonComponent = (brand) => {

    var global = brand || globalDefault;

    var config = {
      general: {
        transition: 'all .2s',
        borderRadius: '3px',
        fontSize: '1' 
      },
      types: {
        default: {
          bgColor: global.colors.light,
          color: global.colors.reversed.light,
          borderColor: utils.mixins.darkenLighten(global.colors.light, -20),
          borderWidth: '1px',
          hover: {
            bgColor: utils.mixins.darkenLighten(global.colors.light, -40),
            color: global.colors.reversed.light,
            borderColor: utils.mixins.darkenLighten(global.colors.light, -10),
          }
        },
        primary: {
          bgColor: global.colors.primary,
          color: global.colors.reversed.primary,
          borderColor: utils.mixins.darkenLighten(global.colors.primary, -20),
          borderWidth: '1px',
          hover: {
            bgColor: utils.mixins.darkenLighten(global.colors.primary, +20),
            color: global.colors.reversed.primary,
            borderColor: utils.mixins.darkenLighten(global.colors.primary, -10),
          }
        },
        secondary: {
          bgColor: global.colors.secondary,
          color: global.colors.reversed.secondary,
          borderColor: utils.mixins.darkenLighten(global.colors.secondary, -20),
          borderWidth: '1px',
          hover: {
            bgColor: utils.mixins.darkenLighten(global.colors.secondary, +20),
            color: global.colors.reversed.secondary,
            borderColor: utils.mixins.darkenLighten(global.colors.secondary, -10),
          }
        },
        tertiary: {
          bgColor: global.colors.tertiary,
          color: global.colors.reversed.tertiary,
          borderColor: utils.mixins.darkenLighten(global.colors.tertiary, -20),
          borderWidth: '1px',
          hover: {
            bgColor: utils.mixins.darkenLighten(global.colors.tertiary, +20),
            color: global.colors.reversed.tertiary,
            borderColor: utils.mixins.darkenLighten(global.colors.tertiary, -10),
          }
        },
        dark: {
          bgColor: global.colors.dark,
          color: global.colors.reversed.dark,
          borderColor: utils.mixins.darkenLighten(global.colors.dark, -20),
          borderWidth: '1px',
          hover: {
            bgColor: utils.mixins.darkenLighten(global.colors.dark, +30),
            color: global.colors.reversed.dark,
            borderColor: utils.mixins.darkenLighten(global.colors.dark, -10),
          }
        },
        light: {
          bgColor: global.colors.light,
          color: global.colors.reversed.light,
          borderColor: utils.mixins.darkenLighten(global.colors.light, -20),
          borderWidth: '1px',
          hover: {
            bgColor: utils.mixins.darkenLighten(global.colors.light, -20),
            color: global.colors.reversed.light,
            borderColor: utils.mixins.darkenLighten(global.colors.light, -10),
          }
        }
      }
    }
    return config;
  }

  const generateDefaults = (brand) => {
    let config = {
      button: buttonComponent(brand)
    }
    return config;
  }
  
  const defaultBrand = {
    global: globalDefault,
    components: generateDefaults(globalDefault),
    functions: {
      generateDefault: generateDefaults
    }
  }

  export default defaultBrand;