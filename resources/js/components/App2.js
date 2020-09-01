import React from 'react';
import ReactDOM from 'react-dom';
import Liste from './Liste';
import Navbar from './Navbar';


class App2 extends React.Component {
  render(){
    return(
      <div className="App">
        {/*<Navbar /> */}
        {/*<ThemeProvider>*/}
          <Liste influenceur={['cristiano','arianagrande','theroock2','kyliejenner','selenagomez','kimkardashian','leomessi','beyonce','justinbieber']} />
        {/*</ThemeProvider>*/}
         
      </div>
    );
  }
}

export default App2;

if (document.getElementById('App2')) {   
    ReactDOM.render(<App2 />, document.getElementById('App2'));
}
