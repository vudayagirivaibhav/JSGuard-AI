# JSGuard-AI Development Guide

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.0.0
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Verify setup
npm run typecheck
```

## 📂 Project Structure

### Core Modules

**`src/core/`** - Main orchestration layer
- `JSGuard.ts` - Main class that coordinates everything
- `Config.ts` - Configuration management and validation
- `EventBus.ts` - Internal pub/sub event system

**`src/detectors/`** - Detection engines
- `DetectorEngine.ts` - Orchestrates all detection methods
- `RegexDetector.ts` - Fast pattern-based detection
- `ContextDetector.ts` - Heuristic context analysis
- `CustomDetector.ts` - User-defined patterns

**`src/watchers/`** - Browser API interceptors
- `NetworkWatcher.ts` - fetch/XHR interception
- `FormWatcher.ts` - Form input monitoring
- `DOMWatcher.ts` - MutationObserver for DOM changes
- `ConsoleWatcher.ts` - console.* interception
- `ClipboardWatcher.ts` - Copy/paste monitoring
- `StorageWatcher.ts` - localStorage/sessionStorage interception

**`src/actions/`** - Response actions
- `Redactor.ts` - PII masking and replacement
- `Reporter.ts` - Detection event formatting and emission

**`src/utils/`** - Shared utilities
- `patterns.ts` - Regex pattern library (SSN, credit cards, etc.)
- `validators.ts` - Validation functions (Luhn, checksums)
- `sanitizer.ts` - Safe string handling
- `logger.ts` - Internal logging

### Integration Modules

**`src/react/`** - React hooks and components
**`src/next/`** - Next.js middleware
**`src/server/`** - Express middleware
**`src/ai/`** - Optional ONNX AI model (heavier bundle)
**`src/cli/`** - Command-line tool

## 🛠️ Development Workflow

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Building

```bash
# Build all bundles
npm run build

# Watch mode for development
npm run build:watch
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix lint issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type checking
npm run typecheck
```

## 📝 Coding Standards

### TypeScript
- Use strict mode (already configured)
- Prefer interfaces over types for public APIs
- Export types from `src/types/index.ts`
- Use path aliases: `@jsguard/core`, `@jsguard/utils`, etc.

### Naming Conventions
- Classes: `PascalCase`
- Functions/methods: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Private members: prefix with `_` (e.g., `_privateMethod`)

### File Organization
```typescript
// 1. Imports (external first, then internal)
import { SomeType } from 'external-lib';
import { Config } from '@jsguard/core/Config';

// 2. Types/Interfaces
export interface MyInterface {
  // ...
}

// 3. Constants
const DEFAULT_CONFIG = { /* ... */ };

// 4. Class/Function implementation
export class MyClass {
  // ...
}
```

### Comments
- Use JSDoc for public APIs
- Explain "why", not "what"
- Keep comments up-to-date

```typescript
/**
 * Detects PII in the provided text
 * @param text - The text to scan
 * @param options - Detection options
 * @returns Detection results with confidence scores
 */
export function detectPII(text: string, options?: DetectionOptions): DetectionResult {
  // Implementation
}
```

## 🧪 Testing Guidelines

### Test Structure
```typescript
import { describe, it, expect, beforeEach } from 'vitest';

describe('MyClass', () => {
  let instance: MyClass;

  beforeEach(() => {
    instance = new MyClass();
  });

  it('should do something', () => {
    const result = instance.doSomething();
    expect(result).toBe(expected);
  });
});
```

### Test Coverage Goals
- Core modules: > 90%
- Detectors: > 95%
- Watchers: > 85%
- Utilities: > 90%

## 📦 Bundle Size Management

### Keep It Small
- Core target: < 15KB gzipped
- Avoid large dependencies
- Use tree-shaking friendly code
- Mark side-effects in package.json

### Check Bundle Size
```bash
npm run build
ls -lh dist/esm/index.js
```

## 🔍 Debugging

### Browser Debugging
```typescript
import { JSGuard } from 'jsguard-ai';

const guard = new JSGuard({
  debug: true, // Enable debug logging
  mode: 'monitor'
});
```

### Node.js Debugging
```bash
node --inspect-brk dist/cli/index.js
```

## 🚢 Release Process

### Pre-release Checklist
- [ ] All tests passing
- [ ] No lint errors
- [ ] Bundle size within target
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json

### Publishing
```bash
# Dry run
npm publish --dry-run

# Publish to npm
npm publish
```

## 🤝 Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for detailed guidelines.

## 📚 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Rollup Documentation](https://rollupjs.org/)
- [Vitest Documentation](https://vitest.dev/)
- [ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/)

## 🆘 Getting Help

- Check `PROJECT_STATUS.md` for current development status
- Review existing code for patterns and conventions
- Ask questions in GitHub Discussions (coming soon)

---

**Happy Coding! 🎉**
