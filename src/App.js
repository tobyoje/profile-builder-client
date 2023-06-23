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
import EditBasicInfo from "./pages/EditBasicInfo/EditBasicInfo";
import EditProfileImage from "./pages/EditProfileImage/EditProfileImage";
import EditSocialLinks from "./pages/EditSocialLinks/EditSocialLinks";
import EditExternalLinks from "./pages/EditExternalLinks/EditExternalLinks";
import EditImageCard from "./pages/EditImageCard/EditImageCard";
import EditGalleryImage from "./pages/EditGalleryImage/EditGalleryImage";
import EditStyles from "./pages/EditStyles/EditStyles";

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
          <Route path="/edit-basic/:pageLink" element={<EditBasicInfo />} />
          <Route path="/edit-profile-images/:pageLink" element={<EditProfileImage />} />
          <Route path="/edit-socials/:pageLink" element={<EditSocialLinks />} />
          <Route path="/edit-external/:pageLink" element={<EditExternalLinks />} />
          <Route path="/edit-image-cards/:pageLink" element={<EditImageCard />} />
          <Route path="/edit-gallery/:pageLink" element={<EditGalleryImage />} />
          <Route path="/edit-styles/:pageLink" element={<EditStyles />} />





          <Route path="/private/:pageLink" element={<ProfilePagePrivate />} />
          <Route path="/:pageLink" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
