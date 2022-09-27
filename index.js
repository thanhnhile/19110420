const express = require('express');
const app = express();
const PORT = 5000;
// add this middleware to read post request body
app.use(express.json());
app.use(express.text());
//EJS
app.set('view engine', 'ejs');
//middleware  to LOG
app.use((req, res, next) => {
    console.log(`[Method:${req.method} - URL: ${req.originalUrl} - Host: ${req.headers.host} - ${new Date().toLocaleString()}]`);
    next();
})
//Routes
const mygroupReq = require('./routes/myGroupRoutes');
app.use('/', mygroupReq);
const mssvReq = require('./routes/19110420Routes');
app.use('/19110420', mssvReq);
const messageReq = require('./routes/messageRouters');
app.use('/message', messageReq);
/** Error handling */
app.use((req, res, next) => {
    res.render('404',{});
});
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
