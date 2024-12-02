import { BigInt } from "@graphprotocol/graph-ts";
import {
  FlightClubGame_ConfirmRaise as FlightClubGame_ConfirmRaiseEvent,
  FlightClubGame_GameEnded as FlightClubGame_GameEndedEvent,
  FlightClubGame_GuestJoin as FlightClubGame_GuestJoinEvent,
} from "../generated/Game/Game"
import {
  FlightClub_GameCreated,
} from "../generated/schema"

export function handleFlightClubGame_ConfirmRaise(
  event: FlightClubGame_ConfirmRaiseEvent,
): void {
  let entity = FlightClub_GameCreated.load(event.address);
  if(!entity){
    return
  }
  entity.bet=event.params.bet;
}

export function handleFlightClubGame_GameEnded(
  event: FlightClubGame_GameEndedEvent,
): void {
  let entity = FlightClub_GameCreated.load(event.address);
  if(!entity){
    return
  }
  entity.winner=event.params.winner;
  entity.status = entity.bet = BigInt.fromI32(2);
}

export function handleFlightClubGame_GuestJoin(
  event: FlightClubGame_GuestJoinEvent,
): void {
  let entity = FlightClub_GameCreated.load(event.address);
  if(!entity){
    return
  }
  entity.guest=event.params.guest;
  entity.status = entity.bet = BigInt.fromI32(1);
}