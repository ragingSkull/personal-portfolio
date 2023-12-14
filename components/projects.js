import React from 'react';

const Projects = () => {
    return (
        <div className="mt-14">
            <h1 className="text-[#ffffff] text-2xl" style={{ fontFamily: 'Kong' }}>Projects</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="lg:p-4">
                    <h2 className="h-16 sm:h-8 text-[#ffffff] hover:text-[#FFFF00] hover:text-xl text-lg">
                        <a href="https://github.com/ragingSkull/personal-portfolio" target='_blank' rel='noreferrer'>rotten . egg</a>
                    </h2>
                    <p className="text-[#737373]">my personal portfolio</p>
                </div>
                <div className="lg:p-4">
                    <h2 className="h-16 sm:h-8 text-[#ffffff] hover:text-[#FFFF00] hover:text-xl text-lg">
                        <a href="https://dearnestle.com.my" target='_blank' rel='noreferrer'>DearNestle MY</a>
                    </h2>
                    <p className="text-[#737373]">nutrition platform</p>
                </div>
                <div className="lg:p-4">
                    <h2 className="h-16 sm:h-8 text-[#ffffff] hover:text-[#FFFF00] hover:text-xl text-lg">
                        <a href="https://dearnestle.com.sg" target='_blank' rel='noreferrer'>DearNestle SG</a>
                    </h2>
                    <p className="text-[#737373]">nutrition platform</p>
                </div>
                <div className="lg:p-4">
                    <h2 className="h-16 sm:h-8 text-[#ffffff] hover:text-[#FFFF00] hover:text-xl text-lg">
                        <a href="https://packtica.com" target='_blank' rel='noreferrer'>Packtica</a>
                    </h2>
                    <p className="text-[#737373]">packaging & label</p>
                </div>
                <div className="lg:p-4">
                    <h2 className="h-16 sm:h-8 text-[#ffffff] text-lg">
                        <a>coming soon</a>
                    </h2>
                    <p className="text-[#737373]">stay tune</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
