const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const appIncludes = [resolveApp('src'), resolveApp('../components/src')];

module.exports = function override(config, env) {
  /* eslint no-param-reassign: "error" */
  config.module.rules[0].include = appIncludes;
  config.module.rules[2].oneOf[1].include = appIncludes;

  return config;
};
