export interface Scheme {
  id: string;
  name: string;
  benefitDescription: string;
  benefitAmount: string;
  eligibilityCriteria: string[];
  category: string;
  frequency: string;
}

export const SCHEMES_DATA: Record<string, Scheme> = {
  "pm-kisan": {
    id: "pm-kisan",
    name: "PM Kisan Samman Nidhi",
    benefitDescription: "Direct income support for landholding farmers",
    benefitAmount: "₹6,000",
    frequency: "YEAR",
    eligibilityCriteria: [
      "Land ownership on record: up to 2 hectares",
      "Must have an active bank account linked to Aadhaar",
      "Not an institutional landholder or tax payer"
    ],
    category: "Agriculture"
  },
  "pm-awas": {
    id: "pm-awas",
    name: "Pradhan Mantri Awas Yojana",
    benefitDescription: "Financial assistance for housing construction",
    benefitAmount: "₹1,20,000",
    frequency: "TOTAL",
    eligibilityCriteria: [
      "Must not own a pucca house anywhere in India",
      "Annual household income below ₹3,00,000",
      "Beneficiary family should not have availed central assistance under any housing scheme"
    ],
    category: "Housing"
  },
  "nsap": {
    id: "nsap",
    name: "National Social Assistance Programme",
    benefitDescription: "Financial support for elderly, widows, and disabled persons",
    benefitAmount: "₹1,000",
    frequency: "MONTH",
    eligibilityCriteria: [
      "Must belong to a Below Poverty Line (BPL) household",
      "Age above 60 years for Old Age Pension",
      "Medical certification required for Disability Pension"
    ],
    category: "Pension"
  },
  "sukanya-samriddhi": {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana",
    benefitDescription: "High-interest savings scheme for girl child education and marriage",
    benefitAmount: "8.2%",
    frequency: "INTEREST",
    eligibilityCriteria: [
      "Girl child below 10 years of age",
      "Maximum of two accounts per family",
      "Minimum deposit of ₹250 per year"
    ],
    category: "Women & Child"
  },
  "ayushman-bharat": {
    id: "ayushman-bharat",
    name: "Ayushman Bharat",
    benefitDescription: "Health insurance coverage for secondary and tertiary care hospitalization",
    benefitAmount: "₹5,00,000",
    frequency: "YEAR/FAMILY",
    eligibilityCriteria: [
      "Identified under SECC 2011 data",
      "No cap on family size or age",
      "Includes pre-existing conditions from day one"
    ],
    category: "Health"
  },
  "post-matric": {
    id: "post-matric",
    name: "Post Matric Scholarship",
    benefitDescription: "Financial assistance to students studying at post matriculation or post-secondary stage",
    benefitAmount: "Varies",
    frequency: "YEAR",
    eligibilityCriteria: [
      "Must be from SC/ST/OBC category",
      "Parental income not exceeding ₹2,50,000 per annum",
      "Must be studying in a recognized institution"
    ],
    category: "Education"
  },
  "atal-pension": {
    id: "atal-pension",
    name: "Atal Pension Yojana",
    benefitDescription: "Guaranteed minimum pension for unorganized sector workers",
    benefitAmount: "Up to ₹5,000",
    frequency: "MONTH",
    eligibilityCriteria: [
      "Citizen of India between 18-40 years",
      "Must have a savings bank account",
      "Contributions depend on age of joining and chosen pension amount"
    ],
    category: "Pension"
  },
  "mgnrega": {
    id: "mgnrega",
    name: "MGNREGA",
    benefitDescription: "Guaranteed 100 days of wage employment in a financial year",
    benefitAmount: "₹250+",
    frequency: "DAY",
    eligibilityCriteria: [
      "Must be a citizen of India above 18 years",
      "Reside in rural areas",
      "Willing to do unskilled manual work"
    ],
    category: "Employment"
  }
};
