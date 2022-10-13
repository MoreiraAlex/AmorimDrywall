import styles from '../styles/layout/Main.module.css'

import Icon from '../components/Icon'
import Galery from '../components/Galery'

import { Link } from 'react-scroll'

export default function Main() {
  return (
    <main>
      <section id='home' className={styles.home}>
        <Link to='about' spy={true} smooth={true} offset={0} duration={800}>
          &#xF279;
        </Link>
      </section>
      <section id="about" className={styles.about}>
            <div></div>
            <div>
                <h2>Sobre nós</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestiae adipisci vero odit totam ex et, eius aperiam aliquid doloribus eveniet, architecto, saepe alias possimus voluptates at reprehenderit libero delectus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis eius laborum saepe doloremque eligendi provident repudiandae molestias, ipsum placeat voluptatem perferendis sequi eos quae voluptas officia, at consequuntur unde.
                </p>
            </div>
      </section>
      <section className={styles.call}>
            <div>
                <span>Solicite seu orçamento pelo Whatsapp</span>
                <a href=" https://wa.me/5513988393565" target="_blank">
                  <Icon size='3rem'>&#xF618;</Icon>
                </a>
            </div>
            <div>
                <span>Visite nossas redes sociais</span>
                <a href="https://www.instagram.com/amorim_drywall/?hl=pt-br" target="_blank">
                  <Icon size='3rem'>&#xF437;</Icon>
                </a>
            </div>
        </section>      
        <section id="services" className={styles.services}>
            <h2>Serviços</h2>
            <div>
                <div>
                    <div>
                      <div className={styles.ilha}></div>
                    </div>
                    <div>
                        <h3>Ilha</h3>
                        <p>
                            A Ilha de Drywall é um serviço inovador e ao mesmo tempo clássico, proporcionando um lindo acabamento, deixando o ambiente que quiser com o design que deseja.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                      <div className={styles.sanca}></div>
                    </div>
                    <div>
                        <h3>Sanca</h3>
                        <p>
                          A sanca de drywall, é o que há de moderno quando o assunto é decoração de ambientes, pois permite que sejam feitos vários tipos de formas e desenhos no ambiente.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                      <div className={styles.cortineiro}></div>
                    </div>
                    <div>
                        <h3>Cortineiro</h3>
                        <p>
                          O cortineiro aproveita o forro de Drywall já construído e a cortina é instalada entre a parede e o forro. É um modelo mais moderno e quando iluminado, fica ainda mais charmoso e aconchegante!
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                      <div className={styles.forro}></div>
                    </div>
                    <div>
                        <h3>Forro</h3>
                        <p>
                          O forro de Drywall é uma vedação indicada para edifícios residenciais e comerciais, o produto é leve, sustentável, fácil de se trabalhar e que não gera entulho.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                      <div className={styles.divisorias}></div>
                    </div>
                    <div>
                        <h3>Divisórias</h3>
                        <p>
                          A divisória de Drywall é um sistema de construção de gesso acartonado que confere rápida e fácil instalação, sem sujeira, com muitas possibilidades de uso.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                      <div className={styles.reparos}></div>
                    </div>
                    <div>
                        <h3>Reparos</h3>
                        <p>
                          Os reparos em revestimentos, paredes e tetos de drywall são mais simples, além de mais rápidos e limpos do que os serviços realizados em alvenaria.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="galery" className={styles.galery}>
            <h2>Galeria</h2>
            <p>Conheça ainda mais sobre meu trabalho !</p>
            <Galery/>
        </section>
    </main>
  )
}