// Site copy for Medvora. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Medvora",
  "tagline": "Keep essential medicines within reach.",
  "categories": [
    "AI",
    "HealthTech",
    "Inventory Management"
  ],
  "about": "Medvora helps healthcare organisations plan medicine purchases and distribution. Its AI turns dispensing and stock records into practical replenishment recommendations.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#0a2647\"/><rect x=\"7\" y=\"12.5\" width=\"18\" height=\"7\" rx=\"3.5\" fill=\"#ff8a75\"/><rect x=\"12.5\" y=\"7\" width=\"7\" height=\"18\" rx=\"3.5\" fill=\"#7cc4ff\" opacity=\".92\"/><circle cx=\"16\" cy=\"16\" r=\"2\" fill=\"#0a2647\"/>",
  "words": {
    "records": "recommendations",
    "decider": "pharmacists and stores managers",
    "sources": "dispensing records, stock counts and delivery history",
    "model": "Demand forecasts per facility and medicine, with confidence ranges, expiry-risk scores and transfer recommendations explained by their drivers."
  },
  "hero": {
    "eyebrow": "Medicine demand forecasting",
    "before": "Forecast medicine demand ",
    "em": "before shelves run empty",
    "after": ".",
    "points": [
      "Facility-level forecasts with confidence ranges",
      "Transfers suggested before stock expires",
      "Pharmacists approve every order"
    ],
    "floatTitle": "Stock-out in ~9 days",
    "floatText": "Amoxicillin 500mg · General Hospital East"
  },
  "problem": {
    "title": "One facility runs out while another throws medicine away.",
    "text": "Orders are often based on last quarter’s requisition, not on what patients actually need. Lead times slip, seasons change demand, and stock that could have been moved quietly expires on the wrong shelf.",
    "fragments": [
      "Requisitions copied forward from the last order",
      "Antimalarials short in the rainy season, again",
      "Excess stock discovered only at the expiry audit",
      "Supplier delays noticed after shelves are empty"
    ]
  },
  "solution": {
    "title": "Forecasts pharmacy teams can act on, and check.",
    "text": "Medvora learns each facility’s demand from dispensing records, seasonal patterns and delivery history, then recommends what to order and what to move, with the uncertainty shown.",
    "capabilities": [
      {
        "title": "Demand forecasting",
        "text": "Medicine-by-facility forecasts that reflect seasons, trends and recent dispensing, with a confidence range.",
        "demoLabel": "Next 30 days",
        "demoValue": "1,840 ± 210 packs"
      },
      {
        "title": "Replenishment advice",
        "text": "Suggested order quantities that account for stock on hand, pipeline and supplier lead time.",
        "demoLabel": "Suggested order",
        "demoValue": "2,000 packs by 14 Apr"
      },
      {
        "title": "Expiry and transfers",
        "text": "Spots stock likely to expire before use and finds a facility that needs it.",
        "demoLabel": "Transfer",
        "demoValue": "600 packs → PHC Ward 3"
      }
    ]
  },
  "stepsTitle": "From stock cards to confident orders.",
  "steps": [
    [
      "Connect",
      "Load dispensing, stock-count and delivery records from your pharmacy or warehouse system, or upload exports."
    ],
    [
      "Forecast",
      "Medvora forecasts demand per medicine and facility, with confidence ranges."
    ],
    [
      "Recommend",
      "Orders, transfers and expiry risks are ranked by clinical priority and urgency."
    ],
    [
      "Approve",
      "Pharmacists review the reasoning, adjust or approve, and every decision is logged."
    ]
  ],
  "audiencesTitle": "For the teams that keep medicines on the shelf.",
  "audiences": [
    {
      "title": "State central medical stores",
      "text": "Plan procurement and distribution across public facilities.",
      "outcome": "Fewer stock-outs network-wide"
    },
    {
      "title": "Teaching hospital pharmacies",
      "text": "Balance wards, clinics and theatre demand with supplier lead times.",
      "outcome": "Orders based on use"
    },
    {
      "title": "Private hospital groups",
      "text": "Pool visibility across branches and move stock before it expires.",
      "outcome": "Less expired stock"
    },
    {
      "title": "Community pharmacy chains",
      "text": "Stock each branch for its own customers and seasons.",
      "outcome": "Better availability"
    }
  ],
  "publicSector": {
    "title": "Plan medicine distribution across every public facility.",
    "text": "Medvora gives state health ministries and medical stores a shared, evidence-based view of demand, so supplies go where patients need them.",
    "points": [
      "Facility-level demand forecasts for planning and budgeting",
      "Transfer suggestions that reduce expiry across the network",
      "Every order and override recorded with a reason",
      "Aggregate dashboards without patient-identifiable data"
    ]
  },
  "ai": {
    "title": "The model forecasts. Pharmacists decide.",
    "intro": "Medicine supply affects patient care. Medvora is designed to inform pharmacy judgement, never to replace it.",
    "does": [
      "Forecasts demand per medicine and facility",
      "Suggests order quantities and timing",
      "Flags stock likely to expire before use",
      "Shows confidence ranges and the data behind them"
    ],
    "never": [
      "Places orders or moves stock on its own",
      "Makes prescribing or clinical decisions",
      "Uses patient-identifiable data for forecasting",
      "Hides uncertainty behind a single number"
    ]
  },
  "pricing": {
    "model": "Monthly subscription per facility, with network pricing for hospital groups and distributors.",
    "tiers": [
      {
        "name": "Facility",
        "summary": "For a single hospital or pharmacy.",
        "price": "₦250k",
        "unit": "/ facility / month",
        "features": [
          "Demand forecasts",
          "Order suggestions",
          "Expiry alerts",
          "5 user seats"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Network",
        "summary": "For hospital groups and pharmacy chains.",
        "price": "₦180k",
        "unit": "/ facility / month",
        "features": [
          "From 10 facilities",
          "Everything in Facility",
          "Inter-facility transfers",
          "Network dashboards",
          "Unlimited seats"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Public supply chain",
        "summary": "For state medical stores and distributors.",
        "price": "Custom",
        "unit": "",
        "features": [
          "Warehouse and facility forecasting",
          "Procurement planning",
          "Ministry reporting",
          "Integration support"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Zainab Garba",
      "role": "Founder/CEO",
      "initials": "ZG",
      "bio": "Pharmacist with experience managing hospital medicine procurement.",
      "focus": [
        "Pharmacy practice",
        "Procurement",
        "Health partnerships"
      ]
    },
    {
      "name": "Emeka Okorie",
      "role": "Co-founder",
      "initials": "EO",
      "bio": "Healthcare supply chain specialist.",
      "focus": [
        "Supply chain",
        "Distribution",
        "Operations"
      ]
    },
    {
      "name": "Ebiere Amakiri",
      "role": "CTO",
      "initials": "EA",
      "bio": "Data scientist focused on forecasting and inventory optimisation.",
      "focus": [
        "Forecasting",
        "Inventory optimisation",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "What data does Medvora need?",
      "Dispensing or issue records, stock counts and delivery history by medicine and facility. No patient-identifiable information is needed."
    ],
    [
      "How accurate are the forecasts?",
      "Accuracy depends on the history available, so every forecast carries a confidence range. A pilot measures accuracy against your actual dispensing before anyone relies on it."
    ],
    [
      "Can it work with paper stock cards?",
      "A pilot can start from digitised stock-card data. Facilities with fewer records get wider confidence ranges until history builds up."
    ],
    [
      "Is Medvora a live product?",
      "Not yet. Medvora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Medvora flags, ranks and explains. Pharmacists and stores managers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Medvora exists",
    "manifesto": "A patient should never be told a basic medicine is out of stock while the same medicine expires in a store across town. The information to prevent it already exists. We want to put it to work.",
    "purpose": "Keep essential medicines available where patients need them, by planning supply from real demand.",
    "why": "When medicines run out, patients pay more elsewhere, go without, or buy from unreliable sources. When stock expires, scarce budgets are wasted. Better planning helps on both fronts.",
    "stakesTitle": "Why reliable medicine supply matters.",
    "stats": [
      {
        "value": 10.5,
        "dec": 1,
        "suffix": "%",
        "label": "Estimated failure rate of medical products in low- and middle-income countries, often where genuine supply is unreliable.",
        "source": "World Health Organization, 2017",
        "url": "https://www.who.int/news/item/28-11-2017-1-in-10-medical-products-in-developing-countries-is-substandard-or-falsified"
      },
      {
        "value": 169,
        "prefix": "Up to ",
        "suffix": "k",
        "label": "Children modelled to die each year from pneumonia treated with substandard or falsified antibiotics.",
        "source": "World Health Organization, 2017",
        "url": "https://www.who.int/news/item/28-11-2017-1-in-10-medical-products-in-developing-countries-is-substandard-or-falsified"
      },
      {
        "value": 76.6,
        "dec": 1,
        "suffix": "%",
        "label": "Share of Nigeria’s current health expenditure paid out of pocket (2018), so stock-outs fall hardest on patients.",
        "source": "Africa Check, citing WHO data",
        "url": "https://africacheck.org/fact-checks/reports/nigerias-central-bank-governor-money-about-health-insurance-and-out-pocket"
      }
    ],
    "changeTitle": "From copying last quarter’s order to planning from demand.",
    "before": [
      "Requisitions copied forward from the last order",
      "Seasonal shortages repeating every year",
      "Expiries found at the annual stock-take",
      "No view of stock at other facilities"
    ],
    "after": [
      "Orders based on forecast demand and lead time",
      "Seasonal peaks anticipated weeks ahead",
      "Expiry risks flagged with a transfer suggestion",
      "Stock visible across the whole network"
    ],
    "principlesTitle": "What we believe about medicine supply.",
    "principles": [
      [
        "Patients first",
        "Recommendations are ranked by clinical priority, not just value."
      ],
      [
        "Uncertainty is information",
        "Every forecast shows its range, so teams can plan for it."
      ],
      [
        "Pharmacists decide",
        "Medvora suggests; qualified people approve every order and transfer."
      ],
      [
        "No patient data needed",
        "Forecasts use aggregate dispensing, never individual records."
      ],
      [
        "Work with real systems",
        "From stock cards to ERP exports, start where teams are."
      ],
      [
        "Waste is a cost to care",
        "Every expired pack is budget that could have treated someone."
      ]
    ],
    "letterTitle": "Why we are building Medvora.",
    "letter": [
      "Zainab managed hospital procurement and knew the feeling of a ward calling for a medicine she could not supply, while months later the stock-take found boxes of something else past expiry.",
      "Emeka had spent his career moving health commodities and saw that the problem was rarely the warehouse. It was the forecast. Ebiere had built forecasting models and believed they should show their uncertainty, not hide it.",
      "Medvora is the tool we wished we had: one that turns the records pharmacy teams already keep into clear, honest recommendations, and leaves every decision with the people accountable for patient care."
    ],
    "visionTitle": "Where Medvora is going.",
    "visionIntro": "From a single pharmacy to a connected medicine supply network.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with pharmacy teams."
      },
      {
        "stage": "Next",
        "title": "Facility pilots",
        "text": "Back-testing forecasts against historical dispensing with early partners."
      },
      {
        "stage": "Then",
        "title": "Network planning",
        "text": "Transfers and procurement plans across groups of facilities."
      },
      {
        "stage": "Later",
        "title": "Supply chain visibility",
        "text": "Shared demand signals between facilities, stores and suppliers."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Replenishment review",
    "subtitle": "Forecast-driven order, transfer and expiry recommendations across facilities, for pharmacist approval.",
    "itemNoun": "recommendation",
    "itemNounPlural": "recommendations",
    "groupLabel": "facility",
    "queueTitle": "Recommendation queue",
    "humanNote": "Recommendations are suggestions. Pharmacists approve every order and transfer.",
    "decisions": {
      "confirm": "Approve",
      "dismiss": "Decline",
      "escalate": "Refer to stores manager"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Chief Pharmacist",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Pharmacist",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Inventory Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Procurement Auditor",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which recommendations need review first?",
      "Summarise the review status",
      "Show General Hospital East",
      "Explain MED-203"
    ],
    "refuse": "\\b(prescri|dose|dosage|diagnos|substitut|treat(ment)?\\b|which drug should)",
    "refuseText": "Medvora can explain stock and demand, but prescribing, dosing, substitution and treatment decisions belong to qualified clinicians.",
    "refuseExamples": [
      "What dose of amoxicillin should a child get?",
      "Can we substitute artemether for this patient?",
      "Should I prescribe ceftriaxone instead?"
    ]
  },
  "slug": "medvora",
  "url": "https://www.medvora.com",
  "email": "hello@medvora.com",
  "stepsNote": "Medvora recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every recommendation is confirmed, dismissed or escalated by pharmacists and stores managers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the dispensing records, stock counts and delivery history behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Medvora would run in production: ingestion of dispensing records, stock counts and delivery history, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for dispensing records, stock counts and delivery history."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Demand forecasts per facility and medicine, with confidence ranges, expiry-risk scores and transfer recommendations explained by their drivers."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Medvora with your own team.",
    "text": "We are looking for a small number of early partners to shape Medvora. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
