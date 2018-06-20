# Deploying with Docker (example)

## Locally (or CI)

1.  Build the Docker image: `docker build -t redandblue/redandblue-after . --no-cache [--build-arg environment=production]`
2.  Save the image to a zip file: `docker save --output redandblue-after-latest.tar redandblue/redandblue-after:latest`
3.  Move the zipped image to the server: `scp redandblue-after-latest.tar SERVER:~/redandblue-after/`

## On server

1.  SSH to the server and go to the working directory: `ssh SERVER` and `cd redandblue-after/`
2.  Load the image from the zip file: `[sudo] docker load --input redandblue-after-latest.tar`
3.  [OPTIONAL] Update the image to the running service (⚠️ do this if Docker container is already running)
    * `[sudo] docker container stop redandblue-after && [sudo] docker container rm redandblue-after`
4.  Start the service with
    * `[sudo] docker run -d -p 80:3000 --name redandblue-after redandblue/redandblue-after:latest`
