// ============================================
// SET 1 - Original Questions
// ============================================
const set1 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 1,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A crude oil sample contains 15% sulfur. If the sample weighs 200 kg, how many kilograms of sulfur are present?",
    options: ["15 kg", "20 kg", "30 kg", "45 kg"],
    correct: 2,
    explanation: "15% of 200 kg = 0.15 × 200 = 30 kg"
  },
  {
    id: 2,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A contractor buys a generator for ₦500,000 and sells it for ₦600,000. What is his percentage profit?",
    options: ["10%", "15%", "20%", "25%"],
    correct: 2,
    explanation: "Profit = ₦600,000 - ₦500,000 = ₦100,000. Percentage = (100,000/500,000) × 100 = 20%"
  },
  {
    id: 3,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A gear system has a drive gear and a driven gear in a ratio of 3:5. If the drive gear has 15 teeth, how many teeth does the driven gear have?",
    options: ["9", "15", "25", "30"],
    correct: 2,
    explanation: "3:5 = 15:x → 3x = 75 → x = 25 teeth"
  },
  {
    id: 4,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A pipeline inspection drone flies at 60 km/h. How long will it take to cover a 15 km pipeline route?",
    options: ["10 minutes", "15 minutes", "20 minutes", "25 minutes"],
    correct: 1,
    explanation: "Time = Distance/Speed = 15/60 = 0.25 hours = 15 minutes"
  },
  {
    id: 5,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A box contains 5 red valves, 3 blue valves, and 2 green valves. If one valve is picked at random, what is the probability that it is NOT blue?",
    options: ["3/10", "5/10", "7/10", "2/10"],
    correct: 2,
    explanation: "Total = 10. Non-blue = 5+2 = 7. Probability = 7/10"
  },
  {
    id: 6,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A bar chart shows four oil wells with daily production: Well A = 400 bbl, Well B = 300 bbl, Well C = 500 bbl, Well D = 200 bbl. What is the total daily production from all four wells?",
    options: ["1,200 bbl", "1,400 bbl", "1,500 bbl", "1,600 bbl"],
    correct: 1,
    explanation: "Total = 400 + 300 + 500 + 200 = 1,400 bbl"
  },
  {
    id: 7,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "Pump P1 fills a tank in 4 hours; Pump P2 fills it in 6 hours. If both pumps operate simultaneously, how long will they take to fill the tank?",
    options: ["2.0 hours", "2.4 hours", "3.0 hours", "5.0 hours"],
    correct: 1,
    explanation: "Rate = 1/4 + 1/6 = 3/12 + 2/12 = 5/12. Time = 12/5 = 2.4 hours"
  },
  {
    id: 8,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the missing number: 1, 4, 9, 16, 25, ?",
    options: ["30", "34", "36", "42"],
    correct: 2,
    explanation: "Square numbers: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36"
  },
  {
    id: 9,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A gas station sells 800 liters of fuel. If 60% is sold to commercial vehicles, how many liters are sold to private cars?",
    options: ["320 liters", "480 liters", "560 liters", "200 liters"],
    correct: 0,
    explanation: "Private cars = 40% of 800 = 0.40 × 800 = 320 liters"
  },
  {
    id: 10,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "Concrete is mixed in a ratio of 1:2:3 (cement:sand:gravel). How much gravel is needed for 12 tons of the mixture?",
    options: ["2 tons", "4 tons", "6 tons", "8 tons"],
    correct: 2,
    explanation: "Total parts = 1+2+3 = 6. Gravel = 3/6 × 12 = 6 tons"
  },
  {
    id: 11,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A worker walks at a speed of 5 km/h and arrives at a platform in 2 hours. If he wants to arrive in 1.5 hours, what speed must he walk?",
    options: ["6.0 km/h", "6.67 km/h", "7.5 km/h", "8.0 km/h"],
    correct: 1,
    explanation: "Distance = 5 × 2 = 10 km. Speed = 10/1.5 = 6.67 km/h"
  },
  {
    id: 12,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A fair die is rolled once. What is the probability of rolling a number greater than 4?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correct: 1,
    explanation: "Numbers > 4 are 5 and 6. Probability = 2/6 = 1/3"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 13,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "The Nigerian oil sector is regulated by several agencies. The NUPRC oversees upstream technical standards, while the NMDPRA handles downstream regulations. Recent reforms aim to increase local content and attract foreign investment. However, aging infrastructure and security concerns remain significant hurdles."\n\nAccording to the text, which agency is responsible for upstream standards?',
    options: ["NMDPRA", "NUPRC", "The Ministry of Petroleum", "The Nigerian Senate"],
    correct: 1,
    explanation: "The text clearly states: 'The NUPRC oversees upstream technical standards'"
  },
  {
    id: 14,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Foreign investment in Nigeria\'s oil sector is currently at an all-time high."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text mentions reforms aim to attract foreign investment but doesn't state current levels"
  },
  {
    id: 15,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what is one of the hurdles mentioned for the industry?',
    options: ["Lack of skilled workers", "Aging infrastructure", "Insufficient crude oil reserves", "Over-regulation"],
    correct: 1,
    explanation: "The text explicitly mentions 'aging infrastructure and security concerns'"
  },
  {
    id: 16,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "The NMDPRA is solely focused on environmental protection."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text only states NMDPRA handles downstream regulations, not its full scope"
  },
  {
    id: 17,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correctly spelled word:",
    options: ["Seperate", "Separete", "Separate", "Seperete"],
    correct: 2,
    explanation: "'Separate' is the correct spelling"
  },
  {
    id: 18,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "mitigate" in a safety report most nearly means:',
    options: ["Exacerbate", "Reduce", "Ignore", "Report"],
    correct: 1,
    explanation: "Mitigate means to make less severe, to reduce or alleviate"
  },
  {
    id: 19,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The flow rate was ______ by partially closing the valve.",
    options: ["regulated", "increased", "terminated", "bypassed"],
    correct: 0,
    explanation: "Regulated means controlled or adjusted"
  },
  {
    id: 20,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence is grammatically correct?",
    options: [
      "He should of checked the pressure gauge.",
      "He should have checked the pressure gauge.",
      "He should have check the pressure gauge.",
      "He should of have checked the pressure gauge."
    ],
    correct: 1,
    explanation: "'Should have' is the correct modal verb construction"
  },
  {
    id: 21,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'A "catastrophic failure" in engineering implies a failure that is:',
    options: [
      "Minor and easily repairable.",
      "Sudden and results in total loss of function.",
      "Gradual and predictable.",
      "Cosmetic in nature."
    ],
    correct: 1,
    explanation: "Catastrophic means sudden, disastrous, and resulting in complete failure"
  },
  {
    id: 22,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "To ensure accurate readings, the instrument must be carefully ______.",
    options: ["calibrated", "discarded", "painted", "rotated"],
    correct: 0,
    explanation: "Calibrated means to adjust for accuracy"
  },
  {
    id: 23,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Flaring is the controlled burning of natural gas during crude oil production. While it reduces the direct release of methane into the atmosphere, it produces significant CO2 and particulate matter, contributing to air pollution and health issues in surrounding communities."\n\nWhat is the primary purpose of flaring according to the text?',
    options: [
      "To produce electricity.",
      "To reduce methane release.",
      "To create CO2.",
      "To increase oil production."
    ],
    correct: 1,
    explanation: "The text states it 'reduces the direct release of methane'"
  },
  {
    id: 24,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Flaring completely eliminates all negative environmental impacts."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text mentions it produces CO2 and particulate matter, so it doesn't eliminate negative impacts"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 25,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What is the next shape in the sequence: Square, Pentagon, Hexagon, ?",
    options: ["Triangle", "Heptagon", "Octagon", "Circle"],
    correct: 1,
    explanation: "Sides increase by 1: 4, 5, 6, 7 sides = Heptagon"
  },
  {
    id: 26,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A star shape points North. If it rotates 180 degrees clockwise, which direction will it point?",
    options: ["North", "East", "South", "West"],
    correct: 2,
    explanation: "180° rotation reverses direction: North → South"
  },
  {
    id: 27,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which figure logically comes next in the sequence: Sun, Cloud, Rain, ?",
    options: ["Lightning", "Star", "Snow", "Rainbow"],
    correct: 0,
    explanation: "Sequential weather progression"
  },
  {
    id: 28,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "If * represents a circle and # represents a square, which completes the sequence? (*, #, *, #, *, ?)",
    options: ["*", "#", "@", "$"],
    correct: 1,
    explanation: "The pattern alternates: *, #, *, #, *, #"
  },
  {
    id: 29,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out:",
    options: [
      "2, 4, 6, 8",
      "3, 6, 9, 12",
      "5, 10, 15, 20",
      "7, 14, 21, 27"
    ],
    correct: 3,
    explanation: "7, 14, 21, 27 - 27 breaks the pattern (should be 28)"
  },
  {
    id: 30,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If a shape appears as [>] and rotates 90 degrees counter-clockwise, what will it look like?",
    options: ["[^]", "[v]", "[<]", "[>]"],
    correct: 1,
    explanation: "90° CCW rotation of > points downward [v]"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 31,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number? 5, 10, 20, 40, ?",
    options: ["50", "60", "70", "80"],
    correct: 3,
    explanation: "Each number doubles: 5×2=10, 10×2=20, 20×2=40, 40×2=80"
  },
  {
    id: 32,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All engineers must wear hard hats on site. John is not wearing a hard hat. What can you conclude?",
    options: [
      "John is not an engineer.",
      "John is a visitor.",
      "John is violating site rules.",
      "John is the site manager."
    ],
    correct: 2,
    explanation: "Since ALL engineers must wear hard hats, John not wearing one means he's violating the rule"
  },
  {
    id: 33,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A pressure vessel's relief valve opens at a lower pressure than its design rating. The most logical implication is:",
    options: [
      "The valve is functioning perfectly.",
      "The vessel is operating at maximum capacity.",
      "The valve might be faulty or incorrectly set.",
      "The design rating is too high."
    ],
    correct: 2,
    explanation: "A valve opening below its design rating suggests a malfunction or incorrect setting"
  },
  {
    id: 34,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 11, 23, 35, 47, 59, 62",
    options: ["11", "35", "47", "62"],
    correct: 3,
    explanation: "All numbers except 62 are odd; 62 is even"
  },
  {
    id: 35,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some separators are vessels. All vessels are equipment. Which is true?",
    options: [
      "All separators are equipment.",
      "All equipment are separators.",
      "No separators are vessels.",
      "Some vessels are not equipment."
    ],
    correct: 0,
    explanation: "If separators are a subset of vessels, and all vessels are equipment, then all separators are equipment"
  },
  {
    id: 36,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "An engineer notices that a bearing's temperature rises only when the pump speed exceeds 1500 RPM. This suggests:",
    options: [
      "The bearing is faulty at all speeds.",
      "The problem is directly related to rotational speed.",
      "The pump is operating correctly.",
      "The temperature sensor is faulty."
    ],
    correct: 1,
    explanation: "Temperature rise correlating with speed indicates a speed-related issue"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 37,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 24V DC circuit has a resistance of 12Ω. What is the current?",
    options: ["0.5 A", "2 A", "12 A", "288 A"],
    correct: 1,
    explanation: "I = V/R = 24/12 = 2A"
  },
  {
    id: 38,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Delta-connected system, the line voltage is ______ the phase voltage.",
    options: ["Equal to", "Twice", "√3 times", "1/√3 times"],
    correct: 0,
    explanation: "In Delta connection, V_Line = V_Phase"
  },
  {
    id: 39,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "The power factor of a purely resistive AC circuit is:",
    options: ["0", "0.5", "0.8", "1"],
    correct: 3,
    explanation: "Purely resistive circuits have unity power factor = 1"
  },
  {
    id: 40,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "What type of transformer is used to step down voltage from 33kV to 11kV?",
    options: [
      "A step-up transformer.",
      "A step-down transformer.",
      "An isolation transformer.",
      "An auto-transformer."
    ],
    correct: 1,
    explanation: "Step-down transformer reduces voltage from higher to lower"
  },
  {
    id: 41,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "The synchronous speed of an induction motor is determined by the:",
    options: [
      "Load on the motor.",
      "Supply frequency and number of poles.",
      "Voltage applied to the motor.",
      "Torque output."
    ],
    correct: 1,
    explanation: "Synchronous speed Ns = 120f/P (frequency and poles)"
  },
  {
    id: 42,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the primary purpose of a circuit breaker?",
    options: [
      "To measure current.",
      "To switch the circuit on and off regularly.",
      "To protect the circuit from overcurrent and short circuits.",
      "To reduce voltage."
    ],
    correct: 2,
    explanation: "Circuit breakers protect against overcurrent and short circuits"
  },
  {
    id: 43,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the first step in responding to an electrical shock incident?",
    options: [
      "Call for help.",
      "Turn off the power source.",
      "Perform CPR.",
      "Move the victim away."
    ],
    correct: 1,
    explanation: "Always turn off power source first to avoid further injury"
  },
  {
    id: 44,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "What property of a fluid resists flow?",
    options: ["Density", "Viscosity", "Surface tension", "Compressibility"],
    correct: 1,
    explanation: "Viscosity is the measure of a fluid's resistance to flow"
  },
  {
    id: 45,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "Convert 100 kPa to bar.",
    options: ["0.1 bar", "1 bar", "10 bar", "1000 bar"],
    correct: 1,
    explanation: "1 bar = 100 kPa"
  },
  {
    id: 46,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "A positive displacement pump is best suited for:",
    options: [
      "Moving large volumes of water at low pressure.",
      "Handling highly viscous fluids at high pressure.",
      "Moving gases.",
      "Applications requiring extremely low flow rates."
    ],
    correct: 1,
    explanation: "PD pumps excel at moving viscous fluids at high pressures"
  },
  {
    id: 47,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "The function of an intercooler in a multi-stage compressor is to:",
    options: [
      "Increase the inlet air temperature.",
      "Remove moisture from the air.",
      "Reduce the temperature of the air between stages.",
      "Lubricate the moving parts."
    ],
    correct: 2,
    explanation: "Intercooler cools air between stages to improve efficiency"
  },
  {
    id: 48,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "Which type of heat transfer involves the movement of fluids?",
    options: ["Conduction", "Convection", "Radiation", "Induction"],
    correct: 1,
    explanation: "Convection requires fluid movement (liquid or gas)"
  },
  {
    id: 49,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "The primary objective of upstream operations is to:",
    options: [
      "Refine crude oil into finished products.",
      "Transport crude oil via pipelines.",
      "Explore for and produce crude oil and natural gas.",
      "Market and sell petroleum products."
    ],
    correct: 2,
    explanation: "Upstream = exploration and production"
  },
  {
    id: 50,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "Primary recovery of crude oil relies on:",
    options: [
      "Injecting steam into the reservoir.",
      "The natural reservoir pressure.",
      "Injecting chemicals to reduce viscosity.",
      "Drilling horizontal wells."
    ],
    correct: 1,
    explanation: "Primary recovery uses natural reservoir pressure"
  },
  {
    id: 51,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "The main function of the wellhead is to:",
    options: [
      "Drill the borehole.",
      "Control the pressure and contain the fluids in the well.",
      "Separate oil from gas.",
      "Transport oil to the refinery."
    ],
    correct: 1,
    explanation: "Wellhead controls pressure and contains wellbore fluids"
  },
  {
    id: 52,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "A two-phase separator is designed to separate:",
    options: [
      "Oil, water, and gas.",
      "Oil and water.",
      "Gas and liquids.",
      "Solid particles and fluids."
    ],
    correct: 2,
    explanation: "Two-phase separates gas from total liquids"
  },
  {
    id: 53,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: 'What is the primary purpose of a "pig" in pipeline operations?',
    options: [
      "To increase the flow rate of crude oil.",
      "To clean, inspect, or separate products within the pipeline.",
      "To heat the crude oil to reduce viscosity.",
      "To measure the pressure at different points along the pipeline."
    ],
    correct: 1,
    explanation: "Pigs clean, inspect, and separate products in pipelines"
  },
  {
    id: 54,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A pressure transmitter typically converts a pressure reading into a standard electrical signal, such as:",
    options: [
      "0-10V or 4-20mA.",
      "110-220V AC.",
      "RS-232 or USB.",
      "1-5 psi."
    ],
    correct: 0,
    explanation: "Standard industrial signals are 4-20mA or 0-10V"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 55,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "You are under pressure to restart a pump to meet production targets, but the pre-start checklist has not been fully completed due to a lack of time. What do you do?",
    options: [
      "Complete the checklist quickly to satisfy the requirement and start the pump.",
      "Restart the pump and complete the checklist afterward to save time.",
      "Refuse to restart the pump until the checklist is fully and properly completed.",
      "Start the pump but monitor it closely for any issues."
    ],
    correct: 2,
    explanation: "Safety procedures must never be compromised for production targets"
  },
  {
    id: 56,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "A colleague on your team consistently fails to complete their assigned tasks on time, impacting your ability to finish your own work. What is your best initial action?",
    options: [
      "Report the colleague to the supervisor immediately.",
      "Do the colleague's work for them to meet the deadline.",
      "Privately and respectfully discuss the issue with the colleague to find a solution.",
      "Publicly call out the colleague during a team meeting."
    ],
    correct: 2,
    explanation: "Private, respectful communication is the most professional first step"
  },
  {
    id: 57,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "A contractor asks you for technical specifications of a new piece of equipment that is not yet publicly released. What should you do?",
    options: [
      "Share the specifications as they are a trusted contractor.",
      "Politely decline and direct them to the appropriate department for official release.",
      "Share only the basic information to be helpful.",
      "Ignore the contractor's request."
    ],
    correct: 1,
    explanation: "Confidential information should only be released through proper channels"
  },
  {
    id: 58,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "While reviewing a report, you discover a significant error in the data that a senior engineer has already signed off on. What is the most professional course of action?",
    options: [
      "Correct the data and resubmit the report.",
      "Ignore the error since it was signed off by a senior.",
      "Approach the senior engineer privately and discreetly with your concern.",
      "Send an email copying everyone on the team detailing the senior's mistake."
    ],
    correct: 2,
    explanation: "Private, respectful communication preserves relationships while ensuring accuracy"
  },
  {
    id: 59,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You observe a small amount of oil leaking from a flange on a pipeline. There is no immediate fire hazard. What is your first action?",
    options: [
      "Ignore it as it is too small to matter.",
      "Report it to your supervisor and isolate the leak if safe to do so.",
      "Wait to see if the leak gets worse.",
      "Try to fix it yourself using a wrench."
    ],
    correct: 1,
    explanation: "Any leak must be reported immediately; isolate if safe to do so"
  },
  {
    id: 60,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A vendor offers you a gift of a new phone to thank you for your assistance on a routine project. Company policy strictly prohibits accepting gifts from vendors. What do you do?",
    options: [
      "Accept the gift as it is a simple thank you.",
      "Politely decline the gift, citing company policy.",
      "Accept the gift but keep it secret.",
      "Accept the gift and report it later."
    ],
    correct: 1,
    explanation: "Always comply with company policy and decline gifts professionally"
  }
];

// ============================================
// SET 2 - Alternative Questions
// ============================================
const set2 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 101,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "An oil well produces 2,500 barrels of crude oil per day. If production increases by 20%, what is the new daily production?",
    options: ["2,700 bbl", "2,800 bbl", "3,000 bbl", "3,200 bbl"],
    correct: 2,
    explanation: "20% of 2,500 = 500. New production = 2,500 + 500 = 3,000 bbl"
  },
  {
    id: 102,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A drilling company buys equipment for ₦2,000,000 and sells it at a 15% loss. What is the selling price?",
    options: ["₦1,500,000", "₦1,700,000", "₦1,800,000", "₦2,300,000"],
    correct: 1,
    explanation: "Loss = 15% of 2,000,000 = 300,000. Selling price = 2,000,000 - 300,000 = ₦1,700,000"
  },
  {
    id: 103,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A mixture of oil and water is in the ratio 7:3. If there are 140 liters of oil, how many liters of water are there?",
    options: ["40 liters", "50 liters", "60 liters", "70 liters"],
    correct: 2,
    explanation: "7:3 = 140:x → 7x = 420 → x = 60 liters"
  },
  {
    id: 104,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A crude oil tanker travels at 30 knots. How many nautical miles will it cover in 4.5 hours?",
    options: ["120 nm", "135 nm", "150 nm", "160 nm"],
    correct: 1,
    explanation: "Distance = Speed × Time = 30 × 4.5 = 135 nautical miles"
  },
  {
    id: 105,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A bag contains 8 white balls, 5 black balls, and 7 red balls. What is the probability of picking a black ball?",
    options: ["1/4", "1/3", "1/5", "2/5"],
    correct: 0,
    explanation: "Total = 8+5+7 = 20. Probability = 5/20 = 1/4"
  },
  {
    id: 106,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A line graph shows oil prices over 5 months: January = $70, February = $75, March = $80, April = $78, May = $82. What is the average price?",
    options: ["$75", "$77", "$79", "$81"],
    correct: 1,
    explanation: "Average = (70+75+80+78+82)/5 = 385/5 = $77"
  },
  {
    id: 107,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows three pumps with flow rates: Pump A = 200 L/min, Pump B = 300 L/min, Pump C = 500 L/min. What is the combined flow rate in L/hour?",
    options: ["60,000 L/h", "70,000 L/h", "80,000 L/h", "90,000 L/h"],
    correct: 0,
    explanation: "Combined = 200+300+500 = 1,000 L/min = 1,000 × 60 = 60,000 L/h"
  },
  {
    id: 108,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["38", "40", "42", "44"],
    correct: 2,
    explanation: "Differences: 4, 6, 8, 10, 12 → 30+12 = 42"
  },
  {
    id: 109,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A gas processing plant processes 1,200 m³ of gas daily. If efficiency improves by 25%, how much gas is processed?",
    options: ["1,400 m³", "1,500 m³", "1,600 m³", "1,800 m³"],
    correct: 1,
    explanation: "25% of 1,200 = 300. New = 1,200 + 300 = 1,500 m³"
  },
  {
    id: 110,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of employees in three departments is 2:3:5. If there are 100 employees total, how many are in the largest department?",
    options: ["20", "30", "40", "50"],
    correct: 3,
    explanation: "Total parts = 2+3+5 = 10. Largest = 5/10 × 100 = 50"
  },
  {
    id: 111,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A pipeline transfers crude oil at 200 m³/h. How many cubic meters will be transferred in 12 hours?",
    options: ["2,000 m³", "2,200 m³", "2,400 m³", "2,600 m³"],
    correct: 2,
    explanation: "Volume = Rate × Time = 200 × 12 = 2,400 m³"
  },
  {
    id: 112,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A box contains 12 items, 3 of which are defective. If one item is randomly selected, what is the probability it is NOT defective?",
    options: ["1/4", "1/3", "3/4", "2/3"],
    correct: 2,
    explanation: "Non-defective = 12-3 = 9. Probability = 9/12 = 3/4"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 113,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "The global energy transition is reshaping the oil and gas industry. Companies are increasingly investing in renewable energy sources while maintaining their traditional operations. Natural gas is seen as a bridge fuel due to its lower carbon emissions compared to coal and oil. However, the pace of transition varies significantly across different regions."\n\nAccording to the text, why is natural gas considered a bridge fuel?',
    options: [
      "It is cheaper than renewable energy.",
      "It has lower carbon emissions than coal and oil.",
      "It is available in all regions.",
      "It produces no emissions at all."
    ],
    correct: 1,
    explanation: "The text states: 'Natural gas is seen as a bridge fuel due to its lower carbon emissions compared to coal and oil'"
  },
  {
    id: 114,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "All oil and gas companies are investing equally in renewable energy."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text says companies are investing but doesn't specify equal investment"
  },
  {
    id: 115,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what varies across different regions?',
    options: [
      "The price of oil",
      "The pace of transition",
      "The quality of natural gas",
      "The number of companies"
    ],
    correct: 1,
    explanation: "The text states: 'the pace of transition varies significantly across different regions'"
  },
  {
    id: 116,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Renewable energy investments have completely replaced oil and gas operations."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text says companies maintain traditional operations while investing in renewables"
  },
  {
    id: 117,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct word: The engineers ______ working on the project since January.",
    options: ["has been", "have been", "was", "were"],
    correct: 1,
    explanation: "'Have been' is correct for plural subject 'engineers' with present perfect continuous tense"
  },
  {
    id: 118,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "volatile" in the context of oil prices means:',
    options: ["Stable", "Predictable", "Unstable and changing rapidly", "Increasing slowly"],
    correct: 2,
    explanation: "Volatile means liable to change rapidly and unpredictably"
  },
  {
    id: 119,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The safety officer conducted a thorough ______ of the facility.",
    options: ["inspection", "celebration", "decoration", "negotiation"],
    correct: 0,
    explanation: "Inspection is the appropriate word for a safety review"
  },
  {
    id: 120,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't know the answer.",
      "She doesn't know the answer.",
      "She didn't knew the answer.",
      "She doesn't knows the answer."
    ],
    correct: 1,
    explanation: "'Doesn't know' is correct for third person singular negative"
  },
  {
    id: 121,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "sustainable" in an environmental context means:',
    options: [
      "Quick to implement",
      "Cost-effective",
      "Capable of being maintained over time",
      "Temporary"
    ],
    correct: 2,
    explanation: "Sustainable means able to be maintained at a certain rate or level"
  },
  {
    id: 122,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The new equipment will ______ production efficiency significantly.",
    options: ["decrease", "enhance", "complicate", "postpone"],
    correct: 1,
    explanation: "Enhance means to improve or make better"
  },
  {
    id: 123,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Carbon capture and storage (CCS) is a technology that captures up to 90% of carbon dioxide emissions from industrial sources. The captured CO2 is then transported and stored deep underground in geological formations. CCS is considered a critical technology for achieving net-zero emissions targets."\n\nWhat is the main purpose of CCS technology according to the text?',
    options: [
      "To create new industrial products",
      "To capture and store CO2 emissions",
      "To replace renewable energy",
      "To increase industrial production"
    ],
    correct: 1,
    explanation: "The text states CCS 'captures up to 90% of carbon dioxide emissions'"
  },
  {
    id: 124,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "CCS technology can capture 100% of all CO2 emissions."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text says 'up to 90%', not 100%"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 125,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What comes next: Circle, Triangle, Square, Pentagon, ?",
    options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
    correct: 0,
    explanation: "Sides: 0, 3, 4, 5, 6 → Hexagon"
  },
  {
    id: 126,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape facing East rotates 90° clockwise. Which direction does it face?",
    options: ["North", "South", "East", "West"],
    correct: 1,
    explanation: "East → 90° CW = South"
  },
  {
    id: 127,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: Red, Orange, Yellow, Green, ?",
    options: ["Blue", "Purple", "White", "Black"],
    correct: 0,
    explanation: "Color spectrum order: Red, Orange, Yellow, Green, Blue"
  },
  {
    id: 128,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Which completes the pattern: 1, 1, 2, 3, 5, ?",
    options: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "Fibonacci sequence: 1+1=2, 1+2=3, 2+3=5, 3+5=8"
  },
  {
    id: 129,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 3, 6, 9, 12, 15, 18, 21, 23",
    options: ["15", "18", "21", "23"],
    correct: 3,
    explanation: "All except 23 are multiples of 3"
  },
  {
    id: 130,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If a shape rotates 270° clockwise, how many degrees counter-clockwise is that equivalent to?",
    options: ["45°", "90°", "180°", "270°"],
    correct: 1,
    explanation: "270° clockwise = 90° counter-clockwise (360° - 270° = 90°)"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 131,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 3, 9, 27, 81, ?",
    options: ["162", "216", "243", "324"],
    correct: 2,
    explanation: "Each number ×3: 3×3=9, 9×3=27, 27×3=81, 81×3=243"
  },
  {
    id: 132,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All technicians are required to have safety certification. Peter is a technician. What can you conclude?",
    options: [
      "Peter has safety certification.",
      "Peter doesn't need safety certification.",
      "Peter is not a technician.",
      "Peter is a supervisor."
    ],
    correct: 0,
    explanation: "If all technicians must have certification and Peter is a technician, he must have it"
  },
  {
    id: 133,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A gauge reads 5 psi higher than the actual pressure. This indicates:",
    options: [
      "The gauge is accurate.",
      "The gauge has a systematic error.",
      "The pressure is fluctuating.",
      "The system is overheating."
    ],
    correct: 1,
    explanation: "A consistent difference indicates a systematic error or miscalibration"
  },
  {
    id: 134,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 10, 20, 30, 40, 50, 60, 70, 77",
    options: ["40", "60", "70", "77"],
    correct: 3,
    explanation: "All except 77 are multiples of 10"
  },
  {
    id: 135,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some pumps are centrifugal. All centrifugal pumps are efficient. Which is true?",
    options: [
      "All pumps are efficient.",
      "Some pumps are efficient.",
      "No pumps are efficient.",
      "All efficient pumps are centrifugal."
    ],
    correct: 1,
    explanation: "If some pumps are centrifugal and all centrifugal pumps are efficient, then some pumps are efficient"
  },
  {
    id: 136,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "An engineer notices vibration only when the motor runs at 3000 RPM. This suggests:",
    options: [
      "The motor is faulty at all speeds.",
      "The problem is speed-dependent.",
      "The motor is operating correctly.",
      "The load is too high."
    ],
    correct: 1,
    explanation: "Vibration occurring at a specific speed indicates a speed-dependent issue"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 137,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 12V circuit draws 3A of current. What is the resistance?",
    options: ["2Ω", "4Ω", "6Ω", "8Ω"],
    correct: 1,
    explanation: "R = V/I = 12/3 = 4Ω"
  },
  {
    id: 138,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Star-connected system, the line current is ______ the phase current.",
    options: ["Equal to", "Twice", "√3 times", "1/√3 times"],
    correct: 0,
    explanation: "In Star connection, I_Line = I_Phase"
  },
  {
    id: 139,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A motor with a power factor of 0.8 draws 10A at 220V. What is the true power?",
    options: ["1.6 kW", "1.76 kW", "2.2 kW", "2.75 kW"],
    correct: 1,
    explanation: "P = V × I × PF = 220 × 10 × 0.8 = 1,760W = 1.76kW"
  },
  {
    id: 140,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A transformer has a turns ratio of 10:1. If the primary voltage is 240V, what is the secondary voltage?",
    options: ["12V", "24V", "120V", "240V"],
    correct: 1,
    explanation: "V_secondary = V_primary / Turns_Ratio = 240/10 = 24V"
  },
  {
    id: 141,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 4-pole motor operates at 50Hz. What is the synchronous speed?",
    options: ["750 RPM", "1000 RPM", "1500 RPM", "3000 RPM"],
    correct: 2,
    explanation: "Ns = 120f/P = 120×50/4 = 1,500 RPM"
  },
  {
    id: 142,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What device is used to protect a motor from overload?",
    options: ["Fuse", "Circuit breaker", "Overload relay", "Transformer"],
    correct: 2,
    explanation: "Overload relay specifically protects motors from sustained overcurrent"
  },
  {
    id: 143,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "The maximum safe voltage for a dry location workplace is generally considered to be:",
    options: ["12V", "24V", "50V", "120V"],
    correct: 2,
    explanation: "Generally, voltages above 50V AC require additional safety measures"
  },
  {
    id: 144,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "What is the SI unit of viscosity?",
    options: ["Pa·s", "N·m", "kg/m³", "m/s²"],
    correct: 0,
    explanation: "Viscosity is measured in Pascal-seconds (Pa·s)"
  },
  {
    id: 145,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "Convert 150 psi to bar (1 bar = 14.5 psi).",
    options: ["8.6 bar", "10.3 bar", "12.5 bar", "15.0 bar"],
    correct: 1,
    explanation: "150/14.5 = 10.34 bar"
  },
  {
    id: 146,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "Centrifugal pumps are best suited for:",
    options: [
      "High pressure, low flow",
      "Low pressure, high flow",
      "High pressure, high flow",
      "Low pressure, low flow"
    ],
    correct: 1,
    explanation: "Centrifugal pumps are ideal for low pressure, high flow applications"
  },
  {
    id: 147,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the purpose of the aftercooler in a compressor system?",
    options: [
      "To increase air temperature",
      "To cool compressed air before use",
      "To lubricate the compressor",
      "To filter the air"
    ],
    correct: 1,
    explanation: "Aftercooler cools the hot compressed air before it enters the system"
  },
  {
    id: 148,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "What is the primary method of heat transfer in a heat exchanger?",
    options: ["Conduction", "Convection", "Radiation", "Both conduction and convection"],
    correct: 3,
    explanation: "Heat exchangers use both conduction (through walls) and convection (through fluids)"
  },
  {
    id: 149,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "Which activity is NOT part of upstream operations?",
    options: ["Exploration", "Drilling", "Production", "Refining"],
    correct: 3,
    explanation: "Refining is downstream, not upstream"
  },
  {
    id: 150,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "Secondary recovery methods typically involve:",
    options: [
      "Natural reservoir pressure",
      "Water or gas injection",
      "Drilling new wells",
      "Refining crude oil"
    ],
    correct: 1,
    explanation: "Secondary recovery uses water flooding or gas injection to maintain pressure"
  },
  {
    id: 151,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "The BOP (Blowout Preventer) is designed to:",
    options: [
      "Increase production",
      "Prevent uncontrolled well pressure release",
      "Separate oil and gas",
      "Monitor pipeline flow"
    ],
    correct: 1,
    explanation: "BOP is a critical safety device to prevent blowouts"
  },
  {
    id: 152,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "A three-phase separator separates:",
    options: [
      "Oil and gas only",
      "Oil, gas, and water",
      "Gas and solids",
      "Oil and solids"
    ],
    correct: 1,
    explanation: "Three-phase separates oil, gas, and water"
  },
  {
    id: 153,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is pipeline cathodic protection used for?",
    options: [
      "Increasing flow rate",
      "Preventing corrosion",
      "Heating the pipeline",
      "Measuring pressure"
    ],
    correct: 1,
    explanation: "Cathodic protection prevents electrochemical corrosion of pipelines"
  },
  {
    id: 154,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A thermocouple is used to measure:",
    options: ["Pressure", "Temperature", "Flow rate", "Level"],
    correct: 1,
    explanation: "Thermocouples measure temperature based on the Seebeck effect"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 155,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "You notice a colleague operating equipment without proper PPE. What should you do?",
    options: [
      "Mind your own business.",
      "Politely remind them about the safety requirement.",
      "Report them immediately to management.",
      "Ignore it if they are experienced."
    ],
    correct: 1,
    explanation: "Safety concerns should be addressed respectfully with colleagues first"
  },
  {
    id: 156,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "Your team is falling behind schedule due to a member's absence. What is the best approach?",
    options: [
      "Work overtime to cover for them.",
      "Blame the absent member.",
      "Reassign tasks and communicate with the team.",
      "Ignore the delay."
    ],
    correct: 2,
    explanation: "Professional approach is to reassign tasks and maintain communication"
  },
  {
    id: 157,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "A client asks about another client's project details. What should you do?",
    options: [
      "Share the information since they're both clients.",
      "Politely decline and cite confidentiality policies.",
      "Share limited information.",
      "Ask for permission first."
    ],
    correct: 1,
    explanation: "Client confidentiality must be respected at all times"
  },
  {
    id: 158,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You find a critical error in a report that has already been submitted to management. What do you do?",
    options: [
      "Ignore it since it's already submitted.",
      "Inform your supervisor immediately about the error.",
      "Try to correct it secretly.",
      "Blame it on someone else."
    ],
    correct: 1,
    explanation: "Critical errors must be reported immediately to the appropriate person"
  },
  {
    id: 159,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You see a chemical spill in a non-hazardous area. What is your first action?",
    options: [
      "Ignore it if it's small.",
      "Follow the spill response procedure.",
      "Wait for someone else to notice.",
      "Take a photo and continue working."
    ],
    correct: 1,
    explanation: "All spills, regardless of size, must be handled according to procedures"
  },
  {
    id: 160,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A supplier offers you a holiday trip in exchange for a favorable contract decision. What do you do?",
    options: [
      "Accept it since it's a gift.",
      "Decline the offer and report it to management.",
      "Accept it but don't tell anyone.",
      "Consider it after the decision is made."
    ],
    correct: 1,
    explanation: "Any offer that could influence decisions must be declined and reported"
  }
];

// ============================================
// SET 3 - Another Alternative
// ============================================
const set3 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 201,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A refinery processes 8,000 barrels of crude oil daily. If 75% is converted to gasoline, how many barrels of gasoline are produced?",
    options: ["4,000 bbl", "5,000 bbl", "6,000 bbl", "7,000 bbl"],
    correct: 2,
    explanation: "75% of 8,000 = 0.75 × 8,000 = 6,000 bbl"
  },
  {
    id: 202,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A contractor sells a crane for ₦4,500,000 at a 10% profit. What was the cost price?",
    options: ["₦4,000,000", "₦4,090,909", "₦4,500,000", "₦4,950,000"],
    correct: 1,
    explanation: "CP × 1.10 = 4,500,000 → CP = 4,500,000/1.10 = ₦4,090,909"
  },
  {
    id: 203,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of crude oil to water in a sample is 9:1. If the sample weighs 500 kg, how much oil is present?",
    options: ["400 kg", "425 kg", "450 kg", "475 kg"],
    correct: 2,
    explanation: "Total parts = 9+1 = 10. Oil = 9/10 × 500 = 450 kg"
  },
  {
    id: 204,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A shuttle bus travels at 50 km/h. How far will it travel in 2.8 hours?",
    options: ["120 km", "130 km", "140 km", "150 km"],
    correct: 2,
    explanation: "Distance = 50 × 2.8 = 140 km"
  },
  {
    id: 205,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A shipment contains 200 items, 16 of which are defective. What is the probability of selecting a defective item?",
    options: ["6%", "8%", "10%", "12%"],
    correct: 1,
    explanation: "16/200 = 0.08 = 8%"
  },
  {
    id: 206,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A pie chart shows production distribution: Oil 50%, Gas 30%, Others 20%. If total production is 10,000 tons, what is the gas production?",
    options: ["2,000 tons", "3,000 tons", "4,000 tons", "5,000 tons"],
    correct: 1,
    explanation: "30% of 10,000 = 3,000 tons"
  },
  {
    id: 207,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows maintenance costs: Jan = ₦50,000, Feb = ₦45,000, Mar = ₦55,000. What is the average monthly cost?",
    options: ["₦45,000", "₦50,000", "₦55,000", "₦60,000"],
    correct: 1,
    explanation: "Average = (50,000+45,000+55,000)/3 = 150,000/3 = ₦50,000"
  },
  {
    id: 208,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the missing term: 8, 16, 32, 64, ?",
    options: ["96", "112", "128", "144"],
    correct: 2,
    explanation: "Each term doubles: 64 × 2 = 128"
  },
  {
    id: 209,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A worker's salary increased from ₦400,000 to ₦480,000. What is the percentage increase?",
    options: ["15%", "18%", "20%", "25%"],
    correct: 2,
    explanation: "Increase = 80,000. Percentage = (80,000/400,000) × 100 = 20%"
  },
  {
    id: 210,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of supervisors to workers is 1:20. If there are 5 supervisors, how many workers are there?",
    options: ["80", "90", "100", "110"],
    correct: 2,
    explanation: "1:20 = 5:x → x = 100"
  },
  {
    id: 211,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A truck travels at 80 km/h for 3 hours, then at 60 km/h for 2 hours. What is the total distance covered?",
    options: ["320 km", "340 km", "360 km", "380 km"],
    correct: 2,
    explanation: "Total = (80×3) + (60×2) = 240 + 120 = 360 km"
  },
  {
    id: 212,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A bag has 4 red balls, 3 yellow balls, and 5 blue balls. What is the probability of picking a yellow or blue ball?",
    options: ["1/3", "1/2", "2/3", "3/4"],
    correct: 2,
    explanation: "Total = 4+3+5 = 12. Yellow+Blue = 3+5 = 8. Probability = 8/12 = 2/3"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 213,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Hydraulic fracturing, or fracking, is a technique used to extract shale gas from deep underground. The process involves injecting high-pressure fluid into rock formations to create fractures. While fracking has increased natural gas production, it has also raised environmental concerns including water contamination and seismic activity."\n\nWhat is the primary purpose of fracking?',
    options: [
      "To create underground storage",
      "To extract shale gas",
      "To prevent seismic activity",
      "To produce drinking water"
    ],
    correct: 1,
    explanation: "The text states fracking is 'used to extract shale gas'"
  },
  {
    id: 214,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Fracking has no environmental concerns."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text mentions 'environmental concerns including water contamination and seismic activity'"
  },
  {
    id: 215,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what environmental concerns are mentioned?',
    options: [
      "Air pollution only",
      "Water contamination and seismic activity",
      "Noise pollution",
      "Wildlife extinction"
    ],
    correct: 1,
    explanation: "The text mentions 'water contamination and seismic activity'"
  },
  {
    id: 216,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Fracking has decreased natural gas production."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text says fracking 'has increased natural gas production'"
  },
  {
    id: 217,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct form: Neither the manager nor the workers ______ available.",
    options: ["is", "am", "are", "be"],
    correct: 2,
    explanation: "With 'neither...nor', the verb agrees with the closer subject (workers = plural)"
  },
  {
    id: 218,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "remediation" in environmental context refers to:',
    options: [
      "Causing pollution",
      "Cleaning up or correcting environmental damage",
      "Monitoring pollution",
      "Ignoring environmental issues"
    ],
    correct: 1,
    explanation: "Remediation is the act of correcting or cleaning up environmental damage"
  },
  {
    id: 219,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "Regular maintenance is ______ to prevent equipment breakdown.",
    values: ["optional", "essential", "recommended", "unnecessary"],
    correct: 1,
    explanation: "Essential means absolutely necessary"
  },
  {
    id: 220,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence is correct?",
    options: [
      "There are less errors in the new system.",
      "There are fewer errors in the new system.",
      "There is less errors in the new system.",
      "There is fewer errors in the new system."
    ],
    correct: 1,
    explanation: "Use 'fewer' for countable nouns (errors)"
  },
  {
    id: 221,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "inventory" in a business context refers to:',
    options: [
      "Financial investments",
      "A list of goods and materials",
      "Employee records",
      "Customer information"
    ],
    correct: 1,
    explanation: "Inventory is a list or quantity of goods and materials on hand"
  },
  {
    id: 222,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The new policy will be ______ next month.",
    options: ["implemented", "cancelled", "postponed", "ignored"],
    correct: 0,
    explanation: "Implemented means put into effect"
  },
  {
    id: 223,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Offshore drilling platforms are complex structures that house equipment for extracting oil and gas from beneath the seabed. These platforms must withstand harsh marine conditions including strong currents, high waves, and corrosive saltwater. Advanced engineering and regular maintenance are essential for safe operation."\n\nWhat conditions must offshore platforms withstand?',
    options: [
      "Desert heat and sand",
      "Strong currents, high waves, and saltwater",
      "Volcanic activity",
      "Hurricanes only"
    ],
    correct: 1,
    explanation: "The text mentions 'strong currents, high waves, and corrosive saltwater'"
  },
  {
    id: 224,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Offshore platforms are built in shallow water only."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text doesn't specify water depth"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 225,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "Which comes next: Triangle, Triangle, Circle, Circle, Square, ?",
    options: ["Square", "Triangle", "Circle", "Star"],
    correct: 0,
    explanation: "Pattern pairs: Triangle Triangle, Circle Circle, Square Square"
  },
  {
    id: 226,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape rotates 270° counter-clockwise. How many degrees clockwise is that?",
    options: ["45°", "90°", "135°", "180°"],
    correct: 1,
    explanation: "270° CCW = 90° CW (360° - 270° = 90°)"
  },
  {
    id: 227,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "What comes next: 2, 4, 8, 16, 32, ?",
    options: ["48", "56", "64", "72"],
    correct: 2,
    explanation: "Each number doubles: 32 × 2 = 64"
  },
  {
    id: 228,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete the pattern: 5, 10, 20, 40, 80, ?",
    options: ["100", "120", "140", "160"],
    correct: 3,
    explanation: "Each number doubles: 80 × 2 = 160"
  },
  {
    id: 229,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 4, 9, 16, 25, 36, 49, 64, 72",
    options: ["49", "64", "72", "36"],
    correct: 2,
    explanation: "All except 72 are perfect squares"
  },
  {
    id: 230,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [<] rotates 90° clockwise, what does it become?",
    options: ["[^]", "[v]", "[>]", "[<]"],
    correct: 0,
    explanation: "90° CW rotation of < points upward [^]"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 231,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 7, 14, 28, 56, ?",
    options: ["84", "98", "112", "126"],
    correct: 2,
    explanation: "Each number doubles: 56 × 2 = 112"
  },
  {
    id: 232,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All safety officers have first aid training. Mary is a safety officer. What is true?",
    options: [
      "Mary has first aid training.",
      "Mary doesn't need training.",
      "Mary is a doctor.",
      "Mary has no training."
    ],
    correct: 0,
    explanation: "If all safety officers have training and Mary is one, she has training"
  },
  {
    id: 233,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A motor draws more current than expected. The most likely cause is:",
    options: [
      "High voltage supply",
      "Mechanical load increase",
      "Low temperature",
      "System is running too fast"
    ],
    correct: 1,
    explanation: "Increased mechanical load causes higher current draw"
  },
  {
    id: 234,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 2, 5, 10, 17, 26, 37, 50, 65",
    options: ["50", "65", "37", "26"],
    correct: 0,
    explanation: "Pattern: +3, +5, +7, +9, +11, +13, +15. 50 should be 51 (37+14)"
  },
  {
    id: 235,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some valves are manual. All manual valves are safe. Which is true?",
    options: [
      "All valves are safe.",
      "Some valves are safe.",
      "No valves are safe.",
      "All safe valves are manual."
    ],
    correct: 1,
    explanation: "If some valves are manual and all manual valves are safe, then some valves are safe"
  },
  {
    id: 236,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A pressure reading drops significantly when a valve is opened. This indicates:",
    options: [
      "The valve is closed.",
      "The system is losing pressure through the valve.",
      "The pressure gauge is faulty.",
      "The pump is off."
    ],
    correct: 1,
    explanation: "Pressure drop when valve opens indicates flow and pressure loss"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 237,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 240V heater draws 8A. What is its resistance?",
    options: ["20Ω", "25Ω", "30Ω", "35Ω"],
    correct: 2,
    explanation: "R = V/I = 240/8 = 30Ω"
  },
  {
    id: 238,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Delta-connected system, the line voltage is 440V. What is the phase voltage?",
    options: ["220V", "254V", "440V", "660V"],
    correct: 2,
    explanation: "In Delta, V_Line = V_Phase, so V_Phase = 440V"
  },
  {
    id: 239,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A 5kW motor has a power factor of 0.75. What is the apparent power?",
    options: ["3.75 kVA", "5 kVA", "6.67 kVA", "7.5 kVA"],
    correct: 2,
    explanation: "S = P/PF = 5/0.75 = 6.67 kVA"
  },
  {
    id: 240,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A step-up transformer has a turns ratio of 1:5. If the primary voltage is 110V, what is the secondary voltage?",
    options: ["22V", "55V", "220V", "550V"],
    correct: 3,
    explanation: "V_secondary = V_primary × Turns_Ratio = 110 × 5 = 550V"
  },
  {
    id: 241,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 6-pole motor operates at 60Hz. What is the synchronous speed?",
    options: ["600 RPM", "900 RPM", "1200 RPM", "1800 RPM"],
    correct: 2,
    explanation: "Ns = 120f/P = 120×60/6 = 1,200 RPM"
  },
  {
    id: 242,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the purpose of a ground fault circuit interrupter (GFCI)?",
    options: [
      "To increase voltage",
      "To protect against ground faults",
      "To measure current",
      "To reduce power"
    ],
    correct: 1,
    explanation: "GFCI protects against electrical shock from ground faults"
  },
  {
    id: 243,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the minimum approach distance for an unqualified worker near energized 13.8kV lines?",
    options: ["3 feet", "5 feet", "10 feet", "15 feet"],
    correct: 1,
    explanation: "Generally 5 feet minimum for 13.8kV (per NFPA 70E)"
  },
  {
    id: 244,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "Bernoulli's principle states that as fluid velocity increases:",
    options: [
      "Pressure increases",
      "Pressure decreases",
      "Density increases",
      "Temperature increases"
    ],
    correct: 1,
    explanation: "Bernoulli: higher velocity = lower pressure"
  },
  {
    id: 245,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "What is absolute pressure if gauge pressure is 7 bar and atmospheric pressure is 1 bar?",
    options: ["6 bar", "7 bar", "8 bar", "9 bar"],
    correct: 2,
    explanation: "Absolute = Gauge + Atmospheric = 7 + 1 = 8 bar"
  },
  {
    id: 246,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What is cavitation in pumps?",
    options: [
      "Pump running dry",
      "Formation of vapor bubbles in the pump",
      "Pump overheating",
      "Pump overloading"
    ],
    correct: 1,
    explanation: "Cavitation is the formation and collapse of vapor bubbles in the pump"
  },
  {
    id: 247,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the primary function of a compressor?",
    options: [
      "To move fluids",
      "To increase gas pressure",
      "To cool gas",
      "To filter gas"
    ],
    correct: 1,
    explanation: "Compressors increase the pressure of gases"
  },
  {
    id: 248,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "Which type of heat transfer does not require a medium?",
    options: ["Conduction", "Convection", "Radiation", "All require a medium"],
    correct: 2,
    explanation: "Radiation can transfer heat through vacuum (no medium needed)"
  },
  {
    id: 249,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of a seismic survey in upstream operations?",
    options: [
      "To refine crude oil",
      "To map underground formations",
      "To transport oil",
      "To store natural gas"
    ],
    correct: 1,
    explanation: "Seismic surveys help map underground rock formations to find oil and gas"
  },
  {
    id: 250,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "Enhanced Oil Recovery (EOR) methods include:",
    options: [
      "Water flooding only",
      "Thermal, gas, and chemical injection",
      "Natural flow",
      "Drilling more wells"
    ],
    correct: 1,
    explanation: "EOR includes thermal, gas, and chemical methods to increase recovery"
  },
  {
    id: 251,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the function of a casing head?",
    options: [
      "To drill the well",
      "To support the casing and wellhead equipment",
      "To separate oil and gas",
      "To pump oil"
    ],
    correct: 1,
    explanation: "The casing head supports the casing string and wellhead equipment"
  },
  {
    id: 252,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the purpose of a scrubber in a separator system?",
    options: [
      "To increase pressure",
      "To remove liquid droplets from gas",
      "To separate oil and water",
      "To measure flow"
    ],
    correct: 1,
    explanation: "Scrubbers remove liquid droplets from gas streams"
  },
  {
    id: 253,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is the purpose of a pipeline inspection gauge (PIG)?",
    options: [
      "To inspect and clean pipelines",
      "To increase pressure",
      "To measure temperature",
      "To control flow"
    ],
    correct: 0,
    explanation: "PIGs are used to inspect and clean pipeline interiors"
  },
  {
    id: 254,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A differential pressure transmitter measures:",
    options: [
      "Temperature difference",
      "Pressure difference between two points",
      "Flow rate only",
      "Level only"
    ],
    correct: 1,
    explanation: "DP transmitters measure the pressure difference between two points"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 255,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "A worker suggests skipping a safety step to meet a deadline. What should you do?",
    options: [
      "Agree to skip it to save time.",
      "Refuse and explain the importance of the safety step.",
      "Ignore the suggestion.",
      "Tell the worker to do it anyway."
    ],
    correct: 1,
    explanation: "Safety procedures must never be compromised, regardless of deadlines"
  },
  {
    id: 256,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "A new team member is struggling with the equipment. What is the best approach?",
    options: [
      "Let them figure it out alone.",
      "Assign them to another task.",
      "Offer training and support.",
      "Report them to management."
    ],
    correct: 2,
    explanation: "Supporting new team members with training is the professional approach"
  },
  {
    id: 257,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "You find classified documents in a shared printer tray. What do you do?",
    options: [
      "Throw them away.",
      "Read them out of curiosity.",
      "Secure them and report to the appropriate person.",
      "Leave them there."
    ],
    correct: 2,
    explanation: "Confidential documents must be secured and reported"
  },
  {
    id: 258,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You notice a minor error in a safety procedure document. What do you do?",
    options: [
      "Ignore it since it's minor.",
      "Correct it yourself and inform the owner.",
      "Wait for someone else to find it.",
      "Throw the document away."
    ],
    correct: 1,
    explanation: "Any error in safety documents should be corrected and communicated"
  },
  {
    id: 259,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You see oil stains on the ground near a storage tank. What is your first action?",
    options: [
      "Ignore it as it's common.",
      "Report it and initiate cleanup procedures.",
      "Wait to see if it spreads.",
      "Cover it with sand."
    ],
    correct: 1,
    explanation: "Any oil leak or spill must be reported and cleaned up immediately"
  },
  {
    id: 260,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A vendor offers you a 'gift' of a laptop to influence a contract decision. What do you do?",
    options: [
      "Accept it as a business gesture.",
      "Decline and report it to your manager.",
      "Accept it but don't tell anyone.",
      "Consider it after the contract."
    ],
    correct: 1,
    explanation: "Gifts that could influence business decisions must be declined and reported"
  }
];

// ============================================
// SET 4 - Fourth Alternative
// ============================================
const set4 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 301,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "An oil company's revenue increased from ₦500 million to ₦600 million. What is the percentage increase?",
    options: ["15%", "20%", "25%", "30%"],
    correct: 1,
    explanation: "Increase = 100 million. Percentage = (100/500) × 100 = 20%"
  },
  {
    id: 302,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A gas station sells diesel at ₦1,200 per liter. If they buy at ₦1,000 per liter, what is the profit margin?",
    options: ["15%", "17%", "20%", "25%"],
    correct: 2,
    explanation: "Profit = 1,200 - 1,000 = 200. Margin = 200/1,000 × 100 = 20%"
  },
  {
    id: 303,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of oil to gas production is 4:1. If oil production is 800 bbl, what is gas production?",
    options: ["100 bbl", "150 bbl", "200 bbl", "250 bbl"],
    correct: 2,
    explanation: "4:1 = 800:x → 4x = 800 → x = 200 bbl"
  },
  {
    id: 304,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A pipeline inspection vehicle travels at 25 km/h. How far does it travel in 3.6 hours?",
    options: ["75 km", "85 km", "90 km", "100 km"],
    correct: 2,
    explanation: "Distance = 25 × 3.6 = 90 km"
  },
  {
    id: 305,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A box contains 6 white, 4 black, and 5 red pens. What is the probability of picking a black pen?",
    options: ["2/15", "4/15", "1/3", "2/5"],
    correct: 1,
    explanation: "Total = 6+4+5 = 15. Black = 4. Probability = 4/15"
  },
  {
    id: 306,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A line graph shows monthly oil production: Jan=300, Feb=350, Mar=400, Apr=450. What is the trend?",
    options: ["Decreasing", "Increasing", "Constant", "Fluctuating"],
    correct: 1,
    explanation: "Production is increasing steadily by 50 each month"
  },
  {
    id: 307,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows worker productivity: Worker A=80 units, B=95 units, C=85 units, D=100 units. What is the average?",
    options: ["85 units", "88 units", "90 units", "92 units"],
    correct: 2,
    explanation: "Average = (80+95+85+100)/4 = 360/4 = 90 units"
  },
  {
    id: 308,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the next term: 1, 8, 27, 64, 125, ?",
    options: ["144", "169", "196", "216"],
    correct: 3,
    explanation: "Cubes: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216"
  },
  {
    id: 309,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A company's expenses decreased from ₦800,000 to ₦680,000. What is the percentage decrease?",
    options: ["10%", "12%", "15%", "18%"],
    correct: 2,
    explanation: "Decrease = 120,000. Percentage = (120,000/800,000) × 100 = 15%"
  },
  {
    id: 310,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of investments by two partners is 3:7. If the total investment is ₦1,000,000, how much did the first partner invest?",
    options: ["₦200,000", "₦300,000", "₦400,000", "₦500,000"],
    correct: 1,
    explanation: "Total parts = 3+7 = 10. First = 3/10 × 1,000,000 = ₦300,000"
  },
  {
    id: 311,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A train travels 360 km in 4.5 hours. What is its speed?",
    options: ["70 km/h", "75 km/h", "80 km/h", "85 km/h"],
    correct: 2,
    explanation: "Speed = Distance/Time = 360/4.5 = 80 km/h"
  },
  {
    id: 312,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A deck of 52 cards is shuffled. What is the probability of drawing a king?",
    options: ["1/52", "1/26", "1/13", "1/4"],
    correct: 2,
    explanation: "There are 4 kings in 52 cards. Probability = 4/52 = 1/13"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 313,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "The oil and gas supply chain consists of three main segments: upstream, midstream, and downstream. Upstream involves exploration and production. Midstream focuses on transportation and storage. Downstream covers refining and marketing of finished products. Each segment requires specialized expertise and equipment."\n\nWhat does the midstream segment involve?',
    options: [
      "Exploration and production",
      "Transportation and storage",
      "Refining and marketing",
      "Sales and distribution"
    ],
    correct: 1,
    explanation: "The text states midstream 'focuses on transportation and storage'"
  },
  {
    id: 314,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "All three segments require the same level of expertise."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text says each segment requires 'specialized expertise' but doesn't compare levels"
  },
  {
    id: 315,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what does upstream involve?',
    options: [
      "Transportation",
      "Exploration and production",
      "Refining",
      "Marketing"
    ],
    correct: 1,
    explanation: "The text states upstream 'involves exploration and production'"
  },
  {
    id: 316,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Downstream operations are less important than upstream."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text doesn't compare importance of different segments"
  },
  {
    id: 317,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct sentence:",
    options: [
      "The data is showing an upward trend.",
      "The data shows an upward trend.",
      "The data are showing an upward trend.",
      "The data show an upward trend."
    ],
    correct: 1,
    explanation: "'Data' is often treated as singular in American English: 'The data shows'"
  },
  {
    id: 318,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "feasibility" in a project context means:',
    options: [
      "Difficulty level",
      "Cost estimate",
      "Practicality or viability",
      "Timeline"
    ],
    correct: 2,
    explanation: "Feasibility is the state of being feasible, practical, or viable"
  },
  {
    id: 319,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The project team needs to ______ the new safety regulations.",
    options: ["comply with", "ignore", "circumvent", "avoid"],
    correct: 0,
    explanation: "Comply with means to act in accordance with regulations"
  },
  {
    id: 320,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence uses correct grammar?",
    options: [
      "The equipment was bought by the company.",
      "The equipment were bought by the company.",
      "The equipment are bought by the company.",
      "The equipment has been bought by the company."
    ],
    correct: 0,
    explanation: "'Equipment' is singular mass noun → 'was bought'"
  },
  {
    id: 321,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "optimization" in engineering means:',
    options: [
      "Making something less effective",
      "Making something as effective as possible",
      "Ignoring efficiency",
      "Simplifying operations"
    ],
    correct: 1,
    explanation: "Optimization is the process of making something as effective as possible"
  },
  {
    id: 322,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "Regular training sessions are ______ for all employees.",
    options: ["mandatory", "optional", "recommended", "not required"],
    correct: 0,
    explanation: "Mandatory means required or compulsory"
  },
  {
    id: 323,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Natural gas is increasingly becoming the fuel of choice for power generation due to its lower carbon emissions and abundant supply. Compared to coal, natural gas emits approximately 50% less CO2. This has led to a shift from coal-fired power plants to gas-fired plants in many countries."\n\nWhy is natural gas becoming the fuel of choice for power generation?',
    options: [
      "It is cheaper than coal.",
      "It has lower carbon emissions and is abundant.",
      "It produces no emissions.",
      "It is easier to transport."
    ],
    correct: 1,
    explanation: "The text cites 'lower carbon emissions and abundant supply' as reasons"
  },
  {
    id: 324,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Natural gas emits 50% less CO2 than coal."',
    options: ["True", "False", "Cannot Say"],
    correct: 0,
    explanation: "The text states 'natural gas emits approximately 50% less CO2' than coal"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 325,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What shape comes next: Equilateral Triangle, Square, Regular Pentagon, ?",
    options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
    correct: 0,
    explanation: "Sides: 3, 4, 5, 6 → Hexagon"
  },
  {
    id: 326,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape pointing South rotates 90° counter-clockwise. Where does it point?",
    options: ["North", "East", "South", "West"],
    correct: 1,
    explanation: "South → 90° CCW = East"
  },
  {
    id: 327,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: 1, 3, 6, 10, 15, ?",
    options: ["18", "20", "21", "24"],
    correct: 2,
    explanation: "Triangular numbers: +2, +3, +4, +5, +6 → 15+6=21"
  },
  {
    id: 328,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete the pattern: 2, 5, 10, 17, 26, ?",
    options: ["33", "35", "37", "39"],
    correct: 2,
    explanation: "Differences: +3, +5, +7, +9, +11 → 26+11=37"
  },
  {
    id: 329,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 1, 8, 27, 64, 125, 216, 343, 400",
    options: ["343", "216", "400", "125"],
    correct: 2,
    explanation: "All except 400 are perfect cubes"
  },
  {
    id: 330,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [v] rotates 180°, what does it become?",
    options: ["[^]", "[v]", "[<]", "[>]"],
    correct: 0,
    explanation: "180° rotation of v points upward [^]"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 331,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 2, 3, 5, 8, 13, ?",
    options: ["18", "21", "24", "27"],
    correct: 1,
    explanation: "Fibonacci: 2+3=5, 3+5=8, 5+8=13, 8+13=21"
  },
  {
    id: 332,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All engineers must attend safety briefing. Sarah is not attending. What can you conclude?",
    options: [
      "Sarah is not an engineer.",
      "Sarah is late.",
      "Sarah is violating the requirement.",
      "Sarah is on leave."
    ],
    correct: 2,
    explanation: "If all engineers must attend and Sarah is not attending, she's violating the requirement"
  },
  {
    id: 333,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A temperature gauge shows the same reading over time, but the process is known to be fluctuating. This suggests:",
    options: [
      "The process is stable.",
      "The gauge might be stuck or faulty.",
      "The reading is accurate.",
      "The system is off."
    ],
    correct: 1,
    explanation: "If the process fluctuates but the gauge doesn't, the gauge likely has a problem"
  },
  {
    id: 334,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 14, 28, 42, 56, 70, 84, 98, 105",
    options: ["105", "98", "84", "56"],
    correct: 0,
    explanation: "All except 105 are multiples of 14"
  },
  {
    id: 335,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some equipment is heavy. All heavy equipment needs special handling. Which is true?",
    options: [
      "All equipment needs special handling.",
      "Some equipment needs special handling.",
      "No equipment needs special handling.",
      "All special handling is for equipment."
    ],
    correct: 1,
    explanation: "If some equipment is heavy and all heavy needs special handling, then some equipment needs special handling"
  },
  {
    id: 336,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A pump's flow rate decreases when the discharge valve is opened further. This indicates:",
    options: [
      "The pump is working correctly.",
      "The pump is cavitating.",
      "The system curve has changed.",
      "The pressure is increasing."
    ],
    correct: 2,
    explanation: "Opening the valve changes the system resistance, affecting the flow rate"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 337,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A circuit has 240V and 4Ω resistance. What is the current?",
    options: ["40A", "50A", "60A", "70A"],
    correct: 2,
    explanation: "I = V/R = 240/4 = 60A"
  },
  {
    id: 338,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Star-connected system, the line voltage is 380V. What is the phase voltage?",
    options: ["220V", "230V", "240V", "380V"],
    correct: 0,
    explanation: "In Star, V_Phase = V_Line/√3 = 380/1.732 = 220V"
  },
  {
    id: 339,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A circuit draws 5A at 230V with PF=0.9. What is the true power?",
    options: ["920W", "1035W", "1150W", "1200W"],
    correct: 1,
    explanation: "P = V × I × PF = 230 × 5 × 0.9 = 1,035W"
  },
  {
    id: 340,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A transformer steps up 220V to 11,000V. What is the turns ratio?",
    options: ["1:20", "1:30", "1:40", "1:50"],
    correct: 3,
    explanation: "Turns ratio = 11,000/220 = 50:1 → 1:50"
  },
  {
    id: 341,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 8-pole motor operates at 50Hz. What is the synchronous speed?",
    options: ["600 RPM", "750 RPM", "1000 RPM", "1200 RPM"],
    correct: 1,
    explanation: "Ns = 120f/P = 120×50/8 = 750 RPM"
  },
  {
    id: 342,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the purpose of a surge protector?",
    options: [
      "To reduce voltage",
      "To protect against voltage spikes",
      "To measure current",
      "To increase power"
    ],
    correct: 1,
    explanation: "Surge protectors protect equipment from voltage spikes and transients"
  },
  {
    id: 343,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the maximum safe voltage for a wet location workplace?",
    options: ["12V", "24V", "50V", "120V"],
    correct: 0,
    explanation: "In wet locations, safety voltages are typically 12V or less"
  },
  {
    id: 344,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "The density of water is approximately:",
    options: ["1 kg/m³", "100 kg/m³", "1,000 kg/m³", "10,000 kg/m³"],
    correct: 2,
    explanation: "Water density is approximately 1,000 kg/m³ at room temperature"
  },
  {
    id: 345,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "What is gauge pressure if absolute pressure is 500 kPa and atmospheric is 101 kPa?",
    options: ["301 kPa", "399 kPa", "500 kPa", "601 kPa"],
    correct: 1,
    explanation: "Gauge = Absolute - Atmospheric = 500 - 101 = 399 kPa"
  },
  {
    id: 346,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What is NPSH in pump terminology?",
    options: [
      "Net Positive Suction Head",
      "Normal Pump Speed Head",
      "Negative Pressure Suction Head",
      "National Pump Standard Head"
    ],
    correct: 0,
    explanation: "NPSH stands for Net Positive Suction Head"
  },
  {
    id: 347,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What type of compressor uses a rotating impeller to increase gas velocity?",
    options: [
      "Reciprocating compressor",
      "Centrifugal compressor",
      "Screw compressor",
      "Rotary vane compressor"
    ],
    correct: 1,
    explanation: "Centrifugal compressors use an impeller to increase gas velocity and pressure"
  },
  {
    id: 348,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "What is the primary difference between a heat exchanger and a boiler?",
    options: [
      "No difference",
      "Heat exchanger transfers heat; boiler generates heat",
      "Boiler transfers heat; heat exchanger generates heat",
      "Both generate heat"
    ],
    correct: 1,
    explanation: "Heat exchangers transfer existing heat; boilers generate heat through combustion"
  },
  {
    id: 349,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of a drill pipe in drilling operations?",
    options: [
      "To separate oil and gas",
      "To transmit torque and drilling fluid",
      "To store oil",
      "To transport refined products"
    ],
    correct: 1,
    explanation: "Drill pipe transmits torque to the bit and carries drilling fluid"
  },
  {
    id: 350,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "What is artificial lift used for?",
    options: [
      "To increase reservoir pressure",
      "To lift fluids when natural pressure is insufficient",
      "To refine crude oil",
      "To transport gas"
    ],
    correct: 1,
    explanation: "Artificial lift is used when reservoir pressure is insufficient for natural flow"
  },
  {
    id: 351,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the function of a Christmas tree on a wellhead?",
    options: [
      "To decorate the well site",
      "To control the flow of fluids",
      "To measure temperature",
      "To store oil"
    ],
    correct: 1,
    explanation: "The Christmas tree is a set of valves and fittings to control well flow"
  },
  {
    id: 352,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the purpose of a coalescing filter in a separator?",
    options: [
      "To remove water from gas",
      "To increase pressure",
      "To measure flow",
      "To control temperature"
    ],
    correct: 0,
    explanation: "Coalescing filters remove water droplets from gas streams"
  },
  {
    id: 353,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is the purpose of a pipeline valve station?",
    options: [
      "To store oil",
      "To control flow and pressure",
      "To heat the pipeline",
      "To measure density"
    ],
    correct: 1,
    explanation: "Valve stations control flow and pressure in pipeline systems"
  },
  {
    id: 354,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A temperature transmitter typically outputs what standard signal?",
    options: [
      "4-20mA or 0-10V",
      "110-220V AC",
      "RS-485",
      "1-5 psi"
    ],
    correct: 0,
    explanation: "Standard industrial signals are 4-20mA or 0-10V"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 355,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "A supervisor asks you to take a shortcut that bypasses a safety check. What should you do?",
    options: [
      "Follow the supervisor's instructions.",
      "Refuse and explain the safety concerns.",
      "Take the shortcut but check later.",
      "Ignore the request."
    ],
    correct: 1,
    explanation: "Safety checks should never be bypassed, regardless of who requests it"
  },
  {
    id: 356,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "A team member consistently arrives late and it affects the team's work. What is the best approach?",
    options: [
      "Start work without them.",
      "Privately discuss the impact of their lateness.",
      "Report them immediately.",
      "Ignore the issue."
    ],
    correct: 1,
    explanation: "Private, professional discussion is the best first step to address performance issues"
  },
  {
    id: 357,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "You receive an email containing sensitive data meant for someone else. What do you do?",
    options: [
      "Read the email.",
      "Delete it.",
      "Forward it to the intended recipient and inform IT.",
      "Share it with colleagues."
    ],
    correct: 2,
    explanation: "Security procedures should be followed: forward to correct recipient and report"
  },
  {
    id: 358,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You discover a discrepancy in inventory records. What should you do?",
    options: [
      "Ignore it as it might be a small error.",
      "Investigate and report the discrepancy.",
      "Cover it up.",
      "Blame someone else."
    ],
    correct: 1,
    explanation: "Inventory discrepancies should be investigated and reported"
  },
  {
    id: 359,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You see smoke coming from a vent that is not supposed to emit smoke. What do you do?",
    options: [
      "Ignore it as it might be normal.",
      "Investigate and report it immediately.",
      "Wait to see if it continues.",
      "Take a photo and continue working."
    ],
    correct: 1,
    explanation: "Any unusual emissions must be investigated and reported immediately"
  },
  {
    id: 360,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A supplier offers to pay for your training in exchange for favorable consideration. What do you do?",
    options: [
      "Accept the offer.",
      "Decline and report the offer.",
      "Accept it as a training opportunity.",
      "Consider the offer quietly."
    ],
    correct: 1,
    explanation: "Any offer that could influence business decisions must be declined and reported"
  }
];

const set5 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 401,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A drilling operation uses 2,800 liters of diesel fuel weekly. If fuel consumption decreases by 12%, how many liters are saved per week?",
    options: ["286 liters", "336 liters", "386 liters", "436 liters"],
    correct: 1,
    explanation: "12% of 2,800 = 0.12 × 2,800 = 336 liters"
  },
  {
    id: 402,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A maintenance contractor buys spare parts for ₦150,000 and sells them for ₦180,000. What is the percentage profit?",
    options: ["15%", "18%", "20%", "22%"],
    correct: 2,
    explanation: "Profit = ₦180,000 - ₦150,000 = ₦30,000. Percentage = (30,000/150,000) × 100 = 20%"
  },
  {
    id: 403,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A drilling fluid mixture has a water-to-oil ratio of 5:3. If there are 75 liters of water, how much oil is present?",
    options: ["35 liters", "40 liters", "45 liters", "50 liters"],
    correct: 2,
    explanation: "5:3 = 75:x → 5x = 225 → x = 45 liters"
  },
  {
    id: 404,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A forklift moves at 8 km/h in a warehouse. How many meters does it cover in 90 seconds?",
    options: ["150 meters", "175 meters", "200 meters", "225 meters"],
    correct: 2,
    explanation: "8 km/h = 8,000/3,600 = 2.222 m/s. Distance = 2.222 × 90 = 200 meters"
  },
  {
    id: 405,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A batch of 50 electrical components contains 5 defective units. If two units are selected at random, what is the probability that both are non-defective?",
    options: ["81%", "83%", "85%", "87%"],
    correct: 0,
    explanation: "P(first) = 45/50 = 0.9. P(second) = 44/49 = 0.898. Combined = 0.9 × 0.898 = 0.808 ≈ 81%"
  },
  {
    id: 406,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A pie chart shows energy sources: Oil 45%, Gas 25%, Coal 20%, Renewables 10%. If total energy production is 20,000 MW, what is the gas production?",
    options: ["4,000 MW", "5,000 MW", "6,000 MW", "7,000 MW"],
    correct: 1,
    explanation: "25% of 20,000 = 5,000 MW"
  },
  {
    id: 407,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows monthly production: Q1=1,200 bbl, Q2=1,400 bbl, Q3=1,600 bbl, Q4=1,800 bbl. What is the total annual production?",
    options: ["5,600 bbl", "5,800 bbl", "6,000 bbl", "6,200 bbl"],
    correct: 2,
    explanation: "Total = 1,200 + 1,400 + 1,600 + 1,800 = 6,000 bbl"
  },
  {
    id: 408,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the missing number: 6, 12, 18, 24, 30, ?",
    options: ["32", "34", "36", "38"],
    correct: 2,
    explanation: "Multiples of 6: 6, 12, 18, 24, 30, 36"
  },
  {
    id: 409,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A refinery's efficiency increases from 85% to 92%. What is the percentage point increase?",
    options: ["6%", "7%", "8%", "9%"],
    correct: 1,
    explanation: "92% - 85% = 7 percentage points"
  },
  {
    id: 410,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of drilling depth to casing length is 4:1. If the casing is 250 meters, what is the drilling depth?",
    options: ["750 m", "800 m", "950 m", "1,000 m"],
    correct: 3,
    explanation: "4:1 = x:250 → x = 4 × 250 = 1,000 m"
  },
  {
    id: 411,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A pump moves 150 liters per minute. How many liters will it move in 2.5 hours?",
    options: ["18,500 L", "20,500 L", "22,500 L", "24,500 L"],
    correct: 2,
    explanation: "2.5 hours = 150 minutes. Volume = 150 × 150 = 22,500 L"
  },
  {
    id: 412,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A die is rolled twice. What is the probability of rolling a sum of 7?",
    options: ["1/6", "1/9", "1/12", "1/18"],
    correct: 0,
    explanation: "There are 6 ways to get sum of 7 out of 36 possibilities. 6/36 = 1/6"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 413,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Decommissioning of offshore oil platforms involves the safe removal of structures and restoration of the marine environment. The process includes plugging wells, removing topside facilities, and cutting piles. Environmental impact assessments are required before any decommissioning activities begin."\n\nWhat is the first step mentioned in the decommissioning process?',
    options: [
      "Removing topside facilities",
      "Cutting piles",
      "Plugging wells",
      "Environmental impact assessment"
    ],
    correct: 3,
    explanation: "The text states that 'Environmental impact assessments are required before any decommissioning activities begin'"
  },
  {
    id: 414,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "All offshore platforms are decommissioned in the same way."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text describes a general process but doesn't specify if all platforms are decommissioned the same way"
  },
  {
    id: 415,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what is the goal of platform decommissioning?',
    options: [
      "To increase oil production",
      "To remove structures and restore the environment",
      "To build new platforms",
      "To store equipment"
    ],
    correct: 1,
    explanation: "The text states decommissioning involves 'safe removal of structures and restoration of the marine environment'"
  },
  {
    id: 416,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Decommissioning is only done when oil production stops."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text doesn't specify when decommissioning occurs"
  },
  {
    id: 417,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correctly formed sentence:",
    options: [
      "The report were submitted yesterday.",
      "The report was submitted yesterday.",
      "The report have been submitted yesterday.",
      "The report are submitted yesterday."
    ],
    correct: 1,
    explanation: "'Report' is singular → 'was submitted' is correct"
  },
  {
    id: 418,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "incident" in a workplace context most nearly means:',
    options: [
      "A celebration",
      "An unexpected event or accident",
      "A regular occurrence",
      "A planned activity"
    ],
    correct: 1,
    explanation: "In workplace safety, an incident refers to an unplanned or unexpected event"
  },
  {
    id: 419,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The engineer will ______ the equipment before starting the test.",
    options: ["inspect", "ignore", "remove", "paint"],
    correct: 0,
    explanation: "Inspect means to examine carefully before use"
  },
  {
    id: 420,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence is grammatically correct?",
    options: [
      "The company's profits has increased.",
      "The company's profits have increased.",
      "The company's profits is increasing.",
      "The company's profits are increased."
    ],
    correct: 1,
    explanation: "'Profits' is plural → 'have increased' is correct"
  },
  {
    id: 421,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'A "schematic diagram" is best described as:',
    options: [
      "A photograph of equipment",
      "A simplified drawing showing relationships",
      "A financial chart",
      "A written description"
    ],
    correct: 1,
    explanation: "A schematic is a simplified diagram showing relationships or connections"
  },
  {
    id: 422,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The training program was designed to ______ employees for emergency situations.",
    options: ["prepare", "confuse", "exclude", "frighten"],
    correct: 0,
    explanation: "Prepare means to make ready for a situation"
  },
  {
    id: 423,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "HSE stands for Health, Safety, and Environment. It is a critical aspect of the oil and gas industry, focusing on protecting workers, the public, and the environment. Key HSE principles include hazard identification, risk assessment, and continuous improvement."\n\nWhat does HSE stand for?',
    options: [
      "Health, Safety, and Education",
      "Health, Safety, and Environment",
      "Human Safety and Engineering",
      "High Safety Equipment"
    ],
    correct: 1,
    explanation: "The text clearly states: 'HSE stands for Health, Safety, and Environment'"
  },
  {
    id: 424,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "HSE principles are only for oil and gas companies."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "While the text discusses HSE in oil and gas, it doesn't state it's exclusive to that industry"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 425,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What comes next: Triangle, Rectangle, Pentagon, Hexagon, ?",
    options: ["Septagon", "Octagon", "Nonagon", "Decagon"],
    correct: 0,
    explanation: "Sides: 3, 4, 5, 6, 7 → Septagon"
  },
  {
    id: 426,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape pointing North rotates 270° clockwise. Where does it point?",
    options: ["North", "East", "South", "West"],
    correct: 1,
    explanation: "North → 270° CW = East"
  },
  {
    id: 427,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: 1, 4, 9, 16, 25, 36, ?",
    options: ["42", "44", "49", "56"],
    correct: 2,
    explanation: "Square numbers: 1², 2², 3², 4², 5², 6², 7² = 49"
  },
  {
    id: 428,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete: 3, 8, 15, 24, 35, ?",
    options: ["44", "46", "48", "50"],
    correct: 2,
    explanation: "Differences: +5, +7, +9, +11, +13 → 35+13=48"
  },
  {
    id: 429,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 12, 24, 36, 48, 60, 72, 84, 95",
    options: ["72", "84", "95", "60"],
    correct: 2,
    explanation: "All except 95 are multiples of 12"
  },
  {
    id: 430,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [^] rotates 90° clockwise, what does it become?",
    options: ["[^]", "[v]", "[<]", "[>]"],
    correct: 3,
    explanation: "90° CW rotation of ^ points right [>]"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 431,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 2, 6, 18, 54, ?",
    options: ["108", "162", "216", "270"],
    correct: 1,
    explanation: "Each number ×3: 54 × 3 = 162"
  },
  {
    id: 432,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All operators must pass a competency test. David passed the test. What can you conclude?",
    options: [
      "David is an operator.",
      "David is not an operator.",
      "David might be an operator.",
      "David is a manager."
    ],
    correct: 2,
    explanation: "While all operators must pass, passing doesn't automatically mean David is an operator"
  },
  {
    id: 433,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A machine stops working only when the temperature exceeds 80°C. The temperature is currently 85°C. This means:",
    options: [
      "The machine might stop working.",
      "The machine will definitely stop.",
      "The machine will continue working.",
      "The temperature is too low."
    ],
    correct: 1,
    explanation: "Since the machine stops when temperature exceeds 80°C and current temperature is 85°C, it will stop"
  },
  {
    id: 434,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 1, 4, 9, 16, 25, 36, 49, 64, 80",
    options: ["64", "49", "80", "36"],
    correct: 2,
    explanation: "All except 80 are perfect squares"
  },
  {
    id: 435,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some workers are contractors. All contractors are trained. Which is true?",
    options: [
      "All workers are trained.",
      "Some workers are trained.",
      "No workers are trained.",
      "All contractors are workers."
    ],
    correct: 1,
    explanation: "If some workers are contractors and all contractors are trained, then some workers are trained"
  },
  {
    id: 436,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A valve leaks only when the system pressure exceeds 200 psi. The pressure gauge reads 210 psi. This suggests:",
    options: [
      "The valve will not leak.",
      "The valve might leak.",
      "The valve will definitely leak.",
      "The gauge is faulty."
    ],
    correct: 2,
    explanation: "Since pressure exceeds 200 psi and the valve leaks at that condition, it will leak"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 437,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 480V motor draws 15A. What is the resistance?",
    options: ["28Ω", "30Ω", "32Ω", "34Ω"],
    correct: 2,
    explanation: "R = V/I = 480/15 = 32Ω"
  },
  {
    id: 438,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Star-connected system, if the phase current is 10A, what is the line current?",
    options: ["5.77A", "10A", "17.32A", "20A"],
    correct: 1,
    explanation: "In Star connection, I_Line = I_Phase = 10A"
  },
  {
    id: 439,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A 3-phase motor draws 12A at 415V with PF=0.85. What is the true power in kW?",
    options: ["5.8 kW", "6.5 kW", "7.3 kW", "8.0 kW"],
    correct: 2,
    explanation: "P = √3 × V × I × PF = 1.732 × 415 × 12 × 0.85 = 7,330W = 7.33 kW"
  },
  {
    id: 440,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A 500kVA transformer has a primary voltage of 11kV and secondary voltage of 415V. What is the turns ratio?",
    options: ["26.5:1", "28.5:1", "30.5:1", "32.5:1"],
    correct: 0,
    explanation: "Turns ratio = 11,000/415 = 26.5:1"
  },
  {
    id: 441,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 4-pole motor at 60Hz has what synchronous speed?",
    options: ["1,500 RPM", "1,600 RPM", "1,700 RPM", "1,800 RPM"],
    correct: 3,
    explanation: "Ns = 120f/P = 120×60/4 = 1,800 RPM"
  },
  {
    id: 442,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the purpose of a thermal overload relay?",
    options: [
      "To increase voltage",
      "To protect against overload by tripping on excess heat",
      "To measure current",
      "To switch circuits on/off regularly"
    ],
    correct: 1,
    explanation: "Thermal overload relays trip when excessive current generates heat beyond safe levels"
  },
  {
    id: 443,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the recommended interval for inspecting electrical PPE in oil and gas facilities?",
    options: [
      "Monthly",
      "Before each use",
      "Annually",
      "Every 5 years"
    ],
    correct: 1,
    explanation: "Electrical PPE should be inspected before each use"
  },
  {
    id: 444,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "What is the specific gravity of a fluid with density 800 kg/m³ (water = 1,000 kg/m³)?",
    options: ["0.6", "0.8", "1.0", "1.2"],
    correct: 1,
    explanation: "SG = Density_fluid / Density_water = 800/1000 = 0.8"
  },
  {
    id: 445,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "What is the pressure at 10 meters depth in water? (g = 9.81 m/s²)",
    options: ["88.3 kPa", "98.1 kPa", "108.1 kPa", "118.3 kPa"],
    correct: 1,
    explanation: "P = ρgh = 1000 × 9.81 × 10 = 98,100 Pa = 98.1 kPa"
  },
  {
    id: 446,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What happens to a centrifugal pump's flow rate if the discharge valve is fully closed?",
    options: [
      "Flow rate increases",
      "Flow rate becomes zero",
      "Flow rate doubles",
      "Flow rate stays the same"
    ],
    correct: 1,
    explanation: "Closing the discharge valve reduces flow to zero"
  },
  {
    id: 447,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the purpose of intercooling in multi-stage compressors?",
    options: [
      "To increase temperature",
      "To reduce power consumption",
      "To increase pressure",
      "To add moisture"
    ],
    correct: 1,
    explanation: "Intercooling reduces the work required and power consumption"
  },
  {
    id: 448,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "Which material has the highest thermal conductivity?",
    options: ["Copper", "Steel", "Aluminum", "Brass"],
    correct: 0,
    explanation: "Copper has the highest thermal conductivity among these materials"
  },
  {
    id: 449,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of a mud pump in drilling operations?",
    options: [
      "To pump drinking water",
      "To circulate drilling fluid",
      "To pump crude oil",
      "To remove gas"
    ],
    correct: 1,
    explanation: "Mud pumps circulate drilling fluid (mud) during drilling operations"
  },
  {
    id: 450,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "What is a flow station in oil production?",
    options: [
      "A place to store equipment",
      "A facility that processes well fluids",
      "A drilling site",
      "A refinery"
    ],
    correct: 1,
    explanation: "Flow stations process well fluids by separating oil, gas, and water"
  },
  {
    id: 451,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the purpose of a master valve on a wellhead?",
    options: [
      "To control drilling speed",
      "To shut in the well completely",
      "To measure pressure",
      "To add chemicals"
    ],
    correct: 1,
    explanation: "The master valve is the primary valve to shut in the well"
  },
  {
    id: 452,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the function of a demister in a separator?",
    options: [
      "To add chemicals",
      "To remove liquid mist from gas",
      "To increase pressure",
      "To heat the fluid"
    ],
    correct: 1,
    explanation: "Demisters remove liquid mist droplets from gas streams"
  },
  {
    id: 453,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is the purpose of buoyancy control in offshore pipelines?",
    options: [
      "To reduce pressure",
      "To prevent the pipeline from floating",
      "To increase flow",
      "To add weight"
    ],
    correct: 1,
    explanation: "Buoyancy control prevents offshore pipelines from floating"
  },
  {
    id: 454,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A flow transmitter uses the principle of:",
    options: [
      "Pressure measurement",
      "Measuring volume changes",
      "Magnetic fields",
      "Weight measurement"
    ],
    correct: 0,
    explanation: "Many flow transmitters measure flow based on pressure drop across an obstruction"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 455,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "Production is behind schedule and you're asked to operate a machine without the required guard. What should you do?",
    options: [
      "Operate the machine carefully without the guard.",
      "Refuse to operate the machine without the guard.",
      "Operate it but stay extra alert.",
      "Ask someone else to operate it."
    ],
    correct: 1,
    explanation: "Machine guards are critical safety devices that must never be bypassed"
  },
  {
    id: 456,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "A colleague is struggling with a task and is too proud to ask for help. What is the best approach?",
    options: [
      "Let them struggle.",
      "Offer help in a supportive and private manner.",
      "Tell others about their struggles.",
      "Ignore the situation."
    ],
    correct: 1,
    explanation: "Offering help supportively and privately maintains dignity and promotes teamwork"
  },
  {
    id: 457,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "A colleague asks for your password to access a system while you're away. What do you do?",
    options: [
      "Share your password with them.",
      "Politely refuse and explain security policy.",
      "Write it down for them.",
      "Tell them to find another way."
    ],
    correct: 1,
    explanation: "Passwords are personal and should never be shared, per security policies"
  },
  {
    id: 458,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You notice a safety procedure that is outdated and potentially unsafe. What do you do?",
    options: [
      "Ignore it as it's the current procedure.",
      "Report the issue to the safety department.",
      "Update it yourself.",
      "Continue using the outdated procedure."
    ],
    correct: 1,
    explanation: "Outdated safety procedures should be reported to the safety department for review"
  },
  {
    id: 459,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You see a colleague disposing of used oil in a regular trash bin. What should you do?",
    options: [
      "Ignore it as it's just a small amount.",
      "Remind them of proper disposal procedures.",
      "Wait to see if they do it again.",
      "Take the oil and dispose of it yourself."
    ],
    correct: 1,
    explanation: "Used oil requires special disposal; remind colleagues of proper procedures"
  },
  {
    id: 460,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A client offers you an expensive meal in exchange for a favorable inspection report. What do you do?",
    options: [
      "Accept the meal as a business courtesy.",
      "Politely decline and explain ethical guidelines.",
      "Accept it but ignore the request.",
      "Accept it and give the report."
    ],
    correct: 1,
    explanation: "Accepting gifts in exchange for favorable reports is unethical; always decline"
  }
];

// ============================================
// SET 6 - Additional Unique Questions
// ============================================
const set6 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 501,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A pipeline transfers 5,000 barrels of oil daily. If 8% is lost due to leaks, how many barrels are delivered?",
    options: ["4,200 bbl", "4,400 bbl", "4,600 bbl", "4,800 bbl"],
    correct: 2,
    explanation: "Loss = 8% of 5,000 = 400. Delivered = 5,000 - 400 = 4,600 bbl"
  },
  {
    id: 502,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "An equipment dealer buys a crane for ₦8,000,000 and sells it for ₦9,200,000. What is the percentage profit?",
    options: ["12%", "15%", "18%", "20%"],
    correct: 1,
    explanation: "Profit = ₦9,200,000 - ₦8,000,000 = ₦1,200,000. Percentage = (1,200,000/8,000,000) × 100 = 15%"
  },
  {
    id: 503,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A concrete mixture has cement, sand, and gravel in ratio 1:2:4. If 7 tons of cement is used, how much sand is needed?",
    options: ["10 tons", "12 tons", "14 tons", "16 tons"],
    correct: 2,
    explanation: "1:2 = 7:x → x = 14 tons"
  },
  {
    id: 504,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A boat travels at 15 knots for 6 hours. How many kilometers does it cover? (1 knot = 1.852 km/h)",
    options: ["156.7 km", "166.7 km", "176.7 km", "186.7 km"],
    correct: 1,
    explanation: "Speed = 15 × 1.852 = 27.78 km/h. Distance = 27.78 × 6 = 166.68 km"
  },
  {
    id: 505,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A warehouse has 80 items with 12 defective. If one item is selected, what is the probability it is defective?",
    options: ["10%", "12%", "15%", "20%"],
    correct: 2,
    explanation: "12/80 = 0.15 = 15%"
  },
  {
    id: 506,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A bar chart shows quarterly profits: Q1=₦2M, Q2=₦2.5M, Q3=₦3M, Q4=₦3.5M. What is the average quarterly profit?",
    options: ["₦2.5M", "₦2.75M", "₦3.0M", "₦3.25M"],
    correct: 1,
    explanation: "Total = 2 + 2.5 + 3 + 3.5 = 11. Average = 11/4 = ₦2.75M"
  },
  {
    id: 507,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows production costs: Materials=₦50,000, Labor=₦30,000, Overhead=₦20,000. What is the total cost?",
    options: ["₦80,000", "₦90,000", "₦100,000", "₦110,000"],
    correct: 2,
    explanation: "Total = 50,000 + 30,000 + 20,000 = ₦100,000"
  },
  {
    id: 508,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the next number: 100, 90, 81, 72.9, ?",
    options: ["64.61", "65.61", "66.61", "67.61"],
    correct: 1,
    explanation: "Each term × 0.9: 72.9 × 0.9 = 65.61"
  },
  {
    id: 509,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A storage tank capacity is 25,000 liters. If it's 64% full, how many liters are in the tank?",
    options: ["14,000 L", "15,000 L", "16,000 L", "17,000 L"],
    correct: 2,
    explanation: "64% of 25,000 = 0.64 × 25,000 = 16,000 L"
  },
  {
    id: 510,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of maintenance costs for three machines is 2:3:5. If machine 2 costs ₦45,000, what is the total maintenance cost?",
    options: ["₦120,000", "₦140,000", "₦150,000", "₦160,000"],
    correct: 2,
    explanation: "3 parts = 45,000 → 1 part = 15,000. Total = 10 × 15,000 = ₦150,000"
  },
  {
    id: 511,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A conveyor belt moves at 1.5 m/s. How many meters does it move in 45 minutes?",
    options: ["3,850 m", "4,050 m", "4,250 m", "4,450 m"],
    correct: 1,
    explanation: "45 minutes = 2,700 seconds. Distance = 1.5 × 2,700 = 4,050 m"
  },
  {
    id: 512,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A card is drawn from a standard deck. What is the probability of drawing a heart or a diamond?",
    options: ["1/4", "1/2", "3/4", "1/3"],
    correct: 1,
    explanation: "Hearts (13) + Diamonds (13) = 26. Probability = 26/52 = 1/2"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 513,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "The Petroleum Industry Act (PIA) 2021 introduced significant reforms to Nigeria\'s oil and gas sector. The act created new regulatory bodies, including the NUPRC for upstream and NMDPRA for downstream operations. It also established the Host Community Development Trust to benefit oil-producing communities."\n\nWhat did the PIA 2021 establish for host communities?',
    options: [
      "New oil wells",
      "Host Community Development Trust",
      "Additional taxes",
      "Pipeline networks"
    ],
    correct: 1,
    explanation: "The text states: 'It also established the Host Community Development Trust'"
  },
  {
    id: 514,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "The PIA 2021 created the NMDPRA for upstream operations."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text says NMDPRA is for downstream, NUPRC is for upstream"
  },
  {
    id: 515,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what is the purpose of the NUPRC?',
    options: [
      "Downstream regulation",
      "Upstream regulation",
      "Host community development",
      "Tax collection"
    ],
    correct: 1,
    explanation: "The text states NUPRC is for upstream operations"
  },
  {
    id: 516,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "The PIA 2021 was introduced in 2020."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text clearly states 'Petroleum Industry Act (PIA) 2021'"
  },
  {
    id: 517,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct verb form: Each of the workers ______ responsible for safety.",
    options: ["are", "is", "were", "have"],
    correct: 1,
    explanation: "With 'each of', the verb is singular: 'is'"
  },
  {
    id: 518,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "audit" in a business context most nearly means:',
    options: [
      "A celebration",
      "A systematic review",
      "A new project",
      "A company merger"
    ],
    correct: 1,
    explanation: "Audit is a systematic examination or review of records"
  },
  {
    id: 519,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The chemical spill required immediate ______ to prevent environmental damage.",
    options: ["containment", "celebration", "investigation", "documentation"],
    correct: 0,
    explanation: "Containment is the appropriate action to prevent spread of a spill"
  },
  {
    id: 520,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence is grammatically correct?",
    options: [
      "The engineer and the technician is here.",
      "The engineer and the technician are here.",
      "The engineer and the technician was here.",
      "The engineer and the technician has been here."
    ],
    correct: 1,
    explanation: "Compound subject (two people) requires plural verb 'are'"
  },
  {
    id: 521,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "yield" in a production context refers to:',
    options: [
      "The price of product",
      "The quantity produced",
      "The quality of product",
      "The time taken"
    ],
    correct: 1,
    explanation: "Yield refers to the amount or quantity produced"
  },
  {
    id: 522,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The supervisor issued a ______ for all personnel to attend the safety meeting.",
    options: ["directive", "suggestion", "question", "complaint"],
    correct: 0,
    explanation: "Directive means an official instruction or order"
  },
  {
    id: 523,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Energy transition refers to the global shift from fossil fuels to renewable energy sources. This transition is driven by climate change concerns, technological advances, and changing consumer preferences. The oil and gas industry is adapting by investing in renewable energy projects while improving existing operations."\n\nWhat is driving the energy transition?',
    options: [
      "Economic recession",
      "Climate change concerns, technology, and consumer preferences",
      "Government policies only",
      "Oil price volatility"
    ],
    correct: 1,
    explanation: "The text mentions 'climate change concerns, technological advances, and changing consumer preferences'"
  },
  {
    id: 524,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "The oil and gas industry is not adapting to the energy transition."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text says the industry 'is adapting by investing in renewable energy projects'"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 525,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What comes next: Circle, Semicircle, Quarter Circle, ?",
    options: ["Eighth Circle", "Triangle", "Square", "Pentagon"],
    correct: 0,
    explanation: "Fractions of a circle: 1, 1/2, 1/4, 1/8"
  },
  {
    id: 526,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape facing West rotates 45° clockwise. Which direction does it face?",
    options: ["Northwest", "Southwest", "Northeast", "Southeast"],
    correct: 0,
    explanation: "West → 45° CW = Northwest"
  },
  {
    id: 527,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: Spring, Summer, Autumn, ?",
    options: ["Winter", "Spring", "Summer", "Autumn"],
    correct: 0,
    explanation: "Seasonal cycle: Spring, Summer, Autumn, Winter"
  },
  {
    id: 528,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete: 2, 3, 5, 7, 11, 13, 17, ?",
    options: ["18", "19", "20", "21"],
    correct: 1,
    explanation: "Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19"
  },
  {
    id: 529,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 6, 12, 18, 24, 30, 36, 42, 49",
    options: ["36", "42", "49", "30"],
    correct: 2,
    explanation: "All except 49 are multiples of 6"
  },
  {
    id: 530,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [>] rotates 270° counter-clockwise, what does it become?",
    options: ["[^]", "[v]", "[<]", "[>]"],
    correct: 1,
    explanation: "270° CCW rotation of > points downward [v]"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 531,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 1, 1, 2, 6, 24, ?",
    options: ["100", "110", "120", "130"],
    correct: 2,
    explanation: "Factorials: 0! = 1, 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120"
  },
  {
    id: 532,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "No welders work without protective gear. Tom is a welder. What is true?",
    options: [
      "Tom works without protective gear.",
      "Tom works with protective gear.",
      "Tom is not a welder.",
      "Tom is a supervisor."
    ],
    correct: 1,
    explanation: "If no welders work without protective gear, then all welders work with it"
  },
  {
    id: 533,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "When the flow rate increases, the pressure drops. This is consistent with:",
    options: [
      "Ohm's Law",
      "Bernoulli's Principle",
      "Newton's Law",
      "Boyle's Law"
    ],
    correct: 1,
    explanation: "Bernoulli's principle describes the inverse relationship between velocity and pressure"
  },
  {
    id: 534,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 15, 21, 27, 33, 39, 45, 51, 57, 63, 70",
    options: ["63", "57", "70", "51"],
    correct: 2,
    explanation: "All except 70 are multiples of 3"
  },
  {
    id: 535,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All pipelines are tested for leaks. Some pipes are pipelines. Which is true?",
    options: [
      "All pipes are tested for leaks.",
      "Some pipes are tested for leaks.",
      "No pipes are tested for leaks.",
      "All pipelines are pipes."
    ],
    correct: 1,
    explanation: "If some pipes are pipelines and all pipelines are tested, then some pipes are tested"
  },
  {
    id: 536,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A pump operates at 80% efficiency. This means:",
    options: [
      "80% of input power becomes useful work",
      "80% of power is wasted",
      "The pump is faulty",
      "The pump is oversized"
    ],
    correct: 0,
    explanation: "Efficiency = useful output / input. 80% means 80% becomes useful work"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 537,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 220V circuit has a resistance of 11Ω. What is the current?",
    options: ["10A", "15A", "20A", "25A"],
    correct: 2,
    explanation: "I = V/R = 220/11 = 20A"
  },
  {
    id: 538,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Delta-connected system, if the phase voltage is 400V, what is the line voltage?",
    options: ["230V", "400V", "693V", "800V"],
    correct: 1,
    explanation: "In Delta, V_Line = V_Phase = 400V"
  },
  {
    id: 539,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A 415V motor draws 8A at 0.75 PF. What is the true power in kW?",
    options: ["3.5 kW", "4.3 kW", "5.2 kW", "6.1 kW"],
    correct: 1,
    explanation: "P = √3 × V × I × PF = 1.732 × 415 × 8 × 0.75 = 4,309W = 4.31 kW"
  },
  {
    id: 540,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A 100kVA transformer has 500 turns on primary and 100 turns on secondary. What is the secondary voltage if primary is 11kV?",
    options: ["1.8 kV", "2.0 kV", "2.2 kV", "2.4 kV"],
    correct: 2,
    explanation: "V_secondary = V_primary × (N_secondary/N_primary) = 11,000 × (100/500) = 2,200V = 2.2kV"
  },
  {
    id: 541,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 2-pole motor at 50Hz has what synchronous speed?",
    options: ["1,500 RPM", "2,000 RPM", "2,500 RPM", "3,000 RPM"],
    correct: 3,
    explanation: "Ns = 120f/P = 120×50/2 = 3,000 RPM"
  },
  {
    id: 542,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the primary function of a fuse in an electrical circuit?",
    options: [
      "To measure current",
      "To protect against overcurrent by melting",
      "To increase voltage",
      "To switch circuits"
    ],
    correct: 1,
    explanation: "Fuses protect circuits by melting when current exceeds rated value"
  },
  {
    id: 543,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the correct procedure for lockout/tagout (LOTO) during maintenance?",
    options: [
      "Start working immediately",
      "Lock and tag all energy sources",
      "Only lock electrical sources",
      "Work without locking"
    ],
    correct: 1,
    explanation: "LOTO requires locking and tagging ALL energy sources before maintenance"
  },
  {
    id: 544,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "What is the volume of a cylinder with radius 2m and height 5m? (π = 3.14)",
    options: ["52.8 m³", "58.6 m³", "62.8 m³", "68.6 m³"],
    correct: 2,
    explanation: "V = πr²h = 3.14 × 4 × 5 = 62.8 m³"
  },
  {
    id: 545,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "Convert 12 bar to MPa.",
    options: ["0.12 MPa", "1.0 MPa", "1.2 MPa", "12 MPa"],
    correct: 2,
    explanation: "1 bar = 0.1 MPa, so 12 bar = 1.2 MPa"
  },
  {
    id: 546,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What is the effect of increasing impeller diameter on pump performance?",
    options: [
      "Increases flow and pressure",
      "Decreases flow and pressure",
      "No effect",
      "Only increases pressure"
    ],
    correct: 0,
    explanation: "Larger impeller diameter increases both flow and pressure"
  },
  {
    id: 547,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the difference between a compressor and a pump?",
    options: [
      "No difference",
      "Pumps move liquids, compressors move gases",
      "Compressors move liquids",
      "Pumps increase pressure only"
    ],
    correct: 1,
    explanation: "Pumps handle liquids; compressors handle gases"
  },
  {
    id: 548,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "A heat exchanger with a large surface area will have:",
    options: [
      "Lower heat transfer",
      "Higher heat transfer",
      "No effect on heat transfer",
      "Increased pressure drop only"
    ],
    correct: 1,
    explanation: "Larger surface area increases heat transfer rate"
  },
  {
    id: 549,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of a well logging operation?",
    options: [
      "To drill the well",
      "To measure rock and fluid properties",
      "To pump oil",
      "To refine crude"
    ],
    correct: 1,
    explanation: "Well logging measures geological and fluid properties in the wellbore"
  },
  {
    id: 550,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "What is the purpose of gas lift in oil production?",
    options: [
      "To stop production",
      "To lift oil by injecting gas",
      "To refine crude",
      "To transport oil"
    ],
    correct: 1,
    explanation: "Gas lift injects gas to reduce hydrostatic pressure and lift oil"
  },
  {
    id: 551,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the function of a choke on a wellhead?",
    options: [
      "To increase pressure",
      "To control flow rate",
      "To measure temperature",
      "To add chemicals"
    ],
    correct: 1,
    explanation: "Chokes control and regulate the flow rate from the well"
  },
  {
    id: 552,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the purpose of a vortex breaker in a separator?",
    options: [
      "To create swirl",
      "To prevent vortex formation",
      "To increase pressure",
      "To remove gas"
    ],
    correct: 1,
    explanation: "Vortex breakers prevent swirling that can cause poor separation"
  },
  {
    id: 553,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is the purpose of sacrificial anodes in pipeline protection?",
    options: [
      "To increase flow",
      "To prevent corrosion",
      "To measure pressure",
      "To heat the pipeline"
    ],
    correct: 1,
    explanation: "Sacrificial anodes corrode instead of the pipeline, preventing corrosion"
  },
  {
    id: 554,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A level transmitter typically uses which principle?",
    options: [
      "Pressure measurement",
      "Temperature difference",
      "Flow measurement",
      "Weight measurement"
    ],
    correct: 0,
    explanation: "Level transmitters often measure hydrostatic pressure to determine level"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 555,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "You're asked to work alone in a confined space to save time. What should you do?",
    options: [
      "Work alone to save time.",
      "Insist on having a spotter for confined space entry.",
      "Work quickly to minimize time.",
      "Ask permission after starting."
    ],
    correct: 1,
    explanation: "Confined space entry always requires a spotter and safety protocols"
  },
  {
    id: 556,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "Your team has a conflict over different approaches to a problem. What is the best solution?",
    options: [
      "Avoid discussing the conflict.",
      "Facilitate a meeting to discuss pros and cons of each approach.",
      "Choose one approach arbitrarily.",
      "Let the team split and work separately."
    ],
    correct: 1,
    explanation: "Open discussion of approaches is the best way to resolve conflicts"
  },
  {
    id: 557,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "A competitor calls asking about your company's new technology. What do you do?",
    options: [
      "Share general information.",
      "Politely decline and refer them to the PR department.",
      "Share all technical details.",
      "Hang up immediately."
    ],
    correct: 1,
    explanation: "Competitor inquiries should be referred to appropriate company channels"
  },
  {
    id: 558,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You find that a colleague has been falsifying safety inspection records. What do you do?",
    options: [
      "Ignore it to protect your colleague.",
      "Report it to the appropriate authority.",
      "Confront the colleague privately.",
      "Help them correct the records."
    ],
    correct: 1,
    explanation: "Falsification of safety records is a serious violation that must be reported"
  },
  {
    id: 559,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You notice a drainage pipe discharging murky water into a local stream. What is your first action?",
    options: [
      "Ignore it if it's not your job.",
      "Report it to environmental authorities.",
      "Take a sample for testing.",
      "Block the discharge yourself."
    ],
    correct: 1,
    explanation: "Environmental violations must be reported to the appropriate authorities"
  },
  {
    id: 560,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A government official asks for a gift to expedite your permit application. What do you do?",
    options: [
      "Give the gift to speed up the process.",
      "Politely decline and report the incident.",
      "Promise the gift after approval.",
      "Ignore the request."
    ],
    correct: 1,
    explanation: "Bribery attempts must be declined and reported to proper authorities"
  }
];

// ============================================
// SET 7 - Additional Unique Questions
// ============================================
const set7 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 601,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A maintenance budget of ₦4,000,000 is reduced by 7.5%. What is the new budget amount?",
    options: ["₦3,500,000", "₦3,600,000", "₦3,700,000", "₦3,800,000"],
    correct: 2,
    explanation: "Reduction = 7.5% of 4,000,000 = 300,000. New = 4,000,000 - 300,000 = ₦3,700,000"
  },
  {
    id: 602,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A contractor sells equipment for ₦12,000,000 at a 12% loss. What was the purchase price?",
    options: ["₦13,500,000", "₦13,636,364", "₦13,800,000", "₦14,000,000"],
    correct: 1,
    explanation: "SP = CP × 0.88. CP = 12,000,000/0.88 = ₦13,636,364"
  },
  {
    id: 603,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A drilling mud mixture has water, clay, and chemicals in ratio 6:3:1. If total mixture is 500 liters, how much clay is used?",
    options: ["130 L", "140 L", "150 L", "160 L"],
    correct: 2,
    explanation: "Total parts = 6+3+1 = 10. Clay = 3/10 × 500 = 150 L"
  },
  {
    id: 604,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A pipeline inspection robot travels at 2.5 m/s. How many kilometers does it cover in 8 hours?",
    options: ["62 km", "68 km", "72 km", "78 km"],
    correct: 2,
    explanation: "8 hours = 28,800 seconds. Distance = 2.5 × 28,800 = 72,000m = 72 km"
  },
  {
    id: 605,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A factory produces 2,500 items daily with a 2% defect rate. How many defective items are produced daily?",
    options: ["40", "45", "50", "55"],
    correct: 2,
    explanation: "2% of 2,500 = 0.02 × 2,500 = 50 defective items"
  },
  {
    id: 606,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A line graph shows oil prices over 6 months: $65, $68, $72, $70, $74, $76. What is the median price?",
    options: ["$70", "$71", "$72", "$73"],
    correct: 1,
    explanation: "Sorted: 65, 68, 70, 72, 74, 76. Median = (70+72)/2 = $71"
  },
  {
    id: 607,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows monthly gas production: Jan=2,000 m³, Feb=2,200 m³, Mar=2,400 m³, Apr=2,600 m³. What is the total production for the 4 months?",
    options: ["8,200 m³", "8,600 m³", "9,000 m³", "9,200 m³"],
    correct: 3,
    explanation: "Total = 2,000 + 2,200 + 2,400 + 2,600 = 9,200 m³"
  },
  {
    id: 608,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the next number: 1, 2, 6, 24, 120, ?",
    options: ["600", "620", "640", "720"],
    correct: 3,
    explanation: "Factorials: 1!, 2!, 3!, 4!, 5!, 6! = 720"
  },
  {
    id: 609,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A sales commission is 4.5% on total sales. If an agent sells ₦12,500,000 worth of products, what is the commission?",
    options: ["₦525,000", "₦550,000", "₦562,500", "₦575,000"],
    correct: 2,
    explanation: "4.5% of 12,500,000 = 0.045 × 12,500,000 = ₦562,500"
  },
  {
    id: 610,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of experienced to new workers is 4:1. If there are 80 experienced workers, how many total workers are there?",
    options: ["80", "90", "100", "110"],
    correct: 2,
    explanation: "4:1 = 80:x → 4x = 80 → x = 20 new workers. Total = 80+20 = 100"
  },
  {
    id: 611,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A helicopter travels at 180 km/h for 2.5 hours, then 220 km/h for 1.5 hours. What is the total distance?",
    options: ["650 km", "680 km", "710 km", "780 km"],
    correct: 3,
    explanation: "Distance = (180×2.5) + (220×1.5) = 450 + 330 = 780 km"
  },
  {
    id: 612,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A box contains 10 red, 8 blue, and 7 green marbles. What is the probability of drawing a red or green marble?",
    options: ["11/25", "13/25", "17/25", "19/25"],
    correct: 2,
    explanation: "Total = 10+8+7 = 25. Red+Green = 10+7 = 17. Probability = 17/25"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 613,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Nigerian gas reserves stand at approximately 200 trillion cubic feet (TCF), making it one of the largest in Africa. The government is promoting gas utilization through the Gas Flare Commercialization Programme and the National Gas Expansion Programme. These initiatives aim to reduce gas flaring and increase domestic gas usage."\n\nWhat are the government initiatives mentioned in the text?',
    options: [
      "Oil Drilling Programme and Gas Export Programme",
      "Gas Flare Commercialization Programme and National Gas Expansion Programme",
      "Gas Processing Programme and Pipeline Programme",
      "Gas Storage Programme and Gas Export Programme"
    ],
    correct: 1,
    explanation: "The text mentions 'Gas Flare Commercialization Programme and National Gas Expansion Programme'"
  },
  {
    id: 614,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Nigeria has the largest gas reserves in Africa."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text says it's 'one of the largest', not necessarily the largest"
  },
  {
    id: 615,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what is the purpose of the Gas Flare Commercialization Programme?',
    options: [
      "To increase gas exports",
      "To reduce gas flaring",
      "To build new pipelines",
      "To refine gas"
    ],
    correct: 1,
    explanation: "The text states initiatives aim to 'reduce gas flaring'"
  },
  {
    id: 616,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Nigeria\'s gas reserves are exactly 200 TCF."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text says 'approximately 200 TCF'"
  },
  {
    id: 617,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct form: The number of employees ______ increasing annually.",
    options: ["is", "are", "were", "have"],
    correct: 0,
    explanation: "'The number' is singular and takes singular verb 'is'"
  },
  {
    id: 618,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "compliance" in a regulatory context means:',
    options: [
      "Ignoring regulations",
      "Following regulations",
      "Making regulations",
      "Breaking regulations"
    ],
    correct: 1,
    explanation: "Compliance means conformity with rules and regulations"
  },
  {
    id: 619,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The oil spill response team was ______ to the site within 30 minutes.",
    options: ["deployed", "deferred", "delayed", "declined"],
    correct: 0,
    explanation: "Deployed means sent to a location for a specific purpose"
  },
  {
    id: 620,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence uses correct grammar?",
    options: [
      "Neither the supervisor nor the workers is ready.",
      "Neither the supervisor nor the workers are ready.",
      "Neither the supervisor nor the workers am ready.",
      "Neither the supervisor nor the workers was ready."
    ],
    correct: 1,
    explanation: "Verb agrees with the closer subject (workers = plural) → 'are'"
  },
  {
    id: 621,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "discharge" in an environmental context refers to:',
    options: [
      "Hiring employees",
      "Releasing substances into the environment",
      "Firing employees",
      "Storing materials"
    ],
    correct: 1,
    explanation: "Discharge means release or emission of substances into the environment"
  },
  {
    id: 622,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The new safety policy will be ______ to all employees next week.",
    options: ["communicated", "cancelled", "postponed", "forgotten"],
    correct: 0,
    explanation: "Communicated means conveyed or transmitted to others"
  },
  {
    id: 623,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Liquefied Natural Gas (LNG) is natural gas that has been cooled to approximately -162°C to convert it to liquid form. LNG takes up about 1/600th of the volume of natural gas in its gaseous state, making it economical to transport over long distances in specially designed ships."\n\nWhy is LNG economical to transport?',
    options: [
      "Because it is cheaper to produce",
      "Because it takes up much less volume",
      "Because it travels faster",
      "Because it doesn't need special ships"
    ],
    correct: 1,
    explanation: "LNG takes up much less volume (1/600th), making transport cost-effective"
  },
  {
    id: 624,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "LNG is cooled to -100°C."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text specifies approximately -162°C, not -100°C"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 625,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What comes next: Horizontal line, Vertical line, Diagonal line, ?",
    options: ["Circle", "Curved line", "Straight line", "Dotted line"],
    correct: 1,
    explanation: "Line types: straight (horizontal, vertical, diagonal), then curved"
  },
  {
    id: 626,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape facing East rotates 45° counter-clockwise. Which direction does it face?",
    options: ["Northeast", "Southeast", "Northwest", "Southwest"],
    correct: 0,
    explanation: "East → 45° CCW = Northeast"
  },
  {
    id: 627,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: Monday, Wednesday, Friday, ?",
    options: ["Saturday", "Sunday", "Monday", "Tuesday"],
    correct: 1,
    explanation: "Pattern: Monday, Wednesday, Friday, Sunday (every other day)"
  },
  {
    id: 628,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete: 1, 4, 9, 16, 25, 36, 49, 64, ?",
    options: ["72", "79", "81", "89"],
    correct: 2,
    explanation: "Square numbers: 9² = 81"
  },
  {
    id: 629,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 16, 25, 36, 49, 64, 81, 100, 121, 144, 162",
    options: ["121", "144", "162", "100"],
    correct: 2,
    explanation: "All except 162 are perfect squares"
  },
  {
    id: 630,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [v] rotates 90° clockwise, what does it become?",
    options: ["[^]", "[v]", "[<]", "[>]"],
    correct: 3,
    explanation: "90° CW rotation of v points right [>]"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 631,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 2, 5, 11, 20, 32, ?",
    options: ["42", "45", "47", "50"],
    correct: 2,
    explanation: "Differences: +3, +6, +9, +12, +15 → 32+15=47"
  },
  {
    id: 632,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All pressure gauges must be calibrated. This gauge is calibrated. What can you conclude?",
    options: [
      "This gauge is a pressure gauge.",
      "This gauge might be a pressure gauge.",
      "This gauge is not a pressure gauge.",
      "This gauge is faulty."
    ],
    correct: 1,
    explanation: "Calibrated doesn't necessarily mean it's a pressure gauge"
  },
  {
    id: 633,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A valve should open when pressure reaches 100 psi. It opens at 80 psi. This indicates:",
    options: [
      "The system pressure is too low",
      "The valve is set too sensitive",
      "The pressure gauge is faulty",
      "The system is empty"
    ],
    correct: 1,
    explanation: "Opening at lower pressure suggests the valve setting needs adjustment"
  },
  {
    id: 634,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 101, 103, 107, 109, 111, 113, 127, 131",
    options: ["109", "111", "113", "127"],
    correct: 1,
    explanation: "All except 111 are prime numbers (111 is divisible by 3)"
  },
  {
    id: 635,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some tools are electric. All electric tools need power. Which is true?",
    options: [
      "All tools need power.",
      "Some tools need power.",
      "No tools need power.",
      "All electric tools are tools."
    ],
    correct: 1,
    explanation: "If some tools are electric and all electric tools need power, then some tools need power"
  },
  {
    id: 636,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A motor runs hotter when under heavy load. This suggests:",
    options: [
      "The motor is faulty",
      "Higher load causes more heat generation",
      "The temperature gauge is faulty",
      "The motor is underloaded"
    ],
    correct: 1,
    explanation: "Higher mechanical load increases current and heat generation"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 637,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 24V circuit draws 0.8A. What is the resistance?",
    options: ["20Ω", "25Ω", "30Ω", "35Ω"],
    correct: 2,
    explanation: "R = V/I = 24/0.8 = 30Ω"
  },
  {
    id: 638,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Delta-connected system, if the phase current is 15A, what is the line current?",
    options: ["8.66A", "15A", "25.98A", "30A"],
    correct: 2,
    explanation: "In Delta, I_Line = √3 × I_Phase = 1.732 × 15 = 25.98A"
  },
  {
    id: 639,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A 3-phase motor has input power of 7.5kW at 415V. If current is 12A, what is the power factor?",
    options: ["0.75", "0.80", "0.85", "0.90"],
    correct: 2,
    explanation: "PF = P/(√3 × V × I) = 7,500/(1.732 × 415 × 12) = 0.87 ≈ 0.85"
  },
  {
    id: 640,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A transformer has efficiency of 95%. If input power is 50kW, what is the output power?",
    options: ["45.5 kW", "47.5 kW", "48.5 kW", "50.5 kW"],
    correct: 1,
    explanation: "Output = Input × Efficiency = 50 × 0.95 = 47.5 kW"
  },
  {
    id: 641,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 6-pole motor at 50Hz has what synchronous speed?",
    options: ["500 RPM", "750 RPM", "1000 RPM", "1500 RPM"],
    correct: 2,
    explanation: "Ns = 120f/P = 120×50/6 = 1,000 RPM"
  },
  {
    id: 642,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the purpose of a motor protection relay?",
    options: [
      "To increase motor speed",
      "To protect against electrical faults",
      "To reduce voltage",
      "To switch motors on"
    ],
    correct: 1,
    explanation: "Motor protection relays protect against faults like overload, phase loss, and short circuits"
  },
  {
    id: 643,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the recommended resistance for a grounding system in industrial installations?",
    options: ["Less than 1Ω", "Less than 10Ω", "Less than 25Ω", "Less than 50Ω"],
    correct: 0,
    explanation: "Industrial grounding systems should have resistance less than 1Ω"
  },
  {
    id: 644,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "What is the pressure drop in a pipe primarily caused by?",
    options: [
      "Gravity",
      "Friction and turbulence",
      "Temperature change",
      "Chemical reaction"
    ],
    correct: 1,
    explanation: "Pressure drop is mainly due to friction and turbulence in the flow"
  },
  {
    id: 645,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "Convert 250 psi to kPa (1 psi = 6.895 kPa).",
    options: ["1,523.75 kPa", "1,623.75 kPa", "1,723.75 kPa", "1,823.75 kPa"],
    correct: 2,
    explanation: "250 × 6.895 = 1,723.75 kPa"
  },
  {
    id: 646,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What is the effect of parallel operation on pump flow?",
    options: [
      "Flow adds for the same head",
      "Head adds for the same flow",
      "Power decreases",
      "Flow and head double"
    ],
    correct: 0,
    explanation: "In parallel, flow rates add at the same head"
  },
  {
    id: 647,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the purpose of the compressor discharge temperature monitoring?",
    options: [
      "To control speed",
      "To prevent overheating and damage",
      "To measure flow",
      "To control pressure"
    ],
    correct: 1,
    explanation: "Monitoring discharge temperature prevents overheating and potential damage"
  },
  {
    id: 648,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "Which type of heat exchanger has the highest heat transfer efficiency?",
    options: [
      "Shell and tube",
      "Plate type",
      "Double pipe",
      "Spiral type"
    ],
    correct: 1,
    explanation: "Plate type heat exchangers generally have the highest efficiency"
  },
  {
    id: 649,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of a core sample in exploration?",
    options: [
      "To drill the well faster",
      "To collect rock samples for analysis",
      "To pump oil",
      "To inject chemicals"
    ],
    correct: 1,
    explanation: "Core samples provide valuable rock and formation information"
  },
  {
    id: 650,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "What is the purpose of a separator in oil production?",
    options: [
      "To separate oil, gas, and water",
      "To increase production",
      "To refine crude",
      "To store oil"
    ],
    correct: 0,
    explanation: "Separators separate well fluids into oil, gas, and water phases"
  },
  {
    id: 651,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the function of a wing valve on a wellhead?",
    options: [
      "To control flow from the well",
      "To measure pressure",
      "To add chemicals",
      "To lubricate equipment"
    ],
    correct: 0,
    explanation: "Wing valves control the flow of fluids from the well"
  },
  {
    id: 652,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the purpose of a mist extractor in a separator?",
    options: [
      "To create mist",
      "To remove liquid droplets from gas",
      "To increase pressure",
      "To add chemicals"
    ],
    correct: 1,
    explanation: "Mist extractors remove tiny liquid droplets from gas streams"
  },
  {
    id: 653,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is pipeline hydrostatic testing used for?",
    options: [
      "To increase flow",
      "To test pipeline integrity",
      "To measure pressure",
      "To clean the pipeline"
    ],
    correct: 1,
    explanation: "Hydrostatic testing verifies pipeline integrity and leak-tightness"
  },
  {
    id: 654,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A conductivity probe is used to measure:",
    options: [
      "Pressure",
      "Temperature",
      "Fluid conductivity",
      "Flow rate"
    ],
    correct: 2,
    explanation: "Conductivity probes measure the electrical conductivity of fluids"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 655,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "You're told to operate a forklift but haven't been trained. What do you do?",
    options: [
      "Operate it carefully since it's just a short time.",
      "Refuse and request proper training.",
      "Watch someone else and then try.",
      "Ask for written instructions."
    ],
    correct: 1,
    explanation: "Operating equipment without proper training is a serious safety violation"
  },
  {
    id: 656,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "Your colleague is taking credit for your work in meetings. What is the best approach?",
    options: [
      "Publicly confront them in the next meeting.",
      "Privately discuss the issue with them.",
      "Stop sharing your work with them.",
      "Report them to HR immediately."
    ],
    correct: 1,
    explanation: "Private, professional discussion is the best first step to resolve such issues"
  },
  {
    id: 657,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "You accidentally receive confidential financial data. What do you do?",
    options: [
      "Review it out of curiosity.",
      "Delete it without reading and inform IT.",
      "Share it with your team.",
      "Keep a copy for reference."
    ],
    correct: 1,
    explanation: "Accidentally received confidential data should be deleted and reported"
  },
  {
    id: 658,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You notice a colleague using the wrong tool for a critical task. What do you do?",
    options: [
      "Ignore it as they seem experienced.",
      "Politely point out the correct tool.",
      "Report them to management.",
      "Let them make the mistake."
    ],
    correct: 1,
    explanation: "Politely pointing out the correct tool prevents errors and maintains safety"
  },
  {
    id: 659,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You see a truck dumping waste in an unauthorized area. What is your first action?",
    options: [
      "Approach the driver and tell them to stop.",
      "Report it to environmental authorities.",
      "Take photos and post on social media.",
      "Ignore it as it's not your concern."
    ],
    correct: 1,
    explanation: "Unauthorized dumping should be reported to the proper authorities"
  },
  {
    id: 660,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A supplier offers you a paid vacation in exchange for a large order. What do you do?",
    options: [
      "Accept the vacation as a business perk.",
      "Decline and report the offer.",
      "Accept it and place the order.",
      "Ask for a better offer."
    ],
    correct: 1,
    explanation: "Business decisions must be made ethically without accepting bribes"
  }
];

// ============================================
// SET 8 - Additional Unique Questions
// ============================================
const set8 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 701,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A company's workforce of 450 employees increases by 8%. How many new employees are hired?",
    options: ["32", "34", "36", "38"],
    correct: 2,
    explanation: "8% of 450 = 0.08 × 450 = 36 new employees"
  },
  {
    id: 702,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A tool sells for ₦7,500 at a 20% markup. What was the cost price?",
    options: ["₦5,250", "₦5,750", "₦6,250", "₦6,750"],
    correct: 2,
    explanation: "SP = CP × 1.20. CP = 7,500/1.20 = ₦6,250"
  },
  {
    id: 703,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A fuel mixture has gasoline and ethanol in ratio 9:1. If there are 540 liters of gasoline, how much ethanol is in the mixture?",
    options: ["40 L", "50 L", "60 L", "70 L"],
    correct: 2,
    explanation: "9:1 = 540:x → 9x = 540 → x = 60 L"
  },
  {
    id: 704,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "An oil tanker travels at 16 knots for 8.5 hours. How far does it travel in nautical miles?",
    options: ["126 nm", "130 nm", "136 nm", "140 nm"],
    correct: 2,
    explanation: "Distance = 16 × 8.5 = 136 nautical miles"
  },
  {
    id: 705,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A shipment of 1,000 items has 40 defective items. What is the probability of selecting a non-defective item?",
    options: ["92%", "94%", "96%", "98%"],
    correct: 2,
    explanation: "Non-defective = 1,000-40 = 960. 960/1,000 = 0.96 = 96%"
  },
  {
    id: 706,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A pie chart shows expenses: Rent 30%, Utilities 25%, Salaries 35%, Others 10%. If total expenses are ₦4,000,000, what is the salaries expense?",
    options: ["₦1,200,000", "₦1,300,000", "₦1,400,000", "₦1,500,000"],
    correct: 2,
    explanation: "35% of 4,000,000 = 0.35 × 4,000,000 = ₦1,400,000"
  },
  {
    id: 707,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows quarterly production: Q1=5,000, Q2=5,400, Q3=5,800, Q4=6,200. What is the annual total?",
    options: ["21,000 units", "21,500 units", "22,000 units", "22,400 units"],
    correct: 3,
    explanation: "Total = 5,000+5,400+5,800+6,200 = 22,400 units"
  },
  {
    id: 708,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the missing number: 3, 7, 15, 31, 63, ?",
    options: ["95", "107", "119", "127"],
    correct: 3,
    explanation: "Pattern: ×2 + 1. 63×2+1 = 127"
  },
  {
    id: 709,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A project budget of ₦15,000,000 is used up to 87%. How much money remains?",
    options: ["₦1,750,000", "₦1,850,000", "₦1,950,000", "₦2,050,000"],
    correct: 2,
    explanation: "Used = 87% of 15,000,000 = 13,050,000. Remaining = 15,000,000 - 13,050,000 = ₦1,950,000"
  },
  {
    id: 710,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of engineers to technicians is 3:8. If there are 33 engineers, how many technicians are there?",
    options: ["80", "84", "88", "92"],
    correct: 2,
    explanation: "3:8 = 33:x → 3x = 264 → x = 88"
  },
  {
    id: 711,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A cargo ship sails at 20 km/h for 6 hours and then at 25 km/h for 4 hours. What is the average speed?",
    options: ["20 km/h", "22 km/h", "24 km/h", "26 km/h"],
    correct: 1,
    explanation: "Total distance = 20×6 + 25×4 = 120+100 = 220 km. Total time = 10 hours. Average = 220/10 = 22 km/h"
  },
  {
    id: 712,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A class has 12 boys and 18 girls. If one student is selected at random, what is the probability it's a boy?",
    options: ["2/5", "3/5", "1/3", "1/2"],
    correct: 0,
    explanation: "Total = 12+18 = 30. Probability = 12/30 = 2/5"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 713,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "The petroleum industry operates on a global scale with complex supply chains. Crude oil extracted from wells is transported via pipelines, tankers, and trucks to refineries. At refineries, crude oil is processed into various products including gasoline, diesel, jet fuel, and petrochemicals. These products are then distributed to consumers through wholesale and retail networks."\n\nWhat are the products mentioned that are produced from crude oil?',
    options: [
      "Plastics, rubber, and chemicals",
      "Gasoline, diesel, jet fuel, and petrochemicals",
      "Food, medicine, and clothing",
      "Metals, minerals, and rocks"
    ],
    correct: 1,
    explanation: "The text lists 'gasoline, diesel, jet fuel, and petrochemicals' as products"
  },
  {
    id: 714,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Crude oil is only transported by pipelines."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text mentions 'pipelines, tankers, and trucks' as transport methods"
  },
  {
    id: 715,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, where does crude oil refining take place?',
    options: [
      "At the wellhead",
      "At refineries",
      "During transportation",
      "At storage facilities"
    ],
    correct: 1,
    explanation: "The text states 'At refineries, crude oil is processed'"
  },
  {
    id: 716,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "All petroleum products are distributed through retail networks."',
    options: ["True", "False", "Cannot Say"],
    correct: 2,
    explanation: "The text says products are distributed through wholesale AND retail networks"
  },
  {
    id: 717,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct word: The team ______ completed the project ahead of schedule.",
    options: ["has", "have", "is", "are"],
    correct: 0,
    explanation: "Team is singular collective noun → 'has'"
  },
  {
    id: 718,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "utilize" in a technical context means:',
    options: [
      "To waste",
      "To use effectively",
      "To dispose of",
      "To create"
    ],
    correct: 1,
    explanation: "Utilize means to make use of something effectively"
  },
  {
    id: 719,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The maintenance schedule should be ______ to accommodate the new equipment.",
    options: ["adjusted", "cancelled", "forgotten", "ignored"],
    correct: 0,
    explanation: "Adjusted means modified or changed to suit new conditions"
  },
  {
    id: 720,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence is grammatically correct?",
    options: [
      "There was many reasons for the delay.",
      "There were many reasons for the delay.",
      "There is many reasons for the delay.",
      "There are many reason for the delay."
    ],
    correct: 1,
    explanation: "'Reasons' is plural → 'were' is correct"
  },
  {
    id: 721,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "infrastructure" in a business context refers to:',
    options: [
      "Company profits",
      "Basic physical structures and systems",
      "Employee salaries",
      "Marketing campaigns"
    ],
    correct: 1,
    explanation: "Infrastructure refers to basic physical facilities and organizational structures"
  },
  {
    id: 722,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The new regulations require all companies to ______ environmental standards.",
    options: ["adhere to", "avoid", "ignore", "circumvent"],
    correct: 0,
    explanation: "Adhere to means to follow or comply with standards"
  },
  {
    id: 723,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Artificial Intelligence (AI) is increasingly being used in the oil and gas industry for predictive maintenance, reservoir optimization, and safety monitoring. AI algorithms analyze vast amounts of data to identify patterns and predict equipment failures before they occur. This helps reduce downtime and improve operational efficiency."\n\nHow does AI help in the oil and gas industry?',
    options: [
      "By replacing all human workers",
      "By predicting failures and optimizing operations",
      "By increasing production costs",
      "By reducing safety measures"
    ],
    correct: 1,
    explanation: "AI helps by analyzing data to predict failures and improve efficiency"
  },
  {
    id: 724,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "AI has completely eliminated equipment failures."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "AI helps predict failures but doesn't eliminate them completely"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 725,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What comes next: Point, Line, Square, Cube, ?",
    options: ["Circle", "Sphere", "Pyramid", "Triangle"],
    correct: 1,
    explanation: "Dimensional progression: 0D (point) → 1D (line) → 2D (square) → 3D (cube) → 4D (sphere/tesseract)"
  },
  {
    id: 726,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape rotates 135° clockwise. How many degrees counter-clockwise would give the same result?",
    options: ["135°", "180°", "225°", "270°"],
    correct: 2,
    explanation: "360° - 135° = 225° CCW"
  },
  {
    id: 727,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: 1, 2, 4, 8, 16, 32, ?",
    options: ["48", "56", "64", "72"],
    correct: 2,
    explanation: "Powers of 2: 2⁶ = 64"
  },
  {
    id: 728,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete the pattern: 1, 6, 11, 16, 21, ?",
    options: ["24", "25", "26", "27"],
    correct: 2,
    explanation: "Arithmetic progression: +5, so 21+5 = 26"
  },
  {
    id: 729,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 110",
    options: ["90", "99", "110", "81"],
    correct: 2,
    explanation: "All except 110 are multiples of 9"
  },
  {
    id: 730,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [<] rotates 90° clockwise, then 180° counter-clockwise, what does it become?",
    options: ["[<]", "[>]", "[^]", "[v]"],
    correct: 0,
    explanation: "< → 90° CW = ^ → 180° CCW = < (back to original)"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 731,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 1, 5, 13, 29, 61, ?",
    options: ["89", "101", "113", "125"],
    correct: 3,
    explanation: "Pattern: ×2 + 3. 61×2+3 = 125"
  },
  {
    id: 732,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All supervisors have management training. David does not have management training. What can you conclude?",
    options: [
      "David is not a supervisor.",
      "David is a supervisor.",
      "David might be a supervisor.",
      "David is a manager."
    ],
    correct: 0,
    explanation: "If all supervisors have training and David doesn't, he cannot be a supervisor"
  },
  {
    id: 733,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "The flowmeter reading increases when the valve is opened. This indicates:",
    options: [
      "The flowmeter is faulty",
      "Flow increases when valve is opened",
      "The valve is closing",
      "The pressure is decreasing"
    ],
    correct: 1,
    explanation: "Valve opening increases flow, which the flowmeter detects"
  },
  {
    id: 734,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2000",
    options: ["1331", "1728", "2000", "1000"],
    correct: 2,
    explanation: "All except 2000 are perfect cubes (10³=1000, 11³=1331, 12³=1728)"
  },
  {
    id: 735,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some machines are old. All old machines need maintenance. Which is true?",
    options: [
      "All machines need maintenance.",
      "Some machines need maintenance.",
      "No machines need maintenance.",
      "All old machines are machines."
    ],
    correct: 1,
    explanation: "If some machines are old and all old need maintenance, then some machines need maintenance"
  },
  {
    id: 736,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A pipeline pressure drops at a certain point. The most likely cause is:",
    options: [
      "Increased flow rate",
      "A leak or blockage",
      "Reduced temperature",
      "Higher density"
    ],
    correct: 1,
    explanation: "Pressure drop localized to one point suggests leak or blockage"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 737,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 120V circuit has a resistance of 8Ω. What is the current?",
    options: ["10A", "12A", "15A", "18A"],
    correct: 2,
    explanation: "I = V/R = 120/8 = 15A"
  },
  {
    id: 738,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Star-connected system, if the line current is 20A, what is the phase current?",
    options: ["11.55A", "20A", "34.64A", "40A"],
    correct: 1,
    explanation: "In Star, I_Line = I_Phase = 20A"
  },
  {
    id: 739,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A 3-phase motor has 15kW output at 415V, 20A, and 0.85 PF. What is the efficiency?",
    options: ["85%", "88%", "91%", "94%"],
    correct: 2,
    explanation: "Input = √3 × V × I × PF = 1.732 × 415 × 20 × 0.85 = 12,218W. Efficiency = 15,000/16,500 = 0.91 = 91%"
  },
  {
    id: 740,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A transformer has primary current 5A at 11kV. If secondary voltage is 415V and efficiency is 97%, what is the secondary current?",
    options: ["118A", "128A", "138A", "148A"],
    correct: 1,
    explanation: "Input = 11,000 × 5 = 55,000W. Output = 55,000 × 0.97 = 53,350W. I_secondary = 53,350/415 = 128A"
  },
  {
    id: 741,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 4-pole motor at 60Hz has what slip if actual speed is 1,750 RPM?",
    options: ["2.5%", "2.8%", "3.0%", "3.2%"],
    correct: 1,
    explanation: "Ns = 120×60/4 = 1,800 RPM. Slip = (1,800-1,750)/1,800 = 50/1,800 = 2.78% ≈ 2.8%"
  },
  {
    id: 742,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the purpose of a differential protection relay in a transformer?",
    options: [
      "To increase power",
      "To protect against internal faults",
      "To measure current",
      "To control voltage"
    ],
    correct: 1,
    explanation: "Differential protection detects internal transformer faults by comparing currents"
  },
  {
    id: 743,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the maximum allowed touch voltage for safety in electrical installations?",
    options: ["25V AC", "50V AC", "120V AC", "230V AC"],
    correct: 1,
    explanation: "50V AC is generally considered the safe touch voltage limit"
  },
  {
    id: 744,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "What is the Reynolds number used to determine?",
    options: [
      "Fluid density",
      "Flow regime (laminar or turbulent)",
      "Fluid temperature",
      "Fluid pressure"
    ],
    correct: 1,
    explanation: "Reynolds number determines whether flow is laminar, transitional, or turbulent"
  },
  {
    id: 745,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "What is the absolute pressure if gauge pressure is 350 kPa and atmospheric pressure is 101.3 kPa?",
    options: ["248.7 kPa", "350 kPa", "451.3 kPa", "451.3 kPa"],
    correct: 2,
    explanation: "Absolute = Gauge + Atmospheric = 350 + 101.3 = 451.3 kPa"
  },
  {
    id: 746,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What is the effect of pump speed reduction on flow and head?",
    options: [
      "Flow and head decrease proportionally to speed",
      "Flow decreases linearly, head decreases quadratically",
      "Flow decreases quadratically, head decreases linearly",
      "Both decrease quadratically"
    ],
    correct: 1,
    explanation: "Flow ∝ Speed, Head ∝ Speed²"
  },
  {
    id: 747,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the purpose of surge control in centrifugal compressors?",
    options: [
      "To increase speed",
      "To prevent surge conditions",
      "To reduce pressure",
      "To increase flow"
    ],
    correct: 1,
    explanation: "Surge control prevents the damaging surge condition in compressors"
  },
  {
    id: 748,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "What is the overall heat transfer coefficient (U) affected by?",
    options: [
      "Only conduction",
      "Conduction, convection, and radiation",
      "Only convection",
      "Only fluid properties"
    ],
    correct: 1,
    explanation: "Overall heat transfer coefficient considers conduction, convection, and radiation effects"
  },
  {
    id: 749,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of directional drilling?",
    options: [
      "To drill vertical wells",
      "To reach reserves not accessible vertically",
      "To produce more oil",
      "To stop production"
    ],
    correct: 1,
    explanation: "Directional drilling reaches reserves that can't be accessed with vertical wells"
  },
  {
    id: 750,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "What is a manifold in oil production systems?",
    options: [
      "A type of pump",
      "A system of pipes to collect and distribute fluids",
      "A refining unit",
      "A storage tank"
    ],
    correct: 1,
    explanation: "Manifolds are pipe systems that collect and distribute fluids from multiple sources"
  },
  {
    id: 751,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the purpose of the tubing head on a well?",
    options: [
      "To drill the well",
      "To support production tubing",
      "To store oil",
      "To refine crude"
    ],
    correct: 1,
    explanation: "The tubing head supports the production tubing string"
  },
  {
    id: 752,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the purpose of a liquid level control in a separator?",
    options: [
      "To maintain proper liquid level",
      "To increase pressure",
      "To remove gas",
      "To add chemicals"
    ],
    correct: 0,
    explanation: "Liquid level control maintains proper level for optimal separation"
  },
  {
    id: 753,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is the purpose of pipeline SCADA systems?",
    options: [
      "To increase flow",
      "To monitor and control pipeline operations",
      "To store oil",
      "To refine products"
    ],
    correct: 1,
    explanation: "SCADA systems monitor and control pipeline operations remotely"
  },
  {
    id: 754,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A strain gauge is used to measure:",
    options: [
      "Temperature",
      "Pressure",
      "Mechanical strain",
      "Flow rate"
    ],
    correct: 2,
    explanation: "Strain gauges measure mechanical deformation (strain) in materials"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 755,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "You notice a safety guard has been removed from a machine for convenience. What do you do?",
    options: [
      "Leave it as others seem comfortable.",
      "Insist the guard be reinstalled before operation.",
      "Use the machine but be careful.",
      "Tell the operator to work slowly."
    ],
    correct: 1,
    explanation: "Safety guards must always be in place before equipment operation"
  },
  {
    id: 756,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "A team member is consistently negative and affecting team morale. What is the best approach?",
    options: [
      "Avoid them completely.",
      "Address the behavior privately and constructively.",
      "Report them to HR without discussion.",
      "Be negative back to them."
    ],
    correct: 1,
    explanation: "Private, constructive feedback is the most professional approach"
  },
  {
    id: 757,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "A journalist asks you for information about your company's new project. What do you do?",
    options: [
      "Share general information.",
      "Refer them to the communications department.",
      "Share all details you know.",
      "Ignore their request."
    ],
    correct: 1,
    explanation: "Media inquiries should be handled by the appropriate communications department"
  },
  {
    id: 758,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You discover a minor discrepancy in financial records. What should you do?",
    options: [
      "Correct it without telling anyone.",
      "Report it to your supervisor.",
      "Ignore it as it's minor.",
      "Blame someone else."
    ],
    correct: 1,
    explanation: "Any discrepancy in financial records should be reported and investigated"
  },
  {
    id: 759,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You smell gas near a pipeline valve station. What is your first action?",
    options: [
      "Ignore it as gas often smells.",
      "Report it immediately and evacuate the area.",
      "Investigate yourself.",
      "Wait to see if it gets stronger."
    ],
    correct: 1,
    explanation: "Gas leaks must be reported immediately and areas evacuated"
  },
  {
    id: 760,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A supplier offers your team a free lunch to discuss business. What do you do?",
    options: [
      "Accept the free lunch.",
      "Check company policy on such offers.",
      "Accept but pay for it yourself.",
      "Decline and avoid the supplier."
    ],
    correct: 1,
    explanation: "Always check company policy regarding vendor gifts and entertainment"
  }
];

// ============================================
// SET 9 - Additional Unique Questions
// ============================================
const set9 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 801,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A storage facility loses 3.5% of its stored crude oil annually due to evaporation. If the facility stores 2,800,000 barrels, how many barrels are lost per year?",
    options: ["88,000 bbl", "92,000 bbl", "96,000 bbl", "98,000 bbl"],
    correct: 3,
    explanation: "3.5% of 2,800,000 = 0.035 × 2,800,000 = 98,000 bbl"
  },
  {
    id: 802,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A company sells lubricants for ₦850 per unit. If the cost price is ₦680, what is the profit percentage?",
    options: ["20%", "22%", "23%", "25%"],
    correct: 3,
    explanation: "Profit = 850 - 680 = 170. Percentage = (170/680) × 100 = 25%"
  },
  {
    id: 803,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A well produces oil and water in a ratio of 4:1. If daily production is 2,500 barrels, how much water is produced daily?",
    options: ["400 bbl", "450 bbl", "500 bbl", "550 bbl"],
    correct: 2,
    explanation: "Total parts = 4+1 = 5. Water = 1/5 × 2,500 = 500 bbl"
  },
  {
    id: 804,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A pipeline inspection drone travels at 45 km/h for 2.5 hours and then at 55 km/h for 1.5 hours. What is the average speed for the entire trip?",
    options: ["46.5 km/h", "47.5 km/h", "48.75 km/h", "49.5 km/h"],
    correct: 2,
    explanation: "Total distance = 45×2.5 + 55×1.5 = 112.5 + 82.5 = 195 km. Total time = 4 hours. Average = 195/4 = 48.75 km/h"
  },
  {
    id: 805,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A box contains 15 items: 6 are Type A, 5 are Type B, and 4 are Type C. What is the probability of selecting a Type B or Type C item?",
    options: ["1/3", "1/2", "3/5", "2/3"],
    correct: 2,
    explanation: "Type B + Type C = 5+4 = 9. Total = 15. Probability = 9/15 = 3/5"
  },
  {
    id: 806,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A line graph shows temperatures over 5 days: Mon=28°C, Tue=30°C, Wed=27°C, Thu=31°C, Fri=29°C. What is the range of temperatures?",
    options: ["2°C", "3°C", "4°C", "5°C"],
    correct: 2,
    explanation: "Range = Highest - Lowest = 31 - 27 = 4°C"
  },
  {
    id: 807,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows production capacity: Machine 1=150 units/h, Machine 2=200 units/h, Machine 3=175 units/h. If all machines run for 8 hours, what is total production?",
    options: ["4,000 units", "4,100 units", "4,200 units", "4,300 units"],
    correct: 2,
    explanation: "Total = (150+200+175) × 8 = 525 × 8 = 4,200 units"
  },
  {
    id: 808,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the next number: 1, 3, 9, 27, 81, ?",
    options: ["162", "216", "243", "324"],
    correct: 2,
    explanation: "Each term ×3: 81 × 3 = 243"
  },
  {
    id: 809,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "An oil well's production declines from 1,200 bbl/day to 1,020 bbl/day. What is the percentage decline?",
    options: ["12%", "13%", "14%", "15%"],
    correct: 3,
    explanation: "Decline = 1,200 - 1,020 = 180. Percentage = (180/1,200) × 100 = 15%"
  },
  {
    id: 810,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of gas to oil production is 2:5. If gas production is 400 m³, what is oil production?",
    options: ["800 m³", "900 m³", "1,000 m³", "1,200 m³"],
    correct: 2,
    explanation: "2:5 = 400:x → 2x = 2,000 → x = 1,000 m³"
  },
  {
    id: 811,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A forklift moves at 6 km/h. How many meters does it cover in 75 seconds?",
    options: ["100 m", "110 m", "120 m", "125 m"],
    correct: 3,
    explanation: "6 km/h = 6,000/3,600 = 1.667 m/s. Distance = 1.667 × 75 = 125 m"
  },
  {
    id: 812,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A spinner has 8 equal sections numbered 1-8. What is the probability of spinning an even number greater than 4?",
    options: ["1/8", "1/4", "3/8", "1/2"],
    correct: 1,
    explanation: "Even numbers > 4: 6, 8 (2 numbers). Probability = 2/8 = 1/4"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 813,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Carbon offsetting is a mechanism that allows companies to compensate for their greenhouse gas emissions by investing in environmental projects. These projects include reforestation, renewable energy development, and methane capture. The goal is to achieve net-zero emissions by balancing emitted carbon with carbon removal or avoidance."\n\nWhat does carbon offsetting allow companies to do?',
    options: [
      "Increase their emissions",
      "Compensate for their emissions through investments",
      "Stop all operations",
      "Reduce their production"
    ],
    correct: 1,
    explanation: "The text states carbon offsetting allows companies to 'compensate for their greenhouse gas emissions by investing in environmental projects'"
  },
  {
    id: 814,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Carbon offsetting projects only include reforestation."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text mentions 'reforestation, renewable energy development, and methane capture'"
  },
  {
    id: 815,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, what is the goal of carbon offsetting?',
    options: [
      "To increase profits",
      "To achieve net-zero emissions",
      "To reduce production costs",
      "To eliminate all emissions"
    ],
    correct: 1,
    explanation: "The text states the goal is 'to achieve net-zero emissions'"
  },
  {
    id: 816,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Carbon offsetting completely eliminates all emissions."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "Carbon offsetting balances emissions through investments; it doesn't eliminate them completely"
  },
  {
    id: 817,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct verb: The committee ______ decided to postpone the meeting.",
    options: ["has", "have", "is", "are"],
    correct: 0,
    explanation: "Committee is a collective noun, takes singular verb 'has'"
  },
  {
    id: 818,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "hazard" in a workplace context most nearly means:',
    options: [
      "A celebration",
      "A source of danger",
      "A new procedure",
      "A safety measure"
    ],
    correct: 1,
    explanation: "Hazard refers to something that poses a risk or danger"
  },
  {
    id: 819,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The emergency response plan must be ______ every six months.",
    options: ["reviewed", "cancelled", "forgotten", "ignored"],
    correct: 0,
    explanation: "Reviewed means examined and evaluated for effectiveness"
  },
  {
    id: 820,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence is grammatically correct?",
    options: [
      "The equipment need to be calibrated.",
      "The equipment needs to be calibrated.",
      "The equipment are needing calibration.",
      "The equipment have need calibration."
    ],
    correct: 1,
    explanation: "'Equipment' is singular mass noun → 'needs'"
  },
  {
    id: 821,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "conservation" in an environmental context refers to:',
    options: [
      "Wasting resources",
      "Protecting and preserving resources",
      "Using resources quickly",
      "Ignoring resource management"
    ],
    correct: 1,
    explanation: "Conservation is the protection and preservation of resources"
  },
  {
    id: 822,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The new safety guidelines were ______ to all departments.",
    options: ["disseminated", "withheld", "cancelled", "hidden"],
    correct: 0,
    explanation: "Disseminated means widely distributed or spread"
  },
  {
    id: 823,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Green hydrogen is produced by splitting water into hydrogen and oxygen using renewable electricity. This process, called electrolysis, generates zero carbon emissions. Green hydrogen is seen as a promising clean fuel for heavy industry and transportation, sectors that are difficult to electrify directly."\n\nHow is green hydrogen produced?',
    options: [
      "From natural gas",
      "By splitting water using renewable electricity",
      "From coal",
      "From oil refining"
    ],
    correct: 1,
    explanation: "The text states green hydrogen is 'produced by splitting water into hydrogen and oxygen using renewable electricity'"
  },
  {
    id: 824,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Green hydrogen produces carbon emissions during production."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text says electrolysis 'generates zero carbon emissions'"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 825,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What comes next: Right Arrow, Up Arrow, Left Arrow, ?",
    options: ["Down Arrow", "Right Arrow", "Up Arrow", "Left Arrow"],
    correct: 0,
    explanation: "Direction sequence: Right, Up, Left, Down (counter-clockwise)"
  },
  {
    id: 826,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape rotates 45° counter-clockwise, then 90° clockwise. Net rotation is:",
    options: ["45° CW", "45° CCW", "135° CW", "135° CCW"],
    correct: 0,
    explanation: "45° CCW + 90° CW = 45° CW net"
  },
  {
    id: 827,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: 50, 45, 39, 32, 24, ?",
    options: ["15", "16", "17", "18"],
    correct: 0,
    explanation: "Differences: -5, -6, -7, -8, -9 → 24-9=15"
  },
  {
    id: 828,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete the sequence: 0, 1, 3, 6, 10, 15, ?",
    options: ["18", "20", "21", "24"],
    correct: 2,
    explanation: "Triangular numbers: +1, +2, +3, +4, +5, +6 → 15+6=21"
  },
  {
    id: 829,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 33",
    options: ["29", "33", "26", "23"],
    correct: 1,
    explanation: "All except 33 are in arithmetic progression +3 (33 should be 32)"
  },
  {
    id: 830,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [^] rotates 180° clockwise, then 90° clockwise, what does it become?",
    options: ["[^]", "[v]", "[<]", "[>]"],
    correct: 0,
    explanation: "^ → 180° CW = v → 90° CW = < → 180° CW = ^ (back to original)"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 831,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 4, 12, 24, 40, 60, ?",
    options: ["80", "84", "88", "92"],
    correct: 1,
    explanation: "Differences: 8, 12, 16, 20, 24 → 60+24=84"
  },
  {
    id: 832,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All fire extinguishers must be inspected monthly. This extinguisher was not inspected monthly. What can you conclude?",
    options: [
      "This extinguisher is not a fire extinguisher.",
      "This extinguisher violates safety policy.",
      "This extinguisher is new.",
      "This extinguisher is empty."
    ],
    correct: 1,
    explanation: "If all extinguishers must be inspected monthly and this one wasn't, it violates policy"
  },
  {
    id: 833,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A temperature reading remains constant while heat is being applied. This suggests:",
    options: [
      "The thermometer is accurate.",
      "A phase change is occurring.",
      "The heat source is off.",
      "The system is empty."
    ],
    correct: 1,
    explanation: "Constant temperature during heating indicates a phase change (e.g., boiling or melting)"
  },
  {
    id: 834,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 500",
    options: ["400", "441", "500", "361"],
    correct: 2,
    explanation: "All except 500 are perfect squares (20²=400, 21²=441, 22²=484)"
  },
  {
    id: 835,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "Some equipment is automated. All automated equipment is efficient. Which is true?",
    options: [
      "All equipment is efficient.",
      "Some equipment is efficient.",
      "No equipment is efficient.",
      "All automated equipment is equipment."
    ],
    correct: 1,
    explanation: "If some equipment is automated and all automated is efficient, then some equipment is efficient"
  },
  {
    id: 836,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A pump's vibration increases with flow rate. This indicates:",
    options: [
      "The pump is running correctly.",
      "The pump has a flow-dependent imbalance.",
      "The motor is faulty.",
      "The pressure is too high."
    ],
    correct: 1,
    explanation: "Vibration increasing with flow suggests a flow-dependent issue like cavitation or imbalance"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 837,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A circuit has 230V and draws 2.5A. What is the resistance?",
    options: ["82Ω", "88Ω", "92Ω", "98Ω"],
    correct: 2,
    explanation: "R = V/I = 230/2.5 = 92Ω"
  },
  {
    id: 838,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Delta-connected system, if the line voltage is 480V and line current is 15A, what is the apparent power?",
    options: ["7.2 kVA", "9.6 kVA", "10.8 kVA", "12.5 kVA"],
    correct: 3,
    explanation: "S = √3 × V_Line × I_Line = 1.732 × 480 × 15 = 12,470 VA ≈ 12.5 kVA"
  },
  {
    id: 839,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A 3-phase motor at 415V draws 18A at 0.82 PF. What is the true power in kW?",
    options: ["9.5 kW", "10.6 kW", "11.3 kW", "12.1 kW"],
    correct: 1,
    explanation: "P = √3 × V × I × PF = 1.732 × 415 × 18 × 0.82 = 10,607W = 10.6 kW"
  },
  {
    id: 840,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A 200kVA transformer has 400V on secondary. What is the secondary current at full load?",
    options: ["400A", "450A", "500A", "550A"],
    correct: 2,
    explanation: "I = S/V = 200,000/400 = 500A"
  },
  {
    id: 841,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 8-pole motor at 60Hz has what synchronous speed?",
    options: ["750 RPM", "900 RPM", "1200 RPM", "1500 RPM"],
    correct: 1,
    explanation: "Ns = 120f/P = 120×60/8 = 900 RPM"
  },
  {
    id: 842,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the purpose of an earth leakage circuit breaker (ELCB)?",
    options: [
      "To increase voltage",
      "To protect against earth faults",
      "To measure current",
      "To control power"
    ],
    correct: 1,
    explanation: "ELCBs detect and protect against earth leakage faults"
  },
  {
    id: 843,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the purpose of arc flash protection in electrical systems?",
    options: [
      "To increase power",
      "To protect workers from arc flash incidents",
      "To reduce voltage",
      "To measure current"
    ],
    correct: 1,
    explanation: "Arc flash protection safeguards workers from the hazards of electrical arc flash"
  },
  {
    id: 844,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "The pressure at a point in a fluid increases with:",
    options: [
      "Increasing velocity",
      "Increasing depth",
      "Decreasing density",
      "Decreasing temperature"
    ],
    correct: 1,
    explanation: "Hydrostatic pressure increases with depth: P = ρgh"
  },
  {
    id: 845,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "What is 500 mmHg in kPa? (1 atm = 760 mmHg = 101.325 kPa)",
    options: ["55.3 kPa", "60.5 kPa", "66.7 kPa", "70.8 kPa"],
    correct: 2,
    explanation: "500 × (101.325/760) = 66.66 kPa"
  },
  {
    id: 846,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What is the purpose of a pump's mechanical seal?",
    options: [
      "To increase flow",
      "To prevent leakage along the shaft",
      "To reduce power",
      "To control speed"
    ],
    correct: 1,
    explanation: "Mechanical seals prevent fluid leakage along the pump shaft"
  },
  {
    id: 847,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the difference between a positive displacement and dynamic compressor?",
    options: [
      "No difference",
      "PD traps gas, dynamic imparts velocity",
      "PD is more expensive",
      "Dynamic is more reliable"
    ],
    correct: 1,
    explanation: "PD compressors trap and compress gas; dynamic compressors impart velocity for pressure"
  },
  {
    id: 848,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "What is the purpose of insulation in thermal systems?",
    options: [
      "To increase heat transfer",
      "To reduce heat transfer",
      "To increase pressure",
      "To reduce flow"
    ],
    correct: 1,
    explanation: "Insulation reduces unwanted heat transfer between systems"
  },
  {
    id: 849,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of a derrick in drilling operations?",
    options: [
      "To store oil",
      "To support the drill string",
      "To refine crude",
      "To transport gas"
    ],
    correct: 1,
    explanation: "The derrick provides structural support for the drill string during drilling"
  },
  {
    id: 850,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "What is the function of a gathering center in oil production?",
    options: [
      "To drill new wells",
      "To collect and process production from multiple wells",
      "To refine crude oil",
      "To transport products"
    ],
    correct: 1,
    explanation: "Gathering centers collect and process production from multiple wells"
  },
  {
    id: 851,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the purpose of the production casing in a well?",
    options: [
      "To drill the well",
      "To isolate producing zones and protect the wellbore",
      "To pump oil",
      "To store gas"
    ],
    correct: 1,
    explanation: "Production casing isolates producing zones and protects the wellbore integrity"
  },
  {
    id: 852,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the purpose of a sand trap in a separator?",
    options: [
      "To add sand",
      "To remove sand and solids",
      "To increase pressure",
      "To control temperature"
    ],
    correct: 1,
    explanation: "Sand traps remove sand and solid particles from well fluids"
  },
  {
    id: 853,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is the purpose of pipeline leak detection systems?",
    options: [
      "To increase flow",
      "To detect and locate leaks quickly",
      "To reduce pressure",
      "To control temperature"
    ],
    correct: 1,
    explanation: "Leak detection systems identify and locate leaks for rapid response"
  },
  {
    id: 854,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A capacitive level transmitter works on the principle of:",
    options: [
      "Pressure measurement",
      "Capacitance change with level",
      "Temperature measurement",
      "Flow measurement"
    ],
    correct: 1,
    explanation: "Capacitive level transmitters measure level through changes in capacitance"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 855,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "A worker is using a ladder that appears damaged. What do you do?",
    options: [
      "Let them continue if they're careful.",
      "Stop them and replace the damaged ladder.",
      "Ignore it as it might be fine.",
      "Take a photo for evidence."
    ],
    correct: 1,
    explanation: "Damaged equipment must be replaced immediately to prevent accidents"
  },
  {
    id: 856,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "Your team is struggling to meet a deadline due to poor planning. What is the best approach?",
    options: [
      "Blame the planning team.",
      "Work together to reprioritize and find solutions.",
      "Give up and accept the delay.",
      "Work overtime without changes."
    ],
    correct: 1,
    explanation: "Collaborative problem-solving is the most effective way to address delays"
  },
  {
    id: 857,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "A former employee asks for a list of current clients. What do you do?",
    options: [
      "Share the list since they used to work here.",
      "Politely decline and cite confidentiality.",
      "Share only a partial list.",
      "Ask your supervisor first."
    ],
    correct: 1,
    explanation: "Client information remains confidential even for former employees"
  },
  {
    id: 858,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You discover that safety data sheets are outdated in the work area. What do you do?",
    options: [
      "Ignore it as it's just paperwork.",
      "Report it and request updated versions.",
      "Continue using old sheets.",
      "Create your own versions."
    ],
    correct: 1,
    explanation: "Outdated safety data sheets should be reported and updated"
  },
  {
    id: 859,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You see a barrel labeled 'hazardous waste' left outside without proper containment. What do you do?",
    options: [
      "Move it to a safe place yourself.",
      "Report it to environmental safety personnel.",
      "Leave it as it's not your job.",
      "Open it to check the contents."
    ],
    correct: 1,
    explanation: "Hazardous waste requires proper handling by trained personnel"
  },
  {
    id: 860,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A supplier offers to cover your expenses for a conference in exchange for favorable reviews. What do you do?",
    options: [
      "Accept the offer as it's a legitimate expense.",
      "Decline and explain it would create a conflict of interest.",
      "Accept but keep it secret.",
      "Ask for a bigger offer."
    ],
    correct: 1,
    explanation: "Any offer that could create a conflict of interest must be declined"
  }
];


// ============================================
// SET 10 - Additional Unique Questions
// ============================================
const set10 = [
  // SECTION A: NUMERICAL REASONING (1-12)
  {
    id: 901,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A refinery processes 25,000 barrels of crude daily. If 65% is converted to diesel, how many barrels of diesel are produced?",
    options: ["15,000 bbl", "15,500 bbl", "16,000 bbl", "16,250 bbl"],
    correct: 3,
    explanation: "65% of 25,000 = 0.65 × 25,000 = 16,250 bbl"
  },
  {
    id: 902,
    section: "Numerical Reasoning",
    category: "Profit & Loss",
    question: "A distributor buys 200 drums of oil at ₦45,000 per drum and sells at ₦52,000 per drum. What is the total profit?",
    options: ["₦1,200,000", "₦1,300,000", "₦1,400,000", "₦1,500,000"],
    correct: 2,
    explanation: "Profit per drum = 52,000 - 45,000 = ₦7,000. Total profit = 200 × 7,000 = ₦1,400,000"
  },
  {
    id: 903,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "A chemical mixture requires acid, water, and catalyst in ratio 1:5:2. If 8 liters of catalyst is used, how much acid is needed?",
    options: ["2 L", "3 L", "4 L", "5 L"],
    correct: 2,
    explanation: "2:1 = 8:x → 2x = 8 → x = 4 L"
  },
  {
    id: 904,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A supply boat travels at 22 knots for 3.5 hours. How many nautical miles does it travel?",
    options: ["67 nm", "70 nm", "73 nm", "77 nm"],
    correct: 3,
    explanation: "Distance = 22 × 3.5 = 77 nautical miles"
  },
  {
    id: 905,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A jar contains 10 red, 15 blue, and 5 green marbles. If two marbles are drawn with replacement, what is the probability both are blue?",
    options: ["1/4", "1/3", "3/8", "1/2"],
    correct: 0,
    explanation: "P(blue) = 15/30 = 1/2. With replacement: 1/2 × 1/2 = 1/4"
  },
  {
    id: 906,
    section: "Numerical Reasoning",
    category: "Graph Interpretation",
    question: "A bar chart shows project phases: Planning=30 days, Design=45 days, Construction=60 days, Testing=25 days. What is the total project duration?",
    options: ["140 days", "150 days", "160 days", "170 days"],
    correct: 2,
    explanation: "Total = 30+45+60+25 = 160 days"
  },
  {
    id: 907,
    section: "Numerical Reasoning",
    category: "Tables",
    question: "A table shows hourly rates: Electrician=₦2,500, Plumber=₦2,200, Welder=₦2,800. If all work 40 hours, what is total labor cost?",
    options: ["₦280,000", "₦290,000", "₦300,000", "₦310,000"],
    correct: 2,
    explanation: "Total = (2,500+2,200+2,800) × 40 = 7,500 × 40 = ₦300,000"
  },
  {
    id: 908,
    section: "Numerical Reasoning",
    category: "Sequences",
    question: "Find the next number: 5, 8, 13, 20, 29, ?",
    options: ["36", "38", "40", "42"],
    correct: 2,
    explanation: "Differences: +3, +5, +7, +9, +11 → 29+11=40"
  },
  {
    id: 909,
    section: "Numerical Reasoning",
    category: "Percentages",
    question: "A warehouse's inventory increased from 3,800 to 4,408 items. What is the percentage increase?",
    options: ["14%", "15%", "16%", "18%"],
    correct: 2,
    explanation: "Increase = 4,408 - 3,800 = 608. Percentage = (608/3,800) × 100 = 16%"
  },
  {
    id: 910,
    section: "Numerical Reasoning",
    category: "Ratios",
    question: "The ratio of operating costs to revenue is 3:5. If revenue is ₦20,000,000, what are the operating costs?",
    options: ["₦10,000,000", "₦11,000,000", "₦12,000,000", "₦13,000,000"],
    correct: 2,
    explanation: "3:5 = x:20,000,000 → 5x = 60,000,000 → x = ₦12,000,000"
  },
  {
    id: 911,
    section: "Numerical Reasoning",
    category: "Speed, Time & Distance",
    question: "A truck travels at 70 km/h for 4 hours. How many kilometers does it cover?",
    options: ["240 km", "260 km", "280 km", "300 km"],
    correct: 2,
    explanation: "Distance = 70 × 4 = 280 km"
  },
  {
    id: 912,
    section: "Numerical Reasoning",
    category: "Probability",
    question: "A bag contains 5 red, 3 yellow, and 2 green balls. What is the probability of NOT picking a red ball?",
    options: ["1/5", "2/5", "3/5", "4/5"],
    correct: 2,
    explanation: "Non-red = 3+2 = 5. Total = 10. Probability = 5/10 = 1/2"
  },

  // SECTION B: VERBAL REASONING (13-24)
  {
    id: 913,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "The oil and gas industry faces several challenges in the 21st century. Climate change regulations are becoming stricter, requiring companies to reduce emissions. Additionally, the transition to renewable energy is reshaping demand patterns. However, oil and gas will remain important for decades, especially for transportation and petrochemical production."\n\nWhat challenges does the industry face according to the text?',
    options: [
      "Increasing demand and new technology",
      "Stricter climate regulations and energy transition",
      "Lower prices and reduced production",
      "Government subsidies and tax breaks"
    ],
    correct: 1,
    explanation: "The text mentions 'Climate change regulations are becoming stricter' and 'the transition to renewable energy' as challenges"
  },
  {
    id: 914,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Oil and gas will be completely replaced by renewables by 2030."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text states 'oil and gas will remain important for decades'"
  },
  {
    id: 915,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Based on the text, why will oil and gas remain important?',
    options: [
      "For generating renewable energy",
      "For transportation and petrochemicals",
      "For agricultural purposes",
      "For food production"
    ],
    correct: 1,
    explanation: "The text mentions 'especially for transportation and petrochemical production'"
  },
  {
    id: 916,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Climate change regulations are becoming less strict."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "The text says regulations are 'becoming stricter'"
  },
  {
    id: 917,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Choose the correct form: Each of the safety officers ______ completed the training.",
    options: ["has", "have", "are", "were"],
    correct: 0,
    explanation: "'Each of' takes singular verb 'has'"
  },
  {
    id: 918,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The word "facility" in an industrial context most nearly means:',
    options: [
      "A small office",
      "A building or complex for specific operations",
      "A portable tool",
      "A vehicle"
    ],
    correct: 1,
    explanation: "Facility refers to a building or complex designed for industrial operations"
  },
  {
    id: 919,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The company will ______ a new health and safety policy next quarter.",
    options: ["implement", "cancel", "postpone", "withdraw"],
    correct: 0,
    explanation: "Implement means to put into effect or execute"
  },
  {
    id: 920,
    section: "Verbal Reasoning",
    category: "Grammar",
    question: "Which sentence uses correct grammar?",
    options: [
      "The data were analyzed by the team.",
      "The data was analyzed by the team.",
      "The data is analyzed by the team.",
      "Both A and B are acceptable."
    ],
    correct: 3,
    explanation: "Both 'data was' (singular) and 'data were' (plural) are acceptable in modern English"
  },
  {
    id: 921,
    section: "Verbal Reasoning",
    category: "Vocabulary",
    question: 'The term "corrosion" in materials science refers to:',
    options: [
      "Strengthening of materials",
      "Degradation of materials",
      "Heating of materials",
      "Cooling of materials"
    ],
    correct: 1,
    explanation: "Corrosion is the degradation of materials, especially metals, through chemical reactions"
  },
  {
    id: 922,
    section: "Verbal Reasoning",
    category: "Sentence Completion",
    question: "The safety audit identified several ______ that needed immediate attention.",
    options: ["deficiencies", "celebrations", "vacations", "meetings"],
    correct: 0,
    explanation: "Deficiencies means shortcomings or inadequacies"
  },
  {
    id: 923,
    section: "Verbal Reasoning",
    category: "Reading Comprehension",
    question: 'Text: "Digital twins are virtual representations of physical assets or systems. In the oil and gas industry, digital twins are used to simulate operations, predict maintenance needs, and optimize performance. By creating a digital replica, companies can test scenarios without risking actual equipment."\n\nWhat is a digital twin?',
    options: [
      "A physical duplicate of equipment",
      "A virtual representation of physical assets",
      "A replacement for physical equipment",
      "A new type of sensor"
    ],
    correct: 1,
    explanation: "The text states digital twins are 'virtual representations of physical assets or systems'"
  },
  {
    id: 924,
    section: "Verbal Reasoning",
    category: "True/False/Cannot Say",
    question: 'Based on the text: "Digital twins completely eliminate the need for physical equipment."',
    options: ["True", "False", "Cannot Say"],
    correct: 1,
    explanation: "Digital twins are simulations that complement, not replace, physical equipment"
  },

  // SECTION C: ABSTRACT REASONING (25-30)
  {
    id: 925,
    section: "Abstract Reasoning",
    category: "Shapes",
    question: "What comes next: Circle, Square, Circle, Square, Triangle, ?",
    options: ["Triangle", "Circle", "Square", "Hexagon"],
    correct: 0,
    explanation: "Pattern: Circle Square repeated, then Triangle Triangle"
  },
  {
    id: 926,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "A shape rotates 60° clockwise, then 120° counter-clockwise, then 180° clockwise. Net rotation is:",
    options: ["120° CW", "120° CCW", "60° CW", "60° CCW"],
    correct: 0,
    explanation: "60° CW + 120° CCW = 60° CCW. 60° CCW + 180° CW = 120° CW net"
  },
  {
    id: 927,
    section: "Abstract Reasoning",
    category: "Patterns",
    question: "Which comes next: 27, 22, 18, 15, 13, ?",
    options: ["10", "11", "12", "13"],
    correct: 2,
    explanation: "Differences: -5, -4, -3, -2, -1 → 13-1=12"
  },
  {
    id: 928,
    section: "Abstract Reasoning",
    category: "Missing Figures",
    question: "Complete: 2, 6, 12, 20, 30, 42, ?",
    options: ["52", "54", "56", "58"],
    correct: 2,
    explanation: "Differences: 4, 6, 8, 10, 12, 14 → 42+14=56"
  },
  {
    id: 929,
    section: "Abstract Reasoning",
    category: "Logical Sequences",
    question: "Find the odd one out: 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49",
    options: ["47", "49", "43", "41"],
    correct: 1,
    explanation: "All except 49 are prime numbers (49 = 7²)"
  },
  {
    id: 930,
    section: "Abstract Reasoning",
    category: "Rotations",
    question: "If [v] rotates 270° clockwise, then 90° counter-clockwise, then 180° clockwise, what does it become?",
    options: ["[^]", "[v]", "[<]", "[>]"],
    correct: 1,
    explanation: "v → 270° CW = > → 90° CCW = < → 180° CW = v (original)"
  },

  // SECTION D: LOGICAL REASONING (31-36)
  {
    id: 931,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "What is the next number: 7, 10, 16, 25, 37, ?",
    options: ["48", "50", "52", "54"],
    correct: 2,
    explanation: "Differences: +3, +6, +9, +12, +15 → 37+15=52"
  },
  {
    id: 932,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "No valves are left open without permission. This valve is open. What can you conclude?",
    options: [
      "This valve has permission to be open.",
      "This valve violates policy.",
      "This valve is closed.",
      "This valve is broken."
    ],
    correct: 0,
    explanation: "Since no valves are open without permission, an open valve must have permission"
  },
  {
    id: 933,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A compressor's discharge temperature increases when the suction pressure drops. This suggests:",
    options: [
      "The compressor is efficient.",
      "A lower suction pressure causes higher compression ratio and temperature.",
      "The temperature gauge is faulty.",
      "The compressor is idle."
    ],
    correct: 1,
    explanation: "Lower suction pressure increases the compression ratio, raising discharge temperature"
  },
  {
    id: 934,
    section: "Logical Reasoning",
    category: "Number Patterns",
    question: "Find the odd one out: 22, 28, 34, 40, 46, 52, 58, 64, 70, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 136, 140",
    options: ["130", "136", "140", "124"],
    correct: 2,
    explanation: "All except 140 are multiples of 6 (140 is not divisible by 6)"
  },
  {
    id: 935,
    section: "Logical Reasoning",
    category: "Deductive Reasoning",
    question: "All safety incidents must be reported. Some events are safety incidents. Which is true?",
    options: [
      "All events must be reported.",
      "Some events must be reported.",
      "No events must be reported.",
      "All reported events are safety incidents."
    ],
    correct: 1,
    explanation: "If some events are safety incidents and all incidents must be reported, then some events must be reported"
  },
  {
    id: 936,
    section: "Logical Reasoning",
    category: "Critical Thinking",
    question: "A motor draws more current when the load is increased. This indicates:",
    options: [
      "The motor is failing.",
      "Higher load requires more electrical power.",
      "The voltage is increasing.",
      "The motor is running too fast."
    ],
    correct: 1,
    explanation: "Increased mechanical load requires more electrical power, increasing current"
  },

  // SECTION E: ENGINEERING FUNDAMENTALS (37-54)
  {
    id: 937,
    section: "Engineering Fundamentals",
    category: "Electrical - Ohm's Law",
    question: "A 12V battery delivers 6A. What is the resistance of the circuit?",
    options: ["1Ω", "1.5Ω", "2Ω", "2.5Ω"],
    correct: 2,
    explanation: "R = V/I = 12/6 = 2Ω"
  },
  {
    id: 938,
    section: "Engineering Fundamentals",
    category: "Electrical - Three-phase systems",
    question: "In a Star-connected system, if the line voltage is 440V and line current is 10A, what is the apparent power?",
    options: ["4.4 kVA", "5.1 kVA", "6.3 kVA", "7.6 kVA"],
    correct: 3,
    explanation: "S = √3 × V_Line × I_Line = 1.732 × 440 × 10 = 7,620 VA ≈ 7.6 kVA"
  },
  {
    id: 939,
    section: "Engineering Fundamentals",
    category: "Electrical - Power Factor",
    question: "A 3-phase motor at 240V draws 25A. If input power is 8.5kW, what is the power factor?",
    options: ["0.70", "0.75", "0.80", "0.85"],
    correct: 2,
    explanation: "PF = P/(√3 × V × I) = 8,500/(1.732 × 240 × 25) = 8,500/10,392 = 0.82 ≈ 0.80"
  },
  {
    id: 940,
    section: "Engineering Fundamentals",
    category: "Electrical - Transformers",
    question: "A transformer has a turns ratio of 1:2 (primary:secondary). If primary voltage is 220V, what is the secondary voltage?",
    options: ["110V", "220V", "330V", "440V"],
    correct: 3,
    explanation: "V_secondary = V_primary × (N_secondary/N_primary) = 220 × 2 = 440V"
  },
  {
    id: 941,
    section: "Engineering Fundamentals",
    category: "Electrical - Motors",
    question: "A 4-pole motor at 60Hz has an actual speed of 1,740 RPM. What is the slip?",
    options: ["2.5%", "3.0%", "3.33%", "4.0%"],
    correct: 2,
    explanation: "Ns = 120×60/4 = 1,800 RPM. Slip = (1,800-1,740)/1,800 = 60/1,800 = 3.33%"
  },
  {
    id: 942,
    section: "Engineering Fundamentals",
    category: "Electrical - Protection systems",
    question: "What is the purpose of a current transformer (CT) in protection systems?",
    options: [
      "To increase current",
      "To step down current for measurement",
      "To reduce voltage",
      "To control power"
    ],
    correct: 1,
    explanation: "CTs step down high currents to safe, measurable levels for instruments and relays"
  },
  {
    id: 943,
    section: "Engineering Fundamentals",
    category: "Electrical - Electrical safety",
    question: "What is the maximum time for a circuit breaker to operate under fault conditions?",
    options: [
      "Immediately (within milliseconds)",
      "1 second",
      "5 seconds",
      "10 seconds"
    ],
    correct: 0,
    explanation: "Circuit breakers operate within milliseconds to protect against faults"
  },
  {
    id: 944,
    section: "Engineering Fundamentals",
    category: "General - Fluid Mechanics",
    question: "The flow of fluid through a pipe is primarily caused by:",
    options: [
      "Temperature difference",
      "Pressure difference",
      "Chemical reaction",
      "Magnetic field"
    ],
    correct: 1,
    explanation: "Fluid flows from high to low pressure (pressure difference)"
  },
  {
    id: 945,
    section: "Engineering Fundamentals",
    category: "General - Pressure",
    question: "What is the pressure at 50 meters depth in sea water? (density = 1,025 kg/m³, g = 9.81 m/s²)",
    options: ["402 kPa", "502 kPa", "602 kPa", "702 kPa"],
    correct: 1,
    explanation: "P = ρgh = 1,025 × 9.81 × 50 = 502,612 Pa ≈ 502.6 kPa"
  },
  {
    id: 946,
    section: "Engineering Fundamentals",
    category: "General - Pumps",
    question: "What is the purpose of a check valve in a pump system?",
    options: [
      "To increase flow",
      "To prevent backflow",
      "To reduce pressure",
      "To control speed"
    ],
    correct: 1,
    explanation: "Check valves allow flow in one direction and prevent reverse flow"
  },
  {
    id: 947,
    section: "Engineering Fundamentals",
    category: "General - Compressors",
    question: "What is the purpose of lubrication in a reciprocating compressor?",
    options: [
      "To increase speed",
      "To reduce friction and wear",
      "To cool the gas",
      "To filter the air"
    ],
    correct: 1,
    explanation: "Lubrication reduces friction, wear, and heat in compressor moving parts"
  },
  {
    id: 948,
    section: "Engineering Fundamentals",
    category: "General - Heat Transfer",
    question: "What is the efficiency of a heat engine theoretically limited by?",
    options: [
      "Mechanical losses",
      "The Carnot cycle efficiency",
      "Fuel quality",
      "Operating speed"
    ],
    correct: 1,
    explanation: "The Carnot cycle sets the theoretical maximum efficiency for heat engines"
  },
  {
    id: 949,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Upstream Operations",
    question: "What is the purpose of a logging while drilling (LWD) system?",
    options: [
      "To drill faster",
      "To provide real-time geological data",
      "To pump oil",
      "To refine crude"
    ],
    correct: 1,
    explanation: "LWD provides real-time formation evaluation data during drilling"
  },
  {
    id: 950,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Production",
    question: "What is the purpose of a downhole safety valve?",
    options: [
      "To increase production",
      "To shut in the well in emergencies",
      "To pump oil",
      "To measure pressure"
    ],
    correct: 1,
    explanation: "Downhole safety valves automatically close to shut in the well during emergencies"
  },
  {
    id: 951,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Wellhead",
    question: "What is the purpose of a casing spool on a wellhead?",
    options: [
      "To support casing",
      "To drill the well",
      "To refine crude",
      "To transport gas"
    ],
    correct: 0,
    explanation: "Casing spools support the casing string and provide sealing connections"
  },
  {
    id: 952,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Separators",
    question: "What is the purpose of a relief valve on a separator?",
    options: [
      "To increase pressure",
      "To release excess pressure",
      "To control flow",
      "To add chemicals"
    ],
    correct: 1,
    explanation: "Relief valves protect the separator from overpressure by releasing excess pressure"
  },
  {
    id: 953,
    section: "Engineering Fundamentals",
    category: "Oil & Gas - Pipelines",
    question: "What is the purpose of pipeline anchoring?",
    options: [
      "To increase flow",
      "To prevent pipeline movement",
      "To reduce pressure",
      "To control temperature"
    ],
    correct: 1,
    explanation: "Anchors prevent pipeline movement due to thermal expansion or external forces"
  },
  {
    id: 954,
    section: "Engineering Fundamentals",
    category: "Basic Instrumentation",
    question: "A RTD (Resistance Temperature Detector) is used to measure:",
    options: [
      "Pressure",
      "Temperature",
      "Flow rate",
      "Level"
    ],
    correct: 1,
    explanation: "RTDs measure temperature based on the change in electrical resistance with temperature"
  },

  // SECTION F: SITUATIONAL JUDGEMENT TEST (55-60)
  {
    id: 955,
    section: "Situational Judgement",
    category: "Safety vs. Productivity",
    question: "You're asked to lift a heavy item without a forklift to save time. What do you do?",
    options: [
      "Lift it with help from colleagues.",
      "Insist on using proper lifting equipment.",
      "Lift it yourself quickly.",
      "Ignore the request."
    ],
    correct: 1,
    explanation: "Manual lifting of heavy items without proper equipment is a safety violation"
  },
  {
    id: 956,
    section: "Situational Judgement",
    category: "Teamwork",
    question: "A team member has a great idea but is shy to speak up. What is the best approach?",
    options: [
      "Ignore them.",
      "Encourage them to share their idea in a supportive environment.",
      "Share their idea without credit.",
      "Tell them to be more confident."
    ],
    correct: 1,
    explanation: "Encouraging participation in a supportive way fosters innovation and inclusion"
  },
  {
    id: 957,
    section: "Situational Judgement",
    category: "Confidentiality",
    question: "You find a USB drive containing sensitive company data in a meeting room. What do you do?",
    options: [
      "Keep it for yourself.",
      "Secure it and contact IT security.",
      "Check the contents first.",
      "Leave it where it is."
    ],
    correct: 1,
    explanation: "Lost sensitive data should be secured and reported to IT security"
  },
  {
    id: 958,
    section: "Situational Judgement",
    category: "Error Discovery",
    question: "You notice that safety equipment inspections have been overdue for weeks. What do you do?",
    options: [
      "Ignore it as it's not your responsibility.",
      "Report it immediately to the safety department.",
      "Conduct the inspections yourself.",
      "Wait for someone else to notice."
    ],
    correct: 1,
    explanation: "Overdue safety equipment inspections must be reported immediately"
  },
  {
    id: 959,
    section: "Situational Judgement",
    category: "Environmental Concern",
    question: "You see a worker washing equipment with solvent near a drain. What do you do?",
    options: [
      "Ignore it as it's a common practice.",
      "Stop them and explain proper disposal procedures.",
      "Join them in cleaning.",
      "Take photos to report later."
    ],
    correct: 1,
    explanation: "Solvents require proper disposal and should not enter drains"
  },
  {
    id: 960,
    section: "Situational Judgement",
    category: "Bribery/Ethics",
    question: "A competitor offers to share confidential information about a mutual client. What do you do?",
    options: [
      "Accept the information to gain advantage.",
      "Decline and report the offer.",
      "Accept but don't use the information.",
      "Ask for more details first."
    ],
    correct: 1,
    explanation: "Accepting competitor's confidential information is unethical and should be reported"
  }
];

// ============================================
// EXPORT - All 10 Sets
// ============================================

export const questionSets = {
  set1: set1,
  set2: set2,
  set3: set3,
  set4: set4,
  set5: set5,
  set6: set6,
  set7: set7,
  set8: set8,
  set9: set9,
  set10: set10
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getFirstSet = () => {
  const keys = Object.keys(questionSets);
  return {
    setNumber: 1,
    questions: questionSets[keys[0]]
  };
};

export const getNextSet = (currentSetIndex) => {
  const keys = Object.keys(questionSets);
  const nextIndex = (currentSetIndex + 1) % keys.length;
  return {
    setNumber: nextIndex + 1,
    questions: questionSets[keys[nextIndex]]
  };
};

export const getRandomSet = () => {
  const keys = Object.keys(questionSets);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return questionSets[randomKey];
};

// Default export for backward compatibility
export const questions = set1;