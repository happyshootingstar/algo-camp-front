import Link from "next/link";
export default function newquestion() {
    return(
        <div className=" bg-blue-50">
            <div className="container mx-auto box-border h-auto w-auto py-24">

                    <h1 className="text-green-800 text-3xl font-bold tracking-wider underline">
                        ユーザー新規作成
                    </h1>
                    <div className="py-12 divide-y-reverse ">
                        <label className=" text-2xl font-semibold">
                            名前
                            <input type="text" className="sm:w-2/3 border bg-white mx-7 border-cyan-500">
                            </input>
                        </label>
                        <label className="block text-2xl font-semibold py-12 px-16">
                            ログインID
                            <input type="text" className=" sm:w-4/5 border bg-white mx-7 border-cyan-500">
                            </input>
                        </label>
                        <label className="block text-2xl font-semibold px-16">
                            パスワード
                            <input type="text" className=" sm:w-4/5 border bg-white  border-cyan-500 ms-6">
                            </input>
                        </label>
                        <label className="block text-2xl font-semibold ">
                            パスワード確認
                            <input type="text" className="border bg-white  border-cyan-500 mt-10 ms-10">
                            </input>
                        </label>
                        <div className=" mt-6">
                        <label className="text-2xl  w-full h-auto font-bold tracking-widest">
                            難易度
                        </label>
                        <select className=" px-3 bg-white text-black  h-8 w-56 text-sm  ms-32  focus:border-blue-100 tracking-wide border border-cyan-500">
                                <option>
                                権限
                                </option>
                                <option>
                                    admin
                                </option>
                                <option>
                                    user
                                </option>
                        </select>
                    </div>

                    </div>
                    <div className=" px-36">
                            <Link href= "/pages/account/users/list">
                                <button className=" bg-gray-50 border border-zinc-900 w-40 mx-10">
                                    キャンセル
                                </button>
                            </Link>
                            <button className=" bg-blue-400 border border-zinc-900 w-40 mx-10">
                                作成
                            </button>
                    </div>
                </div>
        </div>
    )
}

