let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  database = require("./database"),
  bodyParser = require("body-parser");
 const router =  require ('./routes');
// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );

/*const productoAPI = require("../backend/routes/producto.route");
//const usuarioAPI = require("./routes/usuario.ruoute");*/
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// API
app.use("/api", router);
//app.use("/api", usuarioAPI);

// Create port
const port = process.env.PORT || 4000;
//cambio 1
app.get('/hola',function (req,res) {
  res.send('helo world!');
});

app.listen(port, () => {
  console.log("Connected to port " + port); 
});

// Find 404
app.use((req, res, next) => {
  next(console.error(404));
});

// error handler
app.use(function(err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
