# Tiny Express server for deploying and serving widget files

Is hooked to Github and re-deploys on push to master of the `cc-calculator-widget` repository.

# Setup

An `.env` file needs to be created, can be copied from .env.example and the same `SECRET` needs to be set in Github.

Building the docker image: `docker build -t cc:deploy-widget .`
