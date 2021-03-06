// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    console.log(license)
    return `![License](https://img.shields.io/badge/license-${license}-blue)`
    
  }
  return ''
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
  return(
  `
  The license being used is: ${license}
  `

  )}

  return ''
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
    ${data.description}


   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
    
  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)} 

  ## Contributing
   ${data.contributing}

  ## Tests
   ${data.tests}

  ## Questions?
   
  Check out my GitHub @: <br>
  github.com/${data.username}

  Or Email Me @: <br>
   ${data.questions}
`; 

}

module.exports = generateMarkdown;
