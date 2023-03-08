const express = require('express');
const routes = require('./routes');
const ExpressError = require('./errorHandling');


const app = express();

// enable parsing body with json
app.use(express.json())


app.use('/', routes);

// 404 error
app.use((req, res, next) => {
  const notFound = new ExpressError("Page Not Found", 404);
  next(notFound);
})


// error handler
app.use((err, req, res, next) => {
    let message = err.message;
    let status = err.status || 500;

    return res.status(status).json({
      error: message,
      status: status
    })
});

// app.listen(3000);

module.exports = app;
