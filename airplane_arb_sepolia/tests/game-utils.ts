import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  FlightClubGame_Attack,
  FlightClubGame_ConfirmRaise,
  FlightClubGame_GameEnded,
  FlightClubGame_GuestJoin,
  FlightClubGame_Raise,
  FlightClubGame_respondAttack,
  Initialized
} from "../generated/Game/Game"

export function createFlightClubGame_AttackEvent(
  attacker: Address,
  target: i32,
  nonce: BigInt,
  proof: Array<Bytes>
): FlightClubGame_Attack {
  let flightClubGameAttackEvent = changetype<FlightClubGame_Attack>(
    newMockEvent()
  )

  flightClubGameAttackEvent.parameters = new Array()

  flightClubGameAttackEvent.parameters.push(
    new ethereum.EventParam("attacker", ethereum.Value.fromAddress(attacker))
  )
  flightClubGameAttackEvent.parameters.push(
    new ethereum.EventParam(
      "target",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(target))
    )
  )
  flightClubGameAttackEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  flightClubGameAttackEvent.parameters.push(
    new ethereum.EventParam("proof", ethereum.Value.fromFixedBytesArray(proof))
  )

  return flightClubGameAttackEvent
}

export function createFlightClubGame_ConfirmRaiseEvent(
  confirmer: Address,
  cellID: BigInt,
  bet: BigInt
): FlightClubGame_ConfirmRaise {
  let flightClubGameConfirmRaiseEvent = changetype<FlightClubGame_ConfirmRaise>(
    newMockEvent()
  )

  flightClubGameConfirmRaiseEvent.parameters = new Array()

  flightClubGameConfirmRaiseEvent.parameters.push(
    new ethereum.EventParam("confirmer", ethereum.Value.fromAddress(confirmer))
  )
  flightClubGameConfirmRaiseEvent.parameters.push(
    new ethereum.EventParam("cellID", ethereum.Value.fromUnsignedBigInt(cellID))
  )
  flightClubGameConfirmRaiseEvent.parameters.push(
    new ethereum.EventParam("bet", ethereum.Value.fromUnsignedBigInt(bet))
  )

  return flightClubGameConfirmRaiseEvent
}

export function createFlightClubGame_GameEndedEvent(
  winner: Address
): FlightClubGame_GameEnded {
  let flightClubGameGameEndedEvent = changetype<FlightClubGame_GameEnded>(
    newMockEvent()
  )

  flightClubGameGameEndedEvent.parameters = new Array()

  flightClubGameGameEndedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )

  return flightClubGameGameEndedEvent
}

export function createFlightClubGame_GuestJoinEvent(
  guest: Address
): FlightClubGame_GuestJoin {
  let flightClubGameGuestJoinEvent = changetype<FlightClubGame_GuestJoin>(
    newMockEvent()
  )

  flightClubGameGuestJoinEvent.parameters = new Array()

  flightClubGameGuestJoinEvent.parameters.push(
    new ethereum.EventParam("guest", ethereum.Value.fromAddress(guest))
  )

  return flightClubGameGuestJoinEvent
}

export function createFlightClubGame_RaiseEvent(
  raiser: Address,
  cellID: BigInt,
  bet: BigInt
): FlightClubGame_Raise {
  let flightClubGameRaiseEvent = changetype<FlightClubGame_Raise>(
    newMockEvent()
  )

  flightClubGameRaiseEvent.parameters = new Array()

  flightClubGameRaiseEvent.parameters.push(
    new ethereum.EventParam("raiser", ethereum.Value.fromAddress(raiser))
  )
  flightClubGameRaiseEvent.parameters.push(
    new ethereum.EventParam("cellID", ethereum.Value.fromUnsignedBigInt(cellID))
  )
  flightClubGameRaiseEvent.parameters.push(
    new ethereum.EventParam("bet", ethereum.Value.fromUnsignedBigInt(bet))
  )

  return flightClubGameRaiseEvent
}

export function createFlightClubGame_respondAttackEvent(
  attackee: Address,
  id: i32,
  status: i32,
  nonce: BigInt
): FlightClubGame_respondAttack {
  let flightClubGameRespondAttackEvent =
    changetype<FlightClubGame_respondAttack>(newMockEvent())

  flightClubGameRespondAttackEvent.parameters = new Array()

  flightClubGameRespondAttackEvent.parameters.push(
    new ethereum.EventParam("attackee", ethereum.Value.fromAddress(attackee))
  )
  flightClubGameRespondAttackEvent.parameters.push(
    new ethereum.EventParam(
      "id",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(id))
    )
  )
  flightClubGameRespondAttackEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )
  flightClubGameRespondAttackEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return flightClubGameRespondAttackEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}
