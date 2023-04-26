'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface AnimationWrapperProps {
  children: React.ReactNode;
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
