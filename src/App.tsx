import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import {useColorScheme} from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

function ThemeSwitch() {
  const {mode, setMode} = useColorScheme();

  return (
    <IconButton
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      sx={{position: "fixed", top: 16, right: 16}}
    >
      {mode === "dark" ? <LightModeIcon/> : <DarkModeIcon/>}
    </IconButton>
  );
}

function App() {
  return (
    <Container maxWidth="md">
      <ThemeSwitch/>
      <div className="flex-column gap-6 py-6">
        <ProfileSection/>
        <EducationSection/>
        <SkillsSection/>
        <ProjectsSection/>
      </div>
    </Container>
  );
}

export default App;
