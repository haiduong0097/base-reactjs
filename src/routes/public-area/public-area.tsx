import { Route, Switch } from "react-router-dom";

const PublicArea = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" render={(props) => <>Login Page</>} />
        <Route path="/auth/register" render={(props) => <>register Page</>} />
        <Route component={() => <>Notfound</>} />
      </Switch>
    </div>
  );
};

export default PublicArea;
