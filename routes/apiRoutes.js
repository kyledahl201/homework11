const router = require("express").Router();
const store = require("../db/store");

//get function to get the notes 

router.get("/notes", function(req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));


});



//post route function 

router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((notes) => res.json(note))
        .catch(err => res.status(500).json(err));
});


//this is a fucntion to delete notes 

router.delete("/notes/:id", function(req, res) {

    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));

});

module.exports = router;


