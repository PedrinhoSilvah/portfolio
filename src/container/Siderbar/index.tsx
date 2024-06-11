import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SiderbarContainer } from './style'

const Siderbar = () => (
  <aside>
    <SiderbarContainer>
      <Avatar />
      <Title fontSize={20}>Pedro Miguel</Title>
      <Paragrafo>pedromiguel</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>trocar tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Siderbar
