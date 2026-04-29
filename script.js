// ── QUESTION BANK ──────────────────────────────────────────────

const beginnerQuestions = [
  // ── MATHS ──
  { q: "5+7=?", opts: ["10","11","12","13"], ans: 2 },
  { q: "9×3=?", opts: ["18","27","21","24"], ans: 1 },
  { q: "Square of 6?", opts: ["12","18","36","30"], ans: 2 },
  { q: "√49=?", opts: ["6","7","8","9"], ans: 1 },
  { q: "10-4=?", opts: ["4","5","6","7"], ans: 2 },
  { q: "50% of 100?", opts: ["25","50","75","100"], ans: 1 },
  { q: "1 km = ? metres", opts: ["100","1000","10","10000"], ans: 1 },
  { q: "8÷2=?", opts: ["2","3","4","5"], ans: 2 },
  { q: "3²=?", opts: ["6","9","12","15"], ans: 1 },
  { q: "Sum of angles in a triangle?", opts: ["90","180","360","270"], ans: 1 },
  { q: "7+8=?", opts: ["13","14","15","16"], ans: 2 },
  { q: "12×2=?", opts: ["22","24","26","28"], ans: 1 },
  { q: "√36=?", opts: ["5","6","7","8"], ans: 1 },
  { q: "20-5=?", opts: ["10","15","20","25"], ans: 1 },
  { q: "25% of 200?", opts: ["25","50","75","100"], ans: 1 },
  { q: "2 km = ? metres", opts: ["200","2000","20","20000"], ans: 1 },
  { q: "16÷4=?", opts: ["2","3","4","5"], ans: 2 },
  { q: "4²=?", opts: ["8","12","16","20"], ans: 2 },
  { q: "Perimeter of a square with side a?", opts: ["a","2a","3a","4a"], ans: 3 },
  { q: "Which is an even number?", opts: ["3","5","7","8"], ans: 3 },
  { q: "6×6=?", opts: ["30","32","36","40"], ans: 2 },
  { q: "15+5=?", opts: ["18","19","20","21"], ans: 2 },
  { q: "√81=?", opts: ["7","8","9","10"], ans: 2 },
  { q: "100-60=?", opts: ["30","40","50","60"], ans: 1 },
  { q: "10% of 50?", opts: ["2","5","10","15"], ans: 1 },
  { q: "3 km = ? metres", opts: ["300","3000","30","30000"], ans: 1 },
  { q: "18÷3=?", opts: ["4","5","6","7"], ans: 2 },
  { q: "5²=?", opts: ["10","15","20","25"], ans: 3 },
  { q: "Which is an odd number?", opts: ["2","4","6","9"], ans: 3 },
  { q: "Area of a rectangle?", opts: ["l+b","l×b","l-b","l/b"], ans: 1 },
  { q: "8×5=?", opts: ["30","35","40","45"], ans: 2 },
  { q: "√64=?", opts: ["6","7","8","9"], ans: 2 },
  { q: "50-20=?", opts: ["20","25","30","35"], ans: 2 },
  { q: "20% of 100?", opts: ["10","15","20","25"], ans: 2 },
  { q: "500 m = ? km", opts: ["0.5","5","50","5000"], ans: 0 },
  { q: "12÷4=?", opts: ["2","3","4","5"], ans: 1 },
  { q: "Which is a prime number?", opts: ["4","6","9","7"], ans: 3 },
  { q: "Cube of 2?", opts: ["4","6","8","10"], ans: 2 },
  { q: "9×4=?", opts: ["30","32","36","40"], ans: 2 },
  { q: "11+9=?", opts: ["18","19","20","21"], ans: 2 },
  { q: "√25=?", opts: ["4","5","6","7"], ans: 1 },
  { q: "70-30=?", opts: ["30","35","40","45"], ans: 2 },
  { q: "5% of 100?", opts: ["2","5","10","15"], ans: 1 },
  { q: "4 km = ? metres", opts: ["400","4000","40","40000"], ans: 1 },
  { q: "20÷5=?", opts: ["2","3","4","5"], ans: 2 },
  { q: "7²=?", opts: ["42","45","49","50"], ans: 2 },

  // ── PHYSICS ──
  { q: "SI unit of force?", opts: ["Joule","Newton","Watt","Pascal"], ans: 1 },
  { q: "Formula for speed?", opts: ["d×t","d/t","t/d","none"], ans: 1 },
  { q: "Unit of speed?", opts: ["m/s","m²","s/m","kg"], ans: 0 },
  { q: "Gravity pulls objects?", opts: ["Up","Down","Sideways","None"], ans: 1 },
  { q: "Instrument to measure temperature?", opts: ["Barometer","Thermometer","Speedometer","Ammeter"], ans: 1 },
  { q: "SI unit of energy?", opts: ["Newton","Joule","Watt","Volt"], ans: 1 },
  { q: "Light travels fastest in?", opts: ["Water","Air","Vacuum","Glass"], ans: 2 },
  { q: "Earth revolves around?", opts: ["Moon","Sun","Mars","Jupiter"], ans: 1 },
  { q: "Force can affect?", opts: ["Shape","Motion","Size","All of these"], ans: 3 },
  { q: "SI unit of mass?", opts: ["Gram","Kilogram","Ton","Pound"], ans: 1 },
  { q: "SI unit of time?", opts: ["Second","Minute","Hour","Day"], ans: 0 },
  { q: "Formula for work?", opts: ["F×d","F/d","d/F","none"], ans: 0 },
  { q: "SI unit of power?", opts: ["Joule","Watt","Volt","Newton"], ans: 1 },
  { q: "SI unit of electric current?", opts: ["Ampere","Meter","Second","Kelvin"], ans: 0 },
  { q: "Sound can travel through?", opts: ["Vacuum only","Solid only","Liquid only","Both solid and liquid"], ans: 3 },
  { q: "Type of mirror used as rear-view mirror in cars?", opts: ["Plane","Convex","Concave","None"], ans: 1 },
  { q: "Type of lens in the human eye?", opts: ["Convex","Concave","Plane","None"], ans: 0 },
  { q: "SI unit of heat?", opts: ["Joule","Kelvin","Watt","Newton"], ans: 0 },
  { q: "SI unit of pressure?", opts: ["Pascal","Newton","Joule","Watt"], ans: 0 },
  { q: "Velocity is?", opts: ["Speed with direction","Speed only","Distance only","Time only"], ans: 0 },
  { q: "Unit of acceleration?", opts: ["m/s²","m/s","m²","s²"], ans: 0 },
  { q: "Value of acceleration due to gravity?", opts: ["9.8 m/s²","10.8 m/s²","8.9 m/s²","7.8 m/s²"], ans: 0 },
  { q: "Friction opposes?", opts: ["Motion","Rest","Force","Energy"], ans: 0 },
  { q: "Unit of sound intensity?", opts: ["dB","Hz","W","V"], ans: 0 },
  { q: "Unit of frequency?", opts: ["Hz","W","V","J"], ans: 0 },
  { q: "Unit of electric current?", opts: ["Ampere","Volt","Ohm","Watt"], ans: 0 },
  { q: "Unit of voltage?", opts: ["Volt","Ampere","Ohm","Watt"], ans: 0 },
  { q: "Unit of resistance?", opts: ["Ohm","Volt","Ampere","Watt"], ans: 0 },
  
  // ── CHEMISTRY ──
  { q: "H₂O is?", opts: ["Oxygen","Hydrogen","Water","Helium"], ans: 2 },
  { q: "Atomic number of Hydrogen?", opts: ["1","2","3","4"], ans: 0 },
  { q: "Gas needed for breathing?", opts: ["CO₂","Oxygen","Nitrogen","Helium"], ans: 1 },
  { q: "pH of a neutral solution?", opts: ["5","6","7","8"], ans: 2 },
  { q: "Chemical symbol of Sodium?", opts: ["So","Na","Sn","S"], ans: 1 },
  { q: "Taste of an acid?", opts: ["Bitter","Sour","Sweet","Salty"], ans: 1 },
  { q: "Solid changing to liquid is called?", opts: ["Freezing","Melting","Evaporation","Condensation"], ans: 1 },
  { q: "CO₂ stands for?", opts: ["Oxygen","Carbon dioxide","Hydrogen","Nitrogen"], ans: 1 },
  { q: "Chemical formula of water?", opts: ["H₂O","CO₂","O₂","NaCl"], ans: 0 },
  { q: "Chemical formula of common salt?", opts: ["NaCl","H₂O","CO₂","O₂"], ans: 0 },
  { q:"Which is tasteless?", opts:["Sugar","Salt","Water","Lemon"], ans:2 },
  { q:"Water freezes at?", opts:["0°C","10°C","5°C","-10°C"], ans:0 },

  // ── ENGLISH ──
  { q: "Synonym of 'Happy'?", opts: ["Sad","Joyful","Angry","Cry"], ans: 1 },
  { q: "Antonym of 'Hot'?", opts: ["Cold","Warm","Heat","Fire"], ans: 0 },
  { q: "Correct spelling?", opts: ["Enviroment","Environment","Envirment","Enviornment"], ans: 1 },
  { q: "Fill in: She ___ going to school.", opts: ["is","are","am","be"], ans: 0 },
  { q: "Which word is a noun?", opts: ["Run","Ravi","Play","Go"], ans: 1 },
  // ── GENERAL KNOWLEDGE ──
  { q: "Capital of India?", opts: ["Mumbai","Delhi","Chennai","Kolkata"], ans: 1 },
  { q: "Largest ocean in the world?", opts: ["Atlantic","Pacific","Indian","Arctic"], ans: 1 },
  { q: "National animal of India?", opts: ["Lion","Tiger","Elephant","Cow"], ans: 1 },
  { q: "ISRO belongs to which country?", opts: ["USA","India","China","Russia"], ans: 1 },
  { q: "Currency of India?", opts: ["Dollar","Rupee","Euro","Yen"], ans: 1 },
  { q: "National bird of India?", opts: ["Parrot","Peacock","Sparrow","Eagle"], ans: 1 },
  { q: "National flower of India?", opts: ["Rose","Lotus","Sunflower","Jasmine"], ans: 1 },
  { q: "Father of the Nation?", opts: ["Nehru","Gandhi","Patel","Bose"], ans: 1 },
  { q: "First Prime Minister of India?", opts: ["Gandhi","Nehru","Patel","Ambedkar"], ans: 1 },
  { q: "Independence Day of India?", opts: ["15 Aug","26 Jan","2 Oct","14 Nov"], ans: 0 },
  { q: "Republic Day of India?", opts: ["15 Aug","26 Jan","2 Oct","14 Nov"], ans: 1 },
  { q: "Number of states in India?", opts: ["28","29","30","27"], ans: 0 },
  { q: "Smallest state in India?", opts: ["Goa","Sikkim","Tripura","Manipur"], ans: 0 },
  { q: "Largest state in India?", opts: ["UP","MP","Rajasthan","Maharashtra"], ans: 2 },
  { q: "National game of India?", opts: ["Cricket","Hockey","Football","Kabaddi"], ans: 1 },
  // ── MORE MATHS ──
  { q: "8²=?", opts: ["56","60","64","68"], ans: 2 },
  { q: "9²=?", opts: ["72","81","90","99"], ans: 1 },
  { q: "10²=?", opts: ["100","110","120","90"], ans: 0 },
  { q: "√100=?", opts: ["8","9","10","11"], ans: 2 },
  { q: "√144=?", opts: ["10","11","12","13"], ans: 2 },
  { q: "√121=?", opts: ["9","10","11","12"], ans: 2 },
  { q: "15×3=?", opts: ["35","40","45","50"], ans: 2 },
  { q: "13+7=?", opts: ["18","19","20","21"], ans: 2 },
  { q: "7×7=?", opts: ["42","45","49","56"], ans: 2 },
  { q: "11×11=?", opts: ["111","121","131","141"], ans: 1 },
  { q: "12×12=?", opts: ["124","134","144","154"], ans: 2 },
  { q: "15% of 200?", opts: ["20","25","30","35"], ans: 2 },
  { q: "30% of 100?", opts: ["20","25","30","35"], ans: 2 },
  { q: "Cube of 3?", opts: ["9","18","27","36"], ans: 2 },
  { q: "Cube of 4?", opts: ["16","32","48","64"], ans: 3 },
  { q: "Cube of 5?", opts: ["100","125","150","175"], ans: 1 },
  { q: "24÷6=?", opts: ["3","4","5","6"], ans: 1 },
  { q: "36÷6=?", opts: ["5","6","7","8"], ans: 1 },
  { q: "48÷8=?", opts: ["5","6","7","8"], ans: 1 },
  { q: "14+16=?", opts: ["28","30","32","34"], ans: 1 },
  { q: "19+11=?", opts: ["28","29","30","31"], ans: 2 },
  { q: "80-35=?", opts: ["40","45","50","55"], ans: 1 },
  { q: "90-45=?", opts: ["40","45","50","55"], ans: 1 },
  { q: "6×8=?", opts: ["42","45","48","54"], ans: 2 },
  { q: "7×9=?", opts: ["56","63","72","81"], ans: 1 },
  { q: "8×9=?", opts: ["63","72","81","90"], ans: 1 },
  { q: "Area of a square with side 5?", opts: ["10","15","20","25"], ans: 3 },
  { q: "Perimeter of rectangle l=5, b=3?", opts: ["8","15","16","18"], ans: 2 },
  { q: "5 km = ? metres", opts: ["500","5000","50","50000"], ans: 1 },
  { q: "1000 m = ? km", opts: ["1","10","100","0.1"], ans: 0 },
  { q: "2000 m = ? km", opts: ["2","20","200","0.2"], ans: 0 },
  { q: "Half of 50?", opts: ["20","25","30","35"], ans: 1 },
  { q: "Double of 15?", opts: ["25","30","35","40"], ans: 1 },
  { q: "LCM of 2 and 3?", opts: ["3","4","5","6"], ans: 3 },
  // ── MORE PHYSICS ──
  { q: "Moon is a?", opts: ["Star","Planet","Satellite","Comet"], ans: 2 },
  { q: "Sun is a?", opts: ["Star","Planet","Satellite","Comet"], ans: 0 },
  { q: "Number of planets in solar system?", opts: ["7","8","9","10"], ans: 1 },
  { q: "Closest planet to Sun?", opts: ["Venus","Earth","Mercury","Mars"], ans: 2 },
  { q: "Largest planet?", opts: ["Earth","Saturn","Jupiter","Uranus"], ans: 2 },
  { q: "Smallest planet?", opts: ["Mercury","Mars","Venus","Earth"], ans: 0 },
  { q: "Earth rotates on its?", opts: ["Orbit","Axis","Pole","Equator"], ans: 1 },
  { q: "One complete rotation of Earth?", opts: ["12 hours","24 hours","48 hours","365 days"], ans: 1 },
  { q: "One revolution of Earth around Sun?", opts: ["30 days","100 days","365 days","500 days"], ans: 2 },
  { q: "Force that keeps us on ground?", opts: ["Friction","Gravity","Magnetism","Pressure"], ans: 1 },
  { q: "Newton's First Law is also called?", opts: ["Law of Inertia","Law of Motion","Law of Action","Law of Force"], ans: 0 },
  { q: "Energy in moving objects?", opts: ["Potential","Kinetic","Thermal","Chemical"], ans: 1 },
  { q: "Energy in stationary objects?", opts: ["Potential","Kinetic","Thermal","Chemical"], ans: 0 },
  { q: "SI unit of temperature?", opts: ["Celsius","Fahrenheit","Kelvin","Joule"], ans: 2 },
  { q: "Boiling point of water?", opts: ["0°C","50°C","100°C","150°C"], ans: 2 },
  { q: "Freezing point of water?", opts: ["0°C","-10°C","10°C","100°C"], ans: 0 },
  { q: "Light travels in?", opts: ["Curved lines","Straight lines","Zigzag","Circles"], ans: 1 },
  { q: "Sound is a type of?", opts: ["Light","Wave","Particle","Gas"], ans: 1 },
  { q: "Echo is?", opts: ["Reflection of sound","Refraction of sound","Absorption of sound","None"], ans: 0 },
  { q: "Rainbow has how many colors?", opts: ["5","6","7","8"], ans: 2 },
  // ── MORE CHEMISTRY ──
  { q: "Atomic number of Carbon?", opts: ["4","6","8","12"], ans: 1 },
  { q: "Atomic number of Oxygen?", opts: ["6","7","8","9"], ans: 2 },
  { q: "Atomic number of Nitrogen?", opts: ["6","7","8","9"], ans: 1 },
  { q: "Symbol of Iron?", opts: ["I","Ir","Fe","Fr"], ans: 2 },
  { q: "Symbol of Gold?", opts: ["Go","Gd","Au","Ag"], ans: 2 },
  { q: "Symbol of Silver?", opts: ["Si","Ag","Sv","S"], ans: 1 },
  { q: "Symbol of Copper?", opts: ["Co","Cp","Cu","C"], ans: 2 },
  { q: "Most abundant gas in air?", opts: ["Oxygen","Nitrogen","CO₂","Hydrogen"], ans: 1 },
  { q: "Gas used in balloons?", opts: ["Oxygen","Nitrogen","Helium","Hydrogen"], ans: 2 },
  { q: "Acid found in lemon?", opts: ["Citric acid","Acetic acid","Sulphuric acid","Nitric acid"], ans: 0 },
  { q: "Acid found in vinegar?", opts: ["Citric acid","Acetic acid","Sulphuric acid","Nitric acid"], ans: 1 },
  { q: "Base tastes?", opts: ["Sour","Bitter","Sweet","Salty"], ans: 1 },
  { q: "Litmus paper turns red in?", opts: ["Acid","Base","Salt","Water"], ans: 0 },
  { q: "Litmus paper turns blue in?", opts: ["Acid","Base","Salt","Water"], ans: 1 },
  { q: "Rusting of iron needs?", opts: ["Air only","Water only","Both air and water","None"], ans: 2 },
  // ── MORE MATHS (replacing Biology) ──
  { q: "13²=?", opts: ["159","169","179","189"], ans: 1 },
  { q: "14²=?", opts: ["186","194","196","198"], ans: 2 },
  { q: "15²=?", opts: ["215","220","225","230"], ans: 2 },
  { q: "√169=?", opts: ["11","12","13","14"], ans: 2 },
  { q: "√196=?", opts: ["12","13","14","15"], ans: 2 },
  { q: "√225=?", opts: ["13","14","15","16"], ans: 2 },
  { q: "Cube of 6?", opts: ["196","206","216","226"], ans: 2 },
  { q: "Cube of 7?", opts: ["323","333","343","353"], ans: 2 },
  { q: "LCM of 6 and 9?", opts: ["12","18","24","36"], ans: 1 },
  { q: "LCM of 8 and 12?", opts: ["16","20","24","32"], ans: 2 },
  { q: "HCF of 24 and 36?", opts: ["6","8","12","18"], ans: 2 },
  { q: "HCF of 48 and 64?", opts: ["8","12","16","24"], ans: 2 },
  { q: "40% of 250?", opts: ["80","90","100","110"], ans: 2 },
  { q: "60% of 150?", opts: ["80","85","90","95"], ans: 2 },
  { q: "Triple of 25?", opts: ["65","70","75","80"], ans: 2 },
  // ── MORE ENGLISH ──
  { q: "Synonym of 'Big'?", opts: ["Small","Large","Tiny","Little"], ans: 1 },
  { q: "Antonym of 'Good'?", opts: ["Bad","Great","Nice","Fine"], ans: 0 },
  { q: "Plural of 'Child'?", opts: ["Childs","Children","Childes","Childrens"], ans: 1 },
  { q: "Plural of 'Man'?", opts: ["Mans","Mens","Men","Manes"], ans: 2 },
  { q: "Past tense of 'Go'?", opts: ["Goed","Gone","Went","Going"], ans: 2 },
  { q: "Past tense of 'Eat'?", opts: ["Eated","Ate","Eaten","Eating"], ans: 1 },
  { q: "Opposite of 'Day'?", opts: ["Night","Evening","Morning","Noon"], ans: 0 },
  { q: "Opposite of 'Up'?", opts: ["Down","Left","Right","Front"], ans: 0 },
  { q: "A group of lions?", opts: ["Herd","Flock","Pride","Pack"], ans: 2 },
  { q: "A group of cows?", opts: ["Herd","Flock","Pride","Pack"], ans: 0 },
];

