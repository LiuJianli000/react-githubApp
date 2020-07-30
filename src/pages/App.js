import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Popular from "./Popular";
import BatDesc from "./Battle/BatDesc";
import BatFinal from "./Battle/BatFinal";

class App extends Component {
  state = {
    page: "pop",
  };

  handleActive = (page) => {
    this.setState({
      page,
    });
  };

  render() {
    const { page } = this.state;

    return (
      <HashRouter>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: "50px",
            fontSize: "18px",
          }}
        >
          <span
            className="pbButton"
            onClick={() => this.handleActive("pop")}
            className={page === "pop" ? "pbActive" : "pbButton"}
          >
            <Link to="/popular">Popular</Link>
          </span>
          <span
            className="pbButton"
            onClick={() => this.handleActive("bat")}
            className={page === "bat" ? "pbActive" : "pbButton"}
          >
            <Link to="/battle">Battle</Link>
          </span>
        </div>

        <Switch>
          <Route path="/" component={Popular} exact />
          <Route exact={true} path="/popular" component={Popular} />
          <Route>
            <Route exact={true} path="/battle" component={BatDesc} />
            <Route path="/battle/result" component={BatFinal} />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default hot(App);
