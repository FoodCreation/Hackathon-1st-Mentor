import React from "react";
import "app/styles/header-color.css"

export default function Header() {
    return (
        <div className="navbar bg-slate-600">
            <div className="navbar-start custom-gray">
            </div>
            <div className="navbar-center">
                <button className="btn btn-ghost text-3xl tooltip tooltip-bottom text-slate-50" data-tip="ﾌｰﾄﾞｸﾘｴｲｼｮﾝ">MenuMatch</button>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}