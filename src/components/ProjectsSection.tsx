import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import InventoryIcon from "@mui/icons-material/Inventory";
import DownloadIcon from "@mui/icons-material/Download";
import {getGitHubRepos} from "../lib/github/GitHubService";
import type {GitHubRepo} from "../lib/github/GitHub";
import {SimpleIconSvg} from "./SkillsSection";
import {iconMap} from "../lib/icon/IconMap";
import {languageColorMap} from "../lib/icon/LanguageColorMap";

function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getGitHubRepos()
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <div className="flex-center p-4">
          <CircularProgress/>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Typography color="error">{error}</Typography>
      </section>
    );
  }

  return (
    <section>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <div className="flex-column gap-3">
        {repos.map((repo) => (
          <Card key={repo.name} variant="outlined" sx={{transition: "border-color 0.2s", "&:hover": {borderColor: "text.primary"}}}>
            <CardContent>
              <div className="flex-between">
                <Typography variant="h6">{repo.name}</Typography>
                <div className="flex-center gap-2">
                  <div className="flex-center-nowrap gap-0.5">
                    <StarIcon fontSize="small" sx={{color: "text.secondary"}}/>
                    <Typography variant="body2" color="text.secondary">
                      {repo.stars}
                    </Typography>
                  </div>
                  <div className="flex-center-nowrap gap-0.5">
                    <ForkRightIcon fontSize="small" sx={{color: "text.secondary"}}/>
                    <Typography variant="body2" color="text.secondary">
                      {repo.forks}
                    </Typography>
                  </div>
                </div>
              </div>

              {repo.description && (
                <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                  {repo.description}
                </Typography>
              )}

              {Object.keys(repo.languages).length > 0 && (() => {
                const totalBytes = Object.values(repo.languages).reduce((a, b) => a + b, 0);
                const entries = Object.entries(repo.languages).map(([lang, bytes]) => ({
                  lang,
                  percent: (bytes / totalBytes) * 100,
                  color: languageColorMap[lang] || "#8b8b8b",
                }));
                return (
                  <div className="mt-2">
                    <div style={{display: "flex", borderRadius: 4, overflow: "hidden", height: 8, gap: 2}}>
                      {entries.map(({lang, percent, color}) => (
                        <div
                          key={lang}
                          style={{width: `${percent}%`, backgroundColor: color}}
                        />
                      ))}
                    </div>
                    <div className="flex-start-center gap-3 mt-1">
                      {entries.map(({lang, percent, color}) => (
                        <div key={lang} className="flex-center-nowrap gap-1">
                          <div
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              backgroundColor: color,
                              flexShrink: 0,
                            }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {lang} {percent.toFixed(1)}%
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              <div className="flex-start-center gap-1 mt-2">
                {repo.techStack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    {...(iconMap[tech] ? {icon: <SimpleIconSvg name={tech}/>} : {})}
                    variant="outlined"
                    size="small"
                    sx={{transition: "border-color 0.2s", "&:hover": {borderColor: "text.primary"}}}
                  />
                ))}
              </div>

              <div className="flex-start-center gap-3 mt-2">
                <Link
                  href={repo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-center-nowrap gap-0.5"
                  sx={{textDecoration: "none", color: "text.secondary"}}
                >
                  <CodeIcon fontSize="small"/>
                  <Typography variant="body2">Source</Typography>
                </Link>
                {repo.webUrl && (
                  <Link
                    href={repo.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-center-nowrap gap-0.5"
                    sx={{textDecoration: "none", color: "text.secondary"}}
                  >
                    <LanguageIcon fontSize="small"/>
                    <Typography variant="body2">Website</Typography>
                  </Link>
                )}
                {repo.publishUrl && (
                  <Link
                    href={repo.publishUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-center-nowrap gap-0.5"
                    sx={{textDecoration: "none", color: "text.secondary"}}
                  >
                    <InventoryIcon fontSize="small"/>
                    <Typography variant="body2">Package</Typography>
                  </Link>
                )}
                {repo.releasesUrl && (
                  <Link
                    href={repo.releasesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-center-nowrap gap-0.5"
                    sx={{textDecoration: "none", color: "text.secondary"}}
                  >
                    <DownloadIcon fontSize="small"/>
                    <Typography variant="body2">Releases</Typography>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
