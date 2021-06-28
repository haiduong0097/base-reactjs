import { Switch, Redirect } from "react-router-dom";
import { TemplateSecondPage } from "../../components";
import { TemplateFirstPage } from "../../components/layout/template-first-page";
import ProtectedRoute from "../protected-route";

const ProtectedArea = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute
          path="/template-first-page"
          component={TemplateFirstPage}
        />
        <ProtectedRoute
          path="/template-second-page"
          component={TemplateSecondPage}
        />
        <ProtectedRoute
          path="/"
          component={() => <Redirect to="/template-first-page" />}
        />
        <ProtectedRoute component={() => <>Notfound Page</>} />
      </Switch>
    </div>
  );
};

export default ProtectedArea;
