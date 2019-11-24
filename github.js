class GitHub {
  constructor() {
    // this.client_id = 'CLIENT ID'
    // this.client_secret = 'CLIENT SECRET'
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );
    if (!profileResponse.ok) {
      return Promise.reject(new Error("Not Found"));
    }
    const profile = await profileResponse.json();

    if (!repoResponse.ok) {
      return Promise.reject(new Error("Not Found"));
    }
    const repos = await repoResponse.json();
    console.log(profile);
    console.log(repos);
    console.log(repoResponse.ok);
    console.log(profileResponse.ok);
    return {
      profile, //profile: profile
      repos //repos: repos
    };
  }
}
