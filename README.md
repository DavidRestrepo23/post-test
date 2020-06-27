#  Post Test Julius  

Prueba

## Tech Stack
- Node/Express
- Mongoose 
- MongoDB
- JWT Authentication
- ReactJs
- Redux
- React Router Dom
- React-redux

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

## REST API Specification

| Route | Method  | Payload | Return | Description | 
|--|--|--|--|--|
| /api/auth | POST | { email: string, password: string } | Users Model | SignIn users | 
| /api/users | POST | { name: string, email: string, password: string } |  Create users 
| /api/users | GET | { authorization } | Users Model | Get user authenticated |
| /api/posts | POST | { title: string, content: string, image: string } | Posts Model |
| /api/posts | GET | { authorization } {title: string, content: string, image: string, created_at: string} | Posts Model | Get posts by user |
| /api/posts/{id} | PUT | { authorization } { title: string, content: string, image: string } | Posts Model | Edit post |
| /api/posts{id} | DELETE |{ authorization } | Posts model | Delete post |




