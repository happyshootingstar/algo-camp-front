// 02イベント一覧画面
import Link from "next/link";
export default function user_events(){
    return(
        <div className=" bg-blue-50 h-screen w-full overflow-hidden overflow-y-scroll overflow-w-scroll">
                <div className=" flex justify-center mt-">
                    <div className=" ml-96">
                        <Link href="/">
                            <button className=" bg-black text-white font-bold rounded-xl px-5 py-6">
                                ログアウト
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="container mx-auto box-border h-auto w-auto mt-3 bg-blue-50 ">
                    <div className=" py-6 bg-gray-200 w-80 flex justify-center">
                        <div className="  bg-gray-200 text-black tracking-wider w-60 font-semibold py-6 text-4xl  ">
                            イベント一覧
                        </div>
                    </div>
                    <table className="mt-3  table-fixed space-y-10 space-x-10 block bg-blue-50 border-collapse min-w-100">
                        <thead >
                            <tr className=" font-semibold bg-gray-600 text-white text-2xl tracking-wide">
                                <th className=" px-36 py-10 ">
                                    イベント名
                                </th>
                                <th className=" px-36 py-10 ">
                                    開始
                                </th>
                                <th className=" px-36 py-10 ">
                                    終了
                                </th>
                            </tr>
                            <tr className=" bg-gray-200 text-black tracking-normal text-center h-14 text-xl">
                                <td>
                                    python_スタック_01
                                </td>
                                <td>
                                    2024/04/01 10:00~
                                </td>
                                <td>
                                    2024/04/02 12:00~
                                </td>
                            </tr>
                            <tr className=" bg-gray-200 text-black tracking-normal text-center h-14 text-xl">
                                <td>
                                    java_ソート_01
                                </td>
                                <td>
                                    2024/04/03 15:00~
                                </td>
                                <td>
                                    2024/04/03 16:00~
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
        </div>
    )
}