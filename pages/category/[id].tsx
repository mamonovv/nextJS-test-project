import Link from "next/link";
import {useRouter} from "next/router";
import {FC, useEffect, useState} from "react";

interface IPageData {
    categoryId: number
    pages: string[]
    pagesLinks: string[]
}

const Category: FC = () => {
    const router = useRouter()
    const id = Number(router.query.id)

    const [currentPageData, setCurrentPageData] = useState<IPageData | null>(null)

    const pagesData: IPageData[] = [
        {
            categoryId: 1,
            pages: ['Sub Category 1', 'Sub Category 2'],
            pagesLinks: ['subcategory/1', 'subcategory/2']
        },
        {
            categoryId: 2,
            pages: ['Test'],
            pagesLinks: ['/test']
        },
    ]

    useEffect(() => {
        resolvePageData()
    }, [id])

    const resolvePageData = () => {
        const data = pagesData.find((pageData) => pageData.categoryId == id)
        if (data) {
            setCurrentPageData(data)
        }
    }

    return (
        <div className={'flex flex-col w-screen h-screen justify-center items-center gap-3'}>
            <h1 className={'text-3xl'}>Category {id}</h1>
            {currentPageData &&
              <div className={'flex gap-3'}>
                  {
                      currentPageData.pages.map((page, index) =>
                          <Link href={currentPageData.pagesLinks[index]}
                                key={page}
                                className={'border-2 rounded-lg p-2 hover:bg-gray-300'}>
                              {page}
                          </Link>
                      )}
              </div>
            }
        </div>
    )
}

export default Category
