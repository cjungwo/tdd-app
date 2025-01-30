import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDown, HiOutlineBell, HiOutlineUser, HiSearch } from 'react-icons/hi';

interface Props {
   className?: string;
   user?: {
    nickname: string;
   };
   contentAuthorNickname: string;
}

export const ContentDetailHeader = (props: Props) => {
   return (
   <div className={clsx(
            'flex justify-between h-16', 
            layoutStyles.px, 
            props.className
        )}
        data-testid={'header'} // data-testid는 가능하면 안 쓰는게 좋지만 써야 한다면 가급적 컴포넌츠 자체에만 사용
    >
    <div className='flex items-center'>
        <Link href='/' aria-label='home'>
            <Image 
                width={16}
                height={16}
                src="/vercel.svg"
                alt='home'
                className='mr-2'
            />
        </Link>
        <Link 
            href='/users/5e6e9efb-daf4-4f66-af85-0f24d22a7c08' 
            aria-label={`${props.contentAuthorNickname} - home`}
        >
            <span>{props.contentAuthorNickname}</span>
            <span>{'\'s Blog'}</span>
        </Link>
    </div>
    <div className='flex items-center'>
        <Link href='/notification' className='p-3' aria-label='notification'> 
            <HiOutlineBell className='text-2xl'/>
        </Link>
        <Link href='/search' className='p-3' aria-label='search'>
            <HiSearch className='text-2xl'/>
        </Link>
        
        <Link href='/contents/post' className='border-green-400 border-2 rounded-r-full rounded-l-full text-green-400 text-sm px-3 py-1 mr-2'>
            New Post
        </Link>
        { props.user !== undefined ?
        <button 
            className='flex items-center' 
            aria-label='user-menu'
        >
            <HiOutlineUser className='text-2xl'/>
            <HiChevronDown />
        </button>
        : <Link 
            href='/users/sign-in' 
            className='font-medium bg-neutral-800 px-3 py-2 rounded-r-full rounded-l-full'
          >Login</Link>
        }
    </div>
   </div>
   );
};
