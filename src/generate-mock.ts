/* eslint-disable @typescript-eslint/ban-ts-comment */
import { generateMock } from '@anatine/zod-mock';
import { faker } from '@faker-js/faker';

import type { PriceList } from './schemas';
import { ProductSchema, ShopsSchema } from './schemas';

export const generateMocks = () => {
    const productIds: string[] = [];
    const mocks = { products: Array(8).fill(undefined), shops: Array(8).fill(undefined) };

    mocks.products = mocks.products.map(() => {
        const product = generateMock(ProductSchema, {
            stringMap: {
                description: () => faker.commerce.productDescription(),
                id: () => faker.vehicle.vrm(),
                info: () => faker.commerce.productMaterial(),
                name: () => faker.commerce.productName(),
            },
        });

        productIds.push(product.id);

        return product;
    });
    mocks.shops = mocks.shops.map(() => {
        const shop = generateMock(ShopsSchema, {
            stringMap: {
                id: () => faker.vehicle.vrm(),
                name: () => faker.company.name(),
            },
        });

        shop.coordinate = faker.location.nearbyGPSCoordinate();

        shop.priceList = productIds.reduce<PriceList>((acc, id) => {
            if (Math.random() > 0.4) {
                acc[id] = faker.commerce.price();
            }

            return acc;
        }, {});

        return shop;
    });

    return mocks;
};
