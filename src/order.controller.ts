import express from "express";
import {createOrder, getOrder} from "./order.service";
import {CreateOrderDto} from "./dto";

export const router = express.Router();

router.post("/orders", async (req, res) => {
    try {
        const body: CreateOrderDto = req.body;
        const order = await createOrder(body);
        res.json(order);
    } catch (e) {
        res.status(400).json({error: "Failed to create order"});
    }
});

router.get("/orders/:id", async (req, res) => {
    const id = Number(req.params.id);
    const order = await getOrder(id);
    res.json(order);
});
