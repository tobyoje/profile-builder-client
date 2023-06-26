import "./SettingsHeader.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import { Link, useParams } from "react-router-dom";

const SettingsHeader = () => {
  const { pageLink } = useParams();

  return (
    <>
      <div className="settings-header">
      <Link to={`/settings/${pageLink}`}>
          <img src={arrowLeft} />
        </Link>
        <h2 className="settings-heading">Your Settings</h2>
      </div>
    </>
  );
};

export default SettingsHeader;
