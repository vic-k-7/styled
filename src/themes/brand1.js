import utils from '../lib/utils';
import defaultBrand from './defaultBrand';
import _ from 'lodash';

const brandVariables = {
    colors: {
      primary: '#EF6F6C',
      secondary: '#465775',
      tertiary: '#56E39F',
      text: '#3c3c3c',
      light: '#ffffff',
      dark: '#3c3a3a',
      reversed: {
        primary: '#3c3c3c',
        secondary: '#ffffff',
        tertiary: '#3c3a3a',
        text: '#ffffff',
        light: '#3c3a3a',
        dark: '#ffffff',
      }
    },
    spacing: {
      padding: '10',
      margin: '15'
    }
  }
  
  const componentOverrides = {
      button: {
        general: {
            borderRadius: '5px',
            fontSize: '1.2'
        },
        types: {
            default: {
                bgColor: brandVariables.colors.light,
                color: brandVariables.colors.reversed.light,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.light, -20),
                hover: {
                bgColor: utils.mixins.darkenLighten(brandVariables.colors.light, +20),
                color: brandVariables.colors.reversed.light,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.light, -10),
                }
            },
            primary: {
                bgColor: brandVariables.colors.primary,
                color: brandVariables.colors.reversed.primary,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.primary, -20),
                hover: {
                bgColor: utils.mixins.darkenLighten(brandVariables.colors.primary, +20),
                color: brandVariables.colors.reversed.primary,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.primary, -10),
                }
            },
            secondary: {
                bgColor: brandVariables.colors.secondary,
                color: brandVariables.colors.reversed.secondary,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.secondary, -20),
                hover: {
                bgColor: utils.mixins.darkenLighten(brandVariables.colors.secondary, +20),
                color: brandVariables.colors.reversed.secondary,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.secondary, -10),
                }
            },
            tertiary: {
                bgColor: brandVariables.colors.tertiary,
                color: brandVariables.colors.reversed.tertiary,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.tertiary, -20),
                hover: {
                bgColor: utils.mixins.darkenLighten(brandVariables.colors.tertiary, +20),
                color: brandVariables.colors.reversed.tertiary,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.tertiary, -10),
                }
            },
            dark: {
                bgColor: brandVariables.colors.dark,
                color: brandVariables.colors.reversed.dark,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.dark, -20),
                hover: {
                bgColor: utils.mixins.darkenLighten(brandVariables.colors.dark, +20),
                color: brandVariables.colors.reversed.dark,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.dark, -10),
                }
            },
            light: {
                bgColor: brandVariables.colors.light,
                color: brandVariables.colors.reversed.light,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.light, -20),
                hover: {
                bgColor: utils.mixins.darkenLighten(brandVariables.colors.light, +20),
                color: brandVariables.colors.reversed.light,
                borderColor: utils.mixins.darkenLighten(brandVariables.colors.light, -10),
                }
            }
        }
    }
  }

  let defaultComponents = defaultBrand.functions.generateDefault(brandVariables)
  let components = _.merge(defaultComponents, componentOverrides);
  
  const brand1 = {
    global: brandVariables,
    components: components
  }

  export default brand1;