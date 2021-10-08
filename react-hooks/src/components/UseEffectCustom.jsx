import React, { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

const UseEffectCustom = () => {
	const [count, setCount] = useState(() =>
		JSON.parse(localStorage.getItem('count'))
	)
	const { data } = useFetch(`http://numbersapi.com/${count}/math`)

	useEffect(() => {
		localStorage.setItem('count', JSON.stringify(count))
	}, [count])

	return (
		<>
			<div>{!data ? 'loading...' : data}</div>
			<div>count: {count}</div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</>
	)
}

export default UseEffectCustom
