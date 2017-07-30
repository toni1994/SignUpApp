import React from 'react';

class Input extends React.Component {
    constructor(props)
    {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeName(e)
    {
        this.props.changeInput(e.target.value,'name');
    }

    changeEmail(e)
    {
        this.props.changeInput(e.target.value,'email');
    }

    changePassword(e)
    {
        this.props.changeInput(e.target.value,'password');
    }

   render() {
       var disable={}
       disable['disabled']=this.props.disabled

      return (
        <div>
            <form id="changeName">
                    <input type="text" {...disable} placeholder="Name" value={this.props.name} onChange={this.changeName}/>
            </form>
            <form id="changeName">
                    <input type="text" {...disable} placeholder="Email Address" value={this.props.email} onChange={this.changeEmail}/>
            </form>  
            <form id="changeName">
                    <input type="text" {...disable} placeholder="Create a Password" value={this.props.password} onChange={this.changePassword}/>
            </form> 
        </div>
      );
   }
}

export default Input;










