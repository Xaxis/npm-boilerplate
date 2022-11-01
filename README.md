# npm-boilerplate

## Summary

A boilerplate for rapidly spinning up NPM modules.

Includes Mocha and Chai integrated w/ grunt task runner to allow for test driven development.

## Getting started

Clone the repo and then copy all files to your project directory.

```
git clone https://github.com/Xaxis/npm-boilerplate.git
```

Update LICENSE, package.json, README.md to match your project details then npm install from your project root.

```
npm install
```

During development use the grunt task runner to lint, test, concatenate, and minify files to the `dist/` directory.

```
grunt watch
```

You can additionally run any of your tests by running.

```
npm test
```

## Development

Your projects should work fine as instances of AMD or CommonJS and can easily be published to npm once you've created
something worth contributing.

See [https://quickleft.com/blog/creating-and-publishing-a-node-js-module/](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/)
