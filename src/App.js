import React from "react";
import axios from "axios";
import "./App.css";
//// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.profiles.map((test) => (
        <Card key={test.name} {...test} />
      ))}
    </div>
  );
};
const Card = (props) => {
  return (
    <div className="card-component">
      <img src={props.avatar_url} alt="pp" />
      <div className="profile-info">
        <div>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

class Form extends React.Component {
  state = {
    userName: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.getData(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="username"
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="header">The GitHub Cards App</div>
        <Form getData={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
