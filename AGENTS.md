# AGENTS.md

## Build, Lint, and Test Commands

### Backend
- **Start Development Server**: `pnpm dev`
- **Run Tests**: No tests are currently defined for the backend.

### Frontend
- **Start Development Server**: `pnpm dev`
- **Build for Production**: `pnpm build`
- **Preview Production Build**: `pnpm preview`
- **Lint Code**: `pnpm lint`

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
- Group imports by type: external libraries, internal modules, and relative paths.
- Use absolute paths for internal modules when possible.

### Naming Conventions
- Use **camelCase** for variables and functions.
- Use **PascalCase** for React components and classes.
- Use **UPPER_SNAKE_CASE** for constants.

### Error Handling
- Always handle errors explicitly using `try-catch` blocks.
- Log errors with meaningful messages.

### ESLint Rules
- Follow the recommended ESLint configuration for React and JavaScript.
- Avoid unused variables unless prefixed with `_`.
- Ignore the `dist` directory globally.

### React-Specific
- Use functional components with hooks.
- Use `useEffect` and `useMemo` for side effects and memoization.
- Ensure all dependencies are included in hook dependency arrays.

### File Structure
- Organize components by feature or domain.
- Place utility functions in `util` directories.

### Comments
- Use JSDoc-style comments for functions and classes.
- Add inline comments for complex logic.

### Testing
- Define and implement tests for both backend and frontend in the future.
- Use a consistent testing framework (e.g., Jest, Vitest).