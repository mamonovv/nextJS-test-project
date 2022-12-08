import React from 'react';
import {useRouter} from "next/router";

const SubCategory = () => {
    const router = useRouter()
    const id = router.query.id

    return (
        <div className={'flex flex-col w-screen h-screen justify-center items-center gap-3'}>
            <h1 className={'text-3xl'}>Sub Category {id}</h1>
        </div>
    )
};

export default SubCategory;
