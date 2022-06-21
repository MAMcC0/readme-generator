

badge = " ";
link = " ";

function renderLicenseBadge(data) {
  
  if (data.license === "Attribution 4.0 International"){
     badge = "![](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)"
    return badge;
  } else if  (data.license === "Eclipse Public"){
     badge="![](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
     return badge;
  } else if (data.license === "MIT"){
    badge = "![](https://img.shields.io/badge/License-MIT-yellow.svg)"
    return badge;
  } else if (data.license === "Open Database"){
    badge = "![](https://img.shields.io/badge/License-ODbL-brightgreen.svg)"
    return badge;
  }
}



function renderLicenseLink(data) {
  if (data.license === "Attribution 4.0 International"){
    link = "(https://creativecommons.org/licenses/by/4.0/)"
   return link ;
 } else if  (data.license === "Eclipse Public"){
    link ="(https://opensource.org/licenses/EPL-1.0)";
    return link;
 } else if (data.license === "MIT"){
    link = "(https://opensource.org/licenses/MIT)"
   return link;
 } else if (data.license === "Open Database"){
   link = "(https://opensource.org/licenses/MIT)"
   return link ;
 }
}


function renderLicenseSection(data) {
  return `
  ## License
  This application is covered under the ![]${renderLicenseLink(data)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data)}


  ## Table of Contents
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

 ${renderLicenseSection(data)}

  ## Contributions
  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

 Contact me at:
  ${data.email}
  ${data.github}

`;
}

module.exports = generateMarkdown;
