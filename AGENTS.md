# AGENTS.md

## Build, Lint, and Test Commands

### Backend
- **Start Development Server**: `pnpm dev`
- **Run Tests**: No backend tests defined yet.

### Frontend
- **Start Development Server**: `pnpm dev`
- **Build for Production**: `pnpm build`
- **Preview Production Build**: `pnpm preview`
- **Lint Code**: `pnpm lint`
- **Run Single Test**: No specific test framework defined yet.

## Code Style Guidelines

### General
- **Language**: JavaScript/TypeScript (ES2020+).
- **Module Type**: ES Modules.
- **Source Type**: `module`.

### Formatting
- Use **2 spaces** for indentation.
- Prefer **single quotes** for strings.
- End files with a **newline**.
- Avoid trailing commas.

### Imports
- Group imports by type: external libraries, internal modules, relative paths.
- Use absolute paths for internal modules when possible.

### Naming Conventions
- **camelCase**: Variables and functions.
- **PascalCase**: React components and classes.
- **UPPER_SNAKE_CASE**: Constants.

### Error Handling
- Use `try-catch` blocks for explicit error handling.
- Log errors with meaningful messages.

### React-Specific
- Use functional components with hooks.
- Include all dependencies in hook dependency arrays.

### Comments
- Use JSDoc-style comments for functions/classes.
- Add inline comments for complex logic.