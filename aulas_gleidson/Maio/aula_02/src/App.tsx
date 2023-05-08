import './App.css'
import { Artigo } from './components/artigo/Artigo'
import { Categoria } from './components/categoria/Categoria'

export const App = () => {

  return (
    <div className="App">
      <Categoria>
        <Artigo
          titulo={'Palmirinha Onofre, apresentadora e cozinheira, morre aos 91 anos'}
          imagem={'https://s2.glbimg.com/JtRD4x-KQ39FzvOYjb4RbtAhjcE=/0x0:3000x2050/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Z/7/SMAe3pQ3CefBwb9jK5QQ/palmirinha-iwi-onodera-3.jpg'}
          descricao={'Ícone da TV, ela sofreu um agravamento de problemas renais crônicos, afirmam familiares. A vovó mais querida do Brasil trabalhou por mais de 10 anos em programas culinários da TV Gazeta.'}
          link={'https://g1.globo.com/sp/sao-paulo/noticia/2023/05/07/palmirinha-apresentadora-e-cozinheira-morre-aos-91-anos.ghtml'} />

        <Artigo
          titulo={'Os 25 anos de Iris do Goo Goo Dolls... vocalista diz que segredo do hit é mensagem simples'}
          imagem={'https://s2.glbimg.com/YoVBFmC2uOm2a7l39-25Ps9mnPA=/0x0:1400x1000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/9/J/9YpA7PSqqCGbla21xYgA/goo-goo-dolls-90s.jpg'}
          descricao={'Ao g1, cantor explica problemas de saúde e comemora fase pai de família sem álcool: Tive medo de não ser bom o suficiente se não bebesse. Série Quando eu hitei tem artistas que sumiram.'}
          link={'https://g1.globo.com/pop-arte/musica/noticia/2023/05/08/os-25-anos-de-iris-do-goo-goo-dolls-vocalista-diz-que-segredo-do-hit-e-mensagem-simples.ghtml'} />
      </Categoria>

      <Categoria>
        <div>cliente1</div>
        <div>cliente2</div>
        <div>cliente3</div>
        <div>cliente4</div>
        <div>cliente5</div>
      </Categoria>
    </div>
  )
}

export default App
