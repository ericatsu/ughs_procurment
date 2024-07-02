import React from 'react';
import cardIcon from '../../../../assets/cardIcon.png';

interface CardProps {
    cardName: string;
    quantity: number;
    cardDesc: string;
}

const Card: React.FC<CardProps> = ({ cardName, quantity, cardDesc }) => {
    return (
        <div className="flex w-[230px] items-start justify-between p-2.5 relative bg-white rounded-xl shadow-md">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1px] opacity-70 font-semibold text-[#202224] text-sm">
                    {cardName}
                </div>
                <div className="relative w-fit font-bold text-[#202224] text-2xl tracking-[0.5px]">
                    {quantity}
                </div>
                <div className="relative w-fit font-semibold text-[#5f5f5f] text-xs">
                    {cardDesc}
                </div>
            </div>
            <img className="relative w-8 h-8" alt="Icon" src={cardIcon} />
        </div>
    );
}

export default Card;
