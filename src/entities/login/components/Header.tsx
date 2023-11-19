import { subtitles, titles } from "@/ui/fonts";
import React from "react";

interface HeaderProps {
  openning: string;
  invite: string;
  actionElement: string;
  action: any;
  content: string;
  children?: React.ReactNode;
}
const Header = ({ openning, invite, actionElement, action, content, children }: HeaderProps) => {
  return (
    <div>
      <div className={`${subtitles.className} flex justify-between `}>
        <h1>
          Welcome to{" "}
          <span className={`${titles.className} text-slate-500`}>Flight.com</span>
        </h1>
        <div>
          <p>{openning}</p>
          <p>
            {invite}{" "}
            <span className="text-slate-500 cursor-pointer underline" onClick={action}>
              {actionElement}
            </span>
            .
          </p>
        </div>
      </div>
      <h2 className={`${titles.className} text-5xl text-slate-800`}>{content}</h2>
      {children}
    </div>
  );
};

export default Header;
