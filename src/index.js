const { analyzeCode } = require('./scanner/staticScanner');
const { monitorRuntime } = require('./scanner/dynamicScanner');

module.exports = {
  analyzeCode,
  monitorRuntime,
};
