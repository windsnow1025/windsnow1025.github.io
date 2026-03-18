import type { SkillCategory } from "./Skill";
import skillsData from "../../data/skills.json";

export function getSkills(): SkillCategory[] {
  return skillsData as SkillCategory[];
}
