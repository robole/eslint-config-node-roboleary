# eslint-config-node-roboleary

These are my settings for using ESLint and Prettier happily together for a Node environment.

It includes the following:
- My base config [eslint-config-roboleary-base](https://www.npmjs.com/package/eslint-config-roboleary-base) config for a core collection of rules.
- The [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) for a set of rules for node.
- The [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) config to turn off the ESLint rules that conflict or are unnecessary when using Prettier. Ensure this is the last config included.

## Usage

1. Install this package, ESLint (peer dependency) and Prettier (peer dependency) as *devDependencies* with the command `npm i --save-dev eslint prettier eslint-config-node-roboleary`.
1. Create an eslint config file in the root of your project directory e.g. _.eslintrc_. Add the following:

   ```json
   {
     "extends": ["eslint-config-node-roboleary"]
   }
   ```

   Alternatively, you can put a reference to the config in your _package.json_ under the property `eslintConfig`.

1. You can add scripts to your _package.json_ to lint, fix, and format your code from the command-line.

	```json
	{
		"scripts": {
			"lint": "eslint .",
			"lint:fix": "npm run lint -- --fix",
			"format": "prettier src test --check",
			"format:fix": "npm run prettier -- --write",
		},
	}
	```
