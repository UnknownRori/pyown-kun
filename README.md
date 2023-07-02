# pyown-kun

A portfolio site for my friend, who for some reason just wanted to have one, and it may changes the requirements from time to time.

## 🛠️ Development

Nothing fancy just simple `npm` is all you need (or maybe `yarn` or `pnpm`), and some `Rust` programming language background since i like the concept of `Option` and `Result`

```sh
# Clone the repository
git clone https://github.com/UnknownRori/pyown-kun

# Enter cloned directory
cd pyown-kun

# You may skip above this and disable firebase plugin inside ./src/main.ts
# Copy configuration and set the secrets
cp ./src/config/firebase.example.ts ./src/config/firebase.ts
vim ./src/config/firebase.ts

# Install the dependency
npm install

# Serve the app
npm run dev
```

## 🚀 Deployment

This app is handcrafted to be deployed on [firebase](https://firebase.google.com/)

```sh
# Deploy to firebase
npm run build && firebase deploy
```

## 🌟 Contributions

Feel free to contribute for his messy site, there are design but it's written powerpoint (yes).
