import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsUpdateTitle">Delete Your Account</span>
        </div>
        <form action="settingForm">
          <label>Profile Piccture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label >Username</label>
          <input type="text" placeholder="" />
          <label >Email</label>
          <input type="email" placeholder="" />
          <label >Password</label>
          <input type="password" placeholder="" />
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
