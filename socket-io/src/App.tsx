import { useEffect, useState } from 'react'
import JoinRoom from './components/joinRoom/index'
import socketService from './services/socketService'
import GameContext, { IGameContextProps } from './gameContext'
import Game from './components/game'

function App() {
	const [isInRoom, setInRoom] = useState(false)
	const [playerSymbol, setPlayerSymbol] = useState<'x' | 'o'>('x')
	const [isPlayerTurn, setPlayerTurn] = useState(false)
	const [isGameStarted, setGameStarted] = useState(false)

	const connectSocket = async () => {
		const socket = await socketService
			.connect('http://localhost:9000')
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		connectSocket()
	}, [])

	const gameContextValue: IGameContextProps = {
		isInRoom,
		setInRoom,
		playerSymbol,
		setPlayerSymbol,
		isPlayerTurn,
		setPlayerTurn,
		isGameStarted,
		setGameStarted,
	}

	return (
		<GameContext.Provider value={gameContextValue}>
			<div className='App'>
				<header className='App-header'>
					<h1>Tic Tac Toe</h1>
					{!isInRoom && <JoinRoom />}
					{isInRoom && <Game />}
				</header>
			</div>
		</GameContext.Provider>
	)
}

export default App
