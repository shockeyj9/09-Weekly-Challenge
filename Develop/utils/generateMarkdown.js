// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
  ${data.licenses}\n
  ## Tests\n
  ${data.test}\n
  ## How to Contribute\n
  ${data.contribute}\n
  ## Questions\n
  Please visit my GitHub profile [${data.username}](https://github.com/shockeyj9)\n
  Feel free to reach out with any questions: ${data.email}\n
`;
}

module.exports = generateMarkdown;
