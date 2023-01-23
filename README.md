# Sapi
This project uses [Sapi](https://usesapi.com) to allow using the replicate API without developing a backend. To learn more, check out this tutorial:

# How To Use

## Prerequisites

Node.js and npm (comes with Node) installed on your machine. You can download Node.js from [here](https://nodejs.org/en/download/).

## Cloning the app

Open a terminal and navigate to the directory where you want to clone the app.\
Run the command `git clone git@github.com:usesapi/replicate-chrome-demo.git`

## Replicate
Sign in to your replicate account, open the [Account](https://replicate.com/account) page and copy your API Token.

## Configure your Sapi Proxy

Sign in to [Sapi](https://console.usesapi.com), create a new Replicate Sapi and configure it with the Replicate API Token.\
Configure your Replicate Sapi ID in the top of `src/sapi.ts`
```
const SAPI_ID = "api-replicate-com-....";
```

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

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

## Development

- Build in watch mode by running `npm run watch`
- Go to chrome://extensions/ and click on the Reload button next to the extension to see the changes.
