import type { Config } from 'release-it';

export default {
  npm: {
    publish: true
  },
  git: {
    commitMessage: "${name}: Release ${version}",
    tagName: "utils@${version}",
  },
  hooks: {
    "before:init": ["git pull", "npm run typecheck"],
    "after:bump": "npx auto-changelog -p",
  },
  github: {
    release: true,
    releaseName: "${name} - ${version}",
  }
} satisfies Config;