const mediumQuestions = [

/* ===== PHYSICS ADD (to make 50 total) ===== */
{ q:"SI unit of temperature?", opts:["Celsius","Kelvin","Fahrenheit","Joule"], ans:1 },
{ q:"Instrument to measure heat?", opts:["Thermometer","Calorimeter","Barometer","Ammeter"], ans:1 },
{ q:"SI unit of energy?", opts:["Joule","Watt","Volt","Newton"], ans:0 },
{ q:"Which is scalar?", opts:["Force","Velocity","Speed","Momentum"], ans:2 },
{ q:"Which is vector?", opts:["Mass","Speed","Velocity","Time"], ans:2 },
{ q:"Unit of momentum?", opts:["kg m/s","N","J","W"], ans:0 },
{ q:"Gravitational force depends on?", opts:["Mass","Distance","Both","None"], ans:2 },
{ q:"Energy stored in spring?", opts:["Kinetic","Potential","Thermal","Sound"], ans:1 },
{ q:"Lens used in eye?", opts:["Convex","Concave","Plane","None"], ans:0 },
{ q:"Unit of frequency?", opts:["Hz","J","W","N"], ans:0 },

{ q:"Heat transfer by radiation?", opts:["Yes","No","Only solid","Only liquid"], ans:0 },
{ q:"Unit of work?", opts:["Joule","Newton","Watt","Volt"], ans:0 },
{ q:"Boiling point of water?", opts:["90°C","100°C","110°C","120°C"], ans:1 },
{ q:"Freezing point water?", opts:["0°C","5°C","10°C","-5°C"], ans:0 },
{ q:"Device measure pressure?", opts:["Barometer","Ammeter","Voltmeter","Thermometer"], ans:0 },
{ q:"Magnet attracts?", opts:["Iron","Wood","Plastic","Glass"], ans:0 },
{ q:"Electric charge unit?", opts:["Coulomb","Volt","Ampere","Ohm"], ans:0 },
{ q:"Ohm law relation?", opts:["V=IR","I=VR","R=VI","None"], ans:0 },
{ q:"Unit of resistance?", opts:["Ohm","Volt","Amp","Watt"], ans:0 },
{ q:"Battery stores?", opts:["Chemical","Heat","Light","Sound"], ans:0 },

{ q:"Mirror image left-right?", opts:["Yes","No","Sometimes","None"], ans:0 },
{ q:"Sun is source of?", opts:["Light","Heat","Both","None"], ans:2 },
{ q:"SI unit length?", opts:["Meter","Km","Cm","Mm"], ans:0 },
{ q:"Unit mass?", opts:["Kg","g","mg","ton"], ans:0 },
{ q:"Distance scalar?", opts:["Yes","No","Both","None"], ans:0 },
{ q:"Unit of electric power?", opts:["Volt","Watt","Ampere","Ohm"], ans:1 },
{ q:"Which law explains V=IR?", opts:["Newton law","Ohm law","Faraday law","Hooke law"], ans:1 },
{ q:"Unit of capacitance?", opts:["Farad","Henry","Ohm","Tesla"], ans:0 },
{ q:"Which wave needs medium?", opts:["Light","Sound","X-ray","Radio"], ans:1 },
{ q:"SI unit of luminous intensity?", opts:["Candela","Lumen","Lux","Watt"], ans:0 },

{ q:"Which mirror used in shaving mirror?", opts:["Convex","Concave","Plane","None"], ans:1 },
{ q:"Unit of magnetic field?", opts:["Tesla","Henry","Ohm","Volt"], ans:0 },
{ q:"Energy stored in moving body?", opts:["Potential","Kinetic","Thermal","Electrical"], ans:1 },
{ q:"Which color has highest frequency?", opts:["Red","Green","Blue","Violet"], ans:3 },
{ q:"Which color has lowest wavelength?", opts:["Red","Blue","Green","Yellow"], ans:1 },

{ q:"Which instrument measures light intensity?", opts:["Lux meter","Barometer","Ammeter","Thermometer"], ans:0 },
{ q:"Which law: action-reaction?", opts:["Newton 1","Newton 2","Newton 3","Ohm"], ans:2 },
{ q:"Unit of work done?", opts:["Joule","Watt","Newton","Volt"], ans:0 },
{ q:"Which is not renewable?", opts:["Solar","Wind","Coal","Hydro"], ans:2 },
{ q:"Which energy in stretched rubber?", opts:["Kinetic","Potential","Sound","Heat"], ans:1 },

{ q:"Unit of angular velocity?", opts:["rad/s","m/s","m/s²","kg"], ans:0 },
{ q:"Which device converts AC to DC?", opts:["Rectifier","Transformer","Motor","Generator"], ans:0 },
{ q:"Which is insulator?", opts:["Copper","Aluminium","Plastic","Iron"], ans:2 },
{ q:"Which is conductor?", opts:["Wood","Rubber","Glass","Copper"], ans:3 },
{ q:"Which energy in battery?", opts:["Chemical","Thermal","Mechanical","Light"], ans:0 },

{ q:"Speed of sound approx?", opts:["340 m/s","300 m/s","400 m/s","500 m/s"], ans:0 },
{ q:"Which is reflection?", opts:["Light bounce","Light pass","Light absorb","None"], ans:0 },
{ q:"Which force non-contact?", opts:["Friction","Tension","Magnetic","Normal"], ans:2 },
{ q:"Which is SI unit of charge?", opts:["Volt","Amp","Coulomb","Ohm"], ans:2 },
{ q:"Which law relates pressure and volume?", opts:["Boyle law","Charles law","Ohm law","Newton law"], ans:0 },
{ q: "Device that stores electrical energy?", opts: ["Battery","Wire","Switch","None"], ans: 0 },
{ q: "Type of lens used in a camera?", opts: ["Convex","Concave","Plane","None"], ans: 0 },

/* ===== CHEMISTRY ADD (to make 25 total) ===== */
{ q:"Atomic number H?", opts:["1","2","3","4"], ans:0 },
{ q:"Symbol Na?", opts:["Na","N","Ne","No"], ans:0 },
{ q:"Water is?", opts:["Compound","Element","Mixture","Gas"], ans:0 },
{ q:"CO2 is?", opts:["Gas","Liquid","Solid","None"], ans:0 },
{ q:"Acid taste?", opts:["Sweet","Sour","Bitter","Salty"], ans:1 },
{ q:"Base taste?", opts:["Sweet","Sour","Bitter","Salty"], ans:2 },
{ q:"Litmus in acid?", opts:["Red","Blue","Green","Yellow"], ans:0 },
{ q:"Litmus in base?", opts:["Red","Blue","Green","Yellow"], ans:1 },
{ q:"Gas in air most?", opts:["O2","N2","CO2","H2"], ans:1 },
{ q:"pH neutral?", opts:["7","6","8","5"], ans:0 },

{ q:"Salt is?", opts:["Neutral","Acid","Base","Gas"], ans:0 },
{ q:"Evaporation?", opts:["Surface","Bulk","None","Gas"], ans:0 },
{ q:"Condensation?", opts:["Gas→Liquid","Liquid→Gas","Solid→Liquid","None"], ans:0 },
{ q:"Freezing?", opts:["Liquid→Solid","Solid→Liquid","Gas→Liquid","None"], ans:0 },
{ q:"Melting?", opts:["Solid→Liquid","Liquid→Gas","Gas→Solid","None"], ans:0 },
{ q:"Atomic number of Nitrogen?", opts:["5","6","7","8"], ans:2 },
{ q:"Symbol of Calcium?", opts:["Ca","Cl","Co","Cr"], ans:0 },
{ q:"Which is noble gas?", opts:["Oxygen","Nitrogen","Helium","Hydrogen"], ans:2 },
{ q:"Chemical formula of methane?", opts:["CH4","CO2","H2O","NH3"], ans:0 },
{ q:"Which is alkaline earth metal?", opts:["Na","Ca","K","Fe"], ans:1 },
{ q:"pH of strong base?", opts:["1","3","7","13"], ans:3 },
{ q:"Which element is liquid at room temp?", opts:["Iron","Mercury","Copper","Aluminium"], ans:1 },
{ q:"Valency of Oxygen?", opts:["1","2","3","4"], ans:1 },
{ q:"Which gas supports combustion?", opts:["Oxygen","Nitrogen","CO2","Helium"], ans:0 },
{ q:"Which acid present in lemon?", opts:["Citric acid","Sulfuric acid","Nitric acid","Hydrochloric acid"], ans:0 },


/* ===== ENGLISH ADD (to make 25 total) ===== */
{ q:"Synonym big?", opts:["Small","Large","Tiny","Short"], ans:1 },
{ q:"Opposite hot?", opts:["Cold","Warm","Heat","Fire"], ans:0 },
{ q:"He ___ a book", opts:["read","reads","reading","is"], ans:1 },
{ q:"They ___ playing", opts:["is","are","am","be"], ans:1 },
{ q:"Past of eat?", opts:["Eat","Eated","Ate","Eating"], ans:2 },

{ q:"Plural man?", opts:["Men","Mans","Manes","Man"], ans:0 },
{ q:"Adjective of beauty?", opts:["Beautiful","Beauty","Beautify","None"], ans:0 },
{ q:"Verb example?", opts:["Run","Table","Blue","City"], ans:0 },
{ q:"Noun example?", opts:["Run","Happy","City","Fast"], ans:2 },
{ q:"Adverb modifies?", opts:["Verb","Noun","Both","None"], ans:0 },

{ q:"Correct sentence?", opts:["He go school","He goes school","He goes to school","He going"], ans:2 },
{ q:"Synonym smart?", opts:["Dull","Clever","Slow","Weak"], ans:1 },
{ q:"Opposite easy?", opts:["Hard","Simple","Light","Fast"], ans:0 },
{ q:"Correct spelling?", opts:["Definately","Definitely","Definetly","Defenitely"], ans:1 },
{ q:"She ___ singing", opts:["is","are","am","be"], ans:0 },

{ q:"Plural child?", opts:["Childs","Children","Childes","Child"], ans:1 },
{ q:"Past go?", opts:["Goed","Went","Gone","Going"], ans:1 },
{ q:"Future of go?", opts:["Will go","Went","Going","Gone"], ans:0 },
{ q:"Pronoun example?", opts:["He","Run","Table","Blue"], ans:0 },
{ q:"Preposition?", opts:["In","Run","Blue","City"], ans:0 },
{ q:"Synonym of Brave?", opts:["Coward","Bold","Weak","Lazy"], ans:1 },
{ q:"Opposite of Early?", opts:["Late","Soon","Fast","Quick"], ans:0 },
{ q:"Correct sentence?", opts:["She go school","She goes to school","She going school","She gone school"], ans:1 },
{ q:"Past tense of run?", opts:["Runned","Ran","Running","Run"], ans:1 },
{ q:"Article used before vowel?", opts:["A","An","The","None"], ans:1 },


/* ===== GK ADD (to make 25 total) ===== */
{ q:"President India?", opts:["PM","President","CM","Governor"], ans:1 },
{ q:"Prime Minister India?", opts:["President","PM","CM","None"], ans:1 },
{ q:"National flower?", opts:["Rose","Lotus","Lily","Sunflower"], ans:1 },
{ q:"National sport?", opts:["Hockey","Cricket","Football","Kabaddi"], ans:0 },
{ q:"Currency USA?", opts:["Dollar","Euro","Rupee","Yen"], ans:0 },

{ q:"Capital Kerala?", opts:["Kochi","Trivandrum","Calicut","Kannur"], ans:1 },
{ q:"River Ganga flows in?", opts:["India","China","USA","Russia"], ans:0 },
{ q:"Largest continent?", opts:["Asia","Africa","Europe","Australia"], ans:0 },
{ q:"Smallest continent?", opts:["Asia","Europe","Australia","Africa"], ans:2 },
{ q:"National anthem India?", opts:["Jana Gana Mana","Vande Mataram","None","Song"], ans:0 },

{ q:"Independence year?", opts:["1945","1946","1947","1948"], ans:2 },
{ q:"Republic day?", opts:["Jan 26","Aug 15","Oct 2","Dec 25"], ans:0 },
{ q:"Teacher's day?", opts:["Sep 5","Oct 2","Jan 26","Aug 15"], ans:0 },
{ q:"Children day?", opts:["Nov 14","Jan 26","Aug 15","Sep 5"], ans:0 },
{ q:"ISRO full?", opts:["Space org","Indian Space Research Organisation","None","NASA"], ans:1 },

{ q:"Currency Japan?", opts:["Yen","Dollar","Euro","Rupee"], ans:0 },
{ q:"Capital USA?", opts:["New York","Washington DC","LA","Chicago"], ans:1 },
{ q:"Largest desert?", opts:["Sahara","Gobi","Thar","Arctic"], ans:0 },
{ q:"Largest river?", opts:["Nile","Amazon","Ganga","Yangtze"], ans:0 },
{ q:"Planet known red?", opts:["Mars","Earth","Venus","Jupiter"], ans:0 },
{ q:"Capital of France?", opts:["Berlin","Madrid","Paris","Rome"], ans:2 },
{ q:"Largest planet?", opts:["Earth","Mars","Jupiter","Saturn"], ans:2 },
{ q:"National tree of India?", opts:["Neem","Banyan","Peepal","Mango"], ans:1 },
{ q:"First man on moon?", opts:["Neil Armstrong","Buzz Aldrin","Yuri Gagarin","Kalpana"], ans:0 },
{ q:"Currency of UK?", opts:["Dollar","Euro","Pound","Yen"], ans:2 },


/* ===== APTITUDE ADD (to make 25 total) ===== */
{ q:"Next: 3,6,9,?", opts:["10","11","12","13"], ans:2 },
{ q:"Next: 5,10,20,?", opts:["30","40","50","60"], ans:1 },
{ q:"Odd one: 2,3,5,8", opts:["2","3","5","8"], ans:3 },
{ q:"Series: A,C,E,?", opts:["F","G","H","I"], ans:1 },
{ q:"Series: 1,4,9,?", opts:["12","14","16","18"], ans:2 },

{ q:"Average 2,4,6?", opts:["3","4","5","6"], ans:1 },
{ q:"Clock 6:00?", opts:["180°","90°","60°","120°"], ans:0 },
{ q:"Odd: Cat,Dog,Car,Cow", opts:["Cat","Dog","Car","Cow"], ans:2 },
{ q:"Complete: B,D,F,?", opts:["G","H","I","J"], ans:1 },
{ q:"Next: 10,20,30,?", opts:["35","40","45","50"], ans:1 },

{ q:"Find avg 10,20?", opts:["10","15","20","25"], ans:1 },
{ q:"Odd: Apple,Mango,Car,Banana", opts:["Apple","Mango","Car","Banana"], ans:2 },
{ q:"Series: 2,6,18,?", opts:["36","54","72","108"], ans:1 },
{ q:"Series: 100,90,80,?", opts:["60","70","75","85"], ans:1 },
{ q:"Odd: Red,Blue,Green,Dog", opts:["Red","Blue","Green","Dog"], ans:3 },

{ q:"Clock 9:00?", opts:["90°","180°","270°","0°"], ans:1 },
{ q:"Next: 1,1,2,3,5,?", opts:["6","7","8","9"], ans:2 },
{ q:"Series: Z,Y,X,?", opts:["W","V","U","T"], ans:0 },
{ q:"Odd: Sun,Moon,Star,Table", opts:["Sun","Moon","Star","Table"], ans:3 },
{ q:"Next: 4,16,64,?", opts:["128","256","512","1024"], ans:1 },
{ q:"Next: 4,9,16,?", opts:["20","25","30","36"], ans:1 },
{ q:"Odd one: Pen,Book,Table,Apple", opts:["Pen","Book","Table","Apple"], ans:3 },
{ q:"Series: 2,3,5,8,?", opts:["11","12","13","14"], ans:2 },
{ q:"Clock 12:00 angle?", opts:["0°","90°","180°","360°"], ans:0 },
{ q:"Complete: X,Y,?,A", opts:["Z","B","C","D"], ans:0 },

/* ===== MATHS (1–50) ===== */
{ q:"Solve: 2x=10", opts:["3","4","5","6"], ans:2 },
{ q:"15% of 200?", opts:["20","25","30","35"], ans:2 },
{ q:"√144=?", opts:["10","11","12","13"], ans:2 },
{ q:"LCM of 6,8?", opts:["24","12","16","18"], ans:0 },
{ q:"HCF of 12,16?", opts:["2","4","6","8"], ans:1 },
{ q:"Area of rectangle?", opts:["l+b","l×b","2l","2b"], ans:1 },
{ q:"Perimeter of square?", opts:["2a","3a","4a","a²"], ans:2 },
{ q:"Volume cube?", opts:["a²","a³","2a","3a"], ans:1 },
{ q:"9²=?", opts:["72","81","90","99"], ans:1 },
{ q:"7×8=?", opts:["54","56","58","60"], ans:1 },

{ q:"Convert 0.75?", opts:["1/2","3/4","2/3","4/5"], ans:1 },
{ q:"Simple interest formula?", opts:["PRT","PRT/100","P+R","None"], ans:1 },
{ q:"Speed=60km/h,2h?", opts:["100","110","120","130"], ans:2 },
{ q:"Average of 10,20,30?", opts:["15","20","25","30"], ans:1 },
{ q:"Prime number?", opts:["4","6","8","11"], ans:3 },

{ q:"10²=?", opts:["100","90","110","120"], ans:0 },
{ q:"25×4=?", opts:["80","90","100","110"], ans:2 },
{ q:"Half of 300?", opts:["100","120","150","180"], ans:2 },
{ q:"% formula?", opts:["(v/t)×100","v+t","v×t","None"], ans:0 },
{ q:"Cube of 3?", opts:["9","18","27","36"], ans:2 },

{ q:"√169=?", opts:["11","12","13","14"], ans:2 },
{ q:"12×12=?", opts:["124","134","144","154"], ans:2 },
{ q:"Odd number?", opts:["2","4","6","9"], ans:3 },
{ q:"Even number?", opts:["3","5","7","8"], ans:3 },
{ q:"3/4 of 200?", opts:["100","120","140","150"], ans:3 },

{ q:"Area triangle?", opts:["1/2bh","bh","2bh","b+h"], ans:0 },
{ q:"Perimeter rectangle?", opts:["l+b","2(l+b)","l×b","l-b"], ans:1 },
{ q:"5²=?", opts:["20","25","30","35"], ans:1 },
{ q:"6×7=?", opts:["40","42","44","46"], ans:1 },
{ q:"√81=?", opts:["7","8","9","10"], ans:2 },

{ q:"Convert 2.5?", opts:["5/2","2/5","3/2","4/2"], ans:0 },
{ q:"Interest formula?", opts:["PRT/100","PRT","P+R+T","None"], ans:0 },
{ q:"Speed formula?", opts:["d/t","t/d","d×t","None"], ans:0 },
{ q:"Distance=50×2?", opts:["80","90","100","110"], ans:2 },
{ q:"Average 5,10?", opts:["6","7","8","7.5"], ans:3 },

{ q:"7²=?", opts:["45","47","49","50"], ans:2 },
{ q:"8²=?", opts:["60","62","64","66"], ans:2 },
{ q:"9×9=?", opts:["72","81","90","99"], ans:1 },
{ q:"20% of 50?", opts:["5","10","15","20"], ans:1 },
{ q:"50% of 80?", opts:["20","30","40","50"], ans:2 },

{ q:"100-45=?", opts:["45","50","55","60"], ans:2 },
{ q:"200÷4=?", opts:["40","45","50","55"], ans:2 },
{ q:"30×3=?", opts:["80","90","100","110"], ans:1 },
{ q:"√36=?", opts:["5","6","7","8"], ans:1 },
{ q:"2³=?", opts:["6","7","8","9"], ans:2 },

{ q:"Max of 2,5,8?", opts:["2","5","8","6"], ans:2 },
{ q:"Min of 2,5,8?", opts:["2","5","8","6"], ans:0 },
{ q:"Fraction 1/2=?", opts:["0.5","0.2","0.3","0.4"], ans:0 },

];  

