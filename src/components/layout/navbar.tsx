"use client";

import { useSession } from "next-auth/react";
import { LoginButton, LogoutButton } from "./buttons.component";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user || null;
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    setUserInfo(user);
  }, [session]);

  return (
    <div className="p-5 border-b border-slate-200 flex flex-row justify-between items-center">
      <div className="font-bold">就诊记录查询</div>
      <div>
        {userInfo ? (
          <>
            <div className="space-x-3">
              <span className="text-sm">
                {userInfo.name}({userInfo.email})
              </span>
              <LogoutButton />
            </div>
          </>
        ) : (
          <>
            <LoginButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
