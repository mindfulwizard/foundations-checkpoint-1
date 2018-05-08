var Pokemon = function(name,health,attackBonus){
	this.name = name;
	this.health = health;
	this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function(){
	return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function(){
	if (this.health > 0){
		return false;
	}
	else{
		return true;
	}
};

var simulateBattle = function(pokemon1,pokemon2,str_firstMove){

	//battle
	if(pokemon1.name === str_firstMove){
		while(!(pokemon1.isDefeated()) && !(pokemon2.isDefeated()) ) {
			pokemon2.health -= pokemon1.biteAttack();
			pokemon1.health -= pokemon2.biteAttack();
		}
	}
	else{
		while(!(pokemon1.isDefeated()) && !(pokemon2.isDefeated()) ) {
			pokemon1.health -= pokemon2.biteAttack();
			pokemon2.health -= pokemon1.biteAttack();
		}
 	}
  	if(pokemon1.isDefeated()){
		return pokemon2.name + " Wins!";
	}
	else if (pokemon2.isDefeated()){
		return pokemon1.name + " Wins!";		}

};
