# README

1. Ingredients

- ruby v3.2.2
- yarn v1

1. Kegging up!!!

- Run `bundle`
- Run `yarn install`

2. Serving

To run the project building assets on the go use the command `yarn dev`

3. Tasting

You can run E2E test using the command `yarn test-e2e spec/javascript/delete_beer.spec.js`

To use the Playwright debugger add the env variable `PWDEBUG=1` before the command: `PWDEBUG=1 yarn test-e2e spec/javascript/delete_beer.spec.js`

If also you need to check the Rails server output of a E2E test add the env variable `DEBUG=pw:webserver` before the command: PWDEBUG=1 `DEBUG=pw:webserver yarn test-e2e spec/javascript/delete_beer.spec.js`
