/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import express from 'express';
import Layout from '@podium/layout';

const layout = new Layout({
    pathname: '/',
    logger: console,
    name: 'demo',
});

const app = express();

app.use(layout.pathname(), layout.middleware());

app.get(`${layout.pathname()}/:bar?`,async (req, res, next) => {
    const incoming = res.locals.podium;

    incoming.view = {
        title: 'Example application',
    };

    res.status(200).podiumSend("<h1>test</h1>");
});

app.use(`${layout.pathname()}/assets`, express.static('assets'));

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send(
        '<html><body><h1>Internal server error</h1></body></html>',
    );
});

app.listen(7000, () => {
    console.log(`layout server running at http://localhost:7000`);
});