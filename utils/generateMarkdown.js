// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else if (license === 'Perl') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]';
  } else if (license === 'Eclipse'){
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
  } else {
    return " ";
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return '(https://opensource.org/licenses/ISC)';
  } else if (license === 'Apache'){
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Mozilla'){
    return '(https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Perl') {
    return '(https://opensource.org/licenses/Artistic-2.0)';
  } else if (license === 'Eclipse'){
    return '(https://opensource.org/licenses/EPL-1.0)'
  } else {
    return " ";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === ' '){
    return ' '
  } else {
    return 'This projec is covered under the ' + license + ' License.'
  } 
}

// Create a function to generate markdown for README
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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  Github users who contributed to this project: ${data.contributors}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  Contact me on GitHub: [${data.username}](https://github.com/deoncole)

  For additional questons please reach me at ${data.email}

`;
}

// export the file
module.exports = generateMarkdown;