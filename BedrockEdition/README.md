# Death Swap - Minecraft Bedrock Edition

Custom Minecraft gamemode where every 5 minutes you swap positions with your opponent(s). Your goal is to make everybody die without attacking them - last person standing wins!

## Development

### Pre-reqs

You must have this software installed in order to develop this mod.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [GNU Make](https://www.gnu.org/software/make/)

### Make

Run `make` to see usage.

### Tools

- [GNU Make](https://www.gnu.org/software/make/)
  - Makefile is used to automate common developer tasks.
- [Webpack](https://webpack.js.org/)
  - Webpack is used to separate my code into distinct modules, and then bundle them all back together into the server.js and client.js scripts.
- [TypeScript](https://www.typescriptlang.org/)
  - TypeScript is a superset of JavaScript that ensures every piece of code is strictly typed ensuring safer, less buggy code and generally faster development speeds.
- [Gulp.js](https://gulpjs.com/)
  - Gulp.js is used to automate the more involved sub-tasks that need to get done like hot-reloading the Webpack every time a file is saved, generating the production-ready .mcaddon file, etc.
