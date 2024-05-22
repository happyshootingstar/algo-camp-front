import Link from "next/link";
export default function admin(){
    return(
        <div>
            <h1
            className=" font-bold text-center py-30 text-4xl">
                イベント一覧
            </h1>
            <div className=" text-right mx-56 ">
            <Link href={"/pages/events/list/new_qustion"} className=" bg-blue-100 border rounded-full ">
                    イベント作成
             </Link>
            </div>
            <div
            className="flex justify-center py-90"
            >
                        <table
                         className=" table-fixed space-y-10 space-x-10 block bg-white border-collapse min-w-100  ">
                        <thead
                        className="font-bold "
                        >
                            
                            <tr className="bg-white">
                            <th
                            className="border px-4 py-2 bold bg-blue-200">
                                イベント名</th>
                            <th
                            className="border px-4 py-2 bold bg-blue-200">
                                開始
                            </th>
                            <th
                            className="border px-4 py-2 bold bg-blue-200">
                                終了
                            </th>
                           <th className="bg-white"></th>
                           
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td
                            className="bg-green-100 border px-4 py-2">
                                python_スタック_01
                            </td>
                            <td
                            className="bg-green-100 border px-4 py-2 ">
                                2024/04/01 10:00~
                            </td>
                            <td
                            className="bg-green-100 border px-4 py-2">
                                2024/04/02 12:00
                            </td>
                            <td className="bg-white">
                            <button
                            type = "button"
                            className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300 border"
                            >
                                編集
                            </button>
                            <button
                            type = "button"
                            className="rounded bg-red-200 p-2 transition-colors hover:bg-red-300 border"
                            >
                                削除
                            </button>
                            </td>
                            </tr>
                            <tr>
                            <td
                            className="bg-green-100 border px-4 py-2">
                                Java_ソート_01
                            </td>
                            <td
                            className="bg-green-100 border px-4 py-2"
                            >2024/04/03 15:00~
                            </td>
                            <td
                            className="bg-green-100 border px-4 py-2">
                                2024/04/03 16:00
                            </td>
                            <td className="bg-white">
                            <button
                            type = "button"
                            className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300 border"
                            >
                                編集
                            </button>
                                <button
                                type = "button"
                                className="rounded bg-red-200 p-2 transition-colors hover:bg-red-300 border"
                                >
                                削除
                                </button>
                                </td>
                            </tr>
                        </tbody>
                        </table>

                </div>
        </div>
    )
}