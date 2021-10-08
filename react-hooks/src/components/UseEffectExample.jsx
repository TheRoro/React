import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

const UseEffectExample = () => {
  const [values, handleChange] = useForm({ email: '', password: '' })

  //This renders every time the component changes
  useEffect(() => {
    console.log('render')
  })

  //This will only be called when the component is mounted
  useEffect(() => {
    console.log('component is mounted')

    //Cleanup function happens when the component is unmounted
    return () => {
      console.log('component is unmounted')
    }
    //The dependency array is empty
    //Is similar to componentDidMount and componentWillUnmount from class components
  }, [])

  //This renders every time the variable from the dependency array is updated
  useEffect(() => {
    console.log(`Email was updated with value: ${values.email}`)
    const onMouseMove = e => {
      console.log(e)
    }
    window.addEventListener('mousemove', onMouseMove)
    //In this example, cleanup function cleans the old value of the variable inside the dependency array
    return () => {
      console.log('component is unmounted')
      window.removeEventListener('mouseMove', onMouseMove)
    }
  }, [values.email])

  return (
    <div>
      <input
        name='email'
        placeholder='email'
        value={values.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  )
}

export default UseEffectExample
