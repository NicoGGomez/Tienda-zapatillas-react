import { useState } from 'react'
import './App.css'
import { CardZapatilla } from './card-zapatilla'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardZapatilla nombre={'Air Jordan 1 Zoom CMFT 2'} img={'https://imgs.search.brave.com/YDj4dlLpzcJwEyoEb2apPwZzLhmGTMErgIq6l_nQpaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5yZXZpc3RhZ3Eu/Y29tL3Bob3Rvcy82/NjE2YTM3YjUyNjdi/MDdlMWIxYThkZjEv/Mzo0L3dfMzIwLGNf/bGltaXQvYWlyLWpv/cmRhbi0xLW1pZC1z/ZS16YXBhdGlsbGFz/LWJjVmRiUS5qcGc'} precio={'200'} descripcion={'Los colores del firmamento tiñen el que es uno de los lanzamientos más recientes de la factoría Jordan: una zapatilla de caña alta que mezcla en su confección el ante, la malla y los materiales sintéticos, trío que vincula elegancia con practicidad, a la vez que incorpora la tecnología Nike Air para reducir impactos y la espuma Formula 23 para acolchar el pie. El resultado es, como tú mismo puedes comprobar, una oda a la belleza y la comodidad incontestables.'}/>
      <h1>Tienda de zapatillas</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
