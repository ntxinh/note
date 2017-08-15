# Docker Machine

```
docker-machine ls
docker-machine start [machine name]
docker-machine stop [machine name]
docker-machine env [machine name]
docker-machine ip [machine name]
docker-machine status [machine name]
```

# Docker Client

```
docker pull [image name]
docker images
docker rmi [image ID]

docker run [image name]
docker ps
docker ps -a
docker rm [container ID]

- Example: 
docker run -p 80:80 kitematic/hello-world-nginx
192.168.99.100

docker run -p 8080:3000 -v /var/www node
docker inspect [container ID]
docker run -p 8080:3000 -v $(pwd):/var/www -w "/var/www" node npm start
192.168.99.100:8080

docker run -i -t -p 8080:5000 -v $(pwd):/app -w "/app" microsoft/aspnet:1.0.0-rc1-update1-coreclr /bin/bash
(i: inspect, t: tty)
dnu restore
dnx web
192.168.99.100:8080
docker rm -v [Container ID] (remove volume)
```

```
+ Docker MySQL
docker run --name docker-mysql -p 33060:3306 -e MYSQL_ROOT_PASSWORD=nguyennghia -d mysql

+ Docker MSSQL SERVER
docker run --name docker-mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Nguyennghia2008@' -p 1433:1433 -d microsoft/mssql-server-linux

+ Docker Postgres	
docker run --name docker-postgres -p 5432:5432 -e POSTGRES_PASSWORD=nguyennghia -d postgres

+ Docker MongoDB
docker run --name docker-mongo -p 27017:27017 -d mongo --auth
docker exec -it docker-mongo mongo admin
	db.createUser(
	    {
	      user: "root",
	      pwd: "nguyennghia",
	      roles: [ "root" ]
	    }
	)
	// create account for table
	use express_angular
	db.createUser(
	    {
	      user:"express_angular",
	      pwd:"express_angular",
	      roles:[
		{role:"readWrite",db:"express_angular"}
	      ]
	    }
	)

	// mongoose connection options
	var options = {
	    user: 'express_angular',
	    pass: 'express_angular',
	    auth: {
		authdb: 'express_angular'
	    }
	}

+ Docker Oracle
docker pull wnameless/oracle-xe-11g
docker run --name docker-oracle -d -p 49160:22 -p 49161:1521 -e ORACLE_ALLOW_REMOTE=true wnameless/oracle-xe-11g
	Connect database with following setting:

	hostname: localhost
	port: 49161
	sid: xe
	username: 	
	password: oracle
	Password for SYS & SYSTEM

	oracle
	Login by SSH

	ssh root@localhost -p 49160
	password: admin

+ Docker RabbitMQ
docker run -d --hostname my-rabbit --name docker-rabbit -p 8080:15672 -e RABBITMQ_DEFAULT_USER=root -e RABBITMQ_DEFAULT_PASS=nguyennghia rabbitmq:3-management
```