import { Button } from '@/components/button'
import { Title } from '@/components/title'
import { BiLogoWhatsapp } from 'react-icons/bi'

export default function Manun() {
  return (
    <section className="flex h-[70vh] items-center justify-center bg-slate-900 after:absolute after:inset-0 after:bg-black after:opacity-70">
      <div className="container relative z-10 mx-auto space-y-6 px-5 py-16 pt-48 md:space-y-10 md:px-10 md:pt-16">
        <Title.Root>
          <Title.Span>Página em</Title.Span>
          <Title.H1>Manutenção</Title.H1>
        </Title.Root>
        <p className="text-center text-lg text-light md:text-left md:text-2xl">
          Desculpe-nos pelo transtorno, estamos realizando algumas atualizações
          e melhorias em nosso website.
          <br /> Em breve estaremos de volta com uma experiência ainda melhor.
          <br /> Por enquanto pode tirar suas duvidas via Whatsapp que
          respondemos em instantes!
        </p>
        <a href="https://wa.me/5513988393565" target="_blank" className="block">
          <Button.Root className="w-full">
            <Button.Span>Fale conosco no Whatsapp</Button.Span>
            <Button.Icon icon={BiLogoWhatsapp} />
          </Button.Root>
        </a>
      </div>
    </section>
  )
}
