import { CONTENT } from '@/content';
import Link from 'next/link';
import Image from 'next/image';

const github = CONTENT.global.navigation.github;
const profileImage = CONTENT.global.person.pictures[0];

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-foreground/10 bg-gradient-to-b from-transparent to-white/5 py-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-3 text-center">
        <Image
          src={profileImage}
          alt="Roshan profile"
          width={56}
          height={56}
          className="rounded-full object-cover border-2 border-white shadow-md mb-1"
        />
        <div className="flex items-center justify-center gap-4">
          <Link href={github.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Image
              src={github.content}
              alt="GitHub"
              width={28}
              height={28}
              className="hover:scale-110 transition-transform duration-200 drop-shadow filter brightness-0 invert"
            />
          </Link>
        </div>
        <div className="text-gray-400 text-sm font-medium">
          Software Engineer Roshan
        </div>
        <div className="text-gray-500 text-xs mt-1">
          <a href="mailto:grappleroshan7@gmail.com" className="hover:underline">grappleroshan7@gmail.com</a><br />
          <a href="tel:+9779749742245" className="hover:underline">+977 9749742245</a>
        </div>
      </div>
    </footer>
  );
} 