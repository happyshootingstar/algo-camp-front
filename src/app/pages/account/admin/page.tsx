import Link from "next/link";


export default function admin(){
    return(
        <>
            <div
            className="text-center"
            >
                <h1
                className = "text-9xl font-bold tracking-tight  py-40"
                >
                    管理者画面
                </h1>
                <div
                className="space-y-10">
                <Link href={"/pages/user/list"}
                className="rounded-md bg-rose-300 flex justify-center w-130 py-10 text-3xl font-semibold text- shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-200"
                >
				ユーザー管理
				</Link>
                <div
                className="space-y-10">
                    <Link href={"/pages/question/list"}
                    className="rounded-md bg-rose-300 flex justify-center w-130 py-10 text-3xl font-semibold text- shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-200"
                    >
                    問題管理
                    </Link>
                </div>
                <div
                className="space-y-10">
                    <Link href={"/pages/events/list"}
                    className="rounded-md bg-rose-300 flex justify-center w-130 py-10 text-3xl font-semibold text- shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-200"
                    >
                    イベント管理
                    </Link>
                </div>
                </div>



            </div>
        </>
    )
}