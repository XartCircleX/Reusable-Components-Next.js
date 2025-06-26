'use client';
import MyButton from './components/MyButton';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ color: '#2563eb', marginBottom: 8 }}>Reusable Components</h1>
      <p style={{ color: '#64748b', marginBottom: 32 }}>
        Examples of reusable components with Next.js and React.
      </p>
      <div style={{ display: 'flex', gap: 24 }}>
        <MyButton
          label="Primary Button"
          onClick={() => alert('¡Primary Button!')}
        />
        <MyButton
          label="Secondary Button"
          onClick={() => alert('¡Secondary Button!')}
          style={{ background: 'linear-gradient(90deg, #f472b6 0%, #facc15 100%)' }}
        />
        <MyButton
          label="Success Button"
          onClick={() => alert('¡Success Button!')}
          style={{ background: 'linear-gradient(90deg, #34d399 0%, #60a5fa 100%)' }}
        />
      </div>
    </div>
  );
}