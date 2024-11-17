const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nama_database'
});

connection.connect(err => {
  if (err) {
    console.error('Koneksi gagal: ' + err.stack);
    return;
  }
  console.log('Terhubung sebagai id ' + connection.threadId);
});