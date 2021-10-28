const userRouter = require('./UserRouter');
const accountRouter = require('./AccountRouter');
const artistRouter = require('./ArtistRouter');
const mvRouter = require('./MusicVideoRouter');

const route = (app) => {
    app.use('/user', userRouter);
    app.use('/account', accountRouter);
    app.use('/artist', artistRouter);
    app.use('/mv', mvRouter);
}

module.exports = route;