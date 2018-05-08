var findObjPropsHasOwn = function(obj){
	var answer = [];
	for (property in obj){
		if(obj.hasOwnProperty(property)){
			answer.push(property);}
		else {
			return;
		}
	}

	return answer.toString().replace(/,/g, ", ");
}

var Rectangle = function(color,height,width){
	this.color = color;
	this.height = height;
	this.width = width;
}

var findObjKeys = function(obj){
	var keys = Object.keys(obj);

	var answer = keys.toString().replace(/,/g, ", ");
	return answer;
}
