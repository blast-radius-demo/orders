import express from "express";
import {router} from "./order.controller";

const PORT = Number(process.env.PORT ?? 3002);

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.json({ok: true}));

app.use(router);

app.listen(PORT, () => {
    console.log(`orders listening on ${PORT}`);
});
