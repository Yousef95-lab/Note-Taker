//variables
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    //get notes
    app.get("/api/notes", (req, res) => {
        let db_storage = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(db_storage);
    });

    //post notes
    app.post('/api/notes', (req, res) => {
        let user_notes = req.body;
        user_notes.id = uuidv4()
        let db_storage = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        db_storage.push(user_notes)
        fs.writeFileSync('./db/db.json', JSON.stringify(db_storage));
        res.json(user_notes);
    })
}




