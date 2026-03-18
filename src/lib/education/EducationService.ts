import type { Education } from "./Education";
import educationData from "../../data/education.json";

export function getEducations(): Education[] {
  return educationData as Education[];
}
