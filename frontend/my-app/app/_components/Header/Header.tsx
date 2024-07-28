import React from "react";

export default function Header() {
    return (
        <div className="navbar bg-red-500">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <button className="btn btn-ghost text-2xl tooltip tooltip-bottom text-yellow-300" data-tip="ﾌｰﾄﾞｸﾘｴｲｼｮﾝ">アプリ名を入力</button>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}