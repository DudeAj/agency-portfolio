import React, { PropsWithChildren } from "react";

interface Props {
  Icon?: JSX.Element;
}

const SmallButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  Icon,
}) => {
  return (
    <button
      className={`border-button text-sm text-white px-2 py-2 rounded-full bg-deep-blue flex items-center gap-1`}
    >
      <p>{children}</p>
      {Icon}
    </button>
  );
};

export default SmallButton;
