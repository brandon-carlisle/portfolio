import AnimationWrapper from '@/components/AnimationWrapper';

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return <AnimationWrapper>{children}</AnimationWrapper>;
}
