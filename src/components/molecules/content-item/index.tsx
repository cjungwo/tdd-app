import { localizeDate } from '@/libs/sub-string';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
   className?: string;
}

export const ContentItem = (props: Props) => {
   return <div className={clsx(props.className)}>
    <Link href={`/contents/${'id'}`} className='flex justify-center'>
        <Image 
            width={600}
            height={600}
            src='./file.svg'
            alt={'title'}
            className=''
        />
    </Link>
    <h2 className='text-2xl font-bold mt-4'>
        <Link href={`/contents/${'id'}`}>
            {'title'}
        </Link>
    </h2>
    <div className='text-neutral-300'>
        <Link href={`/contents/${'id'}`}>
            {'body'}
        </Link>
    </div>
    <div className='mt-4 flex justify-between items-center'>
        <div className='flex items-center'>
            <Link href={`/users/${'id'}`}>
                <Image 
                    width={32}
                    height={32}
                    src='./file.svg'
                    alt={'nickname'}
                    className='mr-2'
                />
            </Link>
            <span>{'nickname'}</span>
        </div>
        <div>{localizeDate(new Date('2025-01-16T00:00:00'))}</div>
    </div>
   </div>;
};
