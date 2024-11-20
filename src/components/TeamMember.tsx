import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  return (
    <div className="flex gap-2.5">
      <img loading="lazy" src={imageSrc} alt={`${name}'s profile`} className="object-contain shrink-0 w-10 rounded-lg aspect-square" />
      <div className="flex flex-col">
        <div className="font-semibold leading-snug text-white">{name}</div>
        <div className="text-slate-500">{role}</div>
      </div>
    </div>
  );
};

export default TeamMember;