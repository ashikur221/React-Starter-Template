import React from 'react';
import { IoChevronForward } from "react-icons/io5";
import GridDistortion from './GridDistortion';

const Banner = () => {
    return (
        <GridDistortion>
            <div
                className="relative z-10 flex flex-col items-center justify-center w-full min-h-[40vh] text-center max-w-[700px] mx-auto px-5 py-10 md:py-0 lg:lg:px-0 text-white">
                <button
                    className="py-1.5 pl-5 backdrop-blur-md pr-6 border-gray-600 rounded-full text-[0.9rem] border mb-4">
                    ✨ Introducing React Starter
                </button>

                <h1
                    className="text-[2rem] lg:text-[3rem] font-bold leading-[40px] lg:leading-[50px]">
                    Welcome to React Started Template.
                </h1>

                <p
                    className="text-white/80 max-w-[700px] mt-3">
                    We use ShadCn, ZenUi  component library for React.
                    These Library are Tailwind CSS components library for any needs. Comes with UI examples &
                    blocks,
                    templates, Icons, Color Palette and more.
                </p>

               
            </div>
        </GridDistortion>
    );
};

export default Banner;
