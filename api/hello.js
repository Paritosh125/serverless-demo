export default function handler(req, res) {
    const name = req.query.name || "Guest";
    res.status(200).send(`Hello ${name}, this is a Serverless Function on Vercel!`);
}
