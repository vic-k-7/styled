import React from 'react';
import Button from './button';

function ButtonExamples() {
    return (
      <div className="components">

        <h3>Vanilla button</h3>
        <div className="pattern">
            <button>Button</button>
        </div>

        <h3>Button component</h3>
        <div className="pattern">
          <Button>Button</Button>
        </div>

        <h3>Types</h3>
        <div className="pattern">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="tertiary">Tertiary</Button>
          <Button type="dark">Dark</Button>
          <Button type="light">Light</Button>
        </div>

        <h3>As anchor tag</h3>
        <div className="pattern">
          <Button as="a" type="primary">Anchor</Button>
        </div>
        
        <h3>Sizes (small/medium/large)</h3>
        <div className="pattern">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </div>
      </div>
    );
  }

export default ButtonExamples;