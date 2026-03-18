export interface GitHubAPIRepo {
  name: string;
  description: string | null;
  languages: Record<string, number>;
  stars: number;
  forks: number;
  sourceUrl: string;
}

export interface GitHubLocalRepo {
  owner: string;
  name: string;
  techStack: string[];
  webUrl?: string;
  publishUrl?: string;
  releasesUrl?: string;
}

export interface GitHubRepo extends GitHubAPIRepo, GitHubLocalRepo {}
