'use client'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import Carousel from '@/components/carousel'
import { Title } from '@/components/title'
import { BiTimer, BiLogoWhatsapp, BiX } from 'react-icons/bi'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { VscTools } from 'react-icons/vsc'
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from 'public/logo.png'
import img2 from 'public/footer-bg.jpg'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [button, setButton] = useState(false)

  function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide, slideCount } = props

    let styleObject = {
      ...style,
      fill: '#dcb36f',
      width: '40px',
      height: '40px',
      transform: 'translate(100%, 0)',
      right: 0,
    }
    if (slideCount && currentSlide === slideCount - 1)
      styleObject = { ...styleObject, opacity: '0.5' }

    return (
      <IoIosArrowForward
        className={className}
        style={styleObject}
        onClick={onClick}
      />
    )
  }

  function PrevArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide } = props

    let styleObject = {
      ...style,
      fill: '#dcb36f',
      width: '40px',
      height: '40px',
      transform: 'translate(-100%, 0)',
      left: 0,
    }
    if (currentSlide === 0) styleObject = { ...styleObject, opacity: '0.5' }

    return (
      <IoIosArrowBack
        className={className}
        style={styleObject}
        onClick={onClick}
      />
    )
  }

  return (
    <>
      <section>
        <Carousel />
      </section>

      <section id="about" className="bg-zinc-900">
        <div className="container mx-auto grid-rows-5 items-center md:grid lg:grid-cols-5 lg:grid-rows-1">
          <div
            className="col-span-2 row-span-2 hidden h-full w-full bg-[url(https://renovation.thememove.com/wp-content/uploads/2015/04/project05-380x270.jpg)] bg-cover
            bg-center bg-no-repeat md:block
            "
          ></div>
          <div className="row-span-3 space-y-8 px-5 py-10 md:px-20 md:py-20 lg:col-span-3 ">
            <Title.Root>
              <Title.Span>Somos profissionais e </Title.Span>
              <Title.H1>Especialistas em Drywall</Title.H1>
            </Title.Root>
            <div className="space-y-3 text-sm text-white sm:text-base">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deserunt sint, iure modi libero quo illo quae laborum commodi
                numquam beatae aut illum laudantium omnis at in minima magnam
                adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quo ducimus, perspiciatis eligendi nam repellat ex
                quaerat, optio dignissimos alias impedit illo tenetur mollitia
                error ipsam consequatur exercitationem aut voluptates eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ullam est saepe praesentium sint accusamus nobis nemo
                iste vitae hic possimus nisi asperiores enim corrupti corporis,
                illo sed! Libero, possimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deserunt sint, iure modi libero quo illo quae laborum commodi
                numquam beatae aut illum laudantium omnis at in minima magnam
                adipisci.
              </p>
            </div>
            <Button.Root>
              <Button.Span>Veja Mais</Button.Span>
              <Button.Icon icon={MdKeyboardDoubleArrowRight} />
            </Button.Root>
          </div>
        </div>
      </section>
      <section className="bg-zinc-200">
        <div className="container mx-auto grid grid-cols-none gap-5 py-10 sm:grid-cols-11">
          <Card.Root className="col-span-3 flex-col justify-start text-center sm:col-start-2 lg:flex-row lg:text-left">
            <Card.Icon
              icon={VscTools}
              className="h-20 w-20 bg-black fill-light p-4 [clip-path:polygon(0%_25%,25%_0%,50%_0%,75%_0%,100%_25%,100%_75%,75%_100%,25%_100%,0%_75%)]
              md:w-24
              "
            />
            <Card.Section>
              <Card.Title
                text="Profissional especializado"
                className="border-b text-black"
              />
              <Card.Subtitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </Card.Section>
          </Card.Root>
          <Card.Root className="col-span-3 flex-col justify-start text-center lg:flex-row lg:text-left">
            <Card.Icon
              icon={BiTimer}
              className="h-20 w-20 bg-black fill-light p-4 [clip-path:polygon(0%_25%,25%_0%,50%_0%,75%_0%,100%_25%,100%_75%,75%_100%,25%_100%,0%_75%)] 
              md:w-24
              "
            />
            <Card.Section>
              <Card.Title
                text="Entrega rápida"
                className="border-b text-black"
              />
              <Card.Subtitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </Card.Section>
          </Card.Root>
          <Card.Root className="col-span-3 flex-col justify-start text-center lg:flex-row lg:text-left">
            <Card.Icon
              icon={PiCurrencyCircleDollar}
              className="h-20 w-20 bg-black fill-light p-4 [clip-path:polygon(0%_25%,25%_0%,50%_0%,75%_0%,100%_25%,100%_75%,75%_100%,25%_100%,0%_75%)] 
              md:w-24
              "
            />
            <Card.Section>
              <Card.Title
                text="Preço acessível"
                className="border-b text-black"
              />
              <Card.Subtitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </Card.Section>
          </Card.Root>
        </div>
      </section>
      <section id="objection" className="bg-zinc-900">
        <div className="container mx-auto grid-rows-1 items-center lg:grid lg:grid-cols-5">
          <div className="row-span-3 space-y-8 px-5 py-10 md:px-20 lg:col-span-3 lg:py-20">
            <Title.Root>
              <Title.Span>Por que nos escolher?</Title.Span>
              <Title.H1 className="border-none p-0">Amorim Drywall</Title.H1>
            </Title.Root>
            <div className="space-y-3 text-sm text-white sm:text-base">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                deserunt sint, iure modi libero quo illo quae laborum commodi
                numquam beatae aut illum laudantium omnis at in minima magnam
                adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quo ducimus, perspiciatis eligendi nam repellat ex
                quaerat, optio dignissimos alias impedit illo tenetur mollitia
                error ipsam consequatur exercitationem aut voluptates eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="list-disc pl-8">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
            <Button.Root>
              <Button.Span>Veja nossos serviços</Button.Span>
              <Button.Icon icon={MdKeyboardDoubleArrowRight} />
            </Button.Root>
          </div>
          <div
            className="col-span-2 row-span-2 hidden h-full w-full bg-[url(https://renovation.thememove.com/wp-content/uploads/2020/06/home-calculator-03.jpg)] bg-cover
              bg-center bg-no-repeat lg:block
              "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div className="container mx-auto space-y-16 px-5 py-10 md:p-20">
          <Title.Root>
            <Title.Span>Confira algumas das nossas principais</Title.Span>
            <Title.H1>Entregas</Title.H1>
          </Title.Root>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-5 lg:gap-10">
            <div
              className="
                relative h-96 w-full rounded bg-slate-400 
                bg-[url(https://renovation.thememove.com/wp-content/uploads/2020/06/home-calculator-03.jpg)] bg-cover bg-center 
                after:absolute after:inset-0 after:bg-black after:opacity-50
                after:transition hover:cursor-pointer
                hover:after:opacity-0 sm:h-80 md:max-w-sm lg:h-96
              "
              onClick={() => {
                button ? setButton(false) : setButton(true)
              }}
            ></div>
            <div
              className="
                relative h-96 w-full rounded bg-slate-400 
                bg-[url(https://renovation.thememove.com/wp-content/uploads/2020/06/home-calculator-03.jpg)] bg-cover bg-center 
                after:absolute after:inset-0 after:bg-black after:opacity-50
                after:transition hover:cursor-pointer
                hover:after:opacity-0 sm:h-80 md:max-w-sm lg:h-96
              "
              onClick={() => {
                button ? setButton(false) : setButton(true)
              }}
            ></div>
            <div
              className="
                relative h-96 w-full rounded bg-slate-400 
                bg-[url(https://renovation.thememove.com/wp-content/uploads/2020/06/home-calculator-03.jpg)] bg-cover bg-center 
                after:absolute after:inset-0 after:bg-black after:opacity-50
                after:transition hover:cursor-pointer
                hover:after:opacity-0 sm:h-80 md:max-w-sm lg:h-96
              "
              onClick={() => {
                button ? setButton(false) : setButton(true)
              }}
            ></div>
          </div>
          <Button.Root className="mx-auto bg-base hover:bg-transparent">
            <Button.Span className="text-white group-hover:text-baseColor">
              Veja nossa galeria
            </Button.Span>
            <Button.Icon
              icon={MdKeyboardDoubleArrowRight}
              className="text-white group-hover:text-baseColor"
            />
          </Button.Root>
        </div>
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 bg-opacity-90 ${
            button ? 'fixed' : 'hidden'
          }`}
        >
          <BiX
            className="absolute right-5 top-5 text-5xl text-light hover:cursor-pointer hover:text-baseColor"
            onClick={() => {
              button ? setButton(false) : setButton(true)
            }}
          />
          <Slider
            className="container sm:w-[80vw] md:w-[50vw]"
            infinite={false}
            dots={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            <div className="h-[50vh] bg-[url(https://renovation.thememove.com/wp-content/uploads/2020/06/home-calculator-03.jpg)] bg-cover bg-top bg-no-repeat lg:h-[70vh]"></div>
            <div className="h-[50vh] bg-[url(https://renovation.thememove.com/wp-content/uploads/2020/06/home-calculator-03.jpg)] bg-cover bg-top bg-no-repeat lg:h-[70vh]"></div>
          </Slider>
        </div>
      </section>
      <section className="bg-zinc-200">
        <a
          href="https://wa.me/5513988393565"
          target="_blank"
          className="block bg-zinc-950 transition hover:bg-zinc-500"
        >
          <div className="container mx-auto flex items-center justify-center gap-5 p-5 sm:py-10 ">
            <BiLogoWhatsapp className="fill-light text-6xl" />
            <span className="font-alt text-xl text-light sm:text-2xl lg:text-4xl">
              Peça um orçamento direto pelo Whatsapp!
            </span>
          </div>
        </a>
        <div className="container mx-auto flex flex-col items-center gap-5 p-5 text-center md:gap-10 md:p-20">
          <Title.Root>
            <Title.H1 className="border-none p-0 text-baseColor">
              Entre em contato
            </Title.H1>
          </Title.Root>
          <p className="max-w-[750px] md:text-xl">
            Para tirar todas as suas dúvidas e pedir maiores informações, entre
            em contato conosco. Nossa equipe dará um retorno o mais breve
            possível.
          </p>
          <Button.Root className="bg-base hover:bg-transparent">
            <Button.Span className="text-white group-hover:text-baseColor">
              Fale conosco
            </Button.Span>
          </Button.Root>
        </div>
      </section>
    </>
  )
}