const hardQuestions = [
  { q: "What is the Bernoulli's principle related to?", opts: ["Fluid pressure and velocity", "Gravitational force", "Electromagnetic waves", "Nuclear reactions"], ans: 0 },
  { q: "What is the value of gravitational acceleration (g) on Earth's surface?", opts: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.2 m/s²"], ans: 1 },
  { q: "Which theorem states that the net flux through a closed surface equals enclosed charge divided by ε₀?", opts: ["Stokes' Theorem", "Gauss's Law", "Faraday's Law", "Ampere's Law"], ans: 1 },
  { q: "What is the escape velocity from Earth's surface?", opts: ["7.9 km/s", "9.8 km/s", "11.2 km/s", "13.5 km/s"], ans: 2 },
  { q: "In thermodynamics, what does the Second Law state?", opts: ["Energy is conserved", "Entropy of an isolated system always increases", "Pressure and volume are inversely proportional", "Heat flows from cold to hot"], ans: 1 },
  { q: "What is the Doppler Effect?", opts: ["Change in wave frequency due to relative motion between source and observer", "Bending of light around obstacles", "Reflection of sound waves", "Interference of two waves"], ans: 0 },
  { q: "What is the formula for kinetic energy?", opts: ["mgh", "½mv²", "mv", "Fd"], ans: 1 },
  { q: "Which law relates pressure and volume of a gas at constant temperature?", opts: ["Charles's Law", "Gay-Lussac's Law", "Boyle's Law", "Avogadro's Law"], ans: 2 },
  { q: "What is the refractive index of a medium?", opts: ["Speed of light in medium / Speed of light in vacuum", "Speed of light in vacuum / Speed of light in medium", "Wavelength in vacuum / Wavelength in medium", "Both B and C"], ans: 3 },
  { q: "What is the principle behind a gyroscope used in navigation?", opts: ["Conservation of linear momentum", "Conservation of angular momentum", "Electromagnetic induction", "Bernoulli's principle"], ans: 1 },

/* ===== MATHS (50) ===== */
{ q:"Roots of x²-7x+10?", opts:["2,5","3,4","1,10","-2,-5"], ans:0 },
{ q:"d/dx(x³)?", opts:["3x²","x²","x³","2x"], ans:0 },
{ q:"∫x dx?", opts:["x²/2","x²","2x","x"], ans:0 },
{ q:"log₁₀(100)?", opts:["1","2","3","4"], ans:1 },
{ q:"sin90°?", opts:["0","1","-1","∞"], ans:1 },

{ q:"cos0°?", opts:["0","1","-1","∞"], ans:1 },
{ q:"tan0°?", opts:["0","1","∞","-1"], ans:0 },
{ q:"det|2 3;1 4|?", opts:["5","-5","10","-10"], ans:0 },
{ q:"Limit x→0 (tanx/x)?", opts:["0","1","∞","-1"], ans:1 },
{ q:"5P2?", opts:["20","10","15","25"], ans:0 },

{ q:"5C3?", opts:["10","15","20","5"], ans:0 },
{ q:"Equation slope form?", opts:["y=mx+c","y=x","y=c","None"], ans:0 },
{ q:"sin²θ+cos²θ?", opts:["1","0","2","θ"], ans:0 },
{ q:"Vector magnitude?", opts:["√(x²+y²)","x+y","x²+y²","None"], ans:0 },
{ q:"Mean formula?", opts:["Σx/n","Σx","n/Σx","None"], ans:0 },

{ q:"Variance basic?", opts:["σ²","σ","μ","None"], ans:0 },
{ q:"Probability range?", opts:["0-1","0-10","1-10","-1 to1"], ans:0 },
{ q:"Distance formula?", opts:["√((x2-x1)²+(y2-y1)²)","x+y","x-y","None"], ans:0 },
{ q:"Slope?", opts:["(y2-y1)/(x2-x1)","x+y","x-y","None"], ans:0 },
{ q:"Area triangle?", opts:["1/2bh","bh","2bh","None"], ans:0 },

{ q:"Area circle?", opts:["πr²","2πr","r²","πd"], ans:0 },
{ q:"Derivative sinx?", opts:["cosx","-cosx","sinx","None"], ans:0 },
{ q:"Derivative cosx?", opts:["-sinx","sinx","cosx","None"], ans:0 },
{ q:"tan45°?", opts:["1","0","∞","-1"], ans:0 },
{ q:"sin30°?", opts:["1/2","√3/2","1","0"], ans:0 },

{ q:"cos60°?", opts:["1/2","√3/2","1","0"], ans:0 },
{ q:"Matrix identity?", opts:["I","0","1","None"], ans:0 },
{ q:"Determinant 0 means?", opts:["Singular","Non-singular","Zero matrix","None"], ans:0 },
{ q:"Integration constant?", opts:["C","k","x","None"], ans:0 },
{ q:"Exponential e?", opts:["2.718","3.14","1.41","None"], ans:0 },

{ q:"log rule?", opts:["log(ab)=loga+logb","loga-logb","loga/logb","None"], ans:0 },
{ q:"Angle sum triangle?", opts:["180°","360°","90°","270°"], ans:0 },
{ q:"Polygon sum?", opts:["(n-2)180","n180","n360","None"], ans:0 },
{ q:"Slope parallel lines?", opts:["Equal","Opposite","Zero","None"], ans:0 },
{ q:"Perpendicular slopes?", opts:["-1 product","Same","Zero","None"], ans:0 },

{ q:"Midpoint formula?", opts:["(x1+x2)/2","x+y","x-y","None"], ans:0 },
{ q:"Binomial expansion?", opts:["(a+b)ⁿ","(a-b)ⁿ","None","Both"], ans:0 },
{ q:"Series AP?", opts:["a+(n-1)d","a+nd","nd","None"], ans:0 },
{ q:"Series GP?", opts:["arⁿ","ar^(n-1)","a+r","None"], ans:1 },
{ q:"Complex i²?", opts:["-1","1","0","None"], ans:0 },

{ q:"Imaginary number?", opts:["√-1","√1","√2","None"], ans:0 },
{ q:"Modulus complex?", opts:["√(a²+b²)","a+b","a²+b²","None"], ans:0 },
{ q:"Limit infinity?", opts:["∞","0","1","None"], ans:0 },
{ q:"Function mapping?", opts:["Domain→Range","Range→Domain","None","Both"], ans:0 },
{ q:"Inverse function?", opts:["f⁻¹","f²","f","None"], ans:0 },

{ q:"Set union?", opts:["A∪B","A∩B","A-B","None"], ans:0 },
{ q:"Set intersection?", opts:["A∩B","A∪B","A-B","None"], ans:0 },
{ q:"Null set?", opts:["{}","[]","0","None"], ans:0 },
{ q:"Natural numbers?", opts:["1,2,3","0,1,2","-1,0,1","None"], ans:0 },

/* ===== PHYSICS (40) ===== */
{ q:"F=ma law?", opts:["Newton2","Newton1","Newton3","Ohm"], ans:0 },
{ q:"Work=0 when?", opts:["90°","0°","180°","None"], ans:0 },
{ q:"Momentum?", opts:["mv","m/v","v/m","None"], ans:0 },
{ q:"Energy unit?", opts:["Joule","Watt","Volt","Newton"], ans:0 },
{ q:"Power?", opts:["W/t","t/W","W×t","None"], ans:0 },

{ q:"Speed light?", opts:["3×10⁸","10⁸","10⁶","None"], ans:0 },
{ q:"Ohm law?", opts:["V=IR","I=VR","R=VI","None"], ans:0 },
{ q:"Capacitance?", opts:["Farad","Henry","Ohm","Tesla"], ans:0 },
{ q:"Magnetic unit?", opts:["Tesla","Weber","Henry","Volt"], ans:0 },
{ q:"Lens formula?", opts:["1/f=1/v+1/u","None","v=u","f=uv"], ans:0 },

{ q:"Wave speed?", opts:["fλ","f/λ","λ/f","None"], ans:0 },
{ q:"Sound medium?", opts:["Yes","No","None","Sometimes"], ans:0 },
{ q:"Light medium?", opts:["No","Yes","None","Sometimes"], ans:0 },
{ q:"Heat transfer radiation?", opts:["Yes","No","None","Sometimes"], ans:0 },
{ q:"Pressure unit?", opts:["Pascal","Newton","Joule","Watt"], ans:0 },

{ q:"Charge unit?", opts:["Coulomb","Volt","Amp","Ohm"], ans:0 },
{ q:"Voltage?", opts:["Volt","Amp","Ohm","Watt"], ans:0 },
{ q:"Resistance?", opts:["Ohm","Volt","Amp","Watt"], ans:0 },
{ q:"Current?", opts:["Amp","Volt","Ohm","Watt"], ans:0 },
{ q:"Frequency?", opts:["Hz","J","W","N"], ans:0 },

{ q:"Transformer uses?", opts:["AC","DC","Both","None"], ans:0 },
{ q:"Generator converts?", opts:["Mech→Elec","Elec→Mech","Heat→Elec","None"], ans:0 },
{ q:"Motor converts?", opts:["Elec→Mech","Mech→Elec","Heat→Elec","None"], ans:0 },
{ q:"Refraction?", opts:["Light bend","Bounce","Absorb","None"], ans:0 },
{ q:"Reflection?", opts:["Bounce","Bend","Absorb","None"], ans:0 },

{ q:"Gravity?", opts:["Attractive","Repulsive","None","Both"], ans:0 },
{ q:"Escape velocity?", opts:["√2gR","gR","2gR","None"], ans:0 },
{ q:"Kinetic energy?", opts:["1/2mv²","mv²","ma","None"], ans:0 },
{ q:"Potential energy?", opts:["mgh","mv²","ma","None"], ans:0 },
{ q:"Work?", opts:["F×d","F/d","d/F","None"], ans:0 },

{ q:"Force?", opts:["ma","m/a","a/m","None"], ans:0 },
{ q:"Acceleration?", opts:["Δv/t","v/t","d/t","None"], ans:0 },
{ q:"Velocity?", opts:["d/t","t/d","d×t","None"], ans:0 },
{ q:"Speed scalar?", opts:["Yes","No","Both","None"], ans:0 },
{ q:"Velocity vector?", opts:["Yes","No","Both","None"], ans:0 },

/* ===== CHEMISTRY (25) ===== */
{ q:"Atomic no= ?", opts:["Protons","Electrons","Neutrons","Mass"], ans:0 },
{ q:"Mole?", opts:["6.022e23","10²³","None","All"], ans:0 },
{ q:"Bond NaCl?", opts:["Ionic","Covalent","Metallic","None"], ans:0 },
{ q:"Bond H2?", opts:["Covalent","Ionic","Metallic","None"], ans:0 },
{ q:"Oxidation?", opts:["Loss e-","Gain e-","None","Both"], ans:0 },

{ q:"Reduction?", opts:["Gain e-","Loss e-","None","Both"], ans:0 },
{ q:"pH neutral?", opts:["7","1","14","None"], ans:0 },
{ q:"Acid?", opts:["H+ donor","OH-","None","Both"], ans:0 },
{ q:"Base?", opts:["OH-","H+","None","Both"], ans:0 },
{ q:"Salt?", opts:["Neutral","Acid","Base","None"], ans:0 },

{ q:"Electrolysis?", opts:["Chemical","Physical","None","Both"], ans:0 },
{ q:"Periodic table?", opts:["Elements","Compounds","Mixtures","None"], ans:0 },
{ q:"Metal?", opts:["Conduct","Non-conduct","None","Both"], ans:0 },
{ q:"Non-metal?", opts:["Non conduct","Conduct","None","Both"], ans:0 },
{ q:"Gas state?", opts:["High energy","Low","None","Both"], ans:0 },

{ q:"Liquid?", opts:["Medium","High","Low","None"], ans:0 },
{ q:"Solid?", opts:["Low","High","Medium","None"], ans:0 },
{ q:"Valency?", opts:["Combining","Mass","Charge","None"], ans:0 },
{ q:"Isotope?", opts:["Same Z diff A","Same A","None","Both"], ans:0 },
{ q:"Ion?", opts:["Charged","Neutral","None","Both"], ans:0 },

{ q:"Cation?", opts:["+","-","0","None"], ans:0 },
{ q:"Anion?", opts:["-","+","0","None"], ans:0 },
{ q:"Gas constant?", opts:["R","K","C","None"], ans:0 },
{ q:"Entropy?", opts:["Disorder","Order","None","Both"], ans:0 },
{ q:"Catalyst?", opts:["Speed reaction","Stop","None","Both"], ans:0 },

/* ===== ENGLISH (25) ===== */
{ q:"Synonym 'Obtain'?", opts:["Get","Lose","Give","None"], ans:0 },
{ q:"Antonym 'Expand'?", opts:["Contract","Grow","Extend","None"], ans:0 },
{ q:"Correct?", opts:["He does","He do","He dids","None"], ans:0 },
{ q:"Tense 'I had done'?", opts:["Past perfect","Present","Future","None"], ans:0 },
{ q:"Article before vowel?", opts:["An","A","The","None"], ans:0 },

{ q:"Plural 'mouse'?", opts:["Mice","Mouses","Mouse","None"], ans:0 },
{ q:"Verb?", opts:["Run","Table","Blue","None"], ans:0 },
{ q:"Noun?", opts:["City","Run","Blue","None"], ans:0 },
{ q:"Adjective?", opts:["Beautiful","Run","City","None"], ans:0 },
{ q:"Adverb?", opts:["Quickly","Quick","City","None"], ans:0 },

{ q:"Passive?", opts:["Object focus","Subject","Verb","None"], ans:0 },
{ q:"Active?", opts:["Subject focus","Object","Verb","None"], ans:0 },
{ q:"Direct speech?", opts:["Exact words","Changed","None","Both"], ans:0 },
{ q:"Indirect?", opts:["Reported","Exact","None","Both"], ans:0 },
{ q:"Synonym 'Huge'?", opts:["Big","Small","Tiny","None"], ans:0 },

{ q:"Antonym 'Ancient'?", opts:["Modern","Old","Past","None"], ans:0 },
{ q:"Correct spelling?", opts:["Separate","Seperate","Seprate","None"], ans:0 },
{ q:"Sentence?", opts:["He goes","He go","He going","None"], ans:0 },
{ q:"Pronoun?", opts:["He","Run","Blue","None"], ans:0 },
{ q:"Preposition?", opts:["In","Run","Blue","None"], ans:0 },

{ q:"Conjunction?", opts:["And","Run","Blue","None"], ans:0 },
{ q:"Interjection?", opts:["Wow","Run","Blue","None"], ans:0 },
{ q:"Past of go?", opts:["Went","Go","Gone","None"], ans:0 },
{ q:"Present?", opts:["Go","Went","Gone","None"], ans:0 },
{ q:"He has been working here ____ 5 years.", opts:["since","for","from","by"], ans:1 },
{ q:"She is fond ____ music.", opts:["of","in","on","at"], ans:0 },
{ q:"He is senior ____ me.", opts:["than","to","from","with"], ans:1 },
{ q:"No sooner had he arrived ____ it started raining.", opts:["when","than","then","that"], ans:1 },
{ q:"She prefers tea ____ coffee.", opts:["than","over","to","from"], ans:2 },

/* ===== GK (25) ===== */
{ q:"UN HQ?", opts:["NY","Paris","London","None"], ans:0 },
{ q:"Capital USA?", opts:["Washington","NY","LA","None"], ans:0 },
{ q:"Largest ocean?", opts:["Pacific","Atlantic","Indian","None"], ans:0 },
{ q:"Planet red?", opts:["Mars","Earth","Venus","None"], ans:0 },
{ q:"India independence?", opts:["1947","1948","1946","None"], ans:0 },

{ q:"Currency UK?", opts:["Pound","Dollar","Euro","None"], ans:0 },
{ q:"Currency Japan?", opts:["Yen","Dollar","Euro","None"], ans:0 },
{ q:"ISRO country?", opts:["India","USA","China","None"], ans:0 },
{ q:"NASA?", opts:["USA","India","Russia","None"], ans:0 },
{ q:"Largest continent?", opts:["Asia","Africa","Europe","None"], ans:0 },

{ q:"Smallest?", opts:["Australia","Asia","Europe","None"], ans:0 },
{ q:"River longest?", opts:["Nile","Amazon","Ganga","None"], ans:0 },
{ q:"Desert largest?", opts:["Sahara","Gobi","Thar","None"], ans:0 },
{ q:"Animal national?", opts:["Tiger","Lion","Elephant","None"], ans:0 },
{ q:"Bird national?", opts:["Peacock","Crow","Eagle","None"], ans:0 },

{ q:"Tree national?", opts:["Banyan","Neem","Peepal","None"], ans:0 },
{ q:"Sport national?", opts:["Hockey","Cricket","Football","None"], ans:0 },
{ q:"Day republic?", opts:["Jan26","Aug15","Oct2","None"], ans:0 },
{ q:"Day independence?", opts:["Aug15","Jan26","Oct2","None"], ans:0 },
{ q:"Teacher day?", opts:["Sep5","Oct2","Jan26","None"], ans:0 },

{ q:"Children day?", opts:["Nov14","Jan26","Aug15","None"], ans:0 },
{ q:"Earth satellite?", opts:["Moon","Mars","Sun","None"], ans:0 },
{ q:"Sun is?", opts:["Star","Planet","Moon","None"], ans:0 },
{ q:"Which strait separates India and Sri Lanka?", opts:["Malacca","Palk Strait","Hormuz","Bering"], ans:1 },
{ q:"Which country has no rivers?", opts:["Saudi Arabia","Egypt","UAE","Qatar"], ans:0 },
{ q:"Which Indian state has longest coastline?", opts:["Kerala","Tamil Nadu","Gujarat","Andhra Pradesh"], ans:2 },
{ q:"Which is the deepest ocean trench?", opts:["Java","Mariana","Tonga","Philippine"], ans:1 },

/* ===== APTITUDE (25) ===== */
{ q:"2,6,18,?", opts:["54","36","72","None"], ans:0 },
{ q:"1,1,2,3,5,?", opts:["8","7","6","None"], ans:0 },
{ q:"Square 12?", opts:["144","124","134","None"], ans:0 },
{ q:"Cube 4?", opts:["64","16","32","None"], ans:0 },
{ q:"Avg 10,20,30?", opts:["20","15","25","None"], ans:0 },

{ q:"Clock 3:00?", opts:["90°","0°","180°","None"], ans:0 },
{ q:"Clock 6:00?", opts:["180°","90°","0°","None"], ans:0 },
{ q:"Odd: Car,Bike,Bus,Apple", opts:["Apple","Car","Bike","None"], ans:0 },
{ q:"Series A,C,E?", opts:["G","F","H","None"], ans:0 },
{ q:"Series 2,4,8?", opts:["16","12","14","None"], ans:0 },

{ q:"Simple interest?", opts:["PRT/100","PRT","P+R","None"], ans:0 },
{ q:"Profit?", opts:["SP-CP","CP-SP","None","Both"], ans:0 },
{ q:"Loss?", opts:["CP-SP","SP-CP","None","Both"], ans:0 },
{ q:"Discount?", opts:["MP-SP","SP-MP","None","Both"], ans:0 },
{ q:"Ratio?", opts:["a:b","a+b","a-b","None"], ans:0 },

{ q:"Time speed distance?", opts:["d=st","s=dt","t=ds","None"], ans:0 },
{ q:"Percentage?", opts:["value/total×100","total/value","None","Both"], ans:0 },
{ q:"LCM?", opts:["Least multiple","Greatest factor","None","Both"], ans:0 },
{ q:"HCF?", opts:["Greatest factor","Least multiple","None","Both"], ans:0 },
{ q:"Even number?", opts:["Divisible by2","Odd","Prime","None"], ans:0 },

{ q:"Prime?", opts:["Only 2 factors","Even","Odd","None"], ans:0 },
{ q:"Odd number?", opts:["Not divisible by2","Even","Prime","None"], ans:0 },
{ q:"Sequence?", opts:["Order","Random","None","Both"], ans:0 },
{ q:"Pattern?", opts:["Rule","Random","None","Both"], ans:0 },
{ q:"Logic?", opts:["Reasoning","Guess","None","Both"], ans:0 }

]; 

// Shuffle answer positions for hard questions
function shuffleAnswerPositions(questions) {
  return questions.map(q => {
    const correctAnswer = q.opts[q.ans];
    const shuffledOpts = [...q.opts];
    
    // Fisher-Yates shuffle
    for (let i = shuffledOpts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOpts[i], shuffledOpts[j]] = [shuffledOpts[j], shuffledOpts[i]];
    }
    
    // Find new index of correct answer
    const newAns = shuffledOpts.indexOf(correctAnswer);
    
    return { q: q.q, opts: shuffledOpts, ans: newAns };
  });
}

