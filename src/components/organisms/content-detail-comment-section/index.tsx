import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';

interface Props {
   className?: string;
}

export const ContentDetailCommentSection = (props: Props) => {
   return <section className={clsx(layoutStyles.mx, 'mt-8 mb-12', props.className)}>
      <form action="">
         <textarea 
            name="comment" 
            id="comment" 
            className='w-full bg-neutral-800 rounded px-4 py-4 resize-none outline-none' 
            placeholder='Write a comment'
         />
         <div className='flex justify-end'>
            <button className='bg-green-300 text-black rounded px-4 py-2'>Send</button>
         </div>

      </form>
   </section>;
};
