export default function newquestion() {
    return(
        <div className=" bg-blue-50">
            <div className="container mx-auto box-border h-auto w-auto py-24">

                    <h1 className="text-green-800 text-3xl font-bold tracking-wider underline">
                        イベント新規作成
                    </h1>
                    <div className="py-12 divide-y-reverse ">
                        <label className=" text-2xl font-semibold">
                            イベント名
                            <input type="text" className="sm:w-2/3 border bg-blue-50 mx-7 border-cyan-500">
                            </input>
                        </label>
                        <label className="block text-2xl font-semibold py-12 px-16">
                            開始
                            <input type="text" className=" sm:w-4/5 border bg-blue-50 mx-7 border-cyan-500">
                            </input>
                        </label>
                        <label className="block text-2xl font-semibold px-16">
                            終了
                            <input type="text" className=" sm:w-4/5 border bg-blue-50 mx-7 border-cyan-500">
                            </input>
                        </label>

                    </div>
                    <div className=" px-36">
                            <button className=" bg-gray-50 border border-zinc-900 w-40 mx-10">
                                キャンセル
                            </button>
                            <button className=" bg-blue-400 border border-zinc-900 w-40 mx-10">
                                作成
                            </button>
                    </div>
                </div>
        </div>
    )
}

