class Engineer {
  constructor(github) {
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

export { Engineer };
