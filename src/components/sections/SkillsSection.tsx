import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import {getSkills} from "../../lib/skill/SkillService.ts";
import {iconMap} from "../../lib/icon/IconMap.ts";

function SimpleIconSvg({name, size = 16}: { name: string; size?: number }) {
  const icon = iconMap[name];
  if (!icon) return null;

  return (
    <span
      style={{display: "inline-flex", width: size, height: size, marginLeft: 8}}
      dangerouslySetInnerHTML={{
        __html: icon.svg.replace(
          "<svg",
          `<svg width="${size}" height="${size}" fill="#${icon.hex}"`
        ),
      }}
    />
  );
}

function SkillsSection() {
  const skills = getSkills();

  return (
    <section>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <div className="flex-column gap-3">
        {skills.map((category) => (
          <div key={category.id}>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {category.label}
            </Typography>
            <div className="flex-start-center gap-2">
              {category.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  {...(iconMap[item] ? {icon: <SimpleIconSvg name={item}/>} : {})}
                  variant="outlined"
                  size="small"
                  sx={{transition: "border-color 0.2s", "&:hover": {borderColor: "text.primary"}}}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export {SimpleIconSvg};
export default SkillsSection;
