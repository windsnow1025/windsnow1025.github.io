import Container from "@mui/material/Container";
import ProfileSection from "./components/sections/ProfileSection.tsx";
import EducationSection from "./components/sections/EducationSection.tsx";
import SkillsSection from "./components/sections/SkillsSection.tsx";
import ProjectsSection from "./components/sections/ProjectsSection.tsx";
import ThemeSwitch from "./components/common/ThemeSwitch.tsx";

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
