# nodejs API

NodeJS API template scaffolding.

## Requirements

 - [Node v7.6+](https://nodejs.org/en/download/current/)
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose/install/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

### Node Modules

```bash
npm install -g mongoose-data-seed nodemon
```
### MongoDB Client
You have multiple options, but two I prefer are here:

#### Robo Desktop Client
Download the [Robo 3T Client](https://robomongo.org/download)
#### Mongoclient Docker Container
Use the [NOSQL Client](https://www.nosqlclient.com/docs/start.html#docker).

```bash
docker run -d -p 8080:8080 \
-v  data:/data/db \
-e MONGO_URL=mongodb://mongodb/nodejsapi \
mongoclient/mongoclient
```

Then access the client as a web app [http://localhost:3100](http://localhost:3100)
## Getting Started

Install dependencies:

```bash
yarn
```

Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs
```

## Docker

```bash
# run container locally
yarn docker:dev
or
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# run container in production
yarn docker:prod
or
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# run tests
yarn docker:test
or
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

## Deploy

Set your server ip:

```bash
DEPLOY_SERVER=127.0.0.1
```

Replace my Docker username with yours:

```bash
nano deploy.sh
```

Run deploy script:

```bash
yarn deploy
or
sh ./deploy.sh
```

## Inspirations

 - [danielfsousa/express-rest-es2017-boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)
