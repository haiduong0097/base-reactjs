import { FC } from "react";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const TemplateFirstPage: FC = (): JSX.Element => {
  const history = useHistory();
  const { t: translate } = useTranslation();
  const styles = useStyles();

  const handleRedirect = () => {
    history.push("/template-second-page");
  };

  return (
    <>
      <div className={styles.demoStyle} onClick={() => {}}>
        {translate(`demo.text.language`)}
      </div>
      <div className={styles.demoStyle} onClick={() => {}}>
        {translate(`message.MSG_001`)}
      </div>
      <div className={styles.demoStyle} onClick={() => {}}>
        {translate(`error.ERR_001`)}
      </div>
      <div
        className={styles.linkRedirect}
        onClick={() => {
          handleRedirect();
        }}
      >
        Go to template second page
      </div>
    </>
  );
};

export default TemplateFirstPage;
