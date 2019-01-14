# How to setup HTTPS locally

## Why would you need HTTPS

Mostly you don't. If you wish to use certain browser features, such as `getUserMedia`
to access user's camera, then you need HTTPS.

In other words, if you need to develop EAN code scanning for example, you need HTTPS.

Note, that `localhost` is also considered secure origin, even without HTTPS.

## Setup

Run `openssl req -nodes -new -x509 -keyout tmp/server.key -out tmp/server.cert`

It will ask you couple of questions.
This is only your local certificate so it doesn't matter too much what you answer here.

## Notes

Our development environment does not fully support this, so HTTP is encouraged for most development purposes
(e.g. hot reloading doesn't seem to work yet under HTTPS)

This is also self-signed certificate and is not trusted, so you'll need to add the exception in browser.

Functionality for HTTPS has been setup in `src/index.js`.
