import TableBody from "./TableBody";

const TableList = (props:any) => {
    return <div className="flex justify-center py-90">
                                <table
                         className=" table-fixed space-y-10 space-x-10 block bg-white border-collapse min-w-100  ">
                        <thead
                        className="font-bold "
                        >
                            <tr className="bg-white">
                            <th
                            className="border px-4 py-2 bold bg-blue-200">
                            </th>
                            <th
                            className="border px-4 py-2 bold bg-blue-200">
                                ログインID
                            </th>
                            <th
                            className="border px-4 py-2 bold bg-blue-200">
                                登録日
                            </th>
                            <th
                            className="border px-4 py-2 bold bg-blue-200">
                                種別
                            </th>
                           <th className="bg-white"></th>

                            </tr>
                        </thead>
                        < TableBody 
                        name = {props.name}
                        id = {props.id}/>
                        </table>
    </div>;
}

export default TableList;