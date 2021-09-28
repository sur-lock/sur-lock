docker build -t surlock ./
docker ps -f name=surlock  -q | xargs --no-run-if-empty docker container stop
docker container ls -a -f name=surlock -q | xargs -r docker container rm
docker run -d -p 8080:8080 --name surlock -v /home/ubuntu/upload-images:/upload-images surlock