import { FC } from "react";
import { useStyles } from "./styles";

const ComponentOne: FC = (): JSX.Element => {
  const styles = useStyles();

  return <div className={styles.demoStyle}></div>;
};

export default ComponentOne;
