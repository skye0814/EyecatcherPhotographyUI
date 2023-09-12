import React, { useEffect } from 'react';
import { Card, Button } from 'flowbite-react';
import '../../styles/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from '../../models/Product';

interface Props {
    product: Product
}

export default function ProductCards({product}: Props){
    let freeTextArr: string[] = [];

    if(product.freeText1 !== null){
        freeTextArr = product.freeText1.split(';');
    }
    
    return(
        <Card>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {product.productName}
            </h5>

            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span 
                    className="text-3xl font-semibold"
                    style={{marginRight: '6px'}}
                >
                PHP
                </span>
                <span className="text-5xl font-extrabold tracking-tight">
                {product.price}
                </span>
                {/* <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
                </span> */}
            </div>

            { freeTextArr.length !== 0 &&
                (<ul className="my-7 space-y-5">
                    {freeTextArr.map((freeText1, index) => {
                        return(
                            <li className="flex space-x-3" key={index}>
                                <FontAwesomeIcon icon="circle-check"></FontAwesomeIcon>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                    {freeText1}
                                </span>
                            </li>
                        )
                    })}
                </ul>)
            }

            <Button>
                Add to cart
            </Button>
            {/* <button
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                type="button"
            >
                <p>
                Add to cart
                </p>
            </button> */}
        </Card>
    )
}