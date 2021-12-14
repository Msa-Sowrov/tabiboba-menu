import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="">
      <Menu></Menu>
      <BrowserRouter>
        <Switch>
          <Route>
              
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