// Apply shuffling to hard questions
const shuffledHardQuestions = shuffleAnswerPositions(hardQuestions);

const questionBank = { beginner: beginnerQuestions, medium: mediumQuestions, hard: shuffledHardQuestions };

// ── STATE ───────────────────────────────────────────────────────
let questions = [], currentIndex = 0, userAnswers = [], timerInterval = null, timeLeft = 10800;

// ── HELPERS ─────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function show(id) { document.getElementById(id).classList.remove('hidden'); }
function hide(id) { document.getElementById(id).classList.add('hidden'); }

// ── QUIZ START ──────────────────────────────────────────────────
function startQuiz(level) {
  questions = shuffle([...questionBank[level]]);
  userAnswers = new Array(questions.length).fill(null);
  currentIndex = 0;
  timeLeft = 10800;
  document.getElementById('quizTitle').textContent = `IMU-CET · ${level.charAt(0).toUpperCase() + level.slice(1)} Level`;
  hide('home'); hide('result'); show('quiz');
  renderQuestion();
  renderPalette();
  startTimer();
}

// ── RENDER QUESTION ─────────────────────────────────────────────
function renderQuestion() {
  const q = questions[currentIndex];
  const total = questions.length;
  document.getElementById('questionMeta').textContent = `Question ${currentIndex + 1} of ${total}`;
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('progressBar').style.width = `${((currentIndex + 1) / total) * 100}%`;

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';
  const saved = userAnswers[currentIndex];
  q.opts.forEach((opt, i) => {
    const label = document.createElement('label');
    let cls = 'option';
    if (saved !== null) {
      if (i === q.ans) cls += ' correct';
      else if (i === saved) cls += ' wrong';
    }
    label.className = cls;
    label.innerHTML = `<input type="radio" name="opt" value="${i}" ${saved === i ? 'checked' : ''}> ${opt}`;
    label.addEventListener('click', () => selectAnswer(i));
    optionsEl.appendChild(label);
  });

  document.getElementById('btnPrev').disabled = currentIndex === 0;
  document.getElementById('btnNext').style.display = currentIndex === total - 1 ? 'none' : 'inline-block';
  updateSubmitBtn();
  updatePalette();
}

