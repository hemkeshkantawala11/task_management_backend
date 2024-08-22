# API Documentation

## Base URL

`http://localhost:3000`

## Authentication

### Register a New User

**Endpoint:** `POST /api/register`

**Request Body:**

```
{
  "username": "your_username",
  "password": "your_password"
}
```

**Response:**

```
{
  "message": "User created successfully"
}
```

### Login

**Endpoint:** `POST /api/login`

**Request Body:**

```{
  "username": "your_username",
  "password": "your_password"
}
```


**Response:**

```
{
  "token": "your_jwt_token"
}
```

## Tasks

### Get All Tasks

**Endpoint:** `GET /api/tasks`

**Headers:**

```{
  "Authorization": "Bearer your_jwt_token"
}
```


**Response:**

```
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description 1",
    "status": "Pending"
  },
  ...
]
```

### Create a New Task

**Endpoint:** `POST /api/tasks`

**Headers:**

```{
  "Authorization": "Bearer your_jwt_token"
}
```

**Request Body:**

```
{
  "title": "Task 1",
  "description": "Description 1",
  "status": "Pending"
}
```

**Response:**

```
{
    "id": 1,
    "title": "New Task",
    "description": "Task description",
    "status": "Pending"
}

```

### Get a Task by ID

**Endpoint:** `GET /api/tasks?id=1`

**Headers:**

```{
  "Authorization": "Beare your_jwt_token"
}
```

**Response:**

```
{
  "id": 1,
  "title": "Task 1",
  "description": "Description 1",
  "status": "Pending"
}
```

### Update a Task by ID

**Endpoint:** `PUT /api/tasks/:id`

**Headers:**

```{
  "Authorization": "Bearer your_jwt_token"
}
```

**Request Body:**

```
{
  "title": "Updated Task",
  "description": "Updated description",
  "status": "Completed"
}
```

**Response:**

```
{
    "id": 1,
    "title": "Updated Task",
    "description": "Updated description",
    "status": "Completed"
}
```

### Delete a Task by ID

**Endpoint:** `DELETE /api/tasks/:id`

**Headers:**

```{
  "Authorization" : "Bearer your_jwt_token"
}
```

**Response:**

```
No Content to show.
```