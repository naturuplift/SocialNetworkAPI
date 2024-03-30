# Social Network API

<br/>
<p align="center">
    <a href="https://www.npmjs.com/package/mongoose">
        <img alt="Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha)" src="https://img.shields.io/static/v1.svg?label=Mongoose&message=Node.js&color=blueviolet" /></a>
    <a href="https://www.mongodb.com/">
        <img alt="MongoDB is a general purpose, document-based, distributed NoSQL database built for web application developers in the cloud era. It’s one of the most popular database choices for modern applications." src="https://img.shields.io/static/v1.svg?label=MongoDB&message=database&color=orange" /></a>
    <a href="https://www.mongodb.com/products/tools/compass">
        <img alt="MongoDB Compass is an interactive tool for querying, optimizing, and analyzing MongoDB data." src="https://img.shields.io/static/v1.svg?label=MongoDB Compass&message=DB Client&color=orange" /></a>
    <a href="https://www.npmjs.com/package/express-session">
        <img alt="express-session - A session middleware for Express.js, used for handling user sessions" src="https://img.shields.io/static/v1.svg?label=express-session&message=middleware&color=green" /></a>
    <a href="https://nodejs.org/" >
        <img alt="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications" src="https://img.shields.io/static/v1.svg?label=Node.js&message=JavaScript runtime&color=lightyellow" /></a>
    <a href="https://expressjs.com/" >
        <img alt="Express.js - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications" src="https://img.shields.io/static/v1.svg?label=Express.js&message=web app framework&color=blue" /></a>
    <a href="https://www.npmjs.com/package/dotenv" >
        <img alt="dotenv NPM" src="https://img.shields.io/static/v1.svg?label=npm&message=dotenv&color=brightgreen" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
        <img alt="JavaScript - ES6" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=lightgrey" /></a>
    <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=black" /></a>
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=UNB&message=Bootcamp&color=red" /></a>
    <a href="https://opensource.org/license/mit/">
        <img alt="The MIT License" src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=lightgreen" /></a>
</p>
<br/>

## Description

This project is a backend application for a social network platform where users can share their thoughts, react to friends' thoughts, and create a friend list. Utilizing MongoDB, an Express.js server, and the Mongoose ODM, it's designed to handle large amounts of unstructured data efficiently.

## Table of Contents

- [Demo Video](#demo-video)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Models](#database-models)
- [API Routes](#api-routes)
- [Structure](#structure)
- [Contributing](#contributing)
- [License](#license)

## Demo Video

[Open Demo video of Social Network API][social-network-api-video]

## Features

The **Social Network API** is a backend application designed to power social networking features for web and mobile applications. This API provides robust support for a wide range of social networking functionalities, including:

- **User Management:** Users can create accounts, update their information, and delete their accounts. Each user's profile includes a unique username, email address, and the ability to have friends and share thoughts.

- **Thoughts Sharing:** Users can post thoughts, allowing them to share text-based content with others. Each thought includes the content of the thought, the creator's username, and timestamps for when the thought was created.

- **Reactions to Thoughts:** Other users can react to thoughts, enabling a dynamic and interactive experience. Reactions are nested within thoughts and include a reaction body, the reacting user's username, and a timestamp.

- **Friend Lists:** Users can maintain a friend list within the network. The API supports adding and removing friends, enabling users to connect and interact with others.

- **Real-time Updates:** The application is designed to support real-time updates, ensuring that users can see the latest thoughts and reactions as they happen.

- **Scalable and Flexible:** Built on MongoDB, a NoSQL database, the API is designed to efficiently handle large volumes of unstructured data. This makes it scalable and adaptable to the needs of growing social networks.

- **Timestamp Formatting:** Utilizes customized timestamp formatting to present dates and times in a user-friendly manner, adapted to the local timezone of the user.

### Schema Virtuals

- **Friend Count:** A virtual attribute on the User model that dynamically calculates the number of friends a user has.

- **Reaction Count:** A virtual attribute on the Thought model that provides the count of reactions a thought has received.

### Bonus Features

- **Cascading Deletes:** When a user is deleted, all associated thoughts and reactions are automatically removed from the database, ensuring data integrity and cleanliness.

## Installation

1. Ensure you have [Node.js][node-js] and [MongoDB][mongo-db] installed on your machine.

2. Clone the repository to your local machine:

```bash
git clone https://github.com/naturuplift/SocialNetworkAPI.git
```

3. Navigate to the project directory and install dependencies:

```bash
cd social-network-api
npm install
```

5. Seed the database:

```bash
npm run seed
```

6. Start the server:

```bash
npm start
```

## Usage

Once the server is running, you can use an API client like [Insomnia][insomnia] to test the API routes.

- **/api/users routes** for users display data in a formatted JSON.

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/3b6b36f1-db66-4d78-8ab6-3e1ebbdbde25)

- **/api/thoughts routes** for thoughts display data in a formatted JSON.

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/e0f7e960-4532-431a-9ac8-5c30a35d0bd1)

- **/api/thoughts/:thoughtId/reactions routes** for reactions display data in a formatted JSON.

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/9801e359-d1e4-41b6-a715-d77c9230049f)

- **/api/users/:userId/friends/:friendId routes** for friends display data in a formatted JSON.

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/a6d89277-8cf4-4371-8602-6f4eea112714)

### Application Functionality

Below are sample screenshots showcasing the application routes functionality.

**GET** Find All Users:

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/f8c05ec6-e8d1-41fc-809d-e622d6bb2758)

