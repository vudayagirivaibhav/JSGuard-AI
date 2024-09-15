const { analyzeCode } = require('jsguard-ai');
const fs = require('fs');

// Sample code to analyze
const code = `
  const userInput = getUserInput();
  eval(userInput);
`;

analyzeCode(code).then((results) => {
  if (results.vulnerabilities.length > 0) {
    console.log('Vulnerabilities detected:');
    results.vulnerabilities.forEach((v) => {
      console.log(`- ${v.type}: ${v.description}`);
    });
  } else {
    // Potentially unsafe execution
    eval(code);
  }
});