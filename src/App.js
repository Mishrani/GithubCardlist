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
      {testData.map((test) => (
        <Card {...test} />
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

function App() {
  return (
    <div className="App">
      <div className="header">The GitHub Cards App</div>
      <CardList {...testData} />
    </div>
  );
}

export default App;
