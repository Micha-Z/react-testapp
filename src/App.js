import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import About from "./components/pages/About";
import Test from "./components/layout/Test";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    test: "hello world",
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&clint_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_secret}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { users, loading, test } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Test test={test} />
                  <div className="container">
                    <Alert alert={this.state.alert} />
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </div>
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
