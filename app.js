//Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

// Seach input
const searchUser = document.querySelector("#searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get inpuut text
  const userText = e.target.value;

  if (userText !== "") {
    //Make HTTP call
    github
      .getUser(userText)
      .then(data => {
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      })
      .catch(err => {
        ui.showAlert("User not found", "alert alert-danger");
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
