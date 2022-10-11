import styles from '../styles/layout/Main.module.css'

// import Input from '../components/Input'
// import Btn from '../components/Button'
import Icon from '../components/Icon'
// import Step from '../components/Step'

// import step1 from '../public/Analysis.png'
// import step2 from '../public/VideoCall.png'
// import step3 from '../public/collaboration.png'
// import step4 from '../public/Agreement.png'

export default function Main() {
  return (
    <main>
      <section id={styles.home}>
        <a href="#about">&#xF279;</a>
      </section>
      {/* <section className={styles.content1}>
        <div className={styles.area1}>
          <h2>Vamos juntos fazer o seu marketing digital ter resultados da geração de leads até a venda</h2>
          <div className={styles.area}>
            <h2>Solicite um orçamento</h2>
            <form>
              <Input type='text' placeholder='Nome'/>
              <Input type='email' placeholder='E-mail'/>
              <Input type='tel' placeholder='Telefone'/>
              <label><textarea placeholder='Mais informações'></textarea></label>
              <Btn width='40%' height='10%'>Enviar</Btn>
            </form>
          </div>
        </div>
        <div className={styles.area2}>
          <p>Nós podemos ajudar você tambem</p>
          <div>
            <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
            <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
            <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
          </div>
        </div>
      </section>
      <section className={styles.content2}>
        <div className={styles.first}>
          <div>
            <p>
              “A parceria com a AMAgency veio num momento importante. Em menos de um ano vimos ganhos extraordinários.”
            </p>
            <h3>Juliana U., Sócio fundador, TST</h3>
          </div>
          <div>
            <p>
              “A AMAgency tem uma proposta de trabalho muito legal, são bastante organizados e muito atualizados com as tendências de hoje.”
            </p>
            <h3>Danielle B., Fundador do BcB</h3>
          </div>
          <div>
            <p>
              “Estamos muito satisfeitos com o trabalho realizado até aqui e esperamos que nossa parceria prospere por muitos anos.”
            </p>
            <h3>Nelson R., Gerente de Marketing da MS</h3>
          </div>
        </div>
        <div className={styles.second}>
          <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
          <h2>Entenda nosso processo<br/>logo após o pedido de orçamento</h2>
          <Icon size='40px' color='#C4C4C4'>&#xF22D;</Icon>
        </div>
        <div className={styles.third}>
          <span className={styles.line}></span>
          <ul>
            <li>
              <Step src={step1} alt='Imagem do passo 1' width='120px' height='120px'/>
              <p>1. Uma equipe especializada analisa seu pedido.</p>
            </li>
            <li>
              <Step src={step2} alt='Imagem do passo 2' width='120px' height='120px'/>
              <p>2. Realizamos uma ligação com você para entender todos os detalhes da sua demanda.</p>
            </li>
            <li>
              <Step src={step3} alt='Imagem do passo 3' width='120px' height='120px'/>
              <p>3. Apresentamos uma proposta com base em todas as informações e analise realizada.</p>
            </li>
            <li>
              <Step src={step4} alt='Imagem do passo 4' width='120px' height='120px'/>
              <p>4. Formalizamos o contrato e início das atividades.</p>
            </li>
          </ul>
        </div>
      </section> */}
    </main>
  )
}