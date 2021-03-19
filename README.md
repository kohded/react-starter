# react-starter

React starter application.

## Setup Application

### HTTPS

1. Install [mkcert](https://github.com/FiloSottile/mkcert#installation).

2. Install local CA to available trust stores with the following command.

```shell script
mkcert -install
```

3. Optional: Add hosts to OS hosts file and setup:ssl script for additional https domains, defaults only to localhost.

- Windows: C:\Windows\System32\drivers\etc\hosts
- Mac: /etc/hosts

```shell script
# hosts
127.0.0.1 localhost myhost

# package.json
"setup:ssl": "... localhost myhost",
```

4. Run setup script in [package.json](package.json) to set up husky and ssl certificates. Must generate the ssl certificates for https support.

```shell script
npm run setup
```

5. When viewing the application in the browser and shows a warning about untrusted certificates, will need to [Trust the local CA](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8#trust-the-local-ca).

- Warnings: Chrome: "Your connection is not private", Firefox: "Warning: Potential Security Risk Ahead"

### Generate icons and splash screens

- Replace ./src/assets/images/icons/logo.svg with application logo.svg.
- Run icons script in [package.json](package.json) to generate icons and splash screens. This script uses [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator).

```shell script
npm run icons
```

### Selecting less or scss (default)

- Delete less or scss folder.
  - ./src/assets/{less|scss}
- Keep scss or rename all occurrences of scss to less and modify code.
  - ./src/index.scss
  - ./src/index.tsx
  - ./src/components/Container/Container.module.scss
  - ./src/components/Container/Container.tsx
  - ./src/components/Layout/Layout.module.scss
  - ./src/components/Layout/Layout.tsx

## Available Scripts

In the project directory, you can run:

### `npm run build`

Runs webpack to build the app for production into the build folder.

### `npm run format`

Runs prettier on project files.

### `npm run icons`

Runs pwa-asset-generator to generate icons and splash screens for the application.

### `npm run lint`

Runs all other lint scripts together.

### `npm run lint:eslint`

Runs eslint on project files.

### `npm run lint:stylelint`

Runs stylelint on project files.

### `npm run prebuild`

Runs these commands before build script.

### `npm run serve`

Runs serve as https in the build folder.

### `npm run setup`

Runs all other setup scripts together.

### `npm run setup:husky`

Runs husky to install husky hooks and adds pre-commit hook.

### `npm run setup:ssl`

Runs mkcert to generate ssl certificates for https support.

### `npm run start`

Runs webpack in development mode at [https://localhost:8000](http://localhost:3000).
