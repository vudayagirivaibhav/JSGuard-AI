// src/scanner/staticScanner.js

const { loadModel } = require('../ai/modelLoader');
const { detectVulnerabilities } = require('../ai/vulnerabilityDetector');

let model;

const initialize = async () => {
  if (!model) {
    model = await loadModel();
  }
};

const analyzeCode = async (code) => {
  await initialize();
  const vulnerabilities = await detectVulnerabilities(code, model);
  return { vulnerabilities };
};

module.exports = { analyzeCode };
