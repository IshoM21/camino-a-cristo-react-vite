
import { CardCards } from "./Components/CardCards"
import { Header } from "./Components/Header"
import StickyNavbar from "./Components/HeaderSticky"
import { AppRouter } from "./routers/AppRouter"

const App = () => {
  return (
    <>
      <Header />
      {/* <StickyNavbar /> */}
      {/* <CardCards /> */}
      <div className="container mx-auto">

        <AppRouter/>
      </div>
    </>
  )
}
export default App