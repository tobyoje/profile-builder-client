import "./SettingsHeader.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";

const SettingsHeader = () => {
  return (
    <>
      <div className="settings-header">
        <Link to="/settings">
          <img src={arrowLeft} />
        </Link>
        <h2 className="hero__heading">Your Settings</h2>
      </div>
    </>
  );
};

export default SettingsHeader;
