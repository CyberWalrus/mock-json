import { z } from 'zod';

export const PriceListSchema = z.record(z.string(), z.string());

export type PriceList = z.infer<typeof PriceListSchema>;

export const ShopsSchema = z.object({
    coordinate: z.number().array().length(2),
    id: z.string(),
    name: z.string(),
    priceList: PriceListSchema,
});

export const ProductSchema = z.object({
    description: z.string(),
    id: z.string(),
    info: z.string(),
    name: z.string(),
});

export const MockSchema = z
    .object({
        $schema: z.string(),
        products: z.array(ProductSchema),
        shops: z.array(ShopsSchema),
    })
    .describe('mock json schema');
