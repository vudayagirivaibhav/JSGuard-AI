function executeUserCode(code) {
    eval(code); // Vulnerability: Unsafe use of eval()
  }
  
  module.exports = { executeUserCode };
  