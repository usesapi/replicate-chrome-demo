# Sapi
This project uses [Sapi](https://usesapi.com) to allow using the replicate API without developing a backend. To learn more, visit the full tutorial at: https://sapi.gitbook.io/replicate.com-apps-tutorials/chrome-extension-create-disney-character-from-any-face-on-the-web

# How To Use

## Prerequisites

Node.js and npm (comes with Node) installed on your machine. We recommend to use [NVM](https://github.com/nvm-sh/nvm).

## Cloning the app

Open a terminal and navigate to the directory where you want to clone the app.\
Run the command `git clone git@github.com:usesapi/replicate-chrome-demo.git`

## Get Replicate API Token
Sign in to your replicate account, open the [Account](https://replicate.com/account) page and copy your API Token.

## Configure your Sapi Proxy

Sign in to [Sapi](https://console.usesapi.com), create a new Replicate Sapi and configure it with the Replicate API Token.\
Configure your Replicate Sapi ID in the top of `src/sapi.ts`
```
const SAPI_ID = "api-replicate-com-....";
```


## Setup

```
npm install
```

## Build

```
npm run build
```

## Build in watch mode

```
npm run watch
```

## Load extension to chrome

- Make sure you have the latest version of Google Chrome installed on your computer.
- Open Google Chrome and navigate to chrome://extensions/
- Enable Developer Mode by clicking on the toggle switch in the top right corner of the page.
- Click on the Load Unpacked button and navigate to the directory where you cloned the repo.
- Select the dist folder and click on Open

The extension should now be loaded in your browser and you should see it in the list of extensions.

Now each time you right click an image a new "🚀 Create Disney Character" will appear

## Development

- Build in watch mode by running `npm run watch`
- Go to chrome://extensions/ and click on the Reload button next to the extension to see the changes.

## Important

The first time you run your model might take few minutes, then each time should take few seconds.
