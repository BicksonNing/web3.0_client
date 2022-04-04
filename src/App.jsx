
import {Footer, Navbar, Services, Transaction, Welcome} from './components'


export default function App() {
  return (
    <h2 className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
    </h2>
  )
}