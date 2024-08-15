const api_key = "AIzaSyC5W23JvbHAEVb5ob-8vXwmOXIzjxp36eE";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyCaqmKS0zNcfRCPAIMq7uXxMAdLOD-hZWM";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const Response2 = result.response;
    console.log(Response2.text());
    return Response2.text();
    
  } catch (error) {
    console.error("Failed to generate response", error);
    return "Failed to generate response";
  }
}

export default run;
