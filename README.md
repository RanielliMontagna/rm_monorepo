# Ranielli Montagna - Monorepo Próprio

### Instalação

Clonar repositório

```sh
git clone git@github.com:RanielliMontagna/rm_monorepo.git
cd rm-monorepo
```

Instalar dependências:

```sh
yarn
```

## Scripts disponíveis

In the root directory, you can run:

### `yarn build`

Build all packages:

```sh
yarn build
```

Build a single package:

```sh
yarn build --scope=<package-name>
```

For example:

```sh
yarn build --scope=example-a
```

### `yarn clean`

Delete build artifacts for all packages:

```sh
yarn clean
```

Clean a single package:

```sh
yarn clean --scope=<package-name>
```

For example:

```sh
yarn clean --scope=example-a
```

### `yarn create-package`

Create a package:

```sh
yarn create-package
```

Create a package using the CLI:

```sh
yarn create-package <package-name> --template=<template>
```

Create package `foo` using the TypeScript template (default):

```sh
yarn create-package foo --template=typescript
```

Create package `bar` using the React template:

```sh
yarn create-package bar --template=react
```

### `yarn lint`

Lint all packages:

```sh
yarn lint
```

Lint a single package:

```sh
yarn lint --scope=<package-name>
```

### `yarn lint:fix`

Fix lint errors for all packages:

```sh
yarn lint:fix
```

Fix lint errors for a single package:

```sh
yarn lint:fix --scope=<package-name>
```

### `yarn storybook`

Start Storybook server:

```sh
yarn storybook
```

### `yarn test`

Run tests for all packages:

```sh
yarn test
```

Run tests for a single package:

```sh
yarn test --scope=<package-name>
```

## License

[MIT](LICENSE)

## Author

Feito com carinho, by [Ranielli Montagna](https://www.ranimontagna.com/). </br>
Baseado no projeto [remarkablemark](https://github.com/remarkablemark) / [lerna-template](https://github.com/remarkablemark/lerna-template)
