var bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes){
	var User = sequelize.define('User', {
		username: {type: DataTypes.STRING, unique: true, validate: {notNull: true, notEmpty: true}},
		password: {type: DataTypes.STRING, validate: {notNull: true, notEmpty: true}}
	},
	{
		classMethods: {
			validPassword: function(password, passwd, done, user){
				bcrypt.compare(password, passwd, function(err, isMatch) {
					if(err){
						console.log(err);
					}if(isMatch){
						return done(null, user)
					}else{
						return done(null, false)
					}
				});
			}
		}
	},
	{
		dialect: 'mysql'	
	}
	);

	User.hook('beforeCreate', function(user, fn){
		var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
			return salt;
		})
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err) {
				return next(err);
			}else{
				user.password = hash;
				return fn(null, user)
			}	
		});	
	})
}






bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});
 
// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});