import { z } from 'zod';

export const PostSchema = z.object({
    id: z.string().uuid(),
    message: z.string(),
});

export const CommentSchema = z.object({
    id: z.string().uuid(),
    message: z.string(),
    postId: z.string().uuid(),
});

export const MockSchema = z
    .object({
        $schema: z.string(),
        comments: z.array(CommentSchema),
        posts: z.array(PostSchema),
    })
    .describe('mock json schema');
