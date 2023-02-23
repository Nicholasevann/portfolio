import React, { Component, Fragment } from "react";
import "./CardProductComponent.css";
class CardProductComponent extends Component {
  state = {
    order: 4,
  };

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    });
    this.props.onPlus();
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      });
    }
    this.props.onMinus();
  };
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="img-thumb-prod">
            <img
              src="https://gdmagri.com/wp-content/uploads/2020/07/penjual-ayam-potong-1.jpg"
              alt=""
              style={{ width: 180 }}
            />
          </div>
          <p className="product-title">Ayam Mentah 1 Kg</p>
          <p className="product-name">
            Ayam Boiler import German dengan berat sebesar 1 kg
          </p>
          <p className="price">Rp. 200.000</p>
          <div className="counter">
            <button
              style={{ height: 50 }}
              className="minus"
              onClick={this.handleMinus}
            >
              -
            </button>
            <input
              type="text"
              name=""
              id=""
              className="text"
              value={this.state.order}
            />
            <button
              style={{ height: 50 }}
              onClick={this.handlePlus}
              className="plus"
            >
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CardProductComponent;
