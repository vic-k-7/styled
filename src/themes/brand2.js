import utils from '../lib/utils';
import defaultBrand from './defaultBrand';
import _ from 'lodash';

const brandVariables = {
    colors: {
      primary: '#F2E863',
      secondary: '#F25757',
      tertiary: '#61E8E1',
      text: '#000000',
      light: '#ffffff',
      dark: '#000000',
      reversed: {
        primary: '#000000',
        secondary: '#ffffff',
        tertiary: '#000000',
        text: '#ffffff',
        light: '#000000',
        dark: '#ffffff',
      }
    },
    spacing: {
      padding: '15',
      margin: '20'
    }
  }

  // Overwrite just one value
  const componentOverrides = {
      button: {
          types: {
              primary: {
                  borderWidth: '4px'
              }
          }
      }
  }
  
  let defaultComponents = defaultBrand.functions.generateDefault(brandVariables)
  let components = _.merge(defaultComponents, componentOverrides);

  const brand2 = {
    global: brandVariables,
    components: components
  }

  export default brand2;