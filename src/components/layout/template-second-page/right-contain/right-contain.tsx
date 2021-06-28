import { FC } from "react";
import { useStyles } from "./styles";

const RightContain: FC = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.demoStyle} onClick={() => {}}>
      {`TemplateFirstPage`}
    </div>
  );
};

export default RightContain;
