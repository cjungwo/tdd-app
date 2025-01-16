import { localizeDate } from '@/libs/sub-string';
import { layoutStyles } from '@/styles/layout-styles';
import { interpunct } from '@/utils/string';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
   className?: string;
}

export const ContentDetailMain = (props: Props) => {
   return (
   <main className={clsx('mt-8', layoutStyles.px, props.className)}>
      <header>
         <h1 className='text-4xl font-bold leading-normal'>{'title'}</h1>
         <div>
            <span>{'John'}</span>
            <span>
               {' '}
               {interpunct}
               {' '}
            </span>
            <span>{localizeDate(new Date('2025-01-16T00:00:00'))}</span>
         </div>
         { 
         true && <div className='flex justify-end'>
            <Link href={`/contents/${'id'}/update`}>Update</Link>
            <button>Delete</button>
         </div> 
         }
      </header>
      <div>
         {'body'}
      </div>
   </main>
   );
};
