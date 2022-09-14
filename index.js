const inquirer = require("inquirer");
const readmeGenerator = require("./readmeGenerator");
const fs = require("fs");

inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "Enter your title!",
    },
    {
        type: "input",
        name: "description",
        message: "Enter your description!",
    }
    ,
    {
        type: "input",
        name: "installation",
        message: "Enter your installation guidline!",
    }
    ,
    {
        type: "input",
        name: "usage",
        message: "Enter your usage!",
    }
    ,
    {
        type: "input",
        name: "credits",
        message: "Enter your credits!",
    }
    ,
    {
        type: "list",
        name: "license",
        message: "Select your license!",
        choices: ['agpl-3.0', "ISC", "gpl"]
    }
    ,
    {
        type: "input",
        name: "badges",
        message: "Enter your badges!",
    }
    ,
    {
        type: "input",
        name: "contribute",
        message: "How to Contribute!",
    }
    ,
    {
        type: "input",
        name: "tests",
        message: "Tests!",
    }
    ,
    {
        type: "input",
        name: "q_email",
        message: "Enter your email!",
    }
    ,
    {
        type: "input",
        name: "q_github",
        message: "Enter your gibhub!",
    }
    ,
    {
        type: "input",
        name: "q_reach",
        message: "How to reach you!",
    }
  ])
  .then((answers) => {
    fs.writeFile("README.md", readmeGenerator.readmeGenerator(answers), err => {
        if(err)
        {
            console.log(err);
        }else
        {
            console.log("README File Created Successfully!");
        }
    });
  })