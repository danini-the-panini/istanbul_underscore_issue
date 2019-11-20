# istanbul_underscore_issue

Example showing that istanbul ignores files with underscores in numbers.

e.g. `1_000` vs `1000`

## How to run

1. `yarn`
2. `yarn test`
3. Notice that only `bar.js` shows up in the coverage report
