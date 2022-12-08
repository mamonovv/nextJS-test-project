import Link from "next/link"

function Home() {
    return (
        <div className={'flex flex-col w-screen h-screen justify-center items-center gap-3'}>
            <h1 className="text-3xl">Category Page</h1>
            <div className={'flex gap-3'}>
                <Link href='/category/1' className={'border-2 rounded-lg p-2 hover:bg-gray-300'}>Category 1</Link>
                <Link href='/category/2' className={'border-2 rounded-lg p-2 hover:bg-gray-300'}>Category 2</Link>
                <Link href='/category/3' className={'border-2 rounded-lg p-2 hover:bg-gray-300'}>Category 3</Link>
            </div>
        </div>
    )
}

export default Home
