import React, { PropsWithChildren } from "react";

interface Props {
  Icon?: JSX.Element;
  className?:string;
}

const SmallButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  Icon,
  className,
}) => {
  return (
    <button
      className={`border-button text-sm text-white justify-center px-3 text-center py-2 rounded-full bg-deep-blue flex items-center gap-1 ${className
      }`}
    >
      <p>{children}</p>
      {Icon && Icon}
    </button>
  );
};

export default SmallButton;
