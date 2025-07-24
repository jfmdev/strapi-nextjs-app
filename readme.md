# Strapi & Next.js example

A simple project demonstrating how to build a web application using **Strapi** for the backend and **Next.js** for the frontend.

## Requirements

To run the project locally, make sure you have one of the following installed:

* [Node.js & npm](https://nodejs.org/en)
* [Docker](https://www.docker.com/)

## Backend

The backend code is on the `/back` folder and is implemented using [Strapi](https://strapi.io/).

### Running locally

To run the backend you can use the `start` command from Strapi:

```bash
cd back/app
npm install   # Run only once to install dependencies
npm run start
```

> For additional commands and environment configuration, refer to the [Strapi CLI documentation](https://docs.strapi.io/dev-docs/cli).

Alternatively you can also run the backend using Docker:

```bash
cd /back
docker build -t my-strapi-back . # Note you only need to build the image once.
docker run -p 1337:1337 my-strapi-back
```

> Feel free to replace `my-strapi-back` with any name you prefer.

The backend will be available at [http://localhost:1337](http://localhost:1337).  
To access the admin panel, go to [http://localhost:1337/admin](http://localhost:1337/admin) and log in using the email `admin@admin.com` and the password `Admin-123`.

### Database

This project uses **SQLite** with some sample data preloaded.

> In production, it's recommended to use a more robust database like **PostgreSQL**, **MariaDB**, or **MySQL**, and populate data using SQL dumps or Strapi’s import tools.

## Frontend

TODO
