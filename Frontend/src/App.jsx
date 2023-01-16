import InputField from "./components/InputField";
import Button from "./components/Button";

import UnsplashLogo from "./assets/my_unsplash_logo.svg";
import SearchIcon from "./assets/search_icon.svg";

import "./App.css";

function App() {
  return (
    <div className="m-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img src={UnsplashLogo} alt="" />
          <InputField type="text" placeholder="Search by name">
            <img src={SearchIcon} alt="" />
          </InputField>
        </div>
        <Button backgroundColor="#3DB46D">Add a photo</Button>
      </div>
    </div>
  );
}

export default App;
