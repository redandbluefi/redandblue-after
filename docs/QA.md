# Testing

Jest = :heart:

## Main libraries

Platform heavily relies on open source libraries for testing as well. Main libraries used (or recommended) are following:

* [Jest](https://facebook.github.io/jest/), to run and write the tests
* [Nock](https://github.com/node-nock/nock), to mock API calls
* [Enzyme](https://github.com/airbnb/enzyme/), to ease JSX testing
* react-test-renderer
* jest-styled-components

## How we test

We try to practice [Behaviour-Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development) (BDD). Basically this means that we specify the behaviour with a test case, and after that we actually implement the functionality. After that it's pretty much rinse-and-repeat.

We aim for high test coverage but even more important is that the parts that really need testing, and are major part of the platform, are tested well. Project only should have stand-alone tests within it, so mostly this means unit tests. Keep in mind that tests are also run on CircleCI, so none of the tests should be environment-specific.

While writing tests, see Jest API reference: https://facebook.github.io/jest/docs/en/getting-started.html

## What to test, what not to test?

Make sure to test things that matter and are worth the time to test. While it's good to have great test coverage, it does not matter even if the coverage is 100% but not the rights things are being tested. Try to stick to testing actually functionality and the logic.

For example, if your component renders plain JSX without any conditionals, testing that does not bring much value and maintaining the tests also takes effort, thus might not be worth it. However, if your component has conditional rendering, then it's probably already worth testing. Especially if your component has some logic (e.g. componentWillMount) then those are good things to test.

## QA-related NPM commands

```bash
npm run test ## Starts Jest and runs tests once (incl. coverage)
npm run test:watch ## (excellent for TDD) Keeps running tests until cancelled
npm run test:e2e ## Runs E2E tests
npm run lint ## Runs code style checks (runs lint:js and lint:css)
```

## Continuous integration

CircleCI is our continuous integration platform and is running our tests and generating reports. Currently it is there only to make sure that build do not break and that tests and linting rules are passed. Finally, once tests any everything passes, it will deploy the code (by default) to the test environment.

Configuration for CircleCI is in `.circle/config.yml` file.

## Other topics

#### See the module contents

There's many libraries and frameworks this platform utilizes, and only a small percentage of the code has been written by us. To analyze what the project contains, you can use `source-map-explorer`. This is also a good tool to see what libraries are taking most space inside the bundle.

```bash
npm install -g source-map-explorer
cd static/dist/
source-map-explorer main-XXXXXXXXX.js main-XXXXXXXXX.js.map
```

#### See the module licenses

We only want to use libraries that are actually free to use for business. There's a tool that easily allows us to check all the module licenses: `license-checker`. This allows us to check that we haven't accidentally included non-free libraries.

```bash
npm install -g license-checker
## Then just run in a project folder
license-checker
```
