import { layoutStyles } from '@/styles/layout-styles';
import clsx from 'clsx';

interface Props {
   className?: string;
}

export const Footer = (props: Props) => {
   return <footer className={clsx(layoutStyles.mx, 'bg-neutral-950 h-32 mt-auto', props.className)}>
      
   </footer>;
};
