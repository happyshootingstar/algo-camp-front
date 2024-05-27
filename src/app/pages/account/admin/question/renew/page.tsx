// 09.問題編集
import Link  from "next/link"
export default function create_quesion (){
    return(
        <div className=" bg-blue-100 h-screen w-auto overflow-hidden overflow-y-scroll">
            <div className=" flex justify-center mt-8 mb-10">
                <div className="w-4/5">
                    <div className=" flex justify-end">
                        <Link href="/pages/account/admin/question/view">
                            <button className=" text-whiteps-96  rounded-lg border border-black text-3xl w-32 h-16 bg-gray-100 focus:bg-slate-400">
                                戻る
                            </button>
                        </Link>
                    </div>
                    <h1 className=" mt-5 text-5xl tracking-widest font-bold text-teal-500">
                        新規問題作成
                    </h1>
                    <div className=" w-auto h-auto mt-16">
                        <label className=" text-2xl tracking-widest h-auto text-blue-500 font-bold">
                            対応イベント
                        </label>
                        <select className=" ms-10 px-3 bg-white text-black rounded-3xl h-8 w-56 text-sm border border-red-100 focus:border-blue-100 tracking-wide ">
                                <option>
                                Language used？
                                </option>
                                <option>
                                    Python
                                </option>
                                <option>
                                    Ruby
                                </option>
                                <option>
                                    Java
                                </option>
                                <option>
                                    React
                                </option>
                                <option>
                                    JavaScript
                                </option>
                                <option>
                                    Dart
                                </option>
                            </select>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            問題名
                        </h1>
                        <textarea className="mt-3 w-1/3 h-5 focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            難易度
                        </h1>
                        <select className=" px-3 bg-white text-black rounded-3xl h-8 w-56 text-sm border border-red-100 focus:border-blue-100 tracking-wide ">
                                <option>
                                level?
                                </option>
                                <option>
                                    A
                                </option>
                                <option>
                                    B
                                </option>
                                <option>
                                    C
                                </option>
                                <option>
                                    D
                                </option>
                                <option>
                                    E
                                </option>
                                <option>
                                    F
                                </option>
                        </select>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            制約時間
                        </h1>
                        <textarea className="mt-3 w-2/3 h-5 focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            メモリ制限
                        </h1>
                        <textarea className="mt-3 w-1/3 h-6 focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            質問内容
                        </h1>
                        <textarea className="mt-3 w-2/3 h-auto min-h-60 focus:ring-blue text-start tracking-wider leading-normal">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            制約
                        </h1>
                        <textarea className="mt-3 w-full h-6 focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            入力フォーマット
                        </h1>
                        <textarea className="mt-3 w-full h-6 focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            出力フォーマット
                        </h1>
                        <textarea className="mt-3 w-full h-6 focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            入力例1
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            出力例1
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            入力例2
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            出力例2
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            テスト入力値1
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            テスト出力値1
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            テスト入力値２
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-blue-500 text-2xl  w-full h-auto font-bold tracking-widest">
                            テスト出力値２
                        </h1>
                        <textarea className="mt-3 w-full h-auto focus:ring-blue text-center">
                        </textarea>
                    </div>
                    <div className=" mt-10 h-auto w-8/12 flex justify-center">
                        <Link href=" pages/account/admin/question/view">
                            <button className=" shadow-lg bg-gray-500 shadow-gray-500/50 text-white px-2 mt-11 text-2xl rounded-lg ms-20 w-60 text-center">
                                キャンセル
                            </button>
                        </Link>
                        <button className=" shadow-lg bg-red-300 shadow-red-300/50 text-white px-2 mt-11 text-2xl rounded-lg ms-72 w-60 text-center">
                                作成
                            </button>
                    </div>
                </div>
            </div>

        </div>
    )
}