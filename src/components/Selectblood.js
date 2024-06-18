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
        <div className='h-9 w-14 shadow-lg flex  justify-center items-center' > 
            <DropdownMenu>
                <DropdownMenuTrigger>{blood ? blood : 'Select'}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleSelect('O+')}>O+</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect('O-')}>O-</DropdownMenuItem>
                    <DropdownMenuLabel>A+</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleSelect('A-')}>A-</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect('B+')}>B+</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect('B-')}>B-</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect('AB+')}>AB+</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSelect('AB-')}>AB-</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

};

export default Selectblood;
