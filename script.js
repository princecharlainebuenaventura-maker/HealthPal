/* ================================= */
/* CLOCK */
/* ================================= */

function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const time = now.toLocaleTimeString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    clock.textContent = `${time} (${timeZone})`;
}

updateClock();
setInterval(updateClock, 1000);


/* ================================= */
/* CONDITION SEARCH */
/* ================================= */

const conditionInput = document.getElementById("conditionInput");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");

const results = document.getElementById("results");

const symptomList = document.getElementById("symptomList");

const checkSymptomsButton =
    document.getElementById("checkSymptomsButton");

const clearSymptomsButton =
    document.getElementById("clearSymptomsButton");

const symptomResults =
    document.getElementById("symptomResults");


/* ================================= */
/* SETTINGS */
/* ================================= */

const MAX_CONDITIONS = 40;


/* ================================= */
/* HEALTH DATABASE */
/* ================================= */

const conditions = {

    

   shingles: {
    name: "Shingles",
    symptoms: [
        "Painful skin sensation",
        "Burning or tingling",
        "Skin rash",
        "Blisters",
        "Itching",
        "Headache",
        "Fever"
    ]
}, 

    roseola: {
    name: "Roseola",
    symptoms: [
        "High fever",
        "Skin rash",
        "Irritability",
        "Mild cough",
        "Runny nose",
        "Swollen eyelids"
    ]
},

    fifthDisease: {
    name: "Fifth Disease",
    symptoms: [
        "Mild fever",
        "Runny nose",
        "Headache",
        "Fatigue",
        "Joint pain",
        "Skin rash"
    ]
},

    whoopingCough: {
    name: "Whooping Cough (Pertussis)",
    symptoms: [
        "Severe coughing fits",
        "Runny nose",
        "Nasal congestion",
        "Fever",
        "Fatigue",
        "Vomiting after coughing"
    ]
},

    laryngitis: {
    name: "Laryngitis",
    symptoms: [
        "Hoarse voice",
        "Loss of voice",
        "Sore throat",
        "Cough",
        "Throat irritation"
    ]
},

    croup: {
    name: "Croup",
    symptoms: [
        "Barking cough",
        "Hoarse voice",
        "Runny nose",
        "Fever",
        "Noisy breathing"
    ]
},

    bronchiolitis: {
    name: "Bronchiolitis",
    symptoms: [
        "Cough",
        "Runny nose",
        "Stuffy nose",
        "Fever",
        "Wheezing",
        "Fast breathing",
        "Difficulty feeding"
    ]
},

   mononucleosis: {
    name: "Mononucleosis (Mono)",
    symptoms: [
        "Fatigue",
        "Sore throat",
        "Fever",
        "Swollen lymph nodes",
        "Headache",
        "Body aches"
    ]
},

bronchiolitis: {
    name: "Bronchiolitis",
    symptoms: [
        "Cough",
        "Runny nose",
        "Stuffy nose",
        "Fever",
        "Wheezing",
        "Fast breathing",
        "Difficulty feeding"
    ]
}, 

    "scarlet fever": {

    keywords: [
        "scarlet fever",
        "scarletina",
        "scarlatina"
    ],

    name: "Scarlet Fever",

    description:
        "Scarlet fever is an infection caused by certain types of group A Streptococcus bacteria. It can cause a sore throat and a widespread rash.",

    symptoms: [
        "Fever",
        "Sore throat",
        "Skin rash",
        "Red spots",
        "Swollen glands in the neck",
        "Headache",
        "Feeling tired",
        "Difficulty or discomfort when swallowing",
        "Nausea",
        "Vomiting"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you have symptoms.",
        "Talk to a healthcare professional for evaluation.",
        "Get plenty of rest and drink enough fluids.",
        "Follow any treatment instructions given by a healthcare professional."
    ],

    seekHelp: [
        "You are having difficulty breathing.",
        "You are having serious difficulty swallowing.",
        "You cannot drink enough fluids.",
        "Symptoms are severe or getting worse.",
        "You are worried about your symptoms."
    ]
},

    "urinary tract infection": {

    keywords: [
        "uti",
        "urinary tract infection",
        "bladder infection",
        "urine infection"
    ],

    name: "Urinary Tract Infection (UTI)",

    description:
        "A urinary tract infection is an infection affecting part of the urinary system, such as the bladder or urethra.",

    symptoms: [
        "Pain or burning when urinating",
        "Needing to urinate frequently",
        "Strong or unusual-smelling urine",
        "Cloudy urine",
        "Lower abdominal pain",
        "Feeling tired",
        "Fever"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you have symptoms.",
        "Talk to a healthcare professional because a UTI may need medical evaluation and treatment.",
        "Drink fluids regularly unless a healthcare professional has told you to limit fluids."
    ],

    seekHelp: [
        "You have a high fever.",
        "You have pain in your back or side.",
        "You are vomiting or feeling very unwell.",
        "Symptoms are getting worse.",
        "You are worried about your symptoms."
    ]
},

    "tonsillitis": {

    keywords: [
        "tonsillitis",
        "tonsil infection",
        "swollen tonsils",
        "inflamed tonsils"
    ],

    name: "Tonsillitis",

    description:
        "Tonsillitis is inflammation of the tonsils. It can be caused by viruses or bacteria.",

    symptoms: [
        "Sore throat",
        "Difficulty or discomfort when swallowing",
        "Swollen tonsils",
        "Redness in the throat",
        "Fever",
        "Swollen glands in the neck",
        "Headache",
        "Feeling tired",
        "Bad breath"
    ],

    advice: [
        "Get plenty of rest.",
        "Drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are feeling unwell.",
        "Talk to a healthcare professional if symptoms are severe or do not improve."
    ],

    seekHelp: [
        "You are having significant difficulty breathing.",
        "You are having serious difficulty swallowing.",
        "You cannot drink enough fluids.",
        "Symptoms are severe or getting worse.",
        "You are worried about your symptoms."
    ]
},

    "measles": {

    keywords: [
        "measles",
        "rubeola"
    ],

    name: "Measles",

    description:
        "Measles is a highly contagious viral infection that can cause fever, cough, runny nose, and a widespread rash.",

    symptoms: [
        "Fever",
        "Cough",
        "Runny or stuffy nose",
        "Red or watery eyes",
        "Feeling tired",
        "Headache",
        "Skin rash",
        "Red spots"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you have symptoms that concern you.",
        "Contact a healthcare professional for advice if you may have measles.",
        "Avoid close contact with others until you receive appropriate medical advice.",
        "Get plenty of rest and drink enough fluids."
    ],

    seekHelp: [
        "You are having difficulty breathing.",
        "You are very weak, confused, or unusually sleepy.",
        "Symptoms are severe or getting worse.",
        "You are worried that you may have measles."
    ]
},

    "pneumonia": {

    keywords: [
        "pneumonia",
        "lung infection"
    ],

    name: "Pneumonia",

    description:
        "Pneumonia is an infection that affects the lungs. It can be caused by viruses, bacteria, or other germs.",

    symptoms: [
        "Cough",
        "Fever",
        "Chills",
        "Shortness of breath",
        "Difficulty breathing",
        "Chest pain",
        "Feeling tired",
        "Nausea",
        "Vomiting"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you have symptoms that concern you.",
        "Get plenty of rest.",
        "Drink enough fluids.",
        "Talk to a healthcare professional if you think you may have pneumonia."
    ],

    seekHelp: [
        "You are having significant difficulty breathing.",
        "Your breathing is getting worse.",
        "You have severe chest pain.",
        "You are unusually confused, very sleepy, or extremely unwell.",
        "You are worried about your breathing or symptoms."
    ]
},

    "dengue": {

    keywords: [
        "dengue",
        "dengue fever"
    ],

    name: "Dengue",

    description:
        "Dengue is a viral infection spread mainly by infected mosquitoes. It can cause a high fever and other symptoms.",

    symptoms: [
        "High fever",
        "Severe headache",
        "Pain behind the eyes",
        "Muscle aches",
        "Joint pain",
        "Bone pain",
        "Nausea",
        "Vomiting",
        "Skin rash",
        "Feeling tired"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you have symptoms that concern you.",
        "Drink enough fluids.",
        "Rest and monitor your symptoms.",
        "Talk to a healthcare professional if you think you may have dengue."
    ],

    seekHelp: [
        "You have severe abdominal pain.",
        "You are vomiting repeatedly.",
        "You have bleeding or unusual bruising.",
        "You become very weak, restless, or unusually sleepy.",
        "Your symptoms are getting worse.",
        "You are worried about your symptoms."
    ]
},

    "hand foot and mouth disease": {

    keywords: [
        "hand foot and mouth disease",
        "hand foot mouth disease",
        "hfmd",
        "hand foot mouth"
    ],

    name: "Hand, Foot, and Mouth Disease",

    description:
        "Hand, foot, and mouth disease is a common viral illness that can cause fever, mouth sores, and a rash on the hands and feet.",

    symptoms: [
        "Fever",
        "Sore throat",
        "Feeling tired",
        "Mouth sores",
        "Skin rash",
        "Red spots",
        "Blisters",
        "Loss of appetite"
    ],

    advice: [
        "Get plenty of rest.",
        "Drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are feeling unwell.",
        "Talk to a healthcare professional if symptoms are severe or concerning."
    ],

    seekHelp: [
        "You cannot drink enough fluids.",
        "You show signs of dehydration.",
        "Symptoms are severe or getting worse.",
        "You are unusually sleepy or very unwell.",
        "You are worried about your symptoms."
    ]
},

    "scabies": {

    keywords: [
        "scabies",
        "scabies infection"
    ],

    name: "Scabies",

    description:
        "Scabies is a skin condition caused by tiny mites that can cause intense itching and a rash.",

    symptoms: [
        "Intense itching",
        "Skin rash",
        "Small bumps on the skin",
        "Red or irritated skin",
        "Thin lines or burrows on the skin",
        "Itching that is worse at night"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you think you may have scabies.",
        "A healthcare professional can confirm whether treatment is needed.",
        "Avoid sharing clothing, towels, or bedding until you have received appropriate advice.",
        "Follow the treatment instructions provided by a healthcare professional."
    ],

    seekHelp: [
        "The itching is severe.",
        "The rash is spreading.",
        "The skin develops signs of infection.",
        "Symptoms do not improve.",
        "You are worried about the symptoms."
    ]
},

    "ringworm": {

    keywords: [
        "ringworm",
        "tinea",
        "fungal skin infection"
    ],

    name: "Ringworm",

    description:
        "Ringworm is a common fungal infection that can affect the skin, scalp, feet, or other areas of the body.",

    symptoms: [
        "Itchy skin",
        "Red skin",
        "Skin rash",
        "Scaly skin",
        "Dry or cracked skin",
        "Circular or ring-shaped rash",
        "Peeling skin"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you notice a suspicious skin rash.",
        "Keep the affected area clean and dry.",
        "Avoid sharing towels, clothing, brushes, or other personal items.",
        "Talk to a healthcare professional if the rash does not improve."
    ],

    seekHelp: [
        "The rash is spreading quickly.",
        "The affected area becomes very painful or swollen.",
        "There is drainage from the affected skin.",
        "Symptoms are getting worse.",
        "You are worried about the rash."
    ]
},

    "eczema": {

    keywords: [
        "eczema",
        "atopic eczema",
        "atopic dermatitis",
        "dermatitis"
    ],

    name: "Eczema",

    description:
        "Eczema is a group of conditions that can cause dry, itchy, and irritated skin.",

    symptoms: [
        "Itchy skin",
        "Dry skin",
        "Red or irritated skin",
        "Skin rash",
        "Swelling",
        "Cracked skin",
        "Flaking skin"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if your skin is bothering you.",
        "Try to avoid things that you know irritate your skin.",
        "Keep your skin moisturized with products recommended for you.",
        "Talk to a healthcare professional if symptoms are persistent or bothersome."
    ],

    seekHelp: [
        "The rash is rapidly getting worse.",
        "The skin becomes very painful, swollen, or warm.",
        "There is fluid or drainage from the affected skin.",
        "You develop a fever and feel unwell.",
        "You are worried about the skin changes."
    ]
},

    "dehydration": {

    keywords: [
        "dehydration",
        "dehydrated",
        "not enough water",
        "low fluids"
    ],

    name: "Dehydration",

    description:
        "Dehydration happens when the body loses more fluids than it takes in.",

    symptoms: [
        "Thirst",
        "Dry mouth",
        "Feeling tired",
        "Dizziness",
        "Headache",
        "Dark-colored urine",
        "Urinating less often"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you think you may be dehydrated.",
        "Drink fluids regularly.",
        "Rest somewhere cool if you have been exercising or spending time in hot weather.",
        "Talk to a healthcare professional if symptoms do not improve."
    ],

    seekHelp: [
        "You are very dizzy, confused, or unusually sleepy.",
        "You cannot keep fluids down.",
        "You are barely urinating or have stopped urinating.",
        "Symptoms are severe or getting worse.",
        "You are worried about your symptoms."
    ]
},

   "migraine": {

    keywords: [
        "migraine",
        "migraines"
    ],

    name: "Migraine",

    description:
        "A migraine is a type of headache that can cause moderate to severe head pain and may occur with other symptoms.",

    symptoms: [
        "Headache",
        "Sensitivity to light",
        "Sensitivity to sound",
        "Feeling nauseous",
        "Vomiting",
        "Feeling tired",
        "Dizziness"
    ],

    advice: [
        "Rest somewhere quiet and comfortable.",
        "Drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are feeling unwell.",
        "Talk to a healthcare professional if headaches happen frequently or interfere with normal activities."
    ],

    seekHelp: [
        "The headache is sudden and extremely severe.",
        "The headache follows a head injury.",
        "You have new or unusual symptoms.",
        "You have trouble speaking, moving, seeing, or staying awake.",
        "You are worried about your symptoms."
    ]
}, 

    "gastroenteritis": {

    keywords: [
        "gastroenteritis",
        "gastro",
        "stomach infection",
        "stomach bug"
    ],

    name: "Gastroenteritis",

    description:
        "Gastroenteritis is inflammation of the stomach and intestines. It can be caused by viruses, bacteria, or other causes.",

    symptoms: [
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Stomach pain",
        "Stomach cramps",
        "Fever",
        "Feeling tired",
        "Headache"
    ],

    advice: [
        "Rest and drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are feeling unwell.",
        "Wash your hands regularly with soap and water.",
        "Talk to a healthcare professional if symptoms are severe or do not improve."
    ],

    seekHelp: [
        "You have signs of dehydration.",
        "You cannot keep fluids down.",
        "You have severe or worsening stomach pain.",
        "There is blood in vomit or stool.",
        "You are very unwell or worried about your symptoms."
    ]
},

    "food poisoning": {

    keywords: [
        "food poisoning",
        "foodborne illness",
        "foodborne infection",
        "bad food"
    ],

    name: "Food Poisoning",

    description:
        "Food poisoning is an illness caused by eating or drinking something contaminated with harmful germs or toxins.",

    symptoms: [
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Stomach pain",
        "Stomach cramps",
        "Fever",
        "Feeling tired",
        "Headache"
    ],

    advice: [
        "Rest and drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are feeling sick.",
        "Wash your hands regularly.",
        "If symptoms continue or concern you, talk to a healthcare professional."
    ],

    seekHelp: [
        "You have signs of dehydration.",
        "You cannot keep fluids down.",
        "You have severe or worsening stomach pain.",
        "There is blood in vomit or stool.",
        "You are very unwell or worried about your symptoms."
    ]
},

    "norovirus": {

    keywords: [
        "norovirus",
        "noro virus",
        "stomach bug",
        "stomach flu"
    ],

    name: "Norovirus",

    description:
        "Norovirus is a very contagious virus that commonly causes vomiting and diarrhea.",

    symptoms: [
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Stomach pain",
        "Stomach cramps",
        "Feeling tired",
        "Headache",
        "Mild fever",
        "Body aches"
    ],

    advice: [
        "Rest and drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are sick.",
        "Wash your hands carefully with soap and water.",
        "Avoid preparing food for other people while you are sick."
    ],

    seekHelp: [
        "You cannot keep fluids down.",
        "You have signs of dehydration.",
        "You have severe or worsening symptoms.",
        "There is blood in vomit or stool.",
        "You are worried about your symptoms."
    ]
},

    "covid-19": {

    keywords: [
        "covid",
        "covid-19",
        "coronavirus",
        "corona virus",
        "sars-cov-2"
    ],

    name: "COVID-19",

    description:
        "COVID-19 is an illness caused by the SARS-CoV-2 virus. Symptoms can range from mild to more serious and can vary from person to person.",

    symptoms: [
        "Fever or feeling feverish",
        "Cough",
        "Sore throat",
        "Runny or stuffy nose",
        "Feeling tired",
        "Headache",
        "Body aches",
        "Nausea",
        "Vomiting",
        "Diarrhea",
        "Reduced or changed sense of smell",
        "Reduced or changed sense of taste"
    ],

    advice: [
        "Get plenty of rest.",
        "Drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are feeling unwell.",
        "Follow current guidance from a healthcare professional or local health authority."
    ],

    seekHelp: [
        "You are having trouble breathing.",
        "You have severe or worsening symptoms.",
        "You are unusually confused, very difficult to wake, or extremely unwell.",
        "You are worried about your symptoms."
    ]
},

    "strep throat": {

    keywords: [
        "strep throat",
        "strep",
        "streptococcal throat infection"
    ],

    name: "Strep Throat",

    description:
        "Strep throat is a bacterial infection that can cause a sore throat and other symptoms.",

    symptoms: [
        "Sore throat",
        "Pain when swallowing",
        "Fever",
        "Swollen glands in the neck",
        "Redness in the throat",
        "Headache",
        "Feeling tired",
        "Nausea",
        "Stomach pain"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you have symptoms.",
        "A healthcare professional can determine whether testing is appropriate.",
        "Get plenty of rest and drink enough fluids.",
        "If a healthcare professional diagnoses strep throat, follow their treatment instructions."
    ],

    seekHelp: [
        "You are having difficulty breathing.",
        "You are having serious difficulty swallowing.",
        "Symptoms are severe or getting worse.",
        "You are unable to drink enough fluids.",
        "You are worried about your symptoms."
    ]
},

    "bronchitis": {

    keywords: [
        "bronchitis",
        "acute bronchitis",
        "chest cold"
    ],

    name: "Bronchitis",

    description:
        "Bronchitis happens when the airways that carry air to the lungs become inflamed. Acute bronchitis is often caused by an infection.",

    symptoms: [
        "Cough",
        "Coughing up mucus",
        "Feeling tired",
        "Sore throat",
        "Chest discomfort",
        "Mild fever",
        "Shortness of breath"
    ],

    advice: [
        "Get plenty of rest.",
        "Drink enough fluids.",
        "Tell a parent, guardian, or trusted adult if you are feeling unwell.",
        "Talk to a healthcare professional if your cough is persistent or concerning."
    ],

    seekHelp: [
        "You are having trouble breathing.",
        "You have severe or worsening chest discomfort.",
        "Your symptoms are getting worse.",
        "You are worried about your symptoms."
    ]
},

    "asthma": {

    keywords: [
        "asthma",
        "asthmatic"
    ],

    name: "Asthma",

    description:
        "Asthma is a condition that can cause the airways to become narrowed and make breathing more difficult.",

    symptoms: [
        "Cough",
        "Wheezing",
        "Shortness of breath",
        "Chest tightness",
        "Difficulty breathing"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult about your symptoms.",
        "Follow the asthma management plan provided by your healthcare professional, if you have one.",
        "Try to avoid known triggers when possible.",
        "Talk to a healthcare professional if breathing symptoms are happening repeatedly."
    ],

    seekHelp: [
        "You are having significant difficulty breathing.",
        "Breathing symptoms are rapidly getting worse.",
        "You are unable to speak normally because of difficulty breathing.",
        "You are worried that your breathing is not normal."
    ]
},

    "allergies": {

    keywords: [
        "allergy",
        "allergies",
        "allergic reaction",
        "hay fever",
        "seasonal allergies"
    ],

    name: "Allergies",

    description:
        "Allergies happen when the immune system reacts to a substance that is usually harmless, such as pollen, dust, or certain foods.",

    symptoms: [
        "Sneezing",
        "Runny or stuffy nose",
        "Itchy eyes",
        "Watery eyes",
        "Cough",
        "Skin rash",
        "Itchy skin",
        "Swelling"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you are having allergy symptoms.",
        "Try to avoid a substance that you know causes your allergies.",
        "Talk to a healthcare professional if your symptoms keep happening or are bothering you."
    ],

    seekHelp: [
        "You are having trouble breathing.",
        "Your face, lips, tongue, or throat suddenly becomes swollen.",
        "You feel very unwell after being exposed to something you may be allergic to.",
        "Symptoms are severe or getting worse."
    ]
},

    "mpox": {

    keywords: [
        "mpox",
        "monkeypox",
        "monkey pox"
    ],

    name: "Mpox (Monkeypox)",

    description:
        "Mpox is an infection caused by the mpox virus. It can cause a rash and other symptoms.",

    symptoms: [
        "Fever or feeling feverish",
        "Chills",
        "Headache",
        "Feeling tired",
        "Body aches",
        "Swollen lymph nodes",
        "Rash",
        "Blisters"
    ],

    advice: [
        "Tell a parent, guardian, or trusted adult if you are concerned.",
        "If you have a new or unexplained rash or other symptoms that could be mpox, contact a healthcare professional.",
        "Avoid close contact with someone who may have mpox until they have been medically evaluated."
    ],

    seekHelp: [
        "You have a new or unexplained rash.",
        "You have symptoms that could be mpox.",
        "Your symptoms are severe or getting worse.",
        "You are worried about your symptoms."
    ]
},

    "common cold": {

        keywords: [
            "cold",
            "common cold",
            "runny nose",
            "stuffy nose"
        ],

        name: "Common Cold",

        description:
            "The common cold is a viral infection that usually affects the nose and throat.",

        symptoms: [
            "Runny or stuffy nose",
            "Sneezing",
            "Cough",
            "Sore throat",
            "Feeling tired",
            "Mild headache",
            "Mild body aches",
            "Watery eyes"
        ],

        advice: [
            "Get plenty of rest.",
            "Drink enough fluids.",
            "Monitor your symptoms.",
            "Talk to a trusted adult or healthcare professional if you are unsure what to do."
        ],

        seekHelp: [
            "Symptoms are severe or getting worse.",
            "You are having trouble breathing.",
            "You are worried about your symptoms."
        ]
    },


    "headache": {

        keywords: [
            "headache",
            "head pain",
            "head hurts",
            "my head hurts"
        ],

        name: "Headache",

        description:
            "A headache is pain or discomfort in the head or surrounding area. There are many possible causes.",

        symptoms: [
            "Headache",
            "Feeling tired",
            "Sensitivity to light",
            "Sensitivity to sound",
            "Feeling nauseous"
        ],

        advice: [
            "Rest somewhere comfortable.",
            "Drink some water.",
            "Take a break from activities that may be making the headache worse.",
            "Tell a trusted adult if you are feeling unwell."
        ],

        seekHelp: [
            "The headache is severe or unusual.",
            "Headaches happen frequently.",
            "The headache follows an injury.",
            "You are worried about your symptoms."
        ]
    },


    "sore throat": {

        keywords: [
            "sore throat",
            "throat hurts",
            "my throat hurts",
            "throat pain",
            "scratchy throat"
        ],

        name: "Sore Throat",

        description:
            "A sore throat can have several causes, including viral infections and other conditions.",

        symptoms: [
            "Sore throat",
            "Dry or scratchy throat",
            "Difficulty or discomfort when swallowing",
            "Redness in the throat",
            "Swollen glands in the neck",
            "Hoarse voice"
        ],

        advice: [
            "Drink plenty of fluids.",
            "Get adequate rest.",
            "Monitor your symptoms.",
            "Tell a trusted adult if you are feeling unwell."
        ],

        seekHelp: [
            "Symptoms are severe.",
            "Symptoms are getting worse.",
            "You are having difficulty breathing.",
            "You are having serious difficulty swallowing.",
            "You are worried about your symptoms."
        ]
    },


    "flu": {

        keywords: [
            "flu",
            "influenza"
        ],

        name: "Flu",

        description:
            "The flu, also called influenza, is a respiratory infection caused by influenza viruses.",

        symptoms: [
            "Fever or feeling feverish",
            "Chills",
            "Cough",
            "Sore throat",
            "Runny or stuffy nose",
            "Body aches",
            "Headache",
            "Tiredness",
            "Nausea",
            "Vomiting"
        ],

        advice: [
            "Get plenty of rest.",
            "Drink enough fluids.",
            "Stay home when you are sick.",
            "Tell a trusted adult if you are feeling very sick or worried."
        ],

        seekHelp: [
            "You are very sick or your symptoms are getting worse.",
            "You are having trouble breathing.",
            "You are worried about your illness."
        ]
    },


    "ear infection": {

        keywords: [
            "ear infection",
            "earache",
            "ear pain",
            "my ear hurts"
        ],

        name: "Ear Infection",

        description:
            "An ear infection can happen when the middle ear becomes swollen or infected.",

        symptoms: [
            "Ear pain",
            "Feeling pressure or fullness in the ear",
            "Difficulty hearing",
            "Fever",
            "Irritability",
            "Fluid or discharge from the ear"
        ],

        advice: [
            "Tell a parent, guardian, or other trusted adult.",
            "Have a healthcare professional evaluate the symptoms when appropriate.",
            "Monitor whether the symptoms improve or get worse."
        ],

        seekHelp: [
            "There is severe ear pain.",
            "There is fluid or discharge from the ear.",
            "There is a fever or the person seems very unwell.",
            "Symptoms are getting worse."
        ]
    },


    "chickenpox": {

        keywords: [
            "chickenpox",
            "chicken pox",
            "varicella"
        ],

        name: "Chickenpox",

        description:
            "Chickenpox is an infection caused by the varicella-zoster virus.",

        symptoms: [
            "Itchy rash",
            "Red spots",
            "Blisters",
            "Fever",
            "Headache",
            "Tiredness",
            "Loss of appetite"
        ],

        advice: [
            "Tell a parent, guardian, or healthcare professional.",
            "Avoid scratching irritated areas.",
            "Rest and drink enough fluids."
        ],

        seekHelp: [
            "Symptoms are severe.",
            "The person is very unwell.",
            "The skin appears to be developing signs of infection.",
            "You are worried about the symptoms."
        ]
    },


    "pink eye": {

        keywords: [
            "pink eye",
            "pinkeye",
            "conjunctivitis",
            "red eye",
            "itchy eye"
        ],

        name: "Pink Eye",

        description:
            "Pink eye, also called conjunctivitis, is inflammation affecting the eye.",

        symptoms: [
            "Eye redness",
            "Swelling",
            "Itchy eyes",
            "Burning eyes",
            "Eye discharge",
            "Eye irritation"
        ],

        advice: [
            "Avoid touching or rubbing your eyes.",
            "Wash your hands regularly.",
            "Avoid sharing towels or other personal items.",
            "Tell a trusted adult if you have eye symptoms."
        ],

        seekHelp: [
            "You have significant eye pain.",
            "Your vision changes.",
            "Symptoms are severe or getting worse.",
            "You are worried about your eye."
        ]
    },


    "sinusitis": {

        keywords: [
            "sinusitis",
            "sinus infection",
            "sinus problem",
            "sinus"
        ],

        name: "Sinusitis",

        description:
            "Sinusitis happens when the tissue lining the sinuses becomes swollen or inflamed.",

        symptoms: [
            "Stuffy nose",
            "Nasal discharge",
            "Cough",
            "Headache",
            "Facial pressure or pain",
            "Sore throat",
            "Postnasal drip",
            "Fatigue",
            "Fever",
            "Reduced sense of smell"
        ],

        advice: [
            "Get adequate rest.",
            "Drink enough fluids.",
            "Monitor whether symptoms improve or get worse.",
            "Talk to a healthcare professional if symptoms persist or concern you."
        ],

        seekHelp: [
            "Symptoms are getting worse instead of improving.",
            "There is a high fever.",
            "Symptoms last unusually long.",
            "You are worried about the symptoms."
        ]
    },


    "athletes foot": {

        keywords: [
            "athletes foot",
            "athlete's foot",
            "tinea pedis"
        ],

        name: "Athlete's Foot",

        description:
            "Athlete's foot is a fungal infection that commonly affects the skin of the feet.",

        symptoms: [
            "Cracked skin",
            "Flaking skin",
            "Peeling skin",
            "Itchy skin",
            "Red skin",
            "Burning or stinging",
            "Blisters",
            "Changes to the toenails"
        ],

        advice: [
            "Keep your feet clean and dry.",
            "Avoid sharing towels, shoes, or other personal items.",
            "Tell a trusted adult if symptoms do not improve."
        ],

        seekHelp: [
            "The foot becomes swollen or warm.",
            "There is drainage from the affected area.",
            "There is a fever.",
            "Symptoms do not improve."
        ]
    },


    "impetigo": {

        keywords: [
            "impetigo"
        ],

        name: "Impetigo",

        description:
            "Impetigo is a common bacterial infection of the outer layer of the skin.",

        symptoms: [
            "Skin sores",
            "Blisters",
            "Itching",
            "Yellow or honey-colored crusts",
            "Red or irritated skin",
            "Swollen lymph nodes near the affected area"
        ],

        advice: [
            "Tell a parent, guardian, or healthcare professional.",
            "Keep the affected skin clean.",
            "Avoid scratching or touching affected areas.",
            "Do not share towels, clothing, or personal items."
        ],

        seekHelp: [
            "You think you may have impetigo.",
            "The infection is spreading.",
            "Symptoms are getting worse.",
            "You are worried about the skin changes."
        ]
    },


    "cancer": {

        keywords: [
            "cancer"
        ],

        name: "Cancer",

        description:
            "Cancer refers to many different diseases and requires professional medical evaluation.",

        symptoms: [],

        advice: [
            "Please consult a qualified doctor or healthcare professional.",
            "Do not rely on this website to diagnose or treat cancer."
        ],

        seekHelp: [
            "Please consult a qualified doctor or healthcare professional."
        ]
    }

};


