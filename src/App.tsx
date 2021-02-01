import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { ScrabbleComponent } from "./component/Scabble";
import { WordSearchComponent } from "./component/WordSearch";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link as={Link} to="/Scrabble">
                Scrabble
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/WordSearch">
                WordSearchComponent
              </Nav.Link>
            </NavItem>
          </Nav>
          {/* <Nav.Link type="div">
            <Link type="div" to="/Scrabble">
              ScrabbleComponent
            </Link>
          </Nav.Link>
          <Nav.Link type="div">
            <Link type="div" to="/WordSearch">
              WordSearchComponent
            </Link>
          </Nav.Link>
       */}
        </Navbar>
        <Switch>
          <Route path="/Scrabble">
            <ScrabbleComponent />
          </Route>
          <Route path="/WordSearch">
            <WordSearchComponent />
          </Route>
        </Switch>
        {/* <DashboardComponent></DashboardComponent> */}
      </div>
    </Router>
  );
}

export default App;
