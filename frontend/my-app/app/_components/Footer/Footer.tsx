import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer footer-center bg-slate-600 text-slate-50 p-10">
            <aside>
                <Image className="rounded-full" src="/Project_Logo.png" width={100} height={100} alt="フードクリエイションプロジェクトのロゴ"></Image>
                <div className="pt-5">
                    <p className="font-bold">
                        金沢工業大学　フードクリエイションプロジェクト
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </aside>
        </footer>
    )
}