let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  path = require("path"),
  database = require("./database");

const auth = require("./routes/auth");

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

const userRoute = require("../backend/routes/auth");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
app.use("/user", userRoute);

// API
app.use("/api/auth", auth);

// Create port
const port = process.env.PORT || 4000;
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
