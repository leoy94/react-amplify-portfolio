import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  state = {};

  //array for rows
  //imbedded array for columns (or "items")

  render() {
    return (
      <div className="row">
        <div className="column middle">
          <h2>Main Content</h2>
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
        </div>
      </div>
    );
  }
}

export default Body;
