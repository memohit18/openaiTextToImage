## ESLint Configuration

**Table of Contents**

* [Introduction](#introduction)
* [Configuration](#configuration)
* [Rules](#rules)

### Introduction 

This file defines the ESLint configuration for the project. ESLint is a linting tool that helps identify and fix potential code quality issues. 

### Configuration

This configuration uses several plugins and rules to enforce code style and best practices:

* **`@eslint/js`**: Provides the recommended rules for JavaScript.
* **`globals`**: Defines the global variables available in the browser environment.
* **`eslint-plugin-react`**: Provides rules specific to React.
* **`eslint-plugin-react-hooks`**: Provides rules specific to React Hooks.
* **`eslint-plugin-react-refresh`**: Provides rules for React Refresh.

The configuration is structured as an array of objects, each defining a specific set of rules and configurations:

| **Object** | **Description** |
|---|---|
| `ignores: ['dist']` | Ignores the `dist` directory, which typically contains built files. |
| `files: ['**/*.{js,jsx}']` | Applies the following rules to all JavaScript and JSX files. |
| `languageOptions` | Defines the language options for the linter. |
| `settings` | Defines project-specific settings. |
| `plugins` | Defines the plugins used in the configuration. |
| `rules` | Defines the specific rules and their configurations. |

### Rules

The configuration defines the following rules and their configurations:

| **Rule** | **Description** | **Configuration** |
|---|---|---|
| `ecmaVersion` | Specifies the ECMAScript version to parse. | `2020` |
| `globals` | Defines the global variables available in the browser environment. | `globals.browser` |
| `ecmaFeatures` | Defines the language features to be enabled. | `jsx: true` |
| `sourceType` | Specifies the type of script being parsed. | `module` |
| `react/version` | Specifies the version of React used in the project. | `18.3` |
| `react/jsx-no-target-blank` | Disables the rule that prevents `target="_blank"` in `<a>` tags. | `off` |
| `react-refresh/only-export-components` | Enforces exporting only components from React components. | `warn`, `{ allowConstantExport: true }` |
| `...js.configs.recommended.rules` | Includes the recommended rules from `@eslint/js`. | - |
| `...react.configs.recommended.rules` | Includes the recommended rules from `eslint-plugin-react`. | - |
| `...react.configs['jsx-runtime'].rules` | Includes the rules from the `jsx-runtime` configuration of `eslint-plugin-react`. | - |
| `...reactHooks.configs.recommended.rules` | Includes the recommended rules from `eslint-plugin-react-hooks`. | - | 
