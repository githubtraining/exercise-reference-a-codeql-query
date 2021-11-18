# Welcome to the Reference a CodeQL query exercise!

This exercise checks your knowledge on referencing a query in a CodeQL workflow. It is automatically graded via a workflow once you have completed the instructions.

## About this exercise

A grading script exists under `.github/workflows/grading.yml`. You do not need to use this workflow for any purpose and **altering its contents will affect the repository's ability to assess your exercise and give feedback.**

<!-- some of the notices below are required, others are dependent on the exercise, see comment on each one to decide whether to keep or delete -->

<!-- REQUIRED for all exercises -->
<details><summary>:information_source: About the use of GitHub Actions in this exercise</summary>

> This exercise utilizes [GitHub Actions](https://docs.github.com/en/actions), which is free for public repositories and self-hosted runners, but may incur charges on private repositories. See [About billing for GitHub Actions](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions) to learn more. The use of GitHub Actions also means that it may take the grading workflow a few seconds and sometimes minutes to run.
</details>

<!-- OPTIONAL, only required for exercises that use PATs
<details><summary>:closed_lock_with_key: About the use of secrets and access tokens in this exercise.</summary>

> This exercise asks you to create a personal access token (PAT). This step is a prerequisite of the exercise, and you should already be comfortable with PATs on GitHub before proceeding. The PAT is encrypted and used only by a local action that does not leave your repository. GitHub has safeguards in place if the PAT is exposed by mistake, but you should know that if someone gains access to your PAT, they would have the same access you've given the token. To be safe, we recommend setting an expiration for the token. If you'd like to learn more about how your PAT is used, check the action's documentation in [`.github/actions/`](.github/actions/), [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token), and [Available scopes](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).

</details>
-->

<!-- OPTIONAL, only required for exercises that use orgs
<details><summary> 👥 About the use of organizations in this exercise</summary>

> This exercise needs to be completed in an organization. We recommend you [create a new organization](https://github.com/account/organizations/new?coupon=&plan=team_free) for free. If you choose to use an existing organization, note that this exercise will ask you to adjust settings in the organization that may have unintended effects on existing repositories or organization members.
</details>
 -->

## Instructions

<!-- Specific instructions for your exercise -->

Please complete the instructions below:

1. Create your own copy of this repository by using the [Use this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) button.

2. Configure the `init` action in the `.github/workflows/codeQL.yml` workflow file to use the `.github/codeql/codeql-config.yml` configuration file as input.

## Useful resources

Use these to help you!

Resources specific to this exercise:

- [Configuring code scanning](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)

Resources for working with exercises and GitHub Actions in general:

- [Creating a repository from a template]( https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
- [Viewing workflow run history](https://docs.github.com/en/actions/managing-workflow-runs/viewing-workflow-run-history)
- [Running a workflow on GitHub](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-on-github)
- [About billing for GitHub Actions](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)
- [GitHub Actions](https://docs.github.com/en/actions)


## Seeing your result

Your exercise is graded automatically once you have completed the instructions. To see the result of your exercise, go to the **Actions** tab, and see the most recent run on the **Grading** workflow.

See [Viewing workflow run history](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history) if you need assistance.

## Troubleshooting

If you are stuck with a step in the exercise or the grading workflow does not automatically run after you complete the instructions, run the troubleshooter: in the **Actions** tab select the **Grading workflow**, click **Run workflow**, select the appropriate branch, and click the **Run workflow** button.

The troubleshooter will either display useful information to help you understand what you might have done wrong in your exercise or redirect you to the documentation relevant to your exercise to help you out.

See [Running a workflow on GitHub](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow) if you need assistance.
