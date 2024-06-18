import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Selectblood = () => {
    const [blood, setBlood] = useState(null);

    const handleSelect = (bloodType) => {
        setBlood(bloodType);
    };
    // console.log(blood)
    return (
        <div className='h-9 w-14 shadow-lg flex   justify-center items-center' > 
            <DropdownMenu >
                <DropdownMenuTrigger>{blood ? blood : 'Select'}</DropdownMenuTrigger>
                <DropdownMenuContent className='bg-white ' >
                    <DropdownMenuItem  className='text-2xl' onClick={() => handleSelect('O+')}>O+</DropdownMenuItem>
                    <DropdownMenuItem  className='text-2xl' onClick={() => handleSelect('O-')}>O-</DropdownMenuItem>
                    {/* <DropdownMenuLabel></DropdownMenuLabel>
                    <DropdownMenuSeparator /> */}
                    <DropdownMenuItem   className='text-2xl' onClick={() => handleSelect('A+')}>A+</DropdownMenuItem>
                    <DropdownMenuItem   className='text-2xl' onClick={() => handleSelect('A-')}>A-</DropdownMenuItem>
                    <DropdownMenuItem  className='text-2xl' onClick={() => handleSelect('B+')}>B+</DropdownMenuItem>
                    <DropdownMenuItem  className='text-2xl' onClick={() => handleSelect('B-')}>B-</DropdownMenuItem>
                    <DropdownMenuItem  className='text-2xl' onClick={() => handleSelect('AB+')}>AB+</DropdownMenuItem>
                    <DropdownMenuItem  className='text-2xl' onClick={() => handleSelect('AB-')}>AB-</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

};

export default Selectblood;