**GET** Find a User (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/47e2caf6-ea42-4d0e-a738-838b6ae39d40)

**GET** Find All Thoughts:

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/0dc85166-1a0f-4482-898a-7d821ff9c301)

**GET** Find Thoughts (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/308cc09a-24f0-4a88-95f5-702356e51af9)

**POST** CREATE a New User:

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/8c89545f-dd16-400a-adfd-d2fcf84bac99)

**POST** CREATE a Thought:

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/64ac0904-1f76-4b56-a6ab-bf3420045293)

**POST** CREATE Reaction:

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/a81436f9-f872-485f-ae19-2bce890168d1)

**POST** Add Friend:

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/6eb0ad13-183a-4c4b-abc1-c5a5665456dc)

**PUT** Update a User (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/b545f78a-549e-43d5-8e06-8720fb9268e9)

**PUT** Update a Thought (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/e28ef991-25d9-4dac-8546-ce2df4ca900a)

**DELETE** Delete a User (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/030f2c5d-d00b-45a5-8fe6-424ad25b7fff)

**DELETE** Delete a Thought (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/5eb9eb4f-c6be-4a2b-b6c8-ff7bb9c64185)

**DELETE** Remove Reaction (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/a75c1d72-d18a-4d71-b32b-ccff2e679b87)

**DELETE** Remove Friend (by Id):

![image](https://github.com/naturuplift/SocialNetworkAPI/assets/23546356/ecfe2a28-d5db-4c81-8907-305e7b73d225)

## Database Models

**User**
- **username:** Unique, required, trimmed string.
- **email:** Unique, required string that must match a valid email address.
- **thoughts:** Array of `_id` values referencing the `Thought` model.
- **friends:** Array of `_id` values referencing the `User` model (self-reference).

Schema Settings
- A virtual called `friendCount` retrieves the length of the user's friends array field on query.

**Thought**
- **thoughtText:** Required string between 1 and 280 characters.
- **createdAt:** Date with a default value to the current timestamp. A getter method formats the timestamp on query.
- **username:** Required string indicating the user that created the thought.
- **reactions:** Array of nested documents created with the `reactionSchema`.

Schema Settings
- A virtual called `reactionCount` retrieves the length of the thought's reactions array field on query.

**Reaction (SCHEMA ONLY)**
- **reactionId:** Uses Mongoose's ObjectId data type with a default value set to a new ObjectId.
**reactionBody:** Required string with a 280 character maximum.
**username:** Required string.
**createdAt:** Date with a default value to the current timestamp. A getter method formats the timestamp on query.

## API Routes

**/api/users**
- **GET** all users
- **GET** a single user by its `_id` and populated thought and friend data
- **POST** a new user
- **PUT** to update a user by its `_id`
- **DELETE** to remove user by its `_id`

**/api/users/:userId/friends/:friendId**
- **POST** to add a new friend to a user's friend list
- **DELETE** to remove a friend from a user's friend list

**/api/thoughts**
- **GET** to get all thoughts
- **GET** to get a single thought by its `_id`
- **POST** to create a new thought
- **PUT** to update a thought by its `_id`
- **DELETE** to remove a thought by its `_id`

**/api/thoughts/:thoughtId/reactions**
- **POST** to create a reaction stored in a single thought's reactions array field
- **DELETE** to pull and remove a reaction by the reaction's reactionId value

## Structure

Your directory may have the following structure:

```javascript
SocialNetworkAPI/
├── config/
│   └── connection.js          # Configures Mongoose connection to MongoDB
├── controllers/
│   ├── thoughtController.js   # Contains controllers for thought operations
│   └── userController.js      # Contains controllers for user operations
├── models/
│   ├── Thought.js             # Defines the Thought model and schema
│   ├── User.js                # Defines the User model and schema
│   └── Reaction.js            # Defines the Reaction schema (used within Thought)
├── routes/
│   ├── api/
│   │   ├── thoughtRoutes.js   # Routes for thought operations
│   │   ├── userRoutes.js      # Routes for user operations
│   │   └── index.js           # Aggregates and exports API routes
│   └── index.js               # Central entry point for routing
├── seeds/
│   └── seed.js                # Contains seed data for the database
├── .gitignore                 # Specifies intentionally untracked files to ignore
├── package.json               # Defines project and its dependencies
├── README.md                  # Project description and guidelines
└── server.js  
```

## Contributing

To contribute to this project, please create a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[social-network-api-video]: <https://drive.google.com/file/d/1mo3JPEx-SQKjiKefqo8halnPPza9u_U3/view>
[node-js]: <https://nodejs.org/>
[mongo-db]: <https://www.mongodb.com/>
[insomnia]: <https://insomnia.rest/>
[MIT]: <https://github.com/naturuplift/SocialNetworkAPI/blob/main/LICENSE>
