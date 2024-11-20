const express = require("express");
const router = express.Router();

const posts = [
    {id: 1, titolo: "Post1", immagine: "img/ciambellone.jpeg", contenuto: "Lorem ipsum", tags: ["sole", "mare"]},
    {id: 2, titolo: "Post2", immagine: "img/cracker_barbabietola.jpeg", contenuto: "Lorem ipsum", tags: ["mare"]},
    {id: 3, titolo: "Post3", immagine: "img/pane_fritto_dolce.jpeg", contenuto: "Lorem ipsum", tags: ["radio"]},
    {id: 4, titolo: "Post4", immagine: "img/pasta_barbabietola.jpeg", contenuto: "Lorem ipsum", tags: ["vip"]},
    {id: 5, titolo: "Post5", immagine: "img/torta_paesana.jpeg", contenuto: "Lorem ipsum", tags: ["tv"]},
];

router.get("/", (req, res) => {
    res.json(posts);
});

router.get("/:id", (req, res) => {

    const {id} = req.params;

    if(isNaN(id)){
        res.status(400).json({ error: "Inserisci un numero" });
    }

    const postSelected = posts.find((post) => post.id === parseInt(id)) 
    
    if(postSelected)
        res.json(postSelected);
    
    else
        res.status(404).json({ error: "Post non trovato" });

});


router.get("/", (req, res) => {
    res.send("Server del mio Blog");
});



module.exports = router;