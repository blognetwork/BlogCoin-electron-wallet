# Porting BlogShell for Another Currency

> Note that this is only valid/possible for `blogcoin-service` compatible currency (e.g. a BlogCoin fork).

You can modify BlogShell to be used for your own `blogcoin-service` compatible currency with few simple steps (assuming you already grab the source code by cloning our repo):

## 1. Update package.json

This step is important in order to avoid conflict with the original BlogShell (or other fork), when user happen to install both wallet version.

Edit `package.json` file, change the values of the following keys:

- `name`
- `productName`
- `appId`

## 2. Update ws_config.js

Edit `src/js/ws_config.js` file, update config values to match your currency configuration/requirements.  
Each config item are pretty much self explanatory and are commented for clarity.

## 3. Re-skining (Optional)

If you want your version of BlogShell looks different than what provided by default, you can do a few tweaks to re-skin/updating the appearance:

- Edit `src/css/common.css` to modify general appearance (layout, sizing, color, etc)
- Replace `src/assets/image/*` with your own images.

## 4. Rebuild/package your wallet for distribution

Please refer to the build guide on the repository [main page](https://github.com/blognetwork/BlogCoin-electron-wallet).

## Final Note

_You are free to use, modify, redistribute, or do whatever you want to the BlogShell's code, as long as you comply with the [license](https://github.com/blognetwork/BlogCoin-electron-wallet/blob/master/LICENSE.md) coming with [BlogShell](https://github.com/blognetwork/BlogCoin-electron-wallet) and [WalletShell](https://github.com/turtlecoin/turtle-wallet-electron/).
