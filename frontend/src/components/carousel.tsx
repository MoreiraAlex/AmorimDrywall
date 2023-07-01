'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowDown } from 'react-icons/io'
import { VscTools } from 'react-icons/vsc'
import { Link } from 'react-scroll'

export default function Carousel() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
  }
  return (
    <Slider className="h-[75vh]" {...settings}>
      <div
        className={`relative h-[75vh] bg-[url(https://amorimdrywall.alexmoreira.dev.br/_next/static/media/home.64a625d3.jpg)]
          bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-zinc-950 before:opacity-70 
      `}
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 text-center">
          <VscTools
            className="h-20 w-20 rounded bg-base p-3 text-4xl text-white 
              [clip-path:polygon(0%_25%,25%_0%,50%_0%,75%_0%,100%_25%,100%_75%,75%_100%,25%_100%,0%_75%)]
            "
          />
          <h2 className="w-2/3 font-alt text-2xl text-light md:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <Link to="about" spy={true} smooth={true} offset={0} duration={800}>
            <IoIosArrowDown className="animate-bounce text-6xl text-baseColor transition hover:scale-125" />
          </Link>
        </div>
      </div>
      <div
        className={`h-[75vh] bg-[url(https://amorimdrywall.alexmoreira.dev.br/_next/static/media/sanca.f8c529b2.jpg)] bg-cover bg-center bg-no-repeat
          before:absolute before:inset-0 before:bg-zinc-950 before:opacity-70
        `}
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 text-center">
          <VscTools
            className="h-20 w-20 rounded bg-base p-3 text-4xl text-white 
              [clip-path:polygon(0%_25%,25%_0%,50%_0%,75%_0%,100%_25%,100%_75%,75%_100%,25%_100%,0%_75%)]
            "
          />
          <h2 className="w-2/3 font-alt text-2xl text-light md:text-4xl">
            Quo animi quam consequatur architecto quasi neque quisquam
            cupiditate sit?
          </h2>
          <Link to="about" spy={true} smooth={true} offset={0} duration={800}>
            <IoIosArrowDown className="animate-bounce text-6xl text-baseColor transition hover:scale-125" />
          </Link>
        </div>
      </div>
      <div
        className={`h-[75vh] bg-[url(https://renovation.thememove.com/wp-content/uploads/2015/04/project05-380x270.jpg)] bg-cover bg-center bg-no-repeat
          before:absolute before:inset-0 before:bg-zinc-950 before:opacity-70
        `}
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 text-center">
          <VscTools
            className="h-20 w-20 rounded bg-base p-3 text-4xl text-white 
              [clip-path:polygon(0%_25%,25%_0%,50%_0%,75%_0%,100%_25%,100%_75%,75%_100%,25%_100%,0%_75%)]
            "
          />
          <h2 className="w-2/3 font-alt text-2xl text-light md:text-4xl">
            Sequi quas, pariatur earum cupiditate temporibus quo porro quidem ut
            corrupti nam veritatis labore.
          </h2>
          <Link to="about" spy={true} smooth={true} offset={0} duration={800}>
            <IoIosArrowDown className="animate-bounce text-6xl text-baseColor transition hover:scale-125" />
          </Link>
        </div>
      </div>
    </Slider>
  )
}
