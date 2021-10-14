//File: controllers/colaboradores.js
var mongoose = require('mongoose');
var Colaboradores  = mongoose.model('Colaboradores');

//GET - Return all colaboradores in the DB
exports.findAllColaboradores = function(req, res) {
	Colaboradores.find(function(err, colaboradores) {
    if(err) res.send(500, err.message);

    console.log('GET /colaboradores')
		res.status(200).jsonp(colaboradores);
	});
};

//GET - Return a colaborador with specified ID
exports.findById = function(req, res) {
	Colaboradores.findById(req.params.id, function(err, colaboradores) {
    if(err) return res.send(500, err.message);

    console.log('GET /colaboradores/' + req.params.id);
		res.status(200).jsonp(colaboradores);
	});
};

//POST - Insert a new Colaborador in the DB
exports.addColaboradores = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var colaboradores = new Colaboradores({
		name:    req.body.name,
		birth: 	  req.body.birth,
		rfc:  req.body.rfc,
		start:   req.body.start,
		state:  req.body.state,
		area:    req.body.area,
		summary:  req.body.summary
	});

	colaboradores.save(function(err, colaboradores) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(colaboradores);
	});
};

//PUT - Update a register already exists
exports.updateColaboradores = function(req, res) {
	Colaboradores.findById(req.params.id, function(err, colaboradores) {
		colaboradores.name   = req.body.nameId;
		colaboradores.birth    = req.body.birth;
		colaboradores.rfc = req.body.rfc;
		colaboradores.start  = req.body.start;
		colaboradores.state = req.body.state;
		colaboradores.area   = req.body.area;
		colaboradores.summary = req.body.summary;

		colaboradores.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(colaboradores);
		});
	});
};

//DELETE - Delete a Colaborador with specified ID
exports.deleteColaboradores = function(req, res) {
	Colaboradores.findById(req.params.id, function(err, colaboradores) {
		colaboradores.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};