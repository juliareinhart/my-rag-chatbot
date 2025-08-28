// test-doc-selector.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const question =
  process.argv[2] || "How do I create a work order in the system?";

const fileOptions = [
  {
    filename: "CH1 - Work Orders.txt",
    description: "Main documentation about work order lifecycle and planning",
  },
  {
    filename: "CH1_3 - CM Templates.txt",
    description:
      "Instructions for creating and using Corrective Maintenance (CM) work order templates without schedules",
  },
  {
    filename: "CH2 - Preventative Maintenance.txt",
    description:
      "Details about scheduling and maintaining preventative maintenance (PM) tasks",
  },
  {
    filename: "CH3 - Work Request and Portal.txt",
    description:
      "Guide for submitting, managing, and configuring Work Requests through the portal and internal system",
  },
  {
    filename: "CH4 - Notifications.txt",
    description:
      "Instructions for setting up and managing email, SMS, and internal notifications for work orders and requests",
  },
  {
    filename: "CH5 - Assets.txt",
    description:
      "Comprehensive guide to managing enterprise assets including asset types, customization, meters, failure analysis, and reporting",
  },
  {
    filename: "CH5_2 - Asset Assessments.txt",
    description:
      "Instructions for configuring and recording asset condition assessments, including rating scales and historical analysis",
  },
  {
    filename: "CH5_3 - Asset Acquisitions.txt",
    description:
      "Guide for entering and managing asset acquisitions, including bulk entry and birth certificate creation for new or existing assets",
  },
  {
    filename: "CH5_4 - Asset Disposals.txt",
    description:
      "Instructions for retiring assets using the Disposal tool, including status tracking, validation checks, and asset reactivation",
  },
  {
    filename: "CH5_5 - Asset Deficiencies.txt",
    description:
      "Guide for using the optional Asset Deficiencies module to document field issues, integrate with GIS, and generate Work Orders",
  },
  {
    filename: "CH6 - Mobile Work Order.txt",
    description:
      "Mobile Work Order guide for using MaintStar on phones and tablets to view, edit, and close work orders, sync GIS data, and operate offline with LEM and asset features",
  },
  {
    filename: "CH7 - KPI Dashboards.txt",
    description:
      "Guide for creating, customizing, and using KPI dashboards to visualize performance data with charts, filters, and SQL-based datasets",
  },
  {
    filename: "CH8.2 - Inventory ABC Cycle Counts.txt",
    description:
      "Instructions for setting up and managing ABC inventory cycle counts in MaintStar, including category setup, warehouse filters, counting sheets, and adjustment transactions",
  },
  {
    filename: "CH9 - Asset Lifecycle Module.txt",
    description:
      "Comprehensive guide to the Asset Lifecycle Module in MaintStar, including setup and use of COF, POF, Criticality, Ratings, EOL factors, and Capital Planning tools",
  },
  {
    filename: "CH9_3 - Work Planning Module.txt",
    description:
      "Outlines the use of Work Planning in MaintStar EAMS v15 for evaluating activities, optimizing resources, and comparing planned versus actual performance using Activity-Based Management strategies",
  },
];

/*const selectionPrompt = `
You're an AI assistant helping match user questions with relevant documents.

User question: "${question}"

Available documents:
${fileOptions
  .map((f, i) => `${i + 1}. ${f.filename} - ${f.description}`)
  .join("\n")}

Which files (filenames) are most likely to contain the answer? Respond with a JSON array of filenames.
`;*/

const systemPrompt = `
You are a helpful assistant that selects filenames most likely to contain the answer to a user's question.

You will be given:
- A user question
- A list of document objects with "filename" and "description" fields

Return ONLY valid JSON in this format:
{"filenames": ["<filename1>", "<filename2>"]}

Rules:
- Only include filenames from the list
- Do NOT guess or create filenames
- Do NOT return explanations or extra text
`;

const userPrompt = `
User question: "${question}"

Available documents:
${JSON.stringify(fileOptions, null, 2)}

Your response:
`;

async function run() {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const output = response?.data?.choices?.[0]?.message?.content;
    console.log("🎯 Raw AI output:", output);

    // ✅ Add this check immediately after
    try {
      const parsed = JSON.parse(output);
      console.log("✅ Parsed filenames:", parsed.filenames);
    } catch (e) {
      console.error("❌ Output was not valid JSON:", output);
    }
  } catch (err) {
    console.error("❌ Failed to query OpenAI:", err.message);
  }
}

run();
