const core = require('@actions/core');

async function run() {
    /*
        1. parse inputs:
         1.1 base-branch from which to check for updates
         1.2 target-branch to use to create the PR
         1.3 Github Token for authentication purposes (to create PRs)
         1.4 Working directory for which to check for dependencies
        2. Execute the npm update command within the working directory
        3. Check whether there are modified package.json files
            3.1 if there are modified files, create a PR to the base-branch using the target-branch
            3.2 otherwise, conclude the custom action
     */
}

run()