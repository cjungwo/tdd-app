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
        href: '/contents/7d9b2356-0dfe-416c-819b-ec5d1ae6b74a',
    },
    {
        tag: 'Content Post',
        href: '/contents/post',
    },
    {
        tag: 'Content Update',
        href: '/contents/7d9b2356-0dfe-416c-819b-ec5d1ae6b74a/update',
    },
];

export const DevNav = () => {
   return <div className='fixed right-10 bottom-10'>{links.map((c) => (
    <div key={c.tag}>
        <Link href={c.href}>{c.tag}</Link>
    </div>
   ))}</div>;
};
