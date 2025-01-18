"use client"; 
import React from 'react';
import Burger from '../home/components/hamburger';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  PRTeam: Member[];
}

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
  <motion.div
    className="h-[230px] mx-auto"
    initial={{ opacity: 0, scale: 0.9 }} 
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 1 }} 
  >
    <div className="w-[153px] h-[160px] bg-black border-t-4 border-b-2 border-x-2 border-[#008080] rounded-xl">
      <div>
        <Image
          width={100}
          height={153}
          className="w-[100px] h-[153px] mx-auto justify-center"
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="flex flex-col justify-center text-white">
        <div className="text-center pt-4">{member.name}</div>
        <div className="text-center pb-4">{member.role}</div>
      </div>
    </div>
  </motion.div>
);

const membersData: MembersData = {
  coreTeam: [
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
  ],
  techTeam: [
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
  ],
  designTeam: [
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
  ],
  FinanceTeam: [
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
  ],
  PRTeam: [
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
    { name: 'Gugli Thakur', role: 'Secretary', image: '/images/card.png' },
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

      <div className="flex pt-24 pl-4 justify-start items-center space-x-6  overflow-x-auto whitespace-nowrap">
        {/* Design Team Button */}
        <motion.div
          className="flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:bg-opacity-40 hover:rounded-xl p-2"
          onClick={() => scrollToSection('design-team')}
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}  
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-xl text-black">🖌️</span>
          </div>
          <div className="text-white text-center pt-1">Design Team</div>
        </motion.div>

        {/* Core Team Button */}
        <motion.div
          className="flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rounded-xl p-2"
          onClick={() => scrollToSection('core-team')}
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}  
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-xl text-black">👥</span>
          </div>
          <div className="text-white text-center pt-1">Core Team</div>
        </motion.div>

        {/* Tech Team Button */}
        <motion.div
          className="flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rounded-xl p-2"
          onClick={() => scrollToSection('tech-team')}
          whileHover={{ scale: 1.1 }} // Add hover effect
          whileTap={{ scale: 0.95 }}  // Add tap effect
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-xl text-black">💻</span>
          </div>
          <div className="text-white text-center pt-1">Tech Team</div>
        </motion.div>

        {/* Finance Team Button */}
        <motion.div
          className="flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rounded-xl p-2"
          onClick={() => scrollToSection('finance-team')}
          whileHover={{ scale: 1.1 }} // Add hover effect
          whileTap={{ scale: 0.95 }}  // Add tap effect
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-xl text-black">💰</span>
          </div>
          <div className="text-white text-center pt-1">Finance Team</div>
        </motion.div>

        <motion.div
          className="flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:rounded-xl p-2"
          onClick={() => scrollToSection('pr-team')}
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <span className="text-xl text-black">📢</span>
          </div>
          <div className="text-white text-center pt-1">PR Team</div>
        </motion.div>

      </div>

      {/* Core Team Section */}
      <motion.div
        id="core-team"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row justify-center text-[24px] pt-7 items-center text-white text-opacity-70">
          CORE TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.coreTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </motion.div>

      {/* Tech Team Section */}
      <motion.div
        id="tech-team"
        className="bg-black bg-[url('/images/member.png')] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          TECH TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.techTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </motion.div>

      {/* Design Team Section */}
      <motion.div
        id="design-team"
        className="bg-black bg-[url('/images/member.png')] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          DESIGN TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.designTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </motion.div>

      <motion.div
        id="finance-team"
        className="bg-black bg-[url('/images/member.png')] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          FINANCE TEAM
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.FinanceTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </motion.div>

      <motion.div
        id="pr-team"
        className="bg-black bg-[url('/images/member.png')] bg-cover bg-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row justify-center text-[24px] pt-20 items-center text-white text-opacity-70">
          PR Team
        </div>
        <div className="grid grid-cols-2 pt-8 mx-8 gap-4">
          {membersData.PRTeam.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Members;