function selectAnswer(i) {
  userAnswers[currentIndex] = i;
  const correctAns = questions[currentIndex].ans;
  document.querySelectorAll('.option').forEach((el, idx) => {
    el.classList.remove('selected', 'correct', 'wrong');
    el.querySelector('input').checked = false;
    if (idx === i) {
      el.querySelector('input').checked = true;
      el.classList.add(i === correctAns ? 'correct' : 'wrong');
    }
    if (idx === correctAns && i !== correctAns) el.classList.add('correct');
  });
  updateSubmitBtn();
  updatePalette();
}

function updateSubmitBtn() {
  document.getElementById('btnSubmit').disabled = userAnswers.filter(a => a !== null).length === 0;
}

// ── PALETTE ─────────────────────────────────────────────────────
function renderPalette() {
  const grid = document.getElementById('paletteGrid');
  grid.innerHTML = '';
  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'pal-btn';
    btn.textContent = i + 1;
    btn.onclick = () => { currentIndex = i; renderQuestion(); };
    grid.appendChild(btn);
  });
  updatePalette();
}

function updatePalette() {
  const btns = document.querySelectorAll('.pal-btn');
  btns.forEach((btn, i) => {
    btn.classList.remove('pal-active', 'pal-correct', 'pal-wrong');
    if (i === currentIndex) btn.classList.add('pal-active');
    if (userAnswers[i] !== null) {
      btn.classList.add(userAnswers[i] === questions[i].ans ? 'pal-correct' : 'pal-wrong');
    }
  });
}

