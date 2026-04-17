import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {getEducations} from "../../lib/education/EducationService.ts";

function EducationSection() {
  const educations = getEducations();

  return (
    <section>
      <Typography variant="h4" component="h2" gutterBottom>
        Education
      </Typography>
      <div className="flex-column gap-3">
        {educations.map((edu) => (
          <Card key={edu.id} variant="outlined" sx={{transition: "border-color 0.2s", "&:hover": {borderColor: "text.primary"}}}>
            <CardContent>
              <div className="flex-between">
                <Typography variant="h6">{edu.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.period}
                </Typography>
              </div>
              <Typography variant="body1" color="text.secondary">
                {edu.degree}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt: 0.5}}>
                {edu.location}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt: 0.5}}>
                GPA: {edu.gpa}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
