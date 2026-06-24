import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 p-6 bg-[#0f0f0f] border border-[#1e1e1e] hover:border-[#333] flex flex-col relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover/bento:opacity-10 bg-white" />
      <div className="relative z-10 w-full h-1/2 mb-4">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10 flex flex-col flex-grow">
        <div className="mb-2">
            {icon}
        </div>
        <div className="font-sans font-bold text-white text-2xl mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-zinc-400 text-sm flex-grow">
          {description}
        </div>
      </div>
    </div>
  );
};
