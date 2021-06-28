import { FC } from "react";
import { ComponentTwoChild } from "./component-two-child";
import { useStyles } from "./styles";

const ComponentTwo: FC = (): JSX.Element => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.demoStyle}></div>
      <ComponentTwoChild />
    </>
  );
};

export default ComponentTwo;
