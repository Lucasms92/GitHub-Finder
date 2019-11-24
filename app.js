//Init GitHub
const github = new GitHub();

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
      })
      .catch(err => {
        //Show alert
      });
  } else {
    // Clear profile
  }
});
