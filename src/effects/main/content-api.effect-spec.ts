import { contentFixtures } from '@__tests__/fixtures/content-fixture';
import { test, describe, expect } from 'vitest';
import { contentApi } from './content-api.effect';
import { ContentView } from '@/domains/content/content.type';
import { omit } from 'radashi';
import { userFixtures } from '@__tests__/fixtures/user-fixture';
// import { contentSortOption } from '@/domains/content/content.constant';

describe('contentApi', () => {
    test('findAll', async () => {
        const pageNum = 1;
        const pageTake = 12;
        // const sort = contentSortOption.titleAsc;
        const content = contentFixtures[3];
        const search = content.title.slice(0, 10);

        const response = await contentApi.findAll({
            pageTake,
            pageNum,
            search,
        });

        console.log("DEBUG: status", response.status);
        console.log("DEBUG: status", response.data.contents);
        
        expect(response.status).toEqual(200);
        expect(response.data.contents[0].title).toEqual(content.title);
        expect(response.data.contents).toHaveLength(1);
    });

    test('countAll', async () => {
        const search = contentFixtures[0].title;

        const response = await contentApi.countAll(search);

        expect(response.status).toEqual(200);
        expect(response.data.count).toEqual(1);
    });

    test('findOne', async () => {
        const content = contentFixtures[0];
        const author = userFixtures[0];

        const id = content.id;
        const expected: ContentView = {
            ...omit(content, ['authorId']),
            author,
        }

        const response = await contentApi.findOne(id);

        expect(response.status).toEqual(200);
        if (response.status !== 200) throw new Error();
        expect(response.data.content).toEqual(expected);
    });
});
