## SOURCE : [ThePrimeagen Kata Machine](https://github.com/ThePrimeagen/kata-machine)

## Installation and Usage
- Make sure you have [Node.js](https://nodejs.org/en/) 

- Clone the repo and install the dependencies

```bash
git clone https://github.com/prak112/FM_kata-machine
```

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
```bash
  npm test src/__tests__/{filename}.ts
```


## Algorithms solved so far
- [Linear Search](/src/day1/LinearSearchList.ts)
- [Binary Search](/src/day1/BinarySearchList.ts)
- [Jump Search](/src/day1/TwoCrystalBalls.ts)
- [Bubble Sort](/src/day1/BubbleSort.ts)
- 

## Data Structures studied so far 
- [Queues](/src/day1/Queue.ts)
-  


## Notes
Detailed notes about algorithms pseudo code and learnings can be found [on Google Docs](https://docs.google.com/document/d/1bJQDQl6x4JmfC0UVkMfODrOVv3UGy3v-GiJWJI8nc1Y/edit?usp=sharing).


<hr>
<br>

