import {
  siClaude,
  siCloudflare,
  siDocker,
  siElectron,
  siFastapi,
  siFirebase,
  siGit,
  siGithubactions,
  siGooglegemini,
  siJavascript,
  siKotlin,
  siKubernetes,
  siLatex,
  siLinux,
  siMinio,
  siMui,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siPytorch,
  siReact,
  siRedis,
  siSelenium,
  siSpring,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export const iconMap: Record<string, SimpleIcon> = {
  // Languages
  "Python": siPython,
  "JavaScript": siJavascript,
  "TypeScript": siTypescript,
  "Kotlin": siKotlin,
  "Redis": siRedis,

  // Frameworks
  "Next.js": siNextdotjs,
  "React": siReact,
  "Nest.js": siNestjs,
  "FastAPI": siFastapi,
  "Spring Framework": siSpring,
  "PyTorch": siPytorch,

  // System
  "Linux": siLinux,
  "Nginx": siNginx,
  "Docker": siDocker,
  "Kubernetes": siKubernetes,

  // Tools
  "Git": siGit,
  "Postman": siPostman,
  "Selenium": siSelenium,
  "GitHub Actions": siGithubactions,
  "Firebase": siFirebase,

  // Tech stack (repositories only)
  "Gemini SDK": siGooglegemini,
  "Claude SDK": siClaude,
  "Cloudflare API": siCloudflare,
  "Electron": siElectron,
  "Cloudflare SDK": siCloudflare,
  "Node.js": siNodedotjs,
  "MUI": siMui,
  "Tailwind CSS": siTailwindcss,
  "PostgreSQL": siPostgresql,
  "MinIO": siMinio,
  "LaTeX": siLatex,
};
