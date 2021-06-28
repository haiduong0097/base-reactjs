import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./error-fall-back";

const ErrorBoundaryWrapper: FC = ({ children }) => {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        {children}
      </ErrorBoundary>
    </>
  );
};

export default ErrorBoundaryWrapper;
