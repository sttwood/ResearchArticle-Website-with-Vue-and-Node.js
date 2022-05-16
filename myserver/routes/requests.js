const express = require('express');
const router = express.Router();

const conn = require('../utils/dbconnect.js')

//show all Request
router.get('/api/requests', (req, res) => {
    let sql = "SELECT * FROM requests";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//show single Requestemployee
router.get('/api/requests/:id', (req, res) => {
    let sql = "SELECT * FROM requests WHERE request_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//add new Request
router.post('/api/requests', (req, res) => {
    let data = { fiscal_year: req.body.fiscal_year, 
                meeting_number: req.body.meeting_number, 
                fullname: req.body.fullname, 
                school: req.body.school, 
                publication: req.body.publication, 
                level_type: req.body.level_type, 
                level: req.body.level, 
                type: req.body.type, 
                compensation: req.body.compensation,
                request_date: req.body.request_date, 
                budget_source: req.body.budget_source, 
                publication_name: req.body.publication_name, 
                published_year_issue_pages: req.body.published_year_issue_pages, 
                first_author: req.body.first_author, 
                all_author: req.body.all_author,
                remark: req.body.remark };
    let sql = "INSERT INTO requests SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        //results.message = "1 row inserted.";
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//update Request
router.put('/api/requests/:id', (req, res) => {
    let sql = "UPDATE requests SET fiscal_year='" + req.body.fiscal_year + 
    "', meeting_number='" + req.body.meeting_number + 
    "', fullname='" + req.body.fullname + 
    "', school='" + req.body.school + 
    "', publication='" + req.body.publication + 
    "', level_type='" + req.body.level_type + 
    "', level='" + req.body.level + 
    "', type='" + req.body.type + 
    "', compensation='" + req.body.compensation + 
    "', request_date='" + req.body.request_date +
    "', budget_source='" + req.body.budget_source + 
    "', publication_name='" + req.body.publication_name + 
    "', published_year_issue_pages='" + req.body.published_year_issue_pages + 
    "', first_author='" + req.body.first_author + 
    "', all_author='" + req.body.all_author + 
    "', remark='" + req.body.remark + 
    "' WHERE request_id='" + req.body.request_id + "'";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Delete Request
router.delete('/api/requests/:id', (req, res) => {
    let sql = "DELETE FROM requests WHERE request_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//show sum fiscal_year
router.get('/api/sumfiscal_year', (req, res) => {
    let sql = "SELECT fiscal_year, COUNT(request_id) AS sumfiscal_year FROM requests GROUP BY fiscal_year";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//show sum compensation by fiscal_year
router.get('/api/sumcompensation', (req, res) => {
    let sql = "SELECT fiscal_year, sum(compensation) total_compensation FROM requests GROUP BY fiscal_year";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//show sum school
router.get('/api/sumschool', (req, res) => {
    let sql = "SELECT school, COUNT(request_id) AS sumschool FROM requests GROUP BY school";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;