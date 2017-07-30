import React from 'react';
import SignUpForm from './container/SignUpForm'
var style= require('./css/index.scss');

class App extends React.Component {
   render() {
      return (
         <div className="main">
                <SignUpForm />
         </div>
      );
   }
}

export default App;