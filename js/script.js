// Embedded Data to avoid CORS issues on local file opening
const medicalData = {
    "tests": {
        "hemoglobin": {
            "name": "Hemoglobin",
            "unit": "g/dL",
            "normal_range": [13.5, 17.5],
            "high_meaning": "Polycythemia, dehydration, or lung disease.",
            "low_meaning": "Anemia or blood loss.",
            "explanation": "Hemoglobin is the protein in your red blood cells that carries oxygen.",
            "category": "CBC",
            "additional_tests": ["Hematocrit", "RBC"]
        },
        "hematocrit": {
            "name": "Hematocrit",
            "unit": "%",
            "normal_range": [41, 50],
            "high_meaning": "Dehydration or polycythemia.",
            "low_meaning": "Anemia.",
            "explanation": "The percentage of your blood volume that is made up of red blood cells.",
            "category": "CBC",
            "additional_tests": ["Hemoglobin"]
        },
        "rbc": {
            "name": "RBC Count",
            "unit": "million/mcL",
            "normal_range": [4.5, 5.9],
            "high_meaning": "Low oxygen levels or dehydration.",
            "low_meaning": "Anemia or bleeding.",
            "explanation": "The number of red blood cells in a volume of blood.",
            "category": "CBC",
            "additional_tests": ["Hemoglobin", "Hematocrit"]
        },
        "mcv": {
            "name": "MCV",
            "unit": "fL",
            "normal_range": [80, 96],
            "high_meaning": "Macrocytic anemia (e.g., B12 deficiency).",
            "low_meaning": "Microcytic anemia (e.g., Iron deficiency).",
            "explanation": "Mean Corpuscular Volume: The average size of your red blood cells.",
            "category": "CBC",
            "additional_tests": ["Vitamin B12", "Iron Studies"]
        },
        "mch": {
            "name": "MCH",
            "unit": "pg",
            "normal_range": [27, 33],
            "high_meaning": "Macrocytic anemia.",
            "low_meaning": "Iron deficiency anemia.",
            "explanation": "Mean Corpuscular Hemoglobin: The average amount of hemoglobin in each red blood cell.",
            "category": "CBC",
            "additional_tests": ["MCV"]
        },
        "mchc": {
            "name": "MCHC",
            "unit": "g/dL",
            "normal_range": [33, 36],
            "high_meaning": "Spherocytosis or agglutination.",
            "low_meaning": "Iron deficiency anemia.",
            "explanation": "Mean Corpuscular Hemoglobin Concentration: The concentration of hemoglobin in a given volume of packed red blood cells.",
            "category": "CBC",
            "additional_tests": ["Iron Studies"]
        },
        "rdw": {
            "name": "RDW",
            "unit": "%",
            "normal_range": [11.5, 14.5],
            "high_meaning": "Mixed anemia or early deficiency.",
            "low_meaning": "Usually not clinically significant.",
            "explanation": "Red Cell Distribution Width: Measures the variation in red blood cell size.",
            "category": "CBC",
            "additional_tests": ["MCV"]
        },
        "wbc": {
            "name": "WBC Count",
            "unit": "cells/mcL",
            "normal_range": [4500, 11000],
            "high_meaning": "Infection, inflammation, or stress.",
            "low_meaning": "Viral infection, bone marrow issues, or medication side effects.",
            "explanation": "White Blood Cells: Your body's immune system cells.",
            "category": "CBC",
            "additional_tests": ["WBC Differential"]
        },
        "platelets": {
            "name": "Platelets",
            "unit": "cells/mcL",
            "normal_range": [150000, 450000],
            "high_meaning": "Inflammation or infection.",
            "low_meaning": "Bleeding risk or viral infection.",
            "explanation": "Cells that help your blood clot.",
            "category": "CBC",
            "additional_tests": ["MPV"]
        },
        "mpv": {
            "name": "MPV",
            "unit": "fL",
            "normal_range": [7.4, 10.4],
            "high_meaning": "Increased platelet production.",
            "low_meaning": "Decreased platelet production.",
            "explanation": "Mean Platelet Volume: The average size of your platelets.",
            "category": "CBC",
            "additional_tests": ["Platelets"]
        },
        "sodium": {
            "name": "Sodium",
            "unit": "mEq/L",
            "normal_range": [135, 145],
            "high_meaning": "Dehydration.",
            "low_meaning": "Overhydration or kidney issues.",
            "explanation": "An electrolyte that helps maintain fluid balance.",
            "category": "BMP",
            "additional_tests": ["Osmolality"]
        },
        "potassium": {
            "name": "Potassium",
            "unit": "mEq/L",
            "normal_range": [3.5, 5.0],
            "high_meaning": "Kidney issues or medication side effects.",
            "low_meaning": "Diuretics or fluid loss.",
            "explanation": "Crucial for heart and muscle function.",
            "category": "BMP",
            "additional_tests": ["ECG"]
        },
        "chloride": {
            "name": "Chloride",
            "unit": "mEq/L",
            "normal_range": [96, 106],
            "high_meaning": "Dehydration.",
            "low_meaning": "Lung disease or vomiting.",
            "explanation": "Works with sodium to maintain fluid balance.",
            "category": "BMP",
            "additional_tests": ["Bicarbonate"]
        },
        "bicarbonate": {
            "name": "Bicarbonate",
            "unit": "mEq/L",
            "normal_range": [23, 29],
            "high_meaning": "Lung disease or dehydration.",
            "low_meaning": "Kidney disease or metabolic acidosis.",
            "explanation": "Helps maintain the body's pH balance.",
            "category": "BMP",
            "additional_tests": ["Blood Gases"]
        },
        "glucose": {
            "name": "Glucose",
            "unit": "mg/dL",
            "normal_range": [70, 99],
            "high_meaning": "Diabetes or stress.",
            "low_meaning": "Hypoglycemia.",
            "explanation": "Blood sugar, the body's main energy source.",
            "category": "BMP",
            "additional_tests": ["HbA1c"]
        },
        "bun": {
            "name": "BUN",
            "unit": "mg/dL",
            "normal_range": [6, 20],
            "high_meaning": "Kidney issues or dehydration.",
            "low_meaning": "Liver disease or malnutrition.",
            "explanation": "Blood Urea Nitrogen: A waste product filtered by the kidneys.",
            "category": "BMP",
            "additional_tests": ["Creatinine"]
        },
        "creatinine": {
            "name": "Creatinine",
            "unit": "mg/dL",
            "normal_range": [0.74, 1.35],
            "high_meaning": "Kidney dysfunction.",
            "low_meaning": "Low muscle mass.",
            "explanation": "A waste product from muscle breakdown, filtered by kidneys.",
            "category": "BMP",
            "additional_tests": ["eGFR"]
        },
        "calcium": {
            "name": "Calcium",
            "unit": "mg/dL",
            "normal_range": [8.6, 10.2],
            "high_meaning": "Parathyroid issues.",
            "low_meaning": "Vitamin D deficiency.",
            "explanation": "Essential for bone health and muscle function.",
            "category": "BMP",
            "additional_tests": ["Vitamin D", "PTH"]
        },
        "ast": {
            "name": "AST",
            "unit": "U/L",
            "normal_range": [10, 40],
            "high_meaning": "Liver damage or muscle injury.",
            "low_meaning": "Usually not significant.",
            "explanation": "Aspartate Aminotransferase: An enzyme found in the liver and muscles.",
            "category": "LFT",
            "additional_tests": ["ALT"]
        },
        "alt": {
            "name": "ALT",
            "unit": "U/L",
            "normal_range": [7, 56],
            "high_meaning": "Liver damage.",
            "low_meaning": "Usually not significant.",
            "explanation": "Alanine Aminotransferase: An enzyme primarily found in the liver.",
            "category": "LFT",
            "additional_tests": ["AST"]
        },
        "alp": {
            "name": "ALP",
            "unit": "U/L",
            "normal_range": [44, 147],
            "high_meaning": "Liver or bone issues.",
            "low_meaning": "Malnutrition.",
            "explanation": "Alkaline Phosphatase: An enzyme related to bile ducts and bones.",
            "category": "LFT",
            "additional_tests": ["GGT"]
        },
        "bilirubin": {
            "name": "Total Bilirubin",
            "unit": "mg/dL",
            "normal_range": [0.1, 1.2],
            "high_meaning": "Liver issues or hemolysis.",
            "low_meaning": "Usually not significant.",
            "explanation": "A yellow pigment formed by the breakdown of red blood cells.",
            "category": "LFT",
            "additional_tests": ["Direct Bilirubin"]
        },
        "albumin": {
            "name": "Albumin",
            "unit": "g/dL",
            "normal_range": [3.4, 5.4],
            "high_meaning": "Dehydration.",
            "low_meaning": "Liver disease or inflammation.",
            "explanation": "The main protein made by the liver.",
            "category": "LFT",
            "additional_tests": ["Total Protein"]
        },
        "ggt": {
            "name": "GGT",
            "unit": "U/L",
            "normal_range": [9, 48],
            "high_meaning": "Liver or bile duct damage, alcohol use.",
            "low_meaning": "Usually not significant.",
            "explanation": "Gamma-Glutamyl Transferase: A sensitive liver enzyme.",
            "category": "LFT",
            "additional_tests": ["ALP"]
        },
        "total_protein": {
            "name": "Total Protein",
            "unit": "g/dL",
            "normal_range": [6.0, 8.3],
            "high_meaning": "Chronic inflammation or infection.",
            "low_meaning": "Liver or kidney disease.",
            "explanation": "The sum of albumin and globulin in the blood.",
            "category": "LFT",
            "additional_tests": ["Albumin"]
        },
        "urea": {
            "name": "Urea",
            "unit": "mg/dL",
            "normal_range": [12, 45],
            "high_meaning": "Kidney issues or high protein diet.",
            "low_meaning": "Liver issues.",
            "explanation": "A waste product of protein metabolism.",
            "category": "Kidney",
            "additional_tests": ["Creatinine"]
        },
        "uric_acid": {
            "name": "Uric Acid",
            "unit": "mg/dL",
            "normal_range": [3.5, 7.2],
            "high_meaning": "Gout or kidney stones.",
            "low_meaning": "Usually not significant.",
            "explanation": "A waste product from the breakdown of purines.",
            "category": "Kidney",
            "additional_tests": ["Kidney Function"]
        },
        "egfr": {
            "name": "eGFR",
            "unit": "mL/min/1.73m2",
            "normal_range": [90, 120],
            "high_meaning": "Normal.",
            "low_meaning": "Reduced kidney function.",
            "explanation": "Estimated Glomerular Filtration Rate: How well your kidneys filter blood.",
            "category": "Kidney",
            "additional_tests": ["Creatinine"]
        },
        "serum_iron": {
            "name": "Serum Iron",
            "unit": "mcg/dL",
            "normal_range": [60, 170],
            "high_meaning": "Hemochromatosis.",
            "low_meaning": "Iron deficiency.",
            "explanation": "The amount of iron circulating in your blood.",
            "category": "Iron",
            "additional_tests": ["Ferritin"]
        },
        "ferritin": {
            "name": "Ferritin",
            "unit": "ng/mL",
            "normal_range": [12, 300],
            "high_meaning": "Inflammation or iron overload.",
            "low_meaning": "Iron deficiency.",
            "explanation": "A protein that stores iron.",
            "category": "Iron",
            "additional_tests": ["TIBC"]
        },
        "tibc": {
            "name": "TIBC",
            "unit": "mcg/dL",
            "normal_range": [240, 450],
            "high_meaning": "Iron deficiency.",
            "low_meaning": "Iron overload or inflammation.",
            "explanation": "Total Iron Binding Capacity: How well transferrin can carry iron.",
            "category": "Iron",
            "additional_tests": ["Transferrin Saturation"]
        },
        "transferrin_sat": {
            "name": "Transferrin Saturation",
            "unit": "%",
            "normal_range": [20, 50],
            "high_meaning": "Iron overload.",
            "low_meaning": "Iron deficiency.",
            "explanation": "The percentage of transferrin that is saturated with iron.",
            "category": "Iron",
            "additional_tests": ["Ferritin"]
        },
        "tsh": {
            "name": "TSH",
            "unit": "mIU/L",
            "normal_range": [0.4, 4.0],
            "high_meaning": "Hypothyroidism.",
            "low_meaning": "Hyperthyroidism.",
            "explanation": "Thyroid Stimulating Hormone: Controls thyroid hormone production.",
            "category": "Thyroid",
            "additional_tests": ["Free T4"]
        },
        "free_t3": {
            "name": "Free T3",
            "unit": "pg/mL",
            "normal_range": [2.3, 4.2],
            "high_meaning": "Hyperthyroidism.",
            "low_meaning": "Hypothyroidism.",
            "explanation": "Active thyroid hormone.",
            "category": "Thyroid",
            "additional_tests": ["TSH"]
        },
        "free_t4": {
            "name": "Free T4",
            "unit": "ng/dL",
            "normal_range": [0.8, 1.8],
            "high_meaning": "Hyperthyroidism.",
            "low_meaning": "Hypothyroidism.",
            "explanation": "Main thyroid hormone.",
            "category": "Thyroid",
            "additional_tests": ["TSH"]
        },
        "total_cholesterol": {
            "name": "Total Cholesterol",
            "unit": "mg/dL",
            "normal_range": [125, 200],
            "high_meaning": "Increased cardiovascular risk.",
            "low_meaning": "Malnutrition or liver disease.",
            "explanation": "Total amount of cholesterol in the blood.",
            "category": "Lipid",
            "additional_tests": ["LDL", "HDL"]
        },
        "ldl": {
            "name": "LDL",
            "unit": "mg/dL",
            "normal_range": [0, 100],
            "high_meaning": "Increased cardiovascular risk.",
            "low_meaning": "Usually not significant.",
            "explanation": "Low-Density Lipoprotein: 'Bad' cholesterol.",
            "category": "Lipid",
            "additional_tests": ["HDL"]
        },
        "hdl": {
            "name": "HDL",
            "unit": "mg/dL",
            "normal_range": [40, 60],
            "high_meaning": "Protective against heart disease.",
            "low_meaning": "Increased cardiovascular risk.",
            "explanation": "High-Density Lipoprotein: 'Good' cholesterol.",
            "category": "Lipid",
            "additional_tests": ["LDL"]
        },
        "triglycerides": {
            "name": "Triglycerides",
            "unit": "mg/dL",
            "normal_range": [0, 150],
            "high_meaning": "Dietary factors or metabolic issues.",
            "low_meaning": "Malnutrition.",
            "explanation": "A type of fat in the blood.",
            "category": "Lipid",
            "additional_tests": ["Glucose"]
        },
        "esr": {
            "name": "ESR",
            "unit": "mm/hr",
            "normal_range": [0, 20],
            "high_meaning": "Inflammation or infection.",
            "low_meaning": "Usually not significant.",
            "explanation": "Erythrocyte Sedimentation Rate: A marker of inflammation.",
            "category": "Inflammatory",
            "additional_tests": ["CRP"]
        },
        "crp": {
            "name": "CRP",
            "unit": "mg/L",
            "normal_range": [0, 10],
            "high_meaning": "Acute inflammation or infection.",
            "low_meaning": "Normal.",
            "explanation": "C-Reactive Protein: A protein produced by the liver during inflammation.",
            "category": "Inflammatory",
            "additional_tests": ["ESR"]
        },
        "vitamin_b12": {
            "name": "Vitamin B12",
            "unit": "pg/mL",
            "normal_range": [200, 900],
            "high_meaning": "Usually not significant.",
            "low_meaning": "B12 deficiency anemia or nerve issues.",
            "explanation": "Essential for nerve function and blood cell production.",
            "category": "Others",
            "additional_tests": ["Folate"]
        },
        "vitamin_d": {
            "name": "Vitamin D",
            "unit": "ng/mL",
            "normal_range": [20, 50],
            "high_meaning": "Vitamin D toxicity.",
            "low_meaning": "Bone weakness or deficiency.",
            "explanation": "Important for bone health and immune function.",
            "category": "Others",
            "additional_tests": ["Calcium"]
        },
        "hba1c": {
            "name": "HbA1c",
            "unit": "%",
            "normal_range": [4.0, 5.6],
            "high_meaning": "Pre-diabetes or diabetes.",
            "low_meaning": "Hypoglycemia risk.",
            "explanation": "Average blood sugar over the past 2-3 months.",
            "category": "Others",
            "additional_tests": ["Glucose"]
        }
    },
    "patterns": [
        {
            "id": "anemia_iron",
            "name": "Possible Iron Deficiency Pattern",
            "triggers": [
                { "test": "hemoglobin", "condition": "low" },
                { "test": "mcv", "condition": "low" },
                { "test": "ferritin", "condition": "low" }
            ],
            "explanation": "Your results suggest your body might not have enough iron to make healthy red blood cells.",
            "causes": "Dietary lack of iron, blood loss, or absorption issues.",
            "next_steps": "Consult a doctor about iron supplementation or dietary changes."
        },
        {
            "id": "anemia_b12",
            "name": "Possible B12/Folate Deficiency Pattern",
            "triggers": [
                { "test": "hemoglobin", "condition": "low" },
                { "test": "mcv", "condition": "high" }
            ],
            "explanation": "Your red blood cells appear larger than normal, which can happen when Vitamin B12 or Folate is low.",
            "causes": "Dietary deficiency (common in vegans) or absorption issues.",
            "next_steps": "Check Vitamin B12 and Folate levels."
        },
        {
            "id": "infection_bacterial",
            "name": "Possible Infection Pattern",
            "triggers": [
                { "test": "wbc", "condition": "high" }
            ],
            "explanation": "A high white blood cell count often means your immune system is fighting something.",
            "causes": "Bacterial infection, inflammation, or stress.",
            "next_steps": "Monitor for symptoms like fever; consult a doctor if unwell."
        },
        {
            "id": "kidney_concern",
            "name": "Possible Kidney Filtration Issue",
            "triggers": [
                { "test": "creatinine", "condition": "high" },
                { "test": "bun", "condition": "high" }
            ],
            "explanation": "Elevated waste products in the blood can suggest the kidneys are working harder than usual.",
            "causes": "Dehydration, kidney infection, or chronic kidney issues.",
            "next_steps": "Hydrate and re-test; consult a doctor."
        },
        {
            "id": "liver_inflammation",
            "name": "Possible Liver Inflammation Pattern",
            "triggers": [
                { "test": "alt", "condition": "high" },
                { "test": "ast", "condition": "high" }
            ],
            "explanation": "Elevated liver enzymes indicate some stress or injury to liver cells.",
            "causes": "Fatty liver, alcohol, medication, or viral hepatitis.",
            "next_steps": "Avoid alcohol and consult a doctor for further evaluation."
        },
        {
            "id": "thyroid_hypo",
            "name": "Possible Hypothyroid Pattern",
            "triggers": [
                { "test": "tsh", "condition": "high" },
                { "test": "free_t4", "condition": "low" }
            ],
            "explanation": "High TSH with low T4 suggests the thyroid gland is underactive.",
            "causes": "Hashimoto's thyroiditis or iodine deficiency.",
            "next_steps": "Consult a doctor for thyroid management."
        },
        {
            "id": "thyroid_hyper",
            "name": "Possible Hyperthyroid Pattern",
            "triggers": [
                { "test": "tsh", "condition": "low" },
                { "test": "free_t4", "condition": "high" }
            ],
            "explanation": "Low TSH with high T4 suggests the thyroid gland is overactive.",
            "causes": "Graves' disease or thyroid nodules.",
            "next_steps": "Consult a doctor for thyroid management."
        },
        {
            "id": "dehydration",
            "name": "Possible Dehydration Pattern",
            "triggers": [
                { "test": "sodium", "condition": "high" },
                { "test": "bun", "condition": "high" }
            ],
            "explanation": "Concentrated electrolytes and waste products often mean the body needs more water.",
            "causes": "Not drinking enough fluids, sweating, or illness.",
            "next_steps": "Drink water and re-evaluate."
        },
        {
            "id": "inflammation_general",
            "name": "Possible Inflammation Pattern",
            "triggers": [
                { "test": "crp", "condition": "high" },
                { "test": "esr", "condition": "high" }
            ],
            "explanation": "Elevated markers suggest generalized inflammation in the body.",
            "causes": "Infection, autoimmune conditions, or injury.",
            "next_steps": "Investigate the source of inflammation with a doctor."
        }
    ]
};

const categoryImages = {
    "CBC": "images/icon_cbc.png",
    "BMP": "images/icon_bmp.png",
    "LFT": "images/icon_lft.png",
    "Kidney": "images/icon_kidney.png",
    "Thyroid": "images/icon_thyroid.png",
    "Iron": "images/icon_cbc.png", // Reusing CBC for blood/iron
    "Lipid": "images/icon_bmp.png", // Reusing BMP for chemistry
    "Inflammation": "images/icon_cbc.png", // Reusing CBC for immune response
    "Others": "images/icon_bmp.png" // Reusing BMP for general
};

const categoryDescriptions = {
    "CBC": "Complete Blood Count: Checks your overall health and immune system.",
    "BMP": "Basic Metabolic Panel: Checks your blood sugar, kidney function, and electrolytes.",
    "LFT": "Liver Function Tests: Checks how well your liver is working.",
    "Kidney": "Kidney Function: Checks how well your kidneys are filtering waste.",
    "Thyroid": "Thyroid Panel: Checks your metabolism and energy levels.",
    "Iron": "Iron Studies: Checks for anemia and iron levels.",
    "Lipid": "Lipid Panel: Checks your cholesterol and heart health.",
    "Inflammation": "Inflammation Markers: Checks for infection or swelling in the body.",
    "Others": "Vitamins & Others: Checks for specific deficiencies like B12 or D."
};

let userInputs = {};
let currentCategory = null;

// DOM Elements
const mascotSpeech = document.getElementById('mascot-speech');
const mascotImg = document.getElementById('mascot-img');
const appContainer = document.getElementById('app-container');
const categoryGrid = document.getElementById('category-grid');
const inputList = document.getElementById('input-list');
const testInputArea = document.getElementById('test-input-area');
const currentCategoryTitle = document.getElementById('current-category-title');
const resultsContent = document.getElementById('results-content');
const modal = document.getElementById('info-modal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Data is now embedded, no need to fetch
    mascotSay("Welcome! I'm Dr. Chimpsky. Click 'Start the Journey' to begin!");

    // Make navbar title clickable to go home
    const navTitle = document.querySelector('.navbar-content h3');
    if (navTitle) {
        navTitle.style.cursor = 'pointer';
        navTitle.addEventListener('click', resetApp);
    }
});

// Navigation & Story Flow
function startJourney() {
    switchScene('scene-landing', 'scene-input');
    renderCategories();
    mascotSay("First, tell me what kind of test results you have!");
}

function switchScene(fromId, toId) {
    document.getElementById(fromId).classList.remove('active');
    document.getElementById(fromId).classList.add('hidden');

    setTimeout(() => {
        document.getElementById(toId).classList.remove('hidden');
        document.getElementById(toId).classList.add('active');
    }, 500); // Wait for fade out
}

function mascotSay(text, emotion = 'idle') {
    mascotSpeech.textContent = text;
    mascotSpeech.style.opacity = '1';
    mascotSpeech.style.transform = 'translateY(0)';

    // Simple emotion handling (could swap images or add CSS classes)
    mascotImg.className = `mascot-${emotion}`;

    // Auto-hide after a delay if needed, but keeping it visible is usually better for guidance
}

// Input Handling
function renderCategories() {
    categoryGrid.innerHTML = '';
    const categories = new Set();

    for (const key in medicalData.tests) {
        categories.add(medicalData.tests[key].category);
    }

    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        const imgPath = categoryImages[cat] || 'images/icon_bmp.png';
        const desc = categoryDescriptions[cat] || "Analyze your results.";
        card.innerHTML = `
            <img src="${imgPath}" alt="${cat}" class="category-img">
            <h3>${cat}</h3>
            <p class="category-desc">${desc}</p>
        `;
        card.onclick = () => showInputs(cat);
        categoryGrid.appendChild(card);
    });
}

function showCategories() {
    testInputArea.classList.add('hidden');
    categoryGrid.classList.remove('hidden');
    mascotSay("Select a category to enter your results.");
}

function showInputs(category) {
    currentCategory = category;
    categoryGrid.classList.add('hidden');
    testInputArea.classList.remove('hidden');
    testInputArea.classList.remove('hidden');
    currentCategoryTitle.innerHTML = `
        <img src="${categoryImages[category] || 'images/img_bmp.png'}" class="header-img">
        ${category}
    `;

    // Create a grid container for inputs
    inputList.innerHTML = '<div class="card-grid" id="input-grid-container"></div>';
    const gridContainer = document.getElementById('input-grid-container');

    mascotSay(`Okay, let's look at your ${category} results. Enter the numbers you see.`);

    for (const key in medicalData.tests) {
        if (medicalData.tests[key].category === category) {
            const test = medicalData.tests[key];
            const card = document.createElement('div');
            card.className = 'input-card';
            card.innerHTML = `
                <div style="margin-bottom: 15px;">
                    <label style="margin:0; font-size: 1.1rem; font-weight: 700;">${test.name} <span class="unit">(${test.unit})</span></label>
                </div>
                <div class="range-hint">Normal: ${test.normal_range[0]} - ${test.normal_range[1]}</div>
                <input type="number" step="0.01" id="input-${key}" placeholder="Enter value..." onchange="saveInput('${key}', this.value)">
            `;
            gridContainer.appendChild(card);

            // Restore previous input if exists
            if (userInputs[key]) {
                document.getElementById(`input-${key}`).value = userInputs[key];
            }
        }
    }
}

function saveInput(key, value) {
    if (value.trim() === '') {
        delete userInputs[key];
    } else {
        userInputs[key] = parseFloat(value);
    }
    mascotSay("Got it! Any others?", "writing");
}

// Interpretation Logic
function analyzeResults() {
    if (Object.keys(userInputs).length === 0) {
        mascotSay("Please enter at least one result first!", "confused");
        return;
    }

    switchScene('scene-input', 'scene-results');
    mascotSay("Hmm... let me think about what this means...", "thinking");

    setTimeout(() => {
        renderResults();
    }, 1500);
}

function renderResults() {
    resultsContent.innerHTML = '';
    let findings = [];
    let patternsFound = [];

    // 1. Analyze individual tests
    for (const key in userInputs) {
        const val = userInputs[key];
        const info = medicalData.tests[key];
        let status = 'normal';

        if (val < info.normal_range[0]) status = 'low';
        if (val > info.normal_range[1]) status = 'high';

        if (status !== 'normal') {
            findings.push({ key, val, status, info });
        }
    }

    // 2. Check Patterns
    medicalData.patterns.forEach(pattern => {
        let match = true;
        pattern.triggers.forEach(trigger => {
            const userVal = userInputs[trigger.test];
            if (userVal === undefined) {
                match = false; // Data missing for this pattern
                return;
            }

            const info = medicalData.tests[trigger.test];
            let status = 'normal';
            if (userVal < info.normal_range[0]) status = 'low';
            if (userVal > info.normal_range[1]) status = 'high';

            if (status !== trigger.condition) {
                match = false;
            }
        });

        if (match) {
            patternsFound.push(pattern);
        }
    });

    // 3. Render Story
    if (findings.length === 0) {
        renderHappyPath();
    } else {
        renderFindings(findings, patternsFound);
    }
}

function renderHappyPath() {
    mascotSay("Great news! Everything looks balanced.", "happy");
    resultsContent.innerHTML = `
        <div class="result-card" style="text-align: center; max-width: 600px; margin: 0 auto;">
            <h2><i class="fa-solid fa-circle-check" style="color: #2ecc71;"></i> All Clear!</h2>
            <p>Based on the values you entered, everything falls within the normal range.</p>
            <p>Keep up the great work taking care of your health!</p>
        </div>
    `;
}

function renderFindings(findings, patterns) {
    mascotSay("I found a few things we should look at.", "curious");

    let html = '';

    // Patterns First
    if (patterns.length > 0) {
        html += `<h2><i class="fa-solid fa-puzzle-piece" style="color: #3498db;"></i> Patterns Detected</h2><div class="card-grid">`;
        patterns.forEach(p => {
            html += `
                <div class="result-card">
                    <h3>${p.name}</h3>
                    <p>${p.explanation}</p>
                    <p><strong>Possible Causes:</strong> ${p.causes}</p>
                    <p><strong>Next Steps:</strong> ${p.next_steps}</p>
                    <button class="btn-secondary" style="margin-top: auto;" onclick="openExternalSearch('${p.name}')">Learn More</button>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Individual Findings
    if (findings.length > 0) {
        html += `<h2 style="margin-top: 40px;"><i class="fa-solid fa-chart-simple" style="color: #9b59b6;"></i> Individual Results</h2><div class="card-grid">`;
        findings.forEach(item => {
            const statusClass = item.status === 'high' ? 'status-high' : 'status-low';
            const meaning = item.status === 'high' ? item.info.high_meaning : item.info.low_meaning;

            html += `
                <div class="result-card">
                    <div class="status-badge ${statusClass}">${item.status.toUpperCase()}</div>
                    <h3>${item.info.name}</h3>
                    <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 10px;">
                        ${item.val} <span style="font-size: 0.9rem; color: #666;">${item.info.unit}</span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">
                        Normal: ${item.info.normal_range[0]} - ${item.info.normal_range[1]}
                    </p>
                    <p><strong>${meaning}</strong></p>
                    <p style="font-size: 0.9rem;"><em>${item.info.explanation}</em></p>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Disclaimer
    html += `
        <div class="disclaimer-box" style="margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: 12px; font-size: 0.8rem; color: #666;">
            <strong><i class="fa-solid fa-triangle-exclamation" style="color: #f39c12;"></i> Medical Disclaimer:</strong> This tool is for educational purposes only and cannot diagnose. Consult your physician for medical decisions.
        </div>
    `;

    resultsContent.innerHTML = html;
}


function resetApp() {
    // Clear all user inputs
    userInputs = {};
    currentCategory = null;

    // Hide ALL scenes first
    document.getElementById('scene-landing').classList.remove('active', 'hidden');
    document.getElementById('scene-input').classList.remove('active', 'hidden');
    document.getElementById('scene-results').classList.remove('active', 'hidden');

    document.getElementById('scene-landing').classList.add('hidden');
    document.getElementById('scene-input').classList.add('hidden');
    document.getElementById('scene-results').classList.add('hidden');

    // Show only landing page
    setTimeout(() => {
        document.getElementById('scene-landing').classList.remove('hidden');
        document.getElementById('scene-landing').classList.add('active');
    }, 100);

    mascotSay("Welcome back! Ready for another journey?");
}


// Modal & External Links
function openExternalSearch(query) {
    const searchUrl = `https://medlineplus.gov/search/search.html?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
}

function closeModal() {
    modal.classList.add('hidden');
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

