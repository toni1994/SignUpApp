import TetherComponent from 'react-tether';
import React from 'react';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    
    this.setSelected=this.setSelected.bind(this);
  }

  setSelected(id){
      this.props.setSelected(id);
  }
      

  render() {
    return(
      <TetherComponent
        attachment="bottom center"
        targetAttachment= 'bottom center'
        offset= '-60px 0'
        constraints={[{
          to: 'scrollParent',
          attachment: 'together',
        }]}
      >
        { /* First child: This is what the item will be tethered to */ }
        <button className="dropDownButton" onClick={this.props.openDropDownMenu}>
           {this.props.selected === "" ? <p>Your warrior &#9662;</p> : 
           <div> <img className="itemImage" 
           src={this.props.dropDownList[this.props.selected].img}></img>
            {this.props.dropDownList[this.props.selected].name} &#9662;
            </div>
            }
        </button>
        { /* Second child: If present, this item will be tethered to the the first child */ }
        {
          this.props.isOpen &&
          <div className="dropItems">
              <img className="triangleDropMenu" src="./Images/triangleDropMenu.png"></img>
              <ul className="list">
                  {  this.props.dropDownList.map((list)=>
                  <li key={list.id} className="dropItem" onClick={()=>this.setSelected(list.id)} >
                      <div className="icon">
                      <img className="itemImage" src={list.img}></img>
                      </div>
                        {list.name}
                  </li>
                  ) }
              </ul>
          </div>
        }
      </TetherComponent>
    )
  }
}

export default DropDownMenu;