// const aiService=require('../services/ai.service'); // we require the ai service export part generate content in aiServices

// module.exports.getRespnse=async(req,res)=>{
//     const prompt=req.query.prompt;
//     if(!prompt){
//         return res.status(400).json({error:"Prompt is required"});
//     }

//     const response=await aiService(prompt);
//     res.send(response);
const { generateAI } = require("../services/ai.service");

exports.getReview = async (req, res) => {
  try {
    const prompt = req.body.code;
    const result = await generateAI(prompt);
    res.json({ response: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
