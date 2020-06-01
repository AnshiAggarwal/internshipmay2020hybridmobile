const mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'demodb'
});

con.connect(function(err){
    if(err){
        throw err;
    }
    console.log("connected");
    var query = "select itemname, itemprice from item";
    con.query(query,function(err,result,field){
        if (err){
            throw err;
        }
        // console.log(field);
        result.forEach(res => {
            console.log(res.itemname+":"+res.itemprice);
        });
        // console.log(result);
    });
})