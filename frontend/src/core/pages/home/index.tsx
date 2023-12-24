import Keyboard from '@/shared/components/keyboard/keyboard'
import Typer from '@/shared/components/typer/typer'

function Home() {
  return (
    <section>
      <Typer>
        <Typer.WordContainer />
        <Typer.UserTyped />
      </Typer>
      <Keyboard />
    </section>
  )
}

export default Home
