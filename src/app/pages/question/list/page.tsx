export default function user_events(){
    return(
        <div className=" bg-blue-50 h-full w-full overflow-hidden ">
                <div className=" flex justify-center mt-3">
                    <div className=" ml-96">
                        <button className=" bg-black text-white font-bold rounded-xl px-5 py-6">
                            ログアウト
                        </button>
                    </div>
                </div>
                <div className="container mx-auto box-border h-auto w-auto mt-3 bg-blue-50 ">
                    <div className=" py-6 bg-gray-200 w-80 flex justify-center">
                        <div className=" bg-gray-200 text-black tracking-wider w-60 font-semibold py-6 text-4xl  ">
                            イベント一覧
                        </div>
                    </div>
                    <table className="mt-3  table-fixed space-y-10 space-x-10 block bg-blue-50 border-collapse min-w-100">
                        <thead className=" font-semibold bg-gray-600 text-white text-2xl">
                            <th className=" px-36 py-10 ">
                                イベント名
                            </th>
                            <th className=" px-36 py-10 ">
                                開始
                            </th>
                            <th className=" px-36 py-10 ">
                                終了
                            </th>
                        </thead>
                    </table>
                </div>
        </div>
    )
}