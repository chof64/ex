module.exports = {
  git: {
    requireCleanWorkingDir: false,
    commit: false,
    tag: true,
    push: true,
  },
  github: {
    release: true,
    releaseName: "@something/projectname@${version}",
  },
  hooks: {
    "before:bump": "echo 'Skipping version bump in files'",
  },
  npm: {
    publish: false,
  },
};
