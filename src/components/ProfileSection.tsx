import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {getProfile} from "../lib/profile/ProfileService";
import type {SvgIconComponent} from "@mui/icons-material";

const contactIconMap: Record<string, SvgIconComponent> = {
  "phone": PhoneIcon,
  "email": EmailIcon,
  "linkedin": LinkedInIcon,
  "github": GitHubIcon,
};

function ProfileSection() {
  const profile = getProfile();

  return (
    <section>
      <Typography variant="h3" component="h1" gutterBottom>
        {profile.name}
      </Typography>
      <div className="flex-start-center gap-4">
        {profile.contacts.map((contact) => {
          const Icon = contactIconMap[contact.type];
          return (
            <Chip
              key={contact.type}
              label={contact.label}
              icon={Icon ? <Icon/> : undefined}
              component="a"
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              clickable
              variant="outlined"
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProfileSection;
