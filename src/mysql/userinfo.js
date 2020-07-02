var sql = require("../sqlconnection.js")
var str = "select * from userinfo"

var getUser = function(v){
    var w = v.id?"where id ="  + Number(v.id):"";
    str = "select * from userinfo " + w;
    return  new Promise(function(resolve,reject){
        sql.connection.query(str,function(err,result){
            if(err) throw err;
           
            resolve(result)
        })
    }).then(function(v){
        return v;
    });
}

module.exports.getUser = getUser;