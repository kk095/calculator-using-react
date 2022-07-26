import "./App.css";
import "./animate.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      oprand1: null,
      operator: null,
      current: "0",
      fontSize: "3rem",
    };
  }

  animation = (e) => {
    e.target.classList.add("animate__bounceIn");
    setTimeout(() => {
      e.target.classList.remove("animate__bounceIn");
    }, 500);
  };

  handleNumberClick = (e) => {
    let num = e.target.innerHTML;
    this.animation(e);
    this.setState((prevState) => {
      if (prevState.current === "0") {
        return {
          current: num,
        };
      } else {
        return {
          current: prevState.current + num,
        };
      }
    });
  };

  handleClickCE = (e) => {
    this.animation(e);
    this.setState({
      oprand1: null,
      operator: null,
      current: "0",
    });
  };
  handleClickBackSpace = (e) => {
    this.animation(e);
    this.setState((prevState) => {
      if (prevState.current === "0") {
        return {
          current: prevState.current,
        };
      } else if (prevState.current.length === 1) {
        return {
          current: "0",
        };
      }
      if (prevState.current.length === 2 && prevState.current[0] === "-") {
        return {
          current: "0",
        };
      }
      return {
        current: prevState.current.substr(0, prevState.current.length - 1),
      };
    });
  };

  handleSignChange = (e) => {
    this.animation(e);
    this.setState((prevState) => {
      if (prevState.current === "0") {
        return {
          current: prevState.current,
        };
      }
      if (prevState.current[0] === "-") {
        return {
          current: prevState.current.substr(1),
        };
      }
      return {
        current: "-" + prevState.current,
      };
    });
  };

  handleDecimalVal = (e) => {
    this.animation(e);
    this.setState((prevState) => {
      if (prevState.current.indexOf(".") !== -1) {
        return {
          current: prevState.current,
        };
      } else {
        return {
          current: prevState.current + ".",
        };
      }
    });
  };

  handleLOG = (e) => {
    this.animation(e);
    let log = Math.log(this.state.current);
    log = log.toFixed(2);
    this.setState({
      current: String(log),
    });
  };

  handleSquare = (e) => {
    this.animation(e);
    let sqr = eval(this.state.current + " " + "*" + " " + this.state.current);

    this.setState({
      current: String(sqr),
    });
  };

  handleSquareRoot = (e) => {
    this.animation(e);
    let num = Math.sqrt(parseInt(this.state.current));
    this.setState({
      current: String(num),
    });
  };

  handleOneDivide = (e) => {
    this.animation(e);
    let oneDiv = eval("1 / " + this.state.current);
    this.setState({
      current: String(oneDiv),
    });
  };

  handleArithmetic = (e) => {
    this.animation(e);
    let opt = e.target.getAttribute("data-val");
    if (this.state.oprand1 === null) {
      this.setState((prevState) => {
        return {
          oprand1: prevState.current,
          operator: opt,
          current: "0",
        };
      });
    } else {
      let res = eval(
        this.state.oprand1 +
          " " +
          this.state.operator +
          " " +
          this.state.current
      );
      this.setState({
        oprand1: res,
        current: "0",
        operator: opt,
      });
    }
  };

  handleEqual = (e) => {
    this.animation(e);
    if (this.state.oprand1 !== null) {
      let res = eval(
        this.state.oprand1 +
          " " +
          this.state.operator +
          " " +
          this.state.current
      );
      this.setState({
        oprand1: null,
        current: String(res),
        operator: null,
      });
    }
  };

  render() {
    let FontSize = {
      fontSize: this.state.fontSize,
    };
    return (
      <div className="App animate__bounceIn">
        <h1>Calculator</h1>
        <div className="result">
          {this.state.oprand1}
          {this.state.operator}
        </div>
        <div className="input" style={FontSize}>
          {this.state.current}
        </div>
        <div className="calculator">
          <div className="rows">
            <div
              id="ce"
              className="fce columns symbol red "
              onClick={this.handleClickCE}
            >
              CE
            </div>
            <div
              id="divide"
              className="fdivide columns symbol"
              data-val="/"
              onClick={this.handleArithmetic}
            >
              &divide;
            </div>
            <div
              id="square"
              className="fsquare columns symbol "
              onClick={this.handleSquare}
            >
              x<sup>2</sup>
            </div>
            <div
              id="back"
              className="fback columns symbol red "
              onClick={this.handleClickBackSpace}
            >
              <i className="fas fa-backspace"></i>
            </div>
          </div>
          <div className="rows">
            <div
              id="mod"
              className=" fmod columns symbol "
              data-val="%"
              onClick={this.handleArithmetic}
            >
              %
            </div>
            <div
              id="sqrt"
              className="fsqrt columns symbol"
              onClick={this.handleSquareRoot}
            >
              &#8730;
            </div>
            <div
              id="oneDivide"
              className=" foneDivide columns symbol"
              onClick={this.handleOneDivide}
            >
              {" "}
              <sup>1</sup>/ <sub>x</sub>{" "}
            </div>
            <div
              id="log"
              className="flog columns symbol "
              onClick={this.handleLOG}
            >
              log
            </div>
          </div>
          <div className="rows">
            <div
              id="seven"
              className="columns"
              onClick={this.handleNumberClick}
            >
              7
            </div>
            <div
              id="eight"
              className="columns"
              onClick={this.handleNumberClick}
            >
              8
            </div>
            <div id="nine" className="columns" onClick={this.handleNumberClick}>
              9
            </div>
            <div
              id="multiply"
              className="fmultiply columns symbol"
              data-val="*"
              onClick={this.handleArithmetic}
            >
              X
            </div>
          </div>
          <div className="rows">
            <div
              id="four"
              className="columns  f"
              onClick={this.handleNumberClick}
            >
              4
            </div>
            <div id="five" className="columns" onClick={this.handleNumberClick}>
              5
            </div>
            <div id="six" className="columns" onClick={this.handleNumberClick}>
              6
            </div>
            <div
              id="minus"
              className="fminus columns symbol"
              data-val="-"
              onClick={this.handleArithmetic}
            >
              -
            </div>
          </div>
          <div className="rows">
            <div id="one" className="columns" onClick={this.handleNumberClick}>
              1
            </div>
            <div id="two" className="columns" onClick={this.handleNumberClick}>
              2
            </div>
            <div
              id="three"
              className="columns"
              onClick={this.handleNumberClick}
            >
              3
            </div>
            <div
              id="plus"
              className="fplus columns symbol"
              data-val="+"
              onClick={this.handleArithmetic}
            >
              +
            </div>
          </div>
          <div className="rows">
            <div
              id="sign"
              className=" fsign columns"
              onClick={this.handleSignChange}
            >
              +/-
            </div>
            <div id="zero" className="columns" onClick={this.handleNumberClick}>
              0
            </div>
            <div
              id="dot"
              className="fdot columns"
              onClick={this.handleDecimalVal}
            >
              .
            </div>
            <div
              id="equal"
              className=" fequal columns symbol"
              onClick={this.handleEqual}
            >
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