// ── NAVIGATION ──────────────────────────────────────────────────
function nextQuestion() {
  if (currentIndex < questions.length - 1) { currentIndex++; renderQuestion(); }
}
function prevQuestion() {
  if (currentIndex > 0) { currentIndex--; renderQuestion(); }
}

// ── TIMER ───────────────────────────────────────────────────────
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const s = String(timeLeft % 60).padStart(2, '0');
    const el = document.getElementById('timer');
    el.textContent = `${m}:${s}`;
    el.classList.toggle('warning', timeLeft <= 900);
    if (timeLeft <= 0) submitQuiz();
  }, 1000);
}

// ── SUBMIT ──────────────────────────────────────────────────────
function confirmSubmit() {
  const unattempted = userAnswers.filter(a => a === null).length;
  const msg = unattempted > 0
    ? `You have ${unattempted} unanswered question(s). Submit anyway?`
    : 'Are you sure you want to submit the test?';
  if (confirm(msg)) submitQuiz();
}

function submitQuiz() {
  clearInterval(timerInterval);
  const total     = questions.length;
  const attempted = userAnswers.filter(a => a !== null).length;
  const correct   = questions.reduce((acc, q, i) => acc + (userAnswers[i] === q.ans ? 1 : 0), 0);
  const wrong     = attempted - correct;
  const percent   = ((correct / total) * 100).toFixed(1);
  document.getElementById('rTotal').textContent     = total;
  document.getElementById('rAttempted').textContent = attempted;
  document.getElementById('rCorrect').textContent   = correct;
  document.getElementById('rWrong').textContent     = wrong;
  document.getElementById('rScore').textContent     = `${correct}/${total}`;
  document.getElementById('rPercent').textContent   = `${percent}%`;
  hide('quiz'); show('result');
}

// ── HOME ────────────────────────────────────────────────────────
function confirmGoHome() {
  if (confirm('Go back to Home? Your progress will be lost.')) goHome();
}
function goHome() {
  clearInterval(timerInterval);
  hide('result'); hide('quiz'); show('home');
}
