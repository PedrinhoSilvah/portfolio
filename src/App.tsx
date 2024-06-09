import Project from './container/Project'
import Siderbar from './container/Siderbar'
import Sobre from './container/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Siderbar />
        <main>
          <Sobre />
          <Project />
        </main>
      </Container>
    </>
  )
}

export default App
