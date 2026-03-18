import { Octokit } from "octokit";
import type {GitHubAPIRepo} from "./GitHub";

const octokit = new Octokit();

export async function getGitHubAPIRepo(owner: string, repo: string): Promise<GitHubAPIRepo> {
  const { data } = await octokit.rest.repos.get({ owner, repo });
  const { data: languages } = await octokit.rest.repos.listLanguages({ owner, repo });

  return {
    name: data.name,
    description: data.description,
    languages: languages,
    stars: data.stargazers_count,
    forks: data.forks_count,
    sourceUrl: data.html_url,
  };
}
