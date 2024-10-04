"use client";
import { animateOut } from "@/utils/animate";
import { usePathname, useRouter } from "next/navigation";

const ToHomeTransition = ({
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
      className="sm:text-2xl font-bold ani cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </h1>
  );
};

export default ToHomeTransition;
