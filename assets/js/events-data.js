(function () {
	window.LAST_ASYLUM_EVENTS = [
		{
			slug: "alliance-duel",
			name: "Alliance Duel",
			tag: "Alliance weekly PvP",
			image: "images/alliance.png",
			detailImages: [
				"images/alliance.png"
			],
			summary: "Duello settimanale tra alleanze: sei giorni di fasi tematiche dove ogni azione giusta al momento giusto porta punti all'alleanza.",
			extraSummary: "Alliance Duel e l'evento cardine per coordinare crescita, risorse e combattimento. Le alleanze migliori preparano speed-up, shard, upgrade e missioni prima dell'inizio, poi li usano nella fase corretta per massimizzare punti giornalieri e totale settimanale.",
			details: [
				{
					title: "Meccaniche",
					items: [   
						"Durata di 6 giorni, da lunedi a sabato.",
						"Fasi tematiche: Raven, Costruzione, Ricerca, Eroi, Preparazione e Raid.",
						"Il punteggio cresce completando azioni coerenti con la fase del giorno."
					]
				},
				{
					title: "Requisiti",
					items: [
						"Partecipano le alleanze in classifica alta, indicate nella guida come top 32 prima dell'evento.",
						"Serve coordinazione interna per evitare di usare risorse nel giorno sbagliato."
					]
				},
				{
					title: "Premi",
					items: [
						"Premi giornalieri e settimanali per classifica personale e risultato dell'alleanza.",
						"Risorse, speed-up, shard e ricompense legate alla vittoria o alla posizione finale."
					]
				},
				{
					title: "Strategia",
					items: [
						"Accumulare speed-up, shard, risorse e Falcon Quest nelle settimane precedenti.",
						"Comunicare in alleanza quale fase e attiva prima di fare upgrade o potenziamenti importanti."
					]
				}
			],
			scoring: [
				{
					title: "Day 1 - Gather/Raven",
					actions: [
						{ label: "Stamina", amount: 1, points: 150 },
						{ label: "Raven Fruit", amount: 1, points: 3 },
						{ label: "Raven Essence", amount: 1, points: 2500 },
						{ label: "Antitoxin", amount: 660, points: 1 },
						{ label: "Pack Diamond", amount: 1, points: 30 },
						{ label: "Grain", amount: 100, points: 5 },
						{ label: "Timber", amount: 100, points: 5 },
						{ label: "Herbs", amount: 60, points: 5 },
						{ label: "Falcon Quest", amount: 1, points: 10000 }
					]
				},
				{
					title: "Day 2 - Build",
					actions: [
						{ label: "UR Trade Caravan", amount: 1, points: 1000000 },
						{ label: "Recruit Survivor", amount: 1, points: 1500 },
						{ label: "Pack Diamond", amount: 1, points: 30 },
						{ label: "Construction Spd 1m", amount: 1, points: 50 },
						{ label: "Building Might", amount: 1, points: 10 },
						{ label: "UR Covert Op", amount: 1, points: 75000 }
					]
				},
				{
					title: "Day 3 - Research",
					actions: [
						{ label: "Pack Diamond", amount: 1, points: 30 },
						{ label: "Research Spd 1m", amount: 1, points: 50 },
						{ label: "Study Scroll", amount: 1, points: 300 },
						{ label: "Falcon Quest", amount: 1, points: 10000 },
						{ label: "Tech Might", amount: 1, points: 10 },
						{ label: "Lv. 1 Raven Gear Chest", amount: 1, points: 1100 },
						{ label: "Lv. 2 Raven Gear Chest", amount: 1, points: 3300 },
						{ label: "Lv. 3 Raven Gear Chest", amount: 1, points: 10000 },
						{ label: "Lv. 4 Raven Gear Chest", amount: 1, points: 30000 },
						{ label: "Lv. 5 Raven Gear Chest", amount: 1, points: 90000 },
						{ label: "Lv. 6 Raven Gear Chest", amount: 1, points: 270000 },
						{ label: "Lv. 7 Raven Gear Chest", amount: 1, points: 810000 }
					]
				},
				{
					title: "Day 4 - Heroes",
					actions: [
						{ label: "Pack Diamond", amount: 1, points: 30 },
						{ label: "Antitoxin", amount: 660, points: 1 },
						{ label: "Recruit Heroes", amount: 1, points: 1500 },
						{ label: "UR Hero Shard", amount: 1, points: 10000 },
						{ label: "SSR Hero Shard", amount: 1, points: 3500 },
						{ label: "SR Hero Shard", amount: 1, points: 1000 },
						{ label: "Skill Book", amount: 1, points: 10 }
					]
				},
				{
					title: "Day 5 - Train Troops",
					actions: [
						{ label: "Pack Diamond", amount: 1, points: 30 },
						{ label: "Falcon Quest", amount: 1, points: 10000 },
						{ label: "Building Might", amount: 1, points: 10 },
						{ label: "Construction Spd 1m", amount: 1, points: 50 },
						{ label: "Tech Might", amount: 1, points: 10 },
						{ label: "Research Spd 1m", amount: 1, points: 50 },
						{ label: "Training Spd 1m", amount: 1, points: 50 },
						{ label: "LvL1 Soldier", amount: 1, points: 20 },
						{ label: "LvL2 Soldier", amount: 1, points: 30 },
						{ label: "LvL3 Soldier", amount: 1, points: 40 },
						{ label: "LvL4 Soldier", amount: 1, points: 50 },
						{ label: "LvL5 Soldier", amount: 1, points: 60 },
						{ label: "LvL6 Soldier", amount: 1, points: 70 },
						{ label: "LvL7 Soldier", amount: 1, points: 80 },
						{ label: "LvL8 Soldier", amount: 1, points: 90 },
						{ label: "LvL9 Soldier", amount: 1, points: 100 },
						{ label: "LvL10 Soldier", amount: 1, points: 110 }
					]
				},
				{
					title: "Day 6 - Raid Day",
					actions: [
						{ label: "Pack Diamond", amount: 1, points: 30 },
						{ label: "Construction Spd 1m", amount: 1, points: 50 },
						{ label: "UR Trade Caravan", amount: 1, points: 100000 },
						{ label: "UR Covert Op", amount: 1, points: 75000 },
						{ label: "Research Spd 1m", amount: 1, points: 50 },
						{ label: "Training Spd 1m", amount: 1, points: 50 },
						{ label: "Healing Spd 1m", amount: 1, points: 50 }
					]
				}
			],
			overview: ["6 giorni", "Top 32", "Fasi giornaliere"],
			source: "Riepilogo Esecutivo.pdf + last-asylum-unofficial.com/EventView"
		},
		{
			slug: "enhance-raven",
			name: "Enhance Raven",
			tag: "Raven Event",
			image: "images/raven.png",
			detailImages: [
				"images/raven_event.jpeg",
				"images/raven.png"
			],
			summary: "Evento a punteggio dedicato al Raven: consuma Raven Fruits e Stamina per raccogliere punti, milestone e ranking.",
			extraSummary: "Enhance Raven premia chi concentra potenziamenti Raven e consumo stamina durante la finestra evento. ",
			details: [
				{
					title: "Meccaniche",
					items: [
						"Evento a tempo con classifica personale e punti totali.",
						"I reward sono divisi in fasi: Phase 1 a 1.500 punti, Phase 2 a 10.000, Phase 3 a 20.000 e Phase 4 a 30.000."
					]
				},
				{
					title: "Come fare punti",
					items: [
						"Consuma Raven Fruits: ogni 10 Raven Fruits danno punti.",
						"Consuma Stamina per ottenere molti punti rapidamente.",
						"I pack che contengono diamanti danno punti extra."
					]
				},
				{
					title: "Strategia",
					items: [
						"Conserva Raven Fruits e Stamina prima dell'evento.",
						"Usa Stamina quando sei vicino a una milestone o vuoi scalare il ranking.",
						"Se l'evento coincide con Alliance Duel Day 1, sincronizza Raven Fruits e Stamina per fare punti in entrambi."
					]
				}
			],
			scoring: [
				{
					title: "How to Earn Points",
					actions: [
						{ label: "Raven Fruits", amount: 10, points: 1 },
						{ label: "Stamina", amount: 1, points: 100 },
						{ label: "Pack Diamond", amount: 1, points: 30 }
					]
				}
			],
			overview: ["Raven", "Stamina", "Milestone"],
			source: "raven_event.jpeg + last-asylum-unofficial.com/EventView"
		},
		{
			slug: "train-soldiers",
			name: "Train Soldiers",
			tag: "Training Event",
			image: "images/train_soldier.png",
			detailImages: [
				"images/train_soldier_event.jpeg",
				"images/train_soldier.png"
			],
			summary: "Evento a punteggio dedicato all'addestramento truppe: usa boost training, allena soldati e raccogli punti per milestone e ranking.",
			extraSummary: "Train Soldiers premia la crescita militare rapida. Dallo screenshot si vede un evento a tempo con range giocatore, classifica, total points e reward per fasi. Le azioni principali sono usare boost di addestramento, trainare soldati e acquistare pack con diamanti.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"Evento a tempo con classifica personale e punti totali.",
						"Phase 1 a 12.000 punti, Phase 2 a 24.000, Phase 3 a 42.000 e Phase 4 a 60.000..."
					]
				},
				{
					title: "Come fare punti",
					items: [
						"Usa Training Boost da 1 minuto.",
						"Allena soldati: piu alto e il livello della truppa, piu punti ottieni.",
						"I pack che contengono diamanti danno punti extra."
					]
				},
				{
					title: "Strategia",
					items: [
						"Prepara code di training e speed-up prima dell'evento.",
						"Se sei vicino a una fase premio, usa boost piccoli per chiudere la milestone senza sprecare risorse.",
						"Valuta il ranking solo quando hai abbastanza speed-up per superare i giocatori vicini."
					]
				}
			],
			scoring: [
				{
					title: "How to Earn Points",
					actions: [
						{ label: "Training Boost 1m", amount: 1, points: 10 },
						{ label: "LvL1 Soldier", amount: 1, points: 5 },
						{ label: "LvL2 Soldier", amount: 1, points: 6 },
						{ label: "LvL3 Soldier", amount: 1, points: 7 },
						{ label: "LvL4 Soldier", amount: 1, points: 13 },
						{ label: "LvL5 Soldier", amount: 1, points: 15 },
						{ label: "LvL6 Soldier", amount: 1, points: 19 },
						{ label: "LvL7 Soldier", amount: 1, points: 22 },
						{ label: "LvL8 Soldier", amount: 1, points: 25 },
						{ label: "LvL9 Soldier", amount: 1, points: 28 },
						{ label: "LvL10 Soldier", amount: 1, points: 31 },
						{ label: "Pack Diamond", amount: 1, points: 30 }
					]
				}
			],
			overview: ["Training", "Ranking", "Milestone"],
			source: "train_soldier_event.jpeg + last-asylum-unofficial.com/EventView"
		},
		{
			slug: "research-technology",
			name: "Research Technology",
			tag: "Research Event",
			image: "images/search.png",
			detailImages: [
				"images/RESEARCH.jpeg"
			],
			summary: "Evento a punteggio per la ricerca: usa speed-up ricerca, aumenta Tech Might e raccogli punti milestone e ranking.",
			extraSummary: "Research Technology premia chi concentra ricerca e speed-up nel momento giusto.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"Evento a tempo con classifica personale e punti totali.",
						]
				},
				{
					title: "Come fare punti",
					items: [
						"Usa Research Speedup da 1 minuto.",
						"Aumenta Tech Might completando ricerche.",
						"I pack che contengono diamanti danno punti extra."
					]
				},
				{
					title: "Strategia",
					items: [
						"Prepara ricerche lunghe quasi finite e completa durante l'evento.",
						"Usa speed-up ricerca solo quando servono per chiudere milestone o superare un rank vicino.",
						"Conserva Study Scroll e risorse ricerca per i giorni evento o per Alliance Duel Day 3."
					]
				}
			],
			scoring: [
				{
					title: "How to Earn Points",
					actions: [
						{ label: "Research Speedup 1m", amount: 1, points: 10 },
						{ label: "Tech Might", amount: 1, points: 1 },
						{ label: "Pack Diamond", amount: 1, points: 30 }
					]
				}
			],
			overview: ["Research", "Tech Might", "Milestone"],
			source: "RESEARCH"
		},
		{
			slug: "hunt-battle",
			name: "Hunt Battle",
			tag: "Alliance PvE",
			image: "images/huntbattle.png",
			detailImages: [
				"images/huntbattle.png",
			],
			summary: "Evento PvE di alleanza a ondate: i membri devono eliminare nemici Blight in territorio alleanza e mantenere ritmo costante di marce.",
			extraSummary: "Hunt Battle premia coordinazione e presenza. Dopo una breve preparazione, l'alleanza affronta 15 ondate crescenti: piu nemici vengono abbattuti, migliori diventano punteggio e ricompense.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"5 minuti di preparazione prima dell'inizio.",
						"15 ondate di nemici Blight con difficolta crescente.",
						"Marce fisse da 15 secondi per tutti i partecipanti."
					]
				},
				{
					title: "Requisiti",
					items: [
						"Avvio da parte di R5 o R4.",
						"La guida indica almeno 20 membri attivi per partecipare in modo efficace.",
						"La difficolta scelta influenza HP dei nemici e valore delle ricompense."
					]
				},
				{
					title: "Premi",
					items: [
						"Ricompense scalari in base alle ondate concluse e al punteggio.",
						"Speed-up, materiali, frammenti e premi migliori sulle difficolta piu alte."
					]
				},
				{
					title: "Strategia",
					items: [
						"Concentrare tutti un bersaglio per volta invece di disperdere le marce.",
						"Usare buff alleanza prima delle ondate piu pesanti, soprattutto dopo meta evento.",
						"Scegliere una difficolta sostenibile per non perdere ondate troppo presto."
					]
				}
			],
			overview: ["15 ondate", "20+ membri", "R5/R4"],
			source: "Riepilogo Esecutivo"
		},
		{
			slug: "crystal-cluster-valley",
			name: "Crystal Cluster Valley",
			tag: "Individual PvP",
			image: "images/crystal.png",
			detailImages: [
				"images/crystal.png"
			],
			summary: "Evento individuale da 30 minuti: raccogli cristalli, elimina mob e usa bene i teleport per salire in classifica.",
			extraSummary: "Crystal Cluster Valley e una gara rapida di raccolta punti. La mappa contiene cluster di cristalli di vari livelli e nemici che danno punti; negli ultimi minuti il centro diventa piu conteso.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"Durata di 30 minuti.",
						"Cluster di cristalli con livelli 1-4 e mob da eliminare per punti.",
						"Il centro della mappa apre una fase piu competitiva negli ultimi 7 minuti."
					]
				},
				{
					title: "Requisiti",
					items: [
						"Evento individuale, disponibile piu volte al giorno sui server piu maturi secondo la guida.",
						"Si parte con la squadra e il massimo numero di truppe schierabili."
					]
				},
				{
					title: "Premi",
					items: [
						"Premi basati sulla classifica finale dei punti cristallo.",
						"Risorse, speed-up, frammenti e materiali piu interessanti per le posizioni alte."
					]
				},
				{
					title: "Strategia",
					items: [
						"Raccogliere costantemente invece di aspettare solo cluster perfetti.",
						"Usare il teleport gratuito ogni 6 minuti per spostarsi su zone ricche ma meno affollate.",
						"Puntare ai cluster alti solo se il tempo perso nello spostamento non supera il guadagno."
					]
				}
			],
			overview: ["30 minuti", "Teleport", "Ranking"],
			source: "Riepilogo Esecutivo.pdf"
		},
		/*
		{
			slug: "easter-2026",
			name: "Easter Event 2026",
			tag: "Seasonal Event",
			image: "images/card1.jpg",
			detailImages: [
				"images/card1.jpg",
				"images/bonus1.png",
				"images/bonus2.png"
			],
			summary: "Evento stagionale di Pasqua con missioni giornaliere, raccolta token, mercato evento e premi cosmetici o permanenti.",
			extraSummary: "La guida colloca Easter Event 2026 dal 3 al 9 aprile 2026. Il focus e completare missioni festive, raccogliere token uovo e convertirli nel mercato evento per ricompense rare.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"Missioni Easter Celebration e caccia alle uova.",
						"Token evento spendibili nell'Art Market.",
						"Login giornaliero e obiettivi a tempo limitato."
					]
				},
				{
					title: "Premi",
					items: [
						"UR Omni Shard, essenza Raven e materiali rari.",
						"Decorazioni stagionali e skin territorio Greenery indicate nella guida."
					]
				},
				{
					title: "Strategia",
					items: [
						"Preparare magazzini e produzione di grano, legno ed erbe prima dell'evento.",
						"Tenere ospedale e mura pronti se le missioni includono difese contro ondate."
					]
				}
			],
			overview: ["3-9 apr 2026", "Token", "Market"],
			source: "Riepilogo Esecutivo.pdf"
		},
		{
			slug: "fantasy-realm",
			name: "Fantasy Realm Event",
			tag: "Limited Event",
			image: "images/hero_card1.png",
			detailImages: [
				"images/hero_card1.png",
				"images/hero.png",
				"images/raven.png"
			],
			summary: "Evento limitato di 7 giorni con Toy Keys, lucky box, Teacup Market e progressione cooperativa server-wide.",
			extraSummary: "Fantasy Realm combina ricompense personali e obiettivi collettivi. Le Toy Keys aprono box evento, le teacup alimentano lo shop speciale e i cupcake contribuiscono alla progressione condivisa del server.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"Wondrous Toy Box con Toy Keys gratuite giornaliere e acquistabili.",
						"Teacup Lucky Boxes e Teacup Market per scambiare valuta evento.",
						"Sweetheart Banquet cooperativa con milestone server-wide."
					]
				},
				{
					title: "Premi",
					items: [
						"Skin santuario Rabbit Tea Party con bonus permanente indicato come +5% attacco/difesa.",
						"Oggetti UR, frammenti eroe, titoli e premi classifica.",
						"Bonus speciali citati dalla guida, come Dream Hour con HP aggiuntivi."
					]
				},
				{
					title: "Strategia",
					items: [
						"Usare le chiavi gratuite ogni giorno prima di valutare bundle o acquisti.",
						"Controllare il Teacup Market prima di spendere valuta su premi minori.",
						"Contribuire ai cupcake se il server e vicino a una milestone collettiva."
					]
				}
			],
			overview: ["7 giorni", "Toy Keys", "Server-wide"],
			source: "Riepilogo Esecutivo.pdf"
		},
		{
			slug: "survival-battle",
			name: "Survival Battle",
			tag: "PvE Special",
			image: "images/raven.png",
			detailImages: [
				"images/raven.png",
				"images/tank.png",
				"images/warrior.png"
			],
			summary: "Evento speciale collegato a Raven o Eroi: la guida lo indica come attivita PvE con dettagli ancora parziali.",
			extraSummary: "Survival Battle viene citato come evento sporadico o parallelo al Duello di Alleanza. Le informazioni disponibili sono incomplete, quindi la scheda lo segnala come contenuto da aggiornare quando ci saranno fonti piu precise.",
			details: [
				{
					title: "Meccaniche note",
					items: [
						"Completamento di battaglie o azioni specifiche con Raven o Eroi.",
						"Possibile sovrapposizione con fasi del Duello di Alleanza.",
						"Dettagli ufficiali non completi nella guida analizzata."
					]
				},
				{
					title: "Premi",
					items: [
						"Punti extra o ricompense evento quando attivo in parallelo al Duello.",
						"Premi specifici non separati con certezza dalle ricompense Alliance Duel."
					]
				}
			],
			overview: ["Parziale", "Raven/Eroi", "PvE"],
			source: "Riepilogo Esecutivo.pdf"
		},*/
		
		{
			slug: "canyon-conquest",
			name: "Canyon Conquest",
			tag: "Alliance PvP",
			image: "images/canyonconquest.png",
			detailImages: [
				"images/canyon_ss.jpeg",
			],
			summary: "Evento Alliance vs Alliance a tre corsie: la vittoria dipende dalla distribuzione del might e dal controllo di almeno due lane su tre.",
			extraSummary: "Canyon Conquest premia la pianificazione prima della battaglia. Ogni alleanza distribuisce i membri su Left, Mid e Right Lane: partecipano al fight i top 15 per might di ogni corsia, quindi non basta iscrivere tanti player, bisogna concentrare bene il potere.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"L'evento passa da Registration Phase, Matching Phase, Battle Phase e Settlement Phase.",
						"Le corsie sono Left Lane, Mid Lane e Right Lane.",
						"In ogni lane combattono i player nella top 15 per Might; chi si registra ma non entra in battaglia riceve comunque reward."
					]
				},
				{
					title: "Strategia 2 corsie su 3",
					items: [
						"Se l'alleanza e piu forte, non distribuire il potere in modo troppo uniforme: punta a vincere con sicurezza 2 corsie su 3.",
						"Concentra i player migliori su due lane chiave e lascia la terza solo coperta, senza sprecare troppo might.",
						"Prima del lock controlla View Deployment: se una corsia e gia molto forte, sposta potere sulla seconda corsia da vincere."
					]
				},
				{
					title: "Consigli pratici",
					items: [
						"Usa Edit Troop prima della fine della preparation phase.",
						"Bilancia le corsie in base al might reale dei top 15, non al numero totale di iscritti.",
						"Dopo il match controlla Match Record per capire se hai perso per distribuzione sbagliata o per differenza di potere."
					]
				}
			],
			overview: ["3 Lane", "Top 15 Might", "Vinci 2/3"],
			source: "canyon_ss.jpeg + strategia alliance"
		},
		{
			slug: "cheese-conquest",
			name: "Cheese Trap",
			tag: "Alliance Boss",
			image: "images/cheese.png",
			detailImages: [
				"images/cheese_trap.png"
			],
			summary: "Evento boss cooperativo di alleanza: i membri devono coordinarsi per rallyare il boss Cheese Trap e massimizzare reward e danno.",
			extraSummary: "Cheese Trap e un alliance boss event. Funziona meglio quando l'alleanza lo apre in un orario concordato, con molti membri online e rally guidati dai player piu forti. I membri piu deboli dovrebbero riempire i rally migliori invece di disperdere tentativi.",
			details: [
				{
					title: "Meccaniche",
					items: [
						"Evento cooperativo di alleanza basato su rally contro un boss.",
						"Il sito unofficial lo descrive come: rally the giant rat in the cheese trap with your allies.",
						"Salire di livello Cheese Trap sblocca reward migliori nel tempo."
					]
				},
				{
					title: "Strategia alleanza",
					items: [
						"Aprire o attivare l'evento quando molti membri sono online, non in orari casuali.",
						"Coordinare l'orario in chat alleanza prima dell'attivazione.",
						"Usare i player piu forti come leader dei rally."
					]
				},
				{
					title: "Gestione rally",
					items: [
						"I player piu deboli dovrebbero joinare i rally dei forti invece di aprire rally separati.",
						"Se ci sono tentativi o tempo limitato, evitare rally dispersi: meglio pochi rally forti e pieni.",
						"Trattare l'upgrade del Cheese Trap come obiettivo progressivo dell'alleanza."
					]
				}
			],
			overview: ["Alliance Boss", "Rally", "Reward Level"],
			source: "event_cheeseTrap_post.png + last-asylum-unofficial.com"
		},
	];

	var eventTranslations = {
		"alliance-duel": {
			en: {
				tag: "Alliance weekly PvP",
				summary: "Weekly alliance duel: six themed days where using the right actions at the right time scores points for the alliance.",
				extraSummary: "Alliance Duel is the main event for coordinating growth, resources, and combat. Strong alliances save speed-ups, shards, upgrades, and Falcon Quests before the event, then spend them during the correct phase to maximize daily and weekly points.",
				details: [
					{ title: "Mechanics", items: ["Runs for 6 days, Monday to Saturday.", "Daily phases include Raven, Construction, Research, Heroes, Preparation, and Raid.", "Points come from completing actions that match the current daily phase."] },
					{ title: "Requirements", items: ["The guide indicates participation for high-ranking alliances, such as the top 32 before the event.", "Internal coordination matters so members do not spend resources on the wrong day."] },
					{ title: "Rewards", items: ["Daily and weekly rewards for personal ranking and alliance result.", "Resources, speed-ups, shards, and rewards tied to victory or final placement."] },
					{ title: "Strategy", items: ["Save speed-ups, shards, resources, and Falcon Quests in the weeks before the event.", "Tell the alliance which phase is active before members start major upgrades or power-ups."] }
				],
				scoringTitles: ["Day 1 - Gather/Raven", "Day 2 - Build", "Day 3 - Research", "Day 4 - Heroes", "Day 5 - Train Troops", "Day 6 - Raid Day"],
				overview: ["6 days", "Top 32", "Daily phases"]
			},
			es: {
				tag: "PvP semanal de alianza",
				summary: "Duelo semanal entre alianzas: seis dias tematicos donde usar la accion correcta en el momento correcto suma puntos para la alianza.",
				extraSummary: "Alliance Duel es el evento clave para coordinar crecimiento, recursos y combate. Las alianzas fuertes guardan aceleradores, fragmentos, mejoras y Falcon Quests antes del evento, y los usan en la fase correcta.",
				details: [
					{ title: "Mecanicas", items: ["Dura 6 dias, de lunes a sabado.", "Las fases incluyen Raven, construccion, investigacion, heroes, preparacion y raid.", "Los puntos llegan al completar acciones acordes con la fase del dia."] },
					{ title: "Requisitos", items: ["La guia indica participacion para alianzas altas, como top 32 antes del evento.", "Hace falta coordinacion para no gastar recursos en el dia equivocado."] },
					{ title: "Premios", items: ["Premios diarios y semanales por ranking personal y resultado de alianza.", "Recursos, aceleradores, fragmentos y recompensas segun victoria o posicion final."] },
					{ title: "Estrategia", items: ["Guardar aceleradores, fragmentos, recursos y Falcon Quests antes del evento.", "Avisar a la alianza que fase esta activa antes de hacer mejoras importantes."] }
				],
				scoringTitles: ["Dia 1 - Recoleccion/Raven", "Dia 2 - Construccion", "Dia 3 - Investigacion", "Dia 4 - Heroes", "Dia 5 - Entrenar tropas", "Dia 6 - Raid"],
				overview: ["6 dias", "Top 32", "Fases diarias"]
			},
			fr: {
				tag: "PvP hebdo alliance",
				summary: "Duel hebdomadaire entre alliances: six jours thematiques ou les bonnes actions au bon moment donnent des points a l'alliance.",
				extraSummary: "Alliance Duel est l'evenement central pour coordonner croissance, ressources et combat. Les alliances fortes gardent speed-ups, fragments, ameliorations et Falcon Quests, puis les depensent dans la bonne phase.",
				details: [
					{ title: "Mecaniques", items: ["Dure 6 jours, du lundi au samedi.", "Phases: Raven, construction, recherche, heros, preparation et raid.", "Les points viennent des actions correspondant a la phase du jour."] },
					{ title: "Conditions", items: ["La guide indique les alliances haut classees, comme le top 32 avant l'evenement.", "La coordination evite de depenser les ressources au mauvais moment."] },
					{ title: "Recompenses", items: ["Recompenses quotidiennes et hebdomadaires selon classement personnel et resultat d'alliance.", "Ressources, speed-ups, fragments et recompenses liees a la victoire ou au classement final."] },
					{ title: "Strategie", items: ["Stocker speed-ups, fragments, ressources et Falcon Quests avant l'evenement.", "Annoncer la phase active avant les grosses ameliorations."] }
				],
				scoringTitles: ["Jour 1 - Recolte/Raven", "Jour 2 - Construction", "Jour 3 - Recherche", "Jour 4 - Heros", "Jour 5 - Entrainement troupes", "Jour 6 - Raid"],
				overview: ["6 jours", "Top 32", "Phases quotidiennes"]
			},
			de: {
				tag: "Woechentliches Allianz-PvP",
				summary: "Woechentliches Allianzduell: sechs Thementage, bei denen passende Aktionen zur richtigen Zeit Punkte fuer die Allianz bringen.",
				extraSummary: "Alliance Duel ist das Hauptevent fuer koordiniertes Wachstum, Ressourcen und Kampf. Starke Allianzen sparen Speed-ups, Splitter, Upgrades und Falcon Quests und nutzen sie in der passenden Phase.",
				details: [
					{ title: "Mechanik", items: ["Laeuft 6 Tage, Montag bis Samstag.", "Phasen: Raven, Bau, Forschung, Helden, Vorbereitung und Raid.", "Punkte entstehen durch Aktionen, die zur Tagesphase passen."] },
					{ title: "Voraussetzungen", items: ["Der Guide nennt hoch platzierte Allianzen, etwa Top 32 vor dem Event.", "Interne Koordination verhindert Ressourcenverbrauch am falschen Tag."] },
					{ title: "Belohnungen", items: ["Taegliche und woechentliche Belohnungen nach Einzelrang und Allianzergebnis.", "Ressourcen, Speed-ups, Splitter und Belohnungen je nach Sieg oder Endplatzierung."] },
					{ title: "Strategie", items: ["Speed-ups, Splitter, Ressourcen und Falcon Quests vor dem Event sparen.", "Der Allianz die aktive Phase melden, bevor grosse Upgrades starten."] }
				],
				scoringTitles: ["Tag 1 - Sammeln/Raven", "Tag 2 - Bau", "Tag 3 - Forschung", "Tag 4 - Helden", "Tag 5 - Truppen trainieren", "Tag 6 - Raid"],
				overview: ["6 Tage", "Top 32", "Tagesphasen"]
			},
			ja: {
				tag: "同盟週間PvP",
				summary: "同盟同士の週間イベント。6日間のテーマに合わせて正しい行動を行うと同盟ポイントを稼げます。",
				extraSummary: "Alliance Duel は成長、資源、戦闘を同盟で合わせる重要イベントです。強い同盟は加速、欠片、強化、Falcon Quest を温存し、正しいフェーズで使います。",
				details: [
					{ title: "仕組み", items: ["月曜から土曜までの6日間です。", "Raven、建築、研究、英雄、準備、Raid の日があります。", "その日のフェーズに合う行動でポイントを得ます。"] },
					{ title: "条件", items: ["ガイドではイベント前の上位同盟、例としてTop 32が対象とされています。", "間違った日に資源を使わないため、同盟内の連携が重要です。"] },
					{ title: "報酬", items: ["個人ランキングと同盟結果に応じた日次、週次報酬があります。", "資源、加速、欠片、勝利や順位に応じた報酬があります。"] },
					{ title: "戦略", items: ["イベント前に加速、欠片、資源、Falcon Quest を貯めます。", "大型強化の前に、現在のフェーズを同盟に共有します。"] }
				],
				scoringTitles: ["1日目 - 採集/Raven", "2日目 - 建築", "3日目 - 研究", "4日目 - 英雄", "5日目 - 兵士訓練", "6日目 - Raid"],
				overview: ["6日間", "Top 32", "日別フェーズ"]
			}
		},
		"enhance-raven": {
			en: {
				tag: "Raven Event",
				summary: "Point event focused on Raven growth: spend Raven Fruits and Stamina to collect milestone and ranking points.",
				extraSummary: "Enhance Raven rewards players who concentrate Raven upgrades and Stamina use during the event window. ",
				details: [
					{ title: "Mechanics", items: ["Timed event with personal ranking and total points.",  "Rewards are split into phases: Phase 1 at 1,500 points, Phase 2 at 10,000, Phase 3 at 20,000, and Phase 4 at 30,000."] },
					{ title: "How to score", items: ["Consume Raven Fruits: every 10 Raven Fruits grant points.", "Spend Stamina for fast points.", "Packs containing diamonds grant extra points."] },
					{ title: "Strategy", items: ["Save Raven Fruits and Stamina before the event.", "Use Stamina when close to a milestone or when pushing ranking.", "If it overlaps Alliance Duel Day 1, sync Raven Fruits and Stamina to score in both events."] }
				],
				scoringTitles: ["How to earn points"],
				overview: ["Raven", "Stamina", "Milestone"]
			},
			es: {
				tag: "Evento Raven",
				summary: "Evento de puntos centrado en Raven: consume Raven Fruits y Stamina para conseguir hitos y ranking.",
				extraSummary: "Enhance Raven premia concentrar mejoras de Raven y consumo de Stamina durante la ventana del evento.",
				details: [
					{ title: "Mecanicas", items: ["Evento temporizado con ranking personal y puntos totales.", "Las recompensas se dividen en fases: 1.500, 10.000, 20.000 y 30.000 puntos."] },
					{ title: "Como puntuar", items: ["Consume Raven Fruits: cada 10 Raven Fruits dan puntos.", "Consume Stamina para sumar puntos rapido.", "Los packs con diamantes dan puntos extra."] },
					{ title: "Estrategia", items: ["Guarda Raven Fruits y Stamina antes del evento.", "Usa Stamina cuando estes cerca de un hito o quieras subir ranking.", "Si coincide con Alliance Duel Day 1, sincroniza Raven Fruits y Stamina para puntuar en ambos."] }
				],
				scoringTitles: ["Como ganar puntos"],
				overview: ["Raven", "Stamina", "Hitos"]
			},
			fr: {
				tag: "Evenement Raven",
				summary: "Evenement a points axe sur Raven: depense Raven Fruits et Stamina pour gagner paliers et classement.",
				extraSummary: "Enhance Raven recompense les joueurs qui concentrent ameliorations Raven et depense de Stamina pendant l'evenement.",
				details: [
					{ title: "Mecaniques", items: ["Evenement limite avec classement personnel et points totaux.", "Recompenses par phases: 1 500, 10 000, 20 000 et 30 000 points."] },
					{ title: "Gagner des points", items: ["Consomme Raven Fruits: chaque 10 Raven Fruits donnent des points.", "Depense Stamina pour gagner vite des points.", "Les packs avec diamants donnent des points bonus."] },
					{ title: "Strategie", items: ["Garde Raven Fruits et Stamina avant l'evenement.", "Utilise Stamina pres d'un palier ou pour pousser le classement.", "Si l'evenement chevauche Alliance Duel Day 1, synchronise Raven Fruits et Stamina pour marquer dans les deux."] }
				],
				scoringTitles: ["Gagner des points"],
				overview: ["Raven", "Stamina", "Paliers"]
			},
			de: {
				tag: "Raven-Event",
				summary: "Punkteevent fuer Raven-Wachstum: Gib Raven Fruits und Stamina aus, um Meilensteine und Ranglistenpunkte zu sammeln.",
				extraSummary: "Enhance Raven belohnt Spieler, die Raven-Upgrades und Stamina-Verbrauch im Eventfenster buendeln. ",
				details: [
					{ title: "Mechanik", items: ["Zeitevent mit persoenlicher Rangliste und Gesamtpunkten.",  "Belohnungen in Phasen: 1.500, 10.000, 20.000 und 30.000 Punkte."] },
					{ title: "Punkte erhalten", items: ["Raven Fruits verbrauchen: je 10 Raven Fruits geben Punkte.", "Stamina fuer schnelle Punkte ausgeben.", "Diamanten-Packs geben Zusatzpunkte."] },
					{ title: "Strategie", items: ["Raven Fruits und Stamina vor dem Event sparen.", "Stamina nutzen, wenn ein Meilenstein nah ist oder du im Ranking steigen willst.", "Wenn es mit Alliance Duel Day 1 zusammenfaellt, Raven Fruits und Stamina fuer beide Events synchronisieren."] }
				],
				scoringTitles: ["Punkte erhalten"],
				overview: ["Raven", "Stamina", "Meilenstein"]
			},
			ja: {
				tag: "Ravenイベント",
				summary: "Raven強化のポイントイベント。Raven FruitsとStaminaを使い、マイルストーンとランキングを狙います。",
				extraSummary: "Enhance Raven はイベント中にRaven強化とStamina消費を集中するプレイヤーに有利です。",
				details: [
					{ title: "仕組み", items: ["個人ランキングと合計ポイントがある時間制イベントです。",  "報酬はPhase 1が1,500、Phase 2が10,000、Phase 3が20,000、Phase 4が30,000ポイントです。"] },
					{ title: "ポイント獲得", items: ["Raven Fruitsを消費します。10個ごとにポイントを得ます。", "Staminaを使うと素早くポイントを稼げます。", "ダイヤを含むパックでも追加ポイントを得ます。"] },
					{ title: "戦略", items: ["イベント前にRaven FruitsとStaminaを温存します。", "マイルストーン直前やランキング狙いでStaminaを使います。", "Alliance Duel Day 1と重なる場合、Raven FruitsとStaminaを合わせて両方でポイントを稼ぎます。"] }
				],
				scoringTitles: ["ポイント獲得"],
				overview: ["Raven", "Stamina", "マイルストーン"]
			}
		},
		"train-soldiers": {
			en: {
				tag: "Training Event",
				summary: "Point event focused on troop training: use training boosts, train soldiers, and collect points for milestones and ranking.",
				extraSummary: "Train Soldiers rewards fast military growth. The screenshot shows a timed event with player range, ranking, total points, and phase rewards. Main actions are training boosts, soldier training, and diamond packs.",
				details: [
					{ title: "Mechanics", items: ["Timed event with personal ranking and total points.", "Phase 1 at 12,000 points, Phase 2 at 24,000, Phase 3 at 42,000, and Phase 4 at 60,000."] },
					{ title: "How to score", items: ["Use 1-minute Training Boosts.", "Train soldiers: higher troop levels give more points.", "Packs containing diamonds grant extra points."] },
					{ title: "Strategy", items: ["Prepare training queues and speed-ups before the event.", "Use small boosts to close a nearby milestone without wasting resources.", "Push ranking only if you have enough speed-ups to pass nearby players."] }
				],
				scoringTitles: ["How to earn points"],
				overview: ["Training", "Ranking", "Milestone"]
			},
			es: {
				tag: "Evento de entrenamiento",
				summary: "Evento de puntos centrado en entrenar tropas: usa boosts, entrena soldados y consigue hitos y ranking.",
				extraSummary: "Train Soldiers premia el crecimiento militar rapido. La pantalla muestra evento temporizado, rango, clasificacion, puntos totales y recompensas por fases.",
				details: [
					{ title: "Mecanicas", items: ["Evento temporizado con ranking personal y puntos totales.", "Fase 1 a 12.000 puntos, fase 2 a 24.000, fase 3 a 42.000 y fase 4 a 60.000."] },
					{ title: "Como puntuar", items: ["Usa Training Boost de 1 minuto.", "Entrena soldados: niveles mas altos dan mas puntos.", "Los packs con diamantes dan puntos extra."] },
					{ title: "Estrategia", items: ["Prepara colas de entrenamiento y aceleradores antes del evento.", "Usa boosts pequenos para cerrar un hito sin malgastar recursos.", "Compite por ranking solo si tienes aceleradores suficientes."] }
				],
				scoringTitles: ["Como ganar puntos"],
				overview: ["Entrenamiento", "Ranking", "Hitos"]
			},
			fr: {
				tag: "Evenement entrainement",
				summary: "Evenement a points axe sur l'entrainement: utilise des boosts, forme des soldats et gagne milestones et classement.",
				extraSummary: "Train Soldiers recompense la croissance militaire rapide. L'ecran montre un evenement limite, une plage de joueurs, un classement, des points totaux et des recompenses par phase.",
				details: [
					{ title: "Mecaniques", items: ["Evenement limite avec classement personnel et points totaux.", "Phase 1 a 12 000 points, phase 2 a 24 000, phase 3 a 42 000 et phase 4 a 60 000."] },
					{ title: "Gagner des points", items: ["Utilise des Training Boosts de 1 minute.", "Entraine des soldats: les niveaux eleves donnent plus de points.", "Les packs avec diamants donnent des points bonus."] },
					{ title: "Strategie", items: ["Prepare les files d'entrainement et speed-ups avant l'evenement.", "Utilise de petits boosts pour atteindre un palier proche.", "Joue le classement seulement avec assez de speed-ups."] }
				],
				scoringTitles: ["Gagner des points"],
				overview: ["Entrainement", "Classement", "Paliers"]
			},
			de: {
				tag: "Training-Event",
				summary: "Punkteevent fuer Truppentraining: Nutze Training-Boosts, bilde Soldaten aus und sammle Punkte fuer Meilensteine und Rangliste.",
				extraSummary: "Train Soldiers belohnt schnellen Militaeraufbau. Der Screenshot zeigt ein Zeitevent mit Spielerrange, Rangliste, Gesamtpunkten und Phasenbelohnungen.",
				details: [
					{ title: "Mechanik", items: ["Zeitevent mit persoenlicher Rangliste und Gesamtpunkten.", "Phase 1 bei 12.000 Punkten, Phase 2 bei 24.000, Phase 3 bei 42.000 und Phase 4 bei 60.000."] },
					{ title: "Punkte erhalten", items: ["1-Minuten-Training-Boosts nutzen.", "Soldaten trainieren: Hoehere Truppenlevel geben mehr Punkte.", "Diamanten-Packs geben Zusatzpunkte."] },
					{ title: "Strategie", items: ["Trainingswarteschlangen und Speed-ups vor dem Event vorbereiten.", "Kleine Boosts nutzen, um nahe Meilensteine zu erreichen.", "Rangliste nur pushen, wenn genug Speed-ups vorhanden sind."] }
				],
				scoringTitles: ["Punkte erhalten"],
				overview: ["Training", "Rangliste", "Meilenstein"]
			},
			ja: {
				tag: "訓練イベント",
				summary: "兵士訓練のポイントイベント。訓練ブーストと兵士訓練でマイルストーンとランキングを狙います。",
				extraSummary: "Train Soldiers は軍事成長を進めるイベントです。画面には時間制限、範囲、順位、合計ポイント、段階報酬が表示されます。",
				details: [
					{ title: "仕組み", items: ["個人ランキングと合計ポイントがある時間制イベントです。", "Phase 1は12,000、Phase 2は24,000、Phase 3は42,000、Phase 4は60,000ポイントです。"] },
					{ title: "ポイント獲得", items: ["1分のTraining Boostを使います。", "兵士を訓練します。高レベル兵士ほどポイントが高くなります。", "ダイヤを含むパックでも追加ポイントを得ます。"] },
					{ title: "戦略", items: ["イベント前に訓練キューと加速を準備します。", "近い報酬段階は小さい加速で無駄なく達成します。", "ランキングを狙う時は十分な加速を用意します。"] }
				],
				scoringTitles: ["ポイント獲得"],
				overview: ["訓練", "ランキング", "マイルストーン"]
			}
		},
		"research-technology": {
			en: {
				tag: "Research Event",
				summary: "Research point event: use research speed-ups, increase Tech Might, and collect points for milestones and ranking.",
				extraSummary: "Research Technology rewards players who focus research and speed-ups at the right time.",
				details: [
					{ title: "Mechanics", items: ["Timed event with personal ranking and total points."] },
					{ title: "How to score", items: ["Use 1-minute Research Speedups.", "Increase Tech Might by completing research.", "Packs containing diamonds grant extra points."] },
					{ title: "Strategy", items: ["Prepare long research tasks and finish them during the event.", "Use research speed-ups only to close milestones or pass a nearby rank.", "Save Study Scrolls and research resources for event days or Alliance Duel Day 3."] }
				],
				scoringTitles: ["How to earn points"],
				overview: ["Research", "Tech Might", "Milestone"]
			},
			es: {
				tag: "Evento de investigacion",
				summary: "Evento de puntos de investigacion: usa aceleradores, aumenta Tech Might y consigue hitos y ranking.",
				extraSummary: "Research Technology premia concentrar investigacion y aceleradores en el momento correcto.",
				details: [
					{ title: "Mecanicas", items: ["Evento temporizado con ranking personal y puntos totales."] },
					{ title: "Como puntuar", items: ["Usa Research Speedup de 1 minuto.", "Aumenta Tech Might completando investigaciones.", "Los packs con diamantes dan puntos extra."] },
					{ title: "Estrategia", items: ["Prepara investigaciones largas casi terminadas.", "Usa aceleradores solo para cerrar hitos o superar un rango cercano.", "Guarda Study Scrolls y recursos de investigacion para eventos o Alliance Duel Day 3."] }
				],
				scoringTitles: ["Como ganar puntos"],
				overview: ["Investigacion", "Tech Might", "Hitos"]
			},
			fr: {
				tag: "Evenement recherche",
				summary: "Evenement a points de recherche: utilise les speed-ups recherche, augmente Tech Might et gagne paliers et classement.",
				extraSummary: "Research Technology recompense les joueurs qui concentrent recherches et speed-ups au bon moment.",
				details: [
					{ title: "Mecaniques", items: ["Evenement limite avec classement personnel et points totaux."] },
					{ title: "Gagner des points", items: ["Utilise des Research Speedups de 1 minute.", "Augmente Tech Might en terminant des recherches.", "Les packs avec diamants donnent des points bonus."] },
					{ title: "Strategie", items: ["Prepare de longues recherches presque terminees.", "Utilise les speed-ups seulement pour atteindre un palier ou depasser un rang proche.", "Garde Study Scrolls et ressources recherche pour les jours evenement ou Alliance Duel Day 3."] }
				],
				scoringTitles: ["Gagner des points"],
				overview: ["Recherche", "Tech Might", "Paliers"]
			},
			de: {
				tag: "Forschungs-Event",
				summary: "Forschungs-Punkteevent: Nutze Forschungs-Speed-ups, erhoehe Tech Might und sammle Punkte fuer Meilensteine und Rangliste.",
				extraSummary: "Research Technology belohnt Spieler, die Forschung und Speed-ups zum richtigen Zeitpunkt einsetzen.",
				details: [
					{ title: "Mechanik", items: ["Zeitevent mit persoenlicher Rangliste und Gesamtpunkten."] },
					{ title: "Punkte erhalten", items: ["1-Minuten-Research-Speedups nutzen.", "Tech Might durch abgeschlossene Forschung erhoehen.", "Diamanten-Packs geben Zusatzpunkte."] },
					{ title: "Strategie", items: ["Lange Forschungen vorbereiten und waehrend des Events abschliessen.", "Speed-ups nur fuer Meilensteine oder nahe Rangplaetze nutzen.", "Study Scrolls und Forschungsressourcen fuer Eventtage oder Alliance Duel Day 3 sparen."] }
				],
				scoringTitles: ["Punkte erhalten"],
				overview: ["Forschung", "Tech Might", "Meilenstein"]
			},
			ja: {
				tag: "研究イベント",
				summary: "研究ポイントイベント。研究加速を使い、Tech Mightを上げ、マイルストーンとランキングを狙います。",
				extraSummary: "Research Technology は研究と加速を正しいタイミングで集中するプレイヤーに有利です。",
				details: [
					{ title: "仕組み", items: ["個人ランキングと合計ポイントがある時間制イベントです。"] },
					{ title: "ポイント獲得", items: ["1分のResearch Speedupを使います。", "研究完了でTech Mightを上げます。", "ダイヤを含むパックでも追加ポイントを得ます。"] },
					{ title: "戦略", items: ["長い研究を事前に進め、イベント中に完了します。", "マイルストーンや近い順位を抜く時だけ研究加速を使います。", "Study Scrollと研究資源はイベント日やAlliance Duel Day 3に温存します。"] }
				],
				scoringTitles: ["ポイント獲得"],
				overview: ["研究", "Tech Might", "マイルストーン"]
			}
		},
		"hunt-battle": {
			en: {
				tag: "Alliance PvE",
				summary: "Alliance PvE wave event: members defeat Blight enemies in alliance territory while keeping steady marches.",
				extraSummary: "Hunt Battle rewards coordination and attendance. After a short preparation phase, the alliance faces 15 increasing waves. More kills mean better score and rewards.",
				details: [
					{ title: "Mechanics", items: ["5 minutes of preparation before start.", "15 waves of Blight enemies with increasing difficulty.", "Fixed 15-second marches for all participants."] },
					{ title: "Requirements", items: ["Started by R5 or R4.", "The guide indicates at least 20 active members for effective participation.", "Chosen difficulty affects enemy HP and reward value."] },
					{ title: "Rewards", items: ["Scaling rewards based on waves cleared and score.", "Speed-ups, materials, fragments, and better rewards at higher difficulty."] },
					{ title: "Strategy", items: ["Focus one target at a time instead of splitting marches.", "Use alliance buffs before heavier waves, especially after the middle of the event.", "Choose a difficulty the alliance can sustain."] }
				],
				overview: ["15 waves", "20+ members", "R5/R4"]
			},
			es: {
				tag: "PvE de alianza",
				summary: "Evento PvE de alianza por oleadas: los miembros derrotan Blights en territorio de alianza manteniendo marchas constantes.",
				extraSummary: "Hunt Battle premia coordinacion y presencia. Tras una breve preparacion, la alianza enfrenta 15 oleadas crecientes.",
				details: [
					{ title: "Mecanicas", items: ["5 minutos de preparacion antes de empezar.", "15 oleadas de Blights con dificultad creciente.", "Marchas fijas de 15 segundos para todos."] },
					{ title: "Requisitos", items: ["Lo inicia R5 o R4.", "La guia indica al menos 20 miembros activos.", "La dificultad afecta HP enemigos y recompensas."] },
					{ title: "Premios", items: ["Premios segun oleadas superadas y puntuacion.", "Aceleradores, materiales, fragmentos y mejores premios en dificultad alta."] },
					{ title: "Estrategia", items: ["Concentrar todos un objetivo cada vez.", "Usar buffs de alianza antes de oleadas pesadas.", "Elegir una dificultad sostenible."] }
				],
				overview: ["15 oleadas", "20+ miembros", "R5/R4"]
			},
			fr: {
				tag: "PvE alliance",
				summary: "Evenement PvE d'alliance par vagues: les membres battent des Blights en territoire alliance avec des marches regulieres.",
				extraSummary: "Hunt Battle recompense coordination et presence. Apres preparation, l'alliance affronte 15 vagues croissantes.",
				details: [
					{ title: "Mecaniques", items: ["5 minutes de preparation avant le depart.", "15 vagues de Blights avec difficulte croissante.", "Marches fixes de 15 secondes pour tous."] },
					{ title: "Conditions", items: ["Lancement par R5 ou R4.", "La guide indique au moins 20 membres actifs.", "La difficulte choisie modifie HP ennemis et recompenses."] },
					{ title: "Recompenses", items: ["Recompenses selon vagues terminees et score.", "Speed-ups, materiaux, fragments et meilleurs prix en haute difficulte."] },
					{ title: "Strategie", items: ["Focus une cible a la fois.", "Utiliser les buffs alliance avant les grosses vagues.", "Choisir une difficulte soutenable."] }
				],
				overview: ["15 vagues", "20+ membres", "R5/R4"]
			},
			de: {
				tag: "Allianz-PvE",
				summary: "Allianz-PvE-Wellenevent: Mitglieder besiegen Blight-Gegner im Allianzgebiet und halten konstante Maersche.",
				extraSummary: "Hunt Battle belohnt Koordination und Anwesenheit. Nach kurzer Vorbereitung folgen 15 staerker werdende Wellen.",
				details: [
					{ title: "Mechanik", items: ["5 Minuten Vorbereitung vor dem Start.", "15 Blight-Wellen mit steigender Schwierigkeit.", "Feste 15-Sekunden-Maersche fuer alle."] },
					{ title: "Voraussetzungen", items: ["Start durch R5 oder R4.", "Der Guide nennt mindestens 20 aktive Mitglieder.", "Schwierigkeit beeinflusst Gegner-HP und Belohnungen."] },
					{ title: "Belohnungen", items: ["Skalierende Belohnungen nach Wellen und Score.", "Speed-ups, Materialien, Fragmente und bessere Belohnungen bei hoeherer Schwierigkeit."] },
					{ title: "Strategie", items: ["Immer ein Ziel fokussieren.", "Allianz-Buffs vor schweren Wellen nutzen.", "Eine tragbare Schwierigkeit waehlen."] }
				],
				overview: ["15 Wellen", "20+ Mitglieder", "R5/R4"]
			},
			ja: {
				tag: "同盟PvE",
				summary: "同盟PvEのウェーブイベント。同盟領地でBlightを倒し、安定して行軍します。",
				extraSummary: "Hunt Battle は連携と参加人数が重要です。短い準備の後、同盟は15ウェーブに挑みます。",
				details: [
					{ title: "仕組み", items: ["開始前に5分の準備があります。", "難度が上がるBlightの15ウェーブです。", "全員の行軍は固定15秒です。"] },
					{ title: "条件", items: ["R5またはR4が開始します。", "ガイドでは20人以上のアクティブメンバーが推奨されています。", "難度は敵HPと報酬に影響します。"] },
					{ title: "報酬", items: ["クリアしたウェーブとスコアに応じて報酬が増えます。", "加速、素材、欠片、高難度報酬があります。"] },
					{ title: "戦略", items: ["ターゲットを分散せず1体ずつ集中します。", "重いウェーブ前に同盟バフを使います。", "無理のない難度を選びます。"] }
				],
				overview: ["15ウェーブ", "20人以上", "R5/R4"]
			}
		},
		"crystal-cluster-valley": {
			en: {
				tag: "Individual PvP",
				summary: "30-minute individual event: gather crystals, kill mobs, and use teleports well to climb the ranking.",
				extraSummary: "Crystal Cluster Valley is a fast point race. The map has crystal clusters of different levels and enemies that grant points. The center becomes more contested near the end.",
				details: [
					{ title: "Mechanics", items: ["Lasts 30 minutes.", "Level 1-4 crystal clusters and mobs give points.", "The center opens a more competitive phase during the last 7 minutes."] },
					{ title: "Requirements", items: ["Individual event, available several times a day on mature servers according to the guide.", "You start with your squad and maximum deployable troops."] },
					{ title: "Rewards", items: ["Rewards depend on final crystal point ranking.", "Resources, speed-ups, fragments, and stronger materials for high ranks."] },
					{ title: "Strategy", items: ["Gather constantly instead of waiting only for perfect clusters.", "Use the free teleport every 6 minutes to reach rich but less crowded zones.", "Go for high clusters only if travel time does not waste the gain."] }
				],
				overview: ["30 minutes", "Teleport", "Ranking"]
			},
			es: {
				tag: "PvP individual",
				summary: "Evento individual de 30 minutos: recolecta cristales, elimina mobs y usa bien teleport para subir ranking.",
				extraSummary: "Crystal Cluster Valley es una carrera rapida de puntos con cristales de varios niveles y enemigos que dan puntos.",
				details: [
					{ title: "Mecanicas", items: ["Dura 30 minutos.", "Cristales nivel 1-4 y mobs dan puntos.", "El centro se vuelve mas disputado en los ultimos 7 minutos."] },
					{ title: "Requisitos", items: ["Evento individual, varias veces al dia en servidores maduros segun la guia.", "Sales con tu escuadra y maximo de tropas desplegables."] },
					{ title: "Premios", items: ["Premios segun ranking final de puntos cristal.", "Recursos, aceleradores, fragmentos y mejores materiales para rangos altos."] },
					{ title: "Estrategia", items: ["Recolectar siempre en vez de esperar solo clusters perfectos.", "Usar teleport gratis cada 6 minutos hacia zonas ricas menos llenas.", "Ir a clusters altos solo si el viaje compensa."] }
				],
				overview: ["30 minutos", "Teleport", "Ranking"]
			},
			fr: {
				tag: "PvP individuel",
				summary: "Evenement individuel de 30 minutes: recolte des cristaux, tue des mobs et utilise bien les teleports pour monter au classement.",
				extraSummary: "Crystal Cluster Valley est une course rapide aux points avec cristaux de differents niveaux et ennemis donnant des points.",
				details: [
					{ title: "Mecaniques", items: ["Dure 30 minutes.", "Clusters de cristaux niveau 1-4 et mobs donnent des points.", "Le centre devient plus conteste dans les 7 dernieres minutes."] },
					{ title: "Conditions", items: ["Evenement individuel, disponible plusieurs fois par jour sur serveurs matures selon la guide.", "Tu pars avec ton escouade et le maximum de troupes deployables."] },
					{ title: "Recompenses", items: ["Recompenses selon le classement final de points cristal.", "Ressources, speed-ups, fragments et meilleurs materiaux pour les hauts rangs."] },
					{ title: "Strategie", items: ["Recolter constamment plutot qu'attendre les clusters parfaits.", "Utiliser le teleport gratuit toutes les 6 minutes vers les zones riches moins peuplees.", "Viser les gros clusters seulement si le trajet vaut le gain."] }
				],
				overview: ["30 minutes", "Teleport", "Classement"]
			},
			de: {
				tag: "Einzel-PvP",
				summary: "30-minuetiges Einzelevent: Kristalle sammeln, Mobs besiegen und Teleports gut nutzen, um im Ranking zu steigen.",
				extraSummary: "Crystal Cluster Valley ist ein schnelles Punkte-Rennen mit Kristallclustern verschiedener Level und Gegnern.",
				details: [
					{ title: "Mechanik", items: ["Dauert 30 Minuten.", "Kristallcluster Level 1-4 und Mobs geben Punkte.", "Das Zentrum wird in den letzten 7 Minuten umkaempfter."] },
					{ title: "Voraussetzungen", items: ["Einzelevent, laut Guide mehrmals taeglich auf reiferen Servern.", "Du startest mit Squad und maximal einsetzbaren Truppen."] },
					{ title: "Belohnungen", items: ["Belohnungen nach finalem Kristallpunkte-Rang.", "Ressourcen, Speed-ups, Fragmente und bessere Materialien fuer hohe Ränge."] },
					{ title: "Strategie", items: ["Staendig sammeln statt nur auf perfekte Cluster zu warten.", "Kostenlosen Teleport alle 6 Minuten fuer reichere, leerere Zonen nutzen.", "Hohe Cluster nur nehmen, wenn Reisezeit den Gewinn nicht frisst."] }
				],
				overview: ["30 Minuten", "Teleport", "Ranking"]
			},
			ja: {
				tag: "個人PvP",
				summary: "30分の個人イベント。クリスタルを集め、敵を倒し、テレポートを使ってランキングを上げます。",
				extraSummary: "Crystal Cluster Valley は短時間のポイントレースです。マップにはレベル別クリスタルとポイントをくれる敵がいます。",
				details: [
					{ title: "仕組み", items: ["30分間です。", "レベル1-4のクリスタルと敵でポイントを得ます。", "最後の7分は中央がより激戦になります。"] },
					{ title: "条件", items: ["ガイドでは成熟サーバーで1日に複数回ある個人イベントです。", "部隊と最大派遣兵力で開始します。"] },
					{ title: "報酬", items: ["最終クリスタルポイント順位に応じた報酬です。", "資源、加速、欠片、高順位向け素材があります。"] },
					{ title: "戦略", items: ["完璧な場所だけを待たず、常に採集します。", "6分ごとの無料テレポートで豊かで空いている場所へ移動します。", "移動時間が損にならない時だけ高レベル場所を狙います。"] }
				],
				overview: ["30分", "テレポート", "ランキング"]
			}
		},
		"canyon-conquest": {
			en: {
				tag: "Alliance PvP",
				summary: "Three-lane Alliance vs Alliance event: victory depends on might distribution and controlling at least two lanes out of three.",
				extraSummary: "Canyon Conquest rewards planning before battle. Alliances distribute members across Left, Mid, and Right Lane. Only the top 15 by Might in each lane fight, so power concentration matters more than raw sign-ups.",
				details: [
					{ title: "Mechanics", items: ["The event moves through Registration, Matching, Battle, and Settlement phases.", "Lanes are Left, Mid, and Right.", "In each lane, the top 15 by Might fight; registered players who do not fight still receive rewards."] },
					{ title: "2 lanes out of 3 strategy", items: ["If your alliance is stronger, do not spread power too evenly: aim to secure 2 lanes out of 3.", "Stack the best players on two key lanes and leave the third only covered.", "Before lock, check View Deployment and shift power toward the second lane you need to win."] },
					{ title: "Practical tips", items: ["Use Edit Troop before preparation ends.", "Balance lanes by the real Might of the top 15, not by total sign-ups.", "After the match, check Match Record to see whether the loss came from distribution or power gap."] }
				],
				overview: ["3 lanes", "Top 15 Might", "Win 2/3"]
			},
			es: {
				tag: "PvP de alianza",
				summary: "Evento alianza vs alianza de tres carriles: ganar depende de distribuir el might y controlar al menos 2 de 3 carriles.",
				extraSummary: "Canyon Conquest premia la planificacion previa. La alianza reparte miembros en Left, Mid y Right Lane; solo pelean los top 15 por Might de cada carril.",
				details: [
					{ title: "Mecanicas", items: ["Fases: Registration, Matching, Battle y Settlement.", "Carriles: Left, Mid y Right.", "En cada carril pelean los top 15 por Might; los registrados que no pelean tambien reciben recompensas."] },
					{ title: "Estrategia 2 de 3", items: ["Si la alianza es mas fuerte, no repartas poder de forma demasiado uniforme: asegura 2 de 3 carriles.", "Concentra los mejores jugadores en dos carriles clave y deja el tercero solo cubierto.", "Antes del lock revisa View Deployment y mueve poder al segundo carril que necesitas ganar."] },
					{ title: "Consejos", items: ["Usa Edit Troop antes de terminar la preparacion.", "Equilibra por Might real del top 15, no por numero total de inscritos.", "Tras el combate revisa Match Record para entender si fallo distribucion o poder."] }
				],
				overview: ["3 carriles", "Top 15 Might", "Gana 2/3"]
			},
			fr: {
				tag: "PvP alliance",
				summary: "Evenement Alliance vs Alliance a trois lanes: la victoire depend de la repartition du Might et du controle d'au moins 2 lanes sur 3.",
				extraSummary: "Canyon Conquest recompense la planification. Les membres sont repartis entre Left, Mid et Right Lane; seuls les top 15 par Might de chaque lane combattent.",
				details: [
					{ title: "Mecaniques", items: ["Phases: Registration, Matching, Battle et Settlement.", "Lanes: Left, Mid et Right.", "Dans chaque lane, les top 15 par Might combattent; les inscrits hors combat recoivent quand meme des recompenses."] },
					{ title: "Strategie 2 lanes sur 3", items: ["Si l'alliance est plus forte, ne repars pas le pouvoir trop uniformement: securise 2 lanes sur 3.", "Place les meilleurs joueurs sur deux lanes cles et couvre seulement la troisieme.", "Avant le lock, verifie View Deployment et deplace du pouvoir vers la deuxieme lane a gagner."] },
					{ title: "Conseils", items: ["Utilise Edit Troop avant la fin de preparation.", "Equilibre selon le Might reel du top 15, pas le nombre total d'inscrits.", "Apres le match, consulte Match Record pour voir si la perte vient de la repartition ou du manque de puissance."] }
				],
				overview: ["3 lanes", "Top 15 Might", "Gagner 2/3"]
			},
			de: {
				tag: "Allianz-PvP",
				summary: "Dreispuriges Allianz-gegen-Allianz-Event: Sieg haengt von Might-Verteilung und Kontrolle von mindestens 2 von 3 Lanes ab.",
				extraSummary: "Canyon Conquest belohnt Planung vor dem Kampf. Mitglieder werden auf Left, Mid und Right Lane verteilt; nur die Top 15 nach Might je Lane kaempfen.",
				details: [
					{ title: "Mechanik", items: ["Phasen: Registration, Matching, Battle und Settlement.", "Lanes: Left, Mid und Right.", "Je Lane kaempfen die Top 15 nach Might; registrierte Spieler ohne Kampf erhalten trotzdem Belohnungen."] },
					{ title: "2-von-3-Strategie", items: ["Wenn die Allianz staerker ist, Macht nicht zu gleichmaessig verteilen: sichere 2 von 3 Lanes.", "Beste Spieler auf zwei Schluessel-Lanes konzentrieren und die dritte nur abdecken.", "Vor dem Lock View Deployment pruefen und Macht zur zweiten Sieges-Lane verschieben."] },
					{ title: "Tipps", items: ["Edit Troop vor Ende der Vorbereitung nutzen.", "Nach realem Top-15-Might balancieren, nicht nach Gesamtanmeldungen.", "Nach dem Match Record pruefen, ob Verteilung oder Machtunterschied entscheidend war."] }
				],
				overview: ["3 Lanes", "Top 15 Might", "2/3 gewinnen"]
			},
			ja: {
				tag: "同盟PvP",
				summary: "3レーンの同盟対同盟イベント。Might配分と3本中2本以上のレーン確保が勝敗を決めます。",
				extraSummary: "Canyon Conquest は戦闘前の配置が重要です。Left、Mid、Rightに分かれ、各レーンのMight上位15人だけが戦います。",
				details: [
					{ title: "仕組み", items: ["Registration、Matching、Battle、Settlement のフェーズがあります。", "レーンはLeft、Mid、Rightです。", "各レーンMight上位15人が戦い、登録だけのメンバーも報酬を受け取ります。"] },
					{ title: "3本中2本を取る戦略", items: ["同盟が強い場合、均等に分けすぎず2レーンを確実に取ります。", "強いメンバーを2つの重要レーンに集め、3つ目は最低限にします。", "ロック前にView Deploymentを確認し、勝ちたい2本目へ戦力を移します。"] },
					{ title: "実用Tips", items: ["準備終了前にEdit Troopを使います。", "登録人数ではなく上位15人のMightで調整します。", "試合後はMatch Recordで敗因が配置か戦力差か確認します。"] }
				],
				overview: ["3レーン", "上位15 Might", "2/3勝利"]
			}
		},
		"cheese-conquest": {
			en: {
				tag: "Alliance Boss",
				summary: "Cooperative alliance boss event: members coordinate rallies against Cheese Trap to maximize rewards and damage.",
				extraSummary: "Cheese Trap works best when opened at a planned time with many members online and rallies led by the strongest players. Weaker members should fill strong rallies instead of splitting attempts.",
				details: [
					{ title: "Mechanics", items: ["Cooperative alliance event based on boss rallies.", "The unofficial site describes it as rallying the giant rat in the cheese trap with allies.", "Leveling Cheese Trap unlocks better rewards over time."] },
					{ title: "Alliance strategy", items: ["Open or activate the event when many members are online.", "Coordinate the time in alliance chat before activation.", "Use the strongest players as rally leaders."] },
					{ title: "Rally management", items: ["Weaker players should join strong rallies instead of opening separate ones.", "If attempts or time are limited, avoid scattered rallies: fewer full strong rallies are better.", "Treat Cheese Trap upgrades as a long-term alliance goal."] }
				],
				overview: ["Alliance Boss", "Rally", "Reward Level"]
			},
			es: {
				tag: "Jefe de alianza",
				summary: "Evento cooperativo de jefe de alianza: los miembros coordinan rallies contra Cheese Trap para maximizar dano y recompensas.",
				extraSummary: "Cheese Trap funciona mejor con horario acordado, muchos miembros online y rallies liderados por los mas fuertes.",
				details: [
					{ title: "Mecanicas", items: ["Evento cooperativo de alianza basado en rallies contra un jefe.", "El sitio unofficial lo describe como rally al gran raton en Cheese Trap con aliados.", "Subir el nivel de Cheese Trap desbloquea mejores recompensas."] },
					{ title: "Estrategia de alianza", items: ["Abrir el evento cuando muchos miembros esten online.", "Coordinar horario en chat de alianza antes de activar.", "Usar a los jugadores mas fuertes como lideres de rally."] },
					{ title: "Gestion de rallies", items: ["Los jugadores mas debiles deben unirse a rallies fuertes en vez de abrir separados.", "Si hay tiempo o intentos limitados, evitar rallies dispersos.", "Tratar las mejoras de Cheese Trap como objetivo progresivo de alianza."] }
				],
				overview: ["Jefe alianza", "Rally", "Nivel recompensa"]
			},
			fr: {
				tag: "Boss alliance",
				summary: "Evenement boss cooperatif d'alliance: les membres coordonnent des rallies contre Cheese Trap pour maximiser degats et recompenses.",
				extraSummary: "Cheese Trap fonctionne mieux a une heure planifiee, avec beaucoup de membres en ligne et des rallies menes par les plus forts.",
				details: [
					{ title: "Mecaniques", items: ["Evenement cooperatif d'alliance base sur des rallies de boss.", "Le site unofficial le decrit comme un rally contre le rat geant du cheese trap avec les allies.", "Monter le niveau Cheese Trap debloque de meilleures recompenses."] },
					{ title: "Strategie alliance", items: ["Ouvrir l'evenement quand beaucoup de membres sont en ligne.", "Coordonner l'heure dans le chat alliance avant activation.", "Utiliser les joueurs les plus forts comme chefs de rally."] },
					{ title: "Gestion rally", items: ["Les joueurs plus faibles doivent rejoindre les rallies forts plutot qu'en ouvrir separement.", "Si temps ou tentatives sont limites, eviter les rallies disperses.", "Traiter les upgrades Cheese Trap comme objectif progressif d'alliance."] }
				],
				overview: ["Boss alliance", "Rally", "Niveau recompense"]
			},
			de: {
				tag: "Allianz-Boss",
				summary: "Kooperatives Allianz-Boss-Event: Mitglieder koordinieren Rallyes gegen Cheese Trap, um Schaden und Belohnungen zu maximieren.",
				extraSummary: "Cheese Trap funktioniert am besten zu einer geplanten Zeit mit vielen Online-Mitgliedern und Rallyes unter den staerksten Spielern.",
				details: [
					{ title: "Mechanik", items: ["Kooperatives Allianz-Event auf Basis von Boss-Rallyes.", "Die unofficial Seite beschreibt es als Rally gegen die riesige Ratte im Cheese Trap mit Verbuendeten.", "Hoehere Cheese Trap Level schalten bessere Belohnungen frei."] },
					{ title: "Allianzstrategie", items: ["Event aktivieren, wenn viele Mitglieder online sind.", "Zeit vorher im Allianzchat abstimmen.", "Staerkste Spieler als Rally-Leader nutzen."] },
					{ title: "Rally-Verwaltung", items: ["Schwaechere Spieler sollen starken Rallyes beitreten statt eigene zu starten.", "Bei begrenzter Zeit oder Versuchen verstreute Rallyes vermeiden.", "Cheese Trap Upgrades als langfristiges Allianzziel behandeln."] }
				],
				overview: ["Allianz-Boss", "Rally", "Belohnungslevel"]
			},
			ja: {
				tag: "同盟ボス",
				summary: "同盟協力ボスイベント。Cheese Trapに対してラリーを合わせ、ダメージと報酬を最大化します。",
				extraSummary: "Cheese Trap は多くのメンバーがオンラインの時間に開き、強いプレイヤーがラリーリーダーになると効果的です。",
				details: [
					{ title: "仕組み", items: ["ボスラリー形式の同盟協力イベントです。", "unofficialサイトでは、味方とCheese Trapの巨大ネズミをラリーすると説明されています。", "Cheese Trapのレベルを上げると報酬が良くなります。"] },
					{ title: "同盟戦略", items: ["多くのメンバーがオンラインの時に開始します。", "開始前に同盟チャットで時間を決めます。", "強いプレイヤーをラリーリーダーにします。"] },
					{ title: "ラリー管理", items: ["弱いプレイヤーは個別に開かず、強いラリーに参加します。", "時間や回数が限られる場合は分散を避けます。", "Cheese Trap強化を同盟の長期目標にします。"] }
				],
				overview: ["同盟ボス", "ラリー", "報酬レベル"]
			}
		}
	};

	window.LAST_ASYLUM_EVENTS.forEach(function (eventItem) {
		if (eventTranslations[eventItem.slug]) {
			eventItem.i18n = eventTranslations[eventItem.slug];
		}
	});
})();
