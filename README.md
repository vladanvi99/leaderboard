![](https://img.shields.io/badge/Microverse-blueviolet)

# Leaderboard Project

> This is leaderboard app.

![screenshot](./Screenshot_2.png)

Here you can write and save your scores.

## Setup

### Clone this repository

```bash
$ git clone https://github.com/vladanvi99/leaderboard.git
$ cd leaderboard
```

### Run project

```bash
$ npm install
$ npm start
```
### Open page in browser
```bash
$ open dist/index.html
```
## How to use API

### Make a new game 

```bash
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: "my new game" }),
    });
  };
```
### Get data 

```bash
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/idOfgame/scores/')
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
      });

```
### Make a new score 

```bash
 fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/idOfGame/scores/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: "name Of user", score: "score of user" }),
    });

```

## Built With

- HTML
- CSS
- JS

## Live Demo

Live will be soon.

## Authors

👤 **Author1**

- GitHub: [@githubhandle](https://github.com/vladanvi99)
- Twitter: [@twitterhandle](https://twitter.com/vladanvi99)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/vladan-videnovi%C4%87-780bb11b2/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!



