import { ContentView } from '@/domains/content/content.type';
import { contentFixtures } from '@__tests__/fixtures/content-fixture';
import { userFixtures } from '@__tests__/fixtures/user-fixture';
import { http, HttpResponse } from 'msw';
import { omit } from 'radashi';

export const contentHandler = [
    http.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/contents', () => {
        return HttpResponse.json({
            id: 'dkdkwo2t933gj2g',
            firstName: 'Chris',
            lastName: 'Choi'
        });
    }),

    http.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/contents/:id', ({ params }) => {
        const { id } = params;

        if (typeof id !== 'string') return HttpResponse.json({
            status: 400, // 요청 폼 오류
        });

        const found = contentFixtures.find((c) => c.id === id);

        if (!found) return HttpResponse.json({
            status: 404, // not found
        });
        
        const author = userFixtures.find((c) => c.id === found.authorId);
         
        if (!author) return HttpResponse.json({
            status: 404, // author not found
            message: 'Author not found',
        });

        const content: ContentView = {
            ...omit(found, ['authorId']),
            author,
        };

        return HttpResponse.json({
            data: { content },
            status: 200
        });
    }),
];