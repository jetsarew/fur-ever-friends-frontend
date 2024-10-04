"use client";

import { useState } from 'react';
import { CheckboxIcon, NullCheckboxIcon, FilterIcon } from '@/shared/Icon';
import { UserStatusDropdown, UserRoleDropdown } from './Dropdown';
import CalendarCard from '../Card/CalendarCard';

export function UsersFilter() {
    const [isStatusChecked, setIsStatusChecked] = useState(false);
    const [isRoleChecked, setIsRoleChecked] = useState(false);
    const [isClosed, setIsClosed] = useState(true);

    const handleStatusChange = () => {
        setIsStatusChecked(!isStatusChecked);
    };

    const handleRoleChange = () => {
        setIsRoleChecked(!isRoleChecked);
    };

    const handleState = () => {
        setIsClosed(!isClosed);
    }

    return (
        <div>
            <div onClick={handleState} className='w-[26px] cursor-pointer select-none'>
                <FilterIcon />
            </div>
            {!isClosed &&
                <div className='flex w-max gap-[20px] relative top-9'>
                    <div className='flex w-[245px] gap-[8px] select-none'>
                        <div onClick={handleStatusChange}>
                            {isStatusChecked ? (
                                <CheckboxIcon />
                            ) : (
                                <NullCheckboxIcon />
                            )}
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='text-body-bold text-dark'>
                                Status
                            </div>
                            {isStatusChecked &&
                                <div className='w-[221px] flex gap-[8px]'>
                                    <div className='text-body text-dark pt-[14px]'>
                                        only
                                    </div>
                                    <div>
                                        <UserStatusDropdown />
                                    </div>
                                    <div className='text-body text-dark pt-[14px]'>
                                        user
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='flex w-[245px] gap-[8px] select-none'>
                        <div onClick={handleRoleChange}>
                            {isRoleChecked ? (
                                <CheckboxIcon />
                            ) : (
                                <NullCheckboxIcon />
                            )}
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='text-body-bold text-dark'>
                                Role
                            </div>
                            {isRoleChecked &&
                                <div className='flex gap-[8px] '>
                                    <div className='text-body text-dark pt-[14px]'>
                                        only
                                    </div>
                                    <div>
                                        <UserRoleDropdown />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export function ReportsFilter() {
    const [isDateChecked, setIsDateChecked] = useState(false);


    const handleDateChange = () => {
        setIsDateChecked(!isDateChecked);
    };

    return (
        <div className='flex w-[220px]'>
            <div className='flex gap-[8px] select-none'>
                <div onClick={handleDateChange}>
                    {isDateChecked ? (
                        <CheckboxIcon />
                    ) : (
                        <NullCheckboxIcon />
                    )}
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <div className='text-body-bold text-dark'>
                        Date
                    </div>
                    {isDateChecked &&
                        <div className='flex flex-col w-[196px] gap-[8px]'>
                            <div className='flex justify-between items-center'>
                                <div className='text-body text-dark'>
                                    from
                                </div>
                                <CalendarCard />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='text-body text-dark'>
                                    to
                                </div>
                                <CalendarCard />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}