import React from 'react';

const CursorFollower = ({ mousePosition }) => {
  return (
    <div 
      className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: 'translate3d(0, 0, 0)'
      }}
    />
  );
};

export default CursorFollower; 