const PLAYBOOK = [
  {
    "title": "The commission rate is too high.",
    "ack": "I understand. Every cost matters.",
    "discovery": "What concerns you most about the commission rate?",
    "extra": [],
    "scenarios": [
      {
        "letter": "A",
        "title": "The merchant does not understand the charges",
        "ack": "I understand. You want to know what you are paying and why.",
        "questions": [
          "Which charge are you referring to?",
          "Are you referring to commission, ad charges, or promotion costs?",
          "Would you like us to review the charges together?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Let's separate the charges first. Commission, ads, and promotions are different costs. Once we understand what you are paying, we can check whether a campaign fits your budget and margins.",
        "closing": "Let's review the campaign costs alongside your commission and margins, then choose the setup that fits your business. Open the Marketing tab, and I'll guide you through it."
      },
      {
        "letter": "B",
        "title": "The merchant wants more value from DoorDash",
        "ack": "I understand. You want the sales you receive to justify the cost.",
        "questions": [
          "What results would make DoorDash more valuable to your business?",
          "Which days need more orders?",
          "Are you looking for new customers or more orders from existing customers?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Based on what you shared, your goal is [merchant's goal]. An ad can help customers discover your restaurant. A promotion gives them an offer to consider. Let's review which option supports your goal and what it would cost.",
        "closing": "Let's set up a campaign focused on [merchant's goal]. Open the Marketing tab, and we'll review the available options and choose your budget."
      },
      {
        "letter": "C",
        "title": "The merchant has tight margins",
        "ack": "I understand. Every cost matters when your margins are tight.",
        "questions": [
          "Which menu items have your best margins?",
          "How much room do you have for marketing costs?",
          "Would offering a discount leave enough profit?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "If a discount would hurt your margins, a promotion may not be the right first step. We can review an ad instead and check whether its cost leaves enough margin. If neither option works, we should address profitability first.",
        "closing": "Let's check the ad cost against your margins and choose a budget that works. If the numbers leave enough margin, we'll walk through the setup together in your account."
      }
    ]
  },
  {
    "title": "I'm not interested.",
    "ack": "I understand. Thank you for letting me know.",
    "discovery": "May I ask what makes you feel that way?",
    "extra": [],
    "scenarios": [
      {
        "letter": "A",
        "title": "The merchant is busy",
        "ack": "I understand. You are busy, and I want to respect your time.",
        "questions": [
          "Would another time work better for a short conversation?",
          "What day and time would be convenient?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "We can review this whenever you have more time. I can keep this conversation focused on operational support, menu optimization, and your sales goals.",
        "closing": "Let's schedule a short review. Does [day] at [time] work, or is another time better?"
      },
      {
        "letter": "B",
        "title": "The merchant does not see a need",
        "ack": "I understand. You want a clear reason to consider a campaign.",
        "questions": [
          "How do you feel about your current DoorDash sales?",
          "Which days, if any, could use more orders?",
          "What would you like to improve in your business?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Based on what you shared, you would like to improve [merchant's goal]. An ad or promotion may help with that specific goal. We can review one option and its cost before you decide.",
        "closing": "Let's review the campaign that best supports [merchant's goal] and choose a budget that works for your business. Open the Marketing tab, and I'll walk you through the options."
      },
      {
        "letter": "C",
        "title": "The merchant expects marketing to be expensive",
        "ack": "I understand. You want to be careful with your spending.",
        "questions": [
          "Which cost concerns you most?",
          "Have you used ads or promotions before?",
          "What budget, if any, would you feel comfortable considering?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Let's review the actual cost before you decide. We can check the available budget settings and see whether there is an option that fits your business.",
        "closing": "Let's review the actual campaign costs and choose a setup within your budget. Open the Marketing tab, and I'll guide you through the available settings."
      }
    ]
  },
  {
    "title": "I tried marketing campaigns before and didn't see results.",
    "ack": "I understand. It is disappointing when a campaign does not meet your expectations.",
    "discovery": "What made you feel the campaigns did not work?",
    "extra": [
      "What type of campaign did you try: Sponsored Listings, promotions, or both?",
      "What offer or campaign setup did you use?"
    ],
    "scenarios": [
      {
        "letter": "A",
        "title": "The campaign generated few orders",
        "ack": "I understand. You expected more orders from the campaign.",
        "questions": [
          "What results were you expecting?",
          "When did the campaign run, and for how long?",
          "Can we review its spending, orders, and sales together?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Let's review what happened before asking you to try again. We can check the campaign type and results, menu, and store availability. Then we can see whether there is a clear reason to test a different approach.",
        "closing": "Let's build the new test around [identified change], set your budget, and schedule the results review for [date]. Open the Marketing tab, and I'll walk you through the setup."
      },
      {
        "letter": "B",
        "title": "The campaign produced sales but little profit",
        "ack": "I understand. Sales alone are not enough if the orders do not make money.",
        "questions": [
          "How did the campaign costs affect your profit?",
          "Were ads and promotions running at the same time?",
          "Did you review your margin after food, packaging, commission, discounts, and marketing costs?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Let's review all the costs together. If ads and promotions applied to the same orders, we need to account for both. Before restarting, we need to check whether a different setup could leave enough margin.",
        "closing": "Let's review the revised campaign costs against your margins and set a budget that works. Once those numbers make sense, we'll walk through the setup in your account."
      },
      {
        "letter": "C",
        "title": "The merchant could not tell whether it worked",
        "ack": "I understand. You need clear results to decide whether a campaign is worthwhile.",
        "questions": [
          "Which results did you review?",
          "Were you able to find the campaign report?",
          "What result would make a campaign worthwhile for you?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "We can agree on what to measure before starting and review the reports available for the campaign type. Sales attributed to a campaign do not automatically mean profit or prove that every order was additional business. We should review your costs and compare performance with your goal.",
        "closing": "Let's agree on your budget, success measures, and follow-up date, then walk through the campaign setup together in your account."
      }
    ]
  },
  {
    "title": "I'm not making any profits after fees and commission.",
    "ack": "I understand. More orders need to leave money in your pocket.",
    "discovery": "What do you think is affecting your profit the most?",
    "extra": [],
    "scenarios": [
      {
        "letter": "A",
        "title": "Menu pricing or item costs are the problem",
        "ack": "I understand. More orders would not help if your item margins are too low.",
        "questions": [
          "Which items leave you the least margin?",
          "When did you last review your menu prices and food costs?",
          "Which items leave you the most margin?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Let's review those items first. We need to know whether your orders leave enough margin before adding marketing costs. Once that is clear, we can evaluate a campaign.",
        "closing": "Let's review your item margins first and identify what needs to improve. Once there is room for marketing costs, we'll choose a campaign that fits."
      },
      {
        "letter": "B",
        "title": "Promotions are costing too much",
        "ack": "I understand. A discount can increase sales and still leave too little profit.",
        "questions": [
          "Which promotion are you running?",
          "What are you paying for the discount and marketing fees?",
          "What is your average order value?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "We can review whether a different available offer would fit your margins better. We can also compare it with an ad without a promotion. The goal is to find an option with costs you can afford.",
        "closing": "Let's compare the available setups and choose one that fits your margins. Open the Marketing tab, and I'll guide you through the costs and settings."
      },
      {
        "letter": "C",
        "title": "Slow periods leave unused capacity",
        "ack": "I understand. Slow periods can make it harder to cover your expenses.",
        "questions": [
          "Which days or hours are slowest?",
          "Can your current team handle more orders during those periods?",
          "After all additional costs, would those orders leave money for your business?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "If those orders leave a positive contribution after additional costs, they can help cover part of your existing expenses. We can check whether the available campaign settings let us focus on those slower periods.",
        "closing": "Let's check the margins and available scheduling settings for [slower periods]. If both work, we'll set up the campaign around those periods in your account."
      }
    ]
  },
  {
    "title": "I need to think about it / I need to speak with my partner.",
    "ack": "Of course. You should feel comfortable before making a decision.",
    "discovery": "What is your main concern about moving forward?",
    "extra": [],
    "scenarios": [
      {
        "letter": "A",
        "title": "The partner needs to approve",
        "ack": "Of course. It makes sense to include your partner in the decision.",
        "questions": [
          "What information will your partner need?",
          "What questions do you expect them to ask?",
          "Would a conversation with both of you help?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "I can review the goal, costs, and available settings with both of you. That way, you can ask questions and make the decision together.",
        "closing": "Let's schedule a review with both of you so we can cover the goal, costs, and settings together. What day and time works for you and your partner?"
      },
      {
        "letter": "B",
        "title": "The merchant still has questions",
        "ack": "Absolutely. You should have the information you need before making a decision.",
        "questions": [
          "What would you like to understand better?",
          "What questions do you have about the cost or how the campaign works?",
          "What information would help you decide?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "Let's go through that point together. I can explain the available options and costs so you have the information you need.",
        "closing": "Now that we've addressed [merchant's concern], let's walk through the campaign setup. Open the Marketing tab, and we'll review the budget and details together."
      },
      {
        "letter": "C",
        "title": "The timing or budget is uncertain",
        "ack": "I understand. The timing and budget need to work for your business.",
        "questions": [
          "When would you feel ready to consider a campaign?",
          "What needs to happen before then?",
          "What budget would you want to review?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "We can plan around that timing. Let's agree on your goal and the budget you want to consider, then revisit the campaign when you are ready.",
        "closing": "Let's schedule our follow-up for [date], after [merchant's stated condition]. What time works best?"
      }
    ]
  },
  {
    "title": "I can't handle more orders. My business is too small.",
    "ack": "I understand. You need to protect your team and your customer experience.",
    "discovery": "What makes you concerned about taking more orders?",
    "extra": [],
    "scenarios": [
      {
        "letter": "A",
        "title": "Peak hours are already full",
        "ack": "I understand. You need to protect your service during busy hours.",
        "questions": [
          "Which hours are already at capacity?",
          "When does your kitchen have room for more orders?",
          "Would extra orders during those slower periods help?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "We can check whether your available campaign settings allow us to focus on those slower periods. That could support your sales goal while respecting your kitchen's limits.",
        "closing": "Let's check the available scheduling settings and focus on [slower periods]. If that schedule is available, we'll walk through the campaign setup in your account."
      },
      {
        "letter": "B",
        "title": "Staffing is limited throughout the day",
        "ack": "I understand. Your team can only handle so much.",
        "questions": [
          "How is staffing affecting the number of orders you can handle?",
          "Are there any days when you have extra capacity?",
          "What would need to change before you could accept more orders?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "If your team is at capacity all day, starting a campaign now may create more pressure. We can plan for a time when you have enough staff and capacity.",
        "closing": "Let's revisit the campaign once [merchant's stated condition] changes. When should we check back on your capacity?"
      },
      {
        "letter": "C",
        "title": "The merchant fears a sudden increase in orders",
        "ack": "I understand. You want to grow at a pace your team can handle.",
        "questions": [
          "Have you had problems with a sudden increase in orders before?",
          "When can your kitchen comfortably handle more orders?",
          "What signs would tell you that demand is becoming too much?"
        ],
        "confirm": "So your main concern is [summarize the merchant's actual answer]. Did I understand that correctly?",
        "rebuttal": "We can review the budget and scheduling controls available in your account. They do not guarantee a specific number of orders, so we should also agree on when to review, adjust, or pause the campaign.",
        "closing": "Let's choose your budget, review the available scheduling controls, and agree on when to adjust or pause. Then we'll walk through the setup together in your account."
      }
    ]
  }
];
