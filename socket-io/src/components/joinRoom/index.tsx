import React, { useContext, useState } from 'react'
import gameContext from '../../gameContext'
import GameService from '../../services/gameService'
import socketService from '../../services/socketService'

interface IJoinRoomProps {}

const JoinRoom: React.FC<{}> = (props: IJoinRoomProps) => {
	const [roomName, setRoomName] = useState('')
	const [isJoining, setJoining] = useState(false)

	const { setInRoom, isInRoom } = useContext(gameContext)

	const handleRoomChange = (e: React.ChangeEvent<any>) => {
		const value = e.target.value
		setRoomName(value)
	}

	const joinRoom = async (e: React.FormEvent) => {
		e.preventDefault()
		const socket = socketService.socket
		if (!roomName || roomName.trim() === '' || !socket) return

		setJoining(true)

		const joined = await GameService.joinGameRoom(socket, roomName).catch(
			(err) => {
				alert(err)
			}
		)

		if (joined) {
			setInRoom(true)

			setJoining(false)
		}
	}

	return (
		<div>
			<h4>Enter Room ID</h4>
			<form onSubmit={joinRoom}>
				<input
					type='text'
					placeholder='room id'
					value={roomName}
					onChange={handleRoomChange}
				/>
				<button type='submit' disabled={isJoining}>
					{isJoining ? 'Joining...' : 'Join'}
				</button>
			</form>
		</div>
	)
}

export default JoinRoom
