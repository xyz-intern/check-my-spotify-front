import Redirection from "./components/Redirection";
import React from 'react';
import Login from "./components/Login";
const code = window.location.search;
function App() {
  return (
    
        <div className="App">
          { code ? <Redirection code={code} /> : <Login />}
        </div>
      
  );
}

export default App;