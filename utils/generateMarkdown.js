

badge = " ";
link = " ";
// passes data in from index page to figure out which badge to put on the page
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


/// uses data to figure out which documentation link for license needs to display
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
   link = "(https://opensource.org/licenses/odbl/)"
   return link ;
 }
}

//creates the license section to be dynamically rendered
function renderLicenseSection(data) {
  return `
  ## License
  This application is covered under the [${data.license}](${renderLicenseLink(data)}) license.
  `
}

//creates the markdown in a function that is called in the write fs file on index.js
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
 

  Email: ${data.email}<br />
  Github: [${data.github}](${data.github})

`;
}

module.exports = generateMarkdown;
