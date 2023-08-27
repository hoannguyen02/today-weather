// hide error messages about act() being unsupported in production build

const ignoredErrors = [
  /act\(\.\.\.\) is not supported in production builds of React/,
  /Using kebab-case for css properties in objects is not supported./
];

const consoleError = global.console.error;
global.console.error = (...args) => {
  if (ignoredErrors.some((el) => el.test(args[0]))) {
    return; // Swallow these errors
    // return console.log(...args);
  }
  return consoleError(...args);
};
