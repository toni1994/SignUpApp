import React from 'react';

class SubmitButton extends React.Component {
    constructor(props)
    {
        super(props);
    }

   render() {
      return (
        <button className="button" onClick={this.props.submitForm}>SIGN UP FREE</button>
      );
   }
}

export default SubmitButton;



