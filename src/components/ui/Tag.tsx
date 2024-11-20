import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const Tag: React.FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`text-neutral-dark border rounded-full px-3 py-2 border-dark-blue-2 w-fit ${className}`}
    >
      {children}
    </div>
  );
};

export default Tag;
