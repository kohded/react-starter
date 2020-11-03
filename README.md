# react-starter

React starter application.

## Setup HTTPS

- Install [mkcert](https://github.com/FiloSottile/mkcert#installation).
- Install local CA to trust store. To change local CA you must uninstall first before reinstalling. This does not need to be installed for every application.

```shell script
mkcert -install
mkcert -uninstall
```

- Run ssl script in [package.json](package.json) to install application certificates.

```shell script
npm run ssl
```

Fix Windows Firefox unsupported root store. Using only the first link should work.

- [Windows 10: Firefox](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8#user-content-windows-10-firefox)
- [Support for CAroot for Windows Firefox](https://github.com/FiloSottile/mkcert/issues/259)

## Generate icons and splash screens

- Replace ./src/assets/images/icons/logo.svg with your own logo.svg.
- Run icons script in [package.json](package.json) to generate icons and splash screens. This script uses [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator).

```shell script
npm run icons
```

## Selecting less or scss (default)

- Delete less or scss folder.
  - ./src/assets/{less|scss}
- Keep scss or rename all occurrences of scss to less and modify code.
  - ./src/index.scss
  - ./src/index.tsx
  - ./src/components/Container/Container.module.scss
  - ./src/components/Container/Container.tsx
  - ./src/components/Layout/Layout.module.scss
  - ./src/components/Layout/Layout.tsx
