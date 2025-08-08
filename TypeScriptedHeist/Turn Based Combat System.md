Turn based RPG like combat system, simlar to FF (<X)
Parts:
- Battle Engine
	- Builds battle encounters based on given data
		- Characters (Faction, type, ammount)
		- Battle background (Graphics, sfx)
	- Executes given Action
		- Audiovisual
		- Applies Action effects (HP reduction, debuffs, buffs)
	- Manages Turn Order
		- Construct turn order based on Battle Character Stats
		- Give out turns in order
		- Begin and End turns
		- Prevent Characters from taking Actions out of Turn
- Battle AI
	- AI driving Enemy decision making during a battle
	- Picking Action
		- Enemy Personality Type, healers heal, nerveus run away etc.
		- Situational
			- Buffing big ally to deal more damange
			- Healing hurt allies
			- Picking effective attacks (elemental weakenss, other enemy debuff)


Battle AI:
Turn based AIm,


Weighted random for Action decision:
- Give each Action weight based on Character Traits etc.
- Store each to a thingy Action, Weight
- Sort by weight, higher weight to top
- Randomize a number between 0 and All Weights combined
- Iterate through Actions, reduce random each time by wight
	- If (Random <= 0)
		- Choose curret (=Recent) Action