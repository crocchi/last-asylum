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
			name: "Cheese Conquest",
			tag: "Alliance PvP",
			image: "images/cheese.png",
			detailImages: [
				"images/cheese.png"
			],
			summary: "Evento Alliance vs Alliance a tre lane: si conquistano bandiere, si gestiscono i fight in relay e conta sia la distribuzione dei team sia il controllo delle corsie.",
			extraSummary: "Nel modal vengono mostrate le reference visuali dell'evento e una descrizione piu estesa del flow: gestione delle tre lane, controllo bandiere, rotazioni relay e importanza del bilanciamento tra pressione offensiva e copertura difensiva.",
			overview: ["3 Lanes", "Flags", "Strategy"],
			source: "Community infographic"
		},
	];
})();
