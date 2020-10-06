// required modules\
const inquirer = require("inquirer");
const axios = require("axios");

//Prompt for Github Infor

const gitHubInfo = {
  getUser(username) {
    inquirer
      .prompt({
        message: "What is your GitHub username?",
        name: "username",
      })
      // Getting Github info
      .then(function ({ username }) {
        const queryURL = `https://api.github.com/users/${username}`;

        //Get avatar or image
        axios.get(queryURL).then(function (res) {
          const avatarURL = res.data.avatar_url;
          console.log(avatarURL);
        });
      });
  },
};

module.exports = gitHubInfo;
