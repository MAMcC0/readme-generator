
badge = "";
link = ""
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
    linkDirection = ""

}


function renderLicenseSection({license}) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents <br>

  ## Description
  
  ${data.description}


  ## Installation instructions
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.email}<br>
  ${data.github}

`;
}

module.exports = generateMarkdown;
