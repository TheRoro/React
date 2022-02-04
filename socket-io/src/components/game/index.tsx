import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import gameContext from '../../gameContext'
import gameService from '../../services/gameService'
import socketService from '../../services/socketService'

const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Zen Tokyo Zoo', cursive;
	position: relative;
`

const RowContainer = styled.div`
	width: 100%;
	display: flex;
`

interface ICellProps {
	borderTop?: boolean
	borderRight?: boolean
	borderLeft?: boolean
	borderBottom?: boolean
}

const Cell = styled.div<ICellProps>`
	width: 13em;
	height: 9em;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	cursor: pointer;
	border-top: ${({ borderTop }) => borderTop && '3px solid #8e44ad'};
	border-left: ${({ borderLeft }) => borderLeft && '3px solid #8e44ad'};
	border-bottom: ${({ borderBottom }) => borderBottom && '3px solid #8e44ad'};
	border-right: ${({ borderRight }) => borderRight && '3px solid #8e44ad'};
	transition: all 270ms ease-in-out;
	&:hover {
		background-color: #8d44ad28;
	}
`

const PlayStopper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 99;
	cursor: default;
`

const X = styled.span`
	font-size: 100px;
	color: #8e44ad;
	&::after {
		content: 'X';
	}
`

const O = styled.span`
	font-size: 100px;
	color: #8e44ad;
	&::after {
		content: 'O';
	}
`

export type IPlayMatrix = Array<Array<string | null>>
export interface IStartGame {
	start: boolean
	symbol: 'x' | 'o'
}

const Game: React.FC<{}> = () => {
	const [matrix, setMatrix] = useState<IPlayMatrix>([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	])

	const {
		playerSymbol,
		setPlayerSymbol,
		setPlayerTurn,
		isPlayerTurn,
		setGameStarted,
		isGameStarted,
	} = useContext(gameContext)

	const updateGameMatrix = (column: number, row: number, symbol: 'x' | 'o') => {
		const newMatrix = [...matrix]
		if (newMatrix[row][column] === null || newMatrix[row][column] === 'null') {
			newMatrix[row][column] = symbol
			setMatrix(newMatrix)
		}
		if (socketService.socket) {
			gameService.updateGame(socketService.socket, newMatrix)
			setPlayerTurn(false)
		}
	}

	const handleGameUpdate = () => {
		if (socketService.socket) {
			gameService.onGameUpdate(socketService.socket, (newMatrix) => {
				setMatrix(newMatrix)
				setPlayerTurn(true)
			})
		}
	}

	const handleGameStart = () => {
		if (socketService.socket) {
			gameService.onStartGame(socketService.socket, (options) => {
				setGameStarted(true)
				setPlayerSymbol(options.symbol)
				if (options.start) {
					setPlayerTurn(true)
				} else {
					setPlayerTurn(false)
				}
			})
		}
	}

	useEffect(() => {
		handleGameUpdate()
		handleGameStart()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<GameContainer>
			{!isGameStarted && <h2>Waiting for the opponent to join</h2>}
			{(!isGameStarted || !isPlayerTurn) && <PlayStopper />}
			{matrix.map((row, rowIdx) => {
				return (
					<RowContainer>
						{row.map((column, columnIdx) => (
							<Cell
								borderRight={columnIdx < 2}
								borderLeft={columnIdx > 0}
								borderBottom={rowIdx < 2}
								borderTop={rowIdx > 0}
								onClick={() =>
									updateGameMatrix(columnIdx, rowIdx, playerSymbol)
								}
							>
								{column && column !== 'null' ? (
									column === 'x' ? (
										<X />
									) : (
										<O />
									)
								) : null}
							</Cell>
						))}
					</RowContainer>
				)
			})}
		</GameContainer>
	)
}

export default Game
