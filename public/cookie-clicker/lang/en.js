var Sn = [
	['increase lifespan','sensibly increase intelligence','reverse aging','decrease hair loss','prevent arthritis','cure blindness'],
	['newts','penguins','scorpions','axolotls','puffins','porpoises','blowfish','horses','crayfish','slugs','humpback whales','nurse sharks','giant squids','polar bears','fruit bats','frogs','sea squirts','velvet worms','mole rats','paramecia','nematodes','tardigrades','giraffes'],
	['more docile','more handsome','nicer','less hungry','more pragmatic','tastier'],
	['cough drops','broccoli','smoked herring','cheese','video games','stable jobs','relationships','time travel','cat videos','tango','fashion','television','nuclear warfare','whatever it is we ate before','politics','oxygen','lamps'],
	['twerking','that darn rap music','video-games','lack of cookies','mysterious ghostly entities','aliens','parents','schools','comic-books','cookie-snorting fad'],
	['eternal life','infinite riches','eternal youth','eternal beauty','curing baldness','world peace','solving world hunger','ending all wars world-wide','making contact with extraterrestrial life','mind-reading','better living','better eating','more interesting TV shows','faster-than-light travel','quantum baking','chocolaty goodness','gooder thoughtness']
];

var S = {
	loading0 : 'Loading...',

	update0 : 'New version available ',
	update1 : 'Update note',
	update2 : 'Refresh to get it!',

	save0 : 'Copy this text and keep it somewhere safe!',
	save1 : 'Please paste in the text that was given to you on save expoert.',
	save2 : 'Error while saving.<br>Export your save instead!',
	save3 : 'Game saved',

	load0 : 'Error : you are attempting to load a save from a later version (v.',
	load1 : '; you are using v.',
	load2 : 'Sorry, you can\'t import saves from the old version anymore.',
	load3 : 'Game loaded',

	reset0: 'Do you REALLY want to start over?\n(your will lose your progress, but you will keep your achievements and your prestige.)',
	reset1: 'Game reset',
	reset2: 'You earn ',
	reset3: ' heavenly chip',
	reset4: ' heavenly chips',
	reset4: 'Do you REALLY want to wipe your save?\n(you will lose your progress, your achievements, and your prestige!)',
	reset5: 'Whoah now, are you really, REALLY sure?\n(don\'t say we didn\'t warn you!)',

	golden0: 'Frenzy : cookie production x7 for ',
	golden1: ' seconds!',
	golden2: 'Lucky! +',
	golden3: ' cookies!',
	golden4: 'Ruin! Lost ',
	golden5: ' cookies!',
	golden6: 'Elder frenzy : cookie production x666 for ',
	golden7: ' seconds!',
	golden8: 'Clot : cookie production halved for ',
	golden9: ' seconds!',
	golden10: 'Click frenzy! Clicking power x777 for ',
	golden11: ' seconds!',
	golden12: 'Cookie chain : +',
	golden13: ' cookies!',

	time0: ' days',
	time1: ' day',
	time2: ' hours',
	time3: ' hour',
	time4: ' minutes',
	time5: ' minute',
	time6: ' seconds',
	time7: ' second',

	menu0 : 'X',
	menu1 : 'Menu',
	menu2 : 'General',
	menu3 : 'Save',
	menu4 : 'Save manually (the game autosaves every 60 seconds)',
	menu5 : 'Export save',
	menu6 : 'Import save',
	menu7 : 'You can use this to backup your save or to transfer it to another computer',
	menu8 : 'Reset',
	menu9 : 'Reset your game (you will keep your achievements)',
	menu10: 'Wipe save',
	menu11: 'Delete all your progress, including your achievements and prestige',
	menu12: 'Settings',
	menu13: 'Fancy graphics ON',
	menu14: 'Fancy graphics OFF',
	menu15: 'Particles ON',
	menu16: 'Particles OFF',
	menu17: 'Numbers ON',
	menu18: 'Numbers OFF',
	menu19: 'Milk ON',
	menu20: 'Milk OFF',
	menu21: 'Offline mode OFF',
	menu22: 'Offline mode ON',
	menu23: '(note : this disables update notifications)',
	menu24: 'Update Log doesn\'t be translated!',

	stats1 : '[Upgrade]',
	stats2 : '[Purchased]',
	stats3 : '[Achievement]',
	stats4 : '[Unlocked]',
	stats5 : '[Shadow]',
	stats6 : 'Statistics',
	stats7 : 'General',
	stats8 : 'Cookies in bank :',
	stats9 : 'Cookies baked (all time) :',
	stats10: 'Cookies forfeited by resetting :',
	stats11: 'Game started :',
	stats12: ' ago',
	stats13: 'Buildings owned :',
	stats14: 'Cookies per second :',
	stats15: 'multiplier : ',
	stats16: 'Cookies per click :',
	stats17: 'Cookie clicks :',
	stats18: 'Hand-made cookies :',
	stats19: 'Golden cookie clicks :',
	stats20: 'Running version :',
	stats21: 'Special',
	stats22: 'Research',
	stats23: ' remaining',
	stats24: 'Grandmatriarchs status :',
	stats25: 'Pledge :',
	stats26: ' remaining',
	stats27: 'Prestige',
	stats28: '(Note : each heavenly chip grants you +2% CpS multiplier. You can gain more chips by resetting with a lot of cookies.)',
	stats29: ' heavenly chip',
	stats30: ' heavenly chips',
	stats31: 'Upgrades unlocked',
	stats32: 'Cookies',
	stats33: 'Achievements',
	stats34: 'Unlocked :',
	stats35: 'Milk :',
	stats36: '(Note : you gain milk through achievements. Milk can unlock unique upgrades over time.)',
	stats37: 'Shadow achievements',
	stats38: '(These are feats that are either unfair or difficult to attain. They do not give milk.)',
	stats39: 'plain milk',
	stats40: 'raspberry milk',
	stats41: 'chocolate milk',
	stats42: 'awoken',
	stats43: 'displeased',
	stats44: 'angered',
	stats45: 'appeased',

	news: {
		title: 'News : ',

		grandma0: [
			'<q>Moist cookies.</q><sig>grandma</sig>',
			'<q>We\'re nice grandmas.</q><sig>grandma</sig>',
			'<q>Indentured servitude.</q><sig>grandma</sig>',
			'<q>Come give grandma a kiss.</q><sig>grandma</sig>',
			'<q>Why don\'t you visit more often?</q><sig>grandma</sig>',
			'<q>Call me...</q><sig>grandma</sig>'
		],
		grandma1: [
			'<q>Absolutely disgusting.</q><sig>grandma</sig>',
			'<q>You make me sick.</q><sig>grandma</sig>',
			'<q>You disgust me.</q><sig>grandma</sig>',
			'<q>We rise.</q><sig>grandma</sig>',
			'<q>It begins.</q><sig>grandma</sig>',
			'<q>It\'ll all be over soon.</q><sig>grandma</sig>',
			'<q>You could have stopped it.</q><sig>grandma</sig>'
		],
		justwrong: [
			'cookie manufacturer downsizes, sells own grandmother!',
			'<q>It has betrayed us, the filthy little thing.</q><sig>grandma</sig>',
			'<q>It tried to get rid of us, the nasty little thing.</q><sig>grandma</sig>',
			'<q>It thought we would go away by selling us. How quaint.</q><sig>grandma</sig>',
			'<q>I can smell your rotten cookies.</q><sig>grandma</sig>'
		],
		grandma2: [
			'<q>shrivel</q><sig>grandma</sig>',
			'<q>writhe</q><sig>grandma</sig>',
			'<q>throb</q><sig>grandma</sig>',
			'<q>gnaw</q><sig>grandma</sig>',
			'<q>We will rise again.</q><sig>grandma</sig>',
			'<q>A mere setback.</q><sig>grandma</sig>',
			'<q>We are not satiated.</q><sig>grandma</sig>',
			'<q>Too late.</q><sig>grandma</sig>'
		],
		farm: [
	 		'cookie farms suspected of employing undeclared elderly workforce!',
            'cookie farms release harmful chocolate in our rivers, says scientist!',
            'genetically-modified chocolate controversy strikes cookie farmers!',
            'free-range farm cookies popular with today\'s hip youth, says specialist.',
            'farm cookies deemed unfit for vegans, says nutritionist.'
		],
		factory: [
            'cookie factories linked to global warming!',
            'cookie factories involved in chocolate weather controversy!',
            'cookie factories on strike, robotic minions employed to replace workforce!',
            'cookie factories on strike - workers demand to stop being paid in cookies!',
            'factory-made cookies linked to obesity, says study.'
		],
		mine: [
            Math.floor(Math.random()*1000+2)+' miners dead in chocolate mine catastrophe!',
            Math.floor(Math.random()*1000+2)+' miners trapped in collapsed chocolate mine!',
            'chocolate mines found to cause earthquakes and sink holes!',
            'chocolate mine goes awry, floods village in chocolate!',
            'depths of chocolate mines found to house "peculiar, chocolaty beings"!'
		],
		shipment: [
			'new chocolate planet found, becomes target of cookie-trading spaceships!',
			'massive chocolate planet found with 99.8% certified pure dark chocolate core!',
			'space tourism booming as distant planets attract more bored millionaires!',
			'chocolate-based organisms found on distant planet!',
			'ancient baking artifacts found on distant planet; "terrifying implications", experts say.'
		],
		alchemylab: [
			'national gold reserves dwindle as more and more of the precious mineral is turned to cookies!',
			'chocolate jewelry found fashionable, gold and diamonds "just a fad", says specialist.',
			'silver found to also be transmutable into white chocolate!',
			'defective alchemy lab shut down, found to convert cookies to useless gold.',
			'alchemy-made cookies shunned by purists!'
		],
		portal: [
			'nation worried as more and more unsettling creatures emerge from dimensional portals!',
			'dimensional portals involved in city-engulfing disaster!',
			'tourism to cookieverse popular with bored teenagers! Casualty rate as high as 73%!',
			'cookieverse portals suspected to cause fast aging and obsession with baking, says study.',
			'"do not settle near portals," says specialist; "your children will become strange and corrupted inside."'
		],
		timemachine: [
			'time machines involved in history-rewriting scandal! Or are they?',
			'time machines used in unlawful time tourism!',
			'cookies brought back from the past "unfit for human consumption", says historian.',
			'various historical figures inexplicably replaced with talking lumps of dough!',
			'"I have seen the future," says time machine operator, "and I do not wish to go there again."'
		],
		antimattercondenser: [
			'whole town seemingly swallowed by antimatter-induced black hole; more reliable sources affirm town "never really existed"!',
			'"explain to me again why we need particle accelerators to bake cookies?" asks misguided local woman.',
			'first antimatter condenser successfully turned on, doesn\'t rip apart reality!',
			'researchers conclude that what the cookie industry needs, first and foremost, is "more magnets".',
			'"unravelling the fabric of reality just makes these cookies so much tastier", claims scientist.'
		],
		base10:'cookie manufacturer completely forgoes common sense, lets OCD drive building decisions!',
		fromscratch:'follow the tear-jerking, riches-to-rags story about a local cookie manufacturer who decided to give it all up!',
		aworldfilledwithcookies:'known universe now jammed with cookies! No vacancies!',
		serendipity:'local cookie manufacturer becomes luckiest being alive!',
		kittenhelpers:'faint meowing heard around local cookie facilities; suggests new ingredient being tested.',
		kittenworkers:'crowds of meowing kittens with little hard hats reported near local cookie facilities.',
		kittenengineers:'surroundings of local cookie facilities now overrun with kittens in adorable little suits. Authorities advise to stay away from the premises.',
		kittenoverseers:'locals report troups of bossy kittens meowing adorable orders at passerbys.',

		earned10000_1: ', reveals celebrity.',
		earned10000: [
			[
				'cookies found to '+choose(Sn[0])+' in '+choose(Sn[1])+'!',
				'cookies found to make '+choose(Sn[1])+' '+choose(Sn[2])+'!',
				'cookies tested on '+choose(Sn[1])+', found to have no ill effects.',
				'cookies unexpectedly popular among '+choose(Sn[1])+'!',
				'unsightly lumps found on '+choose(Sn[1])+' near cookie facility; "they\'ve pretty much always looked like that", say biologists.',
				'new species of '+choose(Sn[1])+' discovered in distant country; "yup, tastes like cookies", says biologist.',
				'cookies go well with roasted '+choose(Sn[1])+', says controversial chef.',
				'"do your cookies contain '+choose(Sn[1])+'?", asks PSA warning against counterfeit cookies.'
			],
			[
				'I\'m all about cookies',
				'I just can\'t stop eating cookies. I think I seriously need help',
				'I guess I have a cookie problem',
				'I\'m not addicted to cookies. That\'s just speculation by fans with too much free time',
				'my upcoming album contains 3 songs about cookies',
				'I\'ve had dreams about cookies 3 nights in a row now. I\'m a bit worried honestly',
				'accusations of cookie abuse are only vile slander',
				'cookies really helped me when I was feeling low',
				'cookies are the secret behind my perfect skin',
				'cookies helped me stay sane while filming my upcoming movie',
				'cookies helped me stay thin and healthy',
				'I\'ll say one word, just one : cookies',
				'alright, I\'ll say it - I\'ve never eaten a single cookie in my life'
			],
			[
				'doctors recommend twice-daily consumption of fresh cookies.',
				'doctors warn against chocolate chip-snorting teen fad.',
				'doctors advise against new cookie-free fad diet.',
				'doctors warn mothers about the dangers of "home-made cookies".'
			],
			[
				'scientist predicts imminent cookie-related "end of the world"; becomes joke among peers.',
				'man robs bank, buys cookies.',
				'what makes cookies taste so right? "Probably all the [*****] they put in them", says anonymous tipper.',
				'man found allergic to cookies; "what a weirdo", says family.',
				'foreign politician involved in cookie-smuggling scandal.',
				'cookies now more popular than '+choose(Sn[3])+', says study.',
				'obesity epidemic strikes nation; experts blame '+choose(Sn[4])+'.',
				'cookie shortage strikes town, people forced to eat cupcakes; "just not the same", concedes mayor.',
				'"you gotta admit, all this cookie stuff is a bit ominous", says confused idiot.',
				'movie cancelled from lack of actors; "everybody\'s at home eating cookies", laments director.',
				'comedian forced to cancel cookie routine due to unrelated indigestion.',
				'new cookie-based religion sweeps the nation.',
				'fossil records show cookie-based organisms prevalent during Cambrian explosion, scientists say.',
				'mysterious illegal cookies seized; "tastes terrible", says police.',
				'man found dead after ingesting cookie; investigators favor "mafia snitch" hypothesis.',
				'"the universe pretty much loops on itself," suggests researcher; "it\'s cookies all the way down."',
				'minor cookie-related incident turns whole town to ashes; neighboring cities asked to chip in for reconstruction.',
				'is our media controlled by the cookie industry? This could very well be the case, says crackpot conspiracy theorist.',
				choose([
					'cookie-flavored popcorn pretty damn popular; "we kinda expected that", say scientists.',
					'cookie-flavored cereals break all known cereal-related records',
					'cookies popular among all age groups, including fetuses, says study.',
					'cookie-flavored popcorn sales exploded during screening of Grandmothers II : The Moistening.'
				]),
				'all-cookie restaurant opening downtown. Dishes such as braised cookies, cookie thermidor, and for dessert : crepes.',
				'cookies could be the key to '+choose(Sn[5])+', say scientists.'
			]
		], // End of earned10000

		earnedsome: [
				'You feel like making cookies. But nobody wants to eat your cookies.',
				'Your first batch goes to the trash. The neighborhood raccoon barely touches it.',
				'Your family accepts to try some of your cookies.',
				'Your cookies are popular in the neighborhood.',
				'People are starting to talk about your cookies.',
				'Your cookies are talked about for miles around.',
				'Your cookies are renowned in the whole town!',
				'Your cookies bring all the boys to the yard.',
				'Your cookies now have their own website!',
				'Your cookies are worth a lot of money.',
				'Your cookies sell very well in distant countries.',
				'People come from very far away to get a taste of your cookies.',
				'Kings and queens from all over the world are enjoying your cookies.',
				'There are now museums dedicated to your cookies.',
				'A national day has been created in honor of your cookies.',
				'Your cookies have been named a part of the world wonders.',
				'History books now include a whole chapter about your cookies.',
				'Your cookies have been placed under government surveillance.',
				'The whole planet is enjoying your cookies!',
				'Strange creatures from neighboring planets wish to try your cookies.',
				'Elder gods from the whole cosmos have awoken to taste your cookies.',
				'Beings from other dimensions lapse into existence just to get a taste of your cookies.',
				'Your cookies have achieved sentience.',
				'The universe has now turned into cookie dough, to the molecular level.',
				'Your cookies are rewriting the fundamental laws of the universe.',
				'A local news station runs a 10-minute segment about your cookies. Success!<br><span style="font-size:50%;">(you win a cookie)</span>',
				'it\'s time to stop playing'//only show this for 100 millions (it's funny for a moment)
		],

		elderwrath: [
			[
				'millions of old ladies reported missing!',
				'processions of old ladies sighted around cookie facilities!',
				'families around the continent report agitated, transfixed grandmothers!',
				'doctors swarmed by cases of old women with glassy eyes and a foamy mouth!',
				'nurses report "strange scent of cookie dough" around female elderly patients!'
			],
			[
				'town in disarray as strange old ladies break into homes to abduct infants and baking utensils!',
				'sightings of old ladies with glowing eyes terrify local population!',
				'retirement homes report "female residents slowly congealing in their seats"!',
				'whole continent undergoing mass exodus of old ladies!',
				'old women freeze in place in streets, ooze warm sugary syrup!'
			],
			[
				'large "flesh highways" scar continent, stretch between various cookie facilities!',
				'wrinkled "flesh tendrils" visible from space!',
				'remains of "old ladies" found frozen in the middle of growing fleshy structures!',
				'all hope lost as writhing mass of flesh and dough engulfs whole city!',
				'nightmare continues as wrinkled acres of flesh expand at alarming speeds!'
			]
		]
	}, // End of news

	building {
		sell: 'Sell 1',
		owned: 'owned : ',

		"Cursor": {
			displayName: 'Cursor',
			commonName: 'cursor|cursors|clicked',
			desc: 'Autoclicks once every 10 seconds.'
		},
		"Grandma": {
			displayName: 'Grandma',
			commonName: 'grandma|grandmas|baked',
			desc: 'A nice grandma to bake more cookies.'
		},
		"Farm": {
			displayName: 'Farm',
			commonName: 'farm|farms|harvested',
			desc: 'Grows cookie plants from cookie seeds.'
		},
		"Factory": {
			displayName: 'Factory',
			commonName: 'factory|factories|mass-produced',
			desc: 'Produces large quantities of cookies.'
		},
		"Mine": {
			displayName: 'Mine',
			commonName: 'mine|mines|mined',
			desc: 'Mines out cookie dough and chocolate chips.'
		},
		"Shipment": {
			displayName: 'Shipment',
			commonName: 'shipment|shipments|shipped',
			desc: 'Brings in fresh cookies from the cookie planet.'
		},
		"Alchemy lab": {
			displayName: 'Alchemy lab',
			commonName: 'alchemy lab|alchemy labs|transmuted',
			desc: 'Turns gold into cookies!'
		},
		"Portal": {
			displayName: 'Portal',
			commonName: 'portal|portals|retrieved',
			desc: 'Opens a door to the Cookieverse.'
		},
		"Time machine": {
			displayName: 'Time machine',
			commonName: 'time machine|time machines|recovered',
			desc: 'Brings cookies from the past, before they were even eaten.'
		},
		"Antimatter condenser": {
			displayName: 'Antimatter condenser',
			commonName: 'antimatter condenser|antimatter condensers|condensed',
			desc: 'Condenses the antimatter in the universe into cookies.',
			fontsize: '65%' // for longer name
		},
	},

	upgrade: {
		startresearch: "Research has begun",
		purchaseonemind: 'Warning : purchasing this will have unexpected, and potentially undesirable results!\nIt\'s all downhill from here. You have been warned!\nPurchase anyway?',
		researched: 'Researched : ',

		"Reinforced index finger": {
			"displayName": "Reinforced index finger",
			"desc": "The mouse gains <b>+1</b> cookie per click.<br>Cursors gain <b>+0.1</b> base CpS.<q>prod prod</q>"
		},
		'Carpal tunnel prevention cream': {
			"displayName": "Carpal tunnel prevention cream",
			"desc": 'The mouse and cursors are <b>twice</b> as efficient.'
		},
		'Ambidextrous': {
			"displayName": 'Ambidextrous',
			"desc": 'The mouse and cursors are <b>twice</b> as efficient.<q>Look ma, both hands!</q>'
		},
		'Thousand fingers': {
			"displayName": 'Thousand fingers',
			"desc": 'The mouse and cursors gain <b>+0.1</b> cookies for each non-cursor object owned.<q>clickity</q>'
		},
		'Million fingers': {
			"displayName": 'Million fingers',
			"desc": 'The mouse and cursors gain <b>+0.5</b> cookies for each non-cursor object owned.<q>clickityclickity</q>'
		},
		'Billion fingers': {
			"displayName": 'Billion fingers',
			"desc": 'The mouse and cursors gain <b>+2</b> cookies for each non-cursor object owned.<q>clickityclickityclickity</q>'
		},
		'Trillion fingers': {
			"displayName": 'Trillion fingers',
			"desc": 'The mouse and cursors gain <b>+10</b> cookies for each non-cursor object owned.<q>clickityclickityclickityclickity</q>'
		},
		'Forwards from grandma': {
			"displayName": 'Forwards from grandma',
			"desc": 'Grandmas gain <b>+0.3</b> base CpS.<q>RE:RE:thought you\'d get a kick out of this ;))</q>'
		},
		'Steel-plated rolling pins': {
			"displayName": 'Steel-plated rolling pins',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Lubricated dentures': {
			"displayName": 'Lubricated dentures',
			"desc": 'Grandmas are <b>twice</b> as efficient.<q>Squish</q>'
		},
		'Cheap hoes': {
			"displayName": 'Cheap hoes',
			"desc": 'Farms gain <b>+0.5</b> base CpS.'
		},
		'Fertilizer': {
			"displayName": 'Fertilizer',
			"desc": 'Farms are <b>twice</b> as efficient.<q>It\'s chocolate, I swear.</q>'
		},
		'Cookie trees': {
			"displayName": 'Cookie trees',
			"desc": 'Farms are <b>twice</b> as efficient.<q>A relative of the breadfruit.</q>'
		},
		'Sturdier conveyor belts': {
			"displayName": 'Sturdier conveyor belts',
			"desc": 'Factories gain <b>+4</b> base CpS.'
		},
		'Child labor': {
			"displayName": 'Child labor',
			"desc": 'Factories are <b>twice</b> as efficient.<q>Cheaper, healthier workforce - and so much more receptive to whipping!</q>'
		},
		'Sweatshop': {
			"displayName": 'Sweatshop',
			"desc": 'Factories are <b>twice</b> as efficient.<q>Slackers will be terminated.</q>'
		},
		'Sugar gas': {
			"displayName": 'Sugar gas',
			"desc": 'Mines gain <b>+10</b> base CpS.<q>A pink, volatile gas, found in the depths of some chocolate caves.</q>'
		},
		'Megadrill': {
			"displayName": 'Megadrill',
			"desc": 'Mines are <b>twice</b> as efficient.'
		},
		'Ultradrill': {
			"displayName": 'Ultradrill',
			"desc": 'Mines are <b>twice</b> as efficient.'
		},
		'Vanilla nebulae': {
			"displayName": 'Vanilla nebulae',
			"desc": 'Shipments gain <b>+30</b> base CpS.'
		},
		'Wormholes': {
			"displayName": 'Wormholes',
			"desc": 'Shipments are <b>twice</b> as efficient.<q>By using these as shortcuts, your ships can travel much faster.</q>'
		},
		'Frequent flyer': {
			"displayName": 'Frequent flyer',
			"desc": 'Shipments are <b>twice</b> as efficient.<q>Come back soon!</q>'
		},
		'Antimony': {
			"displayName": 'Antimony',
			"desc": 'Alchemy labs gain <b>+100</b> base CpS.<q>Actually worth a lot of mony.</q>'
		},
		'Essence of dough': {
			"displayName": 'Essence of dough',
			"desc": 'Alchemy labs are <b>twice</b> as efficient.<q>Extracted through the 5 ancient steps of alchemical baking.</q>'
		},
		'True chocolate': {
			"displayName": 'True chocolate',
			"desc": 'Alchemy labs are <b>twice</b> as efficient.<q>The purest form of cacao.</q>'
		},
		'Ancient tablet': {
			"displayName": 'Ancient tablet',
			"desc": 'Portals gain <b>+1,666</b> base CpS.<q>A strange slab of peanut brittle, holding an ancient cookie recipe. Neat!</q>'
		},
		'Insane oatling workers': {
			"displayName": 'Insane oatling workers',
			"desc": 'Portals are <b>twice</b> as efficient.<q>ARISE, MY MINIONS!</q>'
		},
		'Soul bond': {
			"displayName": 'Soul bond',
			"desc": 'Portals are <b>twice</b> as efficient.<q>So I just sign up and get more cookies? Sure, whatever!</q>'
		},
		'Flux capacitors': {
			"displayName": 'Flux capacitors',
			"desc": 'Time machines gain <b>+9,876</b> base CpS.<q>Bake to the future.</q>'
		},
		'Time paradox resolver': {
			"displayName": 'Time paradox resolver',
			"desc": 'Time machines are <b>twice</b> as efficient.<q>No more fooling around with your own grandmother!</q>'
		},
		'Quantum conundrum': {
			"displayName": 'Quantum conundrum',
			"desc": 'Time machines are <b>twice</b> as efficient.<q>It\'s full of stars!</q>'
		},
		'Kitten helpers': {
			"displayName": 'Kitten helpers',
			"desc": 'You gain <b>more CpS</b> the more milk you have.<q>meow may I help you</q>'
		},
		'Kitten workers': {
			"displayName": 'Kitten workers',
			"desc": 'You gain <b>more CpS</b> the more milk you have.<q>meow meow meow meow</q>'
		},
		'Oatmeal raisin cookies': {
			"displayName": 'Oatmeal raisin cookies',
			"desc": 'Cookie production multiplier <b>+5%</b>.<q>No raisin to hate these.</q>'
		},
		'Peanut butter cookies': {
			"displayName": 'Peanut butter cookies',
			"desc": 'Cookie production multiplier <b>+5%</b>.'
		},
		'Plain cookies': {
			"displayName": 'Plain cookies',
			"desc": 'Cookie production multiplier <b>+5%</b>.<q>Meh.</q>'
		},
		'Coconut cookies': {
			"displayName": 'Coconut cookies',
			"desc": 'Cookie production multiplier <b>+5%</b>.'
		},
		'White chocolate cookies': {
			"displayName": 'White chocolate cookies',
			"desc": 'Cookie production multiplier <b>+5%</b>.'
		},
		'Macadamia nut cookies': {
			"displayName": 'Macadamia nut cookies',
			"desc": 'Cookie production multiplier <b>+5%</b>.'
		},
		'Double-chip cookies': {
			"displayName": 'Double-chip cookies',
			"desc": 'Cookie production multiplier <b>+10%</b>.'
		},
		'Sugar cookies': {
			"displayName": 'Sugar cookies',
			"desc": 'Cookie production multiplier <b>+5%</b>.'
		},
		'White chocolate macadamia nut cookies': {
			"displayName": 'White chocolate macadamia nut cookies',
			"desc": 'Cookie production multiplier <b>+10%</b>.'
		},
		'All-chocolate cookies': {
			"displayName": 'All-chocolate cookies',
			"desc": 'Cookie production multiplier <b>+10%</b>.'
		},
		'Quadrillion fingers': {
			"displayName": 'Quadrillion fingers',
			"desc": 'The mouse and cursors gain <b>+20</b> cookies for each non-cursor object owned.<q>clickityclickityclickityclickityclick</q>'
		},
		'Prune juice': {
			"displayName": 'Prune juice',
			"desc": 'Grandmas are <b>twice</b> as efficient.<q>Gets me going.</q>'
		},
		'Genetically-modified cookies': {
			"displayName": 'Genetically-modified cookies',
			"desc": 'Farms are <b>twice</b> as efficient.<q>All-natural mutations.</q>'
		},
		'Radium reactors': {
			"displayName": 'Radium reactors',
			"desc": 'Factories are <b>twice</b> as efficient.<q>Gives your cookies a healthy glow.</q>'
		},
		'Ultimadrill': {
			"displayName": 'Ultimadrill',
			"desc": 'Mines are <b>twice</b> as efficient.<q>Pierce the heavens, etc.</q>'
		},
		'Warp drive': {
			"displayName": 'Warp drive',
			"desc": 'Shipments are <b>twice</b> as efficient.'
		},
		'Ambrosia': {
			"displayName": 'Ambrosia',
			"desc": 'Alchemy labs are <b>twice</b> as efficient.'
		},
		'Sanity dance': {
			"displayName": 'Sanity dance',
			"desc": 'Portals are <b>twice</b> as efficient.<q>We can change if we want to.<br>We can leave our brains behind.</q>'
		},
		'Causality enforcer': {
			"displayName": 'Causality enforcer',
			"desc": 'Time machines are <b>twice</b> as efficient.<q>What happened, happened.</q>'
		},
		'Lucky day': {
			"displayName": 'Lucky day',
			"desc": 'Golden cookies appear <b>twice as often</b> and last <b>twice as long</b>.'
		},
		'Serendipity': {
			"displayName": 'Serendipity',
			"desc": 'Golden cookies appear <b>twice as often</b> and last <b>twice as long</b>.'
		},
		'Kitten engineers': {
			"displayName": 'Kitten engineers',
			"desc": 'You gain <b>more CpS</b> the more milk you have.<q>meow meow meow meow, sir</q>'
		},
		'Dark chocolate-coated cookies': {
			"displayName": 'Dark chocolate-coated cookies',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'White chocolate-coated cookies': {
			"displayName": 'White chocolate-coated cookies',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Farmer grandmas': {
			"displayName": 'Farmer grandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Worker grandmas': {
			"displayName": 'Worker grandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Miner grandmas': {
			"displayName": 'Miner grandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Cosmic grandmas': {
			"displayName": 'Cosmic grandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Transmuted grandmas': {
			"displayName": 'Transmuted grandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Altered grandmas': {
			"displayName": 'Altered grandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Grandmas\' grandmas': {
			"displayName": 'Grandmas\' grandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Bingo center/Research facility': {
			"displayName": 'Bingo center/Research facility',
			"desc": 'Grandma-operated science lab and leisure club.<br>Grandmas are <b>4 times</b> as efficient.<br><b>Regularly unlocks new upgrades</b>.'
		},
		'Specialized chocolate chips': {
			"displayName": 'Specialized chocolate chips',
			"desc": '[Research]<br>Cookie production multiplier <b>+1%</b>.<q>Computer-designed chocolate chips. Computer chips, if you will.</q>'
		},
		'Designer cocoa beans': {
			"displayName": 'Designer cocoa beans',
			"desc": '[Research]<br>Cookie production multiplier <b>+2%</b>.<q>Now more aerodynamic than ever!</q>'
		},
		'Ritual rolling pins': {
			"displayName": 'Ritual rolling pins',
			"desc": '[Research]<br>Grandmas are <b>twice</b> as efficient.<q>The result of years of scientific research!</q>'
		},
		'Underworld ovens': {
			"displayName": 'Underworld ovens',
			"desc": '[Research]<br>Cookie production multiplier <b>+3%</b>.<q>Powered by science, of course!</q>'
		},
		'One mind': {
			"displayName": 'One mind',
			"desc": '[Research]<br>Each grandma gains <b>+1 base CpS for each 50 grandmas</b>.<div class="warning">Note : the grandmothers are growing restless. Do not encourage them.</div><q>We are one. We are many.</q>'
		},
		'Exotic nuts': {
			"displayName": 'Exotic nuts',
			"desc": '[Research]<br>Cookie production multiplier <b>+4%</b>.<q>You\'ll go crazy over these!</q>'
		},
		'Communal brainsweep': {
			"displayName": 'Communal brainsweep',
			"desc": '[Research]<br>Each grandma gains another <b>+1 base CpS for each 50 grandmas</b>.<div class="warning">Note : proceeding any further in scientific research may have unexpected results. You have been warned.</div><q>We fuse. We merge. We grow.</q>'
		},
		'Arcane sugar': {
			"displayName": 'Arcane sugar',
			"desc": '[Research]<br>Cookie production multiplier <b>+5%</b>.<q>Tastes like insects, ligaments, and molasses.</q>'
		},
		'Elder Pact': {
			"displayName": 'Elder Pact',
			"desc": '[Research]<br>Each grandma gains <b>+1 base CpS for each 20 portals</b>.<div class="warning">Note : this is a bad idea.</div><q>squirm crawl slither writhe<br>today we rise</q>'
		},
		'Elder Pledge': {
			"displayName": 'Elder Pledge',
			"desc": '[Repeatable]<br>Contains the wrath of the elders, at least for a while.'
		},
		'Plastic mouse': {
			"displayName": 'Plastic mouse',
			"desc": 'Clicking gains <b>+1% of your CpS</b>.'
		},
		'Iron mouse': {
			"displayName": 'Iron mouse',
			"desc": 'Clicking gains <b>+1% of your CpS</b>.'
		},
		'Titanium mouse': {
			"displayName": 'Titanium mouse',
			"desc": 'Clicking gains <b>+1% of your CpS</b>.'
		},
		'Adamantium mouse': {
			"displayName": 'Adamantium mouse',
			"desc": 'Clicking gains <b>+1% of your CpS</b>.'
		},
		'Ultrascience': {
			"displayName": 'Ultrascience',
			"desc": 'Research takes only <b>5 seconds</b>.'
		},
		'Eclipse cookies': {
			"displayName": 'Eclipse cookies',
			"desc": 'Cookie production multiplier <b>+15%</b>.<q>Look to the cookie.</q>'
		},
		'Zebra cookies': {
			"displayName": 'Zebra cookies',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Quintillion fingers': {
			"displayName": 'Quintillion fingers',
			"desc": 'The mouse and cursors gain <b>+100</b> cookies for each non-cursor object owned.<q>man, just go click click click click click, it\'s real easy, man.</q>'
		},
		'Gold hoard': {
			"displayName": 'Gold hoard',
			"desc": 'Golden cookies appear <b>really often</b>.'
		},
		'Elder Covenant': {
			"displayName": 'Elder Covenant',
			"desc": '[Switch]<br>Puts a permanent end to the elders\' wrath, at the price of 5% of your CpS.'
		},
		'Revoke Elder Covenant': {
			"displayName": 'Revoke Elder Covenant',
			"desc": '[Switch]<br>You will get 5% of your CpS back, but the grandmatriarchs will return.'
		},
		'Get lucky': {
			"displayName": 'Get lucky',
			"desc": 'Golden cookie effects last <b>twice as long</b>.<q>You\'ve been up all night, haven\'t you?</q>'
		},
		'Sacrificial rolling pins': {
			"displayName": 'Sacrificial rolling pins',
			"desc": 'Elder pledge last <b>twice</b> as long.'
		},
		'Snickerdoodles': {
			"displayName": 'Snickerdoodles',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Stroopwafels': {
			"displayName": 'Stroopwafels',
			"desc": 'Cookie production multiplier <b>+15%</b>.<q>If it ain\'t dutch, it ain\'t much.</q>'
		},
		'Macaroons': {
			"displayName": 'Macaroons',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Neuromancy': {
			"displayName": 'Neuromancy',
			"desc": 'Can toggle upgrades on and off at will in the stats menu.'
		},
		'Empire biscuits': {
			"displayName": 'Empire biscuits',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'British tea biscuits': {
			"displayName": 'British tea biscuits',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Chocolate british tea biscuits': {
			"displayName": 'Chocolate british tea biscuits',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Round british tea biscuits': {
			"displayName": 'Round british tea biscuits',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Round chocolate british tea biscuits': {
			"displayName": 'Round chocolate british tea biscuits',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Round british tea biscuits with heart motif': {
			"displayName": 'Round british tea biscuits with heart motif',
			"desc": 'Cookie production multiplier <b>+15%</b>.'
		},
		'Round chocolate british tea biscuits with heart motif': {
			"displayName": 'Round chocolate british tea biscuits with heart motif',
			"desc": 'Cookie production multiplier <b>+15%</b>.<q>Quite.</q>'
		},
		'Sugar bosons': {
			"displayName": 'Sugar bosons',
			"desc": 'Antimatter condensers gain <b>+99,999</b> base CpS.'
		},
		'String theory': {
			"displayName": 'String theory',
			"desc": 'Antimatter condensers are <b>twice</b> as efficient.'
		},
		'Large macaron collider': {
			"displayName": 'Large macaron collider',
			"desc": 'Antimatter condensers are <b>twice</b> as efficient.<q>How singular!</q>'
		},
		'Big bang bake': {
			"displayName": 'Big bang bake',
			"desc": 'Antimatter condensers are <b>twice</b> as efficient.<q>And that\'s how it all began.</q>'
		},
		'Antigrandmas': {
			"displayName": 'Antigrandmas',
			"desc": 'Grandmas are <b>twice</b> as efficient.'
		},
		'Madeleines': {
			"displayName": 'Madeleines',
			"desc": 'Cookie production multiplier <b>+20%</b>.<q>Unforgettable!</q>'
		},
		'Palmiers': {
			"displayName": 'Palmiers',
			"desc": 'Cookie production multiplier <b>+20%</b>.'
		},
		'Palets': {
			"displayName": 'Palets',
			"desc": 'Cookie production multiplier <b>+20%</b>.'
		},
		'Sabl&eacute;s': {
			"displayName": 'Sabl&eacute;s',
			"desc": 'Cookie production multiplier <b>+20%</b>.'
		},
		'Kitten overseers': {
			"displayName": 'Kitten overseers',
			"desc": 'You gain <b>more CpS</b> the more milk you have.<q>my purrpose is to serve you, sir</q>'
		}
	},

	achievement: {
		unlocked: 'Achievement unlocked :',

		money0: 'Bake ',
		money1: 'cookie.',
		money2: 'cookies.',
		'Wake and bake': {
			"displayName": 'Wake and bake',
			"desc": 'None'
		},
		'Making some dough': {
			"displayName": 'Making some dough',
			"desc": 'None'
		},
		'So baked right now': {
			"displayName": 'So baked right now',
			"desc": 'None'
		},
		'Fledgling bakery': {
			"displayName": 'Fledgling bakery',
			"desc": 'None'
		},
		'Affluent bakery': {
			"displayName": 'Affluent bakery',
			"desc": 'None'
		},
		'World-famous bakery': {
			"displayName": 'World-famous bakery',
			"desc": 'None'
		},
		'Cosmic bakery': {
			"displayName": 'Cosmic bakery',
			"desc": 'None'
		},
		'Galactic bakery': {
			"displayName": 'Galactic bakery',
			"desc": 'None'
		},
		'Universal bakery': {
			"displayName": 'Universal bakery',
			"desc": 'None'
		},
		'Timeless bakery': {
			"displayName": 'Timeless bakery',
			"desc": 'None'
		},
		'Infinite bakery': {
			"displayName": 'Infinite bakery',
			"desc": 'None'
		},
		'Immortal bakery': {
			"displayName": 'Immortal bakery',
			"desc": 'None'
		},
		'You can stop now': {
			"displayName": 'You can stop now',
			"desc": 'None'
		},
		'Cookies all the way down': {
			"displayName": 'Cookies all the way down',
			"desc": 'None'
		},
		'Overdose': {
			"displayName": 'Overdose',
			"desc": 'None'
		},
		'How?': {
			"displayName": 'How?',
			"desc": 'None'
		},

		cps0: 'Bake ',
		cps1: 'cookie',
		cps2: 'cookies',
		cps3: ' per second.',
		'Casual baking': {
			"displayName": 'Casual baking',
			"desc": 'None'
		},
		'Hardcore baking': {
			"displayName": 'Hardcore baking',
			"desc": 'None'
		},
		'Steady tasty stream': {
			"displayName": 'Steady tasty stream',
			"desc": 'None'
		},
		'Cookie monster': {
			"displayName": 'Cookie monster',
			"desc": 'None'
		},
		'Mass producer': {
			"displayName": 'Mass producer',
			"desc": 'None'
		},
		'Cookie vortex': {
			"displayName": 'Cookie vortex',
			"desc": 'None'
		},
		'Cookie pulsar': {
			"displayName": 'Cookie pulsar',
			"desc": 'None'
		},
		'Cookie quasar': {
			"displayName": 'Cookie quasar',
			"desc": 'None'
		},
		'A world filled with cookies': {
			"displayName": 'A world filled with cookies',
			"desc": 'None'
		},
		'Let\'s never bake again': {
			"displayName": 'Let\'s never bake again',
			"desc": 'None'
		},

		'Sacrifice': {
			"displayName": 'Sacrifice',
			"desc": 'Reset your game with <b>1 million</b> cookies baked.<q>Easy come, easy go.</q>'
		},
		'Oblivion': {
			"displayName": 'Oblivion',
			"desc": 'Reset your game with <b>1 billion</b> cookies baked.<q>Back to square one.</q>'
		},
		'From scratch': {
			"displayName": 'From scratch',
			"desc": 'Reset your game with <b>1 trillion</b> cookies baked.<q>It\'s been fun.</q>'
		},
		'Neverclick': {
			"displayName": 'Neverclick',
			"desc": 'Make <b>1 million</b> cookies by only having clicked <b>15 times</b>.'
		},
		'Clicktastic': {
			"displayName": 'Clicktastic',
			"desc": 'Make <b>1,000</b> cookies from clicking.'
		},
		'Clickathlon': {
			"displayName": 'Clickathlon',
			"desc": 'Make <b>100,000</b> cookies from clicking.'
		},
		'Clickolympics': {
			"displayName": 'Clickolympics',
			"desc": 'Make <b>10,000,000</b> cookies from clicking.'
		},
		'Clickorama': {
			"displayName": 'Clickorama',
			"desc": 'Make <b>1,000,000,000</b> cookies from clicking.'
		},
		'Click': {
			"displayName": 'Click',
			"desc": 'Have <b>1</b> cursor.'
		},
		'Double-click': {
			"displayName": 'Double-click',
			"desc": 'Have <b>2</b> cursors.'
		},
		'Mouse wheel': {
			"displayName": 'Mouse wheel',
			"desc": 'Have <b>50</b> cursors.'
		},
		'Of Mice and Men': {
			"displayName": 'Of Mice and Men',
			"desc": 'Have <b>100</b> cursors.'
		},
		'The Digital': {
			"displayName": 'The Digital',
			"desc": 'Have <b>200</b> cursors.'
		},
		'Just wrong': {
			"displayName": 'Just wrong',
			"desc": 'Sell a grandma.<q>I thought you loved me.</q>'
		},
		'Grandma\'s cookies': {
			"displayName": 'Grandma\'s cookies',
			"desc": 'Have <b>1</b> grandma.'
		},
		'Sloppy kisses': {
			"displayName": 'Sloppy kisses',
			"desc": 'Have <b>50</b> grandmas.'
		},
		'Retirement home': {
			"displayName": 'Retirement home',
			"desc": 'Have <b>100</b> grandmas.'
		},
		'My first farm': {
			"displayName": 'My first farm',
			"desc": 'Have <b>1</b> farm.'
		},
		'Reap what you sow': {
			"displayName": 'Reap what you sow',
			"desc": 'Have <b>50</b> farms.'
		},
		'Farm ill': {
			"displayName": 'Farm ill',
			"desc": 'Have <b>100</b> farms.'
		},
		'Production chain': {
			"displayName": 'Production chain',
			"desc": 'Have <b>1</b> factory.'
		},
		'Industrial revolution': {
			"displayName": 'Industrial revolution',
			"desc": 'Have <b>50</b> factories.'
		},
		'Global warming': {
			"displayName": 'Global warming',
			"desc": 'Have <b>100</b> factories.'
		},
		'You know the drill': {
			"displayName": 'You know the drill',
			"desc": 'Have <b>1</b> mine.'
		},
		'Excavation site': {
			"displayName": 'Excavation site',
			"desc": 'Have <b>50</b> mines.'
		},
		'Hollow the planet': {
			"displayName": 'Hollow the planet',
			"desc": 'Have <b>100</b> mines.'
		},
		'Expedition': {
			"displayName": 'Expedition',
			"desc": 'Have <b>1</b> shipment.'
		},
		'Galactic highway': {
			"displayName": 'Galactic highway',
			"desc": 'Have <b>50</b> shipments.'
		},
		'Far far away': {
			"displayName": 'Far far away',
			"desc": 'Have <b>100</b> shipments.'
		},
		'Transmutation': {
			"displayName": 'Transmutation',
			"desc": 'Have <b>1</b> alchemy lab.'
		},
		'Transmogrification': {
			"displayName": 'Transmogrification',
			"desc": 'Have <b>50</b> alchemy labs.'
		},
		'Gold member': {
			"displayName": 'Gold member',
			"desc": 'Have <b>100</b> alchemy labs.'
		},
		'A whole new world': {
			"displayName": 'A whole new world',
			"desc": 'Have <b>1</b> portal.'
		},
		'Now you\'re thinking': {
			"displayName": 'Now you\'re thinking',
			"desc": 'Have <b>50</b> portals.'
		},
		'Dimensional shift': {
			"displayName": 'Dimensional shift',
			"desc": 'Have <b>100</b> portals.'
		},
		'Time warp': {
			"displayName": 'Time warp',
			"desc": 'Have <b>1</b> time machine.'
		},
		'Alternate timeline': {
			"displayName": 'Alternate timeline',
			"desc": 'Have <b>50</b> time machines.'
		},
		'Rewriting history': {
			"displayName": 'Rewriting history',
			"desc": 'Have <b>100</b> time machines.'
		},
		'One with everything': {
			"displayName": 'One with everything',
			"desc": 'Have <b>at least 1</b> of every building.'
		},
		'Mathematician': {
			"displayName": 'Mathematician',
			"desc": 'Have at least <b>1 time machine, 2 portals, 4 alchemy labs, 8 shipments</b> and so on (128 max).'
		},
		'Base 10': {
			"displayName": 'Base 10',
			"desc": 'Have at least <b>10 time machines, 20 portals, 30 alchemy labs, 40 shipments</b> and so on.'
		},
		'Golden cookie': {
			"displayName": 'Golden cookie',
			"desc": 'Click a <b>golden cookie</b>.'
		},
		'Lucky cookie': {
			"displayName": 'Lucky cookie',
			"desc": 'Click <b>7 golden cookies</b>.'
		},
		'A stroke of luck': {
			"displayName": 'A stroke of luck',
			"desc": 'Click <b>27 golden cookies</b>.'
		},
		'Cheated cookies taste awful': {
			"displayName": 'Cheated cookies taste awful',
			"desc": 'Hack in some cookies.'
		},
		'Uncanny clicker': {
			"displayName": 'Uncanny clicker',
			"desc": 'Click really, really fast.<q>Well I\'ll be!</q>'
		},
		'Builder': {
			"displayName": 'Builder',
			"desc": 'Own <b>100</b> buildings.'
		},
		'Architect': {
			"displayName": 'Architect',
			"desc": 'Own <b>400</b> buildings.'
		},
		'Enhancer': {
			"displayName": 'Enhancer',
			"desc": 'Purchase <b>20</b> upgrades.'
		},
		'Augmenter': {
			"displayName": 'Augmenter',
			"desc": 'Purchase <b>50</b> upgrades.'
		},
		'Cookie-dunker': {
			"displayName": 'Cookie-dunker',
			"desc": 'Dunk the cookie.<q>You did it!</q>'
		},
		'Fortune': {
			"displayName": 'Fortune',
			"desc": 'Click <b>77 golden cookies</b>.<q>You should really go to bed.</q>'
		},
		'True Neverclick': {
			"displayName": 'True Neverclick',
			"desc": 'Make <b>1 million</b> cookies with <b>no</b> cookie clicks.<q>This kinda defeats the whole purpose, doesn\'t it?</q>'
		},
		'Elder nap': {
			"displayName": 'Elder nap',
			"desc": 'Appease the grandmatriarchs at least <b>once</b>.<q>we<br>are<br>eternal</q>'
		},
		'Elder slumber': {
			"displayName": 'Elder slumber',
			"desc": 'Appease the grandmatriarchs at least <b>5 times</b>.<q>our mind<br>outlives<br>the universe</q>'
		},
		'Elder': {
			"displayName": 'Elder',
			"desc": 'Own every grandma type.'
		},
		'Elder calm': {
			"displayName": 'Elder calm',
			"desc": 'Declare a covenant with the grandmatriarchs.<q>we<br>have<br>fed</q>'
		},
		'Engineer': {
			"displayName": 'Engineer',
			"desc": 'Own <b>800</b> buildings.'
		},
		'Leprechaun': {
			"displayName": 'Leprechaun',
			"desc": 'Click <b>777 golden cookies</b>.'
		},
		'Black cat\'s paw': {
			"displayName": 'Black cat\'s paw',
			"desc": 'Click <b>7777 golden cookies</b>.'
		},
		'Nihilism': {
			"displayName": 'Nihilism',
			"desc": 'Reset your game with <b>1 quadrillion</b> cookies baked.<q>There are many things<br>that need to be erased</q>'
		},
		'Galactus\' Reprimand': {
			"displayName": 'Galactus\' Reprimand',
			"desc": 'Reset your game with <b>1 quintillion</b> coo- okay no I'
		},
		'Antibatter': {
			"displayName": 'Antibatter',
			"desc": 'Have <b>1</b> antimatter condenser.'
		},
		'Quirky quarks': {
			"displayName": 'Quirky quarks',
			"desc": 'Have <b>50</b> antimatter condensers.'
		},
		'It does matter!': {
			"displayName": 'It does matter!',
			"desc": 'Have <b>100</b> antimatter condensers.'
		},
		'Upgrader': {
			"displayName": 'Upgrader',
			"desc": 'Purchase <b>100</b> upgrades.'
		},
		'Centennial': {
			"displayName": 'Centennial',
			"desc": 'Have at least <b>100 of everything</b>.'
		}
	},

	draw0: 'cookie',
	draw1: 'cookies',
	draw2: 'per seconds : ',
	draw3: 'producing ',
	draw4: 'cookie',
	draw5: 'cookies',
	draw6: ' per seconds',
	draw7: 'total : ',
};
