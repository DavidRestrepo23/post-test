#  Post Test Julios  

Prueba

## Requirements 
- docker
- docker-compose

## Clon repository
```
git clone https://github.com/DavidRestrepo23/post-test
```

## Setup Instructions

### Database 

Cluster MongoDB Atlas access mongodb+srv://admin:vEi9NYeygjGwWfZ2@cluster0-q1wcv.mongodb.net/posts

(See database variables define in /server/envairoment.env )

### Run app services

```
docker-compose up --build
```

### PORTS

client ``` http://localhost:3000/ ```
server ``` http://localhost:3001/ ```



