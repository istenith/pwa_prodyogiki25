"use client"; // Add this to make sure this part runs on the client side

import React from 'react';
import Burger from '../home/components/hamburger';

interface Member {
  name: string;
  role: string;
  image: string;
}

interface MembersData {
  coreTeam: Member[];
  techTeam: Member[];
  designTeam: Member[];
  FinanceTeam: Member[];
}

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
  <div className='h-[210px]'>
    <div className="w-[153px] h-[153px] bg-[url('/images/mem.png')] rounded-sm">
      <div className="">
        <img className="w-[100px] h-[153px] mx-auto justify-center" src={member.image} alt={member.name} />
      </div>
      <div className="flex flex-col justify-center text-white">
        <div className="text-center pt-4">{member.name}</div>
        <div className="text-center pb-4">{member.role}</div>
      </div>
    </div>
  </div>
);

const membersData: MembersData = {
  coreTeam: [
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
  ],
  techTeam: [
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
  ],
  designTeam: [
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
  ],
  FinanceTeam: [
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
    { name: 'Mehul Ambhastha', role: 'Secretary', image: '/images/1.png' },
  ],
};

const Members: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black bg-[url('/images/member.png')] bg-cover bg-center h-screen bg-repeat-y">
      <Burger />

      <div className="pt-8 text-center">
        <select
          onChange={(e) => scrollToSection(e.target.value)}
          className="bg-white text-black p-2 rounded-md"
        >
          <option value="">Team</option>
          <option value="core-team">Core Team</option>
          <option value="tech-team">Tech Team</option>
          <option value="design-team">Design Team</option>
          <option value="finance-team">Finance Team</option>
        </select>
      </div>

      {/* Core Team Section */}
      <div id="core-team">
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          CORE TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.coreTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>

      {/* Tech Team Section */}
      <div id="tech-team" className="bg-black bg-[url('/images/member.png')] bg-cover bg-center">
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          TECH TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.techTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>

      {/* Design Team Section */}
      <div id="design-team" className="bg-black bg-[url('/images/member.png')] bg-cover bg-center ">
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          DESIGN TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.designTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>

      <div id="finance-team" className="bg-black bg-[url('/images/member.png')] bg-cover bg-center min-h-screen">
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          FINANCE TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData. FinanceTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
