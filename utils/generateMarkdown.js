// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('license conntected: ' + license);
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license === 'Apache'){

  } else if (license === 'Mozilla'){

  } else if (license === 'Perl') {

  } else if (license === 'Eclipse'){

  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return '(https://opensource.org/licenses/ISC)'
  } else if (license === 'Apache'){

  } else if (license === 'Mozilla'){

  } else if (license === 'Perl') {

  } else if (license === 'Eclipse'){

  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions) 
  
  ## Installation
  ${data.usage}

  ## Usage
  ${data.usage}

  ## Contributing
  Github users who contributed to this project: ${data.contributors}

  ## License
  Licensed ubnder the ${data.license} License

  ## Tests


`;
}

module.exports = generateMarkdown;

// module.exports = {
//   generateMarkdown:generateMarkdown,
//   renderLicenseBadge:renderLicenseBadge
// };