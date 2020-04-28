import React, { Component } from "react";
import "./body.css";

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
    return <h1>{currenttab}</h1>
    }
    else{
      return <h1>{currenttab}</h1>
    }
  }

  renderColumns = () => {
    let columns = this.state.columns.map((column) => {
        column.text = " Lorem ipsum dolor sit amet, consectetur adipiscing elit"+
         "Maecenas sit amet pretium urna. Vivamus venenatis velit nec"+
         "neque ultricies, eget elementum magna tristique. Quisque"+
         "vehicula, risus eget aliquam placerat, purus leo tincidunt eros"+
         "eget luctus quam orci in velit. Praesent scelerisque tortor sed"+
         "accumsan convallis."
      return (
      <div className="column" id={column.id}>
         <h2>Column {column.id}</h2>
         <p>{column.text}</p>
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
    let body_header =  this.renderHeaderTitle(); 
    let body_rows = this.renderRows();
    
    return (
      <div>
        <div>{body_header}</div>
        <div>{body_rows}</div>
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
