'use client'

import { Input } from "@nextui-org/input";
import Banner from "../utils/BannerTop";
import {Pagination} from "@nextui-org/react";

export default function Blog() {
    return(
        <div className="w-full min-h-[100vh] items-center flex flex-col gap-3 bg-slate-300">
            <Banner>Blog E-movee</Banner>
            <Input 
                variant="faded"
                type="search" 
                label="Search" 
                color="primary"
                className="w-[25%] mt-5"
            />
            <div className="w-full h-[65em] mt-4 flex justify-between">
                <div className="w-[15%] flex justify-center items-center">
                    {/* cookies */}
                </div>
                <div className="w-[70%] flex justify-center">
                    <div className="w-full flex flex-col justify-between items-center gap-5">
                        <div className="w-full h-[50vh] flex justify-around">
                            <div className="w-[60vh] bg-white rounded-2xl flex items-center justify-center">1</div>
                            <div className="w-[60vh] bg-white rounded-2xl flex items-center justify-center">2</div>
                        </div>
                        <div className="w-full h-[50vh] flex justify-around">
                            <div className="w-[60vh] bg-white rounded-2xl flex items-center justify-center">3</div>
                            <div className="w-[60vh] bg-white rounded-2xl flex items-center justify-center">4</div>
                        </div>
                    </div>
                </div>
                <div className="w-[15%] flex justify-center items-center">
                    {/* cookies */}
                </div>
            </div>
            <div className="w-full mb-3 py-2 flex justify-center">
                <Pagination isCompact showControls total={10} initialPage={1} />
            </div>
        </div>
    )
}