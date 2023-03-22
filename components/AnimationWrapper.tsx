'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface AnimationWrapperProps {
  children: React.ReactNode;
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
