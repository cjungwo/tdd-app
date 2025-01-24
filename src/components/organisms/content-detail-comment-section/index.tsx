'use client';

import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface Props {
   className?: string;
   isAuthorized: boolean;
}

export const ContentDetailCommentSection = (props: Props) => {
   const router = useRouter();

   const onClickTextarea = () => {
      if (!props.isAuthorized) {
         router.push('/users/sign-in');
         return;
      }
   }

   return <section 
      className={clsx(layoutStyles.mx, 'mt-8 mb-12', props.className)}
      data-testid='comment-section'
   >
      <form action="">
         <textarea 
            name="comment" 
            id="comment" 
            className='w-full bg-neutral-800 rounded px-4 py-4 resize-none outline-none' 
            placeholder='Write a comment'
            onClick={onClickTextarea}
         />
         <div className='flex justify-end'>
            <button className='bg-green-300 text-black rounded px-4 py-2'>Send</button>
         </div>

      </form>
   </section>;
};
