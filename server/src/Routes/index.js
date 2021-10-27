const userRouter = require('./UserRouter');
const accountRouter = require('./AccountRouter');
const artistRouter = require('./ArtistRouter');

const route = (app) => {
    app.use('/user', userRouter);
    app.use('/account', accountRouter);
    app.use('/artist', artistRouter);
}

module.exports = route;