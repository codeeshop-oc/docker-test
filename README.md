# Docker Test
Basic Start with nginx and PHP using docker-compose

# Reference Commands

### Usage
```bash
# Start
sudo docker-compose up

# Stop
sudo docker-compose down
```
### Other Commands
```bash
# See Directories and Files
sudo docker exec -it ___CONTAINER_ID___ /bin/sh
sudo docker exec -it ___CONTAINER_ID___ /bin/bash

#Copy Directories and Files
sudo docker cp ___CONTAINER_ID___:/ ___LOCAL_COPY_DIRECTORY_PATH___
```

## Blog Reference
https://adoltech.com/blog/how-to-set-up-nginx-php-fpm-and-mysql-with-docker-compose/
