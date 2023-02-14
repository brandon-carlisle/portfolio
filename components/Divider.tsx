type DividerProps = {
  childLeft: React.ReactNode;
  childRight: React.ReactNode;
};

export default function Divider({ childLeft, childRight }: DividerProps) {
  return (
    <div className="mb-12 flex items-center justify-between gap-2 text-gray-200/50">
      {childLeft}
      <div className="h-[1px] w-1/4 bg-blue-500/20 md:w-1/2"></div>
      {childRight}
    </div>
  );
}
