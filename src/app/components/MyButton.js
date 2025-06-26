'use client';
import React from 'react';

export default function MyButton({ label, onClick, style }) {
  const baseStyle = {
    background: 'linear-gradient(90deg, #4f8cff 0%, #6ee7b7 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 14px 0 rgba(79,140,255,0.15)',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s',
    outline: 'none',
    ...style,
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      style={{
        ...baseStyle,
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hover
          ? '0 8px 24px 0 rgba(79,140,255,0.25)'
          : baseStyle.boxShadow,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}