import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { useFetch } from './useFetch'
import { useForm } from './useForm'

const Hooks = () => {
  const [count, setCount] = useState(1)
  const [count2, setCount2] = useState(20)

  const [values, handleChange] = useForm({ email: '', password: '' })

  // only fires when values.email changes
  // useEffect(() => {
  //   console.log(`useeffect`)

  //   const onMouseMove = (e) => {
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove', onMouseMove)

  //   return () => {
  //     // console.log(`unmount or cleanup can go here if needed`)
  //     window.removeEventListener(onMouseMove)
  //   }
  // }, [values.email])

  // useEffect(() => {
  //   console.log(`effect 2: can have multiple and they show in order.`)
  // })

  // http://numbersapi.com/43/trivia

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  return (
    <Layout>
      <div>
        <h1>Hooks</h1>

        <h2>useEffect</h2>
        <div>{loading ? 'loading...' : data}</div>

        <h2>useState</h2>
        <button
          onClick={() => {
            setCount((c) => c + 1)
            setCount2((c) => c + 1)
          }}
        >
          +
        </button>
        <div>count 1: {count}</div>
        <div>count 2: {count2}</div>

        {/* Shared logic here */}
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
      </div>
    </Layout>
  )
}

export default Hooks
