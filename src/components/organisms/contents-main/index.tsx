import clsx from 'clsx';

interface Props {
   className?: string;
}

export const ContentsMain = (props: Props) => {
   return <div className={clsx(props.className)}></div>;
};
