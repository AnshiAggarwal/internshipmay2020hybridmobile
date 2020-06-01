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
    var query = "select * from student2";
    con.query(query,function(err,result,field){
        if (err){
            throw err;
        }
        // console.log(field);
        result.forEach(res => {
            console.log(res);
        });
        // console.log(result);
    });
})