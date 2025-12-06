import { InferenceClient } from "@huggingface/inference"

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" })
  }

  try {
    const {messages} = req.body
    const response = await hf.chatCompletion({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages,
      max_tokens: 400,
    })

    const aiMessage = response.choices[0].message.content

    res.status(200).json({ result: aiMessage })
    
  } catch (error) {
    console.error("AI ERROR:", error)
    res.status(500).json({ error: "AI request failed" })
  }
}