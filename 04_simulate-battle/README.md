####Simulate Battle

### 8.00 Points

Create a function `simulateBattle` that simulates a Pokemon Battle! How does the battle work? 

The `simulateBattle` function accepts three arguments:

	- Pokemon Fighter 1
	- Pokemon Fighter 2
	- Pokemon Fighter name that gets first move


The first two arguments are object instances of the `Pokemon` Constructor function.  These are the two Pokemons that
will battle each other.  The last argument is the name of the Pokemon fighter that takes the first move in the battle, it is a string.

The battle will end when one of the two Pokemons in the battle reaches `0` or negative health.  Each Pokemon will have one main ability, `biteAttack`.  The biteAttack is the total value of the attackBonus property on the Pokemon (Pokemon Constructor Function below) + 2. Each Pokemon will alternate attacks until a Pokemon reachs 0 or negative health. At the end of the battle, state the name of the Winner, ex:

```
simulateBattle(new Pokemon("Krabby", 100, 50), new Pokemon("Squirtle", 50, 0)); // returns `"Krabby Wins!"`
```


#####Pokemon Constructor Function

In order to have Pokemon to battle one another, first you need a way to create the Pokemon! Create the constructor function `Pokemon` that creates a `Pokemon`
with the following properties:

- Name
- Health
- Attack Bonus

There should also be two methods on the Constructor Functions `.prototype` object so all instances of the `Pokemon` can access them. The two methods are:

- `biteAttack`: returns the value of a bit attack.  The value of the biteAttack is the attack bonus value + 2.
- `isDefeated`: returns `true` or `false` depending if the Pokemon's health is greater than 0 (false) or if the Pokemon's health is less than or equal to 0 (true, the Pokemon is defeated)







