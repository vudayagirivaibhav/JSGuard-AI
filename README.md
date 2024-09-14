# JSGuard-AI

An AI-powered JavaScript security scanner detecting vulnerabilities in real time.

[![npm version](https://img.shields.io/npm/v/jsguard-ai.svg)](https://www.npmjs.com/package/jsguard-ai)
[![Build Status](https://github.com/yourusername/JSGuard-AI/workflows/CI/badge.svg)](https://github.com/yourusername/JSGuard-AI/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Issues](https://img.shields.io/github/issues/yourusername/JSGuard-AI.svg)](https://github.com/yourusername/JSGuard-AI/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/yourusername/JSGuard-AI.svg)](https://github.com/yourusername/JSGuard-AI/pulls)

An **AI-powered JavaScript security scanner** that detects vulnerabilities in real-time. JSGuard-AI helps you write secure code by identifying common security issues and providing actionable suggestions to fix them.

##  Features

- **Real-Time Vulnerability Detection**: Scans your JavaScript code for vulnerabilities like XSS, unsafe `eval()` usage, insecure cookies, and hardcoded secrets.
- **AI-Powered Suggestions**: Utilizes machine learning models to provide context-aware recommendations for fixing security issues.
- **Static and Dynamic Analysis**: Performs both static code analysis and runtime monitoring.
- **CI/CD Integration**: Easily integrate into your build pipelines for automated security checks.
- **Developer-Friendly**: Offers real-time alerts in your development environment and supports popular IDEs.

##  Installation

Install JSGuard-AI via npm:

```bash
npm install jsguard-ai --save-dev
```

Or install globally for CLI usage:

```bash
npm install -g jsguard-ai
```

##  Usage

### Basic Usage

**Programmatic API**

```javascript
const { analyzeCode } = require('jsguard-ai/webpack-plugin'); // Fix typo

// Sample code to analyze
const code = `
  const userInput = getUserInput();
  eval(userInput);
`;

// Analyze code for vulnerabilities
analyzeCode(code).then((results) => {
  if (results.vulnerabilities.length > 0) {
    console.log('Vulnerabilities detected:');
    results.vulnerabilities.forEach((vuln) => {
      console.log(`- [${vuln.severity}] ${vuln.type}: ${vuln.description}`);
    });
  } else {
    console.log('No vulnerabilities detected.');
  }
});
```

**Command-Line Interface (CLI)**

You can also use JSGuard-AI via the command line:

```bash
jsguard-ai scan ./src
```

Options:

--fail-on-error: Exit with a non-zero status code if vulnerabilities are found.
--severity-threshold <level>: Set the minimum severity level to report (low, medium, high, critical).

Example:

```bash
jsguard-ai scan ./src --fail-on-error --severity-threshold high
```

### Integration with Build Tools

**Webpack Plugin**

Add JSGuard-AI as a plugin in your Webpack configuration:

```javascript
// webpack.config.js
const JSGuardAIPlugin = require('jsguard-ai/webpack-plugin');

module.exports = {
  // ... your existing config
  plugins: [
    new JSGuardAIPlugin({
      failOnError: true, // Fail the build if vulnerabilities are found
      severityThreshold: 'medium',
    }),
  ],
};
```
```Gulp Task
const gulp = require('gulp');
const { analyzeFiles } = require('jsguard-ai/gulp');

gulp.task('security-scan', () => {
  return analyzeFiles(['src/**/*.js'], {
    failOnError: true,
    severityThreshold: 'medium',
  });
});
```

Integration with CI/CD Pipelines
GitHub Actions

Add a step in your GitHub Actions workflow:

```YAML
- name: Run JSGuard-AI Security Scan
  uses: actions/setup-node@v2
  with:
    node-version: '14'
- run: npm install -g jsguard-ai
- run: jsguard-ai scan ./src --fail-on-error
```
Jenkins Pipeline

```Groovy
pipeline {
  agent any
  stages {
    stage('Security Scan') {
      steps {
        sh 'npm install -g jsguard-ai'
        sh 'jsguard-ai scan ./src --fail-on-error'
      }
    }
  }
}
```
#Configuration
JSGuard-AI can be configured using a jsguard.config.js or jsguard.config.json file in your project's root directory.

Example jsguard.config.js:

```javascript
module.exports = {
  failOnError: false,
  severityThreshold: 'medium', // Options: 'low', 'medium', 'high', 'critical'
  rules: {
    noEval: true,
    noUnsafeInnerHTML: true,
    detectHardcodedSecrets: true,
    // ...additional rule configurations
  },
};
```
📝## Examples
Check out the examples directory for sample projects demonstrating how to use JSGuard-AI:

Demo Web App: A web application showcasing real-time vulnerability detection.
Demo Node.js App: A Node.js application illustrating server-side scanning.
🤝 Contributing
Contributions are welcome! Please see our Contributing Guidelines for more details.

## To get started:

Fork the repository on GitHub.
Clone your fork to your local machine.
Create a new branch for your feature or bug fix.
Commit your changes with clear and descriptive messages.
Push your branch to your fork on GitHub.
Submit a pull request to the main repository.
Please make sure to follow the Code of Conduct in all your interactions with the project.

📄## License
This project is licensed under the terms of the MIT license.

📞 ## Contact
For questions, support, or suggestions:

Email: vaibhav.vudayagiri@gmail.com
GitHub Issues: Submit an Issue
Happy Coding!

📚## Resources
Documentation: Full Documentation
Changelog: CHANGELOG.md
Security Policy: SECURITY.md


🙌 #Acknowledgments
Special thanks to all the contributors who have helped make this project better!
