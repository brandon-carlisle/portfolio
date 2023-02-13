export default function DefaultTags({ title }: { title?: string }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Brandon Carlisle | Web developer interested in modern tools, and making cool stuff on the web"
      />
      <link href="/favicon.ico" rel="shortcut icon" />
      <title>
        {title ? `${title} | Brandon Carlisle` : 'Brandon Carlisle'}
      </title>
    </>
  );
}
