class GitHub {
  constructor() {
    // this.client_id = 'CLIENT ID'
    // this.client_secret = 'CLIENT SECRET'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    if (!profileResponse.ok) {
      return Promise.reject(new Error("Not Found"));
    }
    const profile = await profileResponse.json();

    return {
      profile //profile: profile
    };
  }
}
