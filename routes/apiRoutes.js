const router = require("exrpess").Router();
const store = require("../db/store");

//get function to get the notes 

router.get("/notes", function(req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));


});



//post route function 

