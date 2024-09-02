'use client'

import { Input } from "@nextui-org/input";
import Banner from "../utils/BannerTop";

export default function Blog() {
    return(
        <div className="w-full min-h-[100vh] items-center flex flex-col gap-3 bg-slate-300">
            <Banner>Blog E-moviee</Banner>
            <Input 
                variant="faded"
                type="search" 
                label="Search" 
                color="primary"
                className="w-[25%] mt-5"
            />
        </div>
    )
}