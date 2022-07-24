var mysql  = require('mysql');

function f(){
	var connection = mysql.createConnection({     
    	host:'localhost',
    	user:'pwc',
    	password:'123456',
    	port:'3306',
    	database:'pwctest'
	}); 
	connection.connect();
	return {
		get:function get(u,f){
	  		var modSql = 'select * from u where id = ?';
    		var modSqlParams = [u.id];
    		return connection.query(modSql,modSqlParams,f);
		},
 		update:function update(u,f){
			var modSql = 'update u SET name = ?, pwd = ?, sex = ?, email = ? WHERE id = ?';
    		var modSqlParams = [u.name, u.pwd,u.sex,u.email,u.id];
    		connection.query(modSql,modSqlParams,f);
		},
		del:function del(u,f){
			var modSql = 'delete from u where id = ?';
			var modSqlParams = [u.id];
			connection.query(modSql,modSqlParams,f);
		},
		add:function add(u,f){
			var modSql = 'insert into u(name,pwd,sex,email) values(?,?,?,?)';
			var modSqlParams = [u.name, u.pwd,u.sex,u.email];
			connection.query(modSql,modSqlParams,f);
		},
		getAll:function getAll(f){
	  		var modSql = 'select * from u';
    		return connection.query(modSql,f);
		},
		end:function end(){
			connection.end(); 
	  	}
	}
}
var a = f();
module.exports = a;
