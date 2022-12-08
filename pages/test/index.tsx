import React from 'react';
import Link from "next/link";

const Test = () => {
    return (
        <div className={'flex flex-col w-screen h-screen justify-center items-center gap-3'}>
            <h1 className={'text-3xl'}>Test</h1>
            <Link href='/test2'
                  className={'border-2 rounded-lg p-2 hover:bg-gray-300'}>
                Test 2
            </Link>
        </div>
    );
};

export default Test;
