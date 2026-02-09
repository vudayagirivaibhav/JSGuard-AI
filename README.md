# JSGuard-AI 🛡️

> Client-side JavaScript library that detects and prevents PII leaks in real-time

[![npm version](https://img.shields.io/npm/v/jsguard-ai.svg)](https://www.npmjs.com/package/jsguard-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/jsguard-ai)](https://bundlephobia.com/package/jsguard-ai)

**JSGuard-AI** is an open-source library that scans forms, DOM content, API requests, console logs, and clipboard events for personally identifiable information (SSN, credit cards, emails, phone numbers, API keys, etc.) before data ever leaves the client.

## 🚀 Features

- **Real-time PII Detection** — Catch sensitive data before it leaks
- **Multi-layer Protection** — Forms, fetch/XHR, DOM, console, clipboard, storage
- **Compliance Ready** — GDPR, HIPAA, CCPA, PCI-DSS presets
- **AI-Powered** — Optional ONNX model for context-aware detection
- **Framework Agnostic** — Works with React, Next.js, Express, or vanilla JS
- **Lightweight** — Core bundle < 15KB gzipped
- **Zero Dependencies** — No external runtime dependencies

## 📦 Installation

```bash
npm install jsguard-ai
```

## 🔧 Quick Start

```typescript
import { JSGuard } from 'jsguard-ai';

const guard = new JSGuard({
  mode: 'monitor', // 'monitor' | 'block' | 'redact'
  detectors: ['ssn', 'creditCard', 'email', 'phone', 'apiKey'],
  compliance: ['gdpr', 'hipaa'],
});

guard.start();

// Listen for detections
guard.on('detection', (event) => {
  console.warn('PII detected:', event);
});

// Manual scanning
const result = guard.scan('My SSN is 123-45-6789');
console.log(result); // { hasPII: true, detections: [...] }

// Sanitize strings
const safe = guard.sanitize('My SSN is 123-45-6789');
console.log(safe); // "My SSN is ***-**-****"
```

## 📚 Documentation

Full documentation coming soon.

## 🛠️ Development Status

**Current Version:** 0.1.0 (Alpha)  
This project is under active development. APIs may change.

## 📄 License

MIT © JSGuard Contributors

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines (coming soon).

---

**⚠️ Security Notice:** JSGuard-AI is a detection tool, not a security guarantee. Always implement server-side validation and security measures.
