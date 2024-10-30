"use client";

import { useState } from 'react';
import { CheckboxIcon, NullCheckboxIcon, FilterIcon } from '@/shared/Icon';
import { UserStatusDropdown, UserRoleDropdown } from './Dropdown';
import CalendarCard from '../Card/CalendarCard';
import { isFilterRoleType, isFilterStatusType, filterRoleByType, filterStatusByType } from '@/app/(overview)/users/page';

export function UsersFilter({ handleFilterStatusChange, handleFilterRoleChange, handleFilterStatusBy, handleFilterRoleBy }: {
    handleFilterStatusChange: isFilterRoleType;
    handleFilterRoleChange: isFilterStatusType;
    handleFilterStatusBy: filterStatusByType;
    handleFilterRoleBy: filterRoleByType;
}) {
    const [isStatusChecked, setIsStatusChecked] = useState(false);
    const [isRoleChecked, setIsRoleChecked] = useState(false);
    const [isClosed, setIsClosed] = useState(true);

    const handleStatusChange = () => {
        setIsStatusChecked(!isStatusChecked);
        handleFilterStatusChange(!isStatusChecked);
    };

    const handleRoleChange = () => {
        setIsRoleChecked(!isRoleChecked);
        handleFilterRoleChange(!isRoleChecked);
    };

    const handleState = () => {
        setIsClosed(!isClosed);
    }

    return (
        <div className='flex gap-[16px]'>
            <div onClick={handleState} className='w-[26px] cursor-pointer select-none'>
                <FilterIcon />
            </div>
            {!isClosed &&
                <div className='flex w-max gap-[20px]'>
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
                                        <UserStatusDropdown handleFilterStatusBy={handleFilterStatusBy} />
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
                                        <UserRoleDropdown handleFilterRoleBy={handleFilterRoleBy} />
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
    const [isClosed, setIsClosed] = useState(true);

    const handleDateChange = () => {
        setIsDateChecked(!isDateChecked);
    };

    const handleState = () => {
        setIsClosed(!isClosed);
    }

    return (
        <div className='flex gap-[16px]'>
            <div onClick={handleState} className='w-[26px] cursor-pointer select-none'>
                <FilterIcon />
            </div>
            {!isClosed &&

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
                                        <CalendarCard defaultDate={1} />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='text-body text-dark'>
                                            to
                                        </div>
                                        <CalendarCard defaultDate={1} />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}