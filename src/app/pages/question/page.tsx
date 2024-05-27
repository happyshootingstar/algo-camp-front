// 04.問題実施画面
import Link from "next/link";
export default function test (){
    return(
        <div className=" bg-blue-50 h-screen w-full overflow-hidden overflow-y-scroll overflow-w-scroll">
            <div className="flex justify-center mt-4 mb-7">
                <div>
                    <div className=" flex justify-end">
                        <Link href={"/pages/question/detail"} >
                            <button className=" bg-gray-400 text-3xl  rounded-full text-white text-center ms-32 w-72 h-12">
                                問題一覧に戻る
                            </button>
                        </Link>
                    </div>
                    <div className=" mt-12 w-4/5 bg-gray-300 text-black py-6 mx-6 text-4xl justify-end">
                        <h1 className="mx-6 tracking-widest font-bold">
                            問題実施
                        </h1>
                    </div>
                    <div className=" bg-gray-100 h-auto w-4/5 mt-6 text-xl text-gray-700">
                        <p className="mt-1">
                            使用言語
                        </p>
                        <div>
                            <select className=" px-3 bg-white text-black rounded-3xl h-8 w-56 text-sm border border-red-100 focus:border-blue-100 tracking-wide ">
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
                    </div>
                    <div className=" mt-4 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 ">
                            問題
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-4/5">
                            <p className="tracking-wide mt-2 ms-2">
                                n個の整数が並んでいます。iばんめの整数はa(i)で示します。あああああああああああああああああああああああああああああああああ
                                いいいいいいいいいいいいいいいいいいいいいいいいい
                            </p>
                        </div>
                    </div>
                    <div className=" mt-4 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 mt-7 ">
                            制約
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-5/6 h-auto">
                            <p className="tracking-wide mb-9 mt-8 leading-relaxed">
                                n個の整数が並んでいます。iばんめの整数はa(i)で示します。あああああああああああああああああああああああああああああああああ
                                いいいいいいいいいいいいいいいいいいいいいいいいい
                            </p>
                        </div>
                    </div>
                    <div className=" mt-6">
                        <h1 className="text-2xl font-semibold justify-start text-slate-800 mt-7">
                            入力
                        </h1>
                        <p className=" font-normal text-start text-xl text-black ms-5 mt-5">
                            下記のように標準入力から入力する。
                        </p>
                    </div>
                    <div className=" mb-5 mt-3 border border-gray-500 bg-gray-100 w-5/6 h-auto flex flex-wrap tracking-wide leading-normal text-black">
                         <div className=" w-full">
                            <p>
                                あいう
                            </p>
                         </div>
                         <div className=" w-full">
                             <p>
                                あいう
                            </p>
                         </div>
                    </div>
                    <div className=" mt-0">
                        <h1 className="text-2xl font-semibold justify-start text-slate-800">
                            出力
                        </h1>
                    </div>
                    <div className=" border border-gray-500 w-5/6">
                        <p className=" text-xl text-black mt-2 mb-2 tracking-wide flex flex-wrap ms-6">
                            n　個の整数が全て互いに異なるときはYES、そうでないときはNOと出力せよ
                        </p>
                    </div>
                    <div className=" mt-4 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 mt-7 ">
                            入力例１
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-5/6 h-auto bg-gray-200">
                            <div className="tracking-wide mb-3 mt-3 leading-relaxed ">
                                <p className=" w-auto ms-3 tracking-wider">
                                    4
                                </p>
                                <p className=" w-auto ms-3 tracking-widest">
                                    1321
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className=" mt-4 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 mt-7 ">
                            入力例１
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-5/6 h-auto bg-gray-200">
                            <div className="tracking-wide mb-3 mt-3 leading-relaxed ">
                                <p className=" w-auto ms-3 tracking-wider">
                                    NO
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" mt-24 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 mt-7 ">
                            入力例2
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-5/6 h-auto bg-gray-200">
                            <div className="tracking-wide mb-3 mt-3 leading-relaxed ">
                                <p className=" w-auto ms-3 tracking-wider">
                                    4
                                </p>
                                <p className=" w-auto ms-3 tracking-widest">
                                    1423
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-4 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 mt-7 ">
                            入力例2
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-5/6 h-auto bg-gray-200">
                            <div className="tracking-wide mb-3 mt-3 leading-relaxed ">
                                <p className=" w-auto ms-3 tracking-wider">
                                    YES
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-24 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 mt-7 ">
                            入力例3
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-5/6 h-auto bg-gray-200">
                            <div className="tracking-wide mb-3 mt-3 leading-relaxed ">
                                <p className=" w-auto ms-3 tracking-wider">
                                    5
                                </p>
                                <p className=" w-auto ms-3 tracking-widest">
                                    14235
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-4 h-auto w-auto">
                        <p className=" text-2xl font-semibold justify-start text-slate-800 mt-7 ">
                            入力例3
                        </p>
                        <div className=" rounded-lg border border-gray-500 flex flex-weap w-5/6 h-auto bg-gray-200">
                            <div className="tracking-wide mb-3 mt-3 leading-relaxed ">
                                <p className=" w-auto ms-3 tracking-wider">
                                    YES
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className=" mt-28 w-5/6">
                        <p className=" text-start text-2xl ">
                            ソースコード
                        </p>
                    </div>
                    <div className="mt-11 flex flex-wrap">
                        <textarea  className="w-5/6 bg-white h-auto min-h-96 text-start focus:ring-blue-500  block whitespace-pre-wrap">
                            
                        </textarea>
                    </div>
                    <div className="w-5/6">
                        <button className=" shadow-lg bg-emerald-500 shadow-emerald-500/50 text-white px-2 mt-11 text-2xl rounded-lg">
                            採点する
                        </button>
                        <p className=" mt-9 text-lg">
                            採点結果： NONE
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
