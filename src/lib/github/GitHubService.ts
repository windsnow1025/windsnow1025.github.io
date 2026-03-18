import type {GitHubRepo, GitHubLocalRepo} from "./GitHub";
import {getGitHubAPIRepo} from "./GitHubClient";
import githubLocalRepos from "../../data/repositories.json";

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  return await Promise.all(
    (githubLocalRepos as GitHubLocalRepo[]).map(async (local) => {
      const api = await getGitHubAPIRepo(local.owner, local.name);
      return {...api, ...local};
    })
  );
}
