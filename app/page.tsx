import Image from 'next/image';
import ClickMeButton from '@/components/click-me-button';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello World</h1>
      <ClickMeButton />
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        className="dark:invert"
      />
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">app/page.tsx</code>
      </p>
    </div>
  );
}
