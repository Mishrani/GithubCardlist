import React from "react";
import "./App.css";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];
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
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) =>
            this.setState({ userName: event.target.userName })
          }
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
    profiles: testData,
  };
  render() {
    return (
      <div className="App">
        <div className="header">The GitHub Cards App</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
