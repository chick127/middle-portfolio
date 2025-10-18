'use client'
import React from 'react'

interface Member {
  id: number
  name: string
  studentId: string
  githubImage: string
  githubUrl: string
}

const teamMembers: Member[] = [
  {
    id: 1,
    name: '박민영',
    studentId: '92410756',
    githubImage: '/박민영.png',
    githubUrl: 'https://github.com/minyeong0125',
  },
  {
    id: 2,
    name: '송미강',
    studentId: '92410794',
    githubImage: '/송미강.png',
    githubUrl: 'https://github.com/Junbyung2',
  },
  {
    id: 3,
    name: '원종은',
    studentId: '92410823',
    githubImage: '/원종은.png',
    githubUrl: 'https://github.com/euniii0224',
  },
  {
    id: 4,
    name: '이성혜',
    studentId: '92415548',
    githubImage: '/이성혜.png',
    githubUrl: 'https://github.com/SuNghYe414',
  },
  {
    id: 5,
    name: '허다현',
    studentId: '92410990',
    githubImage: '/허다현.png',
    githubUrl: 'https://github.com/chick127',
  },
]

const TeamMemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="flex-none p-6 w-full md:w-[30%] flex flex-col items-center border border-gray-200 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl bg-white">
      <div className="w-36 h-36 md:w-44 md:h-44 bg-gray-100 rounded-full overflow-hidden mb-5">
        <img
          src={member.githubImage}
          alt={member.name}
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>

      <div className="flex flex-col items-center text-center w-full">
        <h5 className="text-lg md:text-2xl font-bold mb-4 text-orange-900">
          {member.studentId}
          <br />
          {member.name}
        </h5>

        <a
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-900 no-underline hover:text-gray-900 block"
        >
          <img
            src="/깃허브.png"
            alt="GitHub"
            className="w-10 h-auto inline-block"
          />
        </a>
      </div>
    </div>
  )
}
export default function TeamPage() {
  return (
    <div
      className="min-h-screen p-8 md:p-7"
      style={{ backgroundColor: '#fffd9f' }}
    >
      <header className="text-center mb-20">
        <h1 className="text-4xl font-extrabold text-orange-900 mb-2">
          Team MiJung
        </h1>
        <br />
        <div className="border-b-2 border-orange-900 w-1/2 mx-auto mb-6 opacity-50"></div>
        <p className="text-xl text-gray-500">
          깃허브 아이콘을 누르면 해당 팀원의 GitHub 페이지로 이동합니다.
        </p>
      </header>

      <section className="w-full">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-5 space-y-10 md:space-y-0 px-4 md:px-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}
