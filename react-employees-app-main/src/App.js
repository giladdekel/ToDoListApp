import React from "react";
import {
  MDBContainer,

} from "mdbreact";
import { Route, Switch } from "react-router";

import TaskPage from "./Components/Tasks/TaskPage";

function App() {
  return (
    <div>
      <MDBContainer>
        <Switch>
          <Route path="/" exact component={TaskPage} />
        </Switch>
      </MDBContainer>
    </div>
  );
}

export default App;
