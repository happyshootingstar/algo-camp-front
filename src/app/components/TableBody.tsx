import React from "react";
import Link from "next/link"


const TableBody = (props:any) => {
    return              (
    // <tbody>
                            <tr>
                                <td className="bg-green-100 border px-4 py-2">
                                    {props.name}
                                </td>
                                <td className="bg-green-100 border px-4 py-2 ">
                                    {props.id}
                                </td>
                                <td className="bg-green-100 border px-4 py-2">
                                    {props.detatime}
                                </td>
                                <td className="bg-green-100 border px-4 py-2">
                                    admin
                                </td>
                                <td className="bg-white">
                                    <Link href="/pages/account/users/renew">
                                        <button className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300 border">
                                            編集
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="rounded bg-red-200 p-2 transition-colors hover:bg-red-300 border">
                                        削除
                                    </button>
                                </td>
                            </tr>
                        // </tbody>;
                    )}

export default TableBody;