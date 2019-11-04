import React from 'react';
import styled from 'styled-components';
import Button from './button';

function ButtonExamples() {
    return (
          <div className="components">
            <div className="pattern">
                <h3>Vanilla button</h3>
                <button>Create</button>
            </div>
            <div className="pattern">

            <h3>Button component</h3>
            <Button>Create</Button>
            </div>

            <div className="pattern">
            <h3>Button component types</h3>
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="tertiary">Tertiary</Button>
            <Button type="dark">Dark</Button>
            <Button type="light">Light</Button>
            </div>
            <div className="pattern">

            <h3>Button component as anchor tag</h3>
            <Button as="a" type="primary">Create</Button>
            </div>
            <div className="pattern">
                <h3>Button component in different sizes (1-5)</h3>
                <Button size="1">Create</Button>
                <Button size="2">Create</Button>
                <Button size="3">Create</Button>
                <Button size="4">Create</Button>
                <Button size="5">Create</Button>
            </div>
          </div>
    );
  }


export default ButtonExamples;