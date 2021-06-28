import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  // TODO: check authenticated in redux
  // const isAuthenticated = user && user.address;

  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
