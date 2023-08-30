import React from 'react';

const Projects = () => {
    return (
        <div className="mt-10">
            <h1 className="text-[#ffffff] text-3xl">Projects</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="p-4">
                    <h2 className="text-[#ffffff] text-lg">
                        <a href="https://github.com/ragingSkull/personal-portfolio" target='_blank' rel='noreferrer'>rotten • egg</a>
                    </h2>
                    <p className="text-[#737373]">A simple personal portfolio</p>
                </div>
                <div className="p-4">
                    <h2 className="text-[#ffffff] text-lg">
                    <a href="https://dearnestle.com.my" target='_blank' rel='noreferrer'>Dear Nestlé Malaysia</a>
                    </h2>
                    <p className="text-[#737373]">Malaysian&#39;s platform for nutrition tips</p>
                </div>
                <div className="p-4">
                    <h2 className="text-[#ffffff] text-lg">
                    <a href="https://dearnestle.com.sg" target='_blank' rel='noreferrer'>Dear Nestlé Singapore</a>
                    </h2>
                    <p className="text-[#737373]">Singaporean&#39;s platform for nutrition tips</p>
                </div>
                <div className="p-4">
                    <h2 className="text-[#ffffff] text-lg">
                        <a href="">coming soon</a>
                    </h2>
                    <p className="text-[#737373]">Stay tuned for more updates!</p>
                </div>
                <div className="p-4">
                    <h2 className="text-[#ffffff] text-lg">
                        <a href="">coming soon</a>
                    </h2>
                    <p className="text-[#737373]">Stay tuned for more updates!</p>
                </div>
                <div className="p-4">
                    <h2 className="text-[#ffffff] text-lg">
                        <a href="">coming soon</a>
                    </h2>
                    <p className="text-[#737373]">Stay tuned for more updates!</p>
                </div>
            </div>
        </div>
    );
}

export default Projects