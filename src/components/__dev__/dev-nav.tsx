import { contentFixtures } from '@__tests__/fixtures/content-fixture';
import Link from 'next/link';

interface LinkItem {
    tag: string;
    href: string;
}

const links: LinkItem[] = [
    {
        tag: 'Contents',
        href: '/contents',
    },
    {
        tag: 'Content Detail',
        href: `/contents/${contentFixtures[0].id}`,
    },
    {
        tag: 'Content Detail void',
        href: '/contents/f570f800-da65-4031-a240-d1cff262dd95',
    },
    {
        tag: 'Content Post',
        href: '/contents/post',
    },
    {
        tag: 'Content Update',
        href: `/contents/${contentFixtures[0].id}/update`,
    },
];

export const DevNav = () => {
   return <div className='fixed right-10 bottom-10'>{links.map((c) => (
    <div key={c.tag}>
        <Link href={c.href}>{c.tag}</Link>
    </div>
   ))}</div>;
};
