# Cats api with docker

## Intro

This is a project with NestJs, a Mysql database and docker

## Required

To run project, you have to create a .env file containing this :
```
DB_HOST=db
MYSQL_DATABASE=<a database name>
MYSQL_USER=root
MYSQL_PASSWORD=<a password>
```

##  Commands

To run project with docker :
```
docker compose up
```

If you dont want to start project with docker, you can just create a database
```
docker run --name cats-mysql -e MYSQL_ROOT_PASSWORD=Password01 -e MYSQL_DATABASE=cats -p 3306:3306 -d mysql:5.7
```