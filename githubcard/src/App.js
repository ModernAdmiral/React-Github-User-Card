import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
// import axios from "axios";

// let peopleArray = [
//   "modernadmiral",
//   "Velqro",
//   "tetondan",
//   "dustinmyers",
//   "justsml",
//   "luishrd",
//   "bigknell"
// ];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      data: []
    };
  }

  componentDidMount() {
    console.log("CDM is running!");
    // fetch initial data

    fetch(`https://api.github.com/users/modernadmiral`)
      .then(res => res.json())
      .then(response => {
        console.log("response", response);
        this.setState({ myData: response });
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

    fetch(`https://api.github.com/users/modernadmiral/followers`)
      .then(res => res.json())
      .then(response => {
        console.log("response", response);
        this.setState({ data: response });
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

    console.log("people data", this.state.data);
    // set up event listeners / subscriptions
    // pretend this is fetching from an API
  }

  render() {
    console.log("tha data", this.state.data);
    return (
      <div className="container">
        <header>
          <Card
            name={this.state.myData.name}
            username={this.state.myData.login}
            img={this.state.myData.avatar_url}
            location={this.state.myData.location}
            profile={this.state.myData.html_url}
            followers={this.state.myData.followers}
            following={this.state.myData.following}
            bio={this.state.myData.bio}
          />
          {this.state.data.map(e => {
            console.log("e", e);
            return (
              <Card
                username={e.login}
                img={e.avatar_url}
                profile={e.html_url}
              />
            );
          })}
        </header>
      </div>
    );
  }
}
