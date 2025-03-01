import { ContentView } from '@/domains/content/content.type';
import { localizeDate } from '@/libs/sub-string';
import { layoutStyles } from '@/styles/layout-styles';
import { interpunct } from '@/utils/string';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
   className?: string;
   content: ContentView;
}

export const ContentDetailMain = (props: Props) => {
   return (
   <main className={clsx('mt-8', layoutStyles.px, props.className)}>
      <header>
         <h1 className='text-4xl font-bold leading-normal'>{props.content.title}</h1>
         <div>
            <span>{props.content.author.nickname}</span>
            <span>
               {' '}
               {interpunct}
               {' '}
            </span>
            <span>{localizeDate(props.content.createAt)}</span>
         </div>
         { 
         true && <div className='flex justify-end'>
            <Link href={`/contents/${props.content.id}/update`}>Update</Link>
            <button>Delete</button>
         </div> 
         }
      </header>
      <div>
         {props.content.body}
      </div>
   </main>
   );
};
