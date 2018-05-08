

var dontSpillTheBeans = function(secret){
	return {
		getSecret: function(){
			return secret;
		},
		setSecret: function(new_secret){
			secret = new_secret;
		}
	}
}