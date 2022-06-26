const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

var pg = require("pg");

var connectionString = {
  user: 'ethan',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
};

var pool = new pg.Pool(connectionString);

var albumData = []

pool.connect(function(err, client, done) {
    const query = client.query(new pg.Query("SELECT * from albums"))
    query.on('row', (row) => {
        console.log(row);
        console.log(row['id'])
        albumData.push({id: row['id'], albumName: row['album_name'], artistName: row['album_artist'], year: row['year']})
    })
    query.on('end', (res) => {
        // pool shutdown
        console.log("ending");
        pool.end()
    })
    query.on('error', (res) => {
        console.log(res);
    })

    done()
})

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(albumData);
});

app.post('/api/users', (req, res) => {
  const album = req.body.user;
  album.id = randomId(10);
  console.log('Adding album:::::', album);
  albumData.push(album);
  res.json("album added");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});