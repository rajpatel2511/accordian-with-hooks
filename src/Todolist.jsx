import React from "react";
import Todofun from "./Todofun";


class Todolist extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
                  
                  inputvalue : "",
                  inputarr : [],
                  newid : 0,
                 };
    this.onChange = this.onChange.bind(this);
    this.Submit = this.Submit.bind(this);
    this.Remove = this.Remove.bind(this);
  }

  onChange(event){
    this.setState({inputvalue : event.target.value})
  }

  // Submit(event){
  //   console.log(this.state.inputvalue);
  //     this.setState({inputvalue : [this.state.inputvalue,this.state.inputarr]})
  // }
  
  Submit(){
    console.log(this.state.inputvalue);
    // const currentvalue = this.state.inputvalue
    const newinputarr = [...this.state.inputarr];
    newinputarr.push({name : this.state.inputarr ,
                      isChecked : false ,
                      id : this.state.newid,
                      cssStyle : {textdecoration : "line-through",color : "black"}})
    this.setState({
      inputarr : newinputarr,
      inputvalue : "",
     
    })
  }

  Remove(){
  this.setState({
    inputarr : [],
  })

  }
 
  render() {
    console.log(this.state.inputarr);
   return <>
   <input value={this.state.inputvalue} onChange = {this.onChange} />
   <button onClick={this.Submit}>Submit</button>
   <button onClick={this.Remove}>Remove</button>
   <Todofun inputarr = {this.state.inputarr}/>
   </>

  }
}

export default Todolist;