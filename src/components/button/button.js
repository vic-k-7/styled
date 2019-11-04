import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const buttonFontSize = props => {
  var fontSize = props.theme.components.button.general.fontSize*props.size*0.5 + 'em';
  return fontSize;
}

const buttonPadding = props => {
  var themePadding = props.theme.global.spacing.padding;
  var buttonSize = props.size;
  var paddingY = themePadding*buttonSize*0.5 + 'px';
  var paddingX = themePadding*buttonSize*0.5*2 + 'px';
  var paddingValue = paddingY + ' ' + paddingX;
  return paddingValue;
}

const Button = styled.button`
    font-family: sans-serif;
    font-size: ${buttonFontSize};
    display: inline-block;
    transition: ${props => props.theme.components.button.general.transition};
    border-radius: ${props => props.theme.components.button.general.borderRadius};
    padding: ${buttonPadding};
    border-width: ${props => props.theme.components.button.types[props.type].borderWidth};
    border-style: solid;
    border-color: ${props => props.theme.components.button.types[props.type].borderColor};
    background-color: ${props => props.theme.components.button.types[props.type].bgColor};
    color: ${props => props.theme.components.button.types[props.type].color};
    &:hover {
      cursor: pointer;
      border-color: ${props => props.theme.components.button.types[props.type].hover.borderColor};
      background-color: ${props => props.theme.components.button.types[props.type].hover.bgColor};
      color: ${props => props.theme.components.button.types[props.type].hover.color};
    }
`;


Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'tertiary', 'secondary', 'dark', 'light']),
  size: PropTypes.number
};

Button.defaultProps = {
  size: 2,
  type: 'default'
};

export default Button;
