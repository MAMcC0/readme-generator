
badge = " ";
link = " ";
function renderLicenseBadge({license}) {
  if (license === "Attribution 4.0 International"){
     badge = "[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)]"
    return badge;
  } else if  (license === "Eclipse Public"){
     badge="[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
     return badge;
  } else if (license === "MIT"){
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    return badge;
  } else if (license === "Open Database"){
    badge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]"
    return badge;
  }
}



function renderLicenseLink({license}) {
  if (license === "Attribution 4.0 International"){
    link = "(https://creativecommons.org/licenses/by/4.0/)"
   return link ;
 } else if  (license === "Eclipse Public"){
    link ="(https://opensource.org/licenses/EPL-1.0)";
    return link;
 } else if (license === "MIT"){
    link = "(https://opensource.org/licenses/MIT)"
   return link;
 } else if (license === "Open Database"){
   link = "(https://opensource.org/licenses/MIT)"
   return link ;
 }
}


function renderLicenseSection() {
  return `
  ## License
  This application is covered under the [!${license}]${renderLicenseLink()}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge()}


  ## Table of Contents <br>
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  
  ${data.description}

  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

 ${renderLicenseSection()}

  ## Contributions
  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

 Contact me at:
  (${data.email})
  (${data.github})

`;
}

module.exports = generateMarkdown;
