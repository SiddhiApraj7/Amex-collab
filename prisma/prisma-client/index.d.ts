
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = {
  id: string
  phoneNumber: string | null
  firstName: string | null
  recoveryEmail: string | null
  lastName: string | null
  walletPin: number | null
  bankName: string | null
  bankAccountHolderName: string | null
  accountNumber: string | null
  isBeneficiary: boolean
  isPvtOrg: boolean | null
  isServiceProvider: boolean | null
  walletIdBeneficiary: string | null
  walletIdPvtOrg: string | null
  walletIdServiceProvider: string | null
  createdAt: Date
  role: Role | null
}

/**
 * Model beneficiary
 * 
 */
export type beneficiary = {
  beneficiaryId: string
}

/**
 * Model Voucher
 * 
 */
export type Voucher = {
  voucherId: string
  voucherAmount: number
  voucherCreatedAt: Date
  voucherRedeemed: boolean
  voucherRedeemedDate: Date | null
  voucherSPId: string
  voucherBeneficiaryId: string
  PvtOrgById: string
}

/**
 * Model pvtOrg
 * 
 */
export type pvtOrg = {
  privateOrgId: string
  CompanyName: string | null
  positionInCompany: string | null
}

/**
 * Model serviceProvider
 * 
 */
export type serviceProvider = {
  serviceProviderId: string
  BusinessName: string | null
  PositionInBusiness: string | null
  BusinessTag: ServiceProviderTag | null
}


/**
 * Enums
 */

export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ServiceProviderTag: {
  HOSPITALITY: 'HOSPITALITY',
  HEALTHCARE: 'HEALTHCARE',
  BUSINESS: 'BUSINESS',
  PENSION: 'PENSION',
  AGRICULTURE: 'AGRICULTURE',
  HOUSEHOLD_UTILITIES: 'HOUSEHOLD_UTILITIES',
  CHILDCARE: 'CHILDCARE',
  OTHER: 'OTHER'
};

export type ServiceProviderTag = (typeof ServiceProviderTag)[keyof typeof ServiceProviderTag]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.beneficiary`: Exposes CRUD operations for the **beneficiary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiaries
    * const beneficiaries = await prisma.beneficiary.findMany()
    * ```
    */
  get beneficiary(): Prisma.beneficiaryDelegate<GlobalReject>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<GlobalReject>;

  /**
   * `prisma.pvtOrg`: Exposes CRUD operations for the **pvtOrg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PvtOrgs
    * const pvtOrgs = await prisma.pvtOrg.findMany()
    * ```
    */
  get pvtOrg(): Prisma.pvtOrgDelegate<GlobalReject>;

  /**
   * `prisma.serviceProvider`: Exposes CRUD operations for the **serviceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceProviders
    * const serviceProviders = await prisma.serviceProvider.findMany()
    * ```
    */
  get serviceProvider(): Prisma.serviceProviderDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    beneficiary: 'beneficiary',
    Voucher: 'Voucher',
    pvtOrg: 'pvtOrg',
    serviceProvider: 'serviceProvider'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BeneficiaryCountOutputType
   */


  export type BeneficiaryCountOutputType = {
    AvailableVoucher: number
  }

  export type BeneficiaryCountOutputTypeSelect = {
    AvailableVoucher?: boolean
  }

  export type BeneficiaryCountOutputTypeGetPayload<S extends boolean | null | undefined | BeneficiaryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BeneficiaryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BeneficiaryCountOutputTypeArgs)
    ? BeneficiaryCountOutputType 
    : S extends { select: any } & (BeneficiaryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BeneficiaryCountOutputType ? BeneficiaryCountOutputType[P] : never
  } 
      : BeneficiaryCountOutputType




  // Custom InputTypes

  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BeneficiaryCountOutputType
     */
    select?: BeneficiaryCountOutputTypeSelect | null
  }



  /**
   * Count Type PvtOrgCountOutputType
   */


  export type PvtOrgCountOutputType = {
    VouchersCreated: number
  }

  export type PvtOrgCountOutputTypeSelect = {
    VouchersCreated?: boolean
  }

  export type PvtOrgCountOutputTypeGetPayload<S extends boolean | null | undefined | PvtOrgCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PvtOrgCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PvtOrgCountOutputTypeArgs)
    ? PvtOrgCountOutputType 
    : S extends { select: any } & (PvtOrgCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PvtOrgCountOutputType ? PvtOrgCountOutputType[P] : never
  } 
      : PvtOrgCountOutputType




  // Custom InputTypes

  /**
   * PvtOrgCountOutputType without action
   */
  export type PvtOrgCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PvtOrgCountOutputType
     */
    select?: PvtOrgCountOutputTypeSelect | null
  }



  /**
   * Count Type ServiceProviderCountOutputType
   */


  export type ServiceProviderCountOutputType = {
    VouchersRequested: number
  }

  export type ServiceProviderCountOutputTypeSelect = {
    VouchersRequested?: boolean
  }

  export type ServiceProviderCountOutputTypeGetPayload<S extends boolean | null | undefined | ServiceProviderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ServiceProviderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ServiceProviderCountOutputTypeArgs)
    ? ServiceProviderCountOutputType 
    : S extends { select: any } & (ServiceProviderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ServiceProviderCountOutputType ? ServiceProviderCountOutputType[P] : never
  } 
      : ServiceProviderCountOutputType




  // Custom InputTypes

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ServiceProviderCountOutputType
     */
    select?: ServiceProviderCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    walletPin: number | null
  }

  export type UsersSumAggregateOutputType = {
    walletPin: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    firstName: string | null
    recoveryEmail: string | null
    lastName: string | null
    walletPin: number | null
    bankName: string | null
    bankAccountHolderName: string | null
    accountNumber: string | null
    isBeneficiary: boolean | null
    isPvtOrg: boolean | null
    isServiceProvider: boolean | null
    walletIdBeneficiary: string | null
    walletIdPvtOrg: string | null
    walletIdServiceProvider: string | null
    createdAt: Date | null
    role: Role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    firstName: string | null
    recoveryEmail: string | null
    lastName: string | null
    walletPin: number | null
    bankName: string | null
    bankAccountHolderName: string | null
    accountNumber: string | null
    isBeneficiary: boolean | null
    isPvtOrg: boolean | null
    isServiceProvider: boolean | null
    walletIdBeneficiary: string | null
    walletIdPvtOrg: string | null
    walletIdServiceProvider: string | null
    createdAt: Date | null
    role: Role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    phoneNumber: number
    firstName: number
    recoveryEmail: number
    lastName: number
    walletPin: number
    bankName: number
    bankAccountHolderName: number
    accountNumber: number
    isBeneficiary: number
    isPvtOrg: number
    isServiceProvider: number
    walletIdBeneficiary: number
    walletIdPvtOrg: number
    walletIdServiceProvider: number
    createdAt: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    walletPin?: true
  }

  export type UsersSumAggregateInputType = {
    walletPin?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstName?: true
    recoveryEmail?: true
    lastName?: true
    walletPin?: true
    bankName?: true
    bankAccountHolderName?: true
    accountNumber?: true
    isBeneficiary?: true
    isPvtOrg?: true
    isServiceProvider?: true
    walletIdBeneficiary?: true
    walletIdPvtOrg?: true
    walletIdServiceProvider?: true
    createdAt?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstName?: true
    recoveryEmail?: true
    lastName?: true
    walletPin?: true
    bankName?: true
    bankAccountHolderName?: true
    accountNumber?: true
    isBeneficiary?: true
    isPvtOrg?: true
    isServiceProvider?: true
    walletIdBeneficiary?: true
    walletIdPvtOrg?: true
    walletIdServiceProvider?: true
    createdAt?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstName?: true
    recoveryEmail?: true
    lastName?: true
    walletPin?: true
    bankName?: true
    bankAccountHolderName?: true
    accountNumber?: true
    isBeneficiary?: true
    isPvtOrg?: true
    isServiceProvider?: true
    walletIdBeneficiary?: true
    walletIdPvtOrg?: true
    walletIdServiceProvider?: true
    createdAt?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    phoneNumber: string | null
    firstName: string | null
    recoveryEmail: string | null
    lastName: string | null
    walletPin: number | null
    bankName: string | null
    bankAccountHolderName: string | null
    accountNumber: string | null
    isBeneficiary: boolean
    isPvtOrg: boolean | null
    isServiceProvider: boolean | null
    walletIdBeneficiary: string | null
    walletIdPvtOrg: string | null
    walletIdServiceProvider: string | null
    createdAt: Date
    role: Role | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    id?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    recoveryEmail?: boolean
    lastName?: boolean
    walletPin?: boolean
    bankName?: boolean
    bankAccountHolderName?: boolean
    accountNumber?: boolean
    isBeneficiary?: boolean
    isPvtOrg?: boolean
    isServiceProvider?: boolean
    walletIdBeneficiary?: boolean
    walletIdPvtOrg?: boolean
    walletIdServiceProvider?: boolean
    createdAt?: boolean
    role?: boolean
    beneficiaryInfo?: boolean | beneficiaryArgs
    pvtOrgInfo?: boolean | pvtOrgArgs
    serviceProviderInfo?: boolean | serviceProviderArgs
  }


  export type UsersInclude = {
    beneficiaryInfo?: boolean | beneficiaryArgs
    pvtOrgInfo?: boolean | pvtOrgArgs
    serviceProviderInfo?: boolean | serviceProviderArgs
  }

  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'beneficiaryInfo' ? beneficiaryGetPayload<S['include'][P]> | null :
        P extends 'pvtOrgInfo' ? pvtOrgGetPayload<S['include'][P]> | null :
        P extends 'serviceProviderInfo' ? serviceProviderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'beneficiaryInfo' ? beneficiaryGetPayload<S['select'][P]> | null :
        P extends 'pvtOrgInfo' ? pvtOrgGetPayload<S['select'][P]> | null :
        P extends 'serviceProviderInfo' ? serviceProviderGetPayload<S['select'][P]> | null :  P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): Prisma.PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    beneficiaryInfo<T extends beneficiaryArgs= {}>(args?: Subset<T, beneficiaryArgs>): Prisma__beneficiaryClient<beneficiaryGetPayload<T> | Null>;

    pvtOrgInfo<T extends pvtOrgArgs= {}>(args?: Subset<T, pvtOrgArgs>): Prisma__pvtOrgClient<pvtOrgGetPayload<T> | Null>;

    serviceProviderInfo<T extends serviceProviderArgs= {}>(args?: Subset<T, serviceProviderArgs>): Prisma__serviceProviderClient<serviceProviderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
  }



  /**
   * Model beneficiary
   */


  export type AggregateBeneficiary = {
    _count: BeneficiaryCountAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  export type BeneficiaryMinAggregateOutputType = {
    beneficiaryId: string | null
  }

  export type BeneficiaryMaxAggregateOutputType = {
    beneficiaryId: string | null
  }

  export type BeneficiaryCountAggregateOutputType = {
    beneficiaryId: number
    _all: number
  }


  export type BeneficiaryMinAggregateInputType = {
    beneficiaryId?: true
  }

  export type BeneficiaryMaxAggregateInputType = {
    beneficiaryId?: true
  }

  export type BeneficiaryCountAggregateInputType = {
    beneficiaryId?: true
    _all?: true
  }

  export type BeneficiaryAggregateArgs = {
    /**
     * Filter which beneficiary to aggregate.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: Enumerable<beneficiaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned beneficiaries
    **/
    _count?: true | BeneficiaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiaryMaxAggregateInputType
  }

  export type GetBeneficiaryAggregateType<T extends BeneficiaryAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiary[P]>
      : GetScalarType<T[P], AggregateBeneficiary[P]>
  }




  export type BeneficiaryGroupByArgs = {
    where?: beneficiaryWhereInput
    orderBy?: Enumerable<beneficiaryOrderByWithAggregationInput>
    by: BeneficiaryScalarFieldEnum[]
    having?: beneficiaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiaryCountAggregateInputType | true
    _min?: BeneficiaryMinAggregateInputType
    _max?: BeneficiaryMaxAggregateInputType
  }


  export type BeneficiaryGroupByOutputType = {
    beneficiaryId: string
    _count: BeneficiaryCountAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  type GetBeneficiaryGroupByPayload<T extends BeneficiaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BeneficiaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
        }
      >
    >


  export type beneficiarySelect = {
    beneficiaryId?: boolean
    AvailableVoucher?: boolean | beneficiary$AvailableVoucherArgs
    Users?: boolean | UsersArgs
    _count?: boolean | BeneficiaryCountOutputTypeArgs
  }


  export type beneficiaryInclude = {
    AvailableVoucher?: boolean | beneficiary$AvailableVoucherArgs
    Users?: boolean | UsersArgs
    _count?: boolean | BeneficiaryCountOutputTypeArgs
  }

  export type beneficiaryGetPayload<S extends boolean | null | undefined | beneficiaryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? beneficiary :
    S extends undefined ? never :
    S extends { include: any } & (beneficiaryArgs | beneficiaryFindManyArgs)
    ? beneficiary  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'AvailableVoucher' ? Array < VoucherGetPayload<S['include'][P]>>  :
        P extends 'Users' ? UsersGetPayload<S['include'][P]> :
        P extends '_count' ? BeneficiaryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (beneficiaryArgs | beneficiaryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'AvailableVoucher' ? Array < VoucherGetPayload<S['select'][P]>>  :
        P extends 'Users' ? UsersGetPayload<S['select'][P]> :
        P extends '_count' ? BeneficiaryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof beneficiary ? beneficiary[P] : never
  } 
      : beneficiary


  type beneficiaryCountArgs = 
    Omit<beneficiaryFindManyArgs, 'select' | 'include'> & {
      select?: BeneficiaryCountAggregateInputType | true
    }

  export interface beneficiaryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Beneficiary that matches the filter.
     * @param {beneficiaryFindUniqueArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends beneficiaryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, beneficiaryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'beneficiary'> extends True ? Prisma__beneficiaryClient<beneficiaryGetPayload<T>> : Prisma__beneficiaryClient<beneficiaryGetPayload<T> | null, null>

    /**
     * Find one Beneficiary that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {beneficiaryFindUniqueOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends beneficiaryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, beneficiaryFindUniqueOrThrowArgs>
    ): Prisma__beneficiaryClient<beneficiaryGetPayload<T>>

    /**
     * Find the first Beneficiary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryFindFirstArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends beneficiaryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, beneficiaryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'beneficiary'> extends True ? Prisma__beneficiaryClient<beneficiaryGetPayload<T>> : Prisma__beneficiaryClient<beneficiaryGetPayload<T> | null, null>

    /**
     * Find the first Beneficiary that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryFindFirstOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends beneficiaryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, beneficiaryFindFirstOrThrowArgs>
    ): Prisma__beneficiaryClient<beneficiaryGetPayload<T>>

    /**
     * Find zero or more Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany()
     * 
     * // Get first 10 Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany({ take: 10 })
     * 
     * // Only select the `beneficiaryId`
     * const beneficiaryWithBeneficiaryIdOnly = await prisma.beneficiary.findMany({ select: { beneficiaryId: true } })
     * 
    **/
    findMany<T extends beneficiaryFindManyArgs>(
      args?: SelectSubset<T, beneficiaryFindManyArgs>
    ): Prisma.PrismaPromise<Array<beneficiaryGetPayload<T>>>

    /**
     * Create a Beneficiary.
     * @param {beneficiaryCreateArgs} args - Arguments to create a Beneficiary.
     * @example
     * // Create one Beneficiary
     * const Beneficiary = await prisma.beneficiary.create({
     *   data: {
     *     // ... data to create a Beneficiary
     *   }
     * })
     * 
    **/
    create<T extends beneficiaryCreateArgs>(
      args: SelectSubset<T, beneficiaryCreateArgs>
    ): Prisma__beneficiaryClient<beneficiaryGetPayload<T>>

    /**
     * Create many Beneficiaries.
     *     @param {beneficiaryCreateManyArgs} args - Arguments to create many Beneficiaries.
     *     @example
     *     // Create many Beneficiaries
     *     const beneficiary = await prisma.beneficiary.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends beneficiaryCreateManyArgs>(
      args?: SelectSubset<T, beneficiaryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Beneficiary.
     * @param {beneficiaryDeleteArgs} args - Arguments to delete one Beneficiary.
     * @example
     * // Delete one Beneficiary
     * const Beneficiary = await prisma.beneficiary.delete({
     *   where: {
     *     // ... filter to delete one Beneficiary
     *   }
     * })
     * 
    **/
    delete<T extends beneficiaryDeleteArgs>(
      args: SelectSubset<T, beneficiaryDeleteArgs>
    ): Prisma__beneficiaryClient<beneficiaryGetPayload<T>>

    /**
     * Update one Beneficiary.
     * @param {beneficiaryUpdateArgs} args - Arguments to update one Beneficiary.
     * @example
     * // Update one Beneficiary
     * const beneficiary = await prisma.beneficiary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends beneficiaryUpdateArgs>(
      args: SelectSubset<T, beneficiaryUpdateArgs>
    ): Prisma__beneficiaryClient<beneficiaryGetPayload<T>>

    /**
     * Delete zero or more Beneficiaries.
     * @param {beneficiaryDeleteManyArgs} args - Arguments to filter Beneficiaries to delete.
     * @example
     * // Delete a few Beneficiaries
     * const { count } = await prisma.beneficiary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends beneficiaryDeleteManyArgs>(
      args?: SelectSubset<T, beneficiaryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiaries
     * const beneficiary = await prisma.beneficiary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends beneficiaryUpdateManyArgs>(
      args: SelectSubset<T, beneficiaryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beneficiary.
     * @param {beneficiaryUpsertArgs} args - Arguments to update or create a Beneficiary.
     * @example
     * // Update or create a Beneficiary
     * const beneficiary = await prisma.beneficiary.upsert({
     *   create: {
     *     // ... data to create a Beneficiary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiary we want to update
     *   }
     * })
    **/
    upsert<T extends beneficiaryUpsertArgs>(
      args: SelectSubset<T, beneficiaryUpsertArgs>
    ): Prisma__beneficiaryClient<beneficiaryGetPayload<T>>

    /**
     * Count the number of Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryCountArgs} args - Arguments to filter Beneficiaries to count.
     * @example
     * // Count the number of Beneficiaries
     * const count = await prisma.beneficiary.count({
     *   where: {
     *     // ... the filter for the Beneficiaries we want to count
     *   }
     * })
    **/
    count<T extends beneficiaryCountArgs>(
      args?: Subset<T, beneficiaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeneficiaryAggregateArgs>(args: Subset<T, BeneficiaryAggregateArgs>): Prisma.PrismaPromise<GetBeneficiaryAggregateType<T>>

    /**
     * Group by Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BeneficiaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeneficiaryGroupByArgs['orderBy'] }
        : { orderBy?: BeneficiaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BeneficiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for beneficiary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__beneficiaryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    AvailableVoucher<T extends beneficiary$AvailableVoucherArgs= {}>(args?: Subset<T, beneficiary$AvailableVoucherArgs>): Prisma.PrismaPromise<Array<VoucherGetPayload<T>>| Null>;

    Users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * beneficiary base type for findUnique actions
   */
  export type beneficiaryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where: beneficiaryWhereUniqueInput
  }

  /**
   * beneficiary findUnique
   */
  export interface beneficiaryFindUniqueArgs extends beneficiaryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * beneficiary findUniqueOrThrow
   */
  export type beneficiaryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where: beneficiaryWhereUniqueInput
  }


  /**
   * beneficiary base type for findFirst actions
   */
  export type beneficiaryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: Enumerable<beneficiaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiaries.
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiaries.
     */
    distinct?: Enumerable<BeneficiaryScalarFieldEnum>
  }

  /**
   * beneficiary findFirst
   */
  export interface beneficiaryFindFirstArgs extends beneficiaryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * beneficiary findFirstOrThrow
   */
  export type beneficiaryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: Enumerable<beneficiaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiaries.
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiaries.
     */
    distinct?: Enumerable<BeneficiaryScalarFieldEnum>
  }


  /**
   * beneficiary findMany
   */
  export type beneficiaryFindManyArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * Filter, which beneficiaries to fetch.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: Enumerable<beneficiaryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing beneficiaries.
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    distinct?: Enumerable<BeneficiaryScalarFieldEnum>
  }


  /**
   * beneficiary create
   */
  export type beneficiaryCreateArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * The data needed to create a beneficiary.
     */
    data: XOR<beneficiaryCreateInput, beneficiaryUncheckedCreateInput>
  }


  /**
   * beneficiary createMany
   */
  export type beneficiaryCreateManyArgs = {
    /**
     * The data used to create many beneficiaries.
     */
    data: Enumerable<beneficiaryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * beneficiary update
   */
  export type beneficiaryUpdateArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * The data needed to update a beneficiary.
     */
    data: XOR<beneficiaryUpdateInput, beneficiaryUncheckedUpdateInput>
    /**
     * Choose, which beneficiary to update.
     */
    where: beneficiaryWhereUniqueInput
  }


  /**
   * beneficiary updateMany
   */
  export type beneficiaryUpdateManyArgs = {
    /**
     * The data used to update beneficiaries.
     */
    data: XOR<beneficiaryUpdateManyMutationInput, beneficiaryUncheckedUpdateManyInput>
    /**
     * Filter which beneficiaries to update
     */
    where?: beneficiaryWhereInput
  }


  /**
   * beneficiary upsert
   */
  export type beneficiaryUpsertArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * The filter to search for the beneficiary to update in case it exists.
     */
    where: beneficiaryWhereUniqueInput
    /**
     * In case the beneficiary found by the `where` argument doesn't exist, create a new beneficiary with this data.
     */
    create: XOR<beneficiaryCreateInput, beneficiaryUncheckedCreateInput>
    /**
     * In case the beneficiary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<beneficiaryUpdateInput, beneficiaryUncheckedUpdateInput>
  }


  /**
   * beneficiary delete
   */
  export type beneficiaryDeleteArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
    /**
     * Filter which beneficiary to delete.
     */
    where: beneficiaryWhereUniqueInput
  }


  /**
   * beneficiary deleteMany
   */
  export type beneficiaryDeleteManyArgs = {
    /**
     * Filter which beneficiaries to delete
     */
    where?: beneficiaryWhereInput
  }


  /**
   * beneficiary.AvailableVoucher
   */
  export type beneficiary$AvailableVoucherArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    where?: VoucherWhereInput
    orderBy?: Enumerable<VoucherOrderByWithRelationInput>
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VoucherScalarFieldEnum>
  }


  /**
   * beneficiary without action
   */
  export type beneficiaryArgs = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: beneficiaryInclude | null
  }



  /**
   * Model Voucher
   */


  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    voucherAmount: number | null
  }

  export type VoucherSumAggregateOutputType = {
    voucherAmount: number | null
  }

  export type VoucherMinAggregateOutputType = {
    voucherId: string | null
    voucherAmount: number | null
    voucherCreatedAt: Date | null
    voucherRedeemed: boolean | null
    voucherRedeemedDate: Date | null
    voucherSPId: string | null
    voucherBeneficiaryId: string | null
    PvtOrgById: string | null
  }

  export type VoucherMaxAggregateOutputType = {
    voucherId: string | null
    voucherAmount: number | null
    voucherCreatedAt: Date | null
    voucherRedeemed: boolean | null
    voucherRedeemedDate: Date | null
    voucherSPId: string | null
    voucherBeneficiaryId: string | null
    PvtOrgById: string | null
  }

  export type VoucherCountAggregateOutputType = {
    voucherId: number
    voucherAmount: number
    voucherCreatedAt: number
    voucherRedeemed: number
    voucherRedeemedDate: number
    voucherSPId: number
    voucherBeneficiaryId: number
    PvtOrgById: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    voucherAmount?: true
  }

  export type VoucherSumAggregateInputType = {
    voucherAmount?: true
  }

  export type VoucherMinAggregateInputType = {
    voucherId?: true
    voucherAmount?: true
    voucherCreatedAt?: true
    voucherRedeemed?: true
    voucherRedeemedDate?: true
    voucherSPId?: true
    voucherBeneficiaryId?: true
    PvtOrgById?: true
  }

  export type VoucherMaxAggregateInputType = {
    voucherId?: true
    voucherAmount?: true
    voucherCreatedAt?: true
    voucherRedeemed?: true
    voucherRedeemedDate?: true
    voucherSPId?: true
    voucherBeneficiaryId?: true
    PvtOrgById?: true
  }

  export type VoucherCountAggregateInputType = {
    voucherId?: true
    voucherAmount?: true
    voucherCreatedAt?: true
    voucherRedeemed?: true
    voucherRedeemedDate?: true
    voucherSPId?: true
    voucherBeneficiaryId?: true
    PvtOrgById?: true
    _all?: true
  }

  export type VoucherAggregateArgs = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: Enumerable<VoucherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs = {
    where?: VoucherWhereInput
    orderBy?: Enumerable<VoucherOrderByWithAggregationInput>
    by: VoucherScalarFieldEnum[]
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }


  export type VoucherGroupByOutputType = {
    voucherId: string
    voucherAmount: number
    voucherCreatedAt: Date
    voucherRedeemed: boolean
    voucherRedeemedDate: Date | null
    voucherSPId: string
    voucherBeneficiaryId: string
    PvtOrgById: string
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect = {
    voucherId?: boolean
    voucherAmount?: boolean
    voucherCreatedAt?: boolean
    voucherRedeemed?: boolean
    voucherRedeemedDate?: boolean
    voucherSPId?: boolean
    voucherBeneficiaryId?: boolean
    PvtOrgById?: boolean
    PvtOrgBy?: boolean | pvtOrgArgs
    BeneficiaryUser?: boolean | beneficiaryArgs
    ServiceProviderUser?: boolean | serviceProviderArgs
  }


  export type VoucherInclude = {
    PvtOrgBy?: boolean | pvtOrgArgs
    BeneficiaryUser?: boolean | beneficiaryArgs
    ServiceProviderUser?: boolean | serviceProviderArgs
  }

  export type VoucherGetPayload<S extends boolean | null | undefined | VoucherArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Voucher :
    S extends undefined ? never :
    S extends { include: any } & (VoucherArgs | VoucherFindManyArgs)
    ? Voucher  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'PvtOrgBy' ? pvtOrgGetPayload<S['include'][P]> :
        P extends 'BeneficiaryUser' ? beneficiaryGetPayload<S['include'][P]> :
        P extends 'ServiceProviderUser' ? serviceProviderGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VoucherArgs | VoucherFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'PvtOrgBy' ? pvtOrgGetPayload<S['select'][P]> :
        P extends 'BeneficiaryUser' ? beneficiaryGetPayload<S['select'][P]> :
        P extends 'ServiceProviderUser' ? serviceProviderGetPayload<S['select'][P]> :  P extends keyof Voucher ? Voucher[P] : never
  } 
      : Voucher


  type VoucherCountArgs = 
    Omit<VoucherFindManyArgs, 'select' | 'include'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VoucherFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VoucherFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Voucher'> extends True ? Prisma__VoucherClient<VoucherGetPayload<T>> : Prisma__VoucherClient<VoucherGetPayload<T> | null, null>

    /**
     * Find one Voucher that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VoucherFindUniqueOrThrowArgs>
    ): Prisma__VoucherClient<VoucherGetPayload<T>>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VoucherFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VoucherFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Voucher'> extends True ? Prisma__VoucherClient<VoucherGetPayload<T>> : Prisma__VoucherClient<VoucherGetPayload<T> | null, null>

    /**
     * Find the first Voucher that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VoucherFindFirstOrThrowArgs>
    ): Prisma__VoucherClient<VoucherGetPayload<T>>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `voucherId`
     * const voucherWithVoucherIdOnly = await prisma.voucher.findMany({ select: { voucherId: true } })
     * 
    **/
    findMany<T extends VoucherFindManyArgs>(
      args?: SelectSubset<T, VoucherFindManyArgs>
    ): Prisma.PrismaPromise<Array<VoucherGetPayload<T>>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
    **/
    create<T extends VoucherCreateArgs>(
      args: SelectSubset<T, VoucherCreateArgs>
    ): Prisma__VoucherClient<VoucherGetPayload<T>>

    /**
     * Create many Vouchers.
     *     @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     *     @example
     *     // Create many Vouchers
     *     const voucher = await prisma.voucher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VoucherCreateManyArgs>(
      args?: SelectSubset<T, VoucherCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
    **/
    delete<T extends VoucherDeleteArgs>(
      args: SelectSubset<T, VoucherDeleteArgs>
    ): Prisma__VoucherClient<VoucherGetPayload<T>>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VoucherUpdateArgs>(
      args: SelectSubset<T, VoucherUpdateArgs>
    ): Prisma__VoucherClient<VoucherGetPayload<T>>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VoucherDeleteManyArgs>(
      args?: SelectSubset<T, VoucherDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VoucherUpdateManyArgs>(
      args: SelectSubset<T, VoucherUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
    **/
    upsert<T extends VoucherUpsertArgs>(
      args: SelectSubset<T, VoucherUpsertArgs>
    ): Prisma__VoucherClient<VoucherGetPayload<T>>

    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VoucherClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    PvtOrgBy<T extends pvtOrgArgs= {}>(args?: Subset<T, pvtOrgArgs>): Prisma__pvtOrgClient<pvtOrgGetPayload<T> | Null>;

    BeneficiaryUser<T extends beneficiaryArgs= {}>(args?: Subset<T, beneficiaryArgs>): Prisma__beneficiaryClient<beneficiaryGetPayload<T> | Null>;

    ServiceProviderUser<T extends serviceProviderArgs= {}>(args?: Subset<T, serviceProviderArgs>): Prisma__serviceProviderClient<serviceProviderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Voucher base type for findUnique actions
   */
  export type VoucherFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUnique
   */
  export interface VoucherFindUniqueArgs extends VoucherFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }


  /**
   * Voucher base type for findFirst actions
   */
  export type VoucherFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: Enumerable<VoucherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: Enumerable<VoucherScalarFieldEnum>
  }

  /**
   * Voucher findFirst
   */
  export interface VoucherFindFirstArgs extends VoucherFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: Enumerable<VoucherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: Enumerable<VoucherScalarFieldEnum>
  }


  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: Enumerable<VoucherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: Enumerable<VoucherScalarFieldEnum>
  }


  /**
   * Voucher create
   */
  export type VoucherCreateArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }


  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs = {
    /**
     * The data used to create many Vouchers.
     */
    data: Enumerable<VoucherCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Voucher update
   */
  export type VoucherUpdateArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }


  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
  }


  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }


  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }


  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
  }


  /**
   * Voucher without action
   */
  export type VoucherArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
  }



  /**
   * Model pvtOrg
   */


  export type AggregatePvtOrg = {
    _count: PvtOrgCountAggregateOutputType | null
    _min: PvtOrgMinAggregateOutputType | null
    _max: PvtOrgMaxAggregateOutputType | null
  }

  export type PvtOrgMinAggregateOutputType = {
    privateOrgId: string | null
    CompanyName: string | null
    positionInCompany: string | null
  }

  export type PvtOrgMaxAggregateOutputType = {
    privateOrgId: string | null
    CompanyName: string | null
    positionInCompany: string | null
  }

  export type PvtOrgCountAggregateOutputType = {
    privateOrgId: number
    CompanyName: number
    positionInCompany: number
    _all: number
  }


  export type PvtOrgMinAggregateInputType = {
    privateOrgId?: true
    CompanyName?: true
    positionInCompany?: true
  }

  export type PvtOrgMaxAggregateInputType = {
    privateOrgId?: true
    CompanyName?: true
    positionInCompany?: true
  }

  export type PvtOrgCountAggregateInputType = {
    privateOrgId?: true
    CompanyName?: true
    positionInCompany?: true
    _all?: true
  }

  export type PvtOrgAggregateArgs = {
    /**
     * Filter which pvtOrg to aggregate.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: Enumerable<pvtOrgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pvtOrgs
    **/
    _count?: true | PvtOrgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PvtOrgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PvtOrgMaxAggregateInputType
  }

  export type GetPvtOrgAggregateType<T extends PvtOrgAggregateArgs> = {
        [P in keyof T & keyof AggregatePvtOrg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePvtOrg[P]>
      : GetScalarType<T[P], AggregatePvtOrg[P]>
  }




  export type PvtOrgGroupByArgs = {
    where?: pvtOrgWhereInput
    orderBy?: Enumerable<pvtOrgOrderByWithAggregationInput>
    by: PvtOrgScalarFieldEnum[]
    having?: pvtOrgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PvtOrgCountAggregateInputType | true
    _min?: PvtOrgMinAggregateInputType
    _max?: PvtOrgMaxAggregateInputType
  }


  export type PvtOrgGroupByOutputType = {
    privateOrgId: string
    CompanyName: string | null
    positionInCompany: string | null
    _count: PvtOrgCountAggregateOutputType | null
    _min: PvtOrgMinAggregateOutputType | null
    _max: PvtOrgMaxAggregateOutputType | null
  }

  type GetPvtOrgGroupByPayload<T extends PvtOrgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PvtOrgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PvtOrgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PvtOrgGroupByOutputType[P]>
            : GetScalarType<T[P], PvtOrgGroupByOutputType[P]>
        }
      >
    >


  export type pvtOrgSelect = {
    privateOrgId?: boolean
    CompanyName?: boolean
    positionInCompany?: boolean
    VouchersCreated?: boolean | pvtOrg$VouchersCreatedArgs
    Users?: boolean | UsersArgs
    _count?: boolean | PvtOrgCountOutputTypeArgs
  }


  export type pvtOrgInclude = {
    VouchersCreated?: boolean | pvtOrg$VouchersCreatedArgs
    Users?: boolean | UsersArgs
    _count?: boolean | PvtOrgCountOutputTypeArgs
  }

  export type pvtOrgGetPayload<S extends boolean | null | undefined | pvtOrgArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? pvtOrg :
    S extends undefined ? never :
    S extends { include: any } & (pvtOrgArgs | pvtOrgFindManyArgs)
    ? pvtOrg  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'VouchersCreated' ? Array < VoucherGetPayload<S['include'][P]>>  :
        P extends 'Users' ? UsersGetPayload<S['include'][P]> :
        P extends '_count' ? PvtOrgCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (pvtOrgArgs | pvtOrgFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'VouchersCreated' ? Array < VoucherGetPayload<S['select'][P]>>  :
        P extends 'Users' ? UsersGetPayload<S['select'][P]> :
        P extends '_count' ? PvtOrgCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof pvtOrg ? pvtOrg[P] : never
  } 
      : pvtOrg


  type pvtOrgCountArgs = 
    Omit<pvtOrgFindManyArgs, 'select' | 'include'> & {
      select?: PvtOrgCountAggregateInputType | true
    }

  export interface pvtOrgDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PvtOrg that matches the filter.
     * @param {pvtOrgFindUniqueArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pvtOrgFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pvtOrgFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pvtOrg'> extends True ? Prisma__pvtOrgClient<pvtOrgGetPayload<T>> : Prisma__pvtOrgClient<pvtOrgGetPayload<T> | null, null>

    /**
     * Find one PvtOrg that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pvtOrgFindUniqueOrThrowArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pvtOrgFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, pvtOrgFindUniqueOrThrowArgs>
    ): Prisma__pvtOrgClient<pvtOrgGetPayload<T>>

    /**
     * Find the first PvtOrg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgFindFirstArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pvtOrgFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pvtOrgFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pvtOrg'> extends True ? Prisma__pvtOrgClient<pvtOrgGetPayload<T>> : Prisma__pvtOrgClient<pvtOrgGetPayload<T> | null, null>

    /**
     * Find the first PvtOrg that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgFindFirstOrThrowArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pvtOrgFindFirstOrThrowArgs>(
      args?: SelectSubset<T, pvtOrgFindFirstOrThrowArgs>
    ): Prisma__pvtOrgClient<pvtOrgGetPayload<T>>

    /**
     * Find zero or more PvtOrgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PvtOrgs
     * const pvtOrgs = await prisma.pvtOrg.findMany()
     * 
     * // Get first 10 PvtOrgs
     * const pvtOrgs = await prisma.pvtOrg.findMany({ take: 10 })
     * 
     * // Only select the `privateOrgId`
     * const pvtOrgWithPrivateOrgIdOnly = await prisma.pvtOrg.findMany({ select: { privateOrgId: true } })
     * 
    **/
    findMany<T extends pvtOrgFindManyArgs>(
      args?: SelectSubset<T, pvtOrgFindManyArgs>
    ): Prisma.PrismaPromise<Array<pvtOrgGetPayload<T>>>

    /**
     * Create a PvtOrg.
     * @param {pvtOrgCreateArgs} args - Arguments to create a PvtOrg.
     * @example
     * // Create one PvtOrg
     * const PvtOrg = await prisma.pvtOrg.create({
     *   data: {
     *     // ... data to create a PvtOrg
     *   }
     * })
     * 
    **/
    create<T extends pvtOrgCreateArgs>(
      args: SelectSubset<T, pvtOrgCreateArgs>
    ): Prisma__pvtOrgClient<pvtOrgGetPayload<T>>

    /**
     * Create many PvtOrgs.
     *     @param {pvtOrgCreateManyArgs} args - Arguments to create many PvtOrgs.
     *     @example
     *     // Create many PvtOrgs
     *     const pvtOrg = await prisma.pvtOrg.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pvtOrgCreateManyArgs>(
      args?: SelectSubset<T, pvtOrgCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PvtOrg.
     * @param {pvtOrgDeleteArgs} args - Arguments to delete one PvtOrg.
     * @example
     * // Delete one PvtOrg
     * const PvtOrg = await prisma.pvtOrg.delete({
     *   where: {
     *     // ... filter to delete one PvtOrg
     *   }
     * })
     * 
    **/
    delete<T extends pvtOrgDeleteArgs>(
      args: SelectSubset<T, pvtOrgDeleteArgs>
    ): Prisma__pvtOrgClient<pvtOrgGetPayload<T>>

    /**
     * Update one PvtOrg.
     * @param {pvtOrgUpdateArgs} args - Arguments to update one PvtOrg.
     * @example
     * // Update one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pvtOrgUpdateArgs>(
      args: SelectSubset<T, pvtOrgUpdateArgs>
    ): Prisma__pvtOrgClient<pvtOrgGetPayload<T>>

    /**
     * Delete zero or more PvtOrgs.
     * @param {pvtOrgDeleteManyArgs} args - Arguments to filter PvtOrgs to delete.
     * @example
     * // Delete a few PvtOrgs
     * const { count } = await prisma.pvtOrg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pvtOrgDeleteManyArgs>(
      args?: SelectSubset<T, pvtOrgDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PvtOrgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PvtOrgs
     * const pvtOrg = await prisma.pvtOrg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pvtOrgUpdateManyArgs>(
      args: SelectSubset<T, pvtOrgUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PvtOrg.
     * @param {pvtOrgUpsertArgs} args - Arguments to update or create a PvtOrg.
     * @example
     * // Update or create a PvtOrg
     * const pvtOrg = await prisma.pvtOrg.upsert({
     *   create: {
     *     // ... data to create a PvtOrg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PvtOrg we want to update
     *   }
     * })
    **/
    upsert<T extends pvtOrgUpsertArgs>(
      args: SelectSubset<T, pvtOrgUpsertArgs>
    ): Prisma__pvtOrgClient<pvtOrgGetPayload<T>>

    /**
     * Count the number of PvtOrgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgCountArgs} args - Arguments to filter PvtOrgs to count.
     * @example
     * // Count the number of PvtOrgs
     * const count = await prisma.pvtOrg.count({
     *   where: {
     *     // ... the filter for the PvtOrgs we want to count
     *   }
     * })
    **/
    count<T extends pvtOrgCountArgs>(
      args?: Subset<T, pvtOrgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PvtOrgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PvtOrg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PvtOrgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PvtOrgAggregateArgs>(args: Subset<T, PvtOrgAggregateArgs>): Prisma.PrismaPromise<GetPvtOrgAggregateType<T>>

    /**
     * Group by PvtOrg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PvtOrgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PvtOrgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PvtOrgGroupByArgs['orderBy'] }
        : { orderBy?: PvtOrgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PvtOrgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPvtOrgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for pvtOrg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pvtOrgClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    VouchersCreated<T extends pvtOrg$VouchersCreatedArgs= {}>(args?: Subset<T, pvtOrg$VouchersCreatedArgs>): Prisma.PrismaPromise<Array<VoucherGetPayload<T>>| Null>;

    Users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * pvtOrg base type for findUnique actions
   */
  export type pvtOrgFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where: pvtOrgWhereUniqueInput
  }

  /**
   * pvtOrg findUnique
   */
  export interface pvtOrgFindUniqueArgs extends pvtOrgFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pvtOrg findUniqueOrThrow
   */
  export type pvtOrgFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where: pvtOrgWhereUniqueInput
  }


  /**
   * pvtOrg base type for findFirst actions
   */
  export type pvtOrgFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: Enumerable<pvtOrgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pvtOrgs.
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pvtOrgs.
     */
    distinct?: Enumerable<PvtOrgScalarFieldEnum>
  }

  /**
   * pvtOrg findFirst
   */
  export interface pvtOrgFindFirstArgs extends pvtOrgFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pvtOrg findFirstOrThrow
   */
  export type pvtOrgFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: Enumerable<pvtOrgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pvtOrgs.
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pvtOrgs.
     */
    distinct?: Enumerable<PvtOrgScalarFieldEnum>
  }


  /**
   * pvtOrg findMany
   */
  export type pvtOrgFindManyArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * Filter, which pvtOrgs to fetch.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: Enumerable<pvtOrgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pvtOrgs.
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    distinct?: Enumerable<PvtOrgScalarFieldEnum>
  }


  /**
   * pvtOrg create
   */
  export type pvtOrgCreateArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * The data needed to create a pvtOrg.
     */
    data: XOR<pvtOrgCreateInput, pvtOrgUncheckedCreateInput>
  }


  /**
   * pvtOrg createMany
   */
  export type pvtOrgCreateManyArgs = {
    /**
     * The data used to create many pvtOrgs.
     */
    data: Enumerable<pvtOrgCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * pvtOrg update
   */
  export type pvtOrgUpdateArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * The data needed to update a pvtOrg.
     */
    data: XOR<pvtOrgUpdateInput, pvtOrgUncheckedUpdateInput>
    /**
     * Choose, which pvtOrg to update.
     */
    where: pvtOrgWhereUniqueInput
  }


  /**
   * pvtOrg updateMany
   */
  export type pvtOrgUpdateManyArgs = {
    /**
     * The data used to update pvtOrgs.
     */
    data: XOR<pvtOrgUpdateManyMutationInput, pvtOrgUncheckedUpdateManyInput>
    /**
     * Filter which pvtOrgs to update
     */
    where?: pvtOrgWhereInput
  }


  /**
   * pvtOrg upsert
   */
  export type pvtOrgUpsertArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * The filter to search for the pvtOrg to update in case it exists.
     */
    where: pvtOrgWhereUniqueInput
    /**
     * In case the pvtOrg found by the `where` argument doesn't exist, create a new pvtOrg with this data.
     */
    create: XOR<pvtOrgCreateInput, pvtOrgUncheckedCreateInput>
    /**
     * In case the pvtOrg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pvtOrgUpdateInput, pvtOrgUncheckedUpdateInput>
  }


  /**
   * pvtOrg delete
   */
  export type pvtOrgDeleteArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
    /**
     * Filter which pvtOrg to delete.
     */
    where: pvtOrgWhereUniqueInput
  }


  /**
   * pvtOrg deleteMany
   */
  export type pvtOrgDeleteManyArgs = {
    /**
     * Filter which pvtOrgs to delete
     */
    where?: pvtOrgWhereInput
  }


  /**
   * pvtOrg.VouchersCreated
   */
  export type pvtOrg$VouchersCreatedArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    where?: VoucherWhereInput
    orderBy?: Enumerable<VoucherOrderByWithRelationInput>
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VoucherScalarFieldEnum>
  }


  /**
   * pvtOrg without action
   */
  export type pvtOrgArgs = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pvtOrgInclude | null
  }



  /**
   * Model serviceProvider
   */


  export type AggregateServiceProvider = {
    _count: ServiceProviderCountAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  export type ServiceProviderMinAggregateOutputType = {
    serviceProviderId: string | null
    BusinessName: string | null
    PositionInBusiness: string | null
    BusinessTag: ServiceProviderTag | null
  }

  export type ServiceProviderMaxAggregateOutputType = {
    serviceProviderId: string | null
    BusinessName: string | null
    PositionInBusiness: string | null
    BusinessTag: ServiceProviderTag | null
  }

  export type ServiceProviderCountAggregateOutputType = {
    serviceProviderId: number
    BusinessName: number
    PositionInBusiness: number
    BusinessTag: number
    _all: number
  }


  export type ServiceProviderMinAggregateInputType = {
    serviceProviderId?: true
    BusinessName?: true
    PositionInBusiness?: true
    BusinessTag?: true
  }

  export type ServiceProviderMaxAggregateInputType = {
    serviceProviderId?: true
    BusinessName?: true
    PositionInBusiness?: true
    BusinessTag?: true
  }

  export type ServiceProviderCountAggregateInputType = {
    serviceProviderId?: true
    BusinessName?: true
    PositionInBusiness?: true
    BusinessTag?: true
    _all?: true
  }

  export type ServiceProviderAggregateArgs = {
    /**
     * Filter which serviceProvider to aggregate.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: Enumerable<serviceProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned serviceProviders
    **/
    _count?: true | ServiceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type GetServiceProviderAggregateType<T extends ServiceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceProvider[P]>
      : GetScalarType<T[P], AggregateServiceProvider[P]>
  }




  export type ServiceProviderGroupByArgs = {
    where?: serviceProviderWhereInput
    orderBy?: Enumerable<serviceProviderOrderByWithAggregationInput>
    by: ServiceProviderScalarFieldEnum[]
    having?: serviceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceProviderCountAggregateInputType | true
    _min?: ServiceProviderMinAggregateInputType
    _max?: ServiceProviderMaxAggregateInputType
  }


  export type ServiceProviderGroupByOutputType = {
    serviceProviderId: string
    BusinessName: string | null
    PositionInBusiness: string | null
    BusinessTag: ServiceProviderTag | null
    _count: ServiceProviderCountAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  type GetServiceProviderGroupByPayload<T extends ServiceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServiceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
        }
      >
    >


  export type serviceProviderSelect = {
    serviceProviderId?: boolean
    BusinessName?: boolean
    PositionInBusiness?: boolean
    BusinessTag?: boolean
    VouchersRequested?: boolean | serviceProvider$VouchersRequestedArgs
    Users?: boolean | UsersArgs
    _count?: boolean | ServiceProviderCountOutputTypeArgs
  }


  export type serviceProviderInclude = {
    VouchersRequested?: boolean | serviceProvider$VouchersRequestedArgs
    Users?: boolean | UsersArgs
    _count?: boolean | ServiceProviderCountOutputTypeArgs
  }

  export type serviceProviderGetPayload<S extends boolean | null | undefined | serviceProviderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? serviceProvider :
    S extends undefined ? never :
    S extends { include: any } & (serviceProviderArgs | serviceProviderFindManyArgs)
    ? serviceProvider  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'VouchersRequested' ? Array < VoucherGetPayload<S['include'][P]>>  :
        P extends 'Users' ? UsersGetPayload<S['include'][P]> :
        P extends '_count' ? ServiceProviderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (serviceProviderArgs | serviceProviderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'VouchersRequested' ? Array < VoucherGetPayload<S['select'][P]>>  :
        P extends 'Users' ? UsersGetPayload<S['select'][P]> :
        P extends '_count' ? ServiceProviderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof serviceProvider ? serviceProvider[P] : never
  } 
      : serviceProvider


  type serviceProviderCountArgs = 
    Omit<serviceProviderFindManyArgs, 'select' | 'include'> & {
      select?: ServiceProviderCountAggregateInputType | true
    }

  export interface serviceProviderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ServiceProvider that matches the filter.
     * @param {serviceProviderFindUniqueArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends serviceProviderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, serviceProviderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'serviceProvider'> extends True ? Prisma__serviceProviderClient<serviceProviderGetPayload<T>> : Prisma__serviceProviderClient<serviceProviderGetPayload<T> | null, null>

    /**
     * Find one ServiceProvider that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {serviceProviderFindUniqueOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends serviceProviderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, serviceProviderFindUniqueOrThrowArgs>
    ): Prisma__serviceProviderClient<serviceProviderGetPayload<T>>

    /**
     * Find the first ServiceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderFindFirstArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends serviceProviderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, serviceProviderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'serviceProvider'> extends True ? Prisma__serviceProviderClient<serviceProviderGetPayload<T>> : Prisma__serviceProviderClient<serviceProviderGetPayload<T> | null, null>

    /**
     * Find the first ServiceProvider that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderFindFirstOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends serviceProviderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, serviceProviderFindFirstOrThrowArgs>
    ): Prisma__serviceProviderClient<serviceProviderGetPayload<T>>

    /**
     * Find zero or more ServiceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany()
     * 
     * // Get first 10 ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany({ take: 10 })
     * 
     * // Only select the `serviceProviderId`
     * const serviceProviderWithServiceProviderIdOnly = await prisma.serviceProvider.findMany({ select: { serviceProviderId: true } })
     * 
    **/
    findMany<T extends serviceProviderFindManyArgs>(
      args?: SelectSubset<T, serviceProviderFindManyArgs>
    ): Prisma.PrismaPromise<Array<serviceProviderGetPayload<T>>>

    /**
     * Create a ServiceProvider.
     * @param {serviceProviderCreateArgs} args - Arguments to create a ServiceProvider.
     * @example
     * // Create one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.create({
     *   data: {
     *     // ... data to create a ServiceProvider
     *   }
     * })
     * 
    **/
    create<T extends serviceProviderCreateArgs>(
      args: SelectSubset<T, serviceProviderCreateArgs>
    ): Prisma__serviceProviderClient<serviceProviderGetPayload<T>>

    /**
     * Create many ServiceProviders.
     *     @param {serviceProviderCreateManyArgs} args - Arguments to create many ServiceProviders.
     *     @example
     *     // Create many ServiceProviders
     *     const serviceProvider = await prisma.serviceProvider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends serviceProviderCreateManyArgs>(
      args?: SelectSubset<T, serviceProviderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceProvider.
     * @param {serviceProviderDeleteArgs} args - Arguments to delete one ServiceProvider.
     * @example
     * // Delete one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.delete({
     *   where: {
     *     // ... filter to delete one ServiceProvider
     *   }
     * })
     * 
    **/
    delete<T extends serviceProviderDeleteArgs>(
      args: SelectSubset<T, serviceProviderDeleteArgs>
    ): Prisma__serviceProviderClient<serviceProviderGetPayload<T>>

    /**
     * Update one ServiceProvider.
     * @param {serviceProviderUpdateArgs} args - Arguments to update one ServiceProvider.
     * @example
     * // Update one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends serviceProviderUpdateArgs>(
      args: SelectSubset<T, serviceProviderUpdateArgs>
    ): Prisma__serviceProviderClient<serviceProviderGetPayload<T>>

    /**
     * Delete zero or more ServiceProviders.
     * @param {serviceProviderDeleteManyArgs} args - Arguments to filter ServiceProviders to delete.
     * @example
     * // Delete a few ServiceProviders
     * const { count } = await prisma.serviceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends serviceProviderDeleteManyArgs>(
      args?: SelectSubset<T, serviceProviderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends serviceProviderUpdateManyArgs>(
      args: SelectSubset<T, serviceProviderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceProvider.
     * @param {serviceProviderUpsertArgs} args - Arguments to update or create a ServiceProvider.
     * @example
     * // Update or create a ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.upsert({
     *   create: {
     *     // ... data to create a ServiceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceProvider we want to update
     *   }
     * })
    **/
    upsert<T extends serviceProviderUpsertArgs>(
      args: SelectSubset<T, serviceProviderUpsertArgs>
    ): Prisma__serviceProviderClient<serviceProviderGetPayload<T>>

    /**
     * Count the number of ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderCountArgs} args - Arguments to filter ServiceProviders to count.
     * @example
     * // Count the number of ServiceProviders
     * const count = await prisma.serviceProvider.count({
     *   where: {
     *     // ... the filter for the ServiceProviders we want to count
     *   }
     * })
    **/
    count<T extends serviceProviderCountArgs>(
      args?: Subset<T, serviceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceProviderAggregateArgs>(args: Subset<T, ServiceProviderAggregateArgs>): Prisma.PrismaPromise<GetServiceProviderAggregateType<T>>

    /**
     * Group by ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceProviderGroupByArgs['orderBy'] }
        : { orderBy?: ServiceProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for serviceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__serviceProviderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    VouchersRequested<T extends serviceProvider$VouchersRequestedArgs= {}>(args?: Subset<T, serviceProvider$VouchersRequestedArgs>): Prisma.PrismaPromise<Array<VoucherGetPayload<T>>| Null>;

    Users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * serviceProvider base type for findUnique actions
   */
  export type serviceProviderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where: serviceProviderWhereUniqueInput
  }

  /**
   * serviceProvider findUnique
   */
  export interface serviceProviderFindUniqueArgs extends serviceProviderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * serviceProvider findUniqueOrThrow
   */
  export type serviceProviderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where: serviceProviderWhereUniqueInput
  }


  /**
   * serviceProvider base type for findFirst actions
   */
  export type serviceProviderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: Enumerable<serviceProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for serviceProviders.
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of serviceProviders.
     */
    distinct?: Enumerable<ServiceProviderScalarFieldEnum>
  }

  /**
   * serviceProvider findFirst
   */
  export interface serviceProviderFindFirstArgs extends serviceProviderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * serviceProvider findFirstOrThrow
   */
  export type serviceProviderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: Enumerable<serviceProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for serviceProviders.
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of serviceProviders.
     */
    distinct?: Enumerable<ServiceProviderScalarFieldEnum>
  }


  /**
   * serviceProvider findMany
   */
  export type serviceProviderFindManyArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * Filter, which serviceProviders to fetch.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: Enumerable<serviceProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing serviceProviders.
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    distinct?: Enumerable<ServiceProviderScalarFieldEnum>
  }


  /**
   * serviceProvider create
   */
  export type serviceProviderCreateArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * The data needed to create a serviceProvider.
     */
    data: XOR<serviceProviderCreateInput, serviceProviderUncheckedCreateInput>
  }


  /**
   * serviceProvider createMany
   */
  export type serviceProviderCreateManyArgs = {
    /**
     * The data used to create many serviceProviders.
     */
    data: Enumerable<serviceProviderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * serviceProvider update
   */
  export type serviceProviderUpdateArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * The data needed to update a serviceProvider.
     */
    data: XOR<serviceProviderUpdateInput, serviceProviderUncheckedUpdateInput>
    /**
     * Choose, which serviceProvider to update.
     */
    where: serviceProviderWhereUniqueInput
  }


  /**
   * serviceProvider updateMany
   */
  export type serviceProviderUpdateManyArgs = {
    /**
     * The data used to update serviceProviders.
     */
    data: XOR<serviceProviderUpdateManyMutationInput, serviceProviderUncheckedUpdateManyInput>
    /**
     * Filter which serviceProviders to update
     */
    where?: serviceProviderWhereInput
  }


  /**
   * serviceProvider upsert
   */
  export type serviceProviderUpsertArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * The filter to search for the serviceProvider to update in case it exists.
     */
    where: serviceProviderWhereUniqueInput
    /**
     * In case the serviceProvider found by the `where` argument doesn't exist, create a new serviceProvider with this data.
     */
    create: XOR<serviceProviderCreateInput, serviceProviderUncheckedCreateInput>
    /**
     * In case the serviceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceProviderUpdateInput, serviceProviderUncheckedUpdateInput>
  }


  /**
   * serviceProvider delete
   */
  export type serviceProviderDeleteArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
    /**
     * Filter which serviceProvider to delete.
     */
    where: serviceProviderWhereUniqueInput
  }


  /**
   * serviceProvider deleteMany
   */
  export type serviceProviderDeleteManyArgs = {
    /**
     * Filter which serviceProviders to delete
     */
    where?: serviceProviderWhereInput
  }


  /**
   * serviceProvider.VouchersRequested
   */
  export type serviceProvider$VouchersRequestedArgs = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoucherInclude | null
    where?: VoucherWhereInput
    orderBy?: Enumerable<VoucherOrderByWithRelationInput>
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VoucherScalarFieldEnum>
  }


  /**
   * serviceProvider without action
   */
  export type serviceProviderArgs = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceProviderInclude | null
  }



  /**
   * Enums
   */

  export const BeneficiaryScalarFieldEnum: {
    beneficiaryId: 'beneficiaryId'
  };

  export type BeneficiaryScalarFieldEnum = (typeof BeneficiaryScalarFieldEnum)[keyof typeof BeneficiaryScalarFieldEnum]


  export const PvtOrgScalarFieldEnum: {
    privateOrgId: 'privateOrgId',
    CompanyName: 'CompanyName',
    positionInCompany: 'positionInCompany'
  };

  export type PvtOrgScalarFieldEnum = (typeof PvtOrgScalarFieldEnum)[keyof typeof PvtOrgScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServiceProviderScalarFieldEnum: {
    serviceProviderId: 'serviceProviderId',
    BusinessName: 'BusinessName',
    PositionInBusiness: 'PositionInBusiness',
    BusinessTag: 'BusinessTag'
  };

  export type ServiceProviderScalarFieldEnum = (typeof ServiceProviderScalarFieldEnum)[keyof typeof ServiceProviderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    firstName: 'firstName',
    recoveryEmail: 'recoveryEmail',
    lastName: 'lastName',
    walletPin: 'walletPin',
    bankName: 'bankName',
    bankAccountHolderName: 'bankAccountHolderName',
    accountNumber: 'accountNumber',
    isBeneficiary: 'isBeneficiary',
    isPvtOrg: 'isPvtOrg',
    isServiceProvider: 'isServiceProvider',
    walletIdBeneficiary: 'walletIdBeneficiary',
    walletIdPvtOrg: 'walletIdPvtOrg',
    walletIdServiceProvider: 'walletIdServiceProvider',
    createdAt: 'createdAt',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    voucherId: 'voucherId',
    voucherAmount: 'voucherAmount',
    voucherCreatedAt: 'voucherCreatedAt',
    voucherRedeemed: 'voucherRedeemed',
    voucherRedeemedDate: 'voucherRedeemedDate',
    voucherSPId: 'voucherSPId',
    voucherBeneficiaryId: 'voucherBeneficiaryId',
    PvtOrgById: 'PvtOrgById'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: StringFilter | string
    phoneNumber?: StringNullableFilter | string | null
    firstName?: StringNullableFilter | string | null
    recoveryEmail?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    walletPin?: IntNullableFilter | number | null
    bankName?: StringNullableFilter | string | null
    bankAccountHolderName?: StringNullableFilter | string | null
    accountNumber?: StringNullableFilter | string | null
    isBeneficiary?: BoolFilter | boolean
    isPvtOrg?: BoolNullableFilter | boolean | null
    isServiceProvider?: BoolNullableFilter | boolean | null
    walletIdBeneficiary?: StringNullableFilter | string | null
    walletIdPvtOrg?: StringNullableFilter | string | null
    walletIdServiceProvider?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    role?: EnumRoleNullableFilter | Role | null
    beneficiaryInfo?: XOR<BeneficiaryRelationFilter, beneficiaryWhereInput> | null
    pvtOrgInfo?: XOR<PvtOrgRelationFilter, pvtOrgWhereInput> | null
    serviceProviderInfo?: XOR<ServiceProviderRelationFilter, serviceProviderWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    beneficiaryInfo?: beneficiaryOrderByWithRelationInput
    pvtOrgInfo?: pvtOrgOrderByWithRelationInput
    serviceProviderInfo?: serviceProviderOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = {
    id?: string
    phoneNumber?: string
    recoveryEmail?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    phoneNumber?: StringNullableWithAggregatesFilter | string | null
    firstName?: StringNullableWithAggregatesFilter | string | null
    recoveryEmail?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    walletPin?: IntNullableWithAggregatesFilter | number | null
    bankName?: StringNullableWithAggregatesFilter | string | null
    bankAccountHolderName?: StringNullableWithAggregatesFilter | string | null
    accountNumber?: StringNullableWithAggregatesFilter | string | null
    isBeneficiary?: BoolWithAggregatesFilter | boolean
    isPvtOrg?: BoolNullableWithAggregatesFilter | boolean | null
    isServiceProvider?: BoolNullableWithAggregatesFilter | boolean | null
    walletIdBeneficiary?: StringNullableWithAggregatesFilter | string | null
    walletIdPvtOrg?: StringNullableWithAggregatesFilter | string | null
    walletIdServiceProvider?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    role?: EnumRoleNullableWithAggregatesFilter | Role | null
  }

  export type beneficiaryWhereInput = {
    AND?: Enumerable<beneficiaryWhereInput>
    OR?: Enumerable<beneficiaryWhereInput>
    NOT?: Enumerable<beneficiaryWhereInput>
    beneficiaryId?: StringFilter | string
    AvailableVoucher?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type beneficiaryOrderByWithRelationInput = {
    beneficiaryId?: SortOrder
    AvailableVoucher?: VoucherOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
  }

  export type beneficiaryWhereUniqueInput = {
    beneficiaryId?: string
  }

  export type beneficiaryOrderByWithAggregationInput = {
    beneficiaryId?: SortOrder
    _count?: beneficiaryCountOrderByAggregateInput
    _max?: beneficiaryMaxOrderByAggregateInput
    _min?: beneficiaryMinOrderByAggregateInput
  }

  export type beneficiaryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<beneficiaryScalarWhereWithAggregatesInput>
    OR?: Enumerable<beneficiaryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<beneficiaryScalarWhereWithAggregatesInput>
    beneficiaryId?: StringWithAggregatesFilter | string
  }

  export type VoucherWhereInput = {
    AND?: Enumerable<VoucherWhereInput>
    OR?: Enumerable<VoucherWhereInput>
    NOT?: Enumerable<VoucherWhereInput>
    voucherId?: StringFilter | string
    voucherAmount?: IntFilter | number
    voucherCreatedAt?: DateTimeFilter | Date | string
    voucherRedeemed?: BoolFilter | boolean
    voucherRedeemedDate?: DateTimeNullableFilter | Date | string | null
    voucherSPId?: StringFilter | string
    voucherBeneficiaryId?: StringFilter | string
    PvtOrgById?: StringFilter | string
    PvtOrgBy?: XOR<PvtOrgRelationFilter, pvtOrgWhereInput>
    BeneficiaryUser?: XOR<BeneficiaryRelationFilter, beneficiaryWhereInput>
    ServiceProviderUser?: XOR<ServiceProviderRelationFilter, serviceProviderWhereInput>
  }

  export type VoucherOrderByWithRelationInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
    PvtOrgBy?: pvtOrgOrderByWithRelationInput
    BeneficiaryUser?: beneficiaryOrderByWithRelationInput
    ServiceProviderUser?: serviceProviderOrderByWithRelationInput
  }

  export type VoucherWhereUniqueInput = {
    voucherId?: string
  }

  export type VoucherOrderByWithAggregationInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VoucherScalarWhereWithAggregatesInput>
    OR?: Enumerable<VoucherScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VoucherScalarWhereWithAggregatesInput>
    voucherId?: StringWithAggregatesFilter | string
    voucherAmount?: IntWithAggregatesFilter | number
    voucherCreatedAt?: DateTimeWithAggregatesFilter | Date | string
    voucherRedeemed?: BoolWithAggregatesFilter | boolean
    voucherRedeemedDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    voucherSPId?: StringWithAggregatesFilter | string
    voucherBeneficiaryId?: StringWithAggregatesFilter | string
    PvtOrgById?: StringWithAggregatesFilter | string
  }

  export type pvtOrgWhereInput = {
    AND?: Enumerable<pvtOrgWhereInput>
    OR?: Enumerable<pvtOrgWhereInput>
    NOT?: Enumerable<pvtOrgWhereInput>
    privateOrgId?: StringFilter | string
    CompanyName?: StringNullableFilter | string | null
    positionInCompany?: StringNullableFilter | string | null
    VouchersCreated?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type pvtOrgOrderByWithRelationInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
    VouchersCreated?: VoucherOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
  }

  export type pvtOrgWhereUniqueInput = {
    privateOrgId?: string
  }

  export type pvtOrgOrderByWithAggregationInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
    _count?: pvtOrgCountOrderByAggregateInput
    _max?: pvtOrgMaxOrderByAggregateInput
    _min?: pvtOrgMinOrderByAggregateInput
  }

  export type pvtOrgScalarWhereWithAggregatesInput = {
    AND?: Enumerable<pvtOrgScalarWhereWithAggregatesInput>
    OR?: Enumerable<pvtOrgScalarWhereWithAggregatesInput>
    NOT?: Enumerable<pvtOrgScalarWhereWithAggregatesInput>
    privateOrgId?: StringWithAggregatesFilter | string
    CompanyName?: StringNullableWithAggregatesFilter | string | null
    positionInCompany?: StringNullableWithAggregatesFilter | string | null
  }

  export type serviceProviderWhereInput = {
    AND?: Enumerable<serviceProviderWhereInput>
    OR?: Enumerable<serviceProviderWhereInput>
    NOT?: Enumerable<serviceProviderWhereInput>
    serviceProviderId?: StringFilter | string
    BusinessName?: StringNullableFilter | string | null
    PositionInBusiness?: StringNullableFilter | string | null
    BusinessTag?: EnumServiceProviderTagNullableFilter | ServiceProviderTag | null
    VouchersRequested?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type serviceProviderOrderByWithRelationInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
    VouchersRequested?: VoucherOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
  }

  export type serviceProviderWhereUniqueInput = {
    serviceProviderId?: string
  }

  export type serviceProviderOrderByWithAggregationInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
    _count?: serviceProviderCountOrderByAggregateInput
    _max?: serviceProviderMaxOrderByAggregateInput
    _min?: serviceProviderMinOrderByAggregateInput
  }

  export type serviceProviderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<serviceProviderScalarWhereWithAggregatesInput>
    OR?: Enumerable<serviceProviderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<serviceProviderScalarWhereWithAggregatesInput>
    serviceProviderId?: StringWithAggregatesFilter | string
    BusinessName?: StringNullableWithAggregatesFilter | string | null
    PositionInBusiness?: StringNullableWithAggregatesFilter | string | null
    BusinessTag?: EnumServiceProviderTagNullableWithAggregatesFilter | ServiceProviderTag | null
  }

  export type UsersCreateInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    beneficiaryInfo?: beneficiaryCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    beneficiaryInfo?: beneficiaryUncheckedCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgUncheckedCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    beneficiaryInfo?: beneficiaryUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    beneficiaryInfo?: beneficiaryUncheckedUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUncheckedUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
  }

  export type beneficiaryCreateInput = {
    AvailableVoucher?: VoucherCreateNestedManyWithoutBeneficiaryUserInput
    Users?: UsersCreateNestedOneWithoutBeneficiaryInfoInput
  }

  export type beneficiaryUncheckedCreateInput = {
    beneficiaryId?: string
    AvailableVoucher?: VoucherUncheckedCreateNestedManyWithoutBeneficiaryUserInput
  }

  export type beneficiaryUpdateInput = {
    AvailableVoucher?: VoucherUpdateManyWithoutBeneficiaryUserNestedInput
    Users?: UsersUpdateOneRequiredWithoutBeneficiaryInfoNestedInput
  }

  export type beneficiaryUncheckedUpdateInput = {
    beneficiaryId?: StringFieldUpdateOperationsInput | string
    AvailableVoucher?: VoucherUncheckedUpdateManyWithoutBeneficiaryUserNestedInput
  }

  export type beneficiaryCreateManyInput = {
    beneficiaryId?: string
  }

  export type beneficiaryUpdateManyMutationInput = {

  }

  export type beneficiaryUncheckedUpdateManyInput = {
    beneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    PvtOrgBy?: pvtOrgCreateNestedOneWithoutVouchersCreatedInput
    BeneficiaryUser?: beneficiaryCreateNestedOneWithoutAvailableVoucherInput
    ServiceProviderUser?: serviceProviderCreateNestedOneWithoutVouchersRequestedInput
  }

  export type VoucherUncheckedCreateInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PvtOrgBy?: pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput
    BeneficiaryUser?: beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput
    ServiceProviderUser?: serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateManyInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateManyMutationInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherUncheckedUpdateManyInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type pvtOrgCreateInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherCreateNestedManyWithoutPvtOrgByInput
    Users?: UsersCreateNestedOneWithoutPvtOrgInfoInput
  }

  export type pvtOrgUncheckedCreateInput = {
    privateOrgId?: string
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherUncheckedCreateNestedManyWithoutPvtOrgByInput
  }

  export type pvtOrgUpdateInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUpdateManyWithoutPvtOrgByNestedInput
    Users?: UsersUpdateOneRequiredWithoutPvtOrgInfoNestedInput
  }

  export type pvtOrgUncheckedUpdateInput = {
    privateOrgId?: StringFieldUpdateOperationsInput | string
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUncheckedUpdateManyWithoutPvtOrgByNestedInput
  }

  export type pvtOrgCreateManyInput = {
    privateOrgId?: string
    CompanyName?: string | null
    positionInCompany?: string | null
  }

  export type pvtOrgUpdateManyMutationInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pvtOrgUncheckedUpdateManyInput = {
    privateOrgId?: StringFieldUpdateOperationsInput | string
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type serviceProviderCreateInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: ServiceProviderTag | null
    VouchersRequested?: VoucherCreateNestedManyWithoutServiceProviderUserInput
    Users?: UsersCreateNestedOneWithoutServiceProviderInfoInput
  }

  export type serviceProviderUncheckedCreateInput = {
    serviceProviderId?: string
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedCreateNestedManyWithoutServiceProviderUserInput
  }

  export type serviceProviderUpdateInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
    VouchersRequested?: VoucherUpdateManyWithoutServiceProviderUserNestedInput
    Users?: UsersUpdateOneRequiredWithoutServiceProviderInfoNestedInput
  }

  export type serviceProviderUncheckedUpdateInput = {
    serviceProviderId?: StringFieldUpdateOperationsInput | string
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedUpdateManyWithoutServiceProviderUserNestedInput
  }

  export type serviceProviderCreateManyInput = {
    serviceProviderId?: string
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: ServiceProviderTag | null
  }

  export type serviceProviderUpdateManyMutationInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
  }

  export type serviceProviderUncheckedUpdateManyInput = {
    serviceProviderId?: StringFieldUpdateOperationsInput | string
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumRoleNullableFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableFilter | Role | null
  }

  export type BeneficiaryRelationFilter = {
    is?: beneficiaryWhereInput | null
    isNot?: beneficiaryWhereInput | null
  }

  export type PvtOrgRelationFilter = {
    is?: pvtOrgWhereInput | null
    isNot?: pvtOrgWhereInput | null
  }

  export type ServiceProviderRelationFilter = {
    is?: serviceProviderWhereInput | null
    isNot?: serviceProviderWhereInput | null
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    walletPin?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    walletPin?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumRoleNullableWithAggregatesFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter | Role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumRoleNullableFilter
    _max?: NestedEnumRoleNullableFilter
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type beneficiaryCountOrderByAggregateInput = {
    beneficiaryId?: SortOrder
  }

  export type beneficiaryMaxOrderByAggregateInput = {
    beneficiaryId?: SortOrder
  }

  export type beneficiaryMinOrderByAggregateInput = {
    beneficiaryId?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type VoucherCountOrderByAggregateInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    voucherAmount?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    voucherAmount?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type pvtOrgCountOrderByAggregateInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
  }

  export type pvtOrgMaxOrderByAggregateInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
  }

  export type pvtOrgMinOrderByAggregateInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
  }

  export type EnumServiceProviderTagNullableFilter = {
    equals?: ServiceProviderTag | null
    in?: Enumerable<ServiceProviderTag> | null
    notIn?: Enumerable<ServiceProviderTag> | null
    not?: NestedEnumServiceProviderTagNullableFilter | ServiceProviderTag | null
  }

  export type serviceProviderCountOrderByAggregateInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
  }

  export type serviceProviderMaxOrderByAggregateInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
  }

  export type serviceProviderMinOrderByAggregateInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
  }

  export type EnumServiceProviderTagNullableWithAggregatesFilter = {
    equals?: ServiceProviderTag | null
    in?: Enumerable<ServiceProviderTag> | null
    notIn?: Enumerable<ServiceProviderTag> | null
    not?: NestedEnumServiceProviderTagNullableWithAggregatesFilter | ServiceProviderTag | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumServiceProviderTagNullableFilter
    _max?: NestedEnumServiceProviderTagNullableFilter
  }

  export type beneficiaryCreateNestedOneWithoutUsersInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    connect?: beneficiaryWhereUniqueInput
  }

  export type pvtOrgCreateNestedOneWithoutUsersInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    connect?: pvtOrgWhereUniqueInput
  }

  export type serviceProviderCreateNestedOneWithoutUsersInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    connect?: serviceProviderWhereUniqueInput
  }

  export type beneficiaryUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    connect?: beneficiaryWhereUniqueInput
  }

  export type pvtOrgUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    connect?: pvtOrgWhereUniqueInput
  }

  export type serviceProviderUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    connect?: serviceProviderWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: Role | null
  }

  export type beneficiaryUpdateOneWithoutUsersNestedInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    upsert?: beneficiaryUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: beneficiaryWhereUniqueInput
    update?: XOR<beneficiaryUpdateWithoutUsersInput, beneficiaryUncheckedUpdateWithoutUsersInput>
  }

  export type pvtOrgUpdateOneWithoutUsersNestedInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    upsert?: pvtOrgUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: pvtOrgWhereUniqueInput
    update?: XOR<pvtOrgUpdateWithoutUsersInput, pvtOrgUncheckedUpdateWithoutUsersInput>
  }

  export type serviceProviderUpdateOneWithoutUsersNestedInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    upsert?: serviceProviderUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: serviceProviderWhereUniqueInput
    update?: XOR<serviceProviderUpdateWithoutUsersInput, serviceProviderUncheckedUpdateWithoutUsersInput>
  }

  export type beneficiaryUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    upsert?: beneficiaryUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: beneficiaryWhereUniqueInput
    update?: XOR<beneficiaryUpdateWithoutUsersInput, beneficiaryUncheckedUpdateWithoutUsersInput>
  }

  export type pvtOrgUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    upsert?: pvtOrgUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: pvtOrgWhereUniqueInput
    update?: XOR<pvtOrgUpdateWithoutUsersInput, pvtOrgUncheckedUpdateWithoutUsersInput>
  }

  export type serviceProviderUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    upsert?: serviceProviderUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: serviceProviderWhereUniqueInput
    update?: XOR<serviceProviderUpdateWithoutUsersInput, serviceProviderUncheckedUpdateWithoutUsersInput>
  }

  export type VoucherCreateNestedManyWithoutBeneficiaryUserInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutBeneficiaryUserInput>, Enumerable<VoucherUncheckedCreateWithoutBeneficiaryUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutBeneficiaryUserInput>
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    connect?: Enumerable<VoucherWhereUniqueInput>
  }

  export type UsersCreateNestedOneWithoutBeneficiaryInfoInput = {
    create?: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBeneficiaryInfoInput
    connect?: UsersWhereUniqueInput
  }

  export type VoucherUncheckedCreateNestedManyWithoutBeneficiaryUserInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutBeneficiaryUserInput>, Enumerable<VoucherUncheckedCreateWithoutBeneficiaryUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutBeneficiaryUserInput>
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    connect?: Enumerable<VoucherWhereUniqueInput>
  }

  export type VoucherUpdateManyWithoutBeneficiaryUserNestedInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutBeneficiaryUserInput>, Enumerable<VoucherUncheckedCreateWithoutBeneficiaryUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutBeneficiaryUserInput>
    upsert?: Enumerable<VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput>
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    set?: Enumerable<VoucherWhereUniqueInput>
    disconnect?: Enumerable<VoucherWhereUniqueInput>
    delete?: Enumerable<VoucherWhereUniqueInput>
    connect?: Enumerable<VoucherWhereUniqueInput>
    update?: Enumerable<VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput>
    updateMany?: Enumerable<VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput>
    deleteMany?: Enumerable<VoucherScalarWhereInput>
  }

  export type UsersUpdateOneRequiredWithoutBeneficiaryInfoNestedInput = {
    create?: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBeneficiaryInfoInput
    upsert?: UsersUpsertWithoutBeneficiaryInfoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutBeneficiaryInfoInput, UsersUncheckedUpdateWithoutBeneficiaryInfoInput>
  }

  export type VoucherUncheckedUpdateManyWithoutBeneficiaryUserNestedInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutBeneficiaryUserInput>, Enumerable<VoucherUncheckedCreateWithoutBeneficiaryUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutBeneficiaryUserInput>
    upsert?: Enumerable<VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput>
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    set?: Enumerable<VoucherWhereUniqueInput>
    disconnect?: Enumerable<VoucherWhereUniqueInput>
    delete?: Enumerable<VoucherWhereUniqueInput>
    connect?: Enumerable<VoucherWhereUniqueInput>
    update?: Enumerable<VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput>
    updateMany?: Enumerable<VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput>
    deleteMany?: Enumerable<VoucherScalarWhereInput>
  }

  export type pvtOrgCreateNestedOneWithoutVouchersCreatedInput = {
    create?: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutVouchersCreatedInput
    connect?: pvtOrgWhereUniqueInput
  }

  export type beneficiaryCreateNestedOneWithoutAvailableVoucherInput = {
    create?: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutAvailableVoucherInput
    connect?: beneficiaryWhereUniqueInput
  }

  export type serviceProviderCreateNestedOneWithoutVouchersRequestedInput = {
    create?: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutVouchersRequestedInput
    connect?: serviceProviderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput = {
    create?: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutVouchersCreatedInput
    upsert?: pvtOrgUpsertWithoutVouchersCreatedInput
    connect?: pvtOrgWhereUniqueInput
    update?: XOR<pvtOrgUpdateWithoutVouchersCreatedInput, pvtOrgUncheckedUpdateWithoutVouchersCreatedInput>
  }

  export type beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput = {
    create?: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutAvailableVoucherInput
    upsert?: beneficiaryUpsertWithoutAvailableVoucherInput
    connect?: beneficiaryWhereUniqueInput
    update?: XOR<beneficiaryUpdateWithoutAvailableVoucherInput, beneficiaryUncheckedUpdateWithoutAvailableVoucherInput>
  }

  export type serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput = {
    create?: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutVouchersRequestedInput
    upsert?: serviceProviderUpsertWithoutVouchersRequestedInput
    connect?: serviceProviderWhereUniqueInput
    update?: XOR<serviceProviderUpdateWithoutVouchersRequestedInput, serviceProviderUncheckedUpdateWithoutVouchersRequestedInput>
  }

  export type VoucherCreateNestedManyWithoutPvtOrgByInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutPvtOrgByInput>, Enumerable<VoucherUncheckedCreateWithoutPvtOrgByInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutPvtOrgByInput>
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    connect?: Enumerable<VoucherWhereUniqueInput>
  }

  export type UsersCreateNestedOneWithoutPvtOrgInfoInput = {
    create?: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPvtOrgInfoInput
    connect?: UsersWhereUniqueInput
  }

  export type VoucherUncheckedCreateNestedManyWithoutPvtOrgByInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutPvtOrgByInput>, Enumerable<VoucherUncheckedCreateWithoutPvtOrgByInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutPvtOrgByInput>
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    connect?: Enumerable<VoucherWhereUniqueInput>
  }

  export type VoucherUpdateManyWithoutPvtOrgByNestedInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutPvtOrgByInput>, Enumerable<VoucherUncheckedCreateWithoutPvtOrgByInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutPvtOrgByInput>
    upsert?: Enumerable<VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput>
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    set?: Enumerable<VoucherWhereUniqueInput>
    disconnect?: Enumerable<VoucherWhereUniqueInput>
    delete?: Enumerable<VoucherWhereUniqueInput>
    connect?: Enumerable<VoucherWhereUniqueInput>
    update?: Enumerable<VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput>
    updateMany?: Enumerable<VoucherUpdateManyWithWhereWithoutPvtOrgByInput>
    deleteMany?: Enumerable<VoucherScalarWhereInput>
  }

  export type UsersUpdateOneRequiredWithoutPvtOrgInfoNestedInput = {
    create?: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPvtOrgInfoInput
    upsert?: UsersUpsertWithoutPvtOrgInfoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutPvtOrgInfoInput, UsersUncheckedUpdateWithoutPvtOrgInfoInput>
  }

  export type VoucherUncheckedUpdateManyWithoutPvtOrgByNestedInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutPvtOrgByInput>, Enumerable<VoucherUncheckedCreateWithoutPvtOrgByInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutPvtOrgByInput>
    upsert?: Enumerable<VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput>
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    set?: Enumerable<VoucherWhereUniqueInput>
    disconnect?: Enumerable<VoucherWhereUniqueInput>
    delete?: Enumerable<VoucherWhereUniqueInput>
    connect?: Enumerable<VoucherWhereUniqueInput>
    update?: Enumerable<VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput>
    updateMany?: Enumerable<VoucherUpdateManyWithWhereWithoutPvtOrgByInput>
    deleteMany?: Enumerable<VoucherScalarWhereInput>
  }

  export type VoucherCreateNestedManyWithoutServiceProviderUserInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutServiceProviderUserInput>, Enumerable<VoucherUncheckedCreateWithoutServiceProviderUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutServiceProviderUserInput>
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    connect?: Enumerable<VoucherWhereUniqueInput>
  }

  export type UsersCreateNestedOneWithoutServiceProviderInfoInput = {
    create?: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServiceProviderInfoInput
    connect?: UsersWhereUniqueInput
  }

  export type VoucherUncheckedCreateNestedManyWithoutServiceProviderUserInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutServiceProviderUserInput>, Enumerable<VoucherUncheckedCreateWithoutServiceProviderUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutServiceProviderUserInput>
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    connect?: Enumerable<VoucherWhereUniqueInput>
  }

  export type NullableEnumServiceProviderTagFieldUpdateOperationsInput = {
    set?: ServiceProviderTag | null
  }

  export type VoucherUpdateManyWithoutServiceProviderUserNestedInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutServiceProviderUserInput>, Enumerable<VoucherUncheckedCreateWithoutServiceProviderUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutServiceProviderUserInput>
    upsert?: Enumerable<VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput>
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    set?: Enumerable<VoucherWhereUniqueInput>
    disconnect?: Enumerable<VoucherWhereUniqueInput>
    delete?: Enumerable<VoucherWhereUniqueInput>
    connect?: Enumerable<VoucherWhereUniqueInput>
    update?: Enumerable<VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput>
    updateMany?: Enumerable<VoucherUpdateManyWithWhereWithoutServiceProviderUserInput>
    deleteMany?: Enumerable<VoucherScalarWhereInput>
  }

  export type UsersUpdateOneRequiredWithoutServiceProviderInfoNestedInput = {
    create?: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServiceProviderInfoInput
    upsert?: UsersUpsertWithoutServiceProviderInfoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutServiceProviderInfoInput, UsersUncheckedUpdateWithoutServiceProviderInfoInput>
  }

  export type VoucherUncheckedUpdateManyWithoutServiceProviderUserNestedInput = {
    create?: XOR<Enumerable<VoucherCreateWithoutServiceProviderUserInput>, Enumerable<VoucherUncheckedCreateWithoutServiceProviderUserInput>>
    connectOrCreate?: Enumerable<VoucherCreateOrConnectWithoutServiceProviderUserInput>
    upsert?: Enumerable<VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput>
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    set?: Enumerable<VoucherWhereUniqueInput>
    disconnect?: Enumerable<VoucherWhereUniqueInput>
    delete?: Enumerable<VoucherWhereUniqueInput>
    connect?: Enumerable<VoucherWhereUniqueInput>
    update?: Enumerable<VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput>
    updateMany?: Enumerable<VoucherUpdateManyWithWhereWithoutServiceProviderUserInput>
    deleteMany?: Enumerable<VoucherScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumRoleNullableFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableFilter | Role | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRoleNullableWithAggregatesFilter = {
    equals?: Role | null
    in?: Enumerable<Role> | null
    notIn?: Enumerable<Role> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter | Role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumRoleNullableFilter
    _max?: NestedEnumRoleNullableFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumServiceProviderTagNullableFilter = {
    equals?: ServiceProviderTag | null
    in?: Enumerable<ServiceProviderTag> | null
    notIn?: Enumerable<ServiceProviderTag> | null
    not?: NestedEnumServiceProviderTagNullableFilter | ServiceProviderTag | null
  }

  export type NestedEnumServiceProviderTagNullableWithAggregatesFilter = {
    equals?: ServiceProviderTag | null
    in?: Enumerable<ServiceProviderTag> | null
    notIn?: Enumerable<ServiceProviderTag> | null
    not?: NestedEnumServiceProviderTagNullableWithAggregatesFilter | ServiceProviderTag | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumServiceProviderTagNullableFilter
    _max?: NestedEnumServiceProviderTagNullableFilter
  }

  export type beneficiaryCreateWithoutUsersInput = {
    AvailableVoucher?: VoucherCreateNestedManyWithoutBeneficiaryUserInput
  }

  export type beneficiaryUncheckedCreateWithoutUsersInput = {
    AvailableVoucher?: VoucherUncheckedCreateNestedManyWithoutBeneficiaryUserInput
  }

  export type beneficiaryCreateOrConnectWithoutUsersInput = {
    where: beneficiaryWhereUniqueInput
    create: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
  }

  export type pvtOrgCreateWithoutUsersInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherCreateNestedManyWithoutPvtOrgByInput
  }

  export type pvtOrgUncheckedCreateWithoutUsersInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherUncheckedCreateNestedManyWithoutPvtOrgByInput
  }

  export type pvtOrgCreateOrConnectWithoutUsersInput = {
    where: pvtOrgWhereUniqueInput
    create: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
  }

  export type serviceProviderCreateWithoutUsersInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: ServiceProviderTag | null
    VouchersRequested?: VoucherCreateNestedManyWithoutServiceProviderUserInput
  }

  export type serviceProviderUncheckedCreateWithoutUsersInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedCreateNestedManyWithoutServiceProviderUserInput
  }

  export type serviceProviderCreateOrConnectWithoutUsersInput = {
    where: serviceProviderWhereUniqueInput
    create: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
  }

  export type beneficiaryUpsertWithoutUsersInput = {
    update: XOR<beneficiaryUpdateWithoutUsersInput, beneficiaryUncheckedUpdateWithoutUsersInput>
    create: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
  }

  export type beneficiaryUpdateWithoutUsersInput = {
    AvailableVoucher?: VoucherUpdateManyWithoutBeneficiaryUserNestedInput
  }

  export type beneficiaryUncheckedUpdateWithoutUsersInput = {
    AvailableVoucher?: VoucherUncheckedUpdateManyWithoutBeneficiaryUserNestedInput
  }

  export type pvtOrgUpsertWithoutUsersInput = {
    update: XOR<pvtOrgUpdateWithoutUsersInput, pvtOrgUncheckedUpdateWithoutUsersInput>
    create: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
  }

  export type pvtOrgUpdateWithoutUsersInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUpdateManyWithoutPvtOrgByNestedInput
  }

  export type pvtOrgUncheckedUpdateWithoutUsersInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUncheckedUpdateManyWithoutPvtOrgByNestedInput
  }

  export type serviceProviderUpsertWithoutUsersInput = {
    update: XOR<serviceProviderUpdateWithoutUsersInput, serviceProviderUncheckedUpdateWithoutUsersInput>
    create: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
  }

  export type serviceProviderUpdateWithoutUsersInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
    VouchersRequested?: VoucherUpdateManyWithoutServiceProviderUserNestedInput
  }

  export type serviceProviderUncheckedUpdateWithoutUsersInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedUpdateManyWithoutServiceProviderUserNestedInput
  }

  export type VoucherCreateWithoutBeneficiaryUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    PvtOrgBy?: pvtOrgCreateNestedOneWithoutVouchersCreatedInput
    ServiceProviderUser?: serviceProviderCreateNestedOneWithoutVouchersRequestedInput
  }

  export type VoucherUncheckedCreateWithoutBeneficiaryUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    PvtOrgById?: string
  }

  export type VoucherCreateOrConnectWithoutBeneficiaryUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput>
  }

  export type VoucherCreateManyBeneficiaryUserInputEnvelope = {
    data: Enumerable<VoucherCreateManyBeneficiaryUserInput>
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutBeneficiaryInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    pvtOrgInfo?: pvtOrgCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutBeneficiaryInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    pvtOrgInfo?: pvtOrgUncheckedCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutBeneficiaryInfoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutBeneficiaryUserInput, VoucherUncheckedUpdateWithoutBeneficiaryUserInput>
    create: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutBeneficiaryUserInput, VoucherUncheckedUpdateWithoutBeneficiaryUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutAvailableVoucherInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: Enumerable<VoucherScalarWhereInput>
    OR?: Enumerable<VoucherScalarWhereInput>
    NOT?: Enumerable<VoucherScalarWhereInput>
    voucherId?: StringFilter | string
    voucherAmount?: IntFilter | number
    voucherCreatedAt?: DateTimeFilter | Date | string
    voucherRedeemed?: BoolFilter | boolean
    voucherRedeemedDate?: DateTimeNullableFilter | Date | string | null
    voucherSPId?: StringFilter | string
    voucherBeneficiaryId?: StringFilter | string
    PvtOrgById?: StringFilter | string
  }

  export type UsersUpsertWithoutBeneficiaryInfoInput = {
    update: XOR<UsersUpdateWithoutBeneficiaryInfoInput, UsersUncheckedUpdateWithoutBeneficiaryInfoInput>
    create: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
  }

  export type UsersUpdateWithoutBeneficiaryInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    pvtOrgInfo?: pvtOrgUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutBeneficiaryInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    pvtOrgInfo?: pvtOrgUncheckedUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type pvtOrgCreateWithoutVouchersCreatedInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    Users?: UsersCreateNestedOneWithoutPvtOrgInfoInput
  }

  export type pvtOrgUncheckedCreateWithoutVouchersCreatedInput = {
    privateOrgId?: string
    CompanyName?: string | null
    positionInCompany?: string | null
  }

  export type pvtOrgCreateOrConnectWithoutVouchersCreatedInput = {
    where: pvtOrgWhereUniqueInput
    create: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
  }

  export type beneficiaryCreateWithoutAvailableVoucherInput = {
    Users?: UsersCreateNestedOneWithoutBeneficiaryInfoInput
  }

  export type beneficiaryUncheckedCreateWithoutAvailableVoucherInput = {
    beneficiaryId?: string
  }

  export type beneficiaryCreateOrConnectWithoutAvailableVoucherInput = {
    where: beneficiaryWhereUniqueInput
    create: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
  }

  export type serviceProviderCreateWithoutVouchersRequestedInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: ServiceProviderTag | null
    Users?: UsersCreateNestedOneWithoutServiceProviderInfoInput
  }

  export type serviceProviderUncheckedCreateWithoutVouchersRequestedInput = {
    serviceProviderId?: string
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: ServiceProviderTag | null
  }

  export type serviceProviderCreateOrConnectWithoutVouchersRequestedInput = {
    where: serviceProviderWhereUniqueInput
    create: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
  }

  export type pvtOrgUpsertWithoutVouchersCreatedInput = {
    update: XOR<pvtOrgUpdateWithoutVouchersCreatedInput, pvtOrgUncheckedUpdateWithoutVouchersCreatedInput>
    create: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
  }

  export type pvtOrgUpdateWithoutVouchersCreatedInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UsersUpdateOneRequiredWithoutPvtOrgInfoNestedInput
  }

  export type pvtOrgUncheckedUpdateWithoutVouchersCreatedInput = {
    privateOrgId?: StringFieldUpdateOperationsInput | string
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiaryUpsertWithoutAvailableVoucherInput = {
    update: XOR<beneficiaryUpdateWithoutAvailableVoucherInput, beneficiaryUncheckedUpdateWithoutAvailableVoucherInput>
    create: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
  }

  export type beneficiaryUpdateWithoutAvailableVoucherInput = {
    Users?: UsersUpdateOneRequiredWithoutBeneficiaryInfoNestedInput
  }

  export type beneficiaryUncheckedUpdateWithoutAvailableVoucherInput = {
    beneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type serviceProviderUpsertWithoutVouchersRequestedInput = {
    update: XOR<serviceProviderUpdateWithoutVouchersRequestedInput, serviceProviderUncheckedUpdateWithoutVouchersRequestedInput>
    create: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
  }

  export type serviceProviderUpdateWithoutVouchersRequestedInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
    Users?: UsersUpdateOneRequiredWithoutServiceProviderInfoNestedInput
  }

  export type serviceProviderUncheckedUpdateWithoutVouchersRequestedInput = {
    serviceProviderId?: StringFieldUpdateOperationsInput | string
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | ServiceProviderTag | null
  }

  export type VoucherCreateWithoutPvtOrgByInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    BeneficiaryUser?: beneficiaryCreateNestedOneWithoutAvailableVoucherInput
    ServiceProviderUser?: serviceProviderCreateNestedOneWithoutVouchersRequestedInput
  }

  export type VoucherUncheckedCreateWithoutPvtOrgByInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
  }

  export type VoucherCreateOrConnectWithoutPvtOrgByInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput>
  }

  export type VoucherCreateManyPvtOrgByInputEnvelope = {
    data: Enumerable<VoucherCreateManyPvtOrgByInput>
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutPvtOrgInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    beneficiaryInfo?: beneficiaryCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutPvtOrgInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    beneficiaryInfo?: beneficiaryUncheckedCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutPvtOrgInfoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutPvtOrgByInput, VoucherUncheckedUpdateWithoutPvtOrgByInput>
    create: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutPvtOrgByInput, VoucherUncheckedUpdateWithoutPvtOrgByInput>
  }

  export type VoucherUpdateManyWithWhereWithoutPvtOrgByInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutVouchersCreatedInput>
  }

  export type UsersUpsertWithoutPvtOrgInfoInput = {
    update: XOR<UsersUpdateWithoutPvtOrgInfoInput, UsersUncheckedUpdateWithoutPvtOrgInfoInput>
    create: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
  }

  export type UsersUpdateWithoutPvtOrgInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    beneficiaryInfo?: beneficiaryUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutPvtOrgInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    beneficiaryInfo?: beneficiaryUncheckedUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type VoucherCreateWithoutServiceProviderUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    PvtOrgBy?: pvtOrgCreateNestedOneWithoutVouchersCreatedInput
    BeneficiaryUser?: beneficiaryCreateNestedOneWithoutAvailableVoucherInput
  }

  export type VoucherUncheckedCreateWithoutServiceProviderUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherCreateOrConnectWithoutServiceProviderUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput>
  }

  export type VoucherCreateManyServiceProviderUserInputEnvelope = {
    data: Enumerable<VoucherCreateManyServiceProviderUserInput>
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutServiceProviderInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    beneficiaryInfo?: beneficiaryCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutServiceProviderInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: number | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: Role | null
    beneficiaryInfo?: beneficiaryUncheckedCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutServiceProviderInfoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutServiceProviderUserInput, VoucherUncheckedUpdateWithoutServiceProviderUserInput>
    create: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutServiceProviderUserInput, VoucherUncheckedUpdateWithoutServiceProviderUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutServiceProviderUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutVouchersRequestedInput>
  }

  export type UsersUpsertWithoutServiceProviderInfoInput = {
    update: XOR<UsersUpdateWithoutServiceProviderInfoInput, UsersUncheckedUpdateWithoutServiceProviderInfoInput>
    create: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
  }

  export type UsersUpdateWithoutServiceProviderInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    beneficiaryInfo?: beneficiaryUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutServiceProviderInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableIntFieldUpdateOperationsInput | number | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | Role | null
    beneficiaryInfo?: beneficiaryUncheckedUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type VoucherCreateManyBeneficiaryUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateWithoutBeneficiaryUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PvtOrgBy?: pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput
    ServiceProviderUser?: serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput
  }

  export type VoucherUncheckedUpdateWithoutBeneficiaryUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherUncheckedUpdateManyWithoutAvailableVoucherInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateManyPvtOrgByInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
  }

  export type VoucherUpdateWithoutPvtOrgByInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BeneficiaryUser?: beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput
    ServiceProviderUser?: serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput
  }

  export type VoucherUncheckedUpdateWithoutPvtOrgByInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherUncheckedUpdateManyWithoutVouchersCreatedInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateManyServiceProviderUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateWithoutServiceProviderUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PvtOrgBy?: pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput
    BeneficiaryUser?: beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutServiceProviderUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherUncheckedUpdateManyWithoutVouchersRequestedInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}