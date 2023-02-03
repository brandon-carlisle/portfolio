import { CardLinks } from '../pages/profile';
import Container from './Container';

interface TechCardProps {
  title: string;
  links: CardLinks;
}

function TechCard({ title, links }: TechCardProps) {
  return (
    <Container>
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
    </Container>
  );
}

export default TechCard;
