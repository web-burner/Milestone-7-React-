
import { Suspense } from 'react'
import './App.css'
import Bottles from './Bottles'


const bottlesPromise = fetch('./bottles.json').then(res => res.json())

function App() {

  return (
    <>
    <Suspense fallback={<h1>Bottles are loading...</h1>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense>
    </>
  )
}

export default App
