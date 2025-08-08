MenuObject
- Interactions targeting Others
	- Pick interaction, (select item to use), select target
	- Attack, Attack with weapons, hurtful abilities
	- Using Consumables, Items
- Escape


Dealing Damage:
To Hit
- Dex/10 * WeaponHitChance + d10
	- = Total Hit Chance
- Compared to:
	- Enemy Evade (Dex+Dodge)
	- = Hit Chance Reduction
- If HitChance > 0, attack hits
- Damage is modified
	- (((STR * 2+WeaponSkillDamage)/100) + 0.4 * WeapnDamage) + d10
	- DEX+WpnSkillDmg+d10
	- - Enemy Armour Ratingn
- 
- Skills modify weapon damage


Combat Stage
Turn manger
- Round number
- Turn order
- Giving turn to proper character
Battle AI
- Design Goals
	- Personality: Different enemies should act differently, reflecting their character
	- Dynamic: Enemies can adjust to changes on the battlefield, such as allied defeat, a debuff, arena trigger etc.
	- Challenging: Enemy should provide a challenge...
	- Beatable: ... that is fun and satisfying to beat.
- Character Driven
	- Battle AI filters each available combat option through Character's combat traits, social traits, phsycial traits, weapons, armour, health (allied status)
		- Requires:
			- Each Combat Option to be tagged for each trait, weapon, and have weighting curves
- For now: Pick random enemy and random attack


Combat Abilities
- Base, avaialble to most everyone
	- (Unarmed attacks, run away)
- Melee weapon attack 
	- Req: Melee weapon
- Ranged Weapon Attack
	- Req: Ranged Weapon

Battle Moves Base
name
bool req. target
