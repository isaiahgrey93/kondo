![](https://img.shields.io/npm/v/kondo.svg?colorB=%232ecc71)
![](https://img.shields.io/bundlephobia/min/kondo.svg?colorB=%233498db)

# kondo

Make your code spark joy again with the Kondo ([Marie Kondo](https://en.wikipedia.org/wiki/Marie_Kondo)) method.

![https://media1.tenor.com/images/7408bcf6a15dc08076e51a6184c51431/tenor.gif](https://media1.tenor.com/images/7408bcf6a15dc08076e51a6184c51431/tenor.gif)

## Setup

**Installation**

```bash
yarn add kondo
# or
npm install kondo
```

**Imports**

```javascript
import konmari from "kondo";
// or
import { konmari } from "kondo";
```

**Example**

```typescript
import { konmari } from "kondo"; // "import kondo from 'kondo'"

var person = {
  name: "Derek",
  car: "Honda"
};

// konmari(value: object, key: string, sparksJoy: boolean) => emoji

konmari(person, "car", false); // => 😄
// person => { name: 'Derek' }
```
