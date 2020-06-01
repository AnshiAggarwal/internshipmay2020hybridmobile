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
    var query = "INSERT INTO item VALUES(101,'pen',200) ";
    con.query(query,function(err,result,field){
        if (err){
            throw err;
        }
        console.log(result);
    });
})


//show item.js


// const mysql = require('mysql');

// var con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'demodb'
// });

// con.connect(function(err){
//     if(err){
//         throw err;
//     }
//     console.log("connected");
//     var query = "select itemname, itemprice from item";
//     con.query(query,function(err,result,field){
//         if (err){
//             throw err;
//         }
//         // console.log(field);
//         result.forEach(res => {
//             console.log(res);
//         });
//         // console.log(result);
//     });
// })