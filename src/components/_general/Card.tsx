import React from 'react';

type Variant = 'default' | 'primary' | 'secondary';

const variants: Record<Variant, string> = {
  default: 'bg-gray-200',
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-green-500 text-white',
};

type Props = {
  data?: any;
  variant: Variant;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode
};

const Card: React.FC<Props> = (({ data, variant = 'default', className = '', onClick, children}) => {
  const cardClasses = `rounded-md overflow-hidden h-fit relative ${variants[variant]} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      <img src={data.image} alt='image' width={'auto'} height={'auto'}></img>
      <div className='absolute top-0 bg-slate-950 w-fit p-2 rounded-lg text-white'>{children}</div>
    </div>
  );
});

export default Card;
