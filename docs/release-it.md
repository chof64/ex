# Release It

## Overview

Release It is a tool that helps automate the release process of a project. It
can be used to create releases, update changelogs, and publish releases to
various platforms.

This document will delve on how to use the release-it GitHub Action workflow
that I've created to automate the release process of a project. **How to use
release-it my way.**

## The Problem

I'm about to start a new project and I want to try and implement an automated
versioning and release process. I've tried different implementation of this in
the past, but it didn't really work out as I wanted it to.

Semantic-release was one of the tools, but there was a lot of configuration and
setup involved. I wanted something simpler and easier to use.

I have used release-it in the past and I liked how simple it was to use. I
decided to use it again, but this time I wanted to automate the process using
GitHub Actions.

This time, I also wanted a bit more control on the versioning. Where I can set
when to do a major, minor, or patch release.

## The Solution

I created a GitHub Action workflow that uses the release-it package to automate
the release process. The workflow is simple and easy to use. It only requires a
few configurations to get started.

- **Self contained**: The workflow is self-contained and doesn't require the release-it package to be installed in the project. This makes it easier to use in different projects, perhaps projects that don't even use npm.
- **Simple**: It requires minimal configuration and can be set up quickly. All you need is the GitHub Action workflow file and a release-it configuration file.
- **Bump based on PR labels**: The workflow can be configured to bump the version based on the labels of the PRs merged into the main branch. This gives more control on when to do a major, minor, or patch release. Make sure to have major, minor, and patch labels in the PR before merging; it defaults to patch if no labels are found.
- **Cached NPM packages**: The workflow caches the NPM packages to speed up the build process.

## How to Use

To use the release-it GitHub Action workflow, you need to add the workflow file
to your project and create a release-it configuration file.

### Step 1: Add the Workflow File

Create a `.github/workflows/release-it.yml` file in your project by copying:

https://raw.githubusercontent.com/chof64/ex/refs/heads/main/.github/workflows/release.yml

- **Note**: Make sure to update your repository settings to allow GitHub Actions read and write access to the repository. `Settings > Actions > General > Workflow permissions > Read and write permissions.`

### Step 2: Create the Release-it Configuration File

Create a `release-it.json` file in the root of your project by copying:

https://raw.githubusercontent.com/chof64/ex/refs/heads/main/release-it.json

### Step 3: Make sure to have the following labels in your PRs

- `release: major`
- `release: minor`
- `release: patch`

## Updates

- [x] Add prefix to PR labels.
- [ ] Make the workflow more flexible, bump based on conventional commits if no labels are found.
