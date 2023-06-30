'use client'
import CardHeader from '@/components/cardHeader'
import Logo from 'public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { BiHome, BiMenu, BiPhone, BiX } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
  const [button, setButton] = useState(false)
  return (
    <header className="relative overflow-x-hidden bg-black">
      <section className="relative mx-auto flex w-full flex-col items-start justify-between gap-5 pb-5 md:container md:flex-row md:items-center md:pb-0">
        <div
          className="relative flex w-full items-center justify-between bg-zinc-500 px-6 before:absolute before:left-0 before:h-full
          before:w-[100vw] before:-translate-x-full before:bg-zinc-500 before:content-[none] after:absolute after:right-0
          after:h-full after:w-10 after:translate-x-full after:bg-zinc-500 after:content-[none]
          after:[clip-path:polygon(0%_0%,100%_50%,0%_100%)] md:mr-10 md:w-[250px] md:justify-center md:p-0 md:before:content-[''] md:after:content-['']
          "
        >
          <Link href="/">
            <Image
              src={Logo}
              quality={100}
              alt="Logo da pagina"
              width={160}
              priority
            />
          </Link>
          <BiMenu
            className="text-5xl text-light md:hidden"
            onClick={() => {
              button ? setButton(false) : setButton(true)
            }}
          />
        </div>
        <CardHeader title="(13) 9 8839-3565" subtitle="amorimdrywall@gmail.com">
          <BiPhone className="ml-5" fill="#dcb36f" />
        </CardHeader>
        <CardHeader
          title="Baixada Santista"
          subtitle="Santos, São Vicente e
        Praia Grande."
        >
          <BiHome className="ml-5" fill="#dcb36f" />
        </CardHeader>
        <div
          className="absolute bottom-0 right-0 z-10 hidden translate-y-[50%] items-center justify-center gap-8 bg-zinc-500 p-2 before:absolute before:left-0
        before:h-full before:w-10 before:-translate-x-full before:bg-zinc-500 before:[clip-path:polygon(0%_50%,100%_0%,100%_100%)] 
        after:absolute
        after:right-0 after:h-full after:w-[100vw] after:translate-x-full after:bg-zinc-500 md:flex
        "
        >
          <a href="#" target="_blank">
            <FaFacebookF className="fill-light text-2xl text-red-600 hover:fill-base" />
          </a>
          <a
            href="https://www.instagram.com/amorim_drywall/?hl=pt-br"
            target="_blank"
          >
            <FaInstagram className="fill-light text-2xl hover:fill-base" />
          </a>
          <a href="https://wa.me/5513988393565" target="_blank">
            <FaWhatsapp className="fill-light text-3xl hover:fill-base" />
          </a>
        </div>
      </section>
      <nav
        className={`fixed right-0 top-0 z-20 flex h-screen w-screen flex-col justify-evenly bg-black py-6 transition-all md:visible md:static md:z-0 md:h-auto md:w-full md:translate-x-0 md:bg-zinc-100 ${
          button ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <ul className="flex h-[50vh] flex-col items-center justify-evenly font-alt text-xl md:container md:mx-auto md:h-auto md:w-2/3 md:flex-row md:justify-evenly">
          <li>
            <Link
              href="#"
              className=" uppercase text-light hover:text-light md:text-base lg:text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className=" uppercase text-light hover:text-light md:text-base lg:text-xl"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className=" uppercase text-light hover:text-light md:text-base lg:text-xl"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className=" uppercase text-light hover:text-light md:text-base lg:text-xl"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className=" uppercase text-light hover:text-light md:text-base lg:text-xl"
            >
              Contato
            </Link>
          </li>
          <li className="absolute right-5 top-5 text-5xl text-light hover:text-light md:hidden">
            <BiX
              onClick={() => {
                button ? setButton(false) : setButton(true)
              }}
            />
          </li>
        </ul>
        <div className="flex justify-evenly md:hidden">
          <a href="#" target="_blank">
            <FaFacebookF className="fill-light text-2xl text-red-600 hover:fill-base" />
          </a>
          <a
            href="https://www.instagram.com/amorim_drywall/?hl=pt-br"
            target="_blank"
          >
            <FaInstagram className="fill-light text-2xl hover:fill-base" />
          </a>
          <a href="https://wa.me/5513988393565" target="_blank">
            <FaWhatsapp className="fill-light text-3xl hover:fill-base" />
          </a>
        </div>
      </nav>
    </header>
  )
}