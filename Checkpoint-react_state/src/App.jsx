import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Shady belhadj",
        bio: "full stack dedveloper",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s",
        profession: "Software engineer",
      },
      shows: false,
      time: 0,
      timer: null,
    };
  }

  componentDidMount() {
    this.state.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("updated");
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  toggleProfile = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleProfile}>
          {this.state.shows ? "Hide profile" : "Show profile"}
        </button>
        {this.state.shows === true && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <p>{this.state.Person.profession}</p>
            <img src={this.state.Person.imgSrc} />
          </div>
        )}
        <p>TIME : {this.state.time} s</p>
      </>
    );
  }
}

export default App;
