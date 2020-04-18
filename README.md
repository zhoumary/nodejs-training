# NodeJS Training Project

## Setup

* Fork this project
* update `package.json`, maintain your own package `name`, and other information like `author`.
* maintain the `author` in the `training.config.json`
* start your work

### For Trainee

* maintain the `specs` in the `training.config.json` file
* `npm run test` & generate the test cases in the `src/cases` directory for training
* adjust the code & make all test cases passed
* commit & push to github

### For Trainer

* maintain the `specs` definitions in `src/tests` like `src/tests/basics/sum-1.js`
* `npm run build` & publish the `dist/specs.bundle.js` to public `object storage service` service (S3 or AliCloud OSS)
* find the specs link & tell it to trainees

## Components

### Github Integration

This project is integrated github with workflow, once you fork/update your repository (on github), the workflow will be executed automaticly.

### Commit Lint

This project will lint the commit message, just ref [this document](https://github.com/conventional-changelog/commitlint)

### ESLint

This project will lint the javascript style by eslint, but the code could be automatic fixed by vscode predefined configuration

### Jest

This project is based on the `Jest` test framework