'use client';

import dynamic from 'next/dynamic';

const ChatWidget = dynamic(() => import('@/components/UI/ChatWidget'), {
  ssr: false,
});

export default function ChatWidgetWrapper() {
  return <ChatWidget />;
}
