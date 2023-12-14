import React from 'react';

const Blog = () => {
    return (
        <div className="mt-10">
            <h1 className="text-[#ffffff] text-2xl" style={{ fontFamily: 'Kong' }}>Blog</h1>
            <div className="mt-8 flex flex-col">
                <div className="flex justify-between items-center pb-2">
                    <h2 className="text-[#ffffff] text-lg">
                        <p>coming soon</p>
                    </h2>
                    <span className="text-[#737373]">Aug 29, 2023</span>
                </div>
            </div>
        </div>
    );
}

export default Blog;
