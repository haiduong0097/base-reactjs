import { FC } from "react";
import useStyles from "./styles";

const TemplateSecondPage: FC = (): JSX.Element => {
  const styles = useStyles();

  return <div className={styles.demoStyle}>{`TemplateSecondPage`}</div>;
};

export default TemplateSecondPage;
