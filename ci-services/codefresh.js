'use strict'

const env = process.env

module.exports = {
  // The GitHub repo slug
  repoSlug: env.CF_REPO_NAME,
  // The name of the current branch
  branchName: env.CF_BRANCH,
  // Is this a regular build
  correctBuild: env.CF_PULL_REQUEST_ACTION === 'false',
  // Should the lockfile be uploaded from this build
  uploadBuild: env.CF_PULL_REQUEST_TARGET === 'master',
}
