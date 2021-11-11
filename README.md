# Backend Digital Republic Challenge

## Running and testing the application

Steps to run this project:

> It's necessary to have a local mongodb instance active

> Running:

1. Run `npm i` command
2. Run `npm start` command

> testing

1. Run `npm test` command

## API routes

### `GET` /inks

List all inks

#### Code example

#### Default Response

```bash
Status: 200 Ok
```

```ts
{
	"_id": ObjectId
	"createdAt": number;
	"canSize": CanSize
  "wall-a": Wall;
  "wall-b": Wall;
  "wall-c": Wall;
  "wall-d": Wall;
}
```

### `POST` /login

### `POST` /inks

Create Ink by the req body

#### Parameters

| Name               |  Type  |    In |                      Description |
| ------------------ | :----: | ----: | -------------------------------: |
| id                 | string | param |        `Required` <br/> ink's id |
| createdAt          | number |  body | `Required` <br/> datetime millis |
| "wall-a"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-a"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-a"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-a"."width"   | number |  body |      `Required` <br/> wall width |
| "wall-b"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-b"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-b"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-b"."width"   | number |  body |      `Required` <br/> wall width |
| "wall-c"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-c"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-c"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-c"."width"   | number |  body |      `Required` <br/> wall width |
| "wall-d"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-d"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-d"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-d"."width"   | number |  body |      `Required` <br/> wall width |

#### Default Response

```bash
Status: 201 Created
```

```ts
{
  "message": "ink deleted",
  "data": {
    "raw": {
      "result": {
        "n": 1,
        "ok": 1
      },
      "connection": {
        "id": 1,
        "host": "127.0.0.1",
        "port": 27017
      },
      "deletedCount": 1,
      "n": 1,
      "ok": 1
    },
    "affected": 1
  }
}
```

### `GET` /inks/:id

Get ink by id

#### Parameters

| Name |  Type  |    In |               Description |
| ---- | :----: | ----: | ------------------------: |
| id   | string | param | `Required` <br/> ink's id |

#### Default Response

```bash
Status: 200 Ok
```

```ts
{
  "message": "get ink by id",
  "data": {
    "id": "618c349aef44c0ec82ab791d",
    "createdAt": 10000,
    "wall-a": {
      "doors": 1,
      "height": 1,
      "width": 1,
      "windows": 1
    },
    "wall-b": {
      "doors": 2,
      "height": 2,
      "width": 2,
      "windows": 0
    },
    "wall-c": {
      "doors": 1,
      "height": 30.2,
      "width": 200,
      "windows": 0
    },
    "wall-d": {
      "doors": 1,
      "height": 20.2,
      "width": 400,
      "windows": 0
    }
  }
}
```

### `PUT` /inks/:id

Update an Ink by id an body

#### Parameters

| Name               |  Type  |    In |                      Description |
| ------------------ | :----: | ----: | -------------------------------: |
| id                 | string | param |        `Required` <br/> ink's id |
| createdAt          | number |  body | `Required` <br/> datetime millis |
| "wall-a"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-a"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-a"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-a"."width"   | number |  body |      `Required` <br/> wall width |
| "wall-b"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-b"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-b"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-b"."width"   | number |  body |      `Required` <br/> wall width |
| "wall-c"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-c"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-c"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-c"."width"   | number |  body |      `Required` <br/> wall width |
| "wall-d"."doors"   | number |  body |    `Required` <br/> num of doors |
| "wall-d"."windows" | number |  body |  `Required` <br/> num of windows |
| "wall-d"."height"  | number |  body |     `Required` <br/> wall height |
| "wall-d"."width"   | number |  body |      `Required` <br/> wall width |

#### Default Response

```bash
Status: 200 Ok
```

```ts
{
  "message": "ink deleted",
  "data": {
    "raw": {
      "result": {
        "n": 1,
        "ok": 1
      },
      "connection": {
        "id": 1,
        "host": "127.0.0.1",
        "port": 27017
      },
      "deletedCount": 1,
      "n": 1,
      "ok": 1
    },
    "affected": 1
  }
}
```

### `DELETE` /inks/:id

Delete an Ink by id

#### Code example

#### Parameters

| Name |  Type  |    In |               Description |
| ---- | :----: | ----: | ------------------------: |
| id   | string | param | `Required` <br/> ink's id |

#### Default Response

```bash
Status: 200 Ok
```

```ts
{
  "message": "ink deleted",
  "data": {
    "raw": {
      "result": {
        "n": 1,
        "ok": 1
      },
      "connection": {
        "id": 1,
        "host": "127.0.0.1",
        "port": 27017
      },
      "deletedCount": 1,
      "n": 1,
      "ok": 1
    },
    "affected": 1
  }
}
```
