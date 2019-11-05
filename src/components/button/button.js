import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const buttonFontSize = props => {
  var fontSize = props.theme.button.sizes[props.size].fontSize.value + 'em';
  return fontSize;
}

const buttonPadding = props => {
  var themePadding = props.theme.button.sizes[props.size];
  var paddingY = themePadding.paddingY.value + 'px';
  var paddingX = themePadding.paddingX.value + 'px';
  var paddingValue = paddingY + ' ' + paddingX;
  return paddingValue;
}

const Button = styled.button`
    font-family: sans-serif;
    font-size: ${buttonFontSize};
    display: inline-block;
    transition: ${props => props.theme.button.transition.value};
    border-radius: ${props => props.theme.button.borderRadius.value + 'px'};
    padding: ${buttonPadding};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.button[props.type].default.borderColor.value};
    background-color: ${props => props.theme.button[props.type].default.backgroundColor.value};
    color: ${props => props.theme.button[props.type].default.color.value};
    &:hover {
      cursor: pointer;
      border-color: ${props => props.theme.button[props.type].hover.borderColor.value};
      background-color: ${props => props.theme.button[props.type].hover.backgroundColor.value};
      color: ${props => props.theme.button[props.type].hover.color.value};
    }
`;


Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'tertiary', 'secondary', 'dark', 'light']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Button.defaultProps = {
  size: 'medium',
  type: 'default'
};

export default Button;
