const wordList = [
    {
      word: "guitar",
      hint: "A stringed instrument.",
    },
    {
      word: "oxygen",
      hint: "Essential gas for life.",
    },
    {
      word: "mountain",
      hint: "A high natural elevation.",
    },
    {
      word: "painting",
      hint: "An art form using colors.",
    },
    {
      word: "astronomy",
      hint: "Study of stars and planets.",
    },
    {
      word: "football",
      hint: "A popular ball sport.",
    },
    {
      word: "chocolate",
      hint: "A treat made from cocoa.",
    },
    {
      word: "butterfly",
      hint: "An insect with colorful wings.",
    },
    {
      word: "history",
      hint: "Study of past events.",
    },
    {
      word: "pizza",
      hint: "A round dish with toppings.",
    },
    {
      word: "jazz",
      hint: "A genre of improvisational music.",
    },
    {
      word: "camera",
      hint: "Captures images or video.",
    },
    {
      word: "diamond",
      hint: "A precious gemstone.",
    },
    {
      word: "adventure",
      hint: "An exciting experience.",
    },
    {
      word: "science",
      hint: "Study of the natural world.",
    },
    {
      word: "bicycle",
      hint: "A vehicle with two wheels.",
    },
    {
      word: "sunset",
      hint: "Sun disappearing below the horizon.",
    },
    {
      word: "coffee",
      hint: "A popular caffeinated drink.",
    },
    {
      word: "dance",
      hint: "Rhythmic body movement.",
    },
    {
      word: "galaxy",
      hint: "A system of stars.",
    },
    {
      word: "orchestra",
      hint: "A large musical group.",
    },
    {
      word: "volcano",
      hint: "An erupting mountain.",
    },
    {
      word: "novel",
      hint: "A long fictional story.",
    },
    {
      word: "sculpture",
      hint: "Three-dimensional art.",
    },
    {
      word: "symphony",
      hint: "A full orchestra piece.",
    },
    {
      word: "architecture",
      hint: "Building design and construction.",
    },
    {
      word: "ballet",
      hint: "A classical dance form.",
    },
    {
      word: "astronaut",
      hint: "A space traveler.",
    },
    {
      word: "waterfall",
      hint: "Water cascading from a height.",
    },
    {
      word: "technology",
      hint: "Application of scientific knowledge.",
    },
    {
      word: "rainbow",
      hint: "A colorful arc in the sky.",
    },
    {
      word: "universe",
      hint: "Everything in space and time.",
    },
    {
      word: "piano",
      hint: "A musical keyboard instrument.",
    },
    {
      word: "vacation",
      hint: "Time for relaxation or travel.",
    },
    {
      word: "rainforest",
      hint: "A dense, tropical forest.",
    },
    {
      word: "theater",
      hint: "Place for stage performances.",
    },
    {
      word: "telephone",
      hint: "Device for voice communication.",
    },
    {
      word: "language",
      hint: "A system of communication.",
    },
    {
      word: "desert",
      hint: "A dry, arid area.",
    },
    {
      word: "sunflower",
      hint: "A tall yellow flower.",
    },
    {
      word: "fantasy",
      hint: "Fiction involving magic.",
    },
    {
      word: "telescope",
      hint: "Instrument for viewing distant objects.",
    },
    {
      word: "breeze",
      hint: "A gentle wind.",
    },
    {
      word: "oasis",
      hint: "A fertile spot in the desert.",
    },
    {
      word: "photography",
      hint: "Art of capturing images.",
    },
    {
      word: "safari",
      hint: "A wildlife expedition.",
    },
    {
      word: "planet",
      hint: "A celestial body orbiting a star.",
    },
    {
      word: "river",
      hint: "A flowing body of water.",
    },
    {
      word: "tropical",
      hint: "Relating to warm climates.",
    },
    {
      word: "mysterious",
      hint: "Difficult to understand or explain.",
    },
    {
      word: "enigma",
      hint: "A puzzling mystery.",
    },
    {
      word: "paradox",
      hint: "A self-contradictory situation.",
    },
    {
      word: "puzzle",
      hint: "A brain-teasing challenge.",
    },
    {
      word: "whisper",
      hint: "To speak softly.",
    },
    {
      word: "shadow",
      hint: "A dark shape cast by light.",
    },
    {
      word: "secret",
      hint: "Something hidden or unknown.",
    },
    {
      word: "curiosity",
      hint: "Desire to learn.",
    },
    {
      word: "unpredictable",
      hint: "Not easily foreseen.",
    },
    {
      word: "obfuscate",
      hint: "To make unclear or confusing.",
    },
    {
      word: "unveil",
      hint: "To reveal something hidden.",
    },
    {
      word: "illusion",
      hint: "A deceptive appearance.",
    },
    {
      word: "moonlight",
      hint: "Light from the moon.",
    },
    {
      word: "vibrant",
      hint: "Full of energy and life.",
    },
    {
      word: "nostalgia",
      hint: "Longing for the past.",
    },
    {
      word: "brilliant",
      hint: "Exceptionally clever or bright.",
    },
    {
      word: "crystal",
      hint: "A solid with a clear structure.",
    },
    {
      word: "nebula",
      hint: "A cloud of gas in space.",
    },
    {
      word: "whale",
      hint: "A large marine mammal.",
    },
    {
      word: "volleyball",
      hint: "A sport with a net and ball.",
    },
    {
      word: "carnival",
      hint: "A festive event with parades.",
    },
    {
      word: "maple",
      hint: "A type of tree with sap.",
    },
    {
      word: "icicle",
      hint: "Hanging ice formed by freezing water.",
    },
    {
      word: "harvest",
      hint: "Gathering crops.",
    },
    {
      word: "tiger",
      hint: "A striped wild cat.",
    },
    {
      word: "firefly",
      hint: "A bioluminescent insect.",
    },
    {
      word: "pyramid",
      hint: "A triangular-shaped structure.",
    },
    {
      word: "avalanche",
      hint: "A snow mass falling down a slope.",
    },
    {
      word: "galaxy",
      hint: "A massive system of stars.",
    },
    {
      word: "comet",
      hint: "A celestial object with a glowing tail.",
    },
    {
      word: "chameleon",
      hint: "A lizard that changes color.",
    },
    {
      word: "pirate",
      hint: "A sea robber.",
    },
    {
      word: "horizon",
      hint: "Where the sky meets the earth.",
    },
    {
      word: "prism",
      hint: "A glass object that refracts light.",
    },
    {
      word: "reflection",
      hint: "Light bouncing off a surface.",
    },
    {
      word: "geyser",
      hint: "A hot water eruption.",
    },
    {
      word: "echo",
      hint: "Sound reflected back.",
    },
    {
      word: "tornado",
      hint: "A violent spinning storm.",
    },
    {
      word: "earthquake",
      hint: "Ground shaking from tectonic movement.",
    },
    {
      word: "fossil",
      hint: "Preserved remains of ancient life.",
    },
    {
      word: "phoenix",
      hint: "A mythical bird reborn from ashes.",
    },
    { 
      word: "ant", 
      hint: "A small insect that lives in colonies." 
    },
    { 
        word: "apple", 
        hint: "A fruit that is often red or green." 
    },
    { 
        word: "arrow", 
        hint: "A pointed symbol or weapon." 
    },
    { 
        word: "anchor", 
        hint: "A device to hold ships in place." 
    },
    { 
        word: "bacon", 
        hint: "A meat made from pork." 
    },
    { 
        word: "barn", 
        hint: "A large building for storing crops or animals." 
    },
    { 
        word: "beach", 
        hint: "A sandy area by the ocean." },
    { 
        word: "beard", 
        hint: "Facial hair grown on the chin." },
    { 
        word: "bell", 
        hint: "A hollow object that makes sound when struck." },
    { 
        word: "book", 
        hint: "A collection of written pages bound together." },
    { 
        word: "cake", 
        hint: "A sweet dessert made from flour and sugar." },
    { 
        word: "cat", 
        hint: "A small domesticated feline." },
    { 
        word: "chef", 
        hint: "A professional cook." },
    { 
        word: "cloud",
        hint: "A mass of water vapor in the sky." },
    { 
        word: "corn", 
        hint: "A yellow vegetable grown in fields." },
    { 
        word: "crab", 
        hint: "A crustacean with pincers." },
    { 
        word: "deer", 
        hint: "A wild animal with antlers." },
    { 
        word: "drum", 
        hint: "A musical instrument hit with sticks or hands." },
    { 
        word: "eagle", 
        hint: "A bird of prey." },
    { 
        word: "egg", 
        hint: "Laid by birds and often eaten for breakfast." },
    { 
        word: "fire", 
        hint: "The result of combustion." },
    { 
        word: "frog", 
        hint: "A small amphibian that hops." },
    { 
        word: "globe", 
        hint: "A model of the Earth." },
    { 
        word: "goat", 
        hint: "An animal often kept on farms." },
    { 
        word: "golf", 
        hint: "A sport involving a small ball and clubs." },
    { 
        word: "grape", 
        hint: "A small fruit often used to make wine." },
    { 
        word: "hat", 
        hint: "A head covering." },
    { 
        word: "heart", 
        hint: "The organ that pumps blood." },
    { 
        word: "island", 
        hint: "Land surrounded by water." },
    { 
        word: "jacket",
        hint: "A piece of outerwear worn for warmth." },
    { 
        word: "kite", 
        hint: "A toy flown in the wind." },
    { 
        word: "key", 
        hint: "A tool used to open locks." },
    { 
        word: "lemon", 
        hint: "A sour yellow fruit." },
    { 
        word: "lion", 
        hint: "A large wild cat known as the king of the jungle." },
    { 
        word: "lock", 
        hint: "A device used to secure things." },
    { 
        word: "monkey", 
        hint: "A primate known for swinging from trees." },
    { 
        word: "mug", 
        hint: "A large cup." },
    { 
        word: "nail", 
        hint: "A small metal spike for fastening." },
    { 
        word: "nest", 
        hint: "A bird's home." },
    { 
        word: "onion", 
        hint: "A vegetable that can make you cry." },
    { 
        word: "ocean", 
        hint: "A large body of saltwater." },
    { 
        word: "owl", 
        hint: "A nocturnal bird of prey." },
    { 
        word: "panda", 
        hint: "A black-and-white bear from China." },
    { 
        word: "pen", 
        hint: "A tool for writing with ink." },
    { 
        word: "pearl", 
        hint: "A gem formed inside a shell." },
    { 
        word: "queen", 
        hint: "A female ruler." },
    { 
        word: "quill", 
        hint: "A feather used as a writing tool." },
    { 
        word: "rabbit", 
        hint: "A small animal with long ears." },
    { 
        word: "radio", 
        hint: "A device that plays audio broadcasts." },
    { 
        word: "rain", 
        hint: "Water that falls from the sky." },
    { 
        word: "rose", 
        hint: "A fragrant flower." },
    { 
        word: "rope", 
        hint: "A strong cord used for tying." },
    { 
        word: "sand", 
        hint: "Tiny grains found on beaches." },
    { 
        word: "ship", 
        hint: "A large water vessel." },
    { 
        word: "snake", 
        hint: "A long, legless reptile." },
    { 
        word: "soap", 
        hint: "Used to clean skin." },
    { 
        word: "spoon", 
        hint: "A utensil for eating soups or cereals." },
    { 
        word: "star", 
        hint: "A bright celestial body." },
    { 
        word: "tent", 
        hint: "A portable shelter made of fabric." },
    { 
        word: "tooth", 
        hint: "Found in the mouth, used for biting." },
    { 
        word: "train", 
        hint: "A vehicle that runs on tracks." },
    { 
        word: "tree", 
        hint: "A tall plant with a trunk and branches." },
    { 
        word: "trumpet", 
        hint: "A brass musical instrument." 
    },
    { 
        word: "umbrella", 
        hint: "Used to protect from rain." 
    },
    { 
        word: "violin", 
        hint: "A stringed musical instrument." 
    },
    { 
        word: "wolf", 
        hint: "A wild canine." 
    },
    { 
        word: "zebra", 
        hint: "An African animal with black and white stripes." 
    },
    { 
        word: "yacht", 
        hint: "A large, luxurious boat." 
    },
    { 
        word: "zipper", 
        hint: "Used to fasten clothing." 
    },
    { 
        word: "xylophone", 
        hint: "A musical instrument with wooden bars." 
    },
    { 
        word: "yogurt", 
        hint: "A dairy product made from fermented milk." 
    },
    { 
        word: "vase", 
        hint: "A container for flowers." 
    },
    { 
        word: "vest", 
        hint: "A sleeveless garment." 
    },
    { 
        word: "vulture", 
        hint: "A scavenger bird." 
    },
    { 
        word: "water", 
        hint: "A liquid essential for life." 
    },
    {
        word: "whistle",
        hint: "A small instrument that makes a high-pitched sound.",
    },
    { 
        word: "window", 
        hint: "An opening in a wall for light and air." 
    },
    { 
        word: "x-ray", 
        hint: "An imaging technique to see inside the body." 
    },
    { 
        word: "year", 
        hint: "A period of 12 months." 
    },
    { 
        word: "yawn", 
        hint: "An involuntary action showing tiredness." 
    },
    { 
        word: "zip", 
        hint: "To fasten something quickly." 
    },
    { 
        word: "zeal", 
        hint: "Great energy or enthusiasm." 
    },
    { 
        word: "zoo", 
        hint: "A place where animals are kept for display." 
    },
    { 
        word: "waffle", 
        hint: "A breakfast food with square patterns." 
    },
    { 
        word: "web", 
        hint: "A network of silk spun by spiders." 
    },
    { 
        word: "wing", 
        hint: "Part of a bird used for flying." 
    },
    { 
        word: "wolf", 
        hint: "A wild carnivorous mammal." 
    },
    { 
        word: "wind", 
        hint: "Moving air." 
    },
    { 
        word: "wonder", 
        hint: "A feeling of amazement." 
    },
    { 
        word: "wizard", 
        hint: "A person skilled in magic." 
    },
    { 
        word: "wood", 
        hint: "Material from trees." 
    },
    { 
        word: "whale", 
        hint: "A large marine mammal." 
    },
    { 
        word: "witch", 
        hint: "A woman believed to have magical powers."
     },
    { 
        word: "wine", 
        hint: "An alcoholic drink made from fermented grapes." 
    },
    { 
        word: "vine", 
        hint: "A climbing plant." 
    },
    {
        word: "tusk",
        hint: "A long, pointed tooth found in animals like elephants.",
    },
    { 
        word: "tulip", 
        hint: "A spring-blooming flower." 
    },
    { 
        word: "tower", 
        hint: "A tall structure." 
    },
    { 
        word: "toad", 
        hint: "A small, hopping amphibian." 
    },
    { 
        word: "storm", 
        hint: "A severe weather event with wind and rain." 
    },
    { 
        word: "sting", 
        hint: "A sharp pain caused by an insect or animal." 
    },
    { 
        word: "sword", 
        hint: "A sharp-bladed weapon used in combat." 
    },
    { 
        word: "sun", 
        hint: "The star at the center of our solar system." 
    },
    { 
        word: "spider", 
        hint: "An eight-legged arachnid." 
    },
    { 
        word: "space", 
        hint: "The vast region beyond Earth's atmosphere." 
    },
    { 
        word: "snow", 
        hint: "Frozen precipitation." 
    },
    { 
        word: "sock", 
        hint: "A garment worn on the foot." 
    },
    { 
        word: "shelf", 
        hint: "A flat surface for storing items." 
    },
    { 
        word: "shell", 
        hint: "A hard outer covering of certain animals." 
    },
    { 
        word: "shadow", 
        hint: "A dark area created by blocking light."
     },
    { 
        word: "shark", 
        hint: "A large predatory fish." 
    },
    { 
        word: "seal", 
        hint: "A marine mammal with flippers." 
    },
    { 
        word: "sage", 
        hint: "A plant used as a seasoning." 
    },
    { 
        word: "rose", 
        hint: "A fragrant flower with thorns." 
    },
    { 
        word: "ribbon", 
        hint: "A long strip of fabric." 
    },
    { 
        word: "river", 
        hint: "A large, flowing body of water." 
    },
    { 
        word: "robin", 
        hint: "A bird with a red breast." 
    },
    { 
        word: "pot", 
        hint: "A round container used for cooking." 
    },
    { 
        word: "pear", 
        hint: "A sweet, green or yellow fruit." 
    },
    { 
        word: "peach", 
        hint: "A sweet, fuzzy fruit." 
    },
    { 
        word: "pond", 
        hint: "A small body of still water." 
    },
    { 
        word: "paper", 
        hint: "A material used for writing." 
    },
    { 
        word: "pepper", 
        hint: "A spicy vegetable." 
    },
    { 
        word: "kite", 
        hint: "A toy flown in the air." 
    },
    { 
        word: "koala", 
        hint: "A bear-like marsupial native to Australia." 
    },
    { 
        word: "jelly", 
        hint: "A sweet spread made from fruit." 
    },
    { 
        word: "jack", 
        hint: "A tool used to lift heavy objects." 
    },
    { 
        word: "abandon", 
        hint: "To leave something behind." 
    },
    { 
        word: "abdicate", 
        hint: "To give up power or responsibility." 
    },
    { 
        word: "absolve", 
        hint: "To free from guilt or responsibility." 
    },
    { 
        word: "abstract", 
        hint: "Existing in thought, not concrete." 
    },
    { 
        word: "acclaim", 
        hint: "Enthusiastic approval or praise." 
    },
    { 
        word: "adversary", 
        hint: "An opponent or enemy." 
    },
    { 
        word: "aesthetic", 
        hint: "Related to beauty or artistic expression." 
    },
    { 
        word: "allegory", 
        hint: "A story with a hidden moral or meaning." 
    },
    { 
        word: "ambiguous", 
        hint: "Open to more than one interpretation." 
    },
    { 
        word: "amplify", 
        hint: "To increase the strength or amount of something." 
    },
    { 
        word: "anecdote", 
        hint: "A short, amusing or interesting story." 
    },
    { 
        word: "antithesis", 
        hint: "A direct contrast or opposition." 
    },
    { 
        word: "apathetic", 
        hint: "Lacking interest or concern." 
    },
    { 
        word: "arbitrary", 
        hint: "Based on random choice or personal whim." 
    },
    { 
        word: "ascend", 
        hint: "To move upward." 
    },
    { 
        word: "assimilate", 
        hint: "To absorb and integrate into a larger group." 
    },
    {
        word: "audacious",
        hint: "Bold or daring, especially in challenging norms.",
    },
    { 
        word: "austere", 
        hint: "Severe or strict in manner or appearance." 
    },
    { 
        word: "benevolent", 
        hint: "Well-meaning and kindly." 
    },
    { 
        word: "boisterous", 
        hint: "Noisy and energetic." 
    },
    { 
        word: "brevity", 
        hint: "Shortness or conciseness in speech or writing." 
    },
    { 
        word: "candid", 
        hint: "Honest and straightforward." 
    },
    { 
        word: "catalyst", 
        hint: "Something that causes change." 
    },
    {
        word: "circuitous",
        hint: "Long and indirect, especially of a route or journey.",
    },
    {
      word: "clairvoyant",
      hint: "Having the ability to perceive future events.",
    },
    { 
        word: "clandestine", 
        hint: "Kept secret or done secretly." 
    },
    { 
        word: "coalesce", 
        hint: "To come together and form one mass or whole." 
    },
    { 
        word: "cognizant", 
        hint: "Being aware of something." 
    },
    { 
        word: "commemorate", 
        hint: "To honor or remember someone or something." 
    },
    {
      word: "complacent",
      hint: "Self-satisfied and unaware of possible dangers.",
    },
    { 
        word: "concur", 
        hint: "To agree or happen at the same time." 
    },
    { 
        word: "conspicuous", 
        hint: "Easily seen or noticed." 
    },
    { 
        word: "contingent", 
        hint: "Dependent on something else." 
    },
    { 
        word: "contrite", 
        hint: "Feeling or expressing remorse." 
    },
    { 
        word: "conundrum", 
        hint: "A confusing or difficult problem." 
    },
    { 
        word: "converge", 
        hint: "To come together from different directions." 
    },
    { 
        word: "corroborate", 
        hint: "To confirm or support with evidence." 
    },
    { 
        word: "culminate", 
        hint: "To reach the highest or most important point." 
    },
    { 
        word: "dauntless", 
        hint: "Showing fearlessness and determination." 
    },
    { 
        word: "debilitate", 
        hint: "To weaken or drain energy." 
    },
    {
      word: "deference",
      hint: "Respectful submission to the judgment of another.",
    },
    { 
        word: "delineate", 
        hint: "To describe or outline with precision." 
    },
    { 
        word: "demure", 
        hint: "Shy, modest, or reserved." 
    },
    { 
        word: "denounce", 
        hint: "To publicly declare something wrong or evil." 
    },
    { 
        word: "detrimental", 
        hint: "Harmful or damaging." 
    },
    { 
        word: "dichotomy", 
        hint: "A division into two contrasting parts." 
    },
    { 
        word: "diligent", 
        hint: "Hardworking and attentive." 
    },
    {
      word: "discrepancy",
      hint: "A difference or inconsistency between things.",
    },
    { 
        word: "disparate", 
        hint: "Essentially different in kind." 
    },
    {
      word: "dogmatic",
      hint: "Stubbornly opinionated or asserting opinions as truth.",
    },
    { 
        word: "eccentric", 
        hint: "Unconventional and slightly strange." 
    },
    { 
        word: "eloquent", 
        hint: "Fluent or persuasive in speaking or writing." 
    },
    { 
        word: "elucidate", 
        hint: "To make something clear or explain." 
    },
    { 
        word: "eminent", 
        hint: "Famous and respected within a particular sphere." 
    },
    { 
        word: "ephemeral", 
        hint: "Lasting for a very short time." 
    },
    {
      word: "equivocate",
      hint: "To use ambiguous language to conceal the truth.",
    },
    { 
        word: "eradicate", 
        hint: "To completely eliminate or destroy." 
    },
    { 
        word: "exacerbate", 
        hint: "To make a problem or situation worse." 
    },
    { 
        word: "exemplify", 
        hint: "To illustrate or clarify by giving an example." 
    },
    { 
        word: "exonerate", 
        hint: "To clear someone from blame or fault." 
    },
    { 
        word: "exuberant", 
        hint: "Full of energy, excitement, and cheerfulness." 
    },
    {
      word: "fabricate",
      hint: "To make or create something, often with the intention of deceiving.",
    },
    {
      word: "facetious",
      hint: "Treating serious issues with deliberately inappropriate humor.",
    },
    {
      word: "fallacy",
      hint: "A mistaken belief, especially one based on unsound argument.",
    },
    { 
        word: "fervent", 
        hint: "Having or displaying passionate intensity." 
    },
    { 
        word: "fortuitous", 
        hint: "Happening by chance, often in a positive way." 
    },
    { 
        word: "frivolous", 
        hint: "Not having any serious purpose or value." 
    },
    { 
        word: "galvanize", 
        hint: "To shock or excite someone into action." 
    },
    { 
        word: "gregarious", 
        hint: "Sociable and enjoying the company of others." 
    },
    {
      word: "hackneyed",
      hint: "Lacking originality or freshness due to overuse.",
    },
    { 
        word: "harangue", 
        hint: "A lengthy and aggressive speech." 
    },
    { 
        word: "haughty", 
        hint: "Arrogantly superior and disdainful." 
    },
    { 
        word: "hedonistic", 
        hint: "Pursuing pleasure as the highest good." 
    },
    { 
        word: "hinder", 
        hint: "To create difficulties or delay progress." 
    },
    {
      word: "hyperbole",
      hint: "Exaggerated statements not meant to be taken literally.",
    },
    {
      word: "iconoclast",
      hint: "A person who attacks cherished beliefs or institutions.",
    },
    { 
        word: "idiosyncrasy", 
        hint: "A peculiar characteristic or habit." 
    },
    { 
        word: "imminent", 
        hint: "About to happen." 
    },
    { 
        word: "impervious", 
        hint: "Unable to be affected or penetrated." 
    },
    { 
        word: "incessant", 
        hint: "Continuing without pause or interruption."
     },
    { 
        word: "incisive", 
        hint: "Clear and direct in expression or analysis." 
    },
    {
      word: "indignant",
      hint: "Feeling or showing anger over perceived injustice.",
    },
    { word: "inevitable", 
        hint: "Certain to happen; unavoidable." 
    },
    {
      word: "infamy",
      hint: "The state of being well known for a bad quality or deed.",
    },
    { 
        word: "innate", 
        hint: "Inborn or natural." 
    },
    { 
        word: "insidious", 
        hint: "Proceeding subtly but with harmful effects." 
    },
    { 
        word: "insipid", 
        hint: "Lacking flavor or excitement." 
    },
    { 
        word: "intrepid", 
        hint: "Fearless and adventurous." 
    },
    { 
        word: "jubilant", 
        hint: "Feeling or expressing great joy." 
    },
    { 
        word: "juxtapose", 
        hint: "To place things side by side for contrast." 
    },
    { 
        word: "lackadaisical", 
        hint: "Lacking enthusiasm or determination." 
    },
    { 
        word: "laudable", 
        hint: "Deserving praise and commendation." 
    },
    { 
        word: "lucid", 
        hint: "Clear and easy to understand." 
    },
    {
      word: "magnanimous",
      hint: "Generous or forgiving, especially toward a rival.",
    },
    {  
        word: "malevolent", 
        hint: "Having or showing a wish to do evil." 
    },
    { 
        word: "meander", 
        hint: "To follow a winding course."
     },
    { 
        word: "meticulous", 
        hint: "Showing great attention to detail." 
    },
    { 
        word: "mitigate", 
        hint: "To make less severe or painful." 
    },
    { 
        word: "morose", 
        hint: "Sullen and ill-tempered." 
    },
    { 
        word: "mundane", 
        hint: "Lacking interest or excitement; ordinary." 
    },
    { 
        word: "nebulous", 
        hint: "Unclear, vague, or ill-defined." 
    },
    { 
        word: "nonchalant", 
        hint: "Calm and relaxed; not displaying anxiety." 
    },
    {
      word: "obfuscate",
      hint: "To deliberately make something unclear or difficult to understand.",
    },
    {
      word: "oblivious",
      hint: "Unaware or not concerned about what is happening.",
    },
    { 
        word: "obsolete", 
        hint: "No longer produced or used; out of date." 
    },
    { 
        word: "omnipotent",
        hint: "Having unlimited power or authority." 
    },
    { 
        word: "ostentatious", 
        hint: "Designed to impress or attract notice." 
    },
    { 
        word: "paradigm", 
        hint: "A typical example or model of something." 
    },
    { 
        word: "paragon", 
        hint: "A person or thing regarded as a perfect example." 
    },
    {
      word: "patronize",
      hint: "To treat with an apparent kindness that betrays a feeling of superiority.",
    },
    { 
        word: "penchant", 
        hint: "A strong or habitual liking for something." 
    },
    { 
        word: "perplex", 
        hint: "To cause someone to feel confused or baffled." 
    },
    { 
        word: "pervasive", 
        hint: "Spreading widely throughout an area or group." 
    },
    { 
        word: "placate", 
        hint: "To make someone less angry or hostile." 
    },
    { 
        word: "plausible", 
        hint: "Seeming reasonable or probable." 
    },
    {
      word: "pragmatic",
      hint: "Dealing with things sensibly and realistically.",
    },
    {
      word: "precarious",
      hint: "Not securely held or in position; dangerously likely to fall or collapse.",
    },
    {
      word: "prodigious",
      hint: "Remarkably or impressively great in size, extent, or degree.",
    },
  ];
  