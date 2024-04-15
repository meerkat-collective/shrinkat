 <h1 style="text-align: center;"> Welcome to shrinkat <img src="/meerkat.png" width="40" height="auto" /> </h1>

![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)
[![Twitter: psypher1](https://img.shields.io/twitter/follow/psypher1.svg?style=social)](https://twitter.com/psypher1)

> A link shortener app built with SvelteKit and Pocketbase. One of the projects developed under the Meerkat Collective

### 🏠 [Homepage](https://shrinkat.netlify.app)

### ✨ [Demo](https://shrinkat.netlify.app)

## Running Locally

You will need 2 credentials to run the project locally:

### Pocketbase

1. Navigate into backend and run

```sh
./pocketbase serve
```

- Pocketbase will be running on `http://127.0.0.1:8090/_/`

2. You will need these credentials to login to Pocketbase Admin

```
email: admin@test.com
password: accessthebackend
```

### SvelteKit

1. Navigate into **app**

#### Environmnet Variables

- Make sure you a `.env` file with the information in `.env.example`

```
PUBLIC_PB_URL="http://127.0.0.1:8090"
BASE_URL=http://localhost:5173
```

2. Install dependencies

```sh
pnpm install
```

3. Then run

```sh
pnpm dev
```

Local test user credentials:

```
email: timone@hakuna.com
password: hakunamatata
```

---

## Author

👤 **Dante**

- Website: [Dante Decodes](https://dantedecodes.vercel.app/)
- Twitter: [@psypher1](https://twitter.com/psypher1)
- Github: [@psypher1](https://github.com/psypher1)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
