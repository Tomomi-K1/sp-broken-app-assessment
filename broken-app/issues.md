# Broken App Issues
- missing `app.use(express.json())`
 without this we cannot read body information with JSON  
- missing`(err)` after "catch"
- missing Error Handler
- separate `server.js`
- needed to make post route function to async in order to get developers info from api call.
- have routes in the separate file
- missing error handler
- missing 404 error handling
- created `helper` file to organize code.
- post route missing error handling -> added `if(!req.body.developers) throw new ExpressError('need developers', 400)`




