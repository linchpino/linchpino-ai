export const ModelRoutes = (app) => {
    app.get("/models", (req, res)=> {
        res.send('This is the current model...');
    });
}