//components
import FirstComponent from './components/FirstComponent';

//css
import './App.css';
import { TemplateExpressions } from './components/TemplateExpressions';
import { MyComponent } from './components/MyComponent';
import { Events } from './components/Events';
import { Challenge } from './components/Challenge';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge></Challenge>
    </div>
  );
}

export default App;
