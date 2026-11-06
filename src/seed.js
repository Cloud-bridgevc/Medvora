// Fictional sample data for the Medvora prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Dr Ngozi Eze",
      "role": "Chief Pharmacist"
    },
    {
      "name": "Aliyu Musa",
      "role": "Pharmacist"
    },
    {
      "name": "Grace Udo",
      "role": "Pharmacist"
    },
    {
      "name": "Kunle Ajayi",
      "role": "Inventory Analyst"
    },
    {
      "name": "Rakiya Sule",
      "role": "Procurement Auditor"
    }
  ],
  "items": [
    {
      "id": "MED-201",
      "title": "Amoxicillin 500mg caps — reorder",
      "subtitle": "Forecast stock-out in about 9 days",
      "group": "General Hospital East",
      "metrics": [
        [
          "On hand",
          "410 packs"
        ],
        [
          "Forecast use (30d)",
          "1,840 ± 210"
        ],
        [
          "Lead time",
          "21 days"
        ],
        [
          "Suggested order",
          "2,000 packs"
        ]
      ],
      "flags": [
        {
          "label": "Stock-out risk",
          "severity": "high",
          "confidence": 0.89,
          "explanation": "Dispensing rose 34% over six weeks, in line with the seasonal pattern for respiratory infections. At current use, stock lasts about 9 days against a 21-day lead time.",
          "evidence": [
            [
              "Avg daily use (6 wk)",
              "61 packs",
              "Dispensing records"
            ],
            [
              "Same period last year",
              "+29%",
              "Dispensing history"
            ],
            [
              "Supplier lead time",
              "21 days (median)",
              "Delivery history"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-202",
      "title": "Artemether-lumefantrine — transfer",
      "subtitle": "Excess stock at risk of expiry; nearby shortage",
      "group": "Central Medical Store",
      "metrics": [
        [
          "On hand",
          "3,200 packs"
        ],
        [
          "Expiring in 60d",
          "1,150 packs"
        ],
        [
          "Forecast use (60d)",
          "620"
        ],
        [
          "Transfer to",
          "PHC Ward 3"
        ]
      ],
      "flags": [
        {
          "label": "Expiry risk",
          "severity": "medium",
          "confidence": 0.82,
          "explanation": "About 530 packs are likely to expire before use. PHC Ward 3 is forecast to need 600 packs in the same period and holds 90.",
          "evidence": [
            [
              "Expiry batch",
              "1,150 packs · Jun 2026",
              "Stock register"
            ],
            [
              "PHC Ward 3 forecast",
              "600 packs / 60d",
              "Forecast model"
            ],
            [
              "Distance",
              "14 km",
              "Facility register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-203",
      "title": "Oxytocin 10IU — cold chain reorder",
      "subtitle": "Below safety stock in maternity",
      "group": "General Hospital East",
      "metrics": [
        [
          "On hand",
          "120 ampoules"
        ],
        [
          "Safety stock",
          "300"
        ],
        [
          "Forecast use (30d)",
          "410 ± 60"
        ],
        [
          "Clinical priority",
          "Essential"
        ]
      ],
      "flags": [
        {
          "label": "Below safety stock",
          "severity": "high",
          "confidence": 0.93,
          "explanation": "Stock is under the safety level for an essential maternal medicine. Deliveries were delayed twice this quarter.",
          "evidence": [
            [
              "Safety stock",
              "300 ampoules",
              "Formulary settings"
            ],
            [
              "Last two deliveries",
              "+9 and +12 days late",
              "Delivery history"
            ],
            [
              "Births (30d)",
              "+8%",
              "Ward activity summary"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-204",
      "title": "ORS sachets — seasonal uplift",
      "subtitle": "Rainy-season demand expected to double",
      "group": "PHC Ward 3",
      "metrics": [
        [
          "On hand",
          "900 sachets"
        ],
        [
          "Forecast use (45d)",
          "2,300 ± 500"
        ],
        [
          "Seasonal factor",
          "×2.1"
        ],
        [
          "Suggested order",
          "1,800"
        ]
      ],
      "flags": [
        {
          "label": "Seasonal demand",
          "severity": "medium",
          "confidence": 0.71,
          "explanation": "ORS demand doubled at the start of the last two rainy seasons. Forecast range is wide because the facility has only two years of history.",
          "evidence": [
            [
              "Rainy-season uplift",
              "×2.1 (2 seasons)",
              "Dispensing history"
            ],
            [
              "History available",
              "24 months",
              "Data quality check"
            ],
            [
              "Rainfall outlook",
              "Above average",
              "Weather service feed"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-205",
      "title": "Metformin 500mg — order reduction",
      "subtitle": "Requisition far above forecast demand",
      "group": "St. Luke’s Clinic",
      "metrics": [
        [
          "Requisitioned",
          "5,000 tabs ×100"
        ],
        [
          "Forecast use (90d)",
          "1,700 ± 150"
        ],
        [
          "On hand",
          "2,100"
        ],
        [
          "Suggested order",
          "0"
        ]
      ],
      "flags": [
        {
          "label": "Over-ordering",
          "severity": "low",
          "confidence": 0.86,
          "explanation": "The requisition repeats last quarter’s figure. Stock on hand already covers about 110 days of forecast use.",
          "evidence": [
            [
              "Requisition",
              "5,000 (same as Q4)",
              "Requisition form"
            ],
            [
              "Days of cover",
              "~110 days",
              "Forecast model"
            ],
            [
              "Shelf life left",
              "14 months",
              "Stock register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-206",
      "title": "Ceftriaxone 1g inj — supplier delay",
      "subtitle": "Open order overdue by 12 days",
      "group": "Teaching Hospital Pharmacy",
      "metrics": [
        [
          "Open order",
          "3,000 vials"
        ],
        [
          "Due",
          "28 Mar"
        ],
        [
          "Overdue",
          "12 days"
        ],
        [
          "Days of cover",
          "6"
        ]
      ],
      "flags": [
        {
          "label": "Supplier delay",
          "severity": "high",
          "confidence": 0.77,
          "explanation": "The order is 12 days overdue and stock covers about 6 days. An alternative approved supplier delivered within 10 days last year.",
          "evidence": [
            [
              "Order status",
              "Overdue · 12 days",
              "Purchase orders"
            ],
            [
              "Days of cover",
              "6 days",
              "Forecast model"
            ],
            [
              "Alternative supplier",
              "Median 10-day lead time",
              "Delivery history"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-207",
      "title": "Insulin (soluble) — cold chain check",
      "subtitle": "Dispensing dropped sharply",
      "group": "St. Luke’s Clinic",
      "metrics": [
        [
          "Use (last 30d)",
          "42 vials"
        ],
        [
          "Use (prior avg)",
          "118 vials"
        ],
        [
          "Change",
          "−64%"
        ],
        [
          "Fridge log gaps",
          "3 days"
        ]
      ],
      "flags": [
        {
          "label": "Unusual drop",
          "severity": "low",
          "confidence": 0.58,
          "explanation": "A sudden fall in dispensing may reflect data-entry gaps, a closed clinic day or a patient referral change. The forecast is held until confirmed.",
          "evidence": [
            [
              "Dispensing change",
              "−64%",
              "Dispensing records"
            ],
            [
              "Missing entries",
              "3 days",
              "Data quality check"
            ],
            [
              "Clinic closure",
              "Not recorded",
              "Facility calendar"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-208",
      "title": "Paracetamol 500mg — transfer",
      "subtitle": "Excess at one branch, shortage at another",
      "group": "Teaching Hospital Pharmacy",
      "metrics": [
        [
          "On hand",
          "14,000 tabs"
        ],
        [
          "Forecast use (60d)",
          "6,200"
        ],
        [
          "Transfer to",
          "Outpatient Pharmacy"
        ],
        [
          "Qty",
          "5,000"
        ]
      ],
      "flags": [
        {
          "label": "Rebalance stock",
          "severity": "low",
          "confidence": 0.8,
          "explanation": "Main store holds more than twice its forecast need while the outpatient pharmacy is forecast to run out in 12 days.",
          "evidence": [
            [
              "Main store cover",
              "135 days",
              "Forecast model"
            ],
            [
              "Outpatient cover",
              "12 days",
              "Forecast model"
            ],
            [
              "Expiry",
              "Feb 2027",
              "Stock register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "MED-209",
      "title": "Zinc sulphate 20mg — on track",
      "subtitle": "Stock and pipeline match forecast",
      "group": "PHC Ward 3",
      "metrics": [
        [
          "On hand",
          "1,200 tabs"
        ],
        [
          "Forecast use (60d)",
          "980 ± 90"
        ],
        [
          "Pipeline",
          "0"
        ],
        [
          "Status",
          "Adequate"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
