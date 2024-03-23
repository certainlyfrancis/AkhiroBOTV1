const chalk = require('chalk');

function logger(message, type = 'info') {
  let prefixColor;
  let prefixText;
  
  switch (type) {
    case 'warn':
      prefixColor = 'bgYellow';
      prefixText = ' WARN ';
      break;
    case 'success':
      prefixColor = 'bgGreen';
      prefixText = ' SUCCESS ';
      break;
    case 'error':
      prefixColor = 'bgYellow';
      prefixText = ' ERROR ';
      break;
    default:
      prefixColor = 'bgBlack';
      prefixText = ' INFO ';
  }

  const prefix = chalk[prefixColor].black(prefixText);
  const logEntry = `${prefix}: ${message}`;
  console.log(logEntry);
}

module.exports = logger;
