import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton'
import DropDownMenu from '../components/Dropdown'
var Twitter= require('react-icons/lib/fa/twitter');

class SignUpForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {   
        name:'',
        email:'',
        password:'',
        isOpen:false,
        closeDropMenu:false,
        blockClosinDropMenu:true,
        disabled:'',
        dropDownList:[{
            id:0,
            name:'Ninja',
            img:'./Images/ninja.png'
        },{
            id:1,
            name:'Sumo',
            img:"./Images/sumo.png"
        },{
            id:2,
            name:'Samurai',
            img:"./Images/samurai.png"
        }
        ],
        selected:''   
    }
    this.submitForm=this.submitForm.bind(this);
    this.changeInput=this.changeInput.bind(this);
    this.openDropDownMenu=this.openDropDownMenu.bind(this);
    this.setSelected=this.setSelected.bind(this);
    this.ClosingDropMenu=this.ClosingDropMenu.bind(this);
}

    submitForm()
    {
        if(this.state.disabled ==='')
        {
            if(this.state.name!= "" && this.state.email!= "" && this.state.password!="")
            {
                console.log("Name: ",this.state.name);
                console.log("Email: ",this.state.email);
                console.log("Password: ",this.state.password);
                this.setState({
                name: '',
                email: '',
                password: ''
            });
            }
            else {
                alert("You need to fill up all inputs !!!!");
            }
        }
        else{}
}

    changeInput(data,dataName)
    {
        switch(dataName){
            case 'name':
                this.setState({
                name: data
            });
            break;
            case 'email':
                this.setState({
                email: data
            });
            break;
            case 'password':
                this.setState({
                password: data
            });
            break;
            default:break;
        }
    }

    ClosingDropMenu()
    {
        if(document.getElementsByClassName("list")[0])
        {
            var x=document.getElementsByClassName("list")[0].addEventListener("click", () => {  
            this.setState({ blockClosinDropMenu: false
            }); }, true);
        }
      
        if(this.state.closeDropMenu && this.state.blockClosinDropMenu)
        {
            var i=!this.state.isOpen;
            this.setState({ isOpen: i
            });
            var i=!this.state.control;
            this.setState({ closeDropMenu: i
            });
            this.setState({ disabled: ''
            });
            window.removeEventListener("click",this.ClosingDropMenu);  
        }
        
        else{
                var i=!this.state.closeDropMenu;
                this.setState({ closeDropMenu: true
                });

                this.setState({
                    blockClosinDropMenu:true
                })
        }
    }

    openDropDownMenu()
    {
        this.setState({ closeDropMenu: false});

        var i=!this.state.isOpen;
        this.setState({ isOpen: i
        });
        if(this.state.disabled==='')
        this.setState({ disabled: 'disabled'
            });
        else
         this.setState({ disabled: ''
            });

        if(i)       
            window.addEventListener("click",this.ClosingDropMenu);     
    }  

    setSelected(id){
        this.setState({
            selected:id
        })

    }

   render() {
      return (
                <div className="centeredBody">
                        <div className="header">
                                <img className="inPictures" src="./Images/In_icon.png"></img>
                        </div>
                          <img className="triangle" src="./Images/triangle.png"></img>
                          <p className="textStart"> Get Started Absolutely <text id="freeText">FREE</text> </p>
                          <p className="textGet">No credit card required. </p>
                          <DropDownMenu openDropDownMenu={this.openDropDownMenu} isOpen={this.state.isOpen}
                          dropDownList={this.state.dropDownList} selected={this.state.selected} 
                          setSelected={this.setSelected}/>
                          <Input name={this.state.name} email={this.state.email} password={this.state.password}
                          changeInput={this.changeInput} disabled={this.state.disabled} />
                          <SubmitButton submitForm={this.submitForm} disabled={this.state.disabled}  />
                          <p className="textService">By clicking "Sign Up Free" I agree to Terms of Service </p>
                        <p className="textAccount">Already have an account? <text id="freeText">Login</text></p>
                        <Twitter className="iconTwitter"/> <img className="baskteball" src="./Images/basketball.png"></img>  
                </div>
      );
   }
}

export default SignUpForm;