import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
