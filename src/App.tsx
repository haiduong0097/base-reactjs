import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ErrorBoundaryWrapper } from "./components";
import { ProtectedArea, PublicArea } from "./routes";

const App = () => {
  return (
    <>
      <Router>
        <ErrorBoundaryWrapper>
          <Switch>
            <Route path="/auth" component={PublicArea} />
            <Route path="/" component={ProtectedArea} />
          </Switch>
        </ErrorBoundaryWrapper>
      </Router>
    </>
  );
};

export default App;
