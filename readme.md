# Strapi & Next.js example

A simple project demonstrating how to build a web application using **Strapi** for the backend and **Next.js** for the frontend.

## Requirements

To run the project locally, make sure you have one of the following installed:

* [Node.js & npm](https://nodejs.org/en)
* [Docker](https://www.docker.com/)

## Backend

The backend code is on the `/back` folder and is implemented using [Strapi](https://strapi.io/).

### Running locally

To run the backend you can use the `dev` command from Strapi:

```bash
cd back
npm install   # Run only once to install dependencies.
npm run dev
```

> For additional commands and environment configuration, refer to the [Strapi CLI documentation](https://docs.strapi.io/dev-docs/cli).

Alternatively you can also run the backend using Docker:

```bash
docker build -f Dockerfile.back -t my-strapi-back . # Note you only need to build the image once.
docker run -p 1337:1337 my-strapi-back
```

> Feel free to replace `my-strapi-back` with any name you prefer.

The backend will be available at [http://localhost:1337](http://localhost:1337).  
To access the admin panel, go to [http://localhost:1337/admin](http://localhost:1337/admin) and log in using the email `admin@admin.com` and the password `Admin-123`.

### Database

This project uses **SQLite** with some sample data preloaded.

> In production, it's recommended to use a more robust database like **PostgreSQL**, **MariaDB**, or **MySQL**, and populate data using SQL dumps or Strapi’s import tools.

## Frontend

The frontend code is on the `/front` folder and is implemented using [Next.js](https://nextjs.org/).

### Running locally

To run the frontend, you first need to create a `.env` file in the `/front` directory.  
This file should specify the URL where the backend is running and provide an access token (which can be obtained from the Strapi administration panel).

After setting up the `.env` file, you can start the frontend using the Next.js `dev` command:

```bash
cd front
npm install   # Run only once to install dependencies
npm run dev
```

> For additional commands, refer to the [Next.js CLI documentation](https://nextjs.org/docs/pages/api-reference/cli/next#commands).

Alternatively you can also run the frontend using Docker:

```bash
docker build -f Dockerfile.front -t my-next-front . # Note you only need to build the image once.
docker run -p 3000:3000 my-next-front
```

> Feel free to replace `my-next-front` with any name you prefer.

The frontend will be available at [http://localhost:3000](http://localhost:3000).  
