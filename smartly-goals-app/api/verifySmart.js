import { InferenceClient } from "@huggingface/inference"

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" })
  }

  const { section, text, desc } = req.body

  if (!section || !text) {
    return res.status(400).json({ error: "Missing section or text" })
  }

  const SYSTEM_PROMPT = `
You are an expert SMART goal evaluator.
Given the user's text for one SMART category (S, M, A, R, or T),
provide corrections and suggestions ONLY if needed.
Keep the feedback short, constructive, and clear.
Use the ${desc} as part of guidance for your feedback. 
Return ONLY the improved version and a 1-sentence justification.
`;

  try {
    const response = await hf.chatCompletion({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: 
          `Section: ${section}\nUser text: "${text}"\nPlease evaluate and improve.` 
        },
      ],
      max_tokens: 400,
    })

    const aiMessage = response.choices[0].message.content

    res.status(200).json({ result: aiMessage })
  } catch (error) {
    console.error("AI ERROR:", error)
    res.status(500).json({ error: "AI request failed" })
  }
}