"use client"
import Link from "next/link";
import { useState, useEffect} from "react"
import { useRouter } from 'next/navigation'  // Usage: App router
import TableBody from "@/app/components/TableBody";

export default  function admin(){
    const router = useRouter()
    const [users, setUsers]= useState<any[]>([]);

    useEffect(()=>{
    const fetchUserData = async()=>{
        try{
                const response = await fetch ("http://127.0.0.1:8000/users/all/teacher");
                const userData = await response.json();
                setUsers(userData);
                console.log(users)
            } catch(error){
                console.error('エラーです', error);
            }
        };
        fetchUserData();
    }, 
    []);
    return(
        <div>
            <h1
            className=" mt-12 font-bold text-center py-30 text-4xl">
                User一覧
            </h1>
            <div className=" text-right mx-56 ">
                <Link href={"/pages/account/users/newaccount"} >
                    <button className="  bg-blue-100 border rounded-full w-44 h-12">
                        ユーザー作成
                    </button>
                </Link>
            </div>
            <table className=" table-fixed space-y-10 space-x-10 block bg-white border-collapse min-w-100  ">
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
                        </thead>{
                            <tbody>{users.map((user)=>(
                                < TableBody
                                name = {user.name}
                                id = {user.id}
                                detatime={user.created_at}
                                />)
                        )
                    }
                        </tbody>
                    }
                </table>
        </div>
    )
}






// import Link from "next/link";
// const url = "http://127.0.0.1:8000/users/all/teacher"
// export default function admin(){
//     return(
//         <div>
//             <h1
//             className=" mt-12 font-bold text-center py-30 text-4xl">
//                 User一覧
//             </h1>
//             <div className=" text-right mx-56 ">
//             <Link href={"/pages/account/users/newaccount"} >
//                 <button className="  bg-blue-100 border rounded-full w-44 h-12">
//                 ユーザー作成
//                 </button>
//              </Link>
//             </div>
//             <div
//             className="flex justify-center py-90"
//             >
//                         <table
//                          className=" table-fixed space-y-10 space-x-10 block bg-white border-collapse min-w-100  ">
//                         <thead
//                         className="font-bold "
//                         >
                            
//                             <tr className="bg-white">
//                             <th
//                             className="border px-4 py-2 bold bg-blue-200">
//                             </th>
//                             <th
//                             className="border px-4 py-2 bold bg-blue-200">
//                                 ログインID
//                             </th>
//                             <th
//                             className="border px-4 py-2 bold bg-blue-200">
//                                 登録日
//                             </th>
//                             <th
//                             className="border px-4 py-2 bold bg-blue-200">
//                                 種別
//                             </th>
//                            <th className="bg-white"></th>

//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td
//                                 className="bg-green-100 border px-4 py-2">
//                                     XXXXX
//                                 </td>
//                                 <td
//                                 className="bg-green-100 border px-4 py-2 ">
//                                     1
//                                 </td>
//                                 <td
//                                 className="bg-green-100 border px-4 py-2">
//                                     2024/04/02 12:00
//                                 </td>
//                                 <td className="bg-green-100 border px-4 py-2">
//                                     admin
//                                 </td>
//                                 <td className="bg-white">
//                                     <Link href="/pages/account/users/renew">
//                                     <button
//                                     type = "button"
//                                     className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300 border"
//                                     >
//                                         編集
//                                     </button>
//                                     </Link>
//                                 <button
//                                 type = "button"
//                                 className="rounded bg-red-200 p-2 transition-colors hover:bg-red-300 border"
//                                 >
//                                     削除
//                                 </button>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td
//                                 className="bg-green-100 border px-4 py-2">
//                                     *****
//                                 </td>
//                                 <td
//                                 className="bg-green-100 border px-4 py-2"
//                                 >2
//                                 </td>
//                                 <td
//                                 className="bg-green-100 border px-4 py-2">
//                                     2024/04/03 16:00
//                                 </td>
//                                 <td className="bg-green-100 border px-4 py-2">
//                                     admin
//                                 </td>
//                                 <td className="bg-white">
//                                     <Link href="/pages/account/users/renew">
//                                         <button
//                                         type = "button"
//                                         className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300 border"
//                                         >
//                                             編集
//                                         </button>
//                                     </Link>
//                                     <button
//                                     type = "button"
//                                     className="rounded bg-red-200 p-2 transition-colors hover:bg-red-300 border"
//                                     >
//                                     削除
//                                     </button>
//                                     </td>
//                             </tr>
//                         </tbody>
//                         </table>

//                 </div>
//         </div>
//     )
// }