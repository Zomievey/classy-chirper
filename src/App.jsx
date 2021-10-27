import React from "react";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      header: "",
      chirps: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        chirps: [
          { id: uuidv4(), task: "First Task Loaded" },
          { id: uuidv4(), task: "Second Task Loaded" },
          { id: uuidv4(), task: "Third Task Loaded" },
        ],
      });
    }, 2000);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ task: "" });
    this.setState({ header: "" });
    this.setState({
      chirps: [...this.state.chirps, { id: uuidv4(), task: this.state.task }],
    });
  }

  render() {
    return (
      <>
        <main className="container">
          <h1 className="text-center xl" htmlFor="header">
            Chirper
          </h1>
          <section className="row justify-content-center mt-5"></section>
          <div className="col-md-7"></div>
          <form className="form-group">
            <h4 htmlFor="task">What's on your mind?</h4>
            <input
              value={this.state.task}
              onChange={(e) => this.setState({ task: e.target.value })}
              className="form-control"
            />
            <button
              onClick={(e) => this.handleSubmit(e)}
              className="btn btn-primary mt-3"
            >
              Add Chirp
            </button>
          </form>
        </main>
        <section className="row justify-content-center mt-3">
          <div className="col-md-6">
            <ul className="list-group">
              {this.state.chirps.map((chirp) => (
                <li className="list-group-item" key={chirp.id}>
                  {chirp.task}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default App;
