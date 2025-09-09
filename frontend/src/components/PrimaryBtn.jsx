import { cn } from "../lib/utils";

const PrimaryBtn = ({ icon, className, children, ...props }) => {
  return (
    <button
      className={cn(
        "bg-primary shadow-lg text-2xl tracking-wide border-0 w-max font-semibold duration-200 text-white rounded-full px-12 py-[10px] md:py-3 flex items-center justify-center space-x-4 cursor-pointer hover:scale-105 transition-transform duration-300",
        className
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default PrimaryBtn;
