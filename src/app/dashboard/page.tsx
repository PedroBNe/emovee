'use client';

import React from 'react';
import Link from 'next/link';
import PostsList from './posts/allPosts/page';

export default function DashboardLayout({ children = <PostsList /> }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <nav className="w-[300px] h-auto flex justify-center bg-black text-white">
        <ul className="w-full flex flex-col items-center gap-4 m-4">
          <li className="w-full h-fit border-2 border-slate-600 p-3 rounded-lg hover:bg-slate-600 ease-in-out transition delay-75">
            <Link href="/dashboard">
              <button className="w-full h-full text-start font-bold">Posts</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full m-5 flex flex-col gap-10 items-center">
        <h1 className="font-bold text-3xl">Blog Dashboard</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}
