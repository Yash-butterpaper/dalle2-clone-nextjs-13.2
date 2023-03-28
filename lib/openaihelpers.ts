import openai from "@/openai";

const generateSuggession = async () => {
    
  const response = await openai.createCompletion({
    prompt: "Write a random text prompt for DALL.E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes.",
    max_tokens: 50,
    temperature: 0.9,
    model: "text-davinci-003",
  })

  const responseText = response.data.choices[0].text?.trim();

  return responseText;
  
}

export { generateSuggession };