//require in the router
const router = require("express").Router();
//require in the path npm package
const path = require("path");
//get require which is going to return the exercise.html when the user visits /exercise
router.get('/exercise', (req, res) => 
res.sendFile(path.join(__dirname, '../public/exercise.html'))
);
//get request which is going to return the stats.html when the user visits /stats
router.get('/stats', (req, res) =>
res.sendFile(path.join(__dirname, '../public/stats.html'))
);
//export the router
module.exports = router;