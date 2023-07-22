"use client";

import Header from "@/components/Header";
import Images from "@/components/Images";
import Showcase from "@/components/Showcase";
import PromptInput from "@/components/PromptInput";
import Newheader from "@/components/Newheader";
import Main from "@/components/Main";
import { RecoilRoot } from "recoil";
import {Toaster} from 'sonner'

export default function Home() {
  return (
    <RecoilRoot>
      <Toaster position="top-center" />
      <main>
      <div className="flex min-h-screen flex-col items-center py-2 bg-purple-200 font-sans">
        <Newheader/>
        
        <Showcase/>
        <Main/>
        
        <PromptInput />
        <Images />
        </div>
      </main>
    </RecoilRoot>
  );
}
