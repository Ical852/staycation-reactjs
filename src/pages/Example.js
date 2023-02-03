import Breadcrumb from "elements/Breadcrumb";
import { InputNumber, InputDate } from "elements/Form";
import React, { Component } from "react";
export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  suffix = () => {
      if (this.state.value == "" || this.state.value < 1) {
          this.setState({suffix : ""})
      } else if (this.state.value > 1) {
        this.setState({suffix : "nights"})
      } else {
          this.setState({suffix : "night"})
      }
  }

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb
              data={breadcrumbList}
            />
          </div>
        </div>
      </div>
    );
  }
}
