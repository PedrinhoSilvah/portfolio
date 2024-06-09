import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio explicabo
      reiciendis rem, cum nisi dolor nobis adipisci alias debitis doloremque
      fuga quam perferendis blanditiis labore vitae dolore aperiam error animi.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=PedrinhoSilvah&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PedrinhoSilvah&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
