import { http, HttpResponse } from 'msw';

export const contentHandler = [
    http.get('http://localhost:4000/contents', () => {
        return HttpResponse.json({
            id: 'dkdkwo2t933gj2g',
            firstName: 'Chris',
            lastName: 'Choi'
        });
    }),
];