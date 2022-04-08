// @ts-nocheck
import { buildSchema, Source } from 'graphql';

const source = new Source(/* GraphQL */`
schema {
  query: Query
  subscription: Subscription
}

directive @entity on OBJECT

directive @derivedFrom(field: String) on FIELD_DEFINITION

directive @subgraphId(id: String) on OBJECT

scalar BigDecimal

scalar BigInt

input Block_height {
  hash: Bytes
  number: Int
  number_gte: Int
}

type Bundle {
  id: ID!
  ethPriceUSD: BigDecimal!
}

input Bundle_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  ethPriceUSD: BigDecimal
  ethPriceUSD_not: BigDecimal
  ethPriceUSD_gt: BigDecimal
  ethPriceUSD_lt: BigDecimal
  ethPriceUSD_gte: BigDecimal
  ethPriceUSD_lte: BigDecimal
  ethPriceUSD_in: [BigDecimal!]
  ethPriceUSD_not_in: [BigDecimal!]
}

enum Bundle_orderBy {
  id
  ethPriceUSD
}

type Burn {
  id: ID!
  transaction: Transaction!
  pool: Pool!
  token0: Token!
  token1: Token!
  timestamp: BigInt!
  owner: Bytes
  origin: Bytes!
  amount: BigInt!
  amount0: BigDecimal!
  amount1: BigDecimal!
  amountUSD: BigDecimal
  tickLower: BigInt!
  tickUpper: BigInt!
  logIndex: BigInt
}

input Burn_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_not_contains: String
  transaction_starts_with: String
  transaction_not_starts_with: String
  transaction_ends_with: String
  transaction_not_ends_with: String
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_not_contains: String
  token0_starts_with: String
  token0_not_starts_with: String
  token0_ends_with: String
  token0_not_ends_with: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_not_contains: String
  token1_starts_with: String
  token1_not_starts_with: String
  token1_ends_with: String
  token1_not_ends_with: String
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  owner: Bytes
  owner_not: Bytes
  owner_in: [Bytes!]
  owner_not_in: [Bytes!]
  owner_contains: Bytes
  owner_not_contains: Bytes
  origin: Bytes
  origin_not: Bytes
  origin_in: [Bytes!]
  origin_not_in: [Bytes!]
  origin_contains: Bytes
  origin_not_contains: Bytes
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  amount0: BigDecimal
  amount0_not: BigDecimal
  amount0_gt: BigDecimal
  amount0_lt: BigDecimal
  amount0_gte: BigDecimal
  amount0_lte: BigDecimal
  amount0_in: [BigDecimal!]
  amount0_not_in: [BigDecimal!]
  amount1: BigDecimal
  amount1_not: BigDecimal
  amount1_gt: BigDecimal
  amount1_lt: BigDecimal
  amount1_gte: BigDecimal
  amount1_lte: BigDecimal
  amount1_in: [BigDecimal!]
  amount1_not_in: [BigDecimal!]
  amountUSD: BigDecimal
  amountUSD_not: BigDecimal
  amountUSD_gt: BigDecimal
  amountUSD_lt: BigDecimal
  amountUSD_gte: BigDecimal
  amountUSD_lte: BigDecimal
  amountUSD_in: [BigDecimal!]
  amountUSD_not_in: [BigDecimal!]
  tickLower: BigInt
  tickLower_not: BigInt
  tickLower_gt: BigInt
  tickLower_lt: BigInt
  tickLower_gte: BigInt
  tickLower_lte: BigInt
  tickLower_in: [BigInt!]
  tickLower_not_in: [BigInt!]
  tickUpper: BigInt
  tickUpper_not: BigInt
  tickUpper_gt: BigInt
  tickUpper_lt: BigInt
  tickUpper_gte: BigInt
  tickUpper_lte: BigInt
  tickUpper_in: [BigInt!]
  tickUpper_not_in: [BigInt!]
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
}

enum Burn_orderBy {
  id
  transaction
  pool
  token0
  token1
  timestamp
  owner
  origin
  amount
  amount0
  amount1
  amountUSD
  tickLower
  tickUpper
  logIndex
}

scalar Bytes

type Collect {
  id: ID!
  transaction: Transaction!
  timestamp: BigInt!
  pool: Pool!
  owner: Bytes
  amount0: BigDecimal!
  amount1: BigDecimal!
  amountUSD: BigDecimal
  tickLower: BigInt!
  tickUpper: BigInt!
  logIndex: BigInt
}

input Collect_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_not_contains: String
  transaction_starts_with: String
  transaction_not_starts_with: String
  transaction_ends_with: String
  transaction_not_ends_with: String
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  owner: Bytes
  owner_not: Bytes
  owner_in: [Bytes!]
  owner_not_in: [Bytes!]
  owner_contains: Bytes
  owner_not_contains: Bytes
  amount0: BigDecimal
  amount0_not: BigDecimal
  amount0_gt: BigDecimal
  amount0_lt: BigDecimal
  amount0_gte: BigDecimal
  amount0_lte: BigDecimal
  amount0_in: [BigDecimal!]
  amount0_not_in: [BigDecimal!]
  amount1: BigDecimal
  amount1_not: BigDecimal
  amount1_gt: BigDecimal
  amount1_lt: BigDecimal
  amount1_gte: BigDecimal
  amount1_lte: BigDecimal
  amount1_in: [BigDecimal!]
  amount1_not_in: [BigDecimal!]
  amountUSD: BigDecimal
  amountUSD_not: BigDecimal
  amountUSD_gt: BigDecimal
  amountUSD_lt: BigDecimal
  amountUSD_gte: BigDecimal
  amountUSD_lte: BigDecimal
  amountUSD_in: [BigDecimal!]
  amountUSD_not_in: [BigDecimal!]
  tickLower: BigInt
  tickLower_not: BigInt
  tickLower_gt: BigInt
  tickLower_lt: BigInt
  tickLower_gte: BigInt
  tickLower_lte: BigInt
  tickLower_in: [BigInt!]
  tickLower_not_in: [BigInt!]
  tickUpper: BigInt
  tickUpper_not: BigInt
  tickUpper_gt: BigInt
  tickUpper_lt: BigInt
  tickUpper_gte: BigInt
  tickUpper_lte: BigInt
  tickUpper_in: [BigInt!]
  tickUpper_not_in: [BigInt!]
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
}

enum Collect_orderBy {
  id
  transaction
  timestamp
  pool
  owner
  amount0
  amount1
  amountUSD
  tickLower
  tickUpper
  logIndex
}

type Factory {
  id: ID!
  poolCount: BigInt!
  txCount: BigInt!
  totalVolumeUSD: BigDecimal!
  totalVolumeETH: BigDecimal!
  totalFeesUSD: BigDecimal!
  totalFeesETH: BigDecimal!
  untrackedVolumeUSD: BigDecimal!
  totalValueLockedUSD: BigDecimal!
  totalValueLockedETH: BigDecimal!
  totalValueLockedUSDUntracked: BigDecimal!
  totalValueLockedETHUntracked: BigDecimal!
  owner: ID!
}

input Factory_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  poolCount: BigInt
  poolCount_not: BigInt
  poolCount_gt: BigInt
  poolCount_lt: BigInt
  poolCount_gte: BigInt
  poolCount_lte: BigInt
  poolCount_in: [BigInt!]
  poolCount_not_in: [BigInt!]
  txCount: BigInt
  txCount_not: BigInt
  txCount_gt: BigInt
  txCount_lt: BigInt
  txCount_gte: BigInt
  txCount_lte: BigInt
  txCount_in: [BigInt!]
  txCount_not_in: [BigInt!]
  totalVolumeUSD: BigDecimal
  totalVolumeUSD_not: BigDecimal
  totalVolumeUSD_gt: BigDecimal
  totalVolumeUSD_lt: BigDecimal
  totalVolumeUSD_gte: BigDecimal
  totalVolumeUSD_lte: BigDecimal
  totalVolumeUSD_in: [BigDecimal!]
  totalVolumeUSD_not_in: [BigDecimal!]
  totalVolumeETH: BigDecimal
  totalVolumeETH_not: BigDecimal
  totalVolumeETH_gt: BigDecimal
  totalVolumeETH_lt: BigDecimal
  totalVolumeETH_gte: BigDecimal
  totalVolumeETH_lte: BigDecimal
  totalVolumeETH_in: [BigDecimal!]
  totalVolumeETH_not_in: [BigDecimal!]
  totalFeesUSD: BigDecimal
  totalFeesUSD_not: BigDecimal
  totalFeesUSD_gt: BigDecimal
  totalFeesUSD_lt: BigDecimal
  totalFeesUSD_gte: BigDecimal
  totalFeesUSD_lte: BigDecimal
  totalFeesUSD_in: [BigDecimal!]
  totalFeesUSD_not_in: [BigDecimal!]
  totalFeesETH: BigDecimal
  totalFeesETH_not: BigDecimal
  totalFeesETH_gt: BigDecimal
  totalFeesETH_lt: BigDecimal
  totalFeesETH_gte: BigDecimal
  totalFeesETH_lte: BigDecimal
  totalFeesETH_in: [BigDecimal!]
  totalFeesETH_not_in: [BigDecimal!]
  untrackedVolumeUSD: BigDecimal
  untrackedVolumeUSD_not: BigDecimal
  untrackedVolumeUSD_gt: BigDecimal
  untrackedVolumeUSD_lt: BigDecimal
  untrackedVolumeUSD_gte: BigDecimal
  untrackedVolumeUSD_lte: BigDecimal
  untrackedVolumeUSD_in: [BigDecimal!]
  untrackedVolumeUSD_not_in: [BigDecimal!]
  totalValueLockedUSD: BigDecimal
  totalValueLockedUSD_not: BigDecimal
  totalValueLockedUSD_gt: BigDecimal
  totalValueLockedUSD_lt: BigDecimal
  totalValueLockedUSD_gte: BigDecimal
  totalValueLockedUSD_lte: BigDecimal
  totalValueLockedUSD_in: [BigDecimal!]
  totalValueLockedUSD_not_in: [BigDecimal!]
  totalValueLockedETH: BigDecimal
  totalValueLockedETH_not: BigDecimal
  totalValueLockedETH_gt: BigDecimal
  totalValueLockedETH_lt: BigDecimal
  totalValueLockedETH_gte: BigDecimal
  totalValueLockedETH_lte: BigDecimal
  totalValueLockedETH_in: [BigDecimal!]
  totalValueLockedETH_not_in: [BigDecimal!]
  totalValueLockedUSDUntracked: BigDecimal
  totalValueLockedUSDUntracked_not: BigDecimal
  totalValueLockedUSDUntracked_gt: BigDecimal
  totalValueLockedUSDUntracked_lt: BigDecimal
  totalValueLockedUSDUntracked_gte: BigDecimal
  totalValueLockedUSDUntracked_lte: BigDecimal
  totalValueLockedUSDUntracked_in: [BigDecimal!]
  totalValueLockedUSDUntracked_not_in: [BigDecimal!]
  totalValueLockedETHUntracked: BigDecimal
  totalValueLockedETHUntracked_not: BigDecimal
  totalValueLockedETHUntracked_gt: BigDecimal
  totalValueLockedETHUntracked_lt: BigDecimal
  totalValueLockedETHUntracked_gte: BigDecimal
  totalValueLockedETHUntracked_lte: BigDecimal
  totalValueLockedETHUntracked_in: [BigDecimal!]
  totalValueLockedETHUntracked_not_in: [BigDecimal!]
  owner: ID
  owner_not: ID
  owner_gt: ID
  owner_lt: ID
  owner_gte: ID
  owner_lte: ID
  owner_in: [ID!]
  owner_not_in: [ID!]
}

enum Factory_orderBy {
  id
  poolCount
  txCount
  totalVolumeUSD
  totalVolumeETH
  totalFeesUSD
  totalFeesETH
  untrackedVolumeUSD
  totalValueLockedUSD
  totalValueLockedETH
  totalValueLockedUSDUntracked
  totalValueLockedETHUntracked
  owner
}

type Flash {
  id: ID!
  transaction: Transaction!
  timestamp: BigInt!
  pool: Pool!
  sender: Bytes!
  recipient: Bytes!
  amount0: BigDecimal!
  amount1: BigDecimal!
  amountUSD: BigDecimal!
  amount0Paid: BigDecimal!
  amount1Paid: BigDecimal!
  logIndex: BigInt
}

input Flash_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_not_contains: String
  transaction_starts_with: String
  transaction_not_starts_with: String
  transaction_ends_with: String
  transaction_not_ends_with: String
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  sender: Bytes
  sender_not: Bytes
  sender_in: [Bytes!]
  sender_not_in: [Bytes!]
  sender_contains: Bytes
  sender_not_contains: Bytes
  recipient: Bytes
  recipient_not: Bytes
  recipient_in: [Bytes!]
  recipient_not_in: [Bytes!]
  recipient_contains: Bytes
  recipient_not_contains: Bytes
  amount0: BigDecimal
  amount0_not: BigDecimal
  amount0_gt: BigDecimal
  amount0_lt: BigDecimal
  amount0_gte: BigDecimal
  amount0_lte: BigDecimal
  amount0_in: [BigDecimal!]
  amount0_not_in: [BigDecimal!]
  amount1: BigDecimal
  amount1_not: BigDecimal
  amount1_gt: BigDecimal
  amount1_lt: BigDecimal
  amount1_gte: BigDecimal
  amount1_lte: BigDecimal
  amount1_in: [BigDecimal!]
  amount1_not_in: [BigDecimal!]
  amountUSD: BigDecimal
  amountUSD_not: BigDecimal
  amountUSD_gt: BigDecimal
  amountUSD_lt: BigDecimal
  amountUSD_gte: BigDecimal
  amountUSD_lte: BigDecimal
  amountUSD_in: [BigDecimal!]
  amountUSD_not_in: [BigDecimal!]
  amount0Paid: BigDecimal
  amount0Paid_not: BigDecimal
  amount0Paid_gt: BigDecimal
  amount0Paid_lt: BigDecimal
  amount0Paid_gte: BigDecimal
  amount0Paid_lte: BigDecimal
  amount0Paid_in: [BigDecimal!]
  amount0Paid_not_in: [BigDecimal!]
  amount1Paid: BigDecimal
  amount1Paid_not: BigDecimal
  amount1Paid_gt: BigDecimal
  amount1Paid_lt: BigDecimal
  amount1Paid_gte: BigDecimal
  amount1Paid_lte: BigDecimal
  amount1Paid_in: [BigDecimal!]
  amount1Paid_not_in: [BigDecimal!]
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
}

enum Flash_orderBy {
  id
  transaction
  timestamp
  pool
  sender
  recipient
  amount0
  amount1
  amountUSD
  amount0Paid
  amount1Paid
  logIndex
}

type Mint {
  id: ID!
  transaction: Transaction!
  timestamp: BigInt!
  pool: Pool!
  token0: Token!
  token1: Token!
  owner: Bytes!
  sender: Bytes
  origin: Bytes!
  amount: BigInt!
  amount0: BigDecimal!
  amount1: BigDecimal!
  amountUSD: BigDecimal
  tickLower: BigInt!
  tickUpper: BigInt!
  logIndex: BigInt
}

input Mint_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_not_contains: String
  transaction_starts_with: String
  transaction_not_starts_with: String
  transaction_ends_with: String
  transaction_not_ends_with: String
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_not_contains: String
  token0_starts_with: String
  token0_not_starts_with: String
  token0_ends_with: String
  token0_not_ends_with: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_not_contains: String
  token1_starts_with: String
  token1_not_starts_with: String
  token1_ends_with: String
  token1_not_ends_with: String
  owner: Bytes
  owner_not: Bytes
  owner_in: [Bytes!]
  owner_not_in: [Bytes!]
  owner_contains: Bytes
  owner_not_contains: Bytes
  sender: Bytes
  sender_not: Bytes
  sender_in: [Bytes!]
  sender_not_in: [Bytes!]
  sender_contains: Bytes
  sender_not_contains: Bytes
  origin: Bytes
  origin_not: Bytes
  origin_in: [Bytes!]
  origin_not_in: [Bytes!]
  origin_contains: Bytes
  origin_not_contains: Bytes
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  amount0: BigDecimal
  amount0_not: BigDecimal
  amount0_gt: BigDecimal
  amount0_lt: BigDecimal
  amount0_gte: BigDecimal
  amount0_lte: BigDecimal
  amount0_in: [BigDecimal!]
  amount0_not_in: [BigDecimal!]
  amount1: BigDecimal
  amount1_not: BigDecimal
  amount1_gt: BigDecimal
  amount1_lt: BigDecimal
  amount1_gte: BigDecimal
  amount1_lte: BigDecimal
  amount1_in: [BigDecimal!]
  amount1_not_in: [BigDecimal!]
  amountUSD: BigDecimal
  amountUSD_not: BigDecimal
  amountUSD_gt: BigDecimal
  amountUSD_lt: BigDecimal
  amountUSD_gte: BigDecimal
  amountUSD_lte: BigDecimal
  amountUSD_in: [BigDecimal!]
  amountUSD_not_in: [BigDecimal!]
  tickLower: BigInt
  tickLower_not: BigInt
  tickLower_gt: BigInt
  tickLower_lt: BigInt
  tickLower_gte: BigInt
  tickLower_lte: BigInt
  tickLower_in: [BigInt!]
  tickLower_not_in: [BigInt!]
  tickUpper: BigInt
  tickUpper_not: BigInt
  tickUpper_gt: BigInt
  tickUpper_lt: BigInt
  tickUpper_gte: BigInt
  tickUpper_lte: BigInt
  tickUpper_in: [BigInt!]
  tickUpper_not_in: [BigInt!]
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
}

enum Mint_orderBy {
  id
  transaction
  timestamp
  pool
  token0
  token1
  owner
  sender
  origin
  amount
  amount0
  amount1
  amountUSD
  tickLower
  tickUpper
  logIndex
}

enum OrderDirection {
  asc
  desc
}

type Pool {
  id: ID!
  createdAtTimestamp: BigInt!
  createdAtBlockNumber: BigInt!
  token0: Token!
  token1: Token!
  feeTier: BigInt!
  liquidity: BigInt!
  sqrtPrice: BigInt!
  feeGrowthGlobal0X128: BigInt!
  feeGrowthGlobal1X128: BigInt!
  token0Price: BigDecimal!
  token1Price: BigDecimal!
  tick: BigInt
  observationIndex: BigInt!
  volumeToken0: BigDecimal!
  volumeToken1: BigDecimal!
  volumeUSD: BigDecimal!
  untrackedVolumeUSD: BigDecimal!
  feesUSD: BigDecimal!
  txCount: BigInt!
  collectedFeesToken0: BigDecimal!
  collectedFeesToken1: BigDecimal!
  collectedFeesUSD: BigDecimal!
  totalValueLockedToken0: BigDecimal!
  totalValueLockedToken1: BigDecimal!
  totalValueLockedETH: BigDecimal!
  totalValueLockedUSD: BigDecimal!
  totalValueLockedUSDUntracked: BigDecimal!
  liquidityProviderCount: BigInt!
  poolHourData(skip: Int = 0, first: Int = 100, orderBy: PoolHourData_orderBy, orderDirection: OrderDirection, where: PoolHourData_filter): [PoolHourData!]!
  poolDayData(skip: Int = 0, first: Int = 100, orderBy: PoolDayData_orderBy, orderDirection: OrderDirection, where: PoolDayData_filter): [PoolDayData!]!
  mints(skip: Int = 0, first: Int = 100, orderBy: Mint_orderBy, orderDirection: OrderDirection, where: Mint_filter): [Mint!]!
  burns(skip: Int = 0, first: Int = 100, orderBy: Burn_orderBy, orderDirection: OrderDirection, where: Burn_filter): [Burn!]!
  swaps(skip: Int = 0, first: Int = 100, orderBy: Swap_orderBy, orderDirection: OrderDirection, where: Swap_filter): [Swap!]!
  collects(skip: Int = 0, first: Int = 100, orderBy: Collect_orderBy, orderDirection: OrderDirection, where: Collect_filter): [Collect!]!
  ticks(skip: Int = 0, first: Int = 100, orderBy: Tick_orderBy, orderDirection: OrderDirection, where: Tick_filter): [Tick!]!
}

type PoolDayData {
  id: ID!
  date: Int!
  pool: Pool!
  liquidity: BigInt!
  sqrtPrice: BigInt!
  token0Price: BigDecimal!
  token1Price: BigDecimal!
  tick: BigInt
  feeGrowthGlobal0X128: BigInt!
  feeGrowthGlobal1X128: BigInt!
  tvlUSD: BigDecimal!
  volumeToken0: BigDecimal!
  volumeToken1: BigDecimal!
  volumeUSD: BigDecimal!
  feesUSD: BigDecimal!
  txCount: BigInt!
  open: BigDecimal!
  high: BigDecimal!
  low: BigDecimal!
  close: BigDecimal!
}

input PoolDayData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  date: Int
  date_not: Int
  date_gt: Int
  date_lt: Int
  date_gte: Int
  date_lte: Int
  date_in: [Int!]
  date_not_in: [Int!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  liquidity: BigInt
  liquidity_not: BigInt
  liquidity_gt: BigInt
  liquidity_lt: BigInt
  liquidity_gte: BigInt
  liquidity_lte: BigInt
  liquidity_in: [BigInt!]
  liquidity_not_in: [BigInt!]
  sqrtPrice: BigInt
  sqrtPrice_not: BigInt
  sqrtPrice_gt: BigInt
  sqrtPrice_lt: BigInt
  sqrtPrice_gte: BigInt
  sqrtPrice_lte: BigInt
  sqrtPrice_in: [BigInt!]
  sqrtPrice_not_in: [BigInt!]
  token0Price: BigDecimal
  token0Price_not: BigDecimal
  token0Price_gt: BigDecimal
  token0Price_lt: BigDecimal
  token0Price_gte: BigDecimal
  token0Price_lte: BigDecimal
  token0Price_in: [BigDecimal!]
  token0Price_not_in: [BigDecimal!]
  token1Price: BigDecimal
  token1Price_not: BigDecimal
  token1Price_gt: BigDecimal
  token1Price_lt: BigDecimal
  token1Price_gte: BigDecimal
  token1Price_lte: BigDecimal
  token1Price_in: [BigDecimal!]
  token1Price_not_in: [BigDecimal!]
  tick: BigInt
  tick_not: BigInt
  tick_gt: BigInt
  tick_lt: BigInt
  tick_gte: BigInt
  tick_lte: BigInt
  tick_in: [BigInt!]
  tick_not_in: [BigInt!]
  feeGrowthGlobal0X128: BigInt
  feeGrowthGlobal0X128_not: BigInt
  feeGrowthGlobal0X128_gt: BigInt
  feeGrowthGlobal0X128_lt: BigInt
  feeGrowthGlobal0X128_gte: BigInt
  feeGrowthGlobal0X128_lte: BigInt
  feeGrowthGlobal0X128_in: [BigInt!]
  feeGrowthGlobal0X128_not_in: [BigInt!]
  feeGrowthGlobal1X128: BigInt
  feeGrowthGlobal1X128_not: BigInt
  feeGrowthGlobal1X128_gt: BigInt
  feeGrowthGlobal1X128_lt: BigInt
  feeGrowthGlobal1X128_gte: BigInt
  feeGrowthGlobal1X128_lte: BigInt
  feeGrowthGlobal1X128_in: [BigInt!]
  feeGrowthGlobal1X128_not_in: [BigInt!]
  tvlUSD: BigDecimal
  tvlUSD_not: BigDecimal
  tvlUSD_gt: BigDecimal
  tvlUSD_lt: BigDecimal
  tvlUSD_gte: BigDecimal
  tvlUSD_lte: BigDecimal
  tvlUSD_in: [BigDecimal!]
  tvlUSD_not_in: [BigDecimal!]
  volumeToken0: BigDecimal
  volumeToken0_not: BigDecimal
  volumeToken0_gt: BigDecimal
  volumeToken0_lt: BigDecimal
  volumeToken0_gte: BigDecimal
  volumeToken0_lte: BigDecimal
  volumeToken0_in: [BigDecimal!]
  volumeToken0_not_in: [BigDecimal!]
  volumeToken1: BigDecimal
  volumeToken1_not: BigDecimal
  volumeToken1_gt: BigDecimal
  volumeToken1_lt: BigDecimal
  volumeToken1_gte: BigDecimal
  volumeToken1_lte: BigDecimal
  volumeToken1_in: [BigDecimal!]
  volumeToken1_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  txCount: BigInt
  txCount_not: BigInt
  txCount_gt: BigInt
  txCount_lt: BigInt
  txCount_gte: BigInt
  txCount_lte: BigInt
  txCount_in: [BigInt!]
  txCount_not_in: [BigInt!]
  open: BigDecimal
  open_not: BigDecimal
  open_gt: BigDecimal
  open_lt: BigDecimal
  open_gte: BigDecimal
  open_lte: BigDecimal
  open_in: [BigDecimal!]
  open_not_in: [BigDecimal!]
  high: BigDecimal
  high_not: BigDecimal
  high_gt: BigDecimal
  high_lt: BigDecimal
  high_gte: BigDecimal
  high_lte: BigDecimal
  high_in: [BigDecimal!]
  high_not_in: [BigDecimal!]
  low: BigDecimal
  low_not: BigDecimal
  low_gt: BigDecimal
  low_lt: BigDecimal
  low_gte: BigDecimal
  low_lte: BigDecimal
  low_in: [BigDecimal!]
  low_not_in: [BigDecimal!]
  close: BigDecimal
  close_not: BigDecimal
  close_gt: BigDecimal
  close_lt: BigDecimal
  close_gte: BigDecimal
  close_lte: BigDecimal
  close_in: [BigDecimal!]
  close_not_in: [BigDecimal!]
}

enum PoolDayData_orderBy {
  id
  date
  pool
  liquidity
  sqrtPrice
  token0Price
  token1Price
  tick
  feeGrowthGlobal0X128
  feeGrowthGlobal1X128
  tvlUSD
  volumeToken0
  volumeToken1
  volumeUSD
  feesUSD
  txCount
  open
  high
  low
  close
}

type PoolHourData {
  id: ID!
  periodStartUnix: Int!
  pool: Pool!
  liquidity: BigInt!
  sqrtPrice: BigInt!
  token0Price: BigDecimal!
  token1Price: BigDecimal!
  tick: BigInt
  feeGrowthGlobal0X128: BigInt!
  feeGrowthGlobal1X128: BigInt!
  tvlUSD: BigDecimal!
  volumeToken0: BigDecimal!
  volumeToken1: BigDecimal!
  volumeUSD: BigDecimal!
  feesUSD: BigDecimal!
  txCount: BigInt!
  open: BigDecimal!
  high: BigDecimal!
  low: BigDecimal!
  close: BigDecimal!
}

input PoolHourData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  periodStartUnix: Int
  periodStartUnix_not: Int
  periodStartUnix_gt: Int
  periodStartUnix_lt: Int
  periodStartUnix_gte: Int
  periodStartUnix_lte: Int
  periodStartUnix_in: [Int!]
  periodStartUnix_not_in: [Int!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  liquidity: BigInt
  liquidity_not: BigInt
  liquidity_gt: BigInt
  liquidity_lt: BigInt
  liquidity_gte: BigInt
  liquidity_lte: BigInt
  liquidity_in: [BigInt!]
  liquidity_not_in: [BigInt!]
  sqrtPrice: BigInt
  sqrtPrice_not: BigInt
  sqrtPrice_gt: BigInt
  sqrtPrice_lt: BigInt
  sqrtPrice_gte: BigInt
  sqrtPrice_lte: BigInt
  sqrtPrice_in: [BigInt!]
  sqrtPrice_not_in: [BigInt!]
  token0Price: BigDecimal
  token0Price_not: BigDecimal
  token0Price_gt: BigDecimal
  token0Price_lt: BigDecimal
  token0Price_gte: BigDecimal
  token0Price_lte: BigDecimal
  token0Price_in: [BigDecimal!]
  token0Price_not_in: [BigDecimal!]
  token1Price: BigDecimal
  token1Price_not: BigDecimal
  token1Price_gt: BigDecimal
  token1Price_lt: BigDecimal
  token1Price_gte: BigDecimal
  token1Price_lte: BigDecimal
  token1Price_in: [BigDecimal!]
  token1Price_not_in: [BigDecimal!]
  tick: BigInt
  tick_not: BigInt
  tick_gt: BigInt
  tick_lt: BigInt
  tick_gte: BigInt
  tick_lte: BigInt
  tick_in: [BigInt!]
  tick_not_in: [BigInt!]
  feeGrowthGlobal0X128: BigInt
  feeGrowthGlobal0X128_not: BigInt
  feeGrowthGlobal0X128_gt: BigInt
  feeGrowthGlobal0X128_lt: BigInt
  feeGrowthGlobal0X128_gte: BigInt
  feeGrowthGlobal0X128_lte: BigInt
  feeGrowthGlobal0X128_in: [BigInt!]
  feeGrowthGlobal0X128_not_in: [BigInt!]
  feeGrowthGlobal1X128: BigInt
  feeGrowthGlobal1X128_not: BigInt
  feeGrowthGlobal1X128_gt: BigInt
  feeGrowthGlobal1X128_lt: BigInt
  feeGrowthGlobal1X128_gte: BigInt
  feeGrowthGlobal1X128_lte: BigInt
  feeGrowthGlobal1X128_in: [BigInt!]
  feeGrowthGlobal1X128_not_in: [BigInt!]
  tvlUSD: BigDecimal
  tvlUSD_not: BigDecimal
  tvlUSD_gt: BigDecimal
  tvlUSD_lt: BigDecimal
  tvlUSD_gte: BigDecimal
  tvlUSD_lte: BigDecimal
  tvlUSD_in: [BigDecimal!]
  tvlUSD_not_in: [BigDecimal!]
  volumeToken0: BigDecimal
  volumeToken0_not: BigDecimal
  volumeToken0_gt: BigDecimal
  volumeToken0_lt: BigDecimal
  volumeToken0_gte: BigDecimal
  volumeToken0_lte: BigDecimal
  volumeToken0_in: [BigDecimal!]
  volumeToken0_not_in: [BigDecimal!]
  volumeToken1: BigDecimal
  volumeToken1_not: BigDecimal
  volumeToken1_gt: BigDecimal
  volumeToken1_lt: BigDecimal
  volumeToken1_gte: BigDecimal
  volumeToken1_lte: BigDecimal
  volumeToken1_in: [BigDecimal!]
  volumeToken1_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  txCount: BigInt
  txCount_not: BigInt
  txCount_gt: BigInt
  txCount_lt: BigInt
  txCount_gte: BigInt
  txCount_lte: BigInt
  txCount_in: [BigInt!]
  txCount_not_in: [BigInt!]
  open: BigDecimal
  open_not: BigDecimal
  open_gt: BigDecimal
  open_lt: BigDecimal
  open_gte: BigDecimal
  open_lte: BigDecimal
  open_in: [BigDecimal!]
  open_not_in: [BigDecimal!]
  high: BigDecimal
  high_not: BigDecimal
  high_gt: BigDecimal
  high_lt: BigDecimal
  high_gte: BigDecimal
  high_lte: BigDecimal
  high_in: [BigDecimal!]
  high_not_in: [BigDecimal!]
  low: BigDecimal
  low_not: BigDecimal
  low_gt: BigDecimal
  low_lt: BigDecimal
  low_gte: BigDecimal
  low_lte: BigDecimal
  low_in: [BigDecimal!]
  low_not_in: [BigDecimal!]
  close: BigDecimal
  close_not: BigDecimal
  close_gt: BigDecimal
  close_lt: BigDecimal
  close_gte: BigDecimal
  close_lte: BigDecimal
  close_in: [BigDecimal!]
  close_not_in: [BigDecimal!]
}

enum PoolHourData_orderBy {
  id
  periodStartUnix
  pool
  liquidity
  sqrtPrice
  token0Price
  token1Price
  tick
  feeGrowthGlobal0X128
  feeGrowthGlobal1X128
  tvlUSD
  volumeToken0
  volumeToken1
  volumeUSD
  feesUSD
  txCount
  open
  high
  low
  close
}

input Pool_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_not_contains: String
  token0_starts_with: String
  token0_not_starts_with: String
  token0_ends_with: String
  token0_not_ends_with: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_not_contains: String
  token1_starts_with: String
  token1_not_starts_with: String
  token1_ends_with: String
  token1_not_ends_with: String
  feeTier: BigInt
  feeTier_not: BigInt
  feeTier_gt: BigInt
  feeTier_lt: BigInt
  feeTier_gte: BigInt
  feeTier_lte: BigInt
  feeTier_in: [BigInt!]
  feeTier_not_in: [BigInt!]
  liquidity: BigInt
  liquidity_not: BigInt
  liquidity_gt: BigInt
  liquidity_lt: BigInt
  liquidity_gte: BigInt
  liquidity_lte: BigInt
  liquidity_in: [BigInt!]
  liquidity_not_in: [BigInt!]
  sqrtPrice: BigInt
  sqrtPrice_not: BigInt
  sqrtPrice_gt: BigInt
  sqrtPrice_lt: BigInt
  sqrtPrice_gte: BigInt
  sqrtPrice_lte: BigInt
  sqrtPrice_in: [BigInt!]
  sqrtPrice_not_in: [BigInt!]
  feeGrowthGlobal0X128: BigInt
  feeGrowthGlobal0X128_not: BigInt
  feeGrowthGlobal0X128_gt: BigInt
  feeGrowthGlobal0X128_lt: BigInt
  feeGrowthGlobal0X128_gte: BigInt
  feeGrowthGlobal0X128_lte: BigInt
  feeGrowthGlobal0X128_in: [BigInt!]
  feeGrowthGlobal0X128_not_in: [BigInt!]
  feeGrowthGlobal1X128: BigInt
  feeGrowthGlobal1X128_not: BigInt
  feeGrowthGlobal1X128_gt: BigInt
  feeGrowthGlobal1X128_lt: BigInt
  feeGrowthGlobal1X128_gte: BigInt
  feeGrowthGlobal1X128_lte: BigInt
  feeGrowthGlobal1X128_in: [BigInt!]
  feeGrowthGlobal1X128_not_in: [BigInt!]
  token0Price: BigDecimal
  token0Price_not: BigDecimal
  token0Price_gt: BigDecimal
  token0Price_lt: BigDecimal
  token0Price_gte: BigDecimal
  token0Price_lte: BigDecimal
  token0Price_in: [BigDecimal!]
  token0Price_not_in: [BigDecimal!]
  token1Price: BigDecimal
  token1Price_not: BigDecimal
  token1Price_gt: BigDecimal
  token1Price_lt: BigDecimal
  token1Price_gte: BigDecimal
  token1Price_lte: BigDecimal
  token1Price_in: [BigDecimal!]
  token1Price_not_in: [BigDecimal!]
  tick: BigInt
  tick_not: BigInt
  tick_gt: BigInt
  tick_lt: BigInt
  tick_gte: BigInt
  tick_lte: BigInt
  tick_in: [BigInt!]
  tick_not_in: [BigInt!]
  observationIndex: BigInt
  observationIndex_not: BigInt
  observationIndex_gt: BigInt
  observationIndex_lt: BigInt
  observationIndex_gte: BigInt
  observationIndex_lte: BigInt
  observationIndex_in: [BigInt!]
  observationIndex_not_in: [BigInt!]
  volumeToken0: BigDecimal
  volumeToken0_not: BigDecimal
  volumeToken0_gt: BigDecimal
  volumeToken0_lt: BigDecimal
  volumeToken0_gte: BigDecimal
  volumeToken0_lte: BigDecimal
  volumeToken0_in: [BigDecimal!]
  volumeToken0_not_in: [BigDecimal!]
  volumeToken1: BigDecimal
  volumeToken1_not: BigDecimal
  volumeToken1_gt: BigDecimal
  volumeToken1_lt: BigDecimal
  volumeToken1_gte: BigDecimal
  volumeToken1_lte: BigDecimal
  volumeToken1_in: [BigDecimal!]
  volumeToken1_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  untrackedVolumeUSD: BigDecimal
  untrackedVolumeUSD_not: BigDecimal
  untrackedVolumeUSD_gt: BigDecimal
  untrackedVolumeUSD_lt: BigDecimal
  untrackedVolumeUSD_gte: BigDecimal
  untrackedVolumeUSD_lte: BigDecimal
  untrackedVolumeUSD_in: [BigDecimal!]
  untrackedVolumeUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  txCount: BigInt
  txCount_not: BigInt
  txCount_gt: BigInt
  txCount_lt: BigInt
  txCount_gte: BigInt
  txCount_lte: BigInt
  txCount_in: [BigInt!]
  txCount_not_in: [BigInt!]
  collectedFeesToken0: BigDecimal
  collectedFeesToken0_not: BigDecimal
  collectedFeesToken0_gt: BigDecimal
  collectedFeesToken0_lt: BigDecimal
  collectedFeesToken0_gte: BigDecimal
  collectedFeesToken0_lte: BigDecimal
  collectedFeesToken0_in: [BigDecimal!]
  collectedFeesToken0_not_in: [BigDecimal!]
  collectedFeesToken1: BigDecimal
  collectedFeesToken1_not: BigDecimal
  collectedFeesToken1_gt: BigDecimal
  collectedFeesToken1_lt: BigDecimal
  collectedFeesToken1_gte: BigDecimal
  collectedFeesToken1_lte: BigDecimal
  collectedFeesToken1_in: [BigDecimal!]
  collectedFeesToken1_not_in: [BigDecimal!]
  collectedFeesUSD: BigDecimal
  collectedFeesUSD_not: BigDecimal
  collectedFeesUSD_gt: BigDecimal
  collectedFeesUSD_lt: BigDecimal
  collectedFeesUSD_gte: BigDecimal
  collectedFeesUSD_lte: BigDecimal
  collectedFeesUSD_in: [BigDecimal!]
  collectedFeesUSD_not_in: [BigDecimal!]
  totalValueLockedToken0: BigDecimal
  totalValueLockedToken0_not: BigDecimal
  totalValueLockedToken0_gt: BigDecimal
  totalValueLockedToken0_lt: BigDecimal
  totalValueLockedToken0_gte: BigDecimal
  totalValueLockedToken0_lte: BigDecimal
  totalValueLockedToken0_in: [BigDecimal!]
  totalValueLockedToken0_not_in: [BigDecimal!]
  totalValueLockedToken1: BigDecimal
  totalValueLockedToken1_not: BigDecimal
  totalValueLockedToken1_gt: BigDecimal
  totalValueLockedToken1_lt: BigDecimal
  totalValueLockedToken1_gte: BigDecimal
  totalValueLockedToken1_lte: BigDecimal
  totalValueLockedToken1_in: [BigDecimal!]
  totalValueLockedToken1_not_in: [BigDecimal!]
  totalValueLockedETH: BigDecimal
  totalValueLockedETH_not: BigDecimal
  totalValueLockedETH_gt: BigDecimal
  totalValueLockedETH_lt: BigDecimal
  totalValueLockedETH_gte: BigDecimal
  totalValueLockedETH_lte: BigDecimal
  totalValueLockedETH_in: [BigDecimal!]
  totalValueLockedETH_not_in: [BigDecimal!]
  totalValueLockedUSD: BigDecimal
  totalValueLockedUSD_not: BigDecimal
  totalValueLockedUSD_gt: BigDecimal
  totalValueLockedUSD_lt: BigDecimal
  totalValueLockedUSD_gte: BigDecimal
  totalValueLockedUSD_lte: BigDecimal
  totalValueLockedUSD_in: [BigDecimal!]
  totalValueLockedUSD_not_in: [BigDecimal!]
  totalValueLockedUSDUntracked: BigDecimal
  totalValueLockedUSDUntracked_not: BigDecimal
  totalValueLockedUSDUntracked_gt: BigDecimal
  totalValueLockedUSDUntracked_lt: BigDecimal
  totalValueLockedUSDUntracked_gte: BigDecimal
  totalValueLockedUSDUntracked_lte: BigDecimal
  totalValueLockedUSDUntracked_in: [BigDecimal!]
  totalValueLockedUSDUntracked_not_in: [BigDecimal!]
  liquidityProviderCount: BigInt
  liquidityProviderCount_not: BigInt
  liquidityProviderCount_gt: BigInt
  liquidityProviderCount_lt: BigInt
  liquidityProviderCount_gte: BigInt
  liquidityProviderCount_lte: BigInt
  liquidityProviderCount_in: [BigInt!]
  liquidityProviderCount_not_in: [BigInt!]
}

enum Pool_orderBy {
  id
  createdAtTimestamp
  createdAtBlockNumber
  token0
  token1
  feeTier
  liquidity
  sqrtPrice
  feeGrowthGlobal0X128
  feeGrowthGlobal1X128
  token0Price
  token1Price
  tick
  observationIndex
  volumeToken0
  volumeToken1
  volumeUSD
  untrackedVolumeUSD
  feesUSD
  txCount
  collectedFeesToken0
  collectedFeesToken1
  collectedFeesUSD
  totalValueLockedToken0
  totalValueLockedToken1
  totalValueLockedETH
  totalValueLockedUSD
  totalValueLockedUSDUntracked
  liquidityProviderCount
  poolHourData
  poolDayData
  mints
  burns
  swaps
  collects
  ticks
}

type Position {
  id: ID!
  owner: Bytes!
  pool: Pool!
  token0: Token!
  token1: Token!
  tickLower: Tick!
  tickUpper: Tick!
  liquidity: BigInt!
  depositedToken0: BigDecimal!
  depositedToken1: BigDecimal!
  withdrawnToken0: BigDecimal!
  withdrawnToken1: BigDecimal!
  collectedFeesToken0: BigDecimal!
  collectedFeesToken1: BigDecimal!
  transaction: Transaction!
  feeGrowthInside0LastX128: BigInt!
  feeGrowthInside1LastX128: BigInt!
}

type PositionSnapshot {
  id: ID!
  owner: Bytes!
  pool: Pool!
  position: Position!
  blockNumber: BigInt!
  timestamp: BigInt!
  liquidity: BigInt!
  depositedToken0: BigDecimal!
  depositedToken1: BigDecimal!
  withdrawnToken0: BigDecimal!
  withdrawnToken1: BigDecimal!
  collectedFeesToken0: BigDecimal!
  collectedFeesToken1: BigDecimal!
  transaction: Transaction!
  feeGrowthInside0LastX128: BigInt!
  feeGrowthInside1LastX128: BigInt!
}

input PositionSnapshot_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  owner: Bytes
  owner_not: Bytes
  owner_in: [Bytes!]
  owner_not_in: [Bytes!]
  owner_contains: Bytes
  owner_not_contains: Bytes
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  position: String
  position_not: String
  position_gt: String
  position_lt: String
  position_gte: String
  position_lte: String
  position_in: [String!]
  position_not_in: [String!]
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  blockNumber: BigInt
  blockNumber_not: BigInt
  blockNumber_gt: BigInt
  blockNumber_lt: BigInt
  blockNumber_gte: BigInt
  blockNumber_lte: BigInt
  blockNumber_in: [BigInt!]
  blockNumber_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  liquidity: BigInt
  liquidity_not: BigInt
  liquidity_gt: BigInt
  liquidity_lt: BigInt
  liquidity_gte: BigInt
  liquidity_lte: BigInt
  liquidity_in: [BigInt!]
  liquidity_not_in: [BigInt!]
  depositedToken0: BigDecimal
  depositedToken0_not: BigDecimal
  depositedToken0_gt: BigDecimal
  depositedToken0_lt: BigDecimal
  depositedToken0_gte: BigDecimal
  depositedToken0_lte: BigDecimal
  depositedToken0_in: [BigDecimal!]
  depositedToken0_not_in: [BigDecimal!]
  depositedToken1: BigDecimal
  depositedToken1_not: BigDecimal
  depositedToken1_gt: BigDecimal
  depositedToken1_lt: BigDecimal
  depositedToken1_gte: BigDecimal
  depositedToken1_lte: BigDecimal
  depositedToken1_in: [BigDecimal!]
  depositedToken1_not_in: [BigDecimal!]
  withdrawnToken0: BigDecimal
  withdrawnToken0_not: BigDecimal
  withdrawnToken0_gt: BigDecimal
  withdrawnToken0_lt: BigDecimal
  withdrawnToken0_gte: BigDecimal
  withdrawnToken0_lte: BigDecimal
  withdrawnToken0_in: [BigDecimal!]
  withdrawnToken0_not_in: [BigDecimal!]
  withdrawnToken1: BigDecimal
  withdrawnToken1_not: BigDecimal
  withdrawnToken1_gt: BigDecimal
  withdrawnToken1_lt: BigDecimal
  withdrawnToken1_gte: BigDecimal
  withdrawnToken1_lte: BigDecimal
  withdrawnToken1_in: [BigDecimal!]
  withdrawnToken1_not_in: [BigDecimal!]
  collectedFeesToken0: BigDecimal
  collectedFeesToken0_not: BigDecimal
  collectedFeesToken0_gt: BigDecimal
  collectedFeesToken0_lt: BigDecimal
  collectedFeesToken0_gte: BigDecimal
  collectedFeesToken0_lte: BigDecimal
  collectedFeesToken0_in: [BigDecimal!]
  collectedFeesToken0_not_in: [BigDecimal!]
  collectedFeesToken1: BigDecimal
  collectedFeesToken1_not: BigDecimal
  collectedFeesToken1_gt: BigDecimal
  collectedFeesToken1_lt: BigDecimal
  collectedFeesToken1_gte: BigDecimal
  collectedFeesToken1_lte: BigDecimal
  collectedFeesToken1_in: [BigDecimal!]
  collectedFeesToken1_not_in: [BigDecimal!]
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_not_contains: String
  transaction_starts_with: String
  transaction_not_starts_with: String
  transaction_ends_with: String
  transaction_not_ends_with: String
  feeGrowthInside0LastX128: BigInt
  feeGrowthInside0LastX128_not: BigInt
  feeGrowthInside0LastX128_gt: BigInt
  feeGrowthInside0LastX128_lt: BigInt
  feeGrowthInside0LastX128_gte: BigInt
  feeGrowthInside0LastX128_lte: BigInt
  feeGrowthInside0LastX128_in: [BigInt!]
  feeGrowthInside0LastX128_not_in: [BigInt!]
  feeGrowthInside1LastX128: BigInt
  feeGrowthInside1LastX128_not: BigInt
  feeGrowthInside1LastX128_gt: BigInt
  feeGrowthInside1LastX128_lt: BigInt
  feeGrowthInside1LastX128_gte: BigInt
  feeGrowthInside1LastX128_lte: BigInt
  feeGrowthInside1LastX128_in: [BigInt!]
  feeGrowthInside1LastX128_not_in: [BigInt!]
}

enum PositionSnapshot_orderBy {
  id
  owner
  pool
  position
  blockNumber
  timestamp
  liquidity
  depositedToken0
  depositedToken1
  withdrawnToken0
  withdrawnToken1
  collectedFeesToken0
  collectedFeesToken1
  transaction
  feeGrowthInside0LastX128
  feeGrowthInside1LastX128
}

input Position_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  owner: Bytes
  owner_not: Bytes
  owner_in: [Bytes!]
  owner_not_in: [Bytes!]
  owner_contains: Bytes
  owner_not_contains: Bytes
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_not_contains: String
  token0_starts_with: String
  token0_not_starts_with: String
  token0_ends_with: String
  token0_not_ends_with: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_not_contains: String
  token1_starts_with: String
  token1_not_starts_with: String
  token1_ends_with: String
  token1_not_ends_with: String
  tickLower: String
  tickLower_not: String
  tickLower_gt: String
  tickLower_lt: String
  tickLower_gte: String
  tickLower_lte: String
  tickLower_in: [String!]
  tickLower_not_in: [String!]
  tickLower_contains: String
  tickLower_not_contains: String
  tickLower_starts_with: String
  tickLower_not_starts_with: String
  tickLower_ends_with: String
  tickLower_not_ends_with: String
  tickUpper: String
  tickUpper_not: String
  tickUpper_gt: String
  tickUpper_lt: String
  tickUpper_gte: String
  tickUpper_lte: String
  tickUpper_in: [String!]
  tickUpper_not_in: [String!]
  tickUpper_contains: String
  tickUpper_not_contains: String
  tickUpper_starts_with: String
  tickUpper_not_starts_with: String
  tickUpper_ends_with: String
  tickUpper_not_ends_with: String
  liquidity: BigInt
  liquidity_not: BigInt
  liquidity_gt: BigInt
  liquidity_lt: BigInt
  liquidity_gte: BigInt
  liquidity_lte: BigInt
  liquidity_in: [BigInt!]
  liquidity_not_in: [BigInt!]
  depositedToken0: BigDecimal
  depositedToken0_not: BigDecimal
  depositedToken0_gt: BigDecimal
  depositedToken0_lt: BigDecimal
  depositedToken0_gte: BigDecimal
  depositedToken0_lte: BigDecimal
  depositedToken0_in: [BigDecimal!]
  depositedToken0_not_in: [BigDecimal!]
  depositedToken1: BigDecimal
  depositedToken1_not: BigDecimal
  depositedToken1_gt: BigDecimal
  depositedToken1_lt: BigDecimal
  depositedToken1_gte: BigDecimal
  depositedToken1_lte: BigDecimal
  depositedToken1_in: [BigDecimal!]
  depositedToken1_not_in: [BigDecimal!]
  withdrawnToken0: BigDecimal
  withdrawnToken0_not: BigDecimal
  withdrawnToken0_gt: BigDecimal
  withdrawnToken0_lt: BigDecimal
  withdrawnToken0_gte: BigDecimal
  withdrawnToken0_lte: BigDecimal
  withdrawnToken0_in: [BigDecimal!]
  withdrawnToken0_not_in: [BigDecimal!]
  withdrawnToken1: BigDecimal
  withdrawnToken1_not: BigDecimal
  withdrawnToken1_gt: BigDecimal
  withdrawnToken1_lt: BigDecimal
  withdrawnToken1_gte: BigDecimal
  withdrawnToken1_lte: BigDecimal
  withdrawnToken1_in: [BigDecimal!]
  withdrawnToken1_not_in: [BigDecimal!]
  collectedFeesToken0: BigDecimal
  collectedFeesToken0_not: BigDecimal
  collectedFeesToken0_gt: BigDecimal
  collectedFeesToken0_lt: BigDecimal
  collectedFeesToken0_gte: BigDecimal
  collectedFeesToken0_lte: BigDecimal
  collectedFeesToken0_in: [BigDecimal!]
  collectedFeesToken0_not_in: [BigDecimal!]
  collectedFeesToken1: BigDecimal
  collectedFeesToken1_not: BigDecimal
  collectedFeesToken1_gt: BigDecimal
  collectedFeesToken1_lt: BigDecimal
  collectedFeesToken1_gte: BigDecimal
  collectedFeesToken1_lte: BigDecimal
  collectedFeesToken1_in: [BigDecimal!]
  collectedFeesToken1_not_in: [BigDecimal!]
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_not_contains: String
  transaction_starts_with: String
  transaction_not_starts_with: String
  transaction_ends_with: String
  transaction_not_ends_with: String
  feeGrowthInside0LastX128: BigInt
  feeGrowthInside0LastX128_not: BigInt
  feeGrowthInside0LastX128_gt: BigInt
  feeGrowthInside0LastX128_lt: BigInt
  feeGrowthInside0LastX128_gte: BigInt
  feeGrowthInside0LastX128_lte: BigInt
  feeGrowthInside0LastX128_in: [BigInt!]
  feeGrowthInside0LastX128_not_in: [BigInt!]
  feeGrowthInside1LastX128: BigInt
  feeGrowthInside1LastX128_not: BigInt
  feeGrowthInside1LastX128_gt: BigInt
  feeGrowthInside1LastX128_lt: BigInt
  feeGrowthInside1LastX128_gte: BigInt
  feeGrowthInside1LastX128_lte: BigInt
  feeGrowthInside1LastX128_in: [BigInt!]
  feeGrowthInside1LastX128_not_in: [BigInt!]
}

enum Position_orderBy {
  id
  owner
  pool
  token0
  token1
  tickLower
  tickUpper
  liquidity
  depositedToken0
  depositedToken1
  withdrawnToken0
  withdrawnToken1
  collectedFeesToken0
  collectedFeesToken1
  transaction
  feeGrowthInside0LastX128
  feeGrowthInside1LastX128
}

type Query {
  factory(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Factory
  factories(
    skip: Int = 0
    first: Int = 100
    orderBy: Factory_orderBy
    orderDirection: OrderDirection
    where: Factory_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Factory!]!
  bundle(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Bundle
  bundles(
    skip: Int = 0
    first: Int = 100
    orderBy: Bundle_orderBy
    orderDirection: OrderDirection
    where: Bundle_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Bundle!]!
  token(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Token
  tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: Token_orderBy
    orderDirection: OrderDirection
    where: Token_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Token!]!
  pool(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Pool
  pools(
    skip: Int = 0
    first: Int = 100
    orderBy: Pool_orderBy
    orderDirection: OrderDirection
    where: Pool_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Pool!]!
  tick(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Tick
  ticks(
    skip: Int = 0
    first: Int = 100
    orderBy: Tick_orderBy
    orderDirection: OrderDirection
    where: Tick_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Tick!]!
  position(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Position
  positions(
    skip: Int = 0
    first: Int = 100
    orderBy: Position_orderBy
    orderDirection: OrderDirection
    where: Position_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Position!]!
  positionSnapshot(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PositionSnapshot
  positionSnapshots(
    skip: Int = 0
    first: Int = 100
    orderBy: PositionSnapshot_orderBy
    orderDirection: OrderDirection
    where: PositionSnapshot_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PositionSnapshot!]!
  transaction(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Transaction
  transactions(
    skip: Int = 0
    first: Int = 100
    orderBy: Transaction_orderBy
    orderDirection: OrderDirection
    where: Transaction_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Transaction!]!
  mint(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Mint
  mints(
    skip: Int = 0
    first: Int = 100
    orderBy: Mint_orderBy
    orderDirection: OrderDirection
    where: Mint_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Mint!]!
  burn(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Burn
  burns(
    skip: Int = 0
    first: Int = 100
    orderBy: Burn_orderBy
    orderDirection: OrderDirection
    where: Burn_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Burn!]!
  swap(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Swap
  swaps(
    skip: Int = 0
    first: Int = 100
    orderBy: Swap_orderBy
    orderDirection: OrderDirection
    where: Swap_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Swap!]!
  collect(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Collect
  collects(
    skip: Int = 0
    first: Int = 100
    orderBy: Collect_orderBy
    orderDirection: OrderDirection
    where: Collect_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Collect!]!
  flash(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Flash
  flashes(
    skip: Int = 0
    first: Int = 100
    orderBy: Flash_orderBy
    orderDirection: OrderDirection
    where: Flash_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Flash!]!
  uniswapDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): UniswapDayData
  uniswapDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: UniswapDayData_orderBy
    orderDirection: OrderDirection
    where: UniswapDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [UniswapDayData!]!
  poolDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PoolDayData
  poolDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: PoolDayData_orderBy
    orderDirection: OrderDirection
    where: PoolDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PoolDayData!]!
  poolHourData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PoolHourData
  poolHourDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: PoolHourData_orderBy
    orderDirection: OrderDirection
    where: PoolHourData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PoolHourData!]!
  tickHourData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TickHourData
  tickHourDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TickHourData_orderBy
    orderDirection: OrderDirection
    where: TickHourData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TickHourData!]!
  tickDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TickDayData
  tickDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TickDayData_orderBy
    orderDirection: OrderDirection
    where: TickDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TickDayData!]!
  tokenDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenDayData
  tokenDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenDayData_orderBy
    orderDirection: OrderDirection
    where: TokenDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenDayData!]!
  tokenHourData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenHourData
  tokenHourDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenHourData_orderBy
    orderDirection: OrderDirection
    where: TokenHourData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenHourData!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Subscription {
  factory(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Factory
  factories(
    skip: Int = 0
    first: Int = 100
    orderBy: Factory_orderBy
    orderDirection: OrderDirection
    where: Factory_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Factory!]!
  bundle(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Bundle
  bundles(
    skip: Int = 0
    first: Int = 100
    orderBy: Bundle_orderBy
    orderDirection: OrderDirection
    where: Bundle_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Bundle!]!
  token(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Token
  tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: Token_orderBy
    orderDirection: OrderDirection
    where: Token_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Token!]!
  pool(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Pool
  pools(
    skip: Int = 0
    first: Int = 100
    orderBy: Pool_orderBy
    orderDirection: OrderDirection
    where: Pool_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Pool!]!
  tick(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Tick
  ticks(
    skip: Int = 0
    first: Int = 100
    orderBy: Tick_orderBy
    orderDirection: OrderDirection
    where: Tick_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Tick!]!
  position(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Position
  positions(
    skip: Int = 0
    first: Int = 100
    orderBy: Position_orderBy
    orderDirection: OrderDirection
    where: Position_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Position!]!
  positionSnapshot(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PositionSnapshot
  positionSnapshots(
    skip: Int = 0
    first: Int = 100
    orderBy: PositionSnapshot_orderBy
    orderDirection: OrderDirection
    where: PositionSnapshot_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PositionSnapshot!]!
  transaction(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Transaction
  transactions(
    skip: Int = 0
    first: Int = 100
    orderBy: Transaction_orderBy
    orderDirection: OrderDirection
    where: Transaction_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Transaction!]!
  mint(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Mint
  mints(
    skip: Int = 0
    first: Int = 100
    orderBy: Mint_orderBy
    orderDirection: OrderDirection
    where: Mint_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Mint!]!
  burn(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Burn
  burns(
    skip: Int = 0
    first: Int = 100
    orderBy: Burn_orderBy
    orderDirection: OrderDirection
    where: Burn_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Burn!]!
  swap(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Swap
  swaps(
    skip: Int = 0
    first: Int = 100
    orderBy: Swap_orderBy
    orderDirection: OrderDirection
    where: Swap_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Swap!]!
  collect(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Collect
  collects(
    skip: Int = 0
    first: Int = 100
    orderBy: Collect_orderBy
    orderDirection: OrderDirection
    where: Collect_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Collect!]!
  flash(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Flash
  flashes(
    skip: Int = 0
    first: Int = 100
    orderBy: Flash_orderBy
    orderDirection: OrderDirection
    where: Flash_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Flash!]!
  uniswapDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): UniswapDayData
  uniswapDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: UniswapDayData_orderBy
    orderDirection: OrderDirection
    where: UniswapDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [UniswapDayData!]!
  poolDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PoolDayData
  poolDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: PoolDayData_orderBy
    orderDirection: OrderDirection
    where: PoolDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PoolDayData!]!
  poolHourData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PoolHourData
  poolHourDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: PoolHourData_orderBy
    orderDirection: OrderDirection
    where: PoolHourData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PoolHourData!]!
  tickHourData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TickHourData
  tickHourDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TickHourData_orderBy
    orderDirection: OrderDirection
    where: TickHourData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TickHourData!]!
  tickDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TickDayData
  tickDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TickDayData_orderBy
    orderDirection: OrderDirection
    where: TickDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TickDayData!]!
  tokenDayData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenDayData
  tokenDayDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenDayData_orderBy
    orderDirection: OrderDirection
    where: TokenDayData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenDayData!]!
  tokenHourData(
    id: ID!
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenHourData
  tokenHourDatas(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenHourData_orderBy
    orderDirection: OrderDirection
    where: TokenHourData_filter
    """The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted."""
    block: Block_height
    """Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing."""
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenHourData!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Swap {
  id: ID!
  transaction: Transaction!
  timestamp: BigInt!
  pool: Pool!
  token0: Token!
  token1: Token!
  sender: Bytes!
  recipient: Bytes!
  origin: Bytes!
  amount0: BigDecimal!
  amount1: BigDecimal!
  amountUSD: BigDecimal!
  sqrtPriceX96: BigInt!
  tick: BigInt!
  logIndex: BigInt
}

input Swap_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_not_contains: String
  transaction_starts_with: String
  transaction_not_starts_with: String
  transaction_ends_with: String
  transaction_not_ends_with: String
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_not_contains: String
  token0_starts_with: String
  token0_not_starts_with: String
  token0_ends_with: String
  token0_not_ends_with: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_not_contains: String
  token1_starts_with: String
  token1_not_starts_with: String
  token1_ends_with: String
  token1_not_ends_with: String
  sender: Bytes
  sender_not: Bytes
  sender_in: [Bytes!]
  sender_not_in: [Bytes!]
  sender_contains: Bytes
  sender_not_contains: Bytes
  recipient: Bytes
  recipient_not: Bytes
  recipient_in: [Bytes!]
  recipient_not_in: [Bytes!]
  recipient_contains: Bytes
  recipient_not_contains: Bytes
  origin: Bytes
  origin_not: Bytes
  origin_in: [Bytes!]
  origin_not_in: [Bytes!]
  origin_contains: Bytes
  origin_not_contains: Bytes
  amount0: BigDecimal
  amount0_not: BigDecimal
  amount0_gt: BigDecimal
  amount0_lt: BigDecimal
  amount0_gte: BigDecimal
  amount0_lte: BigDecimal
  amount0_in: [BigDecimal!]
  amount0_not_in: [BigDecimal!]
  amount1: BigDecimal
  amount1_not: BigDecimal
  amount1_gt: BigDecimal
  amount1_lt: BigDecimal
  amount1_gte: BigDecimal
  amount1_lte: BigDecimal
  amount1_in: [BigDecimal!]
  amount1_not_in: [BigDecimal!]
  amountUSD: BigDecimal
  amountUSD_not: BigDecimal
  amountUSD_gt: BigDecimal
  amountUSD_lt: BigDecimal
  amountUSD_gte: BigDecimal
  amountUSD_lte: BigDecimal
  amountUSD_in: [BigDecimal!]
  amountUSD_not_in: [BigDecimal!]
  sqrtPriceX96: BigInt
  sqrtPriceX96_not: BigInt
  sqrtPriceX96_gt: BigInt
  sqrtPriceX96_lt: BigInt
  sqrtPriceX96_gte: BigInt
  sqrtPriceX96_lte: BigInt
  sqrtPriceX96_in: [BigInt!]
  sqrtPriceX96_not_in: [BigInt!]
  tick: BigInt
  tick_not: BigInt
  tick_gt: BigInt
  tick_lt: BigInt
  tick_gte: BigInt
  tick_lte: BigInt
  tick_in: [BigInt!]
  tick_not_in: [BigInt!]
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
}

enum Swap_orderBy {
  id
  transaction
  timestamp
  pool
  token0
  token1
  sender
  recipient
  origin
  amount0
  amount1
  amountUSD
  sqrtPriceX96
  tick
  logIndex
}

type Tick {
  id: ID!
  poolAddress: String
  tickIdx: BigInt!
  pool: Pool!
  liquidityGross: BigInt!
  liquidityNet: BigInt!
  price0: BigDecimal!
  price1: BigDecimal!
  volumeToken0: BigDecimal!
  volumeToken1: BigDecimal!
  volumeUSD: BigDecimal!
  untrackedVolumeUSD: BigDecimal!
  feesUSD: BigDecimal!
  collectedFeesToken0: BigDecimal!
  collectedFeesToken1: BigDecimal!
  collectedFeesUSD: BigDecimal!
  createdAtTimestamp: BigInt!
  createdAtBlockNumber: BigInt!
  liquidityProviderCount: BigInt!
  feeGrowthOutside0X128: BigInt!
  feeGrowthOutside1X128: BigInt!
}

type TickDayData {
  id: ID!
  date: Int!
  pool: Pool!
  tick: Tick!
  liquidityGross: BigInt!
  liquidityNet: BigInt!
  volumeToken0: BigDecimal!
  volumeToken1: BigDecimal!
  volumeUSD: BigDecimal!
  feesUSD: BigDecimal!
  feeGrowthOutside0X128: BigInt!
  feeGrowthOutside1X128: BigInt!
}

input TickDayData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  date: Int
  date_not: Int
  date_gt: Int
  date_lt: Int
  date_gte: Int
  date_lte: Int
  date_in: [Int!]
  date_not_in: [Int!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  tick: String
  tick_not: String
  tick_gt: String
  tick_lt: String
  tick_gte: String
  tick_lte: String
  tick_in: [String!]
  tick_not_in: [String!]
  tick_contains: String
  tick_not_contains: String
  tick_starts_with: String
  tick_not_starts_with: String
  tick_ends_with: String
  tick_not_ends_with: String
  liquidityGross: BigInt
  liquidityGross_not: BigInt
  liquidityGross_gt: BigInt
  liquidityGross_lt: BigInt
  liquidityGross_gte: BigInt
  liquidityGross_lte: BigInt
  liquidityGross_in: [BigInt!]
  liquidityGross_not_in: [BigInt!]
  liquidityNet: BigInt
  liquidityNet_not: BigInt
  liquidityNet_gt: BigInt
  liquidityNet_lt: BigInt
  liquidityNet_gte: BigInt
  liquidityNet_lte: BigInt
  liquidityNet_in: [BigInt!]
  liquidityNet_not_in: [BigInt!]
  volumeToken0: BigDecimal
  volumeToken0_not: BigDecimal
  volumeToken0_gt: BigDecimal
  volumeToken0_lt: BigDecimal
  volumeToken0_gte: BigDecimal
  volumeToken0_lte: BigDecimal
  volumeToken0_in: [BigDecimal!]
  volumeToken0_not_in: [BigDecimal!]
  volumeToken1: BigDecimal
  volumeToken1_not: BigDecimal
  volumeToken1_gt: BigDecimal
  volumeToken1_lt: BigDecimal
  volumeToken1_gte: BigDecimal
  volumeToken1_lte: BigDecimal
  volumeToken1_in: [BigDecimal!]
  volumeToken1_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  feeGrowthOutside0X128: BigInt
  feeGrowthOutside0X128_not: BigInt
  feeGrowthOutside0X128_gt: BigInt
  feeGrowthOutside0X128_lt: BigInt
  feeGrowthOutside0X128_gte: BigInt
  feeGrowthOutside0X128_lte: BigInt
  feeGrowthOutside0X128_in: [BigInt!]
  feeGrowthOutside0X128_not_in: [BigInt!]
  feeGrowthOutside1X128: BigInt
  feeGrowthOutside1X128_not: BigInt
  feeGrowthOutside1X128_gt: BigInt
  feeGrowthOutside1X128_lt: BigInt
  feeGrowthOutside1X128_gte: BigInt
  feeGrowthOutside1X128_lte: BigInt
  feeGrowthOutside1X128_in: [BigInt!]
  feeGrowthOutside1X128_not_in: [BigInt!]
}

enum TickDayData_orderBy {
  id
  date
  pool
  tick
  liquidityGross
  liquidityNet
  volumeToken0
  volumeToken1
  volumeUSD
  feesUSD
  feeGrowthOutside0X128
  feeGrowthOutside1X128
}

type TickHourData {
  id: ID!
  periodStartUnix: Int!
  pool: Pool!
  tick: Tick!
  liquidityGross: BigInt!
  liquidityNet: BigInt!
  volumeToken0: BigDecimal!
  volumeToken1: BigDecimal!
  volumeUSD: BigDecimal!
  feesUSD: BigDecimal!
}

input TickHourData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  periodStartUnix: Int
  periodStartUnix_not: Int
  periodStartUnix_gt: Int
  periodStartUnix_lt: Int
  periodStartUnix_gte: Int
  periodStartUnix_lte: Int
  periodStartUnix_in: [Int!]
  periodStartUnix_not_in: [Int!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  tick: String
  tick_not: String
  tick_gt: String
  tick_lt: String
  tick_gte: String
  tick_lte: String
  tick_in: [String!]
  tick_not_in: [String!]
  tick_contains: String
  tick_not_contains: String
  tick_starts_with: String
  tick_not_starts_with: String
  tick_ends_with: String
  tick_not_ends_with: String
  liquidityGross: BigInt
  liquidityGross_not: BigInt
  liquidityGross_gt: BigInt
  liquidityGross_lt: BigInt
  liquidityGross_gte: BigInt
  liquidityGross_lte: BigInt
  liquidityGross_in: [BigInt!]
  liquidityGross_not_in: [BigInt!]
  liquidityNet: BigInt
  liquidityNet_not: BigInt
  liquidityNet_gt: BigInt
  liquidityNet_lt: BigInt
  liquidityNet_gte: BigInt
  liquidityNet_lte: BigInt
  liquidityNet_in: [BigInt!]
  liquidityNet_not_in: [BigInt!]
  volumeToken0: BigDecimal
  volumeToken0_not: BigDecimal
  volumeToken0_gt: BigDecimal
  volumeToken0_lt: BigDecimal
  volumeToken0_gte: BigDecimal
  volumeToken0_lte: BigDecimal
  volumeToken0_in: [BigDecimal!]
  volumeToken0_not_in: [BigDecimal!]
  volumeToken1: BigDecimal
  volumeToken1_not: BigDecimal
  volumeToken1_gt: BigDecimal
  volumeToken1_lt: BigDecimal
  volumeToken1_gte: BigDecimal
  volumeToken1_lte: BigDecimal
  volumeToken1_in: [BigDecimal!]
  volumeToken1_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
}

enum TickHourData_orderBy {
  id
  periodStartUnix
  pool
  tick
  liquidityGross
  liquidityNet
  volumeToken0
  volumeToken1
  volumeUSD
  feesUSD
}

input Tick_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  poolAddress: String
  poolAddress_not: String
  poolAddress_gt: String
  poolAddress_lt: String
  poolAddress_gte: String
  poolAddress_lte: String
  poolAddress_in: [String!]
  poolAddress_not_in: [String!]
  poolAddress_contains: String
  poolAddress_not_contains: String
  poolAddress_starts_with: String
  poolAddress_not_starts_with: String
  poolAddress_ends_with: String
  poolAddress_not_ends_with: String
  tickIdx: BigInt
  tickIdx_not: BigInt
  tickIdx_gt: BigInt
  tickIdx_lt: BigInt
  tickIdx_gte: BigInt
  tickIdx_lte: BigInt
  tickIdx_in: [BigInt!]
  tickIdx_not_in: [BigInt!]
  pool: String
  pool_not: String
  pool_gt: String
  pool_lt: String
  pool_gte: String
  pool_lte: String
  pool_in: [String!]
  pool_not_in: [String!]
  pool_contains: String
  pool_not_contains: String
  pool_starts_with: String
  pool_not_starts_with: String
  pool_ends_with: String
  pool_not_ends_with: String
  liquidityGross: BigInt
  liquidityGross_not: BigInt
  liquidityGross_gt: BigInt
  liquidityGross_lt: BigInt
  liquidityGross_gte: BigInt
  liquidityGross_lte: BigInt
  liquidityGross_in: [BigInt!]
  liquidityGross_not_in: [BigInt!]
  liquidityNet: BigInt
  liquidityNet_not: BigInt
  liquidityNet_gt: BigInt
  liquidityNet_lt: BigInt
  liquidityNet_gte: BigInt
  liquidityNet_lte: BigInt
  liquidityNet_in: [BigInt!]
  liquidityNet_not_in: [BigInt!]
  price0: BigDecimal
  price0_not: BigDecimal
  price0_gt: BigDecimal
  price0_lt: BigDecimal
  price0_gte: BigDecimal
  price0_lte: BigDecimal
  price0_in: [BigDecimal!]
  price0_not_in: [BigDecimal!]
  price1: BigDecimal
  price1_not: BigDecimal
  price1_gt: BigDecimal
  price1_lt: BigDecimal
  price1_gte: BigDecimal
  price1_lte: BigDecimal
  price1_in: [BigDecimal!]
  price1_not_in: [BigDecimal!]
  volumeToken0: BigDecimal
  volumeToken0_not: BigDecimal
  volumeToken0_gt: BigDecimal
  volumeToken0_lt: BigDecimal
  volumeToken0_gte: BigDecimal
  volumeToken0_lte: BigDecimal
  volumeToken0_in: [BigDecimal!]
  volumeToken0_not_in: [BigDecimal!]
  volumeToken1: BigDecimal
  volumeToken1_not: BigDecimal
  volumeToken1_gt: BigDecimal
  volumeToken1_lt: BigDecimal
  volumeToken1_gte: BigDecimal
  volumeToken1_lte: BigDecimal
  volumeToken1_in: [BigDecimal!]
  volumeToken1_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  untrackedVolumeUSD: BigDecimal
  untrackedVolumeUSD_not: BigDecimal
  untrackedVolumeUSD_gt: BigDecimal
  untrackedVolumeUSD_lt: BigDecimal
  untrackedVolumeUSD_gte: BigDecimal
  untrackedVolumeUSD_lte: BigDecimal
  untrackedVolumeUSD_in: [BigDecimal!]
  untrackedVolumeUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  collectedFeesToken0: BigDecimal
  collectedFeesToken0_not: BigDecimal
  collectedFeesToken0_gt: BigDecimal
  collectedFeesToken0_lt: BigDecimal
  collectedFeesToken0_gte: BigDecimal
  collectedFeesToken0_lte: BigDecimal
  collectedFeesToken0_in: [BigDecimal!]
  collectedFeesToken0_not_in: [BigDecimal!]
  collectedFeesToken1: BigDecimal
  collectedFeesToken1_not: BigDecimal
  collectedFeesToken1_gt: BigDecimal
  collectedFeesToken1_lt: BigDecimal
  collectedFeesToken1_gte: BigDecimal
  collectedFeesToken1_lte: BigDecimal
  collectedFeesToken1_in: [BigDecimal!]
  collectedFeesToken1_not_in: [BigDecimal!]
  collectedFeesUSD: BigDecimal
  collectedFeesUSD_not: BigDecimal
  collectedFeesUSD_gt: BigDecimal
  collectedFeesUSD_lt: BigDecimal
  collectedFeesUSD_gte: BigDecimal
  collectedFeesUSD_lte: BigDecimal
  collectedFeesUSD_in: [BigDecimal!]
  collectedFeesUSD_not_in: [BigDecimal!]
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
  liquidityProviderCount: BigInt
  liquidityProviderCount_not: BigInt
  liquidityProviderCount_gt: BigInt
  liquidityProviderCount_lt: BigInt
  liquidityProviderCount_gte: BigInt
  liquidityProviderCount_lte: BigInt
  liquidityProviderCount_in: [BigInt!]
  liquidityProviderCount_not_in: [BigInt!]
  feeGrowthOutside0X128: BigInt
  feeGrowthOutside0X128_not: BigInt
  feeGrowthOutside0X128_gt: BigInt
  feeGrowthOutside0X128_lt: BigInt
  feeGrowthOutside0X128_gte: BigInt
  feeGrowthOutside0X128_lte: BigInt
  feeGrowthOutside0X128_in: [BigInt!]
  feeGrowthOutside0X128_not_in: [BigInt!]
  feeGrowthOutside1X128: BigInt
  feeGrowthOutside1X128_not: BigInt
  feeGrowthOutside1X128_gt: BigInt
  feeGrowthOutside1X128_lt: BigInt
  feeGrowthOutside1X128_gte: BigInt
  feeGrowthOutside1X128_lte: BigInt
  feeGrowthOutside1X128_in: [BigInt!]
  feeGrowthOutside1X128_not_in: [BigInt!]
}

enum Tick_orderBy {
  id
  poolAddress
  tickIdx
  pool
  liquidityGross
  liquidityNet
  price0
  price1
  volumeToken0
  volumeToken1
  volumeUSD
  untrackedVolumeUSD
  feesUSD
  collectedFeesToken0
  collectedFeesToken1
  collectedFeesUSD
  createdAtTimestamp
  createdAtBlockNumber
  liquidityProviderCount
  feeGrowthOutside0X128
  feeGrowthOutside1X128
}

type Token {
  id: ID!
  symbol: String!
  name: String!
  decimals: BigInt!
  totalSupply: BigInt!
  volume: BigDecimal!
  volumeUSD: BigDecimal!
  untrackedVolumeUSD: BigDecimal!
  feesUSD: BigDecimal!
  txCount: BigInt!
  poolCount: BigInt!
  totalValueLocked: BigDecimal!
  totalValueLockedUSD: BigDecimal!
  totalValueLockedUSDUntracked: BigDecimal!
  derivedETH: BigDecimal!
  whitelistPools(skip: Int = 0, first: Int = 100, orderBy: Pool_orderBy, orderDirection: OrderDirection, where: Pool_filter): [Pool!]!
  tokenDayData(skip: Int = 0, first: Int = 100, orderBy: TokenDayData_orderBy, orderDirection: OrderDirection, where: TokenDayData_filter): [TokenDayData!]!
}

type TokenDayData {
  id: ID!
  date: Int!
  token: Token!
  volume: BigDecimal!
  volumeUSD: BigDecimal!
  untrackedVolumeUSD: BigDecimal!
  totalValueLocked: BigDecimal!
  totalValueLockedUSD: BigDecimal!
  priceUSD: BigDecimal!
  feesUSD: BigDecimal!
  open: BigDecimal!
  high: BigDecimal!
  low: BigDecimal!
  close: BigDecimal!
}

input TokenDayData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  date: Int
  date_not: Int
  date_gt: Int
  date_lt: Int
  date_gte: Int
  date_lte: Int
  date_in: [Int!]
  date_not_in: [Int!]
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  volume: BigDecimal
  volume_not: BigDecimal
  volume_gt: BigDecimal
  volume_lt: BigDecimal
  volume_gte: BigDecimal
  volume_lte: BigDecimal
  volume_in: [BigDecimal!]
  volume_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  untrackedVolumeUSD: BigDecimal
  untrackedVolumeUSD_not: BigDecimal
  untrackedVolumeUSD_gt: BigDecimal
  untrackedVolumeUSD_lt: BigDecimal
  untrackedVolumeUSD_gte: BigDecimal
  untrackedVolumeUSD_lte: BigDecimal
  untrackedVolumeUSD_in: [BigDecimal!]
  untrackedVolumeUSD_not_in: [BigDecimal!]
  totalValueLocked: BigDecimal
  totalValueLocked_not: BigDecimal
  totalValueLocked_gt: BigDecimal
  totalValueLocked_lt: BigDecimal
  totalValueLocked_gte: BigDecimal
  totalValueLocked_lte: BigDecimal
  totalValueLocked_in: [BigDecimal!]
  totalValueLocked_not_in: [BigDecimal!]
  totalValueLockedUSD: BigDecimal
  totalValueLockedUSD_not: BigDecimal
  totalValueLockedUSD_gt: BigDecimal
  totalValueLockedUSD_lt: BigDecimal
  totalValueLockedUSD_gte: BigDecimal
  totalValueLockedUSD_lte: BigDecimal
  totalValueLockedUSD_in: [BigDecimal!]
  totalValueLockedUSD_not_in: [BigDecimal!]
  priceUSD: BigDecimal
  priceUSD_not: BigDecimal
  priceUSD_gt: BigDecimal
  priceUSD_lt: BigDecimal
  priceUSD_gte: BigDecimal
  priceUSD_lte: BigDecimal
  priceUSD_in: [BigDecimal!]
  priceUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  open: BigDecimal
  open_not: BigDecimal
  open_gt: BigDecimal
  open_lt: BigDecimal
  open_gte: BigDecimal
  open_lte: BigDecimal
  open_in: [BigDecimal!]
  open_not_in: [BigDecimal!]
  high: BigDecimal
  high_not: BigDecimal
  high_gt: BigDecimal
  high_lt: BigDecimal
  high_gte: BigDecimal
  high_lte: BigDecimal
  high_in: [BigDecimal!]
  high_not_in: [BigDecimal!]
  low: BigDecimal
  low_not: BigDecimal
  low_gt: BigDecimal
  low_lt: BigDecimal
  low_gte: BigDecimal
  low_lte: BigDecimal
  low_in: [BigDecimal!]
  low_not_in: [BigDecimal!]
  close: BigDecimal
  close_not: BigDecimal
  close_gt: BigDecimal
  close_lt: BigDecimal
  close_gte: BigDecimal
  close_lte: BigDecimal
  close_in: [BigDecimal!]
  close_not_in: [BigDecimal!]
}

enum TokenDayData_orderBy {
  id
  date
  token
  volume
  volumeUSD
  untrackedVolumeUSD
  totalValueLocked
  totalValueLockedUSD
  priceUSD
  feesUSD
  open
  high
  low
  close
}

type TokenHourData {
  id: ID!
  periodStartUnix: Int!
  token: Token!
  volume: BigDecimal!
  volumeUSD: BigDecimal!
  untrackedVolumeUSD: BigDecimal!
  totalValueLocked: BigDecimal!
  totalValueLockedUSD: BigDecimal!
  priceUSD: BigDecimal!
  feesUSD: BigDecimal!
  open: BigDecimal!
  high: BigDecimal!
  low: BigDecimal!
  close: BigDecimal!
}

input TokenHourData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  periodStartUnix: Int
  periodStartUnix_not: Int
  periodStartUnix_gt: Int
  periodStartUnix_lt: Int
  periodStartUnix_gte: Int
  periodStartUnix_lte: Int
  periodStartUnix_in: [Int!]
  periodStartUnix_not_in: [Int!]
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  volume: BigDecimal
  volume_not: BigDecimal
  volume_gt: BigDecimal
  volume_lt: BigDecimal
  volume_gte: BigDecimal
  volume_lte: BigDecimal
  volume_in: [BigDecimal!]
  volume_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  untrackedVolumeUSD: BigDecimal
  untrackedVolumeUSD_not: BigDecimal
  untrackedVolumeUSD_gt: BigDecimal
  untrackedVolumeUSD_lt: BigDecimal
  untrackedVolumeUSD_gte: BigDecimal
  untrackedVolumeUSD_lte: BigDecimal
  untrackedVolumeUSD_in: [BigDecimal!]
  untrackedVolumeUSD_not_in: [BigDecimal!]
  totalValueLocked: BigDecimal
  totalValueLocked_not: BigDecimal
  totalValueLocked_gt: BigDecimal
  totalValueLocked_lt: BigDecimal
  totalValueLocked_gte: BigDecimal
  totalValueLocked_lte: BigDecimal
  totalValueLocked_in: [BigDecimal!]
  totalValueLocked_not_in: [BigDecimal!]
  totalValueLockedUSD: BigDecimal
  totalValueLockedUSD_not: BigDecimal
  totalValueLockedUSD_gt: BigDecimal
  totalValueLockedUSD_lt: BigDecimal
  totalValueLockedUSD_gte: BigDecimal
  totalValueLockedUSD_lte: BigDecimal
  totalValueLockedUSD_in: [BigDecimal!]
  totalValueLockedUSD_not_in: [BigDecimal!]
  priceUSD: BigDecimal
  priceUSD_not: BigDecimal
  priceUSD_gt: BigDecimal
  priceUSD_lt: BigDecimal
  priceUSD_gte: BigDecimal
  priceUSD_lte: BigDecimal
  priceUSD_in: [BigDecimal!]
  priceUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  open: BigDecimal
  open_not: BigDecimal
  open_gt: BigDecimal
  open_lt: BigDecimal
  open_gte: BigDecimal
  open_lte: BigDecimal
  open_in: [BigDecimal!]
  open_not_in: [BigDecimal!]
  high: BigDecimal
  high_not: BigDecimal
  high_gt: BigDecimal
  high_lt: BigDecimal
  high_gte: BigDecimal
  high_lte: BigDecimal
  high_in: [BigDecimal!]
  high_not_in: [BigDecimal!]
  low: BigDecimal
  low_not: BigDecimal
  low_gt: BigDecimal
  low_lt: BigDecimal
  low_gte: BigDecimal
  low_lte: BigDecimal
  low_in: [BigDecimal!]
  low_not_in: [BigDecimal!]
  close: BigDecimal
  close_not: BigDecimal
  close_gt: BigDecimal
  close_lt: BigDecimal
  close_gte: BigDecimal
  close_lte: BigDecimal
  close_in: [BigDecimal!]
  close_not_in: [BigDecimal!]
}

enum TokenHourData_orderBy {
  id
  periodStartUnix
  token
  volume
  volumeUSD
  untrackedVolumeUSD
  totalValueLocked
  totalValueLockedUSD
  priceUSD
  feesUSD
  open
  high
  low
  close
}

input Token_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  symbol: String
  symbol_not: String
  symbol_gt: String
  symbol_lt: String
  symbol_gte: String
  symbol_lte: String
  symbol_in: [String!]
  symbol_not_in: [String!]
  symbol_contains: String
  symbol_not_contains: String
  symbol_starts_with: String
  symbol_not_starts_with: String
  symbol_ends_with: String
  symbol_not_ends_with: String
  name: String
  name_not: String
  name_gt: String
  name_lt: String
  name_gte: String
  name_lte: String
  name_in: [String!]
  name_not_in: [String!]
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  decimals: BigInt
  decimals_not: BigInt
  decimals_gt: BigInt
  decimals_lt: BigInt
  decimals_gte: BigInt
  decimals_lte: BigInt
  decimals_in: [BigInt!]
  decimals_not_in: [BigInt!]
  totalSupply: BigInt
  totalSupply_not: BigInt
  totalSupply_gt: BigInt
  totalSupply_lt: BigInt
  totalSupply_gte: BigInt
  totalSupply_lte: BigInt
  totalSupply_in: [BigInt!]
  totalSupply_not_in: [BigInt!]
  volume: BigDecimal
  volume_not: BigDecimal
  volume_gt: BigDecimal
  volume_lt: BigDecimal
  volume_gte: BigDecimal
  volume_lte: BigDecimal
  volume_in: [BigDecimal!]
  volume_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  untrackedVolumeUSD: BigDecimal
  untrackedVolumeUSD_not: BigDecimal
  untrackedVolumeUSD_gt: BigDecimal
  untrackedVolumeUSD_lt: BigDecimal
  untrackedVolumeUSD_gte: BigDecimal
  untrackedVolumeUSD_lte: BigDecimal
  untrackedVolumeUSD_in: [BigDecimal!]
  untrackedVolumeUSD_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  txCount: BigInt
  txCount_not: BigInt
  txCount_gt: BigInt
  txCount_lt: BigInt
  txCount_gte: BigInt
  txCount_lte: BigInt
  txCount_in: [BigInt!]
  txCount_not_in: [BigInt!]
  poolCount: BigInt
  poolCount_not: BigInt
  poolCount_gt: BigInt
  poolCount_lt: BigInt
  poolCount_gte: BigInt
  poolCount_lte: BigInt
  poolCount_in: [BigInt!]
  poolCount_not_in: [BigInt!]
  totalValueLocked: BigDecimal
  totalValueLocked_not: BigDecimal
  totalValueLocked_gt: BigDecimal
  totalValueLocked_lt: BigDecimal
  totalValueLocked_gte: BigDecimal
  totalValueLocked_lte: BigDecimal
  totalValueLocked_in: [BigDecimal!]
  totalValueLocked_not_in: [BigDecimal!]
  totalValueLockedUSD: BigDecimal
  totalValueLockedUSD_not: BigDecimal
  totalValueLockedUSD_gt: BigDecimal
  totalValueLockedUSD_lt: BigDecimal
  totalValueLockedUSD_gte: BigDecimal
  totalValueLockedUSD_lte: BigDecimal
  totalValueLockedUSD_in: [BigDecimal!]
  totalValueLockedUSD_not_in: [BigDecimal!]
  totalValueLockedUSDUntracked: BigDecimal
  totalValueLockedUSDUntracked_not: BigDecimal
  totalValueLockedUSDUntracked_gt: BigDecimal
  totalValueLockedUSDUntracked_lt: BigDecimal
  totalValueLockedUSDUntracked_gte: BigDecimal
  totalValueLockedUSDUntracked_lte: BigDecimal
  totalValueLockedUSDUntracked_in: [BigDecimal!]
  totalValueLockedUSDUntracked_not_in: [BigDecimal!]
  derivedETH: BigDecimal
  derivedETH_not: BigDecimal
  derivedETH_gt: BigDecimal
  derivedETH_lt: BigDecimal
  derivedETH_gte: BigDecimal
  derivedETH_lte: BigDecimal
  derivedETH_in: [BigDecimal!]
  derivedETH_not_in: [BigDecimal!]
  whitelistPools: [String!]
  whitelistPools_not: [String!]
  whitelistPools_contains: [String!]
  whitelistPools_not_contains: [String!]
}

enum Token_orderBy {
  id
  symbol
  name
  decimals
  totalSupply
  volume
  volumeUSD
  untrackedVolumeUSD
  feesUSD
  txCount
  poolCount
  totalValueLocked
  totalValueLockedUSD
  totalValueLockedUSDUntracked
  derivedETH
  whitelistPools
  tokenDayData
}

type Transaction {
  id: ID!
  blockNumber: BigInt!
  timestamp: BigInt!
  gasUsed: BigInt!
  gasPrice: BigInt!
  mints(skip: Int = 0, first: Int = 100, orderBy: Mint_orderBy, orderDirection: OrderDirection, where: Mint_filter): [Mint!]
  burns(skip: Int = 0, first: Int = 100, orderBy: Burn_orderBy, orderDirection: OrderDirection, where: Burn_filter): [Burn!]
  swaps(skip: Int = 0, first: Int = 100, orderBy: Swap_orderBy, orderDirection: OrderDirection, where: Swap_filter): [Swap!]
  flashed(skip: Int = 0, first: Int = 100, orderBy: Flash_orderBy, orderDirection: OrderDirection, where: Flash_filter): [Flash!]
  collects(skip: Int = 0, first: Int = 100, orderBy: Collect_orderBy, orderDirection: OrderDirection, where: Collect_filter): [Collect!]
}

input Transaction_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  blockNumber: BigInt
  blockNumber_not: BigInt
  blockNumber_gt: BigInt
  blockNumber_lt: BigInt
  blockNumber_gte: BigInt
  blockNumber_lte: BigInt
  blockNumber_in: [BigInt!]
  blockNumber_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  gasUsed: BigInt
  gasUsed_not: BigInt
  gasUsed_gt: BigInt
  gasUsed_lt: BigInt
  gasUsed_gte: BigInt
  gasUsed_lte: BigInt
  gasUsed_in: [BigInt!]
  gasUsed_not_in: [BigInt!]
  gasPrice: BigInt
  gasPrice_not: BigInt
  gasPrice_gt: BigInt
  gasPrice_lt: BigInt
  gasPrice_gte: BigInt
  gasPrice_lte: BigInt
  gasPrice_in: [BigInt!]
  gasPrice_not_in: [BigInt!]
}

enum Transaction_orderBy {
  id
  blockNumber
  timestamp
  gasUsed
  gasPrice
  mints
  burns
  swaps
  flashed
  collects
}

type UniswapDayData {
  id: ID!
  date: Int!
  volumeETH: BigDecimal!
  volumeUSD: BigDecimal!
  volumeUSDUntracked: BigDecimal!
  feesUSD: BigDecimal!
  txCount: BigInt!
  tvlUSD: BigDecimal!
}

input UniswapDayData_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  date: Int
  date_not: Int
  date_gt: Int
  date_lt: Int
  date_gte: Int
  date_lte: Int
  date_in: [Int!]
  date_not_in: [Int!]
  volumeETH: BigDecimal
  volumeETH_not: BigDecimal
  volumeETH_gt: BigDecimal
  volumeETH_lt: BigDecimal
  volumeETH_gte: BigDecimal
  volumeETH_lte: BigDecimal
  volumeETH_in: [BigDecimal!]
  volumeETH_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  volumeUSDUntracked: BigDecimal
  volumeUSDUntracked_not: BigDecimal
  volumeUSDUntracked_gt: BigDecimal
  volumeUSDUntracked_lt: BigDecimal
  volumeUSDUntracked_gte: BigDecimal
  volumeUSDUntracked_lte: BigDecimal
  volumeUSDUntracked_in: [BigDecimal!]
  volumeUSDUntracked_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  txCount: BigInt
  txCount_not: BigInt
  txCount_gt: BigInt
  txCount_lt: BigInt
  txCount_gte: BigInt
  txCount_lte: BigInt
  txCount_in: [BigInt!]
  txCount_not_in: [BigInt!]
  tvlUSD: BigDecimal
  tvlUSD_not: BigDecimal
  tvlUSD_gt: BigDecimal
  tvlUSD_lt: BigDecimal
  tvlUSD_gte: BigDecimal
  tvlUSD_lte: BigDecimal
  tvlUSD_in: [BigDecimal!]
  tvlUSD_not_in: [BigDecimal!]
}

enum UniswapDayData_orderBy {
  id
  date
  volumeETH
  volumeUSD
  volumeUSDUntracked
  feesUSD
  txCount
  tvlUSD
}

type _Block_ {
  """The hash of the block"""
  hash: Bytes
  """The block number"""
  number: Int!
}

"""The type for the top-level _meta field"""
type _Meta_ {
  """
  Information about a specific subgraph block. The hash of the block
  will be null if the _meta field has a block constraint that asks for
  a block number. It will be filled if the _meta field has no block constraint
  and therefore asks for the latest  block
  
  """
  block: _Block_!
  """The deployment ID"""
  deployment: String!
  """If \`true\`, the subgraph encountered indexing errors at some past block"""
  hasIndexingErrors: Boolean!
}

enum _SubgraphErrorPolicy_ {
  """Data will be returned even if the subgraph has indexing errors"""
  allow
  """If the subgraph has indexing errors, data will be omitted. The default."""
  deny
}

`, `.graphclient/sources/UniswapV3/introspectionSchema`);

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});