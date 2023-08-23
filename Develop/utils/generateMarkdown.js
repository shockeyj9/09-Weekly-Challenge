// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseName) {
  //API for badge making goes here
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  fetch('https://api.github.com/licenses/'+license)
  .then(function (response) {
      return response.json();
    })
  .then(function (data) {
      return data.html_url;
  })
}

//API function for getting the license info
 function getLicenseKey (license){
  fetch('https://api.github.com/licenses')
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
   const licInfo = data.filter((element)=>{
      if (element.spdx_id===license){
          return true
      }
    })
    //renderLicenseBadge(licInfo[0].spdx_id)
   return renderLicenseLink(licInfo.key);
    
  })
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(data) {
 const licURL = getLicenseKey(data.licenses);

  return `# ${data.title}\n
  ## Description\n
  ${data.desc}\n
  ## Table of Contents\n
  ${data.contents}\n
  ## Installation\n
  ${data.installs}\n
  ## Usage\n
  ${data.usage}\n
  ## License\n
  ${licURL}\n
  ## Tests\n
  ${data.test}\n
  ## How to Contribute\n
  ${data.contribute}\n
  ## Questions\n
  Please visit my GitHub profile [${data.username}](https://github.com/shockeyj9)\n
  Feel free to reach out with any questions: ${data.email}\n
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseLink,
  getLicenseKey,
};
