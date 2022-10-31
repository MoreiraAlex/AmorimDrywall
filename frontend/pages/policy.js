import styles from '../styles/pages/Policy.module.css'

import Footer from '../layout/Footer'

import Icon from '../components/Icon'
import Logo from '../components/Logo'
import Link from 'next/link'

export default function Policy() {
  return (    
    <>
        <header>
            <nav className={styles.nav}>
                <Link href='/'>
                    <a><Logo reduce={true}/></a>
                </Link>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/amorim_drywall/?hl=pt-br' target="_blank">
                            <Icon size='1.5rem' reduce={true}>&#xF437;</Icon>
                        </a>
                    </li>
                    <li>
                        <a href='https://wa.me/5513988393565' target="_blank">
                            <Icon size='1.5rem' reduce={true}>&#xF618;</Icon>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

        <section className={styles.policy}>
            <div>
                <h1>Política de Privacidade</h1>
                <p>
                    A sua privacidade é importante para nós. É política do site AmorimDrywall respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <strong>AmorimDrywall</strong>, e outros sites que possuímos e operamos.
                </p>
                <p>
                    Trabalhamos com base na Lei de Proteção de Dados (13.709/2018) que traz garantias de privacidade, confidencialidade, retenção, proteção aos direitos fundamentais de liberdade e  o livre desenvolvimento da personalidade da pessoa. Além disso, respeitamos a Constituição Federal da República Federativa do Brasil, o Código de Defesa do Consumidor (Lei 8.078/90), Marco Civil da Internet (Lei 12.965/14).
                </p>
                <p>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
                <p>
                    Deixamos claro o motivo que estamos coletando e como será usado, pois tudo é feito para correta administração geral.
                </p>

                <p>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis pela legislação atual para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>
                <p>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto por determinação judicial.
                </p>
                <p>
                    O nosso site pode ter links para sites externos que não são operados por nós. Diante disto, não nos responsabilizamos por danos de terceiros. Esteja ciente de que não temos controle sobre o conteúdo e práticas de sites de terceiros e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </p>
                <p>
                    Na qualidade de consumidor, você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </p>
                <p>
                    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. {/*Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através <a href="URL" target="_blank">do nosso formulário</a>.*/}
                </p>
                <p>Nossa política é atualizada de forma constante.</p>
                <p>
                    Fica, desde já, o titular de dados ciente que o conteúdo desta Política de Privacidade pode ser alterado a critério do site AmorimDrywall, independente de aviso ou notificação.  Em caso de alteração, as modificações produzem todos os efeitos a partir do momento da disponibilização no site.
                </p>
                <p>
                    O site AmorimDrywall não se responsabiliza caso você venha utilizar seus dados de forma incorreta ou inverídica, ficando excluído de qualquer responsabilidade neste sentido.
                </p>
            </div>

            <div>
                <h2>Política de Cookies</h2>

                <h3>O que são cookies?</h3>
                <p>
                    Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou quebrar certos elementos da funcionalidade do site.
                </p>

                <h3>Como usamos os cookies?</h3>
                <p>
                    Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.
                </p>

                <h3>Desativar cookies</h3>
                <p>
                    Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
                </p>

                <h3>Cookies que definimos</h3>
                <ul>
                    <li>
                        <strong>Cookies relacionados à conta</strong><br/>Se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.
                    </li>
                    <li>
                        <strong>Cookies relacionados ao login</strong><br/>Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
                    </li>
                    <li>
                        <strong>Cookies relacionados a pesquisas</strong><br/>Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.
                    </li>
                    <li>
                        <strong>Cookies relacionados a formulários</strong><br/>Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.
                    </li>
                    <li>
                        <strong>Cookies de preferências do site</strong><br/>Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página que for afetada por suas preferências.
                    </li>
                </ul>

                <h3>Cookies de Terceiros</h3>
                <p>
                    Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
                </p>
                <ul>
                    <li>
                        Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.<br/>Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics
                        .
                    </li>
                    <li>
                        As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
                    </li>
                    <li>
                        Periodicamente, testamos novos recursos e fazemos alterações sutis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.
                    </li>
                    <li>
                        À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analisar nossos custos de publicidade e produtos para garantir o melhor preço possível.
                    </li>
                </ul>

                <h3>Compromisso do Usuário</h3>
                <p>
                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o site AmorimDrywall oferece e com caráter enunciativo, mas não limitativo:
                </p>
                <ol>
                    <li>
                        Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;
                    </li>
                    <li>
                        Respeito a todas as legislações nacionais ou internacionais em que o Brasil é signatário;
                    </li>
                    <li>
                        Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, casas de apostas, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                    </li>
                    <li>
                        Não causar danos aos sistemas físicos hardwares e lógicos softwares do site AmorimDrywall, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados;
                    </li>
                    <li>
                        Os conteúdos publicados, possuem direitos autorais e de propriedade intelectual reservados, conforme estabelece a Lei de Direitos Autorais n. 9.610, de 19.2.1998 do Governo Federal Brasileiro e correlatas. Qualquer infringência, serão comunicados às autoridades competentes.
                    </li>
                </ol>
            </div>

            <div>
                <h2>Mais informações</h2>
                <p>
                    Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </p>
                <p>
                    O site AmorimDrywall empregará esforços para resguardar as informações e dados coletados do usuário pelo site. Todavia, considerando que não há meio de transmissão e retenção de dados eletrônicos plenamente eficaz e seguro, o site AmorimDrywall não pode assegurar que terceiros não autorizados não logrem êxito no acesso indevido, eximindo-se de qualquer responsabilidade por danos e prejuízos decorrentes da conduta de terceiros, ataques externos ao site como: vírus, invasão ao banco de dados, vícios ou defeitos técnicos, assim como operacionais resultante da utilização do site e em razão de falhas de conexão.
                </p>
            </div>

        </section>

        <Footer/>
    </>
  )
}