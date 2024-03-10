import { generateMock } from '@anatine/zod-mock';
import { faker } from '@faker-js/faker';

import { CommentSchema, PostSchema } from './schemas';

export const generateMocks = () => {
    const postIds: string[] = [];
    const mocks = { $scheme: './scheme.json', comments: Array(20).fill(undefined), posts: Array(5).fill(undefined) };

    mocks.posts = mocks.posts.map(() => {
        const post = generateMock(PostSchema, {
            stringMap: {
                message: () => faker.lorem.paragraph(),
            },
        });

        postIds.push(post.id);

        return post;
    });

    mocks.comments = mocks.comments.map(() =>
        generateMock(CommentSchema, {
            stringMap: {
                id: () => faker.string.uuid(),
                message: () => faker.lorem.paragraph(),
                postId: () => faker.helpers.arrayElement(postIds),
            },
        }),
    );

    return mocks;
};
