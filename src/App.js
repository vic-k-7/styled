import React from 'react';
import ButtonExamples from './components/button/examples';
import { ThemeProvider } from 'styled-components';
import Select from 'react-select';
import './App.css';

// Style dictionary brands
import _base from './tokens/base/js/base.js';
import _vibrant from './tokens/brands/vibrant/js/vibrant.js';

const options = [
  {value: 'base', label: 'White label brand'},
  {value: 'vibrant', label: 'Vibrant'}
]

const themes = {
  base: _base,
  vibrant: _vibrant
}

class App extends React.Component {
  state = {
    selectedOption: options[0],
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption });
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="app">
        <h1>Select brand</h1>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <hr/>
        <ThemeProvider theme={themes[selectedOption.value]}>
            <ButtonExamples/>
        </ThemeProvider>
      </div>
    );
    }
}

export default App;
