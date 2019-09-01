# gallery-rest-api
REST API for image upload.

# Getting Started
## Docker

1. Prerequisites: Docker and docker compose
2. Make sure docker service is up.
3. Clone project and go into project's directory.
4. Run docker-compose build.
5. Run docker-compose up to start the services (it would take almost a minute).

In docker-compose.yml file a subnet and ip address for Database service and REST API service has been configured, you can change IPs if necessary.
    Default REST API IP: 172.20.0.5

## Without Docker
1. Clone project, go into project's directory and run npm install
2. Create .env file on root directory, set up DB credentiasl, server port and image domain for images url path. If it is local use your pc local ip
3. Create a directory called 'uploadedImages' on the project's root to save the images uploaded.
3. run npm start

## Test
1. Configure db credentials on app.test.js
2. run npm test
