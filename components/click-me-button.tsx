'use client';

export default function ClickMeButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Click Me
    </button>
  );
}
