import { describe, it, expect } from "vitest";
import { getGitHubAPIRepo } from "./GitHubClient";

describe("getRepo", () => {
  it("should fetch a public repo", async () => {
    const repo = await getGitHubAPIRepo("microsoft", "TypeScript");

    expect(repo.name).toBe("TypeScript");
    expect(repo.sourceUrl).toBe("https://github.com/microsoft/TypeScript");
    expect(repo.stars).toBeGreaterThanOrEqual(0);
    expect(repo.forks).toBeGreaterThanOrEqual(0);
    expect(typeof repo.languages).toBe("object");
  });
});
