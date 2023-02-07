export default function DefaultTags({ title }: { title?: string }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <title>
        {title ? `${title} | Brandon Carlisle` : 'Brandon Carlisle'}
      </title>
    </>
  );
}
