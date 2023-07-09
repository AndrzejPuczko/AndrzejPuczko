import { useState, useEffect } from 'react'

const useCounter = calculate => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (calculate) {
				setCounter(prevCounter => prevCounter + 1)
			} else {
				setCounter(prevCounter => prevCounter - 1)
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [calculate])

	return counter
}

export default useCounter
