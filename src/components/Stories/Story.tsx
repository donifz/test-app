import Image from 'next/image';
import React from 'react';

const Story = ({ content, isActive }) => {
  
  return (
    <div className={`${isActive ? 'flex' : 'hidden'} justify-center items-center w-full h-full`}>
      {content.type === 'image' ? (
        <Image width={480} height={480} className="min-w-full min-h-full aspect-[4/3] object-cover" src={content.src} alt="story content" />
      ) : (
        <video className="w-full h-full object-cover aspect-[4/3]" src={content.src} playsInline loop autoPlay={isActive} muted controls />
      )}
    </div>
  );
};

export default Story;
