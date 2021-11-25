#Testing AniAPI with Cypress

This project was created to practice api automation testing using Cypress framework.
AniAPI is a project about anime, so you can use this to search for animes, songs, episodes and more.
To see more about AniAPI, access the [Official Documentation](https://aniapi.com/docs/)

To run it locally you will need to install:
```node```
```npm```

Also you will need to get a JWT from AnimAPI, so you have to create an account on their website to get a token.
With you token, change the file ```cypress-example.env.json``` to ```cypress.env.json```, then paste your token in the front of JWT

Its an **important remainder**, that this token is only valid for 30 days so probably you will have to create other one to continue using it.

To run this project run the following commands:
```
npm install
npm run cy:run
```