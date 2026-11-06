import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "huggingface_TOKEN";

const inference = new HfInference(HF_TOKEN);


await inference.translation({
  model: 't5-base',
  inputs: 'My name is Wolfgang and I live in Amsterdam'
})

await inference.textToImage({
  model: 'stabilityai/stable-diffusion-2',
  inputs: 'award winning high resolution photo of a giant tortoise/((ladybird)) hybrid, [trending on artstation]',
  parameters: {
    negative_prompt: 'blurry',
  }
})

await inference.imageToText({
  data: await (await fetch('https://picsum.photos/300/300')).blob(),
  model: 'nlpconnect/vit-gpt2-image-captioning',  
})

// Using your own dedicated inference endpoint: https://hf.co/docs/inference-endpoints/
const gpt2 = inference.endpoint('https://xyz.eu-west-1.aws.endpoints.huggingface.cloud/gpt2');
const { generated_text } = await gpt2.textGeneration({inputs: 'The answer to the universe is'});