/* ================================= */
/* SYMPTOM CATEGORIES */
/* ================================= */

const symptomCategories = {

    "🤧 Cold & Flu": [
        "Runny or stuffy nose",
        "Sneezing",
        "Cough",
        "Sore throat",
        "Chills",
        "Fever or feeling feverish",
        "Body aches",
        "Mild body aches",
        "Watery eyes"
    ],

    "🤕 Head & Body": [
        "Headache",
        "Mild headache",
        "Feeling tired",
        "Tiredness",
        "Sensitivity to light",
        "Sensitivity to sound",
        "Irritability",
        "Loss of appetite"
    ],

    "🤢 Stomach": [
        "Feeling nauseous",
        "Nausea",
        "Vomiting"
    ],

    "👁️ Eyes & Ears": [
        "Eye redness",
        "Swelling",
        "Itchy eyes",
        "Burning eyes",
        "Eye discharge",
        "Eye irritation",
        "Ear pain",
        "Feeling pressure or fullness in the ear",
        "Difficulty hearing",
        "Fluid or discharge from the ear"
    ],

    "🩹 Skin": [
        "Itchy rash",
        "Red spots",
        "Blisters",
        "Cracked skin",
        "Flaking skin",
        "Peeling skin",
        "Itchy skin",
        "Red skin",
        "Burning or stinging",
        "Changes to the toenails",
        "Skin sores",
        "Yellow or honey-colored crusts",
        "Red or irritated skin",
        "Swollen lymph nodes near the affected area"
    ],

    "🫁 Breathing & Nose": [
        "Stuffy nose",
        "Nasal discharge",
        "Postnasal drip",
        "Reduced sense of smell"
    ],

    "🗣️ Throat & Voice": [
        "Dry or scratchy throat",
        "Difficulty or discomfort when swallowing",
        "Redness in the throat",
        "Swollen glands in the neck",
        "Hoarse voice"
    ],

    "🌡️ General": [
        "Fever",
        "Fever or feeling feverish",
        "Fatigue",
        "Feeling tired"
    ]

};


/* ================================= */
/* EVERYDAY SYMPTOM WORDING */
/* ================================= */

const symptomAliases = {

    "my head hurts": "Headache",
    "head hurts": "Headache",

    "my throat hurts": "Sore throat",
    "throat hurts": "Sore throat",

    "my ear hurts": "Ear pain",
    "ear hurts": "Ear pain",

    "nose is blocked": "Stuffy nose",
    "blocked nose": "Stuffy nose",
    "my nose is blocked": "Stuffy nose",

    "nose is running": "Runny or stuffy nose",
    "runny nose": "Runny or stuffy nose",

    "i keep sneezing": "Sneezing",
    "keep sneezing": "Sneezing",

    "i feel tired": "Feeling tired",
    "feeling tired": "Feeling tired",

    "i have a cough": "Cough",
    "im coughing": "Cough",
    "i am coughing": "Cough",

    "my eyes are itchy": "Itchy eyes",
    "eyes are itchy": "Itchy eyes",

    "my eyes are red": "Eye redness",
    "eyes are red": "Eye redness"

};


/* ================================= */
/* NORMALIZE TEXT */
/* ================================= */

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/[.,!?]/g, "");

}


/* ================================= */
/* CONVERT EVERYDAY WORDING */
/* ================================= */

function convertToSymptom(text) {

    const normalized =
        normalizeText(text);

    if (symptomAliases[normalized]) {

        return symptomAliases[normalized];

    }

    return null;

}


/* ================================= */
/* FIND SYMPTOM CATEGORY */
/* ================================= */

function getCategoryForSymptom(symptom) {

    for (const category in symptomCategories) {

        if (
            symptomCategories[category]
                .includes(symptom)
        ) {

            return category;

        }

    }

    return "🔎 Other Symptoms";

}


/* ================================= */
/* CREATE SYMPTOM LIST */
/* ================================= */

function createSymptomList() {

    const allSymptoms = new Set();


    Object.values(conditions)
        .slice(0, MAX_CONDITIONS)
        .forEach(condition => {

            condition.symptoms.forEach(symptom => {

                allSymptoms.add(symptom);

            });

        });


    symptomList.innerHTML = "";


    const categorizedSymptoms = {};


    allSymptoms.forEach(symptom => {

        const category =
            getCategoryForSymptom(symptom);


        if (!categorizedSymptoms[category]) {

            categorizedSymptoms[category] = [];

        }


        categorizedSymptoms[category]
            .push(symptom);

    });


    for (const category in categorizedSymptoms) {

        const categoryContainer =
            document.createElement("div");

        categoryContainer.className =
            "symptom-category";


        const categoryTitle =
            document.createElement("h3");

        categoryTitle.className =
            "symptom-category-title";

        categoryTitle.textContent =
            category;


        categoryContainer.appendChild(
            categoryTitle
        );


        const categoryGrid =
            document.createElement("div");

        categoryGrid.className =
            "symptom-category-grid";


        categorizedSymptoms[category]
            .sort()
            .forEach((symptom, index) => {

                const label =
                    document.createElement("label");

                label.className =
                    "symptom-option";


                const checkbox =
                    document.createElement("input");

                checkbox.type =
                    "checkbox";

                checkbox.value =
                    symptom;

                checkbox.id =
                    `symptom-${category}-${index}`;


                const text =
                    document.createElement("span");

                text.textContent =
                    symptom;


                label.appendChild(
                    checkbox
                );

                label.appendChild(
                    text
                );


                categoryGrid.appendChild(
                    label
                );

            });


        categoryContainer.appendChild(
            categoryGrid
        );


        symptomList.appendChild(
            categoryContainer
        );

    }

}


/* ================================= */
/* SMART SEARCH SUGGESTIONS */
/* ================================= */

let suggestionBox = null;


/* Create the suggestion box */

function createSuggestionBox() {

    suggestionBox =
        document.createElement("div");

    suggestionBox.id =
        "searchSuggestions";

    suggestionBox.className =
        "search-suggestions";

    suggestionBox.style.display =
        "none";


    conditionInput.parentElement
        .appendChild(suggestionBox);

}


/* Get matching suggestions */

function getSearchSuggestions(text) {

    const searchTerm =
        normalizeText(text);


    if (searchTerm.length === 0) {

        return [];

    }


    const suggestions = [];


    Object.values(conditions)
        .slice(0, MAX_CONDITIONS)
        .forEach(condition => {

            const searchableWords = [
                condition.name,
                ...condition.keywords
            ];


            const matches =
                searchableWords.some(word =>
                    normalizeText(word)
                        .includes(searchTerm)
                );


            if (matches) {

                suggestions.push(condition);

            }

        });


    return suggestions.slice(0, 5);

}


/* Show suggestions */

function showSearchSuggestions() {

    const text =
        conditionInput.value;


    const suggestions =
        getSearchSuggestions(text);


    suggestionBox.innerHTML = "";


    if (
        suggestions.length === 0 ||
        normalizeText(text).length === 0
    ) {

        suggestionBox.style.display =
            "none";

        return;

    }


    suggestions.forEach(condition => {

        const suggestion =
            document.createElement("button");


        suggestion.type =
            "button";


        suggestion.className =
            "search-suggestion";


        suggestion.innerHTML = `
            <strong>${condition.name}</strong>
            <span>Click to search</span>
        `;


        suggestion.addEventListener(
            "click",
            function() {

                conditionInput.value =
                    condition.name;

                suggestionBox.style.display =
                    "none";

                searchCondition();

            }
        );


        suggestionBox.appendChild(
            suggestion
        );

    });


    suggestionBox.style.display =
        "block";

}


/* Hide suggestions */

function hideSearchSuggestions() {

    if (suggestionBox) {

        suggestionBox.style.display =
            "none";

    }

}


/* ================================= */
/* CONDITION SEARCH */
/* ================================= */

function searchCondition() {

    const originalText =
        conditionInput.value.trim();


    const searchTerm =
        normalizeText(originalText);


    hideSearchSuggestions();


    if (searchTerm === "") {

        results.innerHTML = `
            <div class="result-card">

                <h3>
                    Please enter a condition or symptom.
                </h3>

                <p>
                    Try something like:
                    "cold", "my head hurts",
                    or "my throat hurts".
                </p>

            </div>
        `;

        return;

    }


    const convertedSymptom =
        convertToSymptom(searchTerm);


    if (convertedSymptom) {

        const symptomMatches =
            Object.values(conditions)
                .slice(0, MAX_CONDITIONS)
                .filter(condition =>
                    condition.symptoms.includes(
                        convertedSymptom
                    )
                );


        if (symptomMatches.length > 0) {

            results.innerHTML = `

                <div class="result-card">

                    <h3>
                        We understood that as:
                    </h3>

                    <p>
                        <strong>
                            ${convertedSymptom}
                        </strong>
                    </p>

                    <p>
                        Here are some conditions in our
                        database that can share this symptom.
                    </p>

                </div>

                ${createConditionCards(symptomMatches)}

            `;

            return;

        }

    }


    const matches =
        Object.values(conditions)
            .slice(0, MAX_CONDITIONS)
            .filter(condition => {

                return condition.keywords.some(keyword =>

                    searchTerm.includes(
                        normalizeText(keyword)
                    )

                );

            });


    if (matches.length === 0) {

        results.innerHTML = `

            <div class="result-card">

                <h3>
                    No matching information found.
                </h3>

                <p>
                    We don't currently have information
                    for "<strong>${originalText}</strong>".
                </p>

                <p>
                    Try using the Symptom Checker below
                    if you don't know what the condition is.
                </p>

            </div>

        `;

        return;

    }


    results.innerHTML =
        createConditionCards(matches);

}


/* ================================= */
/* CREATE CONDITION CARDS */
/* ================================= */

function createConditionCards(matches) {

    return matches.map(condition => {

        return `

            <div class="result-card">

                <h2>
                    ${condition.name}
                </h2>

                <p>
                    ${condition.description}
                </p>


                ${
                    condition.symptoms.length > 0
                    ? `

                        <h3>
                            Possible symptoms
                        </h3>

                        <ul>

                            ${condition.symptoms
                                .map(symptom =>
                                    `<li>${symptom}</li>`
                                )
                                .join("")}

                        </ul>

                        <p>
                            Having some of these symptoms
                            does not necessarily mean you
                            have this condition.
                        </p>

                    `
                    : ""
                }


                <h3>
                    General guidance
                </h3>

                <ul>

                    ${condition.advice
                        .map(item =>
                            `<li>${item}</li>`
                        )
                        .join("")}

                </ul>


                <h3>
                    When to seek help
                </h3>

                <ul>

                    ${condition.seekHelp
                        .map(item =>
                            `<li>${item}</li>`
                        )
                        .join("")}

                </ul>


                <p class="medical-note">

                    ⚠️ This information is for education
                    only. It does not diagnose a medical
                    condition or replace professional
                    medical advice.

                </p>

            </div>

        `;

    }).join("");

}


/* ================================= */
/* SYMPTOM CHECKER */
/* ================================= */

function checkSymptoms() {

    const selectedCheckboxes =
        symptomList.querySelectorAll(
            'input[type="checkbox"]:checked'
        );


    const selectedSymptoms =
        Array.from(selectedCheckboxes)
            .map(checkbox =>
                checkbox.value
            );


    if (selectedSymptoms.length === 0) {

        symptomResults.innerHTML = `

            <div class="symptom-result-card">

                <h3>
                    Please select at least one symptom.
                </h3>

                <p>
                    Select the symptoms you are
                    experiencing, then click
                    "Check Symptoms".
                </p>

            </div>

        `;

        return;

    }


    const matches =
        Object.values(conditions)
            .slice(0, MAX_CONDITIONS)
            .map(condition => {

                const matchingSymptoms =
                    condition.symptoms.filter(
                        symptom =>
                            selectedSymptoms.includes(
                                symptom
                            )
                    );


                return {

                    condition,

                    matchingSymptoms,

                    score:
                        matchingSymptoms.length

                };

            })
            .filter(result =>
                result.score > 0
            )
            .sort(
                (a, b) =>
                    b.score - a.score
            );


    if (matches.length === 0) {

        symptomResults.innerHTML = `

            <div class="symptom-result-card">

                <h3>
                    No matching information found.
                </h3>

                <p>
                    Our beta database doesn't currently
                    have enough information for the
                    symptoms you selected.
                </p>

                <p>
                    Please talk to a parent, guardian,
                    doctor, school nurse, or another
                    trusted adult if you are concerned.
                </p>

            </div>

        `;

        return;

    }


    symptomResults.innerHTML = `

        <div class="symptom-result-card">

            <h2>
                Possible matches
            </h2>

            <p>
                These conditions share some of the
                symptoms you selected.
            </p>

            <p>
                ⚠️ <strong>
                    This is NOT a diagnosis.
                </strong>
            </p>

        </div>


        ${matches.map(result => {

            return `

                <div class="symptom-result-card">

                    <h2>
                        ${result.condition.name}
                    </h2>

                    <p>
                        ${result.condition.description}
                    </p>

                    <p class="match-score">

                        ${result.score}
                        selected symptom(s) matched

                    </p>


                    <h3>
                        Why did this appear?
                    </h3>

                    <p>
                        You selected symptoms that are
                        also listed as possible symptoms
                        of ${result.condition.name}.
                    </p>


                    <h3>
                        Matching symptoms
                    </h3>

                    <ul>

                        ${result.matchingSymptoms
                            .map(symptom =>
                                `<li>${symptom}</li>`
                            )
                            .join("")}

                    </ul>


                    <p class="medical-note">

                        ⚠️ A symptom can have many different
                        causes. This result does not mean
                        you have ${result.condition.name}.

                    </p>

                </div>

            `;

        }).join("")}

    `;

}


/* ================================= */
/* CLEAR CONDITION SEARCH */
/* ================================= */

function clearSearch() {

    conditionInput.value = "";

    results.innerHTML = "";

    hideSearchSuggestions();

    conditionInput.focus();

}


/* ================================= */
/* CLEAR SYMPTOMS */
/* ================================= */

function clearSymptoms() {

    const checkboxes =
        symptomList.querySelectorAll(
            'input[type="checkbox"]'
        );


    checkboxes.forEach(checkbox => {

        checkbox.checked = false;

    });


    symptomResults.innerHTML = "";

}


/* ================================= */
/* BUTTON EVENTS */
/* ================================= */

searchButton.addEventListener(
    "click",
    searchCondition
);


clearButton.addEventListener(
    "click",
    clearSearch
);


checkSymptomsButton.addEventListener(
    "click",
    checkSymptoms
);


clearSymptomsButton.addEventListener(
    "click",
    clearSymptoms
);


/* ================================= */
/* SEARCH INPUT EVENTS */
/* ================================= */

conditionInput.addEventListener(
    "input",
    showSearchSuggestions
);


conditionInput.addEventListener(
    "focus",
    showSearchSuggestions
);


conditionInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchCondition();

        }

        if (event.key === "Escape") {

            hideSearchSuggestions();

        }

    }
);


/* Hide suggestions when clicking elsewhere */

document.addEventListener(
    "click",
    function(event) {

        if (
            !conditionInput.contains(event.target) &&
            !suggestionBox.contains(event.target)
        ) {

            hideSearchSuggestions();

        }

    }
);


/* ================================= */
/* START WEBSITE */
/* ================================= */

createSuggestionBox();

createSymptomList();
