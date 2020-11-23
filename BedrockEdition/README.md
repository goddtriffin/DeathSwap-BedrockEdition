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

- [GNU Make](https://www.gnu.org/software/make/) - Automates common developer tasks.
- [Webpack](https://webpack.js.org/) - Separates my code into distinct modules, and then bundles them all back together into the server.js and client.js scripts.
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that ensures every piece of code is strictly typed ensuring safer, less buggy code and generally faster development speeds.
- [Gulp.js](https://gulpjs.com/) - Automates the more involved sub-tasks that need to get done like hot-reloading the behavior/resource packs every time a file is saved, generating the production-ready .mcaddon file, etc.
- [ESLint](https://eslint.org/) - Combined with the [Typescript Plugin](https://github.com/typescript-eslint/typescript-eslint), analyzes the code to find problems.
- [Prettier](https://prettier.io/) - Auto-formats the code to look identical no matter who writes it and from where.
