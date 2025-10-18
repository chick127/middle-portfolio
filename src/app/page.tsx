'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-orange-900">
        Welcome to my DH&apos;s Portfolio
      </h1>

      <br />

      <div className="flex justify-center">
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image
            src="/마티.png"
            alt="마티"
            width={240}
            height={240}
            className="object-cover w-full h-full opacity-0 animate-fadeIn"
            style={{ clipPath: 'circle(50%)' }}
          />
        </div>
      </div>
      <br />

      <div className="flex justify-center gap-5 md:gap-8">
        <div className=" hover:shadow-2xl transition-shadow duration-300">
          <Link href={'https://www.instagram.com/waterchick4/?next=%2F&hl=ko'}>
            <Image
              src="/인스타.png"
              alt="인스타"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </Link>
        </div>
        <div className="rounded-full overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <Link href={'https://github.com/chick127'}>
            <Image
              src="/깃허브.png"
              alt="깃허브"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <Link href={'https://www.notion.so/20ced39d3e1f80b18f18d929f76c10df'}>
            <Image
              src="/노션.png"
              alt="노션"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </Link>
        </div>
      </div>
      <br />

      <div className="border-b-2 border-orange-900 w-2/3 md:w-1/3 mx-auto mb-6 opacity-50"></div>
      <p className="text-center text-orange-900 px-4">
        웹서버 보안 프로그래밍 수업을 듣고 있는 허다현입니다.
      </p>
    </div>
  )
}
