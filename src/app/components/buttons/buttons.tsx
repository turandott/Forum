
import React from 'react';

type ButtonProps = {
    text: string;
    type?: 'primary' | 'secondary' | 'basic'|'shadow';
    size?: 'sm' | 'lg' | 'mid';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};



export const CustomButton = ({ size = "mid", type = "primary", text }: ButtonProps) => {

    const ButtonType = {
        primary: 'rounded-xl text-[#FFF] font-bold bg-navy-blue h-12 text-center mt-5',
        shadow: 'rounded-xl text-[#FFF] font-bold bg-navy-blue h-12 text-center mt-5 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-navy-blue/50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
        secondary: 'rounded-xl text-white border-white border-2 font-semibold h-12 text-center mt-5 ',
        basic: 'rounded-xl text-navy-blue border-navy-blue border-2 font-semibold bg-c3 h-12 text-center mt-5 transition-all hover:bg-navy-blue/20 active:bg-navy-blue/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',

    };

    const ButtonSize = {
        lg: 'w-80',
        mid: 'px-[30px] max-w-[180px]',
        sm: 'px-[15px] max-w-[120px]',

    }

    const classNames = ButtonType[type] + " " + ButtonSize[size];

    return (
        <button className={classNames}>{text}</button>
    )
}
