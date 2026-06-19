(function () {
	function createStats() {
		return {
			ATK: "15,971",
			HP: "2,236,301",
			DEF: "15,971",
			CMD: "350"
		};
	}

	function tenacitySkill() {
		return {
			name: "Tenacity",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/tenacity-1.webp",
			description: "ATK, HP, and DEF +20%; skill cooldown speed +10%.",
			type: "Support Skill",
			cooldown: "N/A",
			damageType: "N/A",
			additionalEffects: ["Unlocks at Hero Level 30 and 8 stars."]
		};
	}

	window.LAST_ASYLUM_HEROES = [
		{
			slug: "arthur",
			name: "Arthur",
			role: "UR Tank",
			summary: "Tank fondamentale per i primi team: apre con scudi, regge bene il mid game e resta una frontline affidabile anche quando il roster si allarga.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/arthur-image.webp",
			overview: ["Core", "Warrior", "Tank", "F2P"],
			faction: "Warrior",
			heroClass: "Tank",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Battle Shield",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/battle-shield-1.webp",
					description: "Swings the shield, dealing 750.0% ATK Physical DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Earthshattering",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/earthshattering.webp",
					description: "Slams the ground with a shield, dealing 1407.5% ATK Physical DMG to enemies within range while reducing Physical DMG taken by allies within range by 32.5% for 5s.",
					type: "Ultimate Skill",
					cooldown: "6.4s",
					damageType: "Physical DMG",
					additionalEffects: ["2 stars: Physical DMG reduction increases by 3%.", "6 stars: Physical DMG reduction increases by 4.5%.", "10 stars: Physical DMG reduction increases by 7.5%."]
				},
				{
					name: "Rock Solid",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/rock-solid.webp",
					description: "Grants a shield equal to 25.0% of current max HP, absorbing 50% of damage taken each time for 3s.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Physical DMG",
					additionalEffects: ["3 stars: Shield effect increases by 20%.", "7 stars: Shield effect increases by 30%.", "10 stars: Shield effect increases by 50%."]
				},
				{
					name: "Strong Will",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/strong-will.webp",
					description: "In combat, reduces all damage received by allied tank heroes by 8.25%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["4 stars: Effect increases by 0.6%.", "9 stars: Effect increases by 0.9%.", "10 stars: Effect increases by 1.5%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "cynthia",
			name: "Cynthia",
			role: "Mage Carry",
			summary: "Carry ad alta mobilita con critico bonus, pressione AoE e ottima resa contro wave, farm risorse e scontri aperti.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/cynthia-full-image.webp",
			overview: ["AoE", "Carry", "Crit", "Energy"],
			faction: "Ranger",
			heroClass: "Carry",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Moon Blade",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/moon-blade.webp",
					description: "Uses a Moon Blade to deal 622.5% ATK Energy DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Energy DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Moonfall Dance",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/moonfall-dance.webp",
					description: "Increases Crit Rate by 14.00% and fires a giant moon blade, dealing 2480% ATK Energy DMG to enemies in range.",
					type: "Ultimate Skill",
					cooldown: "13.6s",
					damageType: "Energy DMG",
					additionalEffects: ["2 stars: Deals 40% extra damage.", "6 stars: Deals damage to all enemies.", "10 stars: Extra damage increases to 100%."]
				},
				{
					name: "Lunar Hunt",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/lunar-hunt.webp",
					description: "Randomly locks onto 3 targets, launching 3 moon blades, each dealing 1500.0% ATK Energy DMG.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Energy DMG",
					additionalEffects: ["3 stars: Deals 40% Extra Damage.", "7 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Moon's Blessing",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/moons-blessing-1.webp",
					description: "In combat, increases 22.0% Crit Rate.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4.0%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "marlena",
			name: "Marlena",
			role: "UR DPS",
			summary: "Uno dei carry energetici piu forti del gioco: burst AoE, auto-buff all'attacco e ottima resa sia sui boss sia nelle comp PvP da esplosione.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/marlena-full-image.webp",
			overview: ["UR", "DPS", "Warrior", "Burst"],
			faction: "Warrior",
			heroClass: "Carry",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Skybreaker Slash",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/skybreaker-slash-1.webp",
					description: "Unleash a sword wind, dealing 652.5% ATK as Energy DMG to a single target.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Energy DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Peerless Blade",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/peerless-blade.webp",
					description: "Releases 3 sword winds, each randomly targeting an enemy, dealing 2818.75% ATK Energy DMG.",
					type: "Ultimate Skill",
					cooldown: "13.6s",
					damageType: "Energy DMG",
					additionalEffects: ["2 stars: Sword Wind +1; each deals 20% extra damage.", "6 stars: Each deals 100% extra damage.", "10 stars: Sword Wind +1; each deals 140% extra damage."]
				},
				{
					name: "Crimson Bloom",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/crimson-bloom.webp",
					description: "Throws a scarlet flower that explodes on impact, dealing 1218.75% ATK Energy DMG to targets within range.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Energy DMG",
					additionalEffects: ["3 stars: Deals 20% extra damage and increases ATK by 12% for 3s.", "7 stars: Extra damage increases to 70%.", "10 stars: Extra damage increases to 150%."]
				},
				{
					name: "War God's Will",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/war-gods-will.webp",
					description: "In combat, increases Energy DMG dealt by 22.0%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "daskal",
			name: "Daskal",
			role: "UR Tank",
			summary: "Tank dominante da frontline con scudo di squadra, riduzione del danno iniziale e sustain costante per reggere le comp piu aggressive.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/daskal-full-image.webp",
			overview: ["UR", "Tank", "Shield", "Sustain"],
			faction: "Warrior",
			heroClass: "Tank",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Battle Will",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/battle-will.webp",
					description: "Slashes the target, dealing 622.5% ATK Physical DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Bloodshed Defense",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/bloodshed-defense.webp",
					description: "Concentrates energy to grant every ally a shield equal to 570.0% of their max DEF, absorbing 50% of incoming damage for 5s.",
					type: "Ultimate Skill",
					cooldown: "5.8s",
					damageType: "Physical DMG",
					additionalEffects: ["2 stars: Shield effect increases by 30%.", "6 stars: Shield effect increases by 30%.", "10 stars: Shield effect increases by 30%."]
				},
				{
					name: "Deadly Pierce",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/deadly-pierce.webp",
					description: "Stabs the target with a two-handed sword, dealing 770.0% ATK Physical DMG and restoring HP equal to 400.0% ATK.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Physical DMG",
					additionalEffects: ["3 stars: Restores 60% extra HP.", "7 stars: Extra HP recovery increases to 150%.", "10 stars: Extra HP recovery increases to 300%."]
				},
				{
					name: "Resolute Fight",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/resolute-fight.webp",
					description: "At the start of the battle, grants all allied tank heroes a shield equal to 18.75% of their max HP, absorbing 50% of incoming damage for 5s.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["4 stars: Shield Duration +2s.", "9 stars: Shield effect increases by 20%.", "10 stars: Shield effect increases by 30%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "shadow",
			name: "Shadow",
			role: "UR Hybrid",
			summary: "Frontline versatile con danni fisici alti, debuff ad area, riduzione difesa e mitigazione dell'energy damage.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/shadow-full-image.webp",
			overview: ["UR", "Tank", "Ranger", "Debuff"],
			faction: "Ranger",
			heroClass: "Tank",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Smoke Cartridge",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/smoke-cartridge.webp",
					description: "Randomly throws 3 smoke bombs, each dealing 210.0% ATK Physical DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Shadow Hunt",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/shadow-hunt.webp",
					description: "Unleashes a rolling black mist, dealing 922.5% ATK Physical DMG to all enemies and reducing their Energy DMG by 20.0% for 5s.",
					type: "Ultimate Skill",
					cooldown: "6.4s",
					damageType: "Physical DMG",
					additionalEffects: ["2 stars: Effect increases by 3%.", "6 stars: Effect increases by 3%.", "10 stars: Effect increases by 3%."]
				},
				{
					name: "Shadow Strike",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/shadow-strike.webp",
					description: "Throws a large smoke cartridge, dealing 462.5% ATK Physical DMG to enemies in range and reducing their DEF by 50.25% for 3s.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Physical DMG",
					additionalEffects: ["3 stars: Effect increases by 4.5%.", "7 stars: Effect increases by 7.5%.", "10 stars: Effect increases by 12%."]
				},
				{
					name: "Shadow Veil",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/shadow-veil.webp",
					description: "In combat, reduces Energy DMG taken by 32.0%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["4 stars: Effect increases by 5%.", "9 stars: Effect increases by 5%.", "10 stars: Effect increases by 5%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "nicole",
			name: "Nicole",
			role: "UR Support",
			summary: "Support warlock focalizzata su cure e buff di squadra, con ottima sinergia nei team che ruotano attorno a burn e velocita d'attacco.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/04/nicole-full-image.webp",
			overview: ["Support", "Warlock", "Heal", "Buff"],
			faction: "Warlock",
			heroClass: "Support",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Ember Dust",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/04/ember-dust.webp",
					description: "Throws a flame, inflicts 622.5% ATK Physical DMG to a single target, and heals the ally with the lowest HP for 50% of ATK.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Inferno Array",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/04/inferno-array.webp",
					description: "Summons a pillar of fire, dealing 2625.0% ATK Physical DMG to all enemies. If targets are [Burning], damage increases by 40.0%.",
					type: "Ultimate Skill",
					cooldown: "13.6s",
					damageType: "N/A",
					additionalEffects: ["2 stars: Deals 100% extra damage.", "6 stars: Extra damage increases to 200%.", "10 stars: Damage from Burn status increases by 5%."]
				},
				{
					name: "Heartwarming Flame",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/04/heartwarming-flame.webp",
					description: "Throws 2 fireballs, healing the 2 lowest-HP allies for 387.5% ATK.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "N/A",
					additionalEffects: ["3 stars: Restores extra 70% HP.", "7 stars: Extra HP recovery increases to 140%.", "10 stars: Extra HP recovery increases to 210%."]
				},
				{
					name: "Flame Soul Power",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/04/flame-soul-power.webp",
					description: "During battle, increases ATK SPD of all allied Warlock Heroes by 13.5%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Attack speed bonus increases by 1.2%.", "9 stars: Attack speed bonus increases by 1.8%.", "10 stars: All allied Warlock Heroes' ATK +3%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "annie",
			name: "Annie",
			role: "UR Carry",
			summary: "Carry warlock basata su burn e danno energetico esplosivo, con ottima pressione sui target ad alto ATK.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/annie-full-image.webp",
			overview: ["Carry", "Warlock", "Burn", "Energy"],
			faction: "Warlock",
			heroClass: "Carry",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Candy",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/candy.webp",
					description: "Waves a magic wand to conjure a candy, dealing 622.5% ATK Energy DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Energy DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Candy Jar",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/candy-jar.webp",
					description: "Summons 2 explosive candy jars, targeting the 2 enemies with the highest ATK, dealing 2961.0% ATK DMG, and inflicting [Burn], causing 100% ATK damage per second for 5s.",
					type: "Ultimate Skill",
					cooldown: "13.6s",
					damageType: "Energy DMG",
					additionalEffects: ["2 stars: Attack Target +1.", "6 stars: If the target is Burning, deals an additional 900% Attack Damage once.", "10 stars: Deals 200% extra damage."]
				},
				{
					name: "Surprise Gift",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/surprise-gift.webp",
					description: "Throws a gift box, dealing 1342.5% ATK Energy DMG to enemies within range and causing them to [Burn], inflicting 100% ATK Energy DMG per second for 2s.",
					type: "Active Skill",
					cooldown: "4.1s",
					damageType: "Energy DMG",
					additionalEffects: ["3 stars: Burning Duration +2s.", "7 stars: Deals 100% extra damage.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Charged Gummies",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/charged-gummies.webp",
					description: "In combat, increases Energy DMG dealt by 22.0%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "jester",
			name: "Jester",
			role: "UR Carry",
			summary: "Carry warlock orientato all'execution dei target a bassa vita, con burst single-target e ottime sinergie crit.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/jester-full-image.webp",
			overview: ["Carry", "Warlock", "Crit", "Burst"],
			faction: "Warlock",
			heroClass: "Carry",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Deal Cards",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/deal-cards.webp",
					description: "Throws a card, dealing 622.5% ATK Physical DMG to the lowest HP target.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Joker Ace",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/joker-ace.webp",
					description: "Throws 2 joker cards, dealing 4206.25% ATK Physical DMG to 2 lowest-HP enemies.",
					type: "Ultimate Skill",
					cooldown: "13.6s",
					damageType: "Physical DMG",
					additionalEffects: ["2 stars: Deals 40% extra damage.", "6 stars: Extra damage increases to 100%.", "10 stars: Attack Target +1."]
				},
				{
					name: "Hearthunt Red Card",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/hearthunt-Red-Card.webp",
					description: "Throws a heart card, dealing 1350.0% ATK as Physical DMG to 2 random targets.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Physical DMG",
					additionalEffects: ["3 stars: Deals 40% extra damage.", "7 stars: Extra damage increases to 100%.", "10 stars: Inflicts [Burn] on the target, dealing 400% Attack Damage per second for 3s."]
				},
				{
					name: "Frenzied Emotion",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/frenzied-emotion.webp",
					description: "In combat, increases 22.0% Crit Rate.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "red-lady",
			name: "Red Lady",
			role: "UR Carry",
			summary: "Carry ranger che punta i bersagli ad alto ATK con burst energetico, stun e amplificazione del danno subito.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/red-lady-full-image.webp",
			overview: ["Carry", "Ranger", "Stun", "Burst"],
			faction: "Ranger",
			heroClass: "Carry",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Blood Blade",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/blood-blade.webp",
					description: "Throws a scalpel, dealing 622.5% ATK Energy DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Energy DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Crimson Rose",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/crimson-rose.webp",
					description: "Summons the Crimson Rose, dealing 3792.0% ATK Energy DMG to the 2 highest-ATK enemies, with a 35% chance to stun targets for 5s.",
					type: "Ultimate Skill",
					cooldown: "13.6s",
					damageType: "Energy DMG",
					additionalEffects: ["2 stars: Deals 40% extra damage.", "6 stars: Attack Target +1.", "10 stars: Extra damage increases to 140%."]
				},
				{
					name: "Bloodthirsty Slaughter",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/bloodthirsty-slaughter.webp",
					description: "Locks onto a target, dealing 2445.0% ATK as Energy DMG to them, and increasing damage they take by 14.0% for 3s.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Energy DMG",
					additionalEffects: ["3 stars: Deals 40% Extra Damage.", "7 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Lone Flower",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/lone-flower.webp",
					description: "In combat, increases 22.0% ATK.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4.0%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "billy",
			name: "Billy",
			role: "UR Tank",
			summary: "Tank warlock che protegge i carry con immunita agli stun, riduzione dei danni e utility difensiva da frontline.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/billy-full-image.webp",
			overview: ["Tank", "Warlock", "Defense", "Utility"],
			faction: "Warlock",
			heroClass: "Tank",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Wooden Frame",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/wooden-frame.webp",
					description: "Swings the marionette, dealing 622.5% ATK Physical DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Truth and Lies",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/truth-and-lies.webp",
					description: "Lifts the marionette stand and smashes it to the ground, dealing 2430.0% ATK damage to enemies within range, granting the 3 highest-ATK allies a 70% chance to be immune to stun.",
					type: "Ultimate Skill",
					cooldown: "6.4s",
					damageType: "Physical DMG",
					additionalEffects: ["2 stars: All damage received by allied defense heroes reduces by 15% for 5s.", "6 stars: Chance of stun immunity +30%.", "10 stars: Increases damage dealt on targets by 15% for 5s."]
				},
				{
					name: "Fate's Thread",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/fates-thread.webp",
					description: "Swings the marionette, dealing 515.0% ATK Physical DMG to a single target, reducing Energy DMG received by the 2 highest-ATK allies by 33.0% for 4s.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Physical DMG",
					additionalEffects: ["3 stars: Damage reduction increases by 6%.", "7 stars: Allied target +1.", "10 stars: Damage reduction increases by 6%."]
				},
				{
					name: "Puppet",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/puppet.webp",
					description: "In combat, reduces all damage taken by 22.0%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "zoya",
			name: "Zoya",
			role: "UR Carry",
			summary: "Carry warrior con raffiche multi-target e ottima amplificazione dell'energy damage nelle fight prolungate.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/zoya-full-image.webp",
			overview: ["Carry", "Warrior", "AoE", "Energy"],
			faction: "Warrior",
			heroClass: "Carry",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Dagger",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/dagger.webp",
					description: "Throws a forest dagger at the target, dealing 622.5% ATK Energy DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Energy DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Forest Hunter",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/forest-hunter.webp",
					description: "Quickly tosses 3 special daggers, randomly targeting 3 enemies, dealing 3058.0% ATK DMG to each.",
					type: "Ultimate Skill",
					cooldown: "13.6s",
					damageType: "Energy DMG",
					additionalEffects: ["2 stars: Blade +1.", "6 stars: Deals 60% extra damage.", "10 stars: Extra damage increases to 120%; +1 blade."]
				},
				{
					name: "Mountain God Wrath",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/mountain-god-wrath.webp",
					description: "Clasps hands tightly and prays to the mountain god, summoning a whirlwind of green leaves that deals 525.0% ATK Energy DMG per second to enemies within range for 3s. During this time, enemies within the whirlwind take 20% extra Energy DMG.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Energy DMG",
					additionalEffects: ["3 stars: Deals 60% extra damage.", "7 stars: Extra damage increases to 130%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Lady of the Forest",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/lady-of-the-forest.webp",
					description: "In combat, increases 22.0% Crit Rate.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "bell",
			name: "Bell",
			role: "UR Support",
			summary: "Support ranger che buffa ATK, cura i compagni piu fragili e aumenta il valore complessivo dei team a danno fisico.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/bell-full-image.webp",
			overview: ["Support", "Ranger", "Heal", "ATK Buff"],
			faction: "Ranger",
			heroClass: "Support",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Musical Note",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/musical-note.webp",
					description: "Waves a bell to release musical notes, dealing 622.5% ATK Physical DMG to a single target.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Inspiration",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/inspiration.webp",
					description: "Inspires the 2 highest-ATK allies, increasing their ATK by 48.75% for 5s.",
					type: "Ultimate Skill",
					cooldown: "12.7s",
					damageType: "N/A",
					additionalEffects: ["2 stars: Effect increases by 5%.", "6 stars: Effect Duration +2s.", "10 stars: Target +1."]
				},
				{
					name: "Healing Sound",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/healing-sound.webp",
					description: "Heals the lowest-HP ally for 450.0% ATK.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "N/A",
					additionalEffects: ["3 stars: Restores 40% extra HP.", "7 stars: Extra HP recovery increases to 100%.", "10 stars: Extra HP recovery increases to 200%."]
				},
				{
					name: "Battle Anthem",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/battle-anthem.webp",
					description: "During battle, increases ATK of all allied Ranger Heroes by 16.5%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.2%.", "9 stars: Effect increases by 1.8%.", "10 stars: Effect increases by 3%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "harper",
			name: "Harper",
			role: "UR Support",
			summary: "Support warrior che alza l'ATK del team e protegge i bersagli piu vulnerabili con buff difensivi reattivi.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/harper-full-image.webp",
			overview: ["Support", "Warrior", "ATK Buff", "Defense"],
			faction: "Warrior",
			heroClass: "Support",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Bubble",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/bubble.webp",
					description: "Plays a flute to create bubbles, dealing 622.5% ATK Energy DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Energy DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "War Flute Sound",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/war-flute-sound.webp",
					description: "Harper plays a war flute to inspire allies, increasing all allied heroes' ATK by 21.045% for 5s.",
					type: "Ultimate Skill",
					cooldown: "12.7s",
					damageType: "Energy DMG",
					additionalEffects: ["2 stars: After being cast, increases Energy DMG dealt by allies by 4.5% for 7s.", "6 stars: ATK bonus increases by 4.5%.", "10 stars: ATK bonus duration +5s."]
				},
				{
					name: "Vitality Bubble",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/vitality-bubble.webp",
					description: "Harper creates a bubble, reducing the damage received by the lowest-HP ally by 18.0% for 4s.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Energy DMG",
					additionalEffects: ["3 stars: Effect increases by 1.6%.", "7 stars: Effect increases by 2.4%.", "10 stars: Target +1."]
				},
				{
					name: "Warrior's Anthem",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/warriors-anthem.webp",
					description: "In battle, increases ATK of all allied Warrior Heroes by 16.5%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.2%.", "9 stars: Effect increases by 1.8%.", "10 stars: Effect increases by 3%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "brian",
			name: "Brian",
			role: "UR Tank",
			summary: "Tank warlock molto solido che riflette danni, riduce il danno di squadra e puo reggere i fight piu lunghi.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/brian-full-image.webp",
			overview: ["Tank", "Warlock", "Reflect", "Sustain"],
			faction: "Warlock",
			heroClass: "Tank",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Sharp Claw",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/sharp-claw.webp",
					description: "Swings sharp claws, dealing 622.5% ATK Physical DMG to a single enemy.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Throat Bite",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/throat-bite.webp",
					description: "Charges up, then lunges forward and bites the target, dealing 1505.0% ATK Physical DMG, and reducing all damage taken by all allied heroes by 18.75% for 4s.",
					type: "Ultimate Skill",
					cooldown: "6.4s",
					damageType: "Physical DMG",
					additionalEffects: ["2 stars: Effect increases by 2%.", "6 stars: Effect increases by 3%.", "10 stars: Effect increases by 5%."]
				},
				{
					name: "Lunar Howl",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/lunar-howl.webp",
					description: "Howls to the sky, entering Berserk state: when taking damage, reflects 147.0% of that damage back to the attacker. This effect lasts for 3s.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Physical DMG",
					additionalEffects: ["3 stars: Effect increases by 8%.", "7 stars: Effect Duration +1s.", "10 stars: Effect increases by 20%."]
				},
				{
					name: "Wolf Bloodline",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/wolf-bloodline-1.webp",
					description: "In combat, reduces all damage taken by 22.0%.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "N/A",
					additionalEffects: ["4 stars: Effect increases by 1.6%.", "9 stars: Effect increases by 2.4%.", "10 stars: Effect increases by 4%."]
				},
				tenacitySkill()
			]
		},
		{
			slug: "louis",
			name: "Louis",
			role: "UR Tank",
			summary: "Tank ranger specializzato in riduzione dei danni, sopravvivenza estrema e copertura difensiva ad area per il team.",
			image: "https://lastasylumplague.com/wp-content/uploads/2026/03/louis-full-image.webp",
			overview: ["Tank", "Ranger", "Shield", "Undying"],
			faction: "Ranger",
			heroClass: "Tank",
			rarity: "UR",
			stats: createStats(),
			skills: [
				{
					name: "Shackles",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/shackles.webp",
					description: "Swings the iron chain, dealing 622.5% ATK Physical DMG to a single target.",
					type: "Auto Attack",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["1 star: Deals 40% Extra Damage.", "5 stars: Extra damage increases to 100%.", "10 stars: Extra damage increases to 200%."]
				},
				{
					name: "Cross Whip",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/cross-whip.webp",
					description: "Simultaneously swings 2 chains forward, dealing 1140.0% ATK damage to enemies within range, healing self for 150% ATK, and reducing all damage taken by 26.25% for 5s.",
					type: "Ultimate Skill",
					cooldown: "6.4s",
					damageType: "Physical DMG",
					additionalEffects: ["2 stars: Damage reduction additionally applies to 1 nearest ally.", "6 stars: Damage reduction applies to all allies.", "10 stars: Deals 60% extra damage."]
				},
				{
					name: "Force Link",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/force-link.webp",
					description: "Charges both hands, creating an energy field that reduces Energy DMG taken by allies within range by 27.75% for 4s.",
					type: "Active Skill",
					cooldown: "4.5s",
					damageType: "Physical DMG",
					additionalEffects: ["3 stars: Effect increases by 8%.", "7 stars: Effect increases by 12%.", "10 stars: Coverage area increases by 28.5%."]
				},
				{
					name: "Indomitable Spirit",
					image: "https://lastasylumplague.com/wp-content/uploads/2026/03/indomitable-spirit.webp",
					description: "In combat, reduces all damage taken by 26.25% and triggers an undying state upon taking fatal damage, retaining 1 HP for 2s. The state can only be triggered once.",
					type: "Passive Skill",
					cooldown: "N/A",
					damageType: "Physical DMG",
					additionalEffects: ["4 stars: Duration +1s.", "9 stars: Duration +1s.", "10 stars: Duration +1s."]
				},
				tenacitySkill()
			]
		}
	];

	var heroSummaryTranslations = {
		arthur: {
			en: "Core tank for early teams: opens with shields, holds the mid game well, and remains a reliable frontline as your roster grows.",
			es: "Tanque clave para los primeros equipos: abre con escudos, resiste bien el mid game y sigue siendo una frontline fiable cuando el roster crece.",
			ja: "序盤チームの中心タンク。シールドで戦闘を開始し、中盤も安定して耐え、ロスターが広がっても信頼できる前衛です。"
		},
		cynthia: {
			en: "High-mobility carry with bonus crit, AoE pressure, and strong performance against waves, resource farming, and open fights.",
			es: "Carry de alta movilidad con critico adicional, presion AoE y gran rendimiento contra oleadas, farmeo de recursos y combates abiertos.",
			ja: "高機動キャリー。追加クリティカル、AoE圧力、ウェーブ処理、資源周回、開けた戦闘で強力です。"
		},
		marlena: {
			en: "One of the strongest energy carries: AoE burst, attack self-buffs, and excellent output against bosses and burst PvP comps.",
			es: "Una de las carries de energia mas fuertes: burst AoE, auto-buffs de ataque y gran rendimiento contra jefes y composiciones PvP explosivas.",
			ja: "最強級のエネルギーキャリー。AoEバースト、攻撃自己バフ、ボス戦と瞬間火力PvP編成で優秀です。"
		},
		daskal: {
			en: "Dominant frontline tank with team shielding, early damage reduction, and steady sustain against aggressive comps.",
			es: "Tanque dominante de primera linea con escudo de equipo, reduccion de dano inicial y sustain constante contra composiciones agresivas.",
			ja: "チームシールド、開幕ダメージ軽減、安定した継戦力を持つ強力な前衛タンクです。"
		},
		shadow: {
			en: "Versatile frontline with high physical damage, area debuffs, defense reduction, and energy damage mitigation.",
			es: "Frontline versatil con alto dano fisico, debuffs de area, reduccion de defensa y mitigacion de dano energetico.",
			ja: "高い物理ダメージ、範囲デバフ、防御低下、エネルギーダメージ軽減を持つ万能前衛です。"
		},
		nicole: {
			en: "Warlock support focused on healing and team buffs, with strong synergy in teams built around burn and attack speed.",
			es: "Support warlock centrada en curas y buffs de equipo, con gran sinergia en equipos de quemadura y velocidad de ataque.",
			ja: "回復とチームバフに特化したウォーロックサポート。燃焼と攻撃速度中心のチームと相性が良いです。"
		},
		annie: {
			en: "Warlock carry built around burn and explosive energy damage, with strong pressure on high-ATK targets.",
			es: "Carry warlock basada en quemadura y dano energetico explosivo, con gran presion sobre objetivos de alto ATK.",
			ja: "燃焼と爆発的なエネルギーダメージを軸にしたウォーロックキャリー。高ATK対象に強い圧力をかけます。"
		},
		jester: {
			en: "Warlock carry focused on executing low-health targets, with strong single-target burst and crit synergy.",
			es: "Carry warlock orientado a ejecutar objetivos con poca vida, con gran burst single-target y sinergia critica.",
			ja: "低HP対象の処刑に向いたウォーロックキャリー。単体バーストとクリティカルシナジーが強力です。"
		},
		"red-lady": {
			en: "Ranger carry that targets high-ATK enemies with energy burst, stun, and incoming damage amplification.",
			es: "Carry ranger que apunta a enemigos de alto ATK con burst energetico, stun y amplificacion del dano recibido.",
			ja: "高ATKの敵を狙うレンジャーキャリー。エネルギーバースト、スタン、被ダメージ増加を扱います。"
		},
		billy: {
			en: "Warlock tank that protects carries with stun immunity, damage reduction, and defensive frontline utility.",
			es: "Tanque warlock que protege carries con inmunidad a stun, reduccion de dano y utilidad defensiva de frontline.",
			ja: "スタン免疫、ダメージ軽減、防衛ユーティリティでキャリーを守るウォーロックタンクです。"
		},
		zoya: {
			en: "Warrior carry with multi-target bursts and strong energy damage amplification in extended fights.",
			es: "Carry warrior con rafagas multi-target y fuerte amplificacion de dano energetico en peleas largas.",
			ja: "複数対象への連続攻撃と、長期戦でのエネルギーダメージ増幅が強いウォリアーキャリーです。"
		},
		bell: {
			en: "Ranger support that buffs ATK, heals fragile allies, and increases the value of physical damage teams.",
			es: "Support ranger que aumenta ATK, cura aliados fragiles y mejora el valor de equipos de dano fisico.",
			ja: "ATKバフ、脆い味方への回復、物理ダメージチームの価値を高めるレンジャーサポートです。"
		},
		harper: {
			en: "Warrior support that raises team ATK and protects vulnerable targets with reactive defensive buffs.",
			es: "Support warrior que sube el ATK del equipo y protege objetivos vulnerables con buffs defensivos reactivos.",
			ja: "チームATKを上げ、反応型防御バフで脆い対象を守るウォリアーサポートです。"
		},
		brian: {
			en: "Very sturdy warlock tank that reflects damage, reduces team damage taken, and can hold long fights.",
			es: "Tanque warlock muy solido que refleja dano, reduce el dano recibido por el equipo y aguanta peleas largas.",
			ja: "ダメージ反射、チーム被ダメージ軽減、長期戦への耐久力を持つ非常に堅いウォーロックタンクです。"
		},
		louis: {
			en: "Ranger tank specialized in damage reduction, extreme survival, and area defensive coverage for the team.",
			es: "Tanque ranger especializado en reduccion de dano, supervivencia extrema y cobertura defensiva de area para el equipo.",
			ja: "ダメージ軽減、極めて高い生存力、チームへの範囲防御カバーに特化したレンジャータンクです。"
		}
	};

	var heroSummaryTranslationsFrDe = {
		arthur: {
			fr: "Tank central pour les premieres equipes: ouvre avec des boucliers, tient bien le mid game et reste une frontline fiable quand le roster s'agrandit.",
			de: "Kern-Tank fuer fruehe Teams: startet mit Schilden, haelt das Mid Game gut und bleibt eine verlaessliche Frontline, wenn dein Roster waechst."
		},
		cynthia: {
			fr: "Carry tres mobile avec bonus critique, pression AoE et tres bon rendement contre les vagues, le farm de ressources et les combats ouverts.",
			de: "Mobiler Carry mit Bonus-Krit, AoE-Druck und starker Leistung gegen Wellen, Ressourcen-Farming und offene Kaempfe."
		},
		marlena: {
			fr: "L'un des meilleurs carries energie: burst AoE, buffs d'attaque personnels et excellent rendement contre les boss et les compos PvP burst.",
			de: "Einer der staerksten Energie-Carries: AoE-Burst, Angriffs-Self-Buffs und starke Leistung gegen Bosse und Burst-PvP-Comps."
		},
		daskal: {
			fr: "Tank frontline dominant avec bouclier d'equipe, reduction des degats initiaux et sustain stable contre les compos agressives.",
			de: "Dominanter Frontline-Tank mit Team-Schilden, frueher Schadensreduktion und stabilem Sustain gegen aggressive Comps."
		},
		shadow: {
			fr: "Frontline polyvalente avec gros degats physiques, debuffs de zone, reduction de defense et mitigation des degats energie.",
			de: "Vielseitige Frontline mit hohem physischen Schaden, Flaechen-Debuffs, Verteidigungsreduktion und Energy-Damage-Mitigation."
		},
		nicole: {
			fr: "Support warlock axe sur les soins et buffs d'equipe, avec une forte synergie dans les teams burn et vitesse d'attaque.",
			de: "Warlock-Support mit Fokus auf Heilung und Team-Buffs, stark in Teams rund um Burn und Angriffsgeschwindigkeit."
		},
		annie: {
			fr: "Carry warlock basee sur le burn et les degats energie explosifs, avec une forte pression sur les cibles a haut ATK.",
			de: "Warlock-Carry rund um Burn und explosiven Energieschaden, mit starkem Druck auf Ziele mit hohem ATK."
		},
		jester: {
			fr: "Carry warlock oriente execution des cibles a faible vie, avec gros burst mono-cible et bonne synergie critique.",
			de: "Warlock-Carry fuer das Ausfuehren von Low-HP-Zielen, mit starkem Single-Target-Burst und Crit-Synergie."
		},
		"red-lady": {
			fr: "Carry ranger qui cible les ennemis a haut ATK avec burst energie, stun et amplification des degats recus.",
			de: "Ranger-Carry, der Gegner mit hohem ATK durch Energie-Burst, Stun und erhoehten eingehenden Schaden fokussiert."
		},
		billy: {
			fr: "Tank warlock qui protege les carries avec immunite aux stuns, reduction des degats et utilite defensive en frontline.",
			de: "Warlock-Tank, der Carries mit Stun-Immunitaet, Schadensreduktion und defensiver Frontline-Utility schuetzt."
		},
		zoya: {
			fr: "Carry warrior avec rafales multi-cibles et forte amplification des degats energie dans les combats longs.",
			de: "Warrior-Carry mit Multi-Target-Salven und starker Energy-Damage-Verstaerkung in laengeren Kaempfen."
		},
		bell: {
			fr: "Support ranger qui buffe l'ATK, soigne les allies fragiles et augmente la valeur des equipes a degats physiques.",
			de: "Ranger-Support, der ATK bufft, fragile Verbuendete heilt und physische Damage-Teams staerker macht."
		},
		harper: {
			fr: "Support warrior qui augmente l'ATK de l'equipe et protege les cibles vulnerables avec des buffs defensifs reactifs.",
			de: "Warrior-Support, der Team-ATK erhoeht und verwundbare Ziele mit reaktiven Defensiv-Buffs schuetzt."
		},
		brian: {
			fr: "Tank warlock tres solide qui renvoie les degats, reduit les degats subis par l'equipe et tient les combats longs.",
			de: "Sehr robuster Warlock-Tank, der Schaden reflektiert, Teamschaden reduziert und lange Kaempfe halten kann."
		},
		louis: {
			fr: "Tank ranger specialise en reduction des degats, survie extreme et couverture defensive de zone pour l'equipe.",
			de: "Ranger-Tank spezialisiert auf Schadensreduktion, extreme Ueberlebensfaehigkeit und defensive Flaechenabdeckung fuers Team."
		}
	};

	Object.keys(heroSummaryTranslationsFrDe).forEach(function (slug) {
		heroSummaryTranslations[slug].fr = heroSummaryTranslationsFrDe[slug].fr;
		heroSummaryTranslations[slug].de = heroSummaryTranslationsFrDe[slug].de;
	});

	window.LAST_ASYLUM_HEROES.forEach(function (hero) {
		var translations = heroSummaryTranslations[hero.slug];

		if (!translations) {
			return;
		}

		hero.i18n = {
			en: { summary: translations.en },
			it: { summary: hero.summary },
			es: { summary: translations.es },
			fr: { summary: translations.fr },
			de: { summary: translations.de },
			ja: { summary: translations.ja }
		};
	});
})();
