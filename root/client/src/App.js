import React from 'react';
import Nav from './components/top/Nav.js'
import { withStore} from 'react-context-hook'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
    </div>
  );
}

export default withStore(App);