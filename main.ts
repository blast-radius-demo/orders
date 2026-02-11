import express from "express";

const PORT = Number(process.env.PORT ?? 3002)
const AUTH_URL = process.env.AUTH_URL ?? 'http://localhost:3001'

const app = express();
app.use(express.json());
app.get("/health", (_, res) => res.json({ok: true}));

interface CreateOrderDto {
    userId: number;
}

app.post("/orders", async (req, res) => {
    const body: CreateOrderDto = req.body;

    const response = await fetch(`${AUTH_URL}/user/${body.userId}`);
    const user = await response.json();

    if (typeof user.userId !== "number") {
        return res.status(400).json({error: "Invalid userId type in auth"});
    }

    const order = {
        id: 1,
        userId: user.userId,
        username: user.username
    };

    res.json(order);
});

app.get("/orders/:id", async (req, res) => {
    const userId = Number(req.params.id);

    const response = await fetch(`${AUTH_URL}/user/${userId}`);
    const user = await response.json();

    res.json({
        id: Number(req.params.id),
        userId: user.userId,
        username: user.username
    });
});

app.listen(PORT, () => console.log(`orders listening on ${PORT}`));
