import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiTextfield } from './components/MuiTextfield';
import { MuiTypography } from './components/MuiTypography';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiSelect } from './components/MuiSelect';
import { MuiSwitch } from './components/MuiSwitch';

function App() {
  return (
    <div className="App">
      <MuiTypography/>
      <MuiButton/>
      <MuiTextfield/>
      <MuiAutocomplete/>
      <MuiSelect/>
      <MuiSwitch/>
    </div>
  );
}

export default App;
