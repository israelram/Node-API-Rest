var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

    // Import Models and controllers
    ColaboradoresController = require('./controller/colaboradores');
    models                  = require('./models/colaboradores')(app, mongoose);

// Connection to DB
mongoose.connect('mongodb://localhost/colaboradores', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var colaboladores = express.Router();

colaboladores.route('/colaboladores')
  .get(ColaboladoresController.findAllColaboradores)
  .post(ColaboladoresController.addColaboladores);

colaboladores.route('/colaboladores/:id')
  .get(ColaboladoresController.findById)
  .put(ColaboladoresController.updateColaboladores)
  .delete(ColaboladoresController.deleteColaboladores);

app.use('/api', colaboladores);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});