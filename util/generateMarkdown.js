// function to generate markdown for README
function generateMarkdown(data) {
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;
  const license = `https://img.shields.io/badge/license-${data.license}-blue.svg`;

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Questions](#questions)

  ## Installation
  Packages required: ${data.installation}
  \n To Install : run npm install (note: you may need to include package name)

  ## Usage
  Examples of program usage: ${data.usage}

  ## License
  ${data.license}
  \n![badge](${license})

  ## Tests
  To Test: ${data.tests}

  ## Contributors
  ${data.contributor}

  ## Questions
  \n![badge](${gitHub})
  \n![Profile Image](${avatar})
  \nView the project in GitHub: ${data.url}
  \nFor any questions, please contact me directly: ${data.email}

`;
}

module.exports = generateMarkdown;
