# github-yf29dk-bjqmzm

## Base on Web

-   [1. Base - guides/getting-started](https://webpack.js.org/guides/getting-started/)
    -   [StackBlitz - GitHub - examples/getting-started](https://stackblitz.com/github/webpack/webpack.js.org/tree/master/examples/getting-started?terminal=)
-   [2. Add TypeScript](https://webpack.js.org/guides/typescript/)
-   3. Add public/index.html

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-yf29dk-bjqmzm)

## TreeShaking imports (library with submodules!)

Differencies of using import as a submodule or the all library...
It is not optimal `import { join } from "lodash"` in here!

```
import * as _ from "lodash";
-a---       2022. 04. 02.     5:15         996934 bundle.js
import { join } from "lodash";
-a---       2022. 04. 02.     5:19         997002 bundle.js
import { join } from "lodash";
-a---       2022. 04. 02.     5:23           6282 bundle.js
```
