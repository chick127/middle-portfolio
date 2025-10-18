'use client'
import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Test',
    image: '/next.js.png',
    description: 'next.js로 만든 테스트 프로젝트이다.',
    siteUrl: 'https://test-one-gray-94.vercel.app/',
    githubUrl: 'https://github.com/chick127/test',
  },
  {
    id: 2,
    title: 'Clerk-app',
    image: '/clerk-app.png',
    description: '로그인을 할 수 있고, repository 연동이 가능한 프로젝트이다.',
    siteUrl: 'https://clerk-app-2-five.vercel.app/',
    githubUrl: 'https://github.com/chick127/clerk-app-2',
  },
  {
    id: 3,
    title: 'Webdemo',
    image: '/웹데모.png',
    description: 'HTML, CSS, JavaScript로 만든 기초적인 웹사이트 프로젝트이다.',
    siteUrl: 'https://web-demo1-lac.vercel.app/',
    githubUrl: 'https://github.com/chick127/WebDemo1',
  },
  {
    id: 4,
    title: 'My-homepage',
    image: '/myhomepage.png',
    description:
      '애니메이션 기술이 적용된 중간과제 개인 홈페이지 프로젝트이다.',
    siteUrl: 'https://my-homepage-self.vercel.app/',
    githubUrl: 'https://github.com/chick127/My-homepage',
  },
  {
    id: 5,
    title: 'Team-Project',
    image: '/teamproject.png',
    description: '생성형 ai와 웹 개발 내용이 들어간 중간과제 팀 프로젝트이다.',
    siteUrl: 'https://team-project-lemon.vercel.app/',
    githubUrl: 'https://github.com/chick127/team-project',
  },
  {
    id: 6,
    title: 'Final-Task',
    image: '/finaltask.png',
    description:
      '그 동안 실습했던 과제들 모음과 프로그래머스 문제풀이 내용이 있는 기말과제 개인 홈페이지 프로젝트이다.',
    siteUrl: 'https://final-task-xi.vercel.app/',
    githubUrl: 'https://github.com/chick127/final-task',
  },
  {
    id: 7,
    title: 'Final-Team-Task',
    image: '/finalteamtask.png',
    description:
      '웹 개발의 세계라는 주제로 웹 개발에 대한 설명과 뉴스, 퀴즈 등이 들어가있는 기말과제 팀 프로젝트이다.',
    siteUrl: 'https://final-team-task.vercel.app/',
    githubUrl: 'https://github.com/chick127/final-team-task',
  },
]

interface ProjectCardProps {
  title: string
  description: string
  image: string
  siteUrl: string
  githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  siteUrl,
  githubUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col border border-gray-100">
      <div className="relative h-40 w-full bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-1 text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="mt-3 flex space-x-2">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-2 bg-orange-900 text-white text-sm rounded-lg hover:bg-orange-700 transition"
          >
            사이트 보기
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600 transition"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProjectPage() {
  const semester2Projects = projects.slice(0, 2)
  const semester1Projects = projects.slice(2)

  return (
    <div
      className="min-h-screen p-5 sm:p-8 md:p-12 lg:p-7"
      style={{ backgroundColor: '#fffd9f' }}
    >
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-orange-900">
        Project
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 pb-2 text-orange-900 opacity-80">
          2학기 프로젝트
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {semester2Projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              siteUrl={project.siteUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 pb-2 text-orange-900 opacity-80">
          1학기 프로젝트
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {semester1Projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              siteUrl={project.siteUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
