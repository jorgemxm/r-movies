## Package.json Scripts

### Start Json server
- "start": "node index",
- "server": "json-server --watch db/movies_api.json",

### Webpack Builds
"dev": "webpack --watch --progress --hide-modules",
"build-dev": "webpack --progress --hide-modules",
"build-prod": "webpack --progress --hide-modules --env.prod=true",

### Webpack-Dev-Server - Test Tasks
"server-webpack": "webpack-dev-server --inline",
"server-watch": "webpack-dev-server --watch-poll",
