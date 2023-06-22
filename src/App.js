import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AddBasicInfo from "./pages/AddBasicInfo/AddBasicInfo";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddProfileImage from "./pages/AddProfileImage/AddProfileImage";
import AddSocialLinks from "./pages/AddSocialLinks/AddSocialLinks";
import AddExternalLinks from "./pages/AddExternalLinks/AddExternalLinks";
import AddImageCard from "./pages/AddImageCard/AddImageCard";
import AddGalleryImage from "./pages/AddGalleryImage/AddGalleryImage";
import AddStyles from "./pages/AddStyles/AddStyles";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfilePagePrivate from "./pages/ProfilePagePrivate/ProfilePagePrivate";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<SignupPage />} />
          <Route path="/basic" element={<AddBasicInfo />} />
          <Route path="/profile-images" element={<AddProfileImage />} />
          <Route path="/social-links" element={<AddSocialLinks />} />
          <Route path="/external-links" element={<AddExternalLinks />} />
          <Route path="/image-cards" element={<AddImageCard />} />
          <Route path="/gallery" element={<AddGalleryImage />} />
          <Route path="/styles" element={<AddStyles />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/private/:pageLink" element={<ProfilePagePrivate />} />
          <Route path="/:pageLink" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
