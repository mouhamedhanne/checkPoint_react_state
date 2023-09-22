import React, { Component } from "react";
import ImgSrc from "./assets/mane.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Sadio Mane",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: `${ImgSrc}`,
        profession: "Footballeur Professionnelle",
      },
      show: false,
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleDisplay = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, image, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={image} alt={fullName} style={{ width: "200px" }} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
