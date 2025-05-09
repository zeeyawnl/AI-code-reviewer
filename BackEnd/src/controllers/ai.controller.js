const aiService = require("../service/ai.service");

module.exports.getResponse = async (req, res) => {
    try {
        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).send("Prompt is required");
        }

        const response = await aiService(prompt);
        res.send(response);
    } catch (err) {
        console.error("Error in getResponse:", err);
        res.status(500).send("Something went wrong");
    }
};
