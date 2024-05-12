export const AI = (app) => {
    app.get("/ai/gpt", (req, res)=> {
        res.send(`Requesting from ChatGPT`);
    });
    app.get("/ai/gemini", (req, res)=> {
        res.send(`Requesting from Gemini`);
    });
}