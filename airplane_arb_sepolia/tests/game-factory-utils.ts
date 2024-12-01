import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FlightClub_GameCreated,
  Initialized,
  OwnershipTransferred,
  Upgraded
} from "../generated/GameFactory/GameFactory"

export function createFlightClub_GameCreatedEvent(
  gameCA: Address,
  creator: Address,
  bet: BigInt
): FlightClub_GameCreated {
  let flightClubGameCreatedEvent = changetype<FlightClub_GameCreated>(
    newMockEvent()
  )

  flightClubGameCreatedEvent.parameters = new Array()

  flightClubGameCreatedEvent.parameters.push(
    new ethereum.EventParam("gameCA", ethereum.Value.fromAddress(gameCA))
  )
  flightClubGameCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  flightClubGameCreatedEvent.parameters.push(
    new ethereum.EventParam("bet", ethereum.Value.fromUnsignedBigInt(bet))
  )

  return flightClubGameCreatedEvent
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

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
