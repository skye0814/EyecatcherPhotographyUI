import React from 'react';
import { Card } from 'flowbite-react';
import '../styles/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductCards(){
    return(
        <Card>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">
                $
                </span>
                <span className="text-5xl font-extrabold tracking-tight">
                49
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
                </span>
            </div>
            <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                    <FontAwesomeIcon icon="circle-check"></FontAwesomeIcon>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        2 team members
                    </span>
                </li>
                <li className="flex space-x-3">
                    <FontAwesomeIcon icon="circle-check"></FontAwesomeIcon>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        20GB Cloud storage
                    </span>
                </li>
                
            </ul>
            <button
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                type="button"
            >
                <p>
                Choose plan
                </p>
            </button>
        </Card>
    )
}