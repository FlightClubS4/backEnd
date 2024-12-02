import { BigInt } from "@graphprotocol/graph-ts"
import {
  FlightClub_GameCreated as FlightClub_GameCreatedEvent
} from "../generated/GameFactory/GameFactory"
import {
  FlightClub_GameCreated
} from "../generated/schema"
import {Game} from "../generated/templates"

export function handleFlightClub_GameCreated(
  event: FlightClub_GameCreatedEvent
): void {
  let entity = new FlightClub_GameCreated(
    event.params.gameCA
  )
  entity.gameCA = event.params.gameCA
  entity.creator = event.params.creator
  entity.bet = event.params.bet
  entity.status = BigInt.zero();

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  Game.create(event.params.gameCA);
  entity.save()
}

