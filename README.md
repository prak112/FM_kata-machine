## SOURCE : [ThePrimeagen Kata Machine](https://github.com/ThePrimeagen/kata-machine)

## Installation and Usage
Make sure you have [Node.js](https://nodejs.org/en/) and yarn installed: `npm install --global yarn`

clone the repo and install the dependencies

```bash
npm install
```

create a day of katas, this will use the list in the `ligma.config.js`.
```bash
npm generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`npm generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.

#### Testing
```
npm test
```


## Algorithms Solved so far
- [Linear Search](https://github.com/prak112/FM_kata-machine/blob/master/src/day1/LinearSearchList.ts)
- [Binary Search](https://github.com/prak112/FM_kata-machine/blob/master/src/day1/BinarySearchList.ts)
- [Jump Search](https://github.com/prak112/FM_kata-machine/blob/master/src/day1/TwoCrystalBalls.ts)
- 
