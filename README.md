Hello

npm i -g typescript (installs typescript)
tsc -v (checks version)

tsc --init (create tsconfig.json)



npm i jest @types/jest ts-jest typescript -D

npx ts-jest config:init

transformIgnorePatterns: [`/node_modules/(?!${esModules})`, '/node_modules/@apollo/client/utilities/utilities.cjs.js'],

module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}

------------------
npm install --save-dev jest ts-jest @types/jest

// add to package.json
"scripts": {
   "test": "jest"
},

npx ts-jest config:init

npm run test