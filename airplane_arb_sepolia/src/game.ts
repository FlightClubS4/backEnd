import {
  FlightClubGame_Attack as FlightClubGame_AttackEvent,
  FlightClubGame_ConfirmRaise as FlightClubGame_ConfirmRaiseEvent,
  FlightClubGame_GameEnded as FlightClubGame_GameEndedEvent,
  FlightClubGame_GuestJoin as FlightClubGame_GuestJoinEvent,
  FlightClubGame_Raise as FlightClubGame_RaiseEvent,
  FlightClubGame_respondAttack as FlightClubGame_respondAttackEvent,
  Initialized as InitializedEvent,
} from "../generated/Game/Game"
import {
  FlightClubGame_Attack,
  FlightClubGame_ConfirmRaise,
  FlightClubGame_GameEnded,
  FlightClubGame_GuestJoin,
  FlightClubGame_Raise,
  FlightClubGame_respondAttack,
  Initialized,
} from "../generated/schema"

export function handleFlightClubGame_Attack(
  event: FlightClubGame_AttackEvent,
): void {
  let entity = new FlightClubGame_Attack(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.attacker = event.params.attacker
  entity.target = event.params.target
  entity.nonce = event.params.nonce
  entity.proof = event.params.proof

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlightClubGame_ConfirmRaise(
  event: FlightClubGame_ConfirmRaiseEvent,
): void {
  let entity = new FlightClubGame_ConfirmRaise(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.confirmer = event.params.confirmer
  entity.cellID = event.params.cellID
  entity.bet = event.params.bet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlightClubGame_GameEnded(
  event: FlightClubGame_GameEndedEvent,
): void {
  let entity = new FlightClubGame_GameEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.winner = event.params.winner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlightClubGame_GuestJoin(
  event: FlightClubGame_GuestJoinEvent,
): void {
  let entity = new FlightClubGame_GuestJoin(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.guest = event.params.guest

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlightClubGame_Raise(
  event: FlightClubGame_RaiseEvent,
): void {
  let entity = new FlightClubGame_Raise(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.raiser = event.params.raiser
  entity.cellID = event.params.cellID
  entity.bet = event.params.bet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlightClubGame_respondAttack(
  event: FlightClubGame_respondAttackEvent,
): void {
  let entity = new FlightClubGame_respondAttack(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.attackee = event.params.attackee
  entity.Game_id = event.params.id
  entity.status = event.params.status
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
