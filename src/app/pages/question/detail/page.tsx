// 03 問題一覧画面
import Link from "next/link";
export default function question_detail(){
    return(
        <div className=" bg-blue-50 h-screen w-full overflow-hidden  overflow-y-scroll overflow-w-scroll">
            <div className="flex justify-center mt-5">
                <div className=" ml-96">
                    <Link href="/">
                        <button className=" bg-black text-white font-bold rounded-3xl px-5 py-6 tracking-widest ml-96 h-full">
                            ログアウト
                        </button>
                    </Link>

                </div>
            </div>
            <div className="container mx-auto box-border h-auto w-auto mt-3 bg-blue-50 ">
                    <div className=" py-6 bg-gray-200 w-80 flex justify-center text-center">
                        <div className=" bg-gray-200 text-black tracking-wider w-60 font-semibold py-6 text-4xl  ">
                            問題一覧
                        </div>
                    </div>
                    <table className="mt-3  table-fixed space-y-10 space-x-10 block bg-blue-50 border-collapse min-w-100">
                        <thead className="border border-gray-400">
                            <tr className=" font-semibold bg-cyan-800 text-white text-2xl tracking-wide ">
                                <th className=" px-36 py-10 border border-gray-400">
                                    イベント名
                                </th>
                                <th className=" px-36 py-10 border border-gray-400">
                                    開始
                                </th>
                                <th className=" px-36 py-10 border border-gray-400">
                                    終了
                                </th>
                                <th className=" border border-gray-400 ">
                                </th>
                            </tr>
                            <tr className="  text-black tracking-normal text-center h-14 text-xl">
                                <td className="border border-gray-400">
                                    python_スタック_01
                                </td>
                                <td className="border border-gray-400">
                                    2024/04/01 10:00~
                                </td>
                                <td className="border border-gray-400">
                                    2024/04/02 12:00~
                                </td>
                                <td className="border border-gray-400">
                                    <Link href="/pages/question">
                                        <button className=" rounded-full bg-cyan-500 text-pretty text-white px-12 py-2 ">
                                            解答する
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="  text-black tracking-normal text-center h-14 text-xl">
                                    <td className="border border-gray-400">
                                        java_ソート_01
                                    </td>
                                    <td className="border border-gray-400">
                                        2024/04/03 15:00~
                                    </td>
                                    <td className="border border-gray-400">
                                        2024/04/03 16:00~
                                    </td>
                                    <td className="border border-gray-400">
                                    <Link href="/pages/question">
                                        <button className=" rounded-full bg-cyan-500 text-pretty text-white px-12 py-2 ">
                                            解答する
                                        </button>
                                    </Link>
                                    </td>
                            </tr>
                        </thead>
                    </table>
            </div>
        </div>
    )
}