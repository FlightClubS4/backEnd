import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { FlightClubGame_Attack } from "../generated/schema"
import { FlightClubGame_Attack as FlightClubGame_AttackEvent } from "../generated/Game/Game"
import { handleFlightClubGame_Attack } from "../src/game"
import { createFlightClubGame_AttackEvent } from "./game-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let attacker = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let target = 123
    let nonce = BigInt.fromI32(234)
    let proof = [Bytes.fromI32(1234567890)]
    let newFlightClubGame_AttackEvent = createFlightClubGame_AttackEvent(
      attacker,
      target,
      nonce,
      proof
    )
    handleFlightClubGame_Attack(newFlightClubGame_AttackEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FlightClubGame_Attack created and stored", () => {
    assert.entityCount("FlightClubGame_Attack", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FlightClubGame_Attack",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "attacker",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FlightClubGame_Attack",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "target",
      "123"
    )
    assert.fieldEquals(
      "FlightClubGame_Attack",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nonce",
      "234"
    )
    assert.fieldEquals(
      "FlightClubGame_Attack",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proof",
      "[1234567890]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
