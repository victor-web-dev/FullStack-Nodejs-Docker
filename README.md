# CRUD Nodejs with Docker

## What this app do?

The Backend folder: API built to offer user registration, update and authentication routes.

The Frontend folder: Has basic configuration for docker use.

## How to start! :rocket:

```
- Clone the repository

- cd folderName

- docker-compose up -d
```

## **Before start**

<details>

  <summary>
    <strong>Starting without docker</strong>
  </summary>

**Enter /backend and /frontend to run the script:**

```
npm install

```

- Starting without docker
  Create file **.env** following the **.env-example**.

Default PORT: `process.env.SERVER_PORT || 3001`
Can be changed on **server.ts** file.

Start script: `npm start`

</details>

<details>

  <summary>
    <strong>Scripts API</strong>
  </summary>

```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "npx eslint ./src --ext .js,.jsx,.ts,.tsx",
    "dev": "nodemon ./src/server.ts",
    "db:create": "npx sequelize-cli db:create",
    "db:drop": "npx sequelize-cli db:drop",
    "db:migrate": "npx sequelize-cli db:migrate",
    "db:migrate:undo": "npx sequelize-cli db:migrate:undo",
    "db:seed": "npx sequelize-cli db:seed:all",
    "db:seed:undo": "npx sequelize-cli db:seed:undo",
    "db:setup": "npx tsc && npm run db:drop && npm run db:create && npm run db:migrate && npm run db:seed",
    "start": "npm run db:setup && node ./build/server.js"
  }
```

</details>

<details>

<summary>
  <strong>Starting only the Backend with Docker Compose</strong>
</summary>

```

docker-compose up backend -d

```

- Shutting Down Docker-Compose

```

    docker-compose down

```

</details>

## **Available Routes**

<details>

<summary>
  <strong>Routes</strong>
</summary>
<br/>
<details>

  <summary>
    <strong>Auth</strong>
  </summary>

**POST /authenticate**
JSON Body file

```
  {
  "email": "test@outlook.com",
  "password": "teste1"
  }

```

**Return**

    ```

        {
          "token": "...",
          "admin": "true"
        }

    ```

</details>

<details>
  <summary>
    <strong>User</strong>
  </summary>

<details>
<summary>
  <strong>GET /user</strong>
</summary>

Test Route to check server status.

**Response**

```
      {
        "message": "Server Working"
      }

```

</details>

<details>
<summary><strong>GET /user/list</strong></summary>

List all users.

**Response**

```

    [
    {
      "id": 1,
      "email": "admin@admin.com",
      "admin": true,
      "createdAt": "2022-09-19T02:20:49.000Z",
      "updatedAt": "2022-09-19T02:20:49.000Z",
      "Addresses": [],
      "UserInfo": null
    },
    ]
**UserInfo can be null or object**
```

</details>

<details>
<summary><strong>POST /user/register</strong></summary>

JSON Body request

```

    {
      "email": "test@test.com",
      "password": "teste1",
      "address": {
        "cep": 70234059,
        "rua": "rua do tester",
        "numero": 344,
        "bairro": "lapada",
        "complemento": "perto do rio",
        "cidade": "Fortaleza",
        "estado": "CE"
      },
      "userInfo": {
        "cpf": "03250455542",
        "rg": "1234578600",
        "nome": "lobo",
        "dataNascimento": "1900-5-23",
        "sexo": "masculino",
        "telefone": "00000000000",
        "celular": "000000000000",
        "situacao": true
      }
    }

```

**Response**

```

    {
      "message": "Done"
    }

```

</details>

<details>
<summary>
  <strong>PUT /user/update/basic/:id</strong>
</summary>

Basic update route.

JSON Body request

```

    {
        "user": {
        "email": "email@email.com",
        "password": "555556",
        "admin": false,
      }
    }

```

**Response**

```

    {
      "message": "Updated"
    }

```

</details>

<details>
<summary>
  <strong>PUT /user/update/address/:id</strong>
</summary>

Update user Address.

JSON Body request

```

    {
        "address": {
        "cep": 545645633,
        "rua": "rua do tester",
        "numero": 443,
        "bairro": "lapa",
        "complemento": "perto do rio",
        "cidade": "Fortaleza",
        "estado": "CE"
      }
    }

```

**Response**

```

    {
      "message": "Updated"
    }

```

</details>

  <details>
    <summary>
      <strong>PUT /user/update/info/:id</strong>
    </summary>

    Update user info.
    JSON Body request

    ```

        {
            "info": {
            "cpf": "0000000000",
            "rg": "555555555555",
            "nome": "Jose",
            "dataNascimento": "1900-5-23",
            "sexo": "alien",
            "telefone": "00000000000",
            "celular": "000000000000",
            "situacao": true
          }
        }

    ```

**Response**

```
    {
      "message": "Updated"
    }

```

  </details>

</details>

</details>

## **Dependencies 📌**

<details>

<summary>
  <strong>Dependencies</strong>
</summary>
<br/>
<details>
<summary>Front</summary>

```
"dependencies": {
"react": "^18.3.1",
"react-dom": "^18.3.1"
},
"devDependencies": {
"@types/react": "^18.3.3",
"@types/react-dom": "^18.3.0",
"@typescript-eslint/eslint-plugin": "^7.15.0",
"@typescript-eslint/parser": "^7.15.0",
"@vitejs/plugin-react": "^4.3.1",
"eslint": "^8.57.0",
"eslint-plugin-react-hooks": "^4.6.2",
"eslint-plugin-react-refresh": "^0.4.7",
"typescript": "^5.2.2",
"vite": "^5.3.4"
}

```

</details>

<details>
<summary>API</summary>

```
"devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jsonwebtoken": "^9.0.6",
    "@types/node": "^22.1.0",
    "@types/sequelize": "^4.28.20",
    "@typescript-eslint/eslint-plugin": "^8.0.1",
    "@typescript-eslint/parser": "^8.0.1",
    "eslint": "^9.8.0",
    "nodemon": "^3.1.4",
    "sequelize-cli": "^6.6.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.5.4"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "http-status-codes": "^2.3.0",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.11.0",
    "sequelize": "^6.37.3"
  }

```

</details>

</details>
