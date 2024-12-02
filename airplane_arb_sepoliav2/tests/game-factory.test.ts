import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { FlightClub_GameCreated } from "../generated/schema"
import { FlightClub_GameCreated as FlightClub_GameCreatedEvent } from "../generated/GameFactory/GameFactory"
import { handleFlightClub_GameCreated } from "../src/game-factory"
import { createFlightClub_GameCreatedEvent } from "./game-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let gameCA = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let bet = BigInt.fromI32(234)
    let newFlightClub_GameCreatedEvent = createFlightClub_GameCreatedEvent(
      gameCA,
      creator,
      bet
    )
    handleFlightClub_GameCreated(newFlightClub_GameCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FlightClub_GameCreated created and stored", () => {
    assert.entityCount("FlightClub_GameCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FlightClub_GameCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "gameCA",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FlightClub_GameCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FlightClub_GameCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bet",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
