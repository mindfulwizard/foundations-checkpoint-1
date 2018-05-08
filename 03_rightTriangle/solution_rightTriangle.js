var rightTriangle = function(n){
	var answer = "";

	for(var i = n; i > 0; i--){
		for(var j = i; j > 0; j--){
			answer = answer + '*';
		}
    answer = answer + '\n';
	}
	return answer.slice(0,answer.length-1);
}
