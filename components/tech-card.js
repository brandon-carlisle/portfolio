function TechCard({ title, links }) {
  return (
    <div className="mb-8 rounded-md bg-slate-900/50 p-8">
      <p className="mb-4">{title}</p>

      <ul className="flex flex-col gap-2">
        {links.map((item) => {
          return (
            <li key={item.title}>
              <a href={item.href}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TechCard;
