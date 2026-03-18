import type { Profile } from "./Profile";
import profileData from "../../data/profile.json";

export function getProfile(): Profile {
  return profileData as Profile;
}
