# Project Manager

This is a simple full-stack project manager I built while learning GraphQL and Apollo Client, which I used here alongside React.js, Node, Express, MongoDB and Bootstrap.

Users can add clients and projects (with a dropdown selector to assign a project to a particular client), update projects and delete them, while deleting a client also removes the project or projects they're assigned to.

---

## Database Setup

Install MongoDB. If you are using a Mac you can do this via [Homebrew](https://brew.sh/):

```
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

Set your local MongoDB data directory, for example:

```
mkdir $HOME/mongodb-data
```

Start MongoDB:

```
mongod --dbpath $HOME/mongodb-data
```

Set your MongoDB URI:

```
echo MONGO_URI=mongodb://localhost:27017/project-manager >> .env
```

---

## Installation

Run `npm install` from both the `./server` and `./client` directories.

---

## Running

Launch MongoDB with `mongod`.

Run `npm run dev` from the `./server` directory and visit [http://localhost:3000](http://localhost:3000) if you're not automatically directed there.

## Technologies Used

* React.js
* Node.js
* Express.js
* MongoDB
* GraphQL
* Apollo
* CSS/Bootstrap

---