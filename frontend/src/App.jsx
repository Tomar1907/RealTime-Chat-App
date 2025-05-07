import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/SignUpPage";
import SettingPage from "./pages/SignUpPage";
import ProfilePage from "./pages/SignUpPage";
import {Routes , Route} from "react-router-dom";

const App = () => {
  return (
    <div>
     <Navbar />

     <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/settings" element={<SettingPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>

     </Routes>
    </div>
  );
};

export default App;
