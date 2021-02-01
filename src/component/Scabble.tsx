import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";

export class ScrabbleComponent extends Component<{}, {}> {
  word: any;
  hint = "";
  display: any;
  selection: any;
  disabled: any;
  successJumbotron: any;
  failureJumbotron: any;
  hintJumbotron: any = "";
  failed = false;
  success = false;
  hintFlag = false;
  selectionIndex: any;
  constructor(props: any) {
    super(props);
    this.newGame();
  }
  shuffleArray(array: any) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
  showHint() {
    this.hintFlag = true;
    this.hintJumbotron = (
      <Jumbotron className="text-center">
        <h1>Hint</h1>
        <p>{this.hint}</p>
      </Jumbotron>
    );
    this.setState({});
  }
  undo() {
    console.log(this);
    this.selection.pop();
    this.disabled[this.selectionIndex.pop()] = false;
    this.setState({});
  }
  check() {
    if (this.selection.join("") === this.word) {
      this.failed = false;
      this.success = true;
      this.successJumbotron = (
        <Jumbotron className="text-center">
          <h1>You Win</h1>
          <p>
            <i className="fa fa-smile-o fa-3x" aria-hidden="true"></i>
          </p>
          <p>
            Correct word &nbsp;
            {this.word}
          </p>
          <p>
            <Button variant="primary" onClick={this.newGame.bind(this)}>
              Next
            </Button>
          </p>
        </Jumbotron>
      );
    } else {
      this.failed = true;
      this.success = false;
      this.failureJumbotron = (
        <Jumbotron className="text-center">
          <h1>Try again!</h1>
          <p>
            <i className="fa fa-frown-o fa-3x" aria-hidden="true"></i>
          </p>
          <p>
            Correct word &nbsp;
            {this.word}
          </p>
          <p>
            <Button variant="primary" onClick={this.newGame.bind(this)}>
              Next
            </Button>
          </p>
        </Jumbotron>
      );
    }
    this.hintFlag = false;
    this.setState({});
  }

  wordClick(letter: any, clickIndex: any, event: any) {
    console.log(event);
    console.log(letter);
    this.selection.push(letter);
    this.selectionIndex.push(clickIndex);
    this.disabled[clickIndex] = true;
    this.setState({});
  }
  newGame() {
    this.word = "admin";
    this.hint = "स्वीकार करना";
    this.display = [...this.word];
    this.display = this.shuffleArray(this.display);
    this.selection = [];
    this.selectionIndex = [];
    this.disabled = [];
    this.failed = false;
    this.success = false;
    this.hintFlag = false;
    this.setState({});
  }
  render() {
    return (
      <>
        <br></br>{" "}
        <Container className="justify-content-center">
          <Row className="justify-content-center">
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button
                  variant="outline-dark"
                  onClick={this.newGame.bind(this)}
                >
                  New Game
                </Button>{" "}
              </ButtonGroup>
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button
                  variant="outline-dark"
                  disabled={
                    this.selectionIndex.length === 0 ||
                    this.failed ||
                    this.success
                  }
                  onClick={this.undo.bind(this)}
                >
                  Undo
                </Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button
                  disabled={this.hintFlag || this.failed || this.success}
                  variant="outline-dark"
                  onClick={this.showHint.bind(this)}
                >
                  Hint
                </Button>{" "}
              </ButtonGroup>
            </ButtonToolbar>
          </Row>
          <br></br>{" "}
          <Row className="justify-content-center">
            <ButtonToolbar aria-label="Toolbar with button groups">
              {this.word.split("").map((leter: string, index: any) => {
                return (
                  <ButtonGroup
                    className="mr-2"
                    aria-label="First group"
                    key={"fill" + index}
                  >
                    <Button variant="outline-primary">
                      {this.selection[index]}
                    </Button>
                  </ButtonGroup>
                );
              })}
            </ButtonToolbar>
          </Row>
          <br></br>{" "}
          <Row className="justify-content-center">
            <ButtonToolbar aria-label="Toolbar with button groups">
              {this.display.map((letter: string, index: any) => {
                return (
                  <ButtonGroup
                    className="mr-2"
                    aria-label="First group"
                    key={"word" + index}
                  >
                    <Button
                      // hidden={this.disabled[index] === true}
                      onClick={this.wordClick.bind(this, letter, index)}
                      disabled={this.disabled[index] === true}
                    >
                      {letter}
                    </Button>
                  </ButtonGroup>
                );
              })}
            </ButtonToolbar>
          </Row>{" "}
          <br></br>
          <Row
            className="justify-content-center"
            hidden={this.selection.length !== this.word.length}
          >
            <Button
              disabled={this.success || this.failed}
              onClick={this.check.bind(this)}
            >
              Check
            </Button>
          </Row>{" "}
          <br></br>
          <Row className="justify-content-center" hidden={!this.hintFlag}>
            {this.hintJumbotron}
          </Row>{" "}
          <Row
            className="justify-content-center"
            hidden={!(this.success && !this.failed)}
          >
            {this.successJumbotron}
          </Row>{" "}
          <Row
            className="justify-content-center"
            hidden={!(!this.success && this.failed)}
          >
            {this.failureJumbotron}
          </Row>{" "}
        </Container>
      </>
    );
  }
}
