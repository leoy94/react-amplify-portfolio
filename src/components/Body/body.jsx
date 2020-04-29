import React, { Component } from "react";
import "./body.css";
import homeHeader from "./home-header-1.jpg"

class Body extends Component {
  state = {
    currenttab: this.props.currenttab,
    rows: [],
    columns: [{id:1, text:""},{id:2, text:""},{id:3, text:""}],
    columnsperrow: 3
  };

  getwindowsize  = () => {
    let width = window.outerWidth;
    console.log(width);
    return width; 
  }

  renderHeaderTitle = () => {
    let {currenttab} = this.state;
    if(this.state.currenttab!=this.props.currenttab){
      currenttab = this.props.currenttab; 
      this.setState({currenttab: currenttab});

    } 
    if(currenttab=="Home"){
    return <h1 style={{backgroundColor: '#a32727', color: 'white', marginTop: '0'}}>{currenttab}</h1>
    }
    else{
      return <h1 style={{color: 'white', marginTop: '0', backgroundImage: `url(${homeHeader})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>{currenttab}</h1>
    }
  }

  renderColumns = (text) => {
    let columns = this.state.columns.map((column) => {
        //************NOTSURE IF FUNCTIONAL YET */
        if(column.text!=""){
         //do something
        }
        column.text = " Lorem ipsum dolor sit amet, consectetur adipiscing elit"+
        "Maecenas sit amet pretium urna. Vivamus venenatis velit nec"+
        "neque ultricies, eget elementum magna tristique. Quisque"+
        "vehicula, risus eget aliquam placerat, purus leo tincidunt eros"+
        "eget luctus quam orci in velit. Praesent scelerisque tortor sed"+
        "accumsan convallis."

        let new_columntext = column.text;
        //console.log(column.text);
      return (
          <div className="column" id={column.id} style={{color: 'black', marginTop: '0', backgroundColor:'rgb(163,39,39, 0.20)', margin: '1%'}} >
          <h2>Column {column.id}</h2>
          <p>{new_columntext}</p>
      </div>
      );
    });
    return columns;
  }

  
  renderRows = () => {
    return(
      <div className="row">
        <div className="column middle">
          {/* <h2>Main Content</h2> */}
          
          <div className="row">
          {this.renderColumns()}
          </div>
          <h2>If Youre Reading This, I love you MOM!</h2>
        </div>
      </div>
    );
  }

  renderBody = () => {
    
    return (
      <div>
        <div>{this.renderHeaderTitle()}</div>
        <div>{this.renderRows()}</div>
      </div>
    );

  }

//array for rows
//imbedded array for columns (or "items")

  render() {
    return (
      this.renderBody()
    );
  }
}

export default Body;
