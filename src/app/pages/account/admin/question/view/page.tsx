// 08問題一覧
import Link from "next/link";
export default function question_view (){
    return(
        <div className=" bg-blue-100 h-screen w-auto overflow-hidden overflow-y-scroll">
            <div className=" flex justify-center mt-8 mb-10">
                <div className=" w-5/6">
                    <div className=" flex justify-end">
                        <Link href="/">
                            <button className=" text-whiteps-96  rounded-lg border border-black text-3xl w-32 h-16 bg-gray-100 focus:bg-slate-400">
                                戻る
                            </button>
                        </Link>
                    </div>
                    <h1 className=" mt-8 text-5xl tracking-wider font-semibold">
                        問題一覧
                    </h1>
                    <div className=" flex justify-end mb-10">
                        <Link href="/pages/account/admin/create/question">
                            <button className=" w-14 h-14 border border-cyan-600 text-white rounded-full bg-cyan-400 text-4xl">
                                ＋
                            </button>
                        </Link>
                    </div>
                    <table className=" table-fixed space-x-10 space-y-10 block  min-w-100">
                        <thead className=" border-gray-500">
                            <tr className=" text-4xl font-bold text-white bg-black ms-5 mt-5 mb-5 h-20">
                                <th className=" border w-60 ">
                                    問題ID
                                </th>
                                <th className=" border w-6/12">
                                    問題名
                                </th>
                                <th className=" border w-80">
                                    対応イベント名
                                </th>
                                <th>
                                    編集
                                </th>
                                <th>
                                    削除
                                </th>
                            </tr>
                        </thead>
                        {/* テーブルの中身 */}
                        <tbody className="  border-black h-24 bg-white text-center text-black text-3xl font-bold">
                            <tr >
                                <td className=" border">
                                    1
                                </td>
                                <td className="border">
                                    aiful-02-01
                                </td>
                                <td className="border">
                                    python_ソート_01
                                </td>
                                <td>
                                    <Link href="/pages/account/admin/question/renew">
                                        <button className=" focus:bg-blue-500 border bg-blue-200 w-20 h-24">
                                            ✏️
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="focus:bg-red-500 w-20 bg-red-100 border h-24">
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="  border-black h-24 bg-white text-center text-black text-3xl font-bold">
                            <tr >
                                <td className=" border">
                                    1
                                </td>
                                <td className="border">
                                    aiful-02-01
                                </td>
                                <td className="border">
                                    python_ソート_01
                                </td>
                                <td>
                                    <Link href="/pages/account/admin/question/renew">
                                        <button className=" focus:bg-blue-500 border bg-blue-200 w-20 h-24">
                                            ✏️
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="focus:bg-red-500 w-20 bg-red-100 border h-24">
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="  border-black h-24 bg-white text-center text-black text-3xl font-bold">
                            <tr >
                                <td className=" border">
                                    1
                                </td>
                                <td className="border">
                                    aiful-02-01
                                </td>
                                <td className="border">
                                    python_ソート_01
                                </td>
                                <td>
                                    <Link href="/pages/account/admin/question/renew">
                                        <button className=" focus:bg-blue-500 border bg-blue-200 w-20 h-24">
                                            ✏️
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="focus:bg-red-500 w-20 bg-red-100 border h-24">
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}