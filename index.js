const express = require("express");
const app = express();

app.use(logger);

app.get("/books", (req, res) => {
  res.send('{ route: "/books"}');
});

app.use(logger2);

app.get("/libraries", (req, res) => {
  res.send('{ route: "/libraries"}');
});

app.get("/authors",(req, res) => {
  res.send('{ route: "/authors"}');
});

function logger(req, res, next) {
  console.log("this is the logger");
  next();
}

function logger2(req, res, next){
    if(req.path = "/libraries"){
        req.role = "librarian";
        permission: true;
    }
    else if ((req.path = "/author")) {
      req.role = "author";
      permission: true;
    }
}


app.listen(5432, (req, res) => {
  console.log("listening on the port 5432");
});
