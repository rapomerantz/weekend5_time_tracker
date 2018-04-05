const router = require('express').Router();
const pool = require('../modules/pool');


// project POST route
router.post('/', (req,res) => {
    console.log('POST /projects', req.body);
    let newProject = req.body;
    let queryText = `INSERT INTO client_project (client_id, project) 
                    VALUES ('${newProject.client_id}', '${newProject.project}')`;
    pool.query(queryText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in /projects POST', error);
            res.sendStatus(500)
        })  
})

// project GET route
router.get('/', (req,res) => {
    console.log('GET /projects');
    let queryText = `SELECT * FROM client_project`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful GET /projects');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in /projects GET', error);
            res.sendStatus(500)
        })  
})













module.exports = router;