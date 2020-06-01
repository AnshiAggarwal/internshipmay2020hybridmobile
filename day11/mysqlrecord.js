const mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'abes'
});

con.connect(function(err){
    if(err){
        throw err;
    }
    console.log("connected");
    var query = "INSERT INTO student2 VALUES(1,'anshi') ";
    con.query(query,function(err,result,field){
        if (err){
            throw err;
        }
        console.log(result);
    });
})