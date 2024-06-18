const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.dev.js'); // Используем dev конфигурацию

const app = express();
const compiler = webpack(webpackConfig);

// Используем webpack-dev-middleware
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
    })
);

// Сервер слушает на порту 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});