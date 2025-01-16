import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
   className?: string;
}

export const ContentDetailAuthorAside = (props: Props) => {
   return <aside className={clsx('mt-8', layoutStyles.px, props.className)}>
      <Image 
         width={64}
         height={64}
         src='/globe.svg'
         alt={'author.nickname-img'}
         className='mb-4'
      />
      <Link href={`/users/id`}>{'author.nickname'}</Link>
   </aside>;
};
