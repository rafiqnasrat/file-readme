const readmeGenerator = (answers)=>
{
    return `
# ${answers.title}


## Description
${answers.description}
    
Table of Contents:
- [Installation](##Installation)
- [Usage](##Usage)
- [Credits](##Credits)
- [License](##License)
- [Badges](##Badges)
- [Contribute](##Contribute)
- [Tests](##Tests)
- [Questions](##Questions)


## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Badges
${answers.badges}

## Contribute
${answers.contribute}

## Tests
${answers.tests}

## Questions
${answers.q_email}
${answers.q_github}
${answers.q_reach}
    `;
}

module.exports.readmeGenerator = readmeGenerator;