import { Button } from '@/components/button'
import Carousel from '@/components/carousel'
import { Title } from '@/components/title'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

export default function Home() {
  return (
    <>
      <section>
        <Carousel />
      </section>
      <section
        id="about"
        className="grid-rows-5 items-center bg-zinc-900 md:grid lg:grid-cols-5 lg:grid-rows-1"
      >
        <div
          className="col-span-2 row-span-2 hidden h-full w-full bg-[url(https://renovation.thememove.com/wp-content/uploads/2015/04/project05-380x270.jpg)] bg-cover 
          bg-center bg-no-repeat md:block
          "
        ></div>
        <div className="row-span-3 space-y-8 px-5 py-10 md:px-20 md:py-32 lg:col-span-3">
          <Title.Root>
            <Title.Span>Somos profissionais e </Title.Span>
            <Title.H1>Especialistas em Drywall</Title.H1>
          </Title.Root>
          <div className="space-y-3 text-sm text-white sm:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              deserunt sint, iure modi libero quo illo quae laborum commodi
              numquam beatae aut illum laudantium omnis at in minima magnam
              adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quo ducimus, perspiciatis eligendi nam repellat ex quaerat, optio
              dignissimos alias impedit illo tenetur mollitia error ipsam
              consequatur exercitationem aut voluptates eaque. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptates ullam est saepe
              praesentium sint accusamus nobis nemo iste vitae hic possimus nisi
              asperiores enim corrupti corporis, illo sed! Libero, possimus.
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
      </section>
    </>
  )
}
