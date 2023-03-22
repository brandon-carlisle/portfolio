import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  const title = 'Brandon Carlisle';
  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasSubtitle = searchParams.has('subTitle');
  const subTitle = hasSubtitle
    ? searchParams.get('subTitle')?.slice(0, 100)
    : '';

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-slate-900 text-slate-100">
        <h1 tw="text-8xl leading-tight">{title}</h1>
        <h2 tw="text-6xl leading-tight">{subTitle}</h2>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    },
  );
}
