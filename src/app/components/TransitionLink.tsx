"use client";
import { animateOut } from "@/utils/animate";
import { usePathname, useRouter } from "next/navigation";

const TransitionLink = ({
  href,
  label,
  ref,
}: {
  href: string;
  label: string;
  ref?: React.ForwardedRef<HTMLHeadingElement>;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animateOut(href, router);
    }
  };

  console.log(pathname)

  return (
    <h1
      ref={ref}
      className="text-white/50 text-2xl font-bold sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl hover:line-through font-mono   cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </h1>
  );
};

export default TransitionLink;
