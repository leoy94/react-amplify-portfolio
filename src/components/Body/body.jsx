import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  state = {
    currenttab: this.props.currenttab,
  };

  //array for rows
  //imbedded array for columns (or "items")

  renderHeader = () => {
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

  render() {
    return (
      <div className="row">
        <div className="column middle">
          {/* <h2>Main Content</h2> */}
          {this.renderHeader()}
          <div className="row">
            <div className="column">
              <h2>Column</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet pretium urna. Vivamus venenatis velit nec
                neque ultricies, eget elementum magna tristique. Quisque
                vehicula, risus eget aliquam placerat, purus leo tincidunt eros,
                eget luctus quam orci in velit. Praesent scelerisque tortor sed
                accumsan convallis.
              </p>
            </div>

            <div className="column">
              <h2>Column</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet pretium urna. Vivamus venenatis velit nec
                neque ultricies, eget elementum magna tristique. Quisque
                vehicula, risus eget aliquam placerat, purus leo tincidunt eros,
                eget luctus quam orci in velit. Praesent scelerisque tortor sed
                accumsan convallis.
              </p>
            </div>

            <div className="column">
              <h2>Column</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet pretium urna. Vivamus venenatis velit nec
                neque ultricies, eget elementum magna tristique. Quisque
                vehicula, risus eget aliquam placerat, purus leo tincidunt eros,
                eget luctus quam orci in velit. Praesent scelerisque tortor sed
                accumsan convallis.
              </p>
            </div>
          </div>
          <h2>If Youre Reading This, I love you MOM!</h2>
        </div>
      </div>
    );
  }
}

export default Body;
