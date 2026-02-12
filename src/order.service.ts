import {CreateOrderDto, Order} from "./dto";
import {fetchUser} from "./auth-client";

export async function createOrder(dto: CreateOrderDto): Promise<Order> {
    const user = await fetchUser(dto.userId);

    if (typeof user.userId !== "number") {
        throw new Error("Invalid userId type in auth");
    }

    return {
        id: 1,
        userId: user.userId,
        username: user.username
    };
}

export async function getOrder(id: number): Promise<Order> {
    const user = await fetchUser(id);

    return {
        id,
        userId: user.userId,
        username: user.username
    };
}
