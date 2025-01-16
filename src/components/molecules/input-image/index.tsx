import clsx from 'clsx';
import Image from 'next/image';

interface Props {
   className?: string;
}

export const InputImage = (props: Props) => {
   return <div className={clsx(props.className)}>
    <label htmlFor='thumbnail' className='cursor-pointer'>
        <Image 
            width={200}
            height={200}
            src='/file.svg'
            alt='thumbnail'
        />
        <input id='thumbnail' type="file" accept='image/*' className='hidden'/>
    </label>
   </div>;
};
