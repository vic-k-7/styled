import React from 'react';
import ButtonExamples from './components/button/examples';
import { ThemeProvider } from 'styled-components';
import Select from 'react-select';
import './App.css';

// Theming
import defaultBrand from './themes/defaultBrand';
import brand1 from './themes/brand1';
import brand2 from './themes/brand2';

const options = [
  {value: 'defaultBrand', label: 'Default brand'},
  {value: 'brand1', label: 'Brand 1'},
  {value: 'brand2', label: 'Brand 2'},
]

const themes = {
  defaultBrand: defaultBrand,
  brand1: brand1,
  brand2: brand2
}

console.log(defaultBrand);


class App extends React.Component {
  state = {
    selectedOption: options[0],
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;
    console.log(selectedOption.label);

    return (
      <div className="app">
        <h1>Select brand (for demo)</h1>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
      />
      <hr/>

        <h1>Displaying: {selectedOption.label}</h1>
        <ThemeProvider theme={themes[selectedOption.value]}>
            <ButtonExamples/>
        </ThemeProvider>
      </div>
    );
    }
}

export default App;
