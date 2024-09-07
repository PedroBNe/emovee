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
                className="w-[22em]"
            />
            <div className="w-full h-[65em] mt-4 flex flex-col lg:flex-row justify-between">
                <div className="w-[15%] flex justify-center items-center">
                    {/* cookies */}
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center gap-12">
                    <div className="w-full h-fit bg-white rounded-lg shadow-2xl">
                        <div className="w-full">imagem</div>
                        <div className="w-full">
                            <h2>titulo</h2>
                            <p>texto</p>
                        </div>
                    </div>
                    <div className="w-full h-fit bg-white rounded-lg shadow-2xl">
                        <div className="w-full">imagem</div>
                        <div className="w-full">
                            <h2>titulo</h2>
                            <p>texto</p>
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