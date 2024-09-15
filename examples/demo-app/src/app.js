const { analyzeCode } = require('jsguard-ai');
const { executeUserCode } = require('./vulnerableCode');

const userCode = prompt('Enter code to execute:');

analyzeCode(userCode).then((results) => {
  if (results.vulnerabilities.length > 0) {
    alert('Vulnerabilities detected:\n' + results.vulnerabilities.map(v => v.description).join('\n'));
  } else {
    executeUserCode(userCode);
  }
});