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
    res.send("Server del mio Blog");
});

router.get("/bacheca", (req, res) => {

    const tag = req.query.tag;

    if(tag){
        const newPosts = posts.filter((post) => {
            return post.tags.includes(tag.toLowerCase())
        })
    
        res.json({posts: newPosts, numeroElementi: newPosts.length});
    }
    else res.json({posts: posts, numeroElementi: posts.length});
});

module.exports = router;