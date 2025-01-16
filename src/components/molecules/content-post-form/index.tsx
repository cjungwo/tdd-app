import { localizeDate } from '@/libs/sub-string';
import { layoutStyles } from '@/styles/layout-styles';
import { interpunct } from '@/utils/string';
import clsx from 'clsx';
import { InputImage } from '../input-image';

interface Props {
   className?: string;
}

export const ContentPostForm = (props: Props) => {
   return <div className={clsx(layoutStyles.mx, props.className)}>
      <div 
         contentEditable 
         suppressContentEditableWarning
         className='text-4xl font-bold leading-normal outline-none'
      >
         title
      </div>
      <div className='mb-8'>
         <span>{'chris'}</span>
         <span>{` ${interpunct} `}</span>
         <span>{localizeDate(new Date())}</span>
      </div>
      <div 
         contentEditable 
         suppressContentEditableWarning
         className='leading-snug outline-none min-h-48 pb-12 border-b-2 mb-12'
      >
         body
      </div>
      <div className='flex justify-center mb-12'>
         <InputImage />
      </div>
      <div className='flex justify-center mb-20'>
         <button className={'bg-green-300 px-2 py2 rounded font-bold text-black disabled:bg-neutral-800 disabled:text-white'}>
            New Post
         </button>
      </div>
      
   </div>;
};
