'use client';

export default function ClickMeButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button
      onClick={() => alert('Button clicked!')}
      type="button"
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      onMouseOver={() => console.log('Mouse over button')}
    >
      Click Me On!
    </button>
  );
}
