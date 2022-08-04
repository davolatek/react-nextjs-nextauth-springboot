import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <p className="text-white font-bold flex-auto">User Management System</p>

        {session && (
          <div className="flex items-center sm:space-x-2 justify-end">
            <Image
              onClick={signOut}
              className="rounded-full cursor-pointer"
              height="30"
              layout="fixed"
              title="click to logout"
              width="30"
              alt={session ? session.user.name : "image"}
              src={session?.user.image}
            ></Image>
            <p className="text-white font-bold">{session?.user.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
