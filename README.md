# WECCC

Data reporting and aggregation application for WECCC/ Hospice

## Installation

The following needs to first be installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

Intall the code from GitHub using the following command:

```sh
$ git clone git@github.com:djedi-knight/WECCC.git
```

Once completed, install all required node modules:

```sh
$ cd WECCC
$ npm install
```

Note: node-sass may also need to be rebuilt:

```sh
$ npm rebuild node-sass
```

## Development

```Shell
npm run start:dev
```

Run the development server

### Tools

- [Redux DevTools](https://github.com/gaearon/redux-devtools)

> Follow the instructions to setup the Chrome extension

## Testing

There are a few ways the code can currently be tested:

### Unit Testing

```Shell
npm run test
```

Tests your application with the unit tests in the `test` folder

```Shell
npm run test:watch
```

Tests your application with the unit tests in the `test` folder

## Linting

```Shell
npm run lint
```

Test the code format of all js/jsx files in the `src` folder
