export type Lang = 'fr' | 'nl' | 'en';

export const T = {
  fr: {
    nav: { home: 'Accueil', about: 'À propos', piano: 'Cours de piano', awakening: 'Éveil musical', theory: 'Cours de solfège', transcription: 'Transcription', pricing: 'Tarifs', contact: 'Contact' },
    ui: {
      footerNavigation: 'Navigation',
      homepageLinkLabel: 'Retour à l’accueil',
      mobileMenuLabel: 'Ouvrir le menu de navigation',
      switchLanguageLabel: 'Changer la langue vers',
      learningTitle: 'Ce que vous apprendrez',
      portraitAlt: 'Portrait d’Ivana Mailleux',
      homePortraitAlt: 'Ivana Mailleux, professeure de piano à Rixensart',
      copyright: 'Ivana Mailleux, Cours de Piano à Rixensart',
      structuredDataDescription: 'Cours de piano, solfège, éveil musical et transcription musicale à Rixensart.',
      brandText: 'Ivana Mailleux',
    },
    home: {
      heroTitle: 'Cours de Piano à Rixensart', heroSubtitle: 'Brabant-Wallon · Professeure passionnée',
      heroDesc: 'Découvrez la joie de la musique avec Ivana Mailleux ! Piano, solfège et éveil musical pour enfants et adultes.',
      bookBtn: '📞 Réserver un cours', discoverBtn: '✨ Découvrir les cours',
      servicesTitle: 'Mes Services',
      pianoTitle: 'Cours de Piano', pianoDesc: 'Pour tous les amateurs de musique, de 6 ans à l\'âge adulte. Répertoire classique ou moderne.',
      awakeningTitle: 'Éveil Musical', awakeningDesc: 'Pour les enfants de 4 à 7 ans. Découverte joyeuse de la musique à travers le jeu.',
      theoryTitle: 'Cours de Solfège', theoryDesc: 'Développez votre sens du rythme et apprenez à lire et chanter la musique.',
      transcriptionTitle: 'Transcription Musicale', transcriptionDesc: 'Transcriptions et adaptations précises de morceaux selon votre niveau.',
      inclusiveTitle: 'Enseignement inclusif 💙',
      inclusiveDesc: 'Après une spécialisation en musicothérapie et une formation en braille musical, j\'accueille avec plaisir les élèves aveugles, malvoyants et aux besoins spécifiques.',
      meetTitle: 'Rencontrez Ivana', meetDesc: 'Pianiste de formation classique, professeure passionnée et musicienne aux multiples projets.',
      meetBtn: 'En savoir plus →', pricingPreviewTitle: 'Aperçu des tarifs', pricingBtn: 'Voir tous les tarifs →',
      learnMore: 'En savoir plus →'
    },
    about: {
      title: 'À propos', subtitle: 'Pianiste & Professeure',
      bio: 'Pianiste de formation classique et professeure privée depuis de nombreuses années, j\'ai enseigné au sein d\'une ASBL avec les Ateliers Musicaux à Namur, et je donne également des cours, leçons et ateliers ponctuels avec les Jeunesses Musicales de Bruxelles.\n\nAprès avoir complété une spécialisation de deux ans en musicothérapie et une formation en braille musical, je suis ravie d\'accueillir des élèves aveugles et malvoyants, ainsi que des élèves aux besoins spécifiques.\n\nJe m\'implique dans divers projets musicaux allant de la musique celtique au pop-folk avec le groupe d\'Eamonn Tobin, ainsi qu\'un groupe de reprises de dessins animés Pyjaman et la chanson française avec Cassiof.\n\nJ\'adore enseigner — il y a quelque chose de merveilleux dans le fait de pouvoir transmettre sa passion. Je porte une attention particulière à adapter mes leçons pour qu\'elles soient variées et motivantes pour mes élèves.',
      projectsTitle: 'Projets musicaux',
      projects: ['🍀 Celtic & pop-folk avec Eamonn Tobin', '🎬 Pyjaman — reprises de dessins animés', '🎭 Cassiof — chanson française'],
      specialtiesTitle: 'Spécialités',
      specialties: ['Musicothérapie (2 ans de spécialisation)', 'Braille musical', 'Enseignement inclusif', 'Cours à Rixensart, Brabant-Wallon']
    },
    piano: {
      title: 'Cours de Piano', subtitle: 'Pour tous les niveaux, dès 6 ans', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'Ce cours s\'adresse à tous les amateurs de musique, jeunes et moins jeunes, du niveau débutant à intermédiaire.\n\nSelon les attentes de l\'élève, nous pouvons choisir de travailler le piano classique — ce qui implique l\'apprentissage du solfège pouvant être intégré aux cours — et/ou aborder un répertoire plus actuel avec des morceaux choisis selon les goûts de l\'élève.\n\nChacun est invité à proposer une liste de morceaux qu\'il souhaite travailler. Ceux-ci seront adaptés en fonction du niveau.',
      features: ['Débutants bienvenus dès 6 ans', 'Adultes bienvenus à tout âge', 'Répertoire classique ou moderne', 'Adapté au niveau de chaque élève', 'Élèves à besoins spécifiques accueillis'],
      ctaBtn: 'Réserver un cours', offerBtn: '💰 Tarifs'
    },
    awakening: {
      title: 'Éveil Musical', subtitle: 'Pour les enfants de 4 à 7 ans', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'Ce cours s\'adresse aux enfants de 4 à 7 ans. À travers le jeu et l\'apprentissage de chansons enfantines, nous aborderons en douceur différents concepts musicaux : la durée, la hauteur et l\'intensité du son, le nom des notes, le rythme…\n\nLes enfants pourront découvrir et expérimenter les différentes familles d\'instruments à travers la pratique directe ou des jeux interactifs.\n\nCe cours constitue une bonne introduction à la musique et stimulera l\'intérêt et la créativité de votre enfant.',
      features: ['Enfants de 4 à 7 ans', 'Apprentissage par le jeu', 'Découverte des familles d\'instruments', 'Stimule la créativité', 'Parfaite introduction à la musique'],
      ctaBtn: 'Inscrire mon enfant', offerBtn: '💰 Tarifs'
    },
    theory: {
      title: 'Cours de Solfège', subtitle: 'Apprenez à lire et chanter la musique', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'Vous souhaitez développer votre sens du rythme ? Apprendre à lire et chanter la musique ?\n\nVous voulez acquérir le vocabulaire musical pour pratiquer un instrument plus tard, ou simplement par curiosité ?\n\nVous souhaitez travailler sur un thème spécifique ? Ce cours est adaptable selon vos besoins. Il peut également servir d\'introduction ou de complément aux cours de piano.',
      features: ['Tous âges et niveaux', 'Rythme et lecture musicale', 'Adapté à vos objectifs', 'Complément idéal au piano'],
      ctaBtn: 'Réserver un cours', offerBtn: '💰 Tarifs'
    },
    transcription: {
      title: 'Transcription Musicale', subtitle: 'Arrangements sur mesure',
      desc: 'Vous souhaitez une transcription en solo ? Vous voulez apprendre un morceau spécifique, mais vous ne trouvez pas de partition, ou pas pour votre instrument ?\n\nVous voulez jouer un morceau connu, mais adapté à votre niveau ?\n\nJe vous propose des transcriptions musicales précises et/ou des adaptations de morceaux selon votre niveau.\n\nLes prix dépendent de la difficulté du morceau, de sa longueur et du type d\'arrangement réalisé. N\'hésitez pas à me contacter pour un devis.',
      features: ['Transcriptions pour tous instruments', 'Adaptations selon votre niveau', 'Morceaux introuvables en partition', 'Devis personnalisé'],
      ctaBtn: 'Demander un devis', quoteNote: '💡 Prix sur devis — contactez-moi pour un tarif personnalisé.', offerTitle: 'Ce que j\'offre'
    },
    pricing: {
      title: 'Tarifs', subtitle: 'Des cours adaptés à tous les budgets',
      note1: '* Aucun frais pour les annulations avant 24h. Tout cours annulé dans les 24h sera dû.',
      note2: '** Recommandé pour les jeunes enfants.',
      transcriptionNote: 'Transcription musicale : prix sur devis selon la difficulté, la longueur et le type d\'arrangement.',
      ctaBtn: 'Réserver un cours',
      plans: [
        { name: 'Abonnement trimestriel', badge: 'Populaire', slots: 'Avant 16h et après 19h', lessons: '10 cours fixes par trimestre', price: '67€', unit: '/heure*', color: '#ec407a', textColor: 'white' },
        { name: 'Cours à la carte', badge: '', slots: 'Avant 16h et après 19h', lessons: 'Sans engagement', price: '61€', unit: '/heure', color: '#42a5f5', textColor: 'white' },
        { name: 'Abonnement trimestriel', badge: 'Jeunes enfants **', slots: 'Entre 16h–19h et mercredi 12h–19h', lessons: '12 ou 13 cours par trimestre (selon calendrier scolaire)', price: '37€', unit: '/demi-heure**', color: '#f4d03f', textColor: '#333' }
      ]
    },
    contact: {
      title: 'Contact', subtitle: 'Réservez votre premier cours !',
      nameLbl: 'Nom complet *', phoneLbl: 'Téléphone *', emailLbl: 'Email', subjectLbl: 'Sujet *', messageLbl: 'Votre message *',
      namePh: 'Votre nom et prénom', phonePh: '+32 ...', emailPh: 'votre@email.com', messagePh: 'Dites-moi ce que vous recherchez...',
      subjects: ['Cours de piano', 'Éveil musical', 'Cours de solfège', 'Transcription musicale', 'Autre'],
      submitBtn: 'Envoyer le message', successMsg: 'Merci ! Votre message a bien été envoyé. Je vous répondrai très bientôt ! 🎵',
      required: '* Champs obligatoires'
    }
  },
  nl: {
    nav: { home: 'Home', about: 'Over mij', piano: 'Pianolessen', awakening: 'Muzikale ontdekking', theory: 'Solfège', transcription: 'Transcriptie', pricing: 'Prijzen', contact: 'Contact' },
    ui: {
      footerNavigation: 'Navigatie',
      homepageLinkLabel: 'Ga naar de homepagina',
      mobileMenuLabel: 'Open het navigatiemenu',
      switchLanguageLabel: 'Verander de taal naar',
      learningTitle: 'Wat je zult leren',
      portraitAlt: 'Portret van Ivana Mailleux',
      homePortraitAlt: 'Ivana Mailleux, pianolerares in Rixensart',
      copyright: 'Ivana Mailleux, Pianolessen in Rixensart',
      structuredDataDescription: 'Pianolessen, solfège, muzikale ontdekking en transcripties in Rixensart.',
      brandText: 'Ivana Mailleux',
    },
    home: {
      heroTitle: 'Pianolessen in Rixensart', heroSubtitle: 'Brabant-Wallon · Gepassioneerde lerares',
      heroDesc: 'Ontdek de vreugde van muziek met Ivana Mailleux! Piano, solfège en muzikale ontdekking voor kinderen en volwassenen.',
      bookBtn: '📞 Een les boeken', discoverBtn: '✨ De lessen ontdekken',
      servicesTitle: 'Mijn Diensten',
      pianoTitle: 'Pianolessen', pianoDesc: 'Voor alle muziekliefhebbers, van 6 jaar tot volwassenen. Klassiek of modern repertoire.',
      awakeningTitle: 'Muzikale ontdekking', awakeningDesc: 'Voor kinderen van 4 tot 7 jaar. Speelse ontdekking van muziek.',
      theoryTitle: 'Solfège', theoryDesc: 'Ontwikkel uw gevoel voor ritme en leer muziek lezen en zingen.',
      transcriptionTitle: 'Muzikale transcriptie', transcriptionDesc: 'Nauwkeurige transcripties en aanpassingen op maat van uw niveau.',
      inclusiveTitle: 'Inclusief onderwijs 💙',
      inclusiveDesc: 'Gespecialiseerd in muziektherapie en opgeleid in muzikaal Braille, verwelkom ik blinde, slechtziende leerlingen en leerlingen met speciale noden.',
      meetTitle: 'Ontmoet Ivana', meetDesc: 'Klassiek geschoold pianiste, gepassioneerde lerares en muzikante bij diverse projecten.',
      meetBtn: 'Meer weten →', pricingPreviewTitle: 'Prijsoverzicht', pricingBtn: 'Alle prijzen bekijken →',
      learnMore: 'Meer weten →'
    },
    about: {
      title: 'Over mij', subtitle: 'Pianiste & Lerares',
      bio: 'Als klassiek geschoold pianiste en privélerares met vele jaren ervaring heb ik les gegeven bij de VZW Ateliers Musicaux in Namen, en ik geef ook cursussen, lessen en workshops bij Jeunesses Musicales de Bruxelles.\n\nNa een tweejarige specialisatie in muziektherapie en een opleiding in muzikaal Braille, heet ik blinde en slechtziende leerlingen van harte welkom, evenals leerlingen met speciale noden.\n\nIk ben betrokken bij diverse muzikale projecten: van Keltische muziek tot pop-folk met de band van Eamonn Tobin, de tekenfilm-coverband Pyjaman en Franse chanson met Cassiof.\n\nLesgeven is mijn passie — er is iets bijzonders in het doorgeven van je liefde voor muziek. Ik besteed bijzondere aandacht aan het aanpassen van mijn lessen zodat ze gevarieerd en motiverend zijn voor elke leerling.',
      projectsTitle: 'Muzikale projecten',
      projects: ['🍀 Keltisch & pop-folk met Eamonn Tobin', '🎬 Pyjaman — tekenfilm-covers', '🎭 Cassiof — Franse chanson'],
      specialtiesTitle: 'Specialiteiten',
      specialties: ['Muziektherapie (2 jaar specialisatie)', 'Muzikaal Braille', 'Inclusief onderwijs', 'Lessen in Rixensart, Brabant-Wallon']
    },
    piano: {
      title: 'Pianolessen', subtitle: 'Voor alle niveaus, vanaf 6 jaar', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'Deze cursus is bedoeld voor alle muziekliefhebbers, jong en oud, van beginner tot gevorderd.\n\nAfhankelijk van de verwachtingen van de leerling, kunnen we klassiek piano studeren — waarbij solfège kan worden geïntegreerd — en/of een hedendaags repertoire aanpakken met stukken gekozen naar de smaak van de leerling.\n\nIedereen wordt aangemoedigd om een lijst met gewenste nummers voor te stellen. Deze worden aangepast aan het niveau van de leerling.',
      features: ['Beginners welkom vanaf 6 jaar', 'Volwassenen welkom op elke leeftijd', 'Klassiek of modern repertoire', 'Aangepast aan elk niveau', 'Leerlingen met speciale noden welkom'],
      ctaBtn: 'Een les boeken', offerBtn: '💰 Prijzen'
    },
    awakening: {
      title: 'Muzikale ontdekking', subtitle: 'Voor kinderen van 4 tot 7 jaar', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'Deze cursus is bestemd voor kinderen van 4 tot 7 jaar. Door middel van spel en het leren van kinderliedjes, benaderen we op een zachte manier verschillende muzikale concepten: duur, toonhoogte en intensiteit van het geluid, de namen van de noten, ritme…\n\nKinderen ontdekken de verschillende families van instrumenten via directe oefening of interactieve spelletjes.\n\nDeze cursus is een uitstekende inleiding tot muziek en stimuleert de interesse en creativiteit van uw kind.',
      features: ['Kinderen van 4 tot 7 jaar', 'Leren door spelen', 'Ontdekking van instrumenten', 'Stimuleert creativiteit', 'Perfecte inleiding tot muziek'],
      ctaBtn: 'Mijn kind inschrijven', offerBtn: '💰 Prijzen'
    },
    theory: {
      title: 'Solfège', subtitle: 'Leer muziek lezen en zingen', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'Wilt u uw gevoel voor ritme ontwikkelen? Muziek leren lezen en zingen?\n\nWilt u de muzikale woordenschat verwerven om later een instrument te bespelen, of gewoon uit nieuwsgierigheid?\n\nWilt u aan een specifiek thema werken? Deze cursus is aanpasbaar aan uw behoeften. Hij kan ook dienen als inleiding of aanvulling op pianolessen.',
      features: ['Alle leeftijden en niveaus', 'Ritme en muzieklezing', 'Aangepast aan uw doelen', 'Ideale aanvulling op piano'],
      ctaBtn: 'Een les boeken', offerBtn: '💰 Prijzen'
    },
    transcription: {
      title: 'Muzikale transcriptie', subtitle: 'Maatwerk arrangementen',
      desc: 'Wilt u een solotranscriptie? Wilt u een specifiek nummer leren, maar kunt u geen partituur vinden, of niet voor uw instrument?\n\nWilt u een bekend nummer spelen, maar aangepast aan uw niveau?\n\nIk bied u nauwkeurige muzikale transcripties en/of aanpassingen van nummers aan op maat van uw niveau.\n\nDe prijzen zijn afhankelijk van de moeilijkheidsgraad, de lengte en het type arrangement. Neem gerust contact op voor een offerte.',
      features: ['Transcripties voor alle instrumenten', 'Aanpassingen op maat', 'Partituren die niet bestaan', 'Persoonlijke offerte'],
      ctaBtn: 'Een offerte vragen', quoteNote: '💡 Prijs op offerte — neem contact op voor een persoonlijke prijs.', offerTitle: 'Wat ik aanbied'
    },
    pricing: {
      title: 'Prijzen', subtitle: 'Lessen voor elk budget',
      note1: '* Geen kosten bij annulering meer dan 24u van tevoren. Elke les binnen de 24u geannuleerd wordt aangerekend.',
      note2: '** Aanbevolen voor jonge kinderen.',
      transcriptionNote: 'Muzikale transcriptie: prijs op offerte, afhankelijk van de moeilijkheid, lengte en type arrangement.',
      ctaBtn: 'Een les boeken',
      plans: [
        { name: 'Driemaandelijks abonnement', badge: 'Populair', slots: 'Vóór 16u en na 19u', lessons: '10 vaste lessen per trimester', price: '67€', unit: '/uur*', color: '#ec407a', textColor: 'white' },
        { name: 'À la carte', badge: '', slots: 'Vóór 16u en na 19u', lessons: 'Zonder engagement', price: '61€', unit: '/uur', color: '#42a5f5', textColor: 'white' },
        { name: 'Driemaandelijks abonnement', badge: 'Jonge kinderen **', slots: 'Tussen 16u–19u en woensdag 12u–19u', lessons: '12 of 13 lessen per trimester (volgens schoolkalender)', price: '37€', unit: '/half uur**', color: '#f4d03f', textColor: '#333' }
      ]
    },
    contact: {
      title: 'Contact', subtitle: 'Boek uw eerste les!',
      nameLbl: 'Volledige naam *', phoneLbl: 'Telefoon *', emailLbl: 'E-mail', subjectLbl: 'Onderwerp *', messageLbl: 'Uw bericht *',
      namePh: 'Uw naam en voornaam', phonePh: '+32 ...', emailPh: 'uw@email.com', messagePh: 'Vertel me wat u zoekt...',
      subjects: ['Pianolessen', 'Muzikale ontdekking', 'Solfège', 'Muzikale transcriptie', 'Andere'],
      submitBtn: 'Bericht verzenden', successMsg: 'Bedankt! Uw bericht is ontvangen. Ik neem zo snel mogelijk contact op! 🎵',
      required: '* Verplichte velden'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', piano: 'Piano Lessons', awakening: 'Musical Awakening', theory: 'Music Theory', transcription: 'Transcription', pricing: 'Pricing', contact: 'Contact' },
    ui: {
      footerNavigation: 'Navigation',
      homepageLinkLabel: 'Go to the homepage',
      mobileMenuLabel: 'Open the navigation menu',
      switchLanguageLabel: 'Switch language to',
      learningTitle: 'What you will learn',
      portraitAlt: 'Portrait of Ivana Mailleux',
      homePortraitAlt: 'Ivana Mailleux, piano teacher in Rixensart',
      copyright: 'Ivana Mailleux, Piano Lessons in Rixensart',
      structuredDataDescription: 'Piano lessons, music theory, musical awakening and transcription in Rixensart.',
      brandText: 'Ivana Mailleux',
    },
    home: {
      heroTitle: 'Piano Lessons in Rixensart', heroSubtitle: 'Brabant-Wallon · Passionate Teacher',
      heroDesc: 'Discover the joy of music with Ivana Mailleux! Piano, music theory and musical awakening for children and adults.',
      bookBtn: '📞 Book a Lesson', discoverBtn: '✨ Discover the Courses',
      servicesTitle: 'My Services',
      pianoTitle: 'Piano Lessons', pianoDesc: 'For all music lovers, from age 6 to adults. Classical or modern repertoire.',
      awakeningTitle: 'Musical Awakening', awakeningDesc: 'For children aged 4 to 7. A joyful introduction to music through play.',
      theoryTitle: 'Music Theory', theoryDesc: 'Develop your sense of rhythm and learn to read and sing music.',
      transcriptionTitle: 'Musical Transcription', transcriptionDesc: 'Precise transcriptions and adaptations of pieces tailored to your level.',
      inclusiveTitle: 'Inclusive Teaching 💙',
      inclusiveDesc: 'Specialised in music therapy and trained in musical Braille, I warmly welcome blind, partially-sighted and students with special needs.',
      meetTitle: 'Meet Ivana', meetDesc: 'Classically trained pianist, passionate teacher and musician across many projects.',
      meetBtn: 'Learn more →', pricingPreviewTitle: 'Pricing Overview', pricingBtn: 'See all pricing →',
      learnMore: 'Learn more →'
    },
    about: {
      title: 'About', subtitle: 'Pianist & Teacher',
      bio: 'A classically trained pianist and private teacher for many years, I have taught as part of an ASBL with Ateliers Musicaux in Namur, and I also give courses, lessons and workshops on an ad hoc basis with Jeunesses Musicales de Bruxelles.\n\nAfter completing a two-year specialisation in music therapy and training in musical Braille, I\'m delighted to welcome blind and partially-sighted students, as well as students with special needs.\n\nI\'m involved in a variety of musical projects ranging from Celtic music to pop-folk with Eamonn Tobin\'s band, as well as a cartoon cover band Pyjaman and French chanson with Cassiof.\n\nI love teaching — there\'s something wonderful about being able to pass on your passion. I pay particular attention to adapting my lessons so that they are varied and motivating for my students.',
      projectsTitle: 'Musical Projects',
      projects: ['🍀 Celtic & pop-folk with Eamonn Tobin', '🎬 Pyjaman — cartoon covers', '🎭 Cassiof — French chanson'],
      specialtiesTitle: 'Specialities',
      specialties: ['Music Therapy (2-year specialisation)', 'Musical Braille', 'Inclusive teaching', 'Lessons in Rixensart, Brabant-Wallon']
    },
    piano: {
      title: 'Piano Lessons', subtitle: 'For all levels, from age 6', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'This course is for all music lovers, young and old, from beginner to intermediate level.\n\nDepending on the student\'s expectations, we can choose to work on classical piano — which requires learning music theory that can be integrated into piano lessons — and/or approach a more current repertoire and work on pieces chosen according to the student\'s tastes.\n\nEveryone is encouraged to come up with a list of songs they want to practise. These will be adapted according to the level of the student.',
      features: ['Beginners welcome from age 6', 'Adults welcome at any age', 'Classical or modern repertoire', 'Adapted to each student\'s level', 'Students with special needs welcome'],
      ctaBtn: 'Book a Lesson', offerBtn: '💰 Pricing'
    },
    awakening: {
      title: 'Musical Awakening', subtitle: 'For children aged 4 to 7', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'This course is for children aged 4 to 7. Through playing and learning children\'s songs, we will gently approach different musical concepts such as the duration, pitch and intensity of the sound, the name of the notes, rhythm…\n\nChildren will be able to discover and experience the different families of instruments through direct practice or through interactive games.\n\nThis class provides a good introduction to music and will stimulate your child\'s interest and creativity.',
      features: ['Children aged 4 to 7', 'Learning through play', 'Discovering instrument families', 'Stimulates creativity', 'Perfect introduction to music'],
      ctaBtn: 'Enrol my child', offerBtn: '💰 Pricing'
    },
    theory: {
      title: 'Music Theory', subtitle: 'Learn to read and sing music', location: '📍 Rixensart, Brabant-Wallon',
      desc: 'Do you want to develop your sense of rhythm? Learn to read and sing music?\n\nDo you want to acquire the musical vocabulary to allow you to practise an instrument later, or simply out of curiosity?\n\nDo you want to work on a specific theme? This course is adaptable according to your needs. It can also serve as an introduction or a complement to piano lessons.',
      features: ['All ages and levels', 'Rhythm and music reading', 'Adapted to your goals', 'Ideal complement to piano'],
      ctaBtn: 'Book a Lesson', offerBtn: '💰 Pricing'
    },
    transcription: {
      title: 'Musical Transcription', subtitle: 'Bespoke arrangements',
      desc: 'Do you want a solo transcription? Want to learn a specific song, but can\'t find a score, or not for your instrument?\n\nDo you want to play a well-known song, but adapted to your level?\n\nI offer you precise musical transcriptions and/or adaptations of songs according to your level.\n\nThe prices depend on the difficulty of the piece, its length and the type of arrangement made. Do not hesitate to contact me for a quote.',
      features: ['Transcriptions for all instruments', 'Adaptations to your level', 'Scores that don\'t exist yet', 'Personalised quote'],
      ctaBtn: 'Request a Quote', quoteNote: '💡 Price on quote — contact me for a personalised price.', offerTitle: 'What I offer'
    },
    pricing: {
      title: 'Pricing', subtitle: 'Lessons for every budget',
      note1: '* No fees will be charged for cancellations before 24 hours, but any course cancelled within 24 hours will be due.',
      note2: '** Recommended for young children.',
      transcriptionNote: 'Musical transcription: price on quote, depending on the difficulty, length and type of arrangement.',
      ctaBtn: 'Book a Lesson',
      plans: [
        { name: 'Quarterly Subscription', badge: 'Popular', slots: 'Before 4pm and after 7pm', lessons: '10 fixed lessons per term', price: '67€', unit: '/hour*', color: '#ec407a', textColor: 'white' },
        { name: 'À la carte', badge: '', slots: 'Before 4pm and after 7pm', lessons: 'No commitment', price: '61€', unit: '/hour', color: '#42a5f5', textColor: 'white' },
        { name: 'Quarterly Subscription', badge: 'Young children **', slots: 'Between 4pm–7pm and Wednesday 12pm–7pm', lessons: '12 or 13 lessons per term (depending on school calendar)', price: '37€', unit: '/half hour**', color: '#f4d03f', textColor: '#333' }
      ]
    },
    contact: {
      title: 'Contact', subtitle: 'Book your first lesson!',
      nameLbl: 'Full Name *', phoneLbl: 'Phone *', emailLbl: 'Email', subjectLbl: 'Subject *', messageLbl: 'Your Message *',
      namePh: 'Your full name', phonePh: '+32 ...', emailPh: 'your@email.com', messagePh: 'Tell me what you\'re looking for...',
      subjects: ['Piano Lessons', 'Musical Awakening', 'Music Theory', 'Musical Transcription', 'Other'],
      submitBtn: 'Send Message', successMsg: 'Thank you! Your message has been sent. I\'ll get back to you very soon! 🎵',
      required: '* Required fields'
    }
  }
} as const;

export type PageKey = 'home' | 'about' | 'piano' | 'awakening' | 'theory' | 'transcription' | 'pricing' | 'contact';
export const NAV_KEYS: PageKey[] = ['home', 'about', 'piano', 'awakening', 'theory', 'transcription', 'pricing', 'contact'];
export const NAV_COLORS = ['#ec407a', '#ff9800', '#42a5f5', '#f4d03f', '#2e7d32', '#9c27b0', '#ef5350', '#00bcd4'];
export const NAV_TEXT = ['white', 'white', 'white', '#333', 'white', 'white', 'white', 'white'];
