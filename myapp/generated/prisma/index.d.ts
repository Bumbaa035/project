
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PermissionNotification
 * 
 */
export type PermissionNotification = $Result.DefaultSelection<Prisma.$PermissionNotificationPayload>
/**
 * Model Penalty
 * 
 */
export type Penalty = $Result.DefaultSelection<Prisma.$PenaltyPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model Transport
 * 
 */
export type Transport = $Result.DefaultSelection<Prisma.$TransportPayload>
/**
 * Model CallCenter
 * 
 */
export type CallCenter = $Result.DefaultSelection<Prisma.$CallCenterPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OwnerType: {
  PERSON: 'PERSON',
  COMPANY: 'COMPANY'
};

export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType]


export const WheelPosition: {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
};

export type WheelPosition = (typeof WheelPosition)[keyof typeof WheelPosition]

}

export type OwnerType = $Enums.OwnerType

export const OwnerType: typeof $Enums.OwnerType

export type WheelPosition = $Enums.WheelPosition

export const WheelPosition: typeof $Enums.WheelPosition

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissionNotification`: Exposes CRUD operations for the **PermissionNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionNotifications
    * const permissionNotifications = await prisma.permissionNotification.findMany()
    * ```
    */
  get permissionNotification(): Prisma.PermissionNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penalty`: Exposes CRUD operations for the **Penalty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penalties
    * const penalties = await prisma.penalty.findMany()
    * ```
    */
  get penalty(): Prisma.PenaltyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transport`: Exposes CRUD operations for the **Transport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transports
    * const transports = await prisma.transport.findMany()
    * ```
    */
  get transport(): Prisma.TransportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callCenter`: Exposes CRUD operations for the **CallCenter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallCenters
    * const callCenters = await prisma.callCenter.findMany()
    * ```
    */
  get callCenter(): Prisma.CallCenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PermissionNotification: 'PermissionNotification',
    Penalty: 'Penalty',
    Car: 'Car',
    Transport: 'Transport',
    CallCenter: 'CallCenter',
    Area: 'Area',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "permissionNotification" | "penalty" | "car" | "transport" | "callCenter" | "area" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PermissionNotification: {
        payload: Prisma.$PermissionNotificationPayload<ExtArgs>
        fields: Prisma.PermissionNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>
          }
          findFirst: {
            args: Prisma.PermissionNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>
          }
          findMany: {
            args: Prisma.PermissionNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>[]
          }
          create: {
            args: Prisma.PermissionNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>
          }
          createMany: {
            args: Prisma.PermissionNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>[]
          }
          delete: {
            args: Prisma.PermissionNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>
          }
          update: {
            args: Prisma.PermissionNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>
          }
          deleteMany: {
            args: Prisma.PermissionNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>[]
          }
          upsert: {
            args: Prisma.PermissionNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionNotificationPayload>
          }
          aggregate: {
            args: Prisma.PermissionNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionNotification>
          }
          groupBy: {
            args: Prisma.PermissionNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionNotificationCountAggregateOutputType> | number
          }
        }
      }
      Penalty: {
        payload: Prisma.$PenaltyPayload<ExtArgs>
        fields: Prisma.PenaltyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenaltyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenaltyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>
          }
          findFirst: {
            args: Prisma.PenaltyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenaltyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>
          }
          findMany: {
            args: Prisma.PenaltyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>[]
          }
          create: {
            args: Prisma.PenaltyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>
          }
          createMany: {
            args: Prisma.PenaltyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenaltyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>[]
          }
          delete: {
            args: Prisma.PenaltyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>
          }
          update: {
            args: Prisma.PenaltyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>
          }
          deleteMany: {
            args: Prisma.PenaltyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenaltyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenaltyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>[]
          }
          upsert: {
            args: Prisma.PenaltyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenaltyPayload>
          }
          aggregate: {
            args: Prisma.PenaltyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenalty>
          }
          groupBy: {
            args: Prisma.PenaltyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenaltyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenaltyCountArgs<ExtArgs>
            result: $Utils.Optional<PenaltyCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Transport: {
        payload: Prisma.$TransportPayload<ExtArgs>
        fields: Prisma.TransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findFirst: {
            args: Prisma.TransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findMany: {
            args: Prisma.TransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          create: {
            args: Prisma.TransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          createMany: {
            args: Prisma.TransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          delete: {
            args: Prisma.TransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          update: {
            args: Prisma.TransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          deleteMany: {
            args: Prisma.TransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          upsert: {
            args: Prisma.TransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          aggregate: {
            args: Prisma.TransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransport>
          }
          groupBy: {
            args: Prisma.TransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportCountArgs<ExtArgs>
            result: $Utils.Optional<TransportCountAggregateOutputType> | number
          }
        }
      }
      CallCenter: {
        payload: Prisma.$CallCenterPayload<ExtArgs>
        fields: Prisma.CallCenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallCenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallCenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>
          }
          findFirst: {
            args: Prisma.CallCenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallCenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>
          }
          findMany: {
            args: Prisma.CallCenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>[]
          }
          create: {
            args: Prisma.CallCenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>
          }
          createMany: {
            args: Prisma.CallCenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallCenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>[]
          }
          delete: {
            args: Prisma.CallCenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>
          }
          update: {
            args: Prisma.CallCenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>
          }
          deleteMany: {
            args: Prisma.CallCenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallCenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallCenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>[]
          }
          upsert: {
            args: Prisma.CallCenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallCenterPayload>
          }
          aggregate: {
            args: Prisma.CallCenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallCenter>
          }
          groupBy: {
            args: Prisma.CallCenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallCenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallCenterCountArgs<ExtArgs>
            result: $Utils.Optional<CallCenterCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    permissionNotification?: PermissionNotificationOmit
    penalty?: PenaltyOmit
    car?: CarOmit
    transport?: TransportOmit
    callCenter?: CallCenterOmit
    area?: AreaOmit
    notification?: NotificationOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    penalty: number
    transport: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penalty?: boolean | UserCountOutputTypeCountPenaltyArgs
    transport?: boolean | UserCountOutputTypeCountTransportArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPenaltyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenaltyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionNotificationWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    penalties: number
    transport: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penalties?: boolean | CarCountOutputTypeCountPenaltiesArgs
    transport?: boolean | CarCountOutputTypeCountTransportArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountPenaltiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenaltyWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountTransportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
  }


  /**
   * Count Type TransportCountOutputType
   */

  export type TransportCountOutputType = {
    areas: number
    notifications: number
  }

  export type TransportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | TransportCountOutputTypeCountAreasArgs
    notifications?: boolean | TransportCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportCountOutputType
     */
    select?: TransportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }

  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CallCenterCountOutputType
   */

  export type CallCenterCountOutputType = {
    notifications: number
  }

  export type CallCenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | CallCenterCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * CallCenterCountOutputType without action
   */
  export type CallCenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenterCountOutputType
     */
    select?: CallCenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CallCenterCountOutputType without action
   */
  export type CallCenterCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    transports: number
    callCenters: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transports?: boolean | AreaCountOutputTypeCountTransportsArgs
    callCenters?: boolean | AreaCountOutputTypeCountCallCentersArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountTransportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountCallCentersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallCenterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    register: string | null
    location: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    register: string | null
    location: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    register: number
    location: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    register?: true
    location?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    register?: true
    location?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    register?: true
    location?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    register: string
    location: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    register?: boolean
    location?: boolean
    penalty?: boolean | User$penaltyArgs<ExtArgs>
    transport?: boolean | User$transportArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    register?: boolean
    location?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    register?: boolean
    location?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    register?: boolean
    location?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "register" | "location", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penalty?: boolean | User$penaltyArgs<ExtArgs>
    transport?: boolean | User$transportArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      penalty: Prisma.$PenaltyPayload<ExtArgs>[]
      transport: Prisma.$TransportPayload<ExtArgs>[]
      notifications: Prisma.$PermissionNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      register: string
      location: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penalty<T extends User$penaltyArgs<ExtArgs> = {}>(args?: Subset<T, User$penaltyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transport<T extends User$transportArgs<ExtArgs> = {}>(args?: Subset<T, User$transportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly register: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.penalty
   */
  export type User$penaltyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    where?: PenaltyWhereInput
    orderBy?: PenaltyOrderByWithRelationInput | PenaltyOrderByWithRelationInput[]
    cursor?: PenaltyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenaltyScalarFieldEnum | PenaltyScalarFieldEnum[]
  }

  /**
   * User.transport
   */
  export type User$transportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    cursor?: TransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    where?: PermissionNotificationWhereInput
    orderBy?: PermissionNotificationOrderByWithRelationInput | PermissionNotificationOrderByWithRelationInput[]
    cursor?: PermissionNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionNotificationScalarFieldEnum | PermissionNotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PermissionNotification
   */

  export type AggregatePermissionNotification = {
    _count: PermissionNotificationCountAggregateOutputType | null
    _avg: PermissionNotificationAvgAggregateOutputType | null
    _sum: PermissionNotificationSumAggregateOutputType | null
    _min: PermissionNotificationMinAggregateOutputType | null
    _max: PermissionNotificationMaxAggregateOutputType | null
  }

  export type PermissionNotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PermissionNotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PermissionNotificationMinAggregateOutputType = {
    id: number | null
    message: string | null
    userId: number | null
  }

  export type PermissionNotificationMaxAggregateOutputType = {
    id: number | null
    message: string | null
    userId: number | null
  }

  export type PermissionNotificationCountAggregateOutputType = {
    id: number
    message: number
    userId: number
    _all: number
  }


  export type PermissionNotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PermissionNotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PermissionNotificationMinAggregateInputType = {
    id?: true
    message?: true
    userId?: true
  }

  export type PermissionNotificationMaxAggregateInputType = {
    id?: true
    message?: true
    userId?: true
  }

  export type PermissionNotificationCountAggregateInputType = {
    id?: true
    message?: true
    userId?: true
    _all?: true
  }

  export type PermissionNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionNotification to aggregate.
     */
    where?: PermissionNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNotifications to fetch.
     */
    orderBy?: PermissionNotificationOrderByWithRelationInput | PermissionNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionNotifications
    **/
    _count?: true | PermissionNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionNotificationMaxAggregateInputType
  }

  export type GetPermissionNotificationAggregateType<T extends PermissionNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionNotification[P]>
      : GetScalarType<T[P], AggregatePermissionNotification[P]>
  }




  export type PermissionNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionNotificationWhereInput
    orderBy?: PermissionNotificationOrderByWithAggregationInput | PermissionNotificationOrderByWithAggregationInput[]
    by: PermissionNotificationScalarFieldEnum[] | PermissionNotificationScalarFieldEnum
    having?: PermissionNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionNotificationCountAggregateInputType | true
    _avg?: PermissionNotificationAvgAggregateInputType
    _sum?: PermissionNotificationSumAggregateInputType
    _min?: PermissionNotificationMinAggregateInputType
    _max?: PermissionNotificationMaxAggregateInputType
  }

  export type PermissionNotificationGroupByOutputType = {
    id: number
    message: string
    userId: number
    _count: PermissionNotificationCountAggregateOutputType | null
    _avg: PermissionNotificationAvgAggregateOutputType | null
    _sum: PermissionNotificationSumAggregateOutputType | null
    _min: PermissionNotificationMinAggregateOutputType | null
    _max: PermissionNotificationMaxAggregateOutputType | null
  }

  type GetPermissionNotificationGroupByPayload<T extends PermissionNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionNotificationGroupByOutputType[P]>
        }
      >
    >


  export type PermissionNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionNotification"]>

  export type PermissionNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionNotification"]>

  export type PermissionNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionNotification"]>

  export type PermissionNotificationSelectScalar = {
    id?: boolean
    message?: boolean
    userId?: boolean
  }

  export type PermissionNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "userId", ExtArgs["result"]["permissionNotification"]>
  export type PermissionNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PermissionNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PermissionNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PermissionNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionNotification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      userId: number
    }, ExtArgs["result"]["permissionNotification"]>
    composites: {}
  }

  type PermissionNotificationGetPayload<S extends boolean | null | undefined | PermissionNotificationDefaultArgs> = $Result.GetResult<Prisma.$PermissionNotificationPayload, S>

  type PermissionNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionNotificationCountAggregateInputType | true
    }

  export interface PermissionNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionNotification'], meta: { name: 'PermissionNotification' } }
    /**
     * Find zero or one PermissionNotification that matches the filter.
     * @param {PermissionNotificationFindUniqueArgs} args - Arguments to find a PermissionNotification
     * @example
     * // Get one PermissionNotification
     * const permissionNotification = await prisma.permissionNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionNotificationFindUniqueArgs>(args: SelectSubset<T, PermissionNotificationFindUniqueArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PermissionNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionNotificationFindUniqueOrThrowArgs} args - Arguments to find a PermissionNotification
     * @example
     * // Get one PermissionNotification
     * const permissionNotification = await prisma.permissionNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermissionNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNotificationFindFirstArgs} args - Arguments to find a PermissionNotification
     * @example
     * // Get one PermissionNotification
     * const permissionNotification = await prisma.permissionNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionNotificationFindFirstArgs>(args?: SelectSubset<T, PermissionNotificationFindFirstArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermissionNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNotificationFindFirstOrThrowArgs} args - Arguments to find a PermissionNotification
     * @example
     * // Get one PermissionNotification
     * const permissionNotification = await prisma.permissionNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PermissionNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionNotifications
     * const permissionNotifications = await prisma.permissionNotification.findMany()
     * 
     * // Get first 10 PermissionNotifications
     * const permissionNotifications = await prisma.permissionNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionNotificationWithIdOnly = await prisma.permissionNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionNotificationFindManyArgs>(args?: SelectSubset<T, PermissionNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PermissionNotification.
     * @param {PermissionNotificationCreateArgs} args - Arguments to create a PermissionNotification.
     * @example
     * // Create one PermissionNotification
     * const PermissionNotification = await prisma.permissionNotification.create({
     *   data: {
     *     // ... data to create a PermissionNotification
     *   }
     * })
     * 
     */
    create<T extends PermissionNotificationCreateArgs>(args: SelectSubset<T, PermissionNotificationCreateArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PermissionNotifications.
     * @param {PermissionNotificationCreateManyArgs} args - Arguments to create many PermissionNotifications.
     * @example
     * // Create many PermissionNotifications
     * const permissionNotification = await prisma.permissionNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionNotificationCreateManyArgs>(args?: SelectSubset<T, PermissionNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermissionNotifications and returns the data saved in the database.
     * @param {PermissionNotificationCreateManyAndReturnArgs} args - Arguments to create many PermissionNotifications.
     * @example
     * // Create many PermissionNotifications
     * const permissionNotification = await prisma.permissionNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermissionNotifications and only return the `id`
     * const permissionNotificationWithIdOnly = await prisma.permissionNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PermissionNotification.
     * @param {PermissionNotificationDeleteArgs} args - Arguments to delete one PermissionNotification.
     * @example
     * // Delete one PermissionNotification
     * const PermissionNotification = await prisma.permissionNotification.delete({
     *   where: {
     *     // ... filter to delete one PermissionNotification
     *   }
     * })
     * 
     */
    delete<T extends PermissionNotificationDeleteArgs>(args: SelectSubset<T, PermissionNotificationDeleteArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PermissionNotification.
     * @param {PermissionNotificationUpdateArgs} args - Arguments to update one PermissionNotification.
     * @example
     * // Update one PermissionNotification
     * const permissionNotification = await prisma.permissionNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionNotificationUpdateArgs>(args: SelectSubset<T, PermissionNotificationUpdateArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PermissionNotifications.
     * @param {PermissionNotificationDeleteManyArgs} args - Arguments to filter PermissionNotifications to delete.
     * @example
     * // Delete a few PermissionNotifications
     * const { count } = await prisma.permissionNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionNotificationDeleteManyArgs>(args?: SelectSubset<T, PermissionNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionNotifications
     * const permissionNotification = await prisma.permissionNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionNotificationUpdateManyArgs>(args: SelectSubset<T, PermissionNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionNotifications and returns the data updated in the database.
     * @param {PermissionNotificationUpdateManyAndReturnArgs} args - Arguments to update many PermissionNotifications.
     * @example
     * // Update many PermissionNotifications
     * const permissionNotification = await prisma.permissionNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PermissionNotifications and only return the `id`
     * const permissionNotificationWithIdOnly = await prisma.permissionNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PermissionNotification.
     * @param {PermissionNotificationUpsertArgs} args - Arguments to update or create a PermissionNotification.
     * @example
     * // Update or create a PermissionNotification
     * const permissionNotification = await prisma.permissionNotification.upsert({
     *   create: {
     *     // ... data to create a PermissionNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionNotification we want to update
     *   }
     * })
     */
    upsert<T extends PermissionNotificationUpsertArgs>(args: SelectSubset<T, PermissionNotificationUpsertArgs<ExtArgs>>): Prisma__PermissionNotificationClient<$Result.GetResult<Prisma.$PermissionNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PermissionNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNotificationCountArgs} args - Arguments to filter PermissionNotifications to count.
     * @example
     * // Count the number of PermissionNotifications
     * const count = await prisma.permissionNotification.count({
     *   where: {
     *     // ... the filter for the PermissionNotifications we want to count
     *   }
     * })
    **/
    count<T extends PermissionNotificationCountArgs>(
      args?: Subset<T, PermissionNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionNotificationAggregateArgs>(args: Subset<T, PermissionNotificationAggregateArgs>): Prisma.PrismaPromise<GetPermissionNotificationAggregateType<T>>

    /**
     * Group by PermissionNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionNotificationGroupByArgs} args - Group by arguments.
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
      T extends PermissionNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionNotificationGroupByArgs['orderBy'] }
        : { orderBy?: PermissionNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PermissionNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionNotification model
   */
  readonly fields: PermissionNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PermissionNotification model
   */
  interface PermissionNotificationFieldRefs {
    readonly id: FieldRef<"PermissionNotification", 'Int'>
    readonly message: FieldRef<"PermissionNotification", 'String'>
    readonly userId: FieldRef<"PermissionNotification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PermissionNotification findUnique
   */
  export type PermissionNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNotification to fetch.
     */
    where: PermissionNotificationWhereUniqueInput
  }

  /**
   * PermissionNotification findUniqueOrThrow
   */
  export type PermissionNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNotification to fetch.
     */
    where: PermissionNotificationWhereUniqueInput
  }

  /**
   * PermissionNotification findFirst
   */
  export type PermissionNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNotification to fetch.
     */
    where?: PermissionNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNotifications to fetch.
     */
    orderBy?: PermissionNotificationOrderByWithRelationInput | PermissionNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionNotifications.
     */
    cursor?: PermissionNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionNotifications.
     */
    distinct?: PermissionNotificationScalarFieldEnum | PermissionNotificationScalarFieldEnum[]
  }

  /**
   * PermissionNotification findFirstOrThrow
   */
  export type PermissionNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNotification to fetch.
     */
    where?: PermissionNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNotifications to fetch.
     */
    orderBy?: PermissionNotificationOrderByWithRelationInput | PermissionNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionNotifications.
     */
    cursor?: PermissionNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionNotifications.
     */
    distinct?: PermissionNotificationScalarFieldEnum | PermissionNotificationScalarFieldEnum[]
  }

  /**
   * PermissionNotification findMany
   */
  export type PermissionNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PermissionNotifications to fetch.
     */
    where?: PermissionNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionNotifications to fetch.
     */
    orderBy?: PermissionNotificationOrderByWithRelationInput | PermissionNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionNotifications.
     */
    cursor?: PermissionNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionNotifications.
     */
    skip?: number
    distinct?: PermissionNotificationScalarFieldEnum | PermissionNotificationScalarFieldEnum[]
  }

  /**
   * PermissionNotification create
   */
  export type PermissionNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionNotification.
     */
    data: XOR<PermissionNotificationCreateInput, PermissionNotificationUncheckedCreateInput>
  }

  /**
   * PermissionNotification createMany
   */
  export type PermissionNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionNotifications.
     */
    data: PermissionNotificationCreateManyInput | PermissionNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionNotification createManyAndReturn
   */
  export type PermissionNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many PermissionNotifications.
     */
    data: PermissionNotificationCreateManyInput | PermissionNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionNotification update
   */
  export type PermissionNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionNotification.
     */
    data: XOR<PermissionNotificationUpdateInput, PermissionNotificationUncheckedUpdateInput>
    /**
     * Choose, which PermissionNotification to update.
     */
    where: PermissionNotificationWhereUniqueInput
  }

  /**
   * PermissionNotification updateMany
   */
  export type PermissionNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionNotifications.
     */
    data: XOR<PermissionNotificationUpdateManyMutationInput, PermissionNotificationUncheckedUpdateManyInput>
    /**
     * Filter which PermissionNotifications to update
     */
    where?: PermissionNotificationWhereInput
    /**
     * Limit how many PermissionNotifications to update.
     */
    limit?: number
  }

  /**
   * PermissionNotification updateManyAndReturn
   */
  export type PermissionNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * The data used to update PermissionNotifications.
     */
    data: XOR<PermissionNotificationUpdateManyMutationInput, PermissionNotificationUncheckedUpdateManyInput>
    /**
     * Filter which PermissionNotifications to update
     */
    where?: PermissionNotificationWhereInput
    /**
     * Limit how many PermissionNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionNotification upsert
   */
  export type PermissionNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionNotification to update in case it exists.
     */
    where: PermissionNotificationWhereUniqueInput
    /**
     * In case the PermissionNotification found by the `where` argument doesn't exist, create a new PermissionNotification with this data.
     */
    create: XOR<PermissionNotificationCreateInput, PermissionNotificationUncheckedCreateInput>
    /**
     * In case the PermissionNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionNotificationUpdateInput, PermissionNotificationUncheckedUpdateInput>
  }

  /**
   * PermissionNotification delete
   */
  export type PermissionNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
    /**
     * Filter which PermissionNotification to delete.
     */
    where: PermissionNotificationWhereUniqueInput
  }

  /**
   * PermissionNotification deleteMany
   */
  export type PermissionNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionNotifications to delete
     */
    where?: PermissionNotificationWhereInput
    /**
     * Limit how many PermissionNotifications to delete.
     */
    limit?: number
  }

  /**
   * PermissionNotification without action
   */
  export type PermissionNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionNotification
     */
    select?: PermissionNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermissionNotification
     */
    omit?: PermissionNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionNotificationInclude<ExtArgs> | null
  }


  /**
   * Model Penalty
   */

  export type AggregatePenalty = {
    _count: PenaltyCountAggregateOutputType | null
    _avg: PenaltyAvgAggregateOutputType | null
    _sum: PenaltySumAggregateOutputType | null
    _min: PenaltyMinAggregateOutputType | null
    _max: PenaltyMaxAggregateOutputType | null
  }

  export type PenaltyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    carId: number | null
  }

  export type PenaltySumAggregateOutputType = {
    id: number | null
    userId: number | null
    carId: number | null
  }

  export type PenaltyMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: string | null
    carId: number | null
  }

  export type PenaltyMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: string | null
    carId: number | null
  }

  export type PenaltyCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    carId: number
    _all: number
  }


  export type PenaltyAvgAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
  }

  export type PenaltySumAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
  }

  export type PenaltyMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    carId?: true
  }

  export type PenaltyMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    carId?: true
  }

  export type PenaltyCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    carId?: true
    _all?: true
  }

  export type PenaltyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penalty to aggregate.
     */
    where?: PenaltyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penalties to fetch.
     */
    orderBy?: PenaltyOrderByWithRelationInput | PenaltyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenaltyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penalties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penalties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penalties
    **/
    _count?: true | PenaltyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenaltyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenaltySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenaltyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenaltyMaxAggregateInputType
  }

  export type GetPenaltyAggregateType<T extends PenaltyAggregateArgs> = {
        [P in keyof T & keyof AggregatePenalty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenalty[P]>
      : GetScalarType<T[P], AggregatePenalty[P]>
  }




  export type PenaltyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenaltyWhereInput
    orderBy?: PenaltyOrderByWithAggregationInput | PenaltyOrderByWithAggregationInput[]
    by: PenaltyScalarFieldEnum[] | PenaltyScalarFieldEnum
    having?: PenaltyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenaltyCountAggregateInputType | true
    _avg?: PenaltyAvgAggregateInputType
    _sum?: PenaltySumAggregateInputType
    _min?: PenaltyMinAggregateInputType
    _max?: PenaltyMaxAggregateInputType
  }

  export type PenaltyGroupByOutputType = {
    id: number
    userId: number
    amount: string
    carId: number
    _count: PenaltyCountAggregateOutputType | null
    _avg: PenaltyAvgAggregateOutputType | null
    _sum: PenaltySumAggregateOutputType | null
    _min: PenaltyMinAggregateOutputType | null
    _max: PenaltyMaxAggregateOutputType | null
  }

  type GetPenaltyGroupByPayload<T extends PenaltyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenaltyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenaltyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenaltyGroupByOutputType[P]>
            : GetScalarType<T[P], PenaltyGroupByOutputType[P]>
        }
      >
    >


  export type PenaltySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    carId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penalty"]>

  export type PenaltySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    carId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penalty"]>

  export type PenaltySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    carId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penalty"]>

  export type PenaltySelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    carId?: boolean
  }

  export type PenaltyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "carId", ExtArgs["result"]["penalty"]>
  export type PenaltyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type PenaltyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type PenaltyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $PenaltyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penalty"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: string
      carId: number
    }, ExtArgs["result"]["penalty"]>
    composites: {}
  }

  type PenaltyGetPayload<S extends boolean | null | undefined | PenaltyDefaultArgs> = $Result.GetResult<Prisma.$PenaltyPayload, S>

  type PenaltyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenaltyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenaltyCountAggregateInputType | true
    }

  export interface PenaltyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penalty'], meta: { name: 'Penalty' } }
    /**
     * Find zero or one Penalty that matches the filter.
     * @param {PenaltyFindUniqueArgs} args - Arguments to find a Penalty
     * @example
     * // Get one Penalty
     * const penalty = await prisma.penalty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenaltyFindUniqueArgs>(args: SelectSubset<T, PenaltyFindUniqueArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penalty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenaltyFindUniqueOrThrowArgs} args - Arguments to find a Penalty
     * @example
     * // Get one Penalty
     * const penalty = await prisma.penalty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenaltyFindUniqueOrThrowArgs>(args: SelectSubset<T, PenaltyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penalty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenaltyFindFirstArgs} args - Arguments to find a Penalty
     * @example
     * // Get one Penalty
     * const penalty = await prisma.penalty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenaltyFindFirstArgs>(args?: SelectSubset<T, PenaltyFindFirstArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penalty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenaltyFindFirstOrThrowArgs} args - Arguments to find a Penalty
     * @example
     * // Get one Penalty
     * const penalty = await prisma.penalty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenaltyFindFirstOrThrowArgs>(args?: SelectSubset<T, PenaltyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penalties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenaltyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penalties
     * const penalties = await prisma.penalty.findMany()
     * 
     * // Get first 10 Penalties
     * const penalties = await prisma.penalty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penaltyWithIdOnly = await prisma.penalty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenaltyFindManyArgs>(args?: SelectSubset<T, PenaltyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penalty.
     * @param {PenaltyCreateArgs} args - Arguments to create a Penalty.
     * @example
     * // Create one Penalty
     * const Penalty = await prisma.penalty.create({
     *   data: {
     *     // ... data to create a Penalty
     *   }
     * })
     * 
     */
    create<T extends PenaltyCreateArgs>(args: SelectSubset<T, PenaltyCreateArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penalties.
     * @param {PenaltyCreateManyArgs} args - Arguments to create many Penalties.
     * @example
     * // Create many Penalties
     * const penalty = await prisma.penalty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenaltyCreateManyArgs>(args?: SelectSubset<T, PenaltyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penalties and returns the data saved in the database.
     * @param {PenaltyCreateManyAndReturnArgs} args - Arguments to create many Penalties.
     * @example
     * // Create many Penalties
     * const penalty = await prisma.penalty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penalties and only return the `id`
     * const penaltyWithIdOnly = await prisma.penalty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenaltyCreateManyAndReturnArgs>(args?: SelectSubset<T, PenaltyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Penalty.
     * @param {PenaltyDeleteArgs} args - Arguments to delete one Penalty.
     * @example
     * // Delete one Penalty
     * const Penalty = await prisma.penalty.delete({
     *   where: {
     *     // ... filter to delete one Penalty
     *   }
     * })
     * 
     */
    delete<T extends PenaltyDeleteArgs>(args: SelectSubset<T, PenaltyDeleteArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penalty.
     * @param {PenaltyUpdateArgs} args - Arguments to update one Penalty.
     * @example
     * // Update one Penalty
     * const penalty = await prisma.penalty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenaltyUpdateArgs>(args: SelectSubset<T, PenaltyUpdateArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penalties.
     * @param {PenaltyDeleteManyArgs} args - Arguments to filter Penalties to delete.
     * @example
     * // Delete a few Penalties
     * const { count } = await prisma.penalty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenaltyDeleteManyArgs>(args?: SelectSubset<T, PenaltyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penalties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenaltyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penalties
     * const penalty = await prisma.penalty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenaltyUpdateManyArgs>(args: SelectSubset<T, PenaltyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penalties and returns the data updated in the database.
     * @param {PenaltyUpdateManyAndReturnArgs} args - Arguments to update many Penalties.
     * @example
     * // Update many Penalties
     * const penalty = await prisma.penalty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penalties and only return the `id`
     * const penaltyWithIdOnly = await prisma.penalty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PenaltyUpdateManyAndReturnArgs>(args: SelectSubset<T, PenaltyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Penalty.
     * @param {PenaltyUpsertArgs} args - Arguments to update or create a Penalty.
     * @example
     * // Update or create a Penalty
     * const penalty = await prisma.penalty.upsert({
     *   create: {
     *     // ... data to create a Penalty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penalty we want to update
     *   }
     * })
     */
    upsert<T extends PenaltyUpsertArgs>(args: SelectSubset<T, PenaltyUpsertArgs<ExtArgs>>): Prisma__PenaltyClient<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penalties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenaltyCountArgs} args - Arguments to filter Penalties to count.
     * @example
     * // Count the number of Penalties
     * const count = await prisma.penalty.count({
     *   where: {
     *     // ... the filter for the Penalties we want to count
     *   }
     * })
    **/
    count<T extends PenaltyCountArgs>(
      args?: Subset<T, PenaltyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenaltyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penalty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenaltyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenaltyAggregateArgs>(args: Subset<T, PenaltyAggregateArgs>): Prisma.PrismaPromise<GetPenaltyAggregateType<T>>

    /**
     * Group by Penalty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenaltyGroupByArgs} args - Group by arguments.
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
      T extends PenaltyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenaltyGroupByArgs['orderBy'] }
        : { orderBy?: PenaltyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PenaltyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenaltyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penalty model
   */
  readonly fields: PenaltyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penalty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenaltyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Penalty model
   */
  interface PenaltyFieldRefs {
    readonly id: FieldRef<"Penalty", 'Int'>
    readonly userId: FieldRef<"Penalty", 'Int'>
    readonly amount: FieldRef<"Penalty", 'String'>
    readonly carId: FieldRef<"Penalty", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Penalty findUnique
   */
  export type PenaltyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * Filter, which Penalty to fetch.
     */
    where: PenaltyWhereUniqueInput
  }

  /**
   * Penalty findUniqueOrThrow
   */
  export type PenaltyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * Filter, which Penalty to fetch.
     */
    where: PenaltyWhereUniqueInput
  }

  /**
   * Penalty findFirst
   */
  export type PenaltyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * Filter, which Penalty to fetch.
     */
    where?: PenaltyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penalties to fetch.
     */
    orderBy?: PenaltyOrderByWithRelationInput | PenaltyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penalties.
     */
    cursor?: PenaltyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penalties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penalties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penalties.
     */
    distinct?: PenaltyScalarFieldEnum | PenaltyScalarFieldEnum[]
  }

  /**
   * Penalty findFirstOrThrow
   */
  export type PenaltyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * Filter, which Penalty to fetch.
     */
    where?: PenaltyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penalties to fetch.
     */
    orderBy?: PenaltyOrderByWithRelationInput | PenaltyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penalties.
     */
    cursor?: PenaltyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penalties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penalties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penalties.
     */
    distinct?: PenaltyScalarFieldEnum | PenaltyScalarFieldEnum[]
  }

  /**
   * Penalty findMany
   */
  export type PenaltyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * Filter, which Penalties to fetch.
     */
    where?: PenaltyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penalties to fetch.
     */
    orderBy?: PenaltyOrderByWithRelationInput | PenaltyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penalties.
     */
    cursor?: PenaltyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penalties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penalties.
     */
    skip?: number
    distinct?: PenaltyScalarFieldEnum | PenaltyScalarFieldEnum[]
  }

  /**
   * Penalty create
   */
  export type PenaltyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * The data needed to create a Penalty.
     */
    data: XOR<PenaltyCreateInput, PenaltyUncheckedCreateInput>
  }

  /**
   * Penalty createMany
   */
  export type PenaltyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penalties.
     */
    data: PenaltyCreateManyInput | PenaltyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penalty createManyAndReturn
   */
  export type PenaltyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * The data used to create many Penalties.
     */
    data: PenaltyCreateManyInput | PenaltyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penalty update
   */
  export type PenaltyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * The data needed to update a Penalty.
     */
    data: XOR<PenaltyUpdateInput, PenaltyUncheckedUpdateInput>
    /**
     * Choose, which Penalty to update.
     */
    where: PenaltyWhereUniqueInput
  }

  /**
   * Penalty updateMany
   */
  export type PenaltyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penalties.
     */
    data: XOR<PenaltyUpdateManyMutationInput, PenaltyUncheckedUpdateManyInput>
    /**
     * Filter which Penalties to update
     */
    where?: PenaltyWhereInput
    /**
     * Limit how many Penalties to update.
     */
    limit?: number
  }

  /**
   * Penalty updateManyAndReturn
   */
  export type PenaltyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * The data used to update Penalties.
     */
    data: XOR<PenaltyUpdateManyMutationInput, PenaltyUncheckedUpdateManyInput>
    /**
     * Filter which Penalties to update
     */
    where?: PenaltyWhereInput
    /**
     * Limit how many Penalties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penalty upsert
   */
  export type PenaltyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * The filter to search for the Penalty to update in case it exists.
     */
    where: PenaltyWhereUniqueInput
    /**
     * In case the Penalty found by the `where` argument doesn't exist, create a new Penalty with this data.
     */
    create: XOR<PenaltyCreateInput, PenaltyUncheckedCreateInput>
    /**
     * In case the Penalty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenaltyUpdateInput, PenaltyUncheckedUpdateInput>
  }

  /**
   * Penalty delete
   */
  export type PenaltyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    /**
     * Filter which Penalty to delete.
     */
    where: PenaltyWhereUniqueInput
  }

  /**
   * Penalty deleteMany
   */
  export type PenaltyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penalties to delete
     */
    where?: PenaltyWhereInput
    /**
     * Limit how many Penalties to delete.
     */
    limit?: number
  }

  /**
   * Penalty without action
   */
  export type PenaltyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    axleCount: number | null
    manCount: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    axleCount: number | null
    manCount: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    axleCount: number | null
    buildYear: string | null
    cabinNumber: string | null
    capacity: string | null
    className: string | null
    colorName: string | null
    countryName: string | null
    fuelType: string | null
    height: string | null
    importDate: Date | null
    length: string | null
    manCount: number | null
    markName: string | null
    mass: string | null
    modelName: string | null
    motorNumber: string | null
    ownerType: $Enums.OwnerType | null
    plateNumber: string | null
    type: string | null
    wheelPosition: $Enums.WheelPosition | null
    width: string | null
    location: string | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    axleCount: number | null
    buildYear: string | null
    cabinNumber: string | null
    capacity: string | null
    className: string | null
    colorName: string | null
    countryName: string | null
    fuelType: string | null
    height: string | null
    importDate: Date | null
    length: string | null
    manCount: number | null
    markName: string | null
    mass: string | null
    modelName: string | null
    motorNumber: string | null
    ownerType: $Enums.OwnerType | null
    plateNumber: string | null
    type: string | null
    wheelPosition: $Enums.WheelPosition | null
    width: string | null
    location: string | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    axleCount: number
    buildYear: number
    cabinNumber: number
    capacity: number
    className: number
    colorName: number
    countryName: number
    fuelType: number
    height: number
    importDate: number
    length: number
    manCount: number
    markName: number
    mass: number
    modelName: number
    motorNumber: number
    ownerType: number
    plateNumber: number
    type: number
    wheelPosition: number
    width: number
    location: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    axleCount?: true
    manCount?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    axleCount?: true
    manCount?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    axleCount?: true
    buildYear?: true
    cabinNumber?: true
    capacity?: true
    className?: true
    colorName?: true
    countryName?: true
    fuelType?: true
    height?: true
    importDate?: true
    length?: true
    manCount?: true
    markName?: true
    mass?: true
    modelName?: true
    motorNumber?: true
    ownerType?: true
    plateNumber?: true
    type?: true
    wheelPosition?: true
    width?: true
    location?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    axleCount?: true
    buildYear?: true
    cabinNumber?: true
    capacity?: true
    className?: true
    colorName?: true
    countryName?: true
    fuelType?: true
    height?: true
    importDate?: true
    length?: true
    manCount?: true
    markName?: true
    mass?: true
    modelName?: true
    motorNumber?: true
    ownerType?: true
    plateNumber?: true
    type?: true
    wheelPosition?: true
    width?: true
    location?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    axleCount?: true
    buildYear?: true
    cabinNumber?: true
    capacity?: true
    className?: true
    colorName?: true
    countryName?: true
    fuelType?: true
    height?: true
    importDate?: true
    length?: true
    manCount?: true
    markName?: true
    mass?: true
    modelName?: true
    motorNumber?: true
    ownerType?: true
    plateNumber?: true
    type?: true
    wheelPosition?: true
    width?: true
    location?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    axleCount?: boolean
    buildYear?: boolean
    cabinNumber?: boolean
    capacity?: boolean
    className?: boolean
    colorName?: boolean
    countryName?: boolean
    fuelType?: boolean
    height?: boolean
    importDate?: boolean
    length?: boolean
    manCount?: boolean
    markName?: boolean
    mass?: boolean
    modelName?: boolean
    motorNumber?: boolean
    ownerType?: boolean
    plateNumber?: boolean
    type?: boolean
    wheelPosition?: boolean
    width?: boolean
    location?: boolean
    penalties?: boolean | Car$penaltiesArgs<ExtArgs>
    transport?: boolean | Car$transportArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    axleCount?: boolean
    buildYear?: boolean
    cabinNumber?: boolean
    capacity?: boolean
    className?: boolean
    colorName?: boolean
    countryName?: boolean
    fuelType?: boolean
    height?: boolean
    importDate?: boolean
    length?: boolean
    manCount?: boolean
    markName?: boolean
    mass?: boolean
    modelName?: boolean
    motorNumber?: boolean
    ownerType?: boolean
    plateNumber?: boolean
    type?: boolean
    wheelPosition?: boolean
    width?: boolean
    location?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    axleCount?: boolean
    buildYear?: boolean
    cabinNumber?: boolean
    capacity?: boolean
    className?: boolean
    colorName?: boolean
    countryName?: boolean
    fuelType?: boolean
    height?: boolean
    importDate?: boolean
    length?: boolean
    manCount?: boolean
    markName?: boolean
    mass?: boolean
    modelName?: boolean
    motorNumber?: boolean
    ownerType?: boolean
    plateNumber?: boolean
    type?: boolean
    wheelPosition?: boolean
    width?: boolean
    location?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    axleCount?: boolean
    buildYear?: boolean
    cabinNumber?: boolean
    capacity?: boolean
    className?: boolean
    colorName?: boolean
    countryName?: boolean
    fuelType?: boolean
    height?: boolean
    importDate?: boolean
    length?: boolean
    manCount?: boolean
    markName?: boolean
    mass?: boolean
    modelName?: boolean
    motorNumber?: boolean
    ownerType?: boolean
    plateNumber?: boolean
    type?: boolean
    wheelPosition?: boolean
    width?: boolean
    location?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "axleCount" | "buildYear" | "cabinNumber" | "capacity" | "className" | "colorName" | "countryName" | "fuelType" | "height" | "importDate" | "length" | "manCount" | "markName" | "mass" | "modelName" | "motorNumber" | "ownerType" | "plateNumber" | "type" | "wheelPosition" | "width" | "location", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penalties?: boolean | Car$penaltiesArgs<ExtArgs>
    transport?: boolean | Car$transportArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      penalties: Prisma.$PenaltyPayload<ExtArgs>[]
      transport: Prisma.$TransportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      axleCount: number
      buildYear: string
      cabinNumber: string
      capacity: string
      className: string
      colorName: string
      countryName: string
      fuelType: string
      height: string
      importDate: Date
      length: string
      manCount: number
      markName: string
      mass: string
      modelName: string
      motorNumber: string
      ownerType: $Enums.OwnerType
      plateNumber: string
      type: string
      wheelPosition: $Enums.WheelPosition
      width: string
      location: string
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penalties<T extends Car$penaltiesArgs<ExtArgs> = {}>(args?: Subset<T, Car$penaltiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenaltyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transport<T extends Car$transportArgs<ExtArgs> = {}>(args?: Subset<T, Car$transportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly axleCount: FieldRef<"Car", 'Int'>
    readonly buildYear: FieldRef<"Car", 'String'>
    readonly cabinNumber: FieldRef<"Car", 'String'>
    readonly capacity: FieldRef<"Car", 'String'>
    readonly className: FieldRef<"Car", 'String'>
    readonly colorName: FieldRef<"Car", 'String'>
    readonly countryName: FieldRef<"Car", 'String'>
    readonly fuelType: FieldRef<"Car", 'String'>
    readonly height: FieldRef<"Car", 'String'>
    readonly importDate: FieldRef<"Car", 'DateTime'>
    readonly length: FieldRef<"Car", 'String'>
    readonly manCount: FieldRef<"Car", 'Int'>
    readonly markName: FieldRef<"Car", 'String'>
    readonly mass: FieldRef<"Car", 'String'>
    readonly modelName: FieldRef<"Car", 'String'>
    readonly motorNumber: FieldRef<"Car", 'String'>
    readonly ownerType: FieldRef<"Car", 'OwnerType'>
    readonly plateNumber: FieldRef<"Car", 'String'>
    readonly type: FieldRef<"Car", 'String'>
    readonly wheelPosition: FieldRef<"Car", 'WheelPosition'>
    readonly width: FieldRef<"Car", 'String'>
    readonly location: FieldRef<"Car", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.penalties
   */
  export type Car$penaltiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penalty
     */
    select?: PenaltySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penalty
     */
    omit?: PenaltyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenaltyInclude<ExtArgs> | null
    where?: PenaltyWhereInput
    orderBy?: PenaltyOrderByWithRelationInput | PenaltyOrderByWithRelationInput[]
    cursor?: PenaltyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenaltyScalarFieldEnum | PenaltyScalarFieldEnum[]
  }

  /**
   * Car.transport
   */
  export type Car$transportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    cursor?: TransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model Transport
   */

  export type AggregateTransport = {
    _count: TransportCountAggregateOutputType | null
    _avg: TransportAvgAggregateOutputType | null
    _sum: TransportSumAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  export type TransportAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    carId: number | null
  }

  export type TransportSumAggregateOutputType = {
    id: number | null
    userId: number | null
    carId: number | null
  }

  export type TransportMinAggregateOutputType = {
    id: number | null
    userId: number | null
    carId: number | null
    status: boolean | null
    destination: string | null
  }

  export type TransportMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    carId: number | null
    status: boolean | null
    destination: string | null
  }

  export type TransportCountAggregateOutputType = {
    id: number
    userId: number
    carId: number
    status: number
    destination: number
    _all: number
  }


  export type TransportAvgAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
  }

  export type TransportSumAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
  }

  export type TransportMinAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    status?: true
    destination?: true
  }

  export type TransportMaxAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    status?: true
    destination?: true
  }

  export type TransportCountAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    status?: true
    destination?: true
    _all?: true
  }

  export type TransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transport to aggregate.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transports
    **/
    _count?: true | TransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportMaxAggregateInputType
  }

  export type GetTransportAggregateType<T extends TransportAggregateArgs> = {
        [P in keyof T & keyof AggregateTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransport[P]>
      : GetScalarType<T[P], AggregateTransport[P]>
  }




  export type TransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithAggregationInput | TransportOrderByWithAggregationInput[]
    by: TransportScalarFieldEnum[] | TransportScalarFieldEnum
    having?: TransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportCountAggregateInputType | true
    _avg?: TransportAvgAggregateInputType
    _sum?: TransportSumAggregateInputType
    _min?: TransportMinAggregateInputType
    _max?: TransportMaxAggregateInputType
  }

  export type TransportGroupByOutputType = {
    id: number
    userId: number
    carId: number
    status: boolean
    destination: string
    _count: TransportCountAggregateOutputType | null
    _avg: TransportAvgAggregateOutputType | null
    _sum: TransportSumAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  type GetTransportGroupByPayload<T extends TransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportGroupByOutputType[P]>
            : GetScalarType<T[P], TransportGroupByOutputType[P]>
        }
      >
    >


  export type TransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    status?: boolean
    destination?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
    areas?: boolean | Transport$areasArgs<ExtArgs>
    notifications?: boolean | Transport$notificationsArgs<ExtArgs>
    _count?: boolean | TransportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    status?: boolean
    destination?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    status?: boolean
    destination?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectScalar = {
    id?: boolean
    userId?: boolean
    carId?: boolean
    status?: boolean
    destination?: boolean
  }

  export type TransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carId" | "status" | "destination", ExtArgs["result"]["transport"]>
  export type TransportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
    areas?: boolean | Transport$areasArgs<ExtArgs>
    notifications?: boolean | Transport$notificationsArgs<ExtArgs>
    _count?: boolean | TransportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type TransportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $TransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
      areas: Prisma.$AreaPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      carId: number
      status: boolean
      destination: string
    }, ExtArgs["result"]["transport"]>
    composites: {}
  }

  type TransportGetPayload<S extends boolean | null | undefined | TransportDefaultArgs> = $Result.GetResult<Prisma.$TransportPayload, S>

  type TransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportCountAggregateInputType | true
    }

  export interface TransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transport'], meta: { name: 'Transport' } }
    /**
     * Find zero or one Transport that matches the filter.
     * @param {TransportFindUniqueArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportFindUniqueArgs>(args: SelectSubset<T, TransportFindUniqueArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportFindUniqueOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportFindFirstArgs>(args?: SelectSubset<T, TransportFindFirstArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transports
     * const transports = await prisma.transport.findMany()
     * 
     * // Get first 10 Transports
     * const transports = await prisma.transport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportWithIdOnly = await prisma.transport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportFindManyArgs>(args?: SelectSubset<T, TransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transport.
     * @param {TransportCreateArgs} args - Arguments to create a Transport.
     * @example
     * // Create one Transport
     * const Transport = await prisma.transport.create({
     *   data: {
     *     // ... data to create a Transport
     *   }
     * })
     * 
     */
    create<T extends TransportCreateArgs>(args: SelectSubset<T, TransportCreateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transports.
     * @param {TransportCreateManyArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportCreateManyArgs>(args?: SelectSubset<T, TransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transports and returns the data saved in the database.
     * @param {TransportCreateManyAndReturnArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transport.
     * @param {TransportDeleteArgs} args - Arguments to delete one Transport.
     * @example
     * // Delete one Transport
     * const Transport = await prisma.transport.delete({
     *   where: {
     *     // ... filter to delete one Transport
     *   }
     * })
     * 
     */
    delete<T extends TransportDeleteArgs>(args: SelectSubset<T, TransportDeleteArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transport.
     * @param {TransportUpdateArgs} args - Arguments to update one Transport.
     * @example
     * // Update one Transport
     * const transport = await prisma.transport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportUpdateArgs>(args: SelectSubset<T, TransportUpdateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transports.
     * @param {TransportDeleteManyArgs} args - Arguments to filter Transports to delete.
     * @example
     * // Delete a few Transports
     * const { count } = await prisma.transport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportDeleteManyArgs>(args?: SelectSubset<T, TransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportUpdateManyArgs>(args: SelectSubset<T, TransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports and returns the data updated in the database.
     * @param {TransportUpdateManyAndReturnArgs} args - Arguments to update many Transports.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transport.
     * @param {TransportUpsertArgs} args - Arguments to update or create a Transport.
     * @example
     * // Update or create a Transport
     * const transport = await prisma.transport.upsert({
     *   create: {
     *     // ... data to create a Transport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transport we want to update
     *   }
     * })
     */
    upsert<T extends TransportUpsertArgs>(args: SelectSubset<T, TransportUpsertArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportCountArgs} args - Arguments to filter Transports to count.
     * @example
     * // Count the number of Transports
     * const count = await prisma.transport.count({
     *   where: {
     *     // ... the filter for the Transports we want to count
     *   }
     * })
    **/
    count<T extends TransportCountArgs>(
      args?: Subset<T, TransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransportAggregateArgs>(args: Subset<T, TransportAggregateArgs>): Prisma.PrismaPromise<GetTransportAggregateType<T>>

    /**
     * Group by Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportGroupByArgs} args - Group by arguments.
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
      T extends TransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportGroupByArgs['orderBy'] }
        : { orderBy?: TransportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transport model
   */
  readonly fields: TransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    areas<T extends Transport$areasArgs<ExtArgs> = {}>(args?: Subset<T, Transport$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Transport$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Transport$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transport model
   */
  interface TransportFieldRefs {
    readonly id: FieldRef<"Transport", 'Int'>
    readonly userId: FieldRef<"Transport", 'Int'>
    readonly carId: FieldRef<"Transport", 'Int'>
    readonly status: FieldRef<"Transport", 'Boolean'>
    readonly destination: FieldRef<"Transport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transport findUnique
   */
  export type TransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findUniqueOrThrow
   */
  export type TransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findFirst
   */
  export type TransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findFirstOrThrow
   */
  export type TransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findMany
   */
  export type TransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transports to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport create
   */
  export type TransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The data needed to create a Transport.
     */
    data: XOR<TransportCreateInput, TransportUncheckedCreateInput>
  }

  /**
   * Transport createMany
   */
  export type TransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transport createManyAndReturn
   */
  export type TransportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transport update
   */
  export type TransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The data needed to update a Transport.
     */
    data: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
    /**
     * Choose, which Transport to update.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport updateMany
   */
  export type TransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
  }

  /**
   * Transport updateManyAndReturn
   */
  export type TransportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transport upsert
   */
  export type TransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The filter to search for the Transport to update in case it exists.
     */
    where: TransportWhereUniqueInput
    /**
     * In case the Transport found by the `where` argument doesn't exist, create a new Transport with this data.
     */
    create: XOR<TransportCreateInput, TransportUncheckedCreateInput>
    /**
     * In case the Transport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
  }

  /**
   * Transport delete
   */
  export type TransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter which Transport to delete.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport deleteMany
   */
  export type TransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transports to delete
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to delete.
     */
    limit?: number
  }

  /**
   * Transport.areas
   */
  export type Transport$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Transport.notifications
   */
  export type Transport$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Transport without action
   */
  export type TransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
  }


  /**
   * Model CallCenter
   */

  export type AggregateCallCenter = {
    _count: CallCenterCountAggregateOutputType | null
    _avg: CallCenterAvgAggregateOutputType | null
    _sum: CallCenterSumAggregateOutputType | null
    _min: CallCenterMinAggregateOutputType | null
    _max: CallCenterMaxAggregateOutputType | null
  }

  export type CallCenterAvgAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type CallCenterSumAggregateOutputType = {
    id: number | null
    areaId: number | null
  }

  export type CallCenterMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    areaId: number | null
  }

  export type CallCenterMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    areaId: number | null
  }

  export type CallCenterCountAggregateOutputType = {
    id: number
    email: number
    password: number
    areaId: number
    _all: number
  }


  export type CallCenterAvgAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type CallCenterSumAggregateInputType = {
    id?: true
    areaId?: true
  }

  export type CallCenterMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    areaId?: true
  }

  export type CallCenterMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    areaId?: true
  }

  export type CallCenterCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    areaId?: true
    _all?: true
  }

  export type CallCenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallCenter to aggregate.
     */
    where?: CallCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallCenters to fetch.
     */
    orderBy?: CallCenterOrderByWithRelationInput | CallCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallCenters
    **/
    _count?: true | CallCenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallCenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallCenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallCenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallCenterMaxAggregateInputType
  }

  export type GetCallCenterAggregateType<T extends CallCenterAggregateArgs> = {
        [P in keyof T & keyof AggregateCallCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallCenter[P]>
      : GetScalarType<T[P], AggregateCallCenter[P]>
  }




  export type CallCenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallCenterWhereInput
    orderBy?: CallCenterOrderByWithAggregationInput | CallCenterOrderByWithAggregationInput[]
    by: CallCenterScalarFieldEnum[] | CallCenterScalarFieldEnum
    having?: CallCenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallCenterCountAggregateInputType | true
    _avg?: CallCenterAvgAggregateInputType
    _sum?: CallCenterSumAggregateInputType
    _min?: CallCenterMinAggregateInputType
    _max?: CallCenterMaxAggregateInputType
  }

  export type CallCenterGroupByOutputType = {
    id: number
    email: string
    password: string
    areaId: number
    _count: CallCenterCountAggregateOutputType | null
    _avg: CallCenterAvgAggregateOutputType | null
    _sum: CallCenterSumAggregateOutputType | null
    _min: CallCenterMinAggregateOutputType | null
    _max: CallCenterMaxAggregateOutputType | null
  }

  type GetCallCenterGroupByPayload<T extends CallCenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallCenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallCenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallCenterGroupByOutputType[P]>
            : GetScalarType<T[P], CallCenterGroupByOutputType[P]>
        }
      >
    >


  export type CallCenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    notifications?: boolean | CallCenter$notificationsArgs<ExtArgs>
    _count?: boolean | CallCenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callCenter"]>

  export type CallCenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callCenter"]>

  export type CallCenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callCenter"]>

  export type CallCenterSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    areaId?: boolean
  }

  export type CallCenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "areaId", ExtArgs["result"]["callCenter"]>
  export type CallCenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    notifications?: boolean | CallCenter$notificationsArgs<ExtArgs>
    _count?: boolean | CallCenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CallCenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type CallCenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $CallCenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallCenter"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      areaId: number
    }, ExtArgs["result"]["callCenter"]>
    composites: {}
  }

  type CallCenterGetPayload<S extends boolean | null | undefined | CallCenterDefaultArgs> = $Result.GetResult<Prisma.$CallCenterPayload, S>

  type CallCenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallCenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallCenterCountAggregateInputType | true
    }

  export interface CallCenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallCenter'], meta: { name: 'CallCenter' } }
    /**
     * Find zero or one CallCenter that matches the filter.
     * @param {CallCenterFindUniqueArgs} args - Arguments to find a CallCenter
     * @example
     * // Get one CallCenter
     * const callCenter = await prisma.callCenter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallCenterFindUniqueArgs>(args: SelectSubset<T, CallCenterFindUniqueArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CallCenter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallCenterFindUniqueOrThrowArgs} args - Arguments to find a CallCenter
     * @example
     * // Get one CallCenter
     * const callCenter = await prisma.callCenter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallCenterFindUniqueOrThrowArgs>(args: SelectSubset<T, CallCenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallCenter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCenterFindFirstArgs} args - Arguments to find a CallCenter
     * @example
     * // Get one CallCenter
     * const callCenter = await prisma.callCenter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallCenterFindFirstArgs>(args?: SelectSubset<T, CallCenterFindFirstArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallCenter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCenterFindFirstOrThrowArgs} args - Arguments to find a CallCenter
     * @example
     * // Get one CallCenter
     * const callCenter = await prisma.callCenter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallCenterFindFirstOrThrowArgs>(args?: SelectSubset<T, CallCenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CallCenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallCenters
     * const callCenters = await prisma.callCenter.findMany()
     * 
     * // Get first 10 CallCenters
     * const callCenters = await prisma.callCenter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callCenterWithIdOnly = await prisma.callCenter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallCenterFindManyArgs>(args?: SelectSubset<T, CallCenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CallCenter.
     * @param {CallCenterCreateArgs} args - Arguments to create a CallCenter.
     * @example
     * // Create one CallCenter
     * const CallCenter = await prisma.callCenter.create({
     *   data: {
     *     // ... data to create a CallCenter
     *   }
     * })
     * 
     */
    create<T extends CallCenterCreateArgs>(args: SelectSubset<T, CallCenterCreateArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CallCenters.
     * @param {CallCenterCreateManyArgs} args - Arguments to create many CallCenters.
     * @example
     * // Create many CallCenters
     * const callCenter = await prisma.callCenter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallCenterCreateManyArgs>(args?: SelectSubset<T, CallCenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CallCenters and returns the data saved in the database.
     * @param {CallCenterCreateManyAndReturnArgs} args - Arguments to create many CallCenters.
     * @example
     * // Create many CallCenters
     * const callCenter = await prisma.callCenter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CallCenters and only return the `id`
     * const callCenterWithIdOnly = await prisma.callCenter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallCenterCreateManyAndReturnArgs>(args?: SelectSubset<T, CallCenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CallCenter.
     * @param {CallCenterDeleteArgs} args - Arguments to delete one CallCenter.
     * @example
     * // Delete one CallCenter
     * const CallCenter = await prisma.callCenter.delete({
     *   where: {
     *     // ... filter to delete one CallCenter
     *   }
     * })
     * 
     */
    delete<T extends CallCenterDeleteArgs>(args: SelectSubset<T, CallCenterDeleteArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CallCenter.
     * @param {CallCenterUpdateArgs} args - Arguments to update one CallCenter.
     * @example
     * // Update one CallCenter
     * const callCenter = await prisma.callCenter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallCenterUpdateArgs>(args: SelectSubset<T, CallCenterUpdateArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CallCenters.
     * @param {CallCenterDeleteManyArgs} args - Arguments to filter CallCenters to delete.
     * @example
     * // Delete a few CallCenters
     * const { count } = await prisma.callCenter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallCenterDeleteManyArgs>(args?: SelectSubset<T, CallCenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallCenters
     * const callCenter = await prisma.callCenter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallCenterUpdateManyArgs>(args: SelectSubset<T, CallCenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallCenters and returns the data updated in the database.
     * @param {CallCenterUpdateManyAndReturnArgs} args - Arguments to update many CallCenters.
     * @example
     * // Update many CallCenters
     * const callCenter = await prisma.callCenter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CallCenters and only return the `id`
     * const callCenterWithIdOnly = await prisma.callCenter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CallCenterUpdateManyAndReturnArgs>(args: SelectSubset<T, CallCenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CallCenter.
     * @param {CallCenterUpsertArgs} args - Arguments to update or create a CallCenter.
     * @example
     * // Update or create a CallCenter
     * const callCenter = await prisma.callCenter.upsert({
     *   create: {
     *     // ... data to create a CallCenter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallCenter we want to update
     *   }
     * })
     */
    upsert<T extends CallCenterUpsertArgs>(args: SelectSubset<T, CallCenterUpsertArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CallCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCenterCountArgs} args - Arguments to filter CallCenters to count.
     * @example
     * // Count the number of CallCenters
     * const count = await prisma.callCenter.count({
     *   where: {
     *     // ... the filter for the CallCenters we want to count
     *   }
     * })
    **/
    count<T extends CallCenterCountArgs>(
      args?: Subset<T, CallCenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallCenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallCenterAggregateArgs>(args: Subset<T, CallCenterAggregateArgs>): Prisma.PrismaPromise<GetCallCenterAggregateType<T>>

    /**
     * Group by CallCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallCenterGroupByArgs} args - Group by arguments.
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
      T extends CallCenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallCenterGroupByArgs['orderBy'] }
        : { orderBy?: CallCenterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CallCenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallCenter model
   */
  readonly fields: CallCenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallCenter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallCenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends CallCenter$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, CallCenter$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CallCenter model
   */
  interface CallCenterFieldRefs {
    readonly id: FieldRef<"CallCenter", 'Int'>
    readonly email: FieldRef<"CallCenter", 'String'>
    readonly password: FieldRef<"CallCenter", 'String'>
    readonly areaId: FieldRef<"CallCenter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CallCenter findUnique
   */
  export type CallCenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * Filter, which CallCenter to fetch.
     */
    where: CallCenterWhereUniqueInput
  }

  /**
   * CallCenter findUniqueOrThrow
   */
  export type CallCenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * Filter, which CallCenter to fetch.
     */
    where: CallCenterWhereUniqueInput
  }

  /**
   * CallCenter findFirst
   */
  export type CallCenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * Filter, which CallCenter to fetch.
     */
    where?: CallCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallCenters to fetch.
     */
    orderBy?: CallCenterOrderByWithRelationInput | CallCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallCenters.
     */
    cursor?: CallCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallCenters.
     */
    distinct?: CallCenterScalarFieldEnum | CallCenterScalarFieldEnum[]
  }

  /**
   * CallCenter findFirstOrThrow
   */
  export type CallCenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * Filter, which CallCenter to fetch.
     */
    where?: CallCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallCenters to fetch.
     */
    orderBy?: CallCenterOrderByWithRelationInput | CallCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallCenters.
     */
    cursor?: CallCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallCenters.
     */
    distinct?: CallCenterScalarFieldEnum | CallCenterScalarFieldEnum[]
  }

  /**
   * CallCenter findMany
   */
  export type CallCenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * Filter, which CallCenters to fetch.
     */
    where?: CallCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallCenters to fetch.
     */
    orderBy?: CallCenterOrderByWithRelationInput | CallCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallCenters.
     */
    cursor?: CallCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallCenters.
     */
    skip?: number
    distinct?: CallCenterScalarFieldEnum | CallCenterScalarFieldEnum[]
  }

  /**
   * CallCenter create
   */
  export type CallCenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * The data needed to create a CallCenter.
     */
    data: XOR<CallCenterCreateInput, CallCenterUncheckedCreateInput>
  }

  /**
   * CallCenter createMany
   */
  export type CallCenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallCenters.
     */
    data: CallCenterCreateManyInput | CallCenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallCenter createManyAndReturn
   */
  export type CallCenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * The data used to create many CallCenters.
     */
    data: CallCenterCreateManyInput | CallCenterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallCenter update
   */
  export type CallCenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * The data needed to update a CallCenter.
     */
    data: XOR<CallCenterUpdateInput, CallCenterUncheckedUpdateInput>
    /**
     * Choose, which CallCenter to update.
     */
    where: CallCenterWhereUniqueInput
  }

  /**
   * CallCenter updateMany
   */
  export type CallCenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallCenters.
     */
    data: XOR<CallCenterUpdateManyMutationInput, CallCenterUncheckedUpdateManyInput>
    /**
     * Filter which CallCenters to update
     */
    where?: CallCenterWhereInput
    /**
     * Limit how many CallCenters to update.
     */
    limit?: number
  }

  /**
   * CallCenter updateManyAndReturn
   */
  export type CallCenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * The data used to update CallCenters.
     */
    data: XOR<CallCenterUpdateManyMutationInput, CallCenterUncheckedUpdateManyInput>
    /**
     * Filter which CallCenters to update
     */
    where?: CallCenterWhereInput
    /**
     * Limit how many CallCenters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallCenter upsert
   */
  export type CallCenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * The filter to search for the CallCenter to update in case it exists.
     */
    where: CallCenterWhereUniqueInput
    /**
     * In case the CallCenter found by the `where` argument doesn't exist, create a new CallCenter with this data.
     */
    create: XOR<CallCenterCreateInput, CallCenterUncheckedCreateInput>
    /**
     * In case the CallCenter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallCenterUpdateInput, CallCenterUncheckedUpdateInput>
  }

  /**
   * CallCenter delete
   */
  export type CallCenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    /**
     * Filter which CallCenter to delete.
     */
    where: CallCenterWhereUniqueInput
  }

  /**
   * CallCenter deleteMany
   */
  export type CallCenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallCenters to delete
     */
    where?: CallCenterWhereInput
    /**
     * Limit how many CallCenters to delete.
     */
    limit?: number
  }

  /**
   * CallCenter.notifications
   */
  export type CallCenter$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * CallCenter without action
   */
  export type CallCenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    id: number | null
  }

  export type AreaSumAggregateOutputType = {
    id: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: number | null
  }

  export type AreaMaxAggregateOutputType = {
    id: number | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    area: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    id?: true
  }

  export type AreaSumAggregateInputType = {
    id?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    area?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: number
    area: JsonValue
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
    transports?: boolean | Area$transportsArgs<ExtArgs>
    callCenters?: boolean | Area$callCentersArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    area?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "area", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transports?: boolean | Area$transportsArgs<ExtArgs>
    callCenters?: boolean | Area$callCentersArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      transports: Prisma.$TransportPayload<ExtArgs>[]
      callCenters: Prisma.$CallCenterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      area: Prisma.JsonValue
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
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
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transports<T extends Area$transportsArgs<ExtArgs> = {}>(args?: Subset<T, Area$transportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    callCenters<T extends Area$callCentersArgs<ExtArgs> = {}>(args?: Subset<T, Area$callCentersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'Int'>
    readonly area: FieldRef<"Area", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.transports
   */
  export type Area$transportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    cursor?: TransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Area.callCenters
   */
  export type Area$callCentersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallCenter
     */
    select?: CallCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallCenter
     */
    omit?: CallCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallCenterInclude<ExtArgs> | null
    where?: CallCenterWhereInput
    orderBy?: CallCenterOrderByWithRelationInput | CallCenterOrderByWithRelationInput[]
    cursor?: CallCenterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallCenterScalarFieldEnum | CallCenterScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    transportId: number | null
    callCenterId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    transportId: number | null
    callCenterId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    transportId: number | null
    callCenterId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    transportId: number | null
    callCenterId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    transportId: number
    callCenterId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    transportId?: true
    callCenterId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    transportId?: true
    callCenterId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    transportId?: true
    callCenterId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    transportId?: true
    callCenterId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    transportId?: true
    callCenterId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    transportId: number
    callCenterId: number
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportId?: boolean
    callCenterId?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    callCenter?: boolean | CallCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportId?: boolean
    callCenterId?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    callCenter?: boolean | CallCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportId?: boolean
    callCenterId?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    callCenter?: boolean | CallCenterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    transportId?: boolean
    callCenterId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transportId" | "callCenterId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    callCenter?: boolean | CallCenterDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    callCenter?: boolean | CallCenterDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    callCenter?: boolean | CallCenterDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      transport: Prisma.$TransportPayload<ExtArgs>
      callCenter: Prisma.$CallCenterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transportId: number
      callCenterId: number
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transport<T extends TransportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransportDefaultArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    callCenter<T extends CallCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CallCenterDefaultArgs<ExtArgs>>): Prisma__CallCenterClient<$Result.GetResult<Prisma.$CallCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly transportId: FieldRef<"Notification", 'Int'>
    readonly callCenterId: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    register: 'register',
    location: 'location'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PermissionNotificationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    userId: 'userId'
  };

  export type PermissionNotificationScalarFieldEnum = (typeof PermissionNotificationScalarFieldEnum)[keyof typeof PermissionNotificationScalarFieldEnum]


  export const PenaltyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    carId: 'carId'
  };

  export type PenaltyScalarFieldEnum = (typeof PenaltyScalarFieldEnum)[keyof typeof PenaltyScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    axleCount: 'axleCount',
    buildYear: 'buildYear',
    cabinNumber: 'cabinNumber',
    capacity: 'capacity',
    className: 'className',
    colorName: 'colorName',
    countryName: 'countryName',
    fuelType: 'fuelType',
    height: 'height',
    importDate: 'importDate',
    length: 'length',
    manCount: 'manCount',
    markName: 'markName',
    mass: 'mass',
    modelName: 'modelName',
    motorNumber: 'motorNumber',
    ownerType: 'ownerType',
    plateNumber: 'plateNumber',
    type: 'type',
    wheelPosition: 'wheelPosition',
    width: 'width',
    location: 'location'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const TransportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    status: 'status',
    destination: 'destination'
  };

  export type TransportScalarFieldEnum = (typeof TransportScalarFieldEnum)[keyof typeof TransportScalarFieldEnum]


  export const CallCenterScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    areaId: 'areaId'
  };

  export type CallCenterScalarFieldEnum = (typeof CallCenterScalarFieldEnum)[keyof typeof CallCenterScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    area: 'area'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    transportId: 'transportId',
    callCenterId: 'callCenterId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OwnerType'
   */
  export type EnumOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerType'>
    


  /**
   * Reference to a field of type 'OwnerType[]'
   */
  export type ListEnumOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerType[]'>
    


  /**
   * Reference to a field of type 'WheelPosition'
   */
  export type EnumWheelPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WheelPosition'>
    


  /**
   * Reference to a field of type 'WheelPosition[]'
   */
  export type ListEnumWheelPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WheelPosition[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    register?: StringFilter<"User"> | string
    location?: StringFilter<"User"> | string
    penalty?: PenaltyListRelationFilter
    transport?: TransportListRelationFilter
    notifications?: PermissionNotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    register?: SortOrder
    location?: SortOrder
    penalty?: PenaltyOrderByRelationAggregateInput
    transport?: TransportOrderByRelationAggregateInput
    notifications?: PermissionNotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    register?: StringFilter<"User"> | string
    location?: StringFilter<"User"> | string
    penalty?: PenaltyListRelationFilter
    transport?: TransportListRelationFilter
    notifications?: PermissionNotificationListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    register?: SortOrder
    location?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    register?: StringWithAggregatesFilter<"User"> | string
    location?: StringWithAggregatesFilter<"User"> | string
  }

  export type PermissionNotificationWhereInput = {
    AND?: PermissionNotificationWhereInput | PermissionNotificationWhereInput[]
    OR?: PermissionNotificationWhereInput[]
    NOT?: PermissionNotificationWhereInput | PermissionNotificationWhereInput[]
    id?: IntFilter<"PermissionNotification"> | number
    message?: StringFilter<"PermissionNotification"> | string
    userId?: IntFilter<"PermissionNotification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PermissionNotificationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PermissionNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissionNotificationWhereInput | PermissionNotificationWhereInput[]
    OR?: PermissionNotificationWhereInput[]
    NOT?: PermissionNotificationWhereInput | PermissionNotificationWhereInput[]
    message?: StringFilter<"PermissionNotification"> | string
    userId?: IntFilter<"PermissionNotification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PermissionNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    _count?: PermissionNotificationCountOrderByAggregateInput
    _avg?: PermissionNotificationAvgOrderByAggregateInput
    _max?: PermissionNotificationMaxOrderByAggregateInput
    _min?: PermissionNotificationMinOrderByAggregateInput
    _sum?: PermissionNotificationSumOrderByAggregateInput
  }

  export type PermissionNotificationScalarWhereWithAggregatesInput = {
    AND?: PermissionNotificationScalarWhereWithAggregatesInput | PermissionNotificationScalarWhereWithAggregatesInput[]
    OR?: PermissionNotificationScalarWhereWithAggregatesInput[]
    NOT?: PermissionNotificationScalarWhereWithAggregatesInput | PermissionNotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PermissionNotification"> | number
    message?: StringWithAggregatesFilter<"PermissionNotification"> | string
    userId?: IntWithAggregatesFilter<"PermissionNotification"> | number
  }

  export type PenaltyWhereInput = {
    AND?: PenaltyWhereInput | PenaltyWhereInput[]
    OR?: PenaltyWhereInput[]
    NOT?: PenaltyWhereInput | PenaltyWhereInput[]
    id?: IntFilter<"Penalty"> | number
    userId?: IntFilter<"Penalty"> | number
    amount?: StringFilter<"Penalty"> | string
    carId?: IntFilter<"Penalty"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type PenaltyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    carId?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type PenaltyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PenaltyWhereInput | PenaltyWhereInput[]
    OR?: PenaltyWhereInput[]
    NOT?: PenaltyWhereInput | PenaltyWhereInput[]
    userId?: IntFilter<"Penalty"> | number
    amount?: StringFilter<"Penalty"> | string
    carId?: IntFilter<"Penalty"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type PenaltyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    carId?: SortOrder
    _count?: PenaltyCountOrderByAggregateInput
    _avg?: PenaltyAvgOrderByAggregateInput
    _max?: PenaltyMaxOrderByAggregateInput
    _min?: PenaltyMinOrderByAggregateInput
    _sum?: PenaltySumOrderByAggregateInput
  }

  export type PenaltyScalarWhereWithAggregatesInput = {
    AND?: PenaltyScalarWhereWithAggregatesInput | PenaltyScalarWhereWithAggregatesInput[]
    OR?: PenaltyScalarWhereWithAggregatesInput[]
    NOT?: PenaltyScalarWhereWithAggregatesInput | PenaltyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Penalty"> | number
    userId?: IntWithAggregatesFilter<"Penalty"> | number
    amount?: StringWithAggregatesFilter<"Penalty"> | string
    carId?: IntWithAggregatesFilter<"Penalty"> | number
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    axleCount?: IntFilter<"Car"> | number
    buildYear?: StringFilter<"Car"> | string
    cabinNumber?: StringFilter<"Car"> | string
    capacity?: StringFilter<"Car"> | string
    className?: StringFilter<"Car"> | string
    colorName?: StringFilter<"Car"> | string
    countryName?: StringFilter<"Car"> | string
    fuelType?: StringFilter<"Car"> | string
    height?: StringFilter<"Car"> | string
    importDate?: DateTimeFilter<"Car"> | Date | string
    length?: StringFilter<"Car"> | string
    manCount?: IntFilter<"Car"> | number
    markName?: StringFilter<"Car"> | string
    mass?: StringFilter<"Car"> | string
    modelName?: StringFilter<"Car"> | string
    motorNumber?: StringFilter<"Car"> | string
    ownerType?: EnumOwnerTypeFilter<"Car"> | $Enums.OwnerType
    plateNumber?: StringFilter<"Car"> | string
    type?: StringFilter<"Car"> | string
    wheelPosition?: EnumWheelPositionFilter<"Car"> | $Enums.WheelPosition
    width?: StringFilter<"Car"> | string
    location?: StringFilter<"Car"> | string
    penalties?: PenaltyListRelationFilter
    transport?: TransportListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    axleCount?: SortOrder
    buildYear?: SortOrder
    cabinNumber?: SortOrder
    capacity?: SortOrder
    className?: SortOrder
    colorName?: SortOrder
    countryName?: SortOrder
    fuelType?: SortOrder
    height?: SortOrder
    importDate?: SortOrder
    length?: SortOrder
    manCount?: SortOrder
    markName?: SortOrder
    mass?: SortOrder
    modelName?: SortOrder
    motorNumber?: SortOrder
    ownerType?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    wheelPosition?: SortOrder
    width?: SortOrder
    location?: SortOrder
    penalties?: PenaltyOrderByRelationAggregateInput
    transport?: TransportOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cabinNumber?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    axleCount?: IntFilter<"Car"> | number
    buildYear?: StringFilter<"Car"> | string
    capacity?: StringFilter<"Car"> | string
    className?: StringFilter<"Car"> | string
    colorName?: StringFilter<"Car"> | string
    countryName?: StringFilter<"Car"> | string
    fuelType?: StringFilter<"Car"> | string
    height?: StringFilter<"Car"> | string
    importDate?: DateTimeFilter<"Car"> | Date | string
    length?: StringFilter<"Car"> | string
    manCount?: IntFilter<"Car"> | number
    markName?: StringFilter<"Car"> | string
    mass?: StringFilter<"Car"> | string
    modelName?: StringFilter<"Car"> | string
    motorNumber?: StringFilter<"Car"> | string
    ownerType?: EnumOwnerTypeFilter<"Car"> | $Enums.OwnerType
    plateNumber?: StringFilter<"Car"> | string
    type?: StringFilter<"Car"> | string
    wheelPosition?: EnumWheelPositionFilter<"Car"> | $Enums.WheelPosition
    width?: StringFilter<"Car"> | string
    location?: StringFilter<"Car"> | string
    penalties?: PenaltyListRelationFilter
    transport?: TransportListRelationFilter
  }, "id" | "cabinNumber">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    axleCount?: SortOrder
    buildYear?: SortOrder
    cabinNumber?: SortOrder
    capacity?: SortOrder
    className?: SortOrder
    colorName?: SortOrder
    countryName?: SortOrder
    fuelType?: SortOrder
    height?: SortOrder
    importDate?: SortOrder
    length?: SortOrder
    manCount?: SortOrder
    markName?: SortOrder
    mass?: SortOrder
    modelName?: SortOrder
    motorNumber?: SortOrder
    ownerType?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    wheelPosition?: SortOrder
    width?: SortOrder
    location?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    axleCount?: IntWithAggregatesFilter<"Car"> | number
    buildYear?: StringWithAggregatesFilter<"Car"> | string
    cabinNumber?: StringWithAggregatesFilter<"Car"> | string
    capacity?: StringWithAggregatesFilter<"Car"> | string
    className?: StringWithAggregatesFilter<"Car"> | string
    colorName?: StringWithAggregatesFilter<"Car"> | string
    countryName?: StringWithAggregatesFilter<"Car"> | string
    fuelType?: StringWithAggregatesFilter<"Car"> | string
    height?: StringWithAggregatesFilter<"Car"> | string
    importDate?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    length?: StringWithAggregatesFilter<"Car"> | string
    manCount?: IntWithAggregatesFilter<"Car"> | number
    markName?: StringWithAggregatesFilter<"Car"> | string
    mass?: StringWithAggregatesFilter<"Car"> | string
    modelName?: StringWithAggregatesFilter<"Car"> | string
    motorNumber?: StringWithAggregatesFilter<"Car"> | string
    ownerType?: EnumOwnerTypeWithAggregatesFilter<"Car"> | $Enums.OwnerType
    plateNumber?: StringWithAggregatesFilter<"Car"> | string
    type?: StringWithAggregatesFilter<"Car"> | string
    wheelPosition?: EnumWheelPositionWithAggregatesFilter<"Car"> | $Enums.WheelPosition
    width?: StringWithAggregatesFilter<"Car"> | string
    location?: StringWithAggregatesFilter<"Car"> | string
  }

  export type TransportWhereInput = {
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    id?: IntFilter<"Transport"> | number
    userId?: IntFilter<"Transport"> | number
    carId?: IntFilter<"Transport"> | number
    status?: BoolFilter<"Transport"> | boolean
    destination?: StringFilter<"Transport"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    areas?: AreaListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type TransportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    destination?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
    areas?: AreaOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type TransportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    userId?: IntFilter<"Transport"> | number
    carId?: IntFilter<"Transport"> | number
    status?: BoolFilter<"Transport"> | boolean
    destination?: StringFilter<"Transport"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    areas?: AreaListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type TransportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    destination?: SortOrder
    _count?: TransportCountOrderByAggregateInput
    _avg?: TransportAvgOrderByAggregateInput
    _max?: TransportMaxOrderByAggregateInput
    _min?: TransportMinOrderByAggregateInput
    _sum?: TransportSumOrderByAggregateInput
  }

  export type TransportScalarWhereWithAggregatesInput = {
    AND?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    OR?: TransportScalarWhereWithAggregatesInput[]
    NOT?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transport"> | number
    userId?: IntWithAggregatesFilter<"Transport"> | number
    carId?: IntWithAggregatesFilter<"Transport"> | number
    status?: BoolWithAggregatesFilter<"Transport"> | boolean
    destination?: StringWithAggregatesFilter<"Transport"> | string
  }

  export type CallCenterWhereInput = {
    AND?: CallCenterWhereInput | CallCenterWhereInput[]
    OR?: CallCenterWhereInput[]
    NOT?: CallCenterWhereInput | CallCenterWhereInput[]
    id?: IntFilter<"CallCenter"> | number
    email?: StringFilter<"CallCenter"> | string
    password?: StringFilter<"CallCenter"> | string
    areaId?: IntFilter<"CallCenter"> | number
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    notifications?: NotificationListRelationFilter
  }

  export type CallCenterOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaId?: SortOrder
    area?: AreaOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type CallCenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CallCenterWhereInput | CallCenterWhereInput[]
    OR?: CallCenterWhereInput[]
    NOT?: CallCenterWhereInput | CallCenterWhereInput[]
    email?: StringFilter<"CallCenter"> | string
    password?: StringFilter<"CallCenter"> | string
    areaId?: IntFilter<"CallCenter"> | number
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    notifications?: NotificationListRelationFilter
  }, "id">

  export type CallCenterOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaId?: SortOrder
    _count?: CallCenterCountOrderByAggregateInput
    _avg?: CallCenterAvgOrderByAggregateInput
    _max?: CallCenterMaxOrderByAggregateInput
    _min?: CallCenterMinOrderByAggregateInput
    _sum?: CallCenterSumOrderByAggregateInput
  }

  export type CallCenterScalarWhereWithAggregatesInput = {
    AND?: CallCenterScalarWhereWithAggregatesInput | CallCenterScalarWhereWithAggregatesInput[]
    OR?: CallCenterScalarWhereWithAggregatesInput[]
    NOT?: CallCenterScalarWhereWithAggregatesInput | CallCenterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CallCenter"> | number
    email?: StringWithAggregatesFilter<"CallCenter"> | string
    password?: StringWithAggregatesFilter<"CallCenter"> | string
    areaId?: IntWithAggregatesFilter<"CallCenter"> | number
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: IntFilter<"Area"> | number
    area?: JsonFilter<"Area">
    transports?: TransportListRelationFilter
    callCenters?: CallCenterListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    area?: SortOrder
    transports?: TransportOrderByRelationAggregateInput
    callCenters?: CallCenterOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    area?: JsonFilter<"Area">
    transports?: TransportListRelationFilter
    callCenters?: CallCenterListRelationFilter
  }, "id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    area?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Area"> | number
    area?: JsonWithAggregatesFilter<"Area">
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    transportId?: IntFilter<"Notification"> | number
    callCenterId?: IntFilter<"Notification"> | number
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
    callCenter?: XOR<CallCenterScalarRelationFilter, CallCenterWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    transportId?: SortOrder
    callCenterId?: SortOrder
    transport?: TransportOrderByWithRelationInput
    callCenter?: CallCenterOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    transportId?: IntFilter<"Notification"> | number
    callCenterId?: IntFilter<"Notification"> | number
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
    callCenter?: XOR<CallCenterScalarRelationFilter, CallCenterWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    transportId?: SortOrder
    callCenterId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    transportId?: IntWithAggregatesFilter<"Notification"> | number
    callCenterId?: IntWithAggregatesFilter<"Notification"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    register: string
    location: string
    penalty?: PenaltyCreateNestedManyWithoutUserInput
    transport?: TransportCreateNestedManyWithoutUserInput
    notifications?: PermissionNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    register: string
    location: string
    penalty?: PenaltyUncheckedCreateNestedManyWithoutUserInput
    transport?: TransportUncheckedCreateNestedManyWithoutUserInput
    notifications?: PermissionNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalty?: PenaltyUpdateManyWithoutUserNestedInput
    transport?: TransportUpdateManyWithoutUserNestedInput
    notifications?: PermissionNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalty?: PenaltyUncheckedUpdateManyWithoutUserNestedInput
    transport?: TransportUncheckedUpdateManyWithoutUserNestedInput
    notifications?: PermissionNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    register: string
    location: string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionNotificationCreateInput = {
    message: string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type PermissionNotificationUncheckedCreateInput = {
    id?: number
    message: string
    userId: number
  }

  export type PermissionNotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type PermissionNotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionNotificationCreateManyInput = {
    id?: number
    message: string
    userId: number
  }

  export type PermissionNotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionNotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PenaltyCreateInput = {
    amount: string
    user: UserCreateNestedOneWithoutPenaltyInput
    car: CarCreateNestedOneWithoutPenaltiesInput
  }

  export type PenaltyUncheckedCreateInput = {
    id?: number
    userId: number
    amount: string
    carId: number
  }

  export type PenaltyUpdateInput = {
    amount?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPenaltyNestedInput
    car?: CarUpdateOneRequiredWithoutPenaltiesNestedInput
  }

  export type PenaltyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type PenaltyCreateManyInput = {
    id?: number
    userId: number
    amount: string
    carId: number
  }

  export type PenaltyUpdateManyMutationInput = {
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type PenaltyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type CarCreateInput = {
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date | string
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
    penalties?: PenaltyCreateNestedManyWithoutCarInput
    transport?: TransportCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date | string
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
    penalties?: PenaltyUncheckedCreateNestedManyWithoutCarInput
    transport?: TransportUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalties?: PenaltyUpdateManyWithoutCarNestedInput
    transport?: TransportUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalties?: PenaltyUncheckedUpdateManyWithoutCarNestedInput
    transport?: TransportUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date | string
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
  }

  export type CarUpdateManyMutationInput = {
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TransportCreateInput = {
    status?: boolean
    destination: string
    user: UserCreateNestedOneWithoutTransportInput
    car: CarCreateNestedOneWithoutTransportInput
    areas?: AreaCreateNestedManyWithoutTransportsInput
    notifications?: NotificationCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateInput = {
    id?: number
    userId: number
    carId: number
    status?: boolean
    destination: string
    areas?: AreaUncheckedCreateNestedManyWithoutTransportsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportUpdateInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTransportNestedInput
    car?: CarUpdateOneRequiredWithoutTransportNestedInput
    areas?: AreaUpdateManyWithoutTransportsNestedInput
    notifications?: NotificationUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutTransportsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportCreateManyInput = {
    id?: number
    userId: number
    carId: number
    status?: boolean
    destination: string
  }

  export type TransportUpdateManyMutationInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type TransportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type CallCenterCreateInput = {
    email: string
    password: string
    area: AreaCreateNestedOneWithoutCallCentersInput
    notifications?: NotificationCreateNestedManyWithoutCallCenterInput
  }

  export type CallCenterUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    areaId: number
    notifications?: NotificationUncheckedCreateNestedManyWithoutCallCenterInput
  }

  export type CallCenterUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutCallCentersNestedInput
    notifications?: NotificationUpdateManyWithoutCallCenterNestedInput
  }

  export type CallCenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
    notifications?: NotificationUncheckedUpdateManyWithoutCallCenterNestedInput
  }

  export type CallCenterCreateManyInput = {
    id?: number
    email: string
    password: string
    areaId: number
  }

  export type CallCenterUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CallCenterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type AreaCreateInput = {
    area: JsonNullValueInput | InputJsonValue
    transports?: TransportCreateNestedManyWithoutAreasInput
    callCenters?: CallCenterCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    transports?: TransportUncheckedCreateNestedManyWithoutAreasInput
    callCenters?: CallCenterUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    area?: JsonNullValueInput | InputJsonValue
    transports?: TransportUpdateManyWithoutAreasNestedInput
    callCenters?: CallCenterUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    transports?: TransportUncheckedUpdateManyWithoutAreasNestedInput
    callCenters?: CallCenterUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
  }

  export type AreaUpdateManyMutationInput = {
    area?: JsonNullValueInput | InputJsonValue
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
  }

  export type NotificationCreateInput = {
    transport: TransportCreateNestedOneWithoutNotificationsInput
    callCenter: CallCenterCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    transportId: number
    callCenterId: number
  }

  export type NotificationUpdateInput = {
    transport?: TransportUpdateOneRequiredWithoutNotificationsNestedInput
    callCenter?: CallCenterUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
    callCenterId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateManyInput = {
    id?: number
    transportId: number
    callCenterId: number
  }

  export type NotificationUpdateManyMutationInput = {

  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
    callCenterId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PenaltyListRelationFilter = {
    every?: PenaltyWhereInput
    some?: PenaltyWhereInput
    none?: PenaltyWhereInput
  }

  export type TransportListRelationFilter = {
    every?: TransportWhereInput
    some?: TransportWhereInput
    none?: TransportWhereInput
  }

  export type PermissionNotificationListRelationFilter = {
    every?: PermissionNotificationWhereInput
    some?: PermissionNotificationWhereInput
    none?: PermissionNotificationWhereInput
  }

  export type PenaltyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    register?: SortOrder
    location?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    register?: SortOrder
    location?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    register?: SortOrder
    location?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PermissionNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type PermissionNotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PermissionNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type PermissionNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    userId?: SortOrder
  }

  export type PermissionNotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type PenaltyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    carId?: SortOrder
  }

  export type PenaltyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
  }

  export type PenaltyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    carId?: SortOrder
  }

  export type PenaltyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    carId?: SortOrder
  }

  export type PenaltySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerTypeFilter<$PrismaModel> | $Enums.OwnerType
  }

  export type EnumWheelPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.WheelPosition | EnumWheelPositionFieldRefInput<$PrismaModel>
    in?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumWheelPositionFilter<$PrismaModel> | $Enums.WheelPosition
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    axleCount?: SortOrder
    buildYear?: SortOrder
    cabinNumber?: SortOrder
    capacity?: SortOrder
    className?: SortOrder
    colorName?: SortOrder
    countryName?: SortOrder
    fuelType?: SortOrder
    height?: SortOrder
    importDate?: SortOrder
    length?: SortOrder
    manCount?: SortOrder
    markName?: SortOrder
    mass?: SortOrder
    modelName?: SortOrder
    motorNumber?: SortOrder
    ownerType?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    wheelPosition?: SortOrder
    width?: SortOrder
    location?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    axleCount?: SortOrder
    manCount?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    axleCount?: SortOrder
    buildYear?: SortOrder
    cabinNumber?: SortOrder
    capacity?: SortOrder
    className?: SortOrder
    colorName?: SortOrder
    countryName?: SortOrder
    fuelType?: SortOrder
    height?: SortOrder
    importDate?: SortOrder
    length?: SortOrder
    manCount?: SortOrder
    markName?: SortOrder
    mass?: SortOrder
    modelName?: SortOrder
    motorNumber?: SortOrder
    ownerType?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    wheelPosition?: SortOrder
    width?: SortOrder
    location?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    axleCount?: SortOrder
    buildYear?: SortOrder
    cabinNumber?: SortOrder
    capacity?: SortOrder
    className?: SortOrder
    colorName?: SortOrder
    countryName?: SortOrder
    fuelType?: SortOrder
    height?: SortOrder
    importDate?: SortOrder
    length?: SortOrder
    manCount?: SortOrder
    markName?: SortOrder
    mass?: SortOrder
    modelName?: SortOrder
    motorNumber?: SortOrder
    ownerType?: SortOrder
    plateNumber?: SortOrder
    type?: SortOrder
    wheelPosition?: SortOrder
    width?: SortOrder
    location?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    axleCount?: SortOrder
    manCount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnerTypeFilter<$PrismaModel>
  }

  export type EnumWheelPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WheelPosition | EnumWheelPositionFieldRefInput<$PrismaModel>
    in?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumWheelPositionWithAggregatesFilter<$PrismaModel> | $Enums.WheelPosition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWheelPositionFilter<$PrismaModel>
    _max?: NestedEnumWheelPositionFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    destination?: SortOrder
  }

  export type TransportAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
  }

  export type TransportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    destination?: SortOrder
  }

  export type TransportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    destination?: SortOrder
  }

  export type TransportSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type CallCenterCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaId?: SortOrder
  }

  export type CallCenterAvgOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }

  export type CallCenterMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaId?: SortOrder
  }

  export type CallCenterMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    areaId?: SortOrder
  }

  export type CallCenterSumOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CallCenterListRelationFilter = {
    every?: CallCenterWhereInput
    some?: CallCenterWhereInput
    none?: CallCenterWhereInput
  }

  export type CallCenterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TransportScalarRelationFilter = {
    is?: TransportWhereInput
    isNot?: TransportWhereInput
  }

  export type CallCenterScalarRelationFilter = {
    is?: CallCenterWhereInput
    isNot?: CallCenterWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    callCenterId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    callCenterId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    callCenterId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    callCenterId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    callCenterId?: SortOrder
  }

  export type PenaltyCreateNestedManyWithoutUserInput = {
    create?: XOR<PenaltyCreateWithoutUserInput, PenaltyUncheckedCreateWithoutUserInput> | PenaltyCreateWithoutUserInput[] | PenaltyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutUserInput | PenaltyCreateOrConnectWithoutUserInput[]
    createMany?: PenaltyCreateManyUserInputEnvelope
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
  }

  export type TransportCreateNestedManyWithoutUserInput = {
    create?: XOR<TransportCreateWithoutUserInput, TransportUncheckedCreateWithoutUserInput> | TransportCreateWithoutUserInput[] | TransportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutUserInput | TransportCreateOrConnectWithoutUserInput[]
    createMany?: TransportCreateManyUserInputEnvelope
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
  }

  export type PermissionNotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<PermissionNotificationCreateWithoutUserInput, PermissionNotificationUncheckedCreateWithoutUserInput> | PermissionNotificationCreateWithoutUserInput[] | PermissionNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionNotificationCreateOrConnectWithoutUserInput | PermissionNotificationCreateOrConnectWithoutUserInput[]
    createMany?: PermissionNotificationCreateManyUserInputEnvelope
    connect?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
  }

  export type PenaltyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PenaltyCreateWithoutUserInput, PenaltyUncheckedCreateWithoutUserInput> | PenaltyCreateWithoutUserInput[] | PenaltyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutUserInput | PenaltyCreateOrConnectWithoutUserInput[]
    createMany?: PenaltyCreateManyUserInputEnvelope
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
  }

  export type TransportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransportCreateWithoutUserInput, TransportUncheckedCreateWithoutUserInput> | TransportCreateWithoutUserInput[] | TransportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutUserInput | TransportCreateOrConnectWithoutUserInput[]
    createMany?: TransportCreateManyUserInputEnvelope
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
  }

  export type PermissionNotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PermissionNotificationCreateWithoutUserInput, PermissionNotificationUncheckedCreateWithoutUserInput> | PermissionNotificationCreateWithoutUserInput[] | PermissionNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionNotificationCreateOrConnectWithoutUserInput | PermissionNotificationCreateOrConnectWithoutUserInput[]
    createMany?: PermissionNotificationCreateManyUserInputEnvelope
    connect?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PenaltyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PenaltyCreateWithoutUserInput, PenaltyUncheckedCreateWithoutUserInput> | PenaltyCreateWithoutUserInput[] | PenaltyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutUserInput | PenaltyCreateOrConnectWithoutUserInput[]
    upsert?: PenaltyUpsertWithWhereUniqueWithoutUserInput | PenaltyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PenaltyCreateManyUserInputEnvelope
    set?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    disconnect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    delete?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    update?: PenaltyUpdateWithWhereUniqueWithoutUserInput | PenaltyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PenaltyUpdateManyWithWhereWithoutUserInput | PenaltyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PenaltyScalarWhereInput | PenaltyScalarWhereInput[]
  }

  export type TransportUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransportCreateWithoutUserInput, TransportUncheckedCreateWithoutUserInput> | TransportCreateWithoutUserInput[] | TransportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutUserInput | TransportCreateOrConnectWithoutUserInput[]
    upsert?: TransportUpsertWithWhereUniqueWithoutUserInput | TransportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransportCreateManyUserInputEnvelope
    set?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    disconnect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    delete?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    update?: TransportUpdateWithWhereUniqueWithoutUserInput | TransportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransportUpdateManyWithWhereWithoutUserInput | TransportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransportScalarWhereInput | TransportScalarWhereInput[]
  }

  export type PermissionNotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<PermissionNotificationCreateWithoutUserInput, PermissionNotificationUncheckedCreateWithoutUserInput> | PermissionNotificationCreateWithoutUserInput[] | PermissionNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionNotificationCreateOrConnectWithoutUserInput | PermissionNotificationCreateOrConnectWithoutUserInput[]
    upsert?: PermissionNotificationUpsertWithWhereUniqueWithoutUserInput | PermissionNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PermissionNotificationCreateManyUserInputEnvelope
    set?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    disconnect?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    delete?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    connect?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    update?: PermissionNotificationUpdateWithWhereUniqueWithoutUserInput | PermissionNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PermissionNotificationUpdateManyWithWhereWithoutUserInput | PermissionNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PermissionNotificationScalarWhereInput | PermissionNotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PenaltyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PenaltyCreateWithoutUserInput, PenaltyUncheckedCreateWithoutUserInput> | PenaltyCreateWithoutUserInput[] | PenaltyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutUserInput | PenaltyCreateOrConnectWithoutUserInput[]
    upsert?: PenaltyUpsertWithWhereUniqueWithoutUserInput | PenaltyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PenaltyCreateManyUserInputEnvelope
    set?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    disconnect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    delete?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    update?: PenaltyUpdateWithWhereUniqueWithoutUserInput | PenaltyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PenaltyUpdateManyWithWhereWithoutUserInput | PenaltyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PenaltyScalarWhereInput | PenaltyScalarWhereInput[]
  }

  export type TransportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransportCreateWithoutUserInput, TransportUncheckedCreateWithoutUserInput> | TransportCreateWithoutUserInput[] | TransportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutUserInput | TransportCreateOrConnectWithoutUserInput[]
    upsert?: TransportUpsertWithWhereUniqueWithoutUserInput | TransportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransportCreateManyUserInputEnvelope
    set?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    disconnect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    delete?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    update?: TransportUpdateWithWhereUniqueWithoutUserInput | TransportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransportUpdateManyWithWhereWithoutUserInput | TransportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransportScalarWhereInput | TransportScalarWhereInput[]
  }

  export type PermissionNotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PermissionNotificationCreateWithoutUserInput, PermissionNotificationUncheckedCreateWithoutUserInput> | PermissionNotificationCreateWithoutUserInput[] | PermissionNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionNotificationCreateOrConnectWithoutUserInput | PermissionNotificationCreateOrConnectWithoutUserInput[]
    upsert?: PermissionNotificationUpsertWithWhereUniqueWithoutUserInput | PermissionNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PermissionNotificationCreateManyUserInputEnvelope
    set?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    disconnect?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    delete?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    connect?: PermissionNotificationWhereUniqueInput | PermissionNotificationWhereUniqueInput[]
    update?: PermissionNotificationUpdateWithWhereUniqueWithoutUserInput | PermissionNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PermissionNotificationUpdateManyWithWhereWithoutUserInput | PermissionNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PermissionNotificationScalarWhereInput | PermissionNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutPenaltyInput = {
    create?: XOR<UserCreateWithoutPenaltyInput, UserUncheckedCreateWithoutPenaltyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenaltyInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutPenaltiesInput = {
    create?: XOR<CarCreateWithoutPenaltiesInput, CarUncheckedCreateWithoutPenaltiesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPenaltiesInput
    connect?: CarWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPenaltyNestedInput = {
    create?: XOR<UserCreateWithoutPenaltyInput, UserUncheckedCreateWithoutPenaltyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPenaltyInput
    upsert?: UserUpsertWithoutPenaltyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPenaltyInput, UserUpdateWithoutPenaltyInput>, UserUncheckedUpdateWithoutPenaltyInput>
  }

  export type CarUpdateOneRequiredWithoutPenaltiesNestedInput = {
    create?: XOR<CarCreateWithoutPenaltiesInput, CarUncheckedCreateWithoutPenaltiesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPenaltiesInput
    upsert?: CarUpsertWithoutPenaltiesInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutPenaltiesInput, CarUpdateWithoutPenaltiesInput>, CarUncheckedUpdateWithoutPenaltiesInput>
  }

  export type PenaltyCreateNestedManyWithoutCarInput = {
    create?: XOR<PenaltyCreateWithoutCarInput, PenaltyUncheckedCreateWithoutCarInput> | PenaltyCreateWithoutCarInput[] | PenaltyUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutCarInput | PenaltyCreateOrConnectWithoutCarInput[]
    createMany?: PenaltyCreateManyCarInputEnvelope
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
  }

  export type TransportCreateNestedManyWithoutCarInput = {
    create?: XOR<TransportCreateWithoutCarInput, TransportUncheckedCreateWithoutCarInput> | TransportCreateWithoutCarInput[] | TransportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutCarInput | TransportCreateOrConnectWithoutCarInput[]
    createMany?: TransportCreateManyCarInputEnvelope
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
  }

  export type PenaltyUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<PenaltyCreateWithoutCarInput, PenaltyUncheckedCreateWithoutCarInput> | PenaltyCreateWithoutCarInput[] | PenaltyUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutCarInput | PenaltyCreateOrConnectWithoutCarInput[]
    createMany?: PenaltyCreateManyCarInputEnvelope
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
  }

  export type TransportUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<TransportCreateWithoutCarInput, TransportUncheckedCreateWithoutCarInput> | TransportCreateWithoutCarInput[] | TransportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutCarInput | TransportCreateOrConnectWithoutCarInput[]
    createMany?: TransportCreateManyCarInputEnvelope
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumOwnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.OwnerType
  }

  export type EnumWheelPositionFieldUpdateOperationsInput = {
    set?: $Enums.WheelPosition
  }

  export type PenaltyUpdateManyWithoutCarNestedInput = {
    create?: XOR<PenaltyCreateWithoutCarInput, PenaltyUncheckedCreateWithoutCarInput> | PenaltyCreateWithoutCarInput[] | PenaltyUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutCarInput | PenaltyCreateOrConnectWithoutCarInput[]
    upsert?: PenaltyUpsertWithWhereUniqueWithoutCarInput | PenaltyUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PenaltyCreateManyCarInputEnvelope
    set?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    disconnect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    delete?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    update?: PenaltyUpdateWithWhereUniqueWithoutCarInput | PenaltyUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PenaltyUpdateManyWithWhereWithoutCarInput | PenaltyUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PenaltyScalarWhereInput | PenaltyScalarWhereInput[]
  }

  export type TransportUpdateManyWithoutCarNestedInput = {
    create?: XOR<TransportCreateWithoutCarInput, TransportUncheckedCreateWithoutCarInput> | TransportCreateWithoutCarInput[] | TransportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutCarInput | TransportCreateOrConnectWithoutCarInput[]
    upsert?: TransportUpsertWithWhereUniqueWithoutCarInput | TransportUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TransportCreateManyCarInputEnvelope
    set?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    disconnect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    delete?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    update?: TransportUpdateWithWhereUniqueWithoutCarInput | TransportUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TransportUpdateManyWithWhereWithoutCarInput | TransportUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TransportScalarWhereInput | TransportScalarWhereInput[]
  }

  export type PenaltyUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<PenaltyCreateWithoutCarInput, PenaltyUncheckedCreateWithoutCarInput> | PenaltyCreateWithoutCarInput[] | PenaltyUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PenaltyCreateOrConnectWithoutCarInput | PenaltyCreateOrConnectWithoutCarInput[]
    upsert?: PenaltyUpsertWithWhereUniqueWithoutCarInput | PenaltyUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PenaltyCreateManyCarInputEnvelope
    set?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    disconnect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    delete?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    connect?: PenaltyWhereUniqueInput | PenaltyWhereUniqueInput[]
    update?: PenaltyUpdateWithWhereUniqueWithoutCarInput | PenaltyUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PenaltyUpdateManyWithWhereWithoutCarInput | PenaltyUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PenaltyScalarWhereInput | PenaltyScalarWhereInput[]
  }

  export type TransportUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<TransportCreateWithoutCarInput, TransportUncheckedCreateWithoutCarInput> | TransportCreateWithoutCarInput[] | TransportUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutCarInput | TransportCreateOrConnectWithoutCarInput[]
    upsert?: TransportUpsertWithWhereUniqueWithoutCarInput | TransportUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TransportCreateManyCarInputEnvelope
    set?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    disconnect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    delete?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    update?: TransportUpdateWithWhereUniqueWithoutCarInput | TransportUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TransportUpdateManyWithWhereWithoutCarInput | TransportUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TransportScalarWhereInput | TransportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransportInput = {
    create?: XOR<UserCreateWithoutTransportInput, UserUncheckedCreateWithoutTransportInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransportInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutTransportInput = {
    create?: XOR<CarCreateWithoutTransportInput, CarUncheckedCreateWithoutTransportInput>
    connectOrCreate?: CarCreateOrConnectWithoutTransportInput
    connect?: CarWhereUniqueInput
  }

  export type AreaCreateNestedManyWithoutTransportsInput = {
    create?: XOR<AreaCreateWithoutTransportsInput, AreaUncheckedCreateWithoutTransportsInput> | AreaCreateWithoutTransportsInput[] | AreaUncheckedCreateWithoutTransportsInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutTransportsInput | AreaCreateOrConnectWithoutTransportsInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutTransportInput = {
    create?: XOR<NotificationCreateWithoutTransportInput, NotificationUncheckedCreateWithoutTransportInput> | NotificationCreateWithoutTransportInput[] | NotificationUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTransportInput | NotificationCreateOrConnectWithoutTransportInput[]
    createMany?: NotificationCreateManyTransportInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutTransportsInput = {
    create?: XOR<AreaCreateWithoutTransportsInput, AreaUncheckedCreateWithoutTransportsInput> | AreaCreateWithoutTransportsInput[] | AreaUncheckedCreateWithoutTransportsInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutTransportsInput | AreaCreateOrConnectWithoutTransportsInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutTransportInput = {
    create?: XOR<NotificationCreateWithoutTransportInput, NotificationUncheckedCreateWithoutTransportInput> | NotificationCreateWithoutTransportInput[] | NotificationUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTransportInput | NotificationCreateOrConnectWithoutTransportInput[]
    createMany?: NotificationCreateManyTransportInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTransportNestedInput = {
    create?: XOR<UserCreateWithoutTransportInput, UserUncheckedCreateWithoutTransportInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransportInput
    upsert?: UserUpsertWithoutTransportInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransportInput, UserUpdateWithoutTransportInput>, UserUncheckedUpdateWithoutTransportInput>
  }

  export type CarUpdateOneRequiredWithoutTransportNestedInput = {
    create?: XOR<CarCreateWithoutTransportInput, CarUncheckedCreateWithoutTransportInput>
    connectOrCreate?: CarCreateOrConnectWithoutTransportInput
    upsert?: CarUpsertWithoutTransportInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutTransportInput, CarUpdateWithoutTransportInput>, CarUncheckedUpdateWithoutTransportInput>
  }

  export type AreaUpdateManyWithoutTransportsNestedInput = {
    create?: XOR<AreaCreateWithoutTransportsInput, AreaUncheckedCreateWithoutTransportsInput> | AreaCreateWithoutTransportsInput[] | AreaUncheckedCreateWithoutTransportsInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutTransportsInput | AreaCreateOrConnectWithoutTransportsInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutTransportsInput | AreaUpsertWithWhereUniqueWithoutTransportsInput[]
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutTransportsInput | AreaUpdateWithWhereUniqueWithoutTransportsInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutTransportsInput | AreaUpdateManyWithWhereWithoutTransportsInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutTransportNestedInput = {
    create?: XOR<NotificationCreateWithoutTransportInput, NotificationUncheckedCreateWithoutTransportInput> | NotificationCreateWithoutTransportInput[] | NotificationUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTransportInput | NotificationCreateOrConnectWithoutTransportInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTransportInput | NotificationUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: NotificationCreateManyTransportInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTransportInput | NotificationUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTransportInput | NotificationUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutTransportsNestedInput = {
    create?: XOR<AreaCreateWithoutTransportsInput, AreaUncheckedCreateWithoutTransportsInput> | AreaCreateWithoutTransportsInput[] | AreaUncheckedCreateWithoutTransportsInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutTransportsInput | AreaCreateOrConnectWithoutTransportsInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutTransportsInput | AreaUpsertWithWhereUniqueWithoutTransportsInput[]
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutTransportsInput | AreaUpdateWithWhereUniqueWithoutTransportsInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutTransportsInput | AreaUpdateManyWithWhereWithoutTransportsInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutTransportNestedInput = {
    create?: XOR<NotificationCreateWithoutTransportInput, NotificationUncheckedCreateWithoutTransportInput> | NotificationCreateWithoutTransportInput[] | NotificationUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTransportInput | NotificationCreateOrConnectWithoutTransportInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTransportInput | NotificationUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: NotificationCreateManyTransportInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTransportInput | NotificationUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTransportInput | NotificationUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutCallCentersInput = {
    create?: XOR<AreaCreateWithoutCallCentersInput, AreaUncheckedCreateWithoutCallCentersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutCallCentersInput
    connect?: AreaWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutCallCenterInput = {
    create?: XOR<NotificationCreateWithoutCallCenterInput, NotificationUncheckedCreateWithoutCallCenterInput> | NotificationCreateWithoutCallCenterInput[] | NotificationUncheckedCreateWithoutCallCenterInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCallCenterInput | NotificationCreateOrConnectWithoutCallCenterInput[]
    createMany?: NotificationCreateManyCallCenterInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutCallCenterInput = {
    create?: XOR<NotificationCreateWithoutCallCenterInput, NotificationUncheckedCreateWithoutCallCenterInput> | NotificationCreateWithoutCallCenterInput[] | NotificationUncheckedCreateWithoutCallCenterInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCallCenterInput | NotificationCreateOrConnectWithoutCallCenterInput[]
    createMany?: NotificationCreateManyCallCenterInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AreaUpdateOneRequiredWithoutCallCentersNestedInput = {
    create?: XOR<AreaCreateWithoutCallCentersInput, AreaUncheckedCreateWithoutCallCentersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutCallCentersInput
    upsert?: AreaUpsertWithoutCallCentersInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutCallCentersInput, AreaUpdateWithoutCallCentersInput>, AreaUncheckedUpdateWithoutCallCentersInput>
  }

  export type NotificationUpdateManyWithoutCallCenterNestedInput = {
    create?: XOR<NotificationCreateWithoutCallCenterInput, NotificationUncheckedCreateWithoutCallCenterInput> | NotificationCreateWithoutCallCenterInput[] | NotificationUncheckedCreateWithoutCallCenterInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCallCenterInput | NotificationCreateOrConnectWithoutCallCenterInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCallCenterInput | NotificationUpsertWithWhereUniqueWithoutCallCenterInput[]
    createMany?: NotificationCreateManyCallCenterInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCallCenterInput | NotificationUpdateWithWhereUniqueWithoutCallCenterInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCallCenterInput | NotificationUpdateManyWithWhereWithoutCallCenterInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutCallCenterNestedInput = {
    create?: XOR<NotificationCreateWithoutCallCenterInput, NotificationUncheckedCreateWithoutCallCenterInput> | NotificationCreateWithoutCallCenterInput[] | NotificationUncheckedCreateWithoutCallCenterInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCallCenterInput | NotificationCreateOrConnectWithoutCallCenterInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCallCenterInput | NotificationUpsertWithWhereUniqueWithoutCallCenterInput[]
    createMany?: NotificationCreateManyCallCenterInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCallCenterInput | NotificationUpdateWithWhereUniqueWithoutCallCenterInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCallCenterInput | NotificationUpdateManyWithWhereWithoutCallCenterInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TransportCreateNestedManyWithoutAreasInput = {
    create?: XOR<TransportCreateWithoutAreasInput, TransportUncheckedCreateWithoutAreasInput> | TransportCreateWithoutAreasInput[] | TransportUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutAreasInput | TransportCreateOrConnectWithoutAreasInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
  }

  export type CallCenterCreateNestedManyWithoutAreaInput = {
    create?: XOR<CallCenterCreateWithoutAreaInput, CallCenterUncheckedCreateWithoutAreaInput> | CallCenterCreateWithoutAreaInput[] | CallCenterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallCenterCreateOrConnectWithoutAreaInput | CallCenterCreateOrConnectWithoutAreaInput[]
    createMany?: CallCenterCreateManyAreaInputEnvelope
    connect?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
  }

  export type TransportUncheckedCreateNestedManyWithoutAreasInput = {
    create?: XOR<TransportCreateWithoutAreasInput, TransportUncheckedCreateWithoutAreasInput> | TransportCreateWithoutAreasInput[] | TransportUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutAreasInput | TransportCreateOrConnectWithoutAreasInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
  }

  export type CallCenterUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<CallCenterCreateWithoutAreaInput, CallCenterUncheckedCreateWithoutAreaInput> | CallCenterCreateWithoutAreaInput[] | CallCenterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallCenterCreateOrConnectWithoutAreaInput | CallCenterCreateOrConnectWithoutAreaInput[]
    createMany?: CallCenterCreateManyAreaInputEnvelope
    connect?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
  }

  export type TransportUpdateManyWithoutAreasNestedInput = {
    create?: XOR<TransportCreateWithoutAreasInput, TransportUncheckedCreateWithoutAreasInput> | TransportCreateWithoutAreasInput[] | TransportUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutAreasInput | TransportCreateOrConnectWithoutAreasInput[]
    upsert?: TransportUpsertWithWhereUniqueWithoutAreasInput | TransportUpsertWithWhereUniqueWithoutAreasInput[]
    set?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    disconnect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    delete?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    update?: TransportUpdateWithWhereUniqueWithoutAreasInput | TransportUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: TransportUpdateManyWithWhereWithoutAreasInput | TransportUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: TransportScalarWhereInput | TransportScalarWhereInput[]
  }

  export type CallCenterUpdateManyWithoutAreaNestedInput = {
    create?: XOR<CallCenterCreateWithoutAreaInput, CallCenterUncheckedCreateWithoutAreaInput> | CallCenterCreateWithoutAreaInput[] | CallCenterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallCenterCreateOrConnectWithoutAreaInput | CallCenterCreateOrConnectWithoutAreaInput[]
    upsert?: CallCenterUpsertWithWhereUniqueWithoutAreaInput | CallCenterUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: CallCenterCreateManyAreaInputEnvelope
    set?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    disconnect?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    delete?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    connect?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    update?: CallCenterUpdateWithWhereUniqueWithoutAreaInput | CallCenterUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: CallCenterUpdateManyWithWhereWithoutAreaInput | CallCenterUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: CallCenterScalarWhereInput | CallCenterScalarWhereInput[]
  }

  export type TransportUncheckedUpdateManyWithoutAreasNestedInput = {
    create?: XOR<TransportCreateWithoutAreasInput, TransportUncheckedCreateWithoutAreasInput> | TransportCreateWithoutAreasInput[] | TransportUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: TransportCreateOrConnectWithoutAreasInput | TransportCreateOrConnectWithoutAreasInput[]
    upsert?: TransportUpsertWithWhereUniqueWithoutAreasInput | TransportUpsertWithWhereUniqueWithoutAreasInput[]
    set?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    disconnect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    delete?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    connect?: TransportWhereUniqueInput | TransportWhereUniqueInput[]
    update?: TransportUpdateWithWhereUniqueWithoutAreasInput | TransportUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: TransportUpdateManyWithWhereWithoutAreasInput | TransportUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: TransportScalarWhereInput | TransportScalarWhereInput[]
  }

  export type CallCenterUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<CallCenterCreateWithoutAreaInput, CallCenterUncheckedCreateWithoutAreaInput> | CallCenterCreateWithoutAreaInput[] | CallCenterUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallCenterCreateOrConnectWithoutAreaInput | CallCenterCreateOrConnectWithoutAreaInput[]
    upsert?: CallCenterUpsertWithWhereUniqueWithoutAreaInput | CallCenterUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: CallCenterCreateManyAreaInputEnvelope
    set?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    disconnect?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    delete?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    connect?: CallCenterWhereUniqueInput | CallCenterWhereUniqueInput[]
    update?: CallCenterUpdateWithWhereUniqueWithoutAreaInput | CallCenterUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: CallCenterUpdateManyWithWhereWithoutAreaInput | CallCenterUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: CallCenterScalarWhereInput | CallCenterScalarWhereInput[]
  }

  export type TransportCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<TransportCreateWithoutNotificationsInput, TransportUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TransportCreateOrConnectWithoutNotificationsInput
    connect?: TransportWhereUniqueInput
  }

  export type CallCenterCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<CallCenterCreateWithoutNotificationsInput, CallCenterUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CallCenterCreateOrConnectWithoutNotificationsInput
    connect?: CallCenterWhereUniqueInput
  }

  export type TransportUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<TransportCreateWithoutNotificationsInput, TransportUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TransportCreateOrConnectWithoutNotificationsInput
    upsert?: TransportUpsertWithoutNotificationsInput
    connect?: TransportWhereUniqueInput
    update?: XOR<XOR<TransportUpdateToOneWithWhereWithoutNotificationsInput, TransportUpdateWithoutNotificationsInput>, TransportUncheckedUpdateWithoutNotificationsInput>
  }

  export type CallCenterUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<CallCenterCreateWithoutNotificationsInput, CallCenterUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CallCenterCreateOrConnectWithoutNotificationsInput
    upsert?: CallCenterUpsertWithoutNotificationsInput
    connect?: CallCenterWhereUniqueInput
    update?: XOR<XOR<CallCenterUpdateToOneWithWhereWithoutNotificationsInput, CallCenterUpdateWithoutNotificationsInput>, CallCenterUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerTypeFilter<$PrismaModel> | $Enums.OwnerType
  }

  export type NestedEnumWheelPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.WheelPosition | EnumWheelPositionFieldRefInput<$PrismaModel>
    in?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumWheelPositionFilter<$PrismaModel> | $Enums.WheelPosition
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerType | EnumOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerType[] | ListEnumOwnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.OwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumOwnerTypeFilter<$PrismaModel>
  }

  export type NestedEnumWheelPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WheelPosition | EnumWheelPositionFieldRefInput<$PrismaModel>
    in?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WheelPosition[] | ListEnumWheelPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumWheelPositionWithAggregatesFilter<$PrismaModel> | $Enums.WheelPosition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWheelPositionFilter<$PrismaModel>
    _max?: NestedEnumWheelPositionFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PenaltyCreateWithoutUserInput = {
    amount: string
    car: CarCreateNestedOneWithoutPenaltiesInput
  }

  export type PenaltyUncheckedCreateWithoutUserInput = {
    id?: number
    amount: string
    carId: number
  }

  export type PenaltyCreateOrConnectWithoutUserInput = {
    where: PenaltyWhereUniqueInput
    create: XOR<PenaltyCreateWithoutUserInput, PenaltyUncheckedCreateWithoutUserInput>
  }

  export type PenaltyCreateManyUserInputEnvelope = {
    data: PenaltyCreateManyUserInput | PenaltyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransportCreateWithoutUserInput = {
    status?: boolean
    destination: string
    car: CarCreateNestedOneWithoutTransportInput
    areas?: AreaCreateNestedManyWithoutTransportsInput
    notifications?: NotificationCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateWithoutUserInput = {
    id?: number
    carId: number
    status?: boolean
    destination: string
    areas?: AreaUncheckedCreateNestedManyWithoutTransportsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportCreateOrConnectWithoutUserInput = {
    where: TransportWhereUniqueInput
    create: XOR<TransportCreateWithoutUserInput, TransportUncheckedCreateWithoutUserInput>
  }

  export type TransportCreateManyUserInputEnvelope = {
    data: TransportCreateManyUserInput | TransportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PermissionNotificationCreateWithoutUserInput = {
    message: string
  }

  export type PermissionNotificationUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
  }

  export type PermissionNotificationCreateOrConnectWithoutUserInput = {
    where: PermissionNotificationWhereUniqueInput
    create: XOR<PermissionNotificationCreateWithoutUserInput, PermissionNotificationUncheckedCreateWithoutUserInput>
  }

  export type PermissionNotificationCreateManyUserInputEnvelope = {
    data: PermissionNotificationCreateManyUserInput | PermissionNotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PenaltyUpsertWithWhereUniqueWithoutUserInput = {
    where: PenaltyWhereUniqueInput
    update: XOR<PenaltyUpdateWithoutUserInput, PenaltyUncheckedUpdateWithoutUserInput>
    create: XOR<PenaltyCreateWithoutUserInput, PenaltyUncheckedCreateWithoutUserInput>
  }

  export type PenaltyUpdateWithWhereUniqueWithoutUserInput = {
    where: PenaltyWhereUniqueInput
    data: XOR<PenaltyUpdateWithoutUserInput, PenaltyUncheckedUpdateWithoutUserInput>
  }

  export type PenaltyUpdateManyWithWhereWithoutUserInput = {
    where: PenaltyScalarWhereInput
    data: XOR<PenaltyUpdateManyMutationInput, PenaltyUncheckedUpdateManyWithoutUserInput>
  }

  export type PenaltyScalarWhereInput = {
    AND?: PenaltyScalarWhereInput | PenaltyScalarWhereInput[]
    OR?: PenaltyScalarWhereInput[]
    NOT?: PenaltyScalarWhereInput | PenaltyScalarWhereInput[]
    id?: IntFilter<"Penalty"> | number
    userId?: IntFilter<"Penalty"> | number
    amount?: StringFilter<"Penalty"> | string
    carId?: IntFilter<"Penalty"> | number
  }

  export type TransportUpsertWithWhereUniqueWithoutUserInput = {
    where: TransportWhereUniqueInput
    update: XOR<TransportUpdateWithoutUserInput, TransportUncheckedUpdateWithoutUserInput>
    create: XOR<TransportCreateWithoutUserInput, TransportUncheckedCreateWithoutUserInput>
  }

  export type TransportUpdateWithWhereUniqueWithoutUserInput = {
    where: TransportWhereUniqueInput
    data: XOR<TransportUpdateWithoutUserInput, TransportUncheckedUpdateWithoutUserInput>
  }

  export type TransportUpdateManyWithWhereWithoutUserInput = {
    where: TransportScalarWhereInput
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyWithoutUserInput>
  }

  export type TransportScalarWhereInput = {
    AND?: TransportScalarWhereInput | TransportScalarWhereInput[]
    OR?: TransportScalarWhereInput[]
    NOT?: TransportScalarWhereInput | TransportScalarWhereInput[]
    id?: IntFilter<"Transport"> | number
    userId?: IntFilter<"Transport"> | number
    carId?: IntFilter<"Transport"> | number
    status?: BoolFilter<"Transport"> | boolean
    destination?: StringFilter<"Transport"> | string
  }

  export type PermissionNotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: PermissionNotificationWhereUniqueInput
    update: XOR<PermissionNotificationUpdateWithoutUserInput, PermissionNotificationUncheckedUpdateWithoutUserInput>
    create: XOR<PermissionNotificationCreateWithoutUserInput, PermissionNotificationUncheckedCreateWithoutUserInput>
  }

  export type PermissionNotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: PermissionNotificationWhereUniqueInput
    data: XOR<PermissionNotificationUpdateWithoutUserInput, PermissionNotificationUncheckedUpdateWithoutUserInput>
  }

  export type PermissionNotificationUpdateManyWithWhereWithoutUserInput = {
    where: PermissionNotificationScalarWhereInput
    data: XOR<PermissionNotificationUpdateManyMutationInput, PermissionNotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type PermissionNotificationScalarWhereInput = {
    AND?: PermissionNotificationScalarWhereInput | PermissionNotificationScalarWhereInput[]
    OR?: PermissionNotificationScalarWhereInput[]
    NOT?: PermissionNotificationScalarWhereInput | PermissionNotificationScalarWhereInput[]
    id?: IntFilter<"PermissionNotification"> | number
    message?: StringFilter<"PermissionNotification"> | string
    userId?: IntFilter<"PermissionNotification"> | number
  }

  export type UserCreateWithoutNotificationsInput = {
    firstName: string
    lastName: string
    register: string
    location: string
    penalty?: PenaltyCreateNestedManyWithoutUserInput
    transport?: TransportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    firstName: string
    lastName: string
    register: string
    location: string
    penalty?: PenaltyUncheckedCreateNestedManyWithoutUserInput
    transport?: TransportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalty?: PenaltyUpdateManyWithoutUserNestedInput
    transport?: TransportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalty?: PenaltyUncheckedUpdateManyWithoutUserNestedInput
    transport?: TransportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPenaltyInput = {
    firstName: string
    lastName: string
    register: string
    location: string
    transport?: TransportCreateNestedManyWithoutUserInput
    notifications?: PermissionNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPenaltyInput = {
    id?: number
    firstName: string
    lastName: string
    register: string
    location: string
    transport?: TransportUncheckedCreateNestedManyWithoutUserInput
    notifications?: PermissionNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPenaltyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPenaltyInput, UserUncheckedCreateWithoutPenaltyInput>
  }

  export type CarCreateWithoutPenaltiesInput = {
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date | string
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
    transport?: TransportCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutPenaltiesInput = {
    id?: number
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date | string
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
    transport?: TransportUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutPenaltiesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutPenaltiesInput, CarUncheckedCreateWithoutPenaltiesInput>
  }

  export type UserUpsertWithoutPenaltyInput = {
    update: XOR<UserUpdateWithoutPenaltyInput, UserUncheckedUpdateWithoutPenaltyInput>
    create: XOR<UserCreateWithoutPenaltyInput, UserUncheckedCreateWithoutPenaltyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPenaltyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPenaltyInput, UserUncheckedUpdateWithoutPenaltyInput>
  }

  export type UserUpdateWithoutPenaltyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    transport?: TransportUpdateManyWithoutUserNestedInput
    notifications?: PermissionNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPenaltyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    transport?: TransportUncheckedUpdateManyWithoutUserNestedInput
    notifications?: PermissionNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpsertWithoutPenaltiesInput = {
    update: XOR<CarUpdateWithoutPenaltiesInput, CarUncheckedUpdateWithoutPenaltiesInput>
    create: XOR<CarCreateWithoutPenaltiesInput, CarUncheckedCreateWithoutPenaltiesInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutPenaltiesInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutPenaltiesInput, CarUncheckedUpdateWithoutPenaltiesInput>
  }

  export type CarUpdateWithoutPenaltiesInput = {
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    transport?: TransportUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutPenaltiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    transport?: TransportUncheckedUpdateManyWithoutCarNestedInput
  }

  export type PenaltyCreateWithoutCarInput = {
    amount: string
    user: UserCreateNestedOneWithoutPenaltyInput
  }

  export type PenaltyUncheckedCreateWithoutCarInput = {
    id?: number
    userId: number
    amount: string
  }

  export type PenaltyCreateOrConnectWithoutCarInput = {
    where: PenaltyWhereUniqueInput
    create: XOR<PenaltyCreateWithoutCarInput, PenaltyUncheckedCreateWithoutCarInput>
  }

  export type PenaltyCreateManyCarInputEnvelope = {
    data: PenaltyCreateManyCarInput | PenaltyCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type TransportCreateWithoutCarInput = {
    status?: boolean
    destination: string
    user: UserCreateNestedOneWithoutTransportInput
    areas?: AreaCreateNestedManyWithoutTransportsInput
    notifications?: NotificationCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateWithoutCarInput = {
    id?: number
    userId: number
    status?: boolean
    destination: string
    areas?: AreaUncheckedCreateNestedManyWithoutTransportsInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportCreateOrConnectWithoutCarInput = {
    where: TransportWhereUniqueInput
    create: XOR<TransportCreateWithoutCarInput, TransportUncheckedCreateWithoutCarInput>
  }

  export type TransportCreateManyCarInputEnvelope = {
    data: TransportCreateManyCarInput | TransportCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type PenaltyUpsertWithWhereUniqueWithoutCarInput = {
    where: PenaltyWhereUniqueInput
    update: XOR<PenaltyUpdateWithoutCarInput, PenaltyUncheckedUpdateWithoutCarInput>
    create: XOR<PenaltyCreateWithoutCarInput, PenaltyUncheckedCreateWithoutCarInput>
  }

  export type PenaltyUpdateWithWhereUniqueWithoutCarInput = {
    where: PenaltyWhereUniqueInput
    data: XOR<PenaltyUpdateWithoutCarInput, PenaltyUncheckedUpdateWithoutCarInput>
  }

  export type PenaltyUpdateManyWithWhereWithoutCarInput = {
    where: PenaltyScalarWhereInput
    data: XOR<PenaltyUpdateManyMutationInput, PenaltyUncheckedUpdateManyWithoutCarInput>
  }

  export type TransportUpsertWithWhereUniqueWithoutCarInput = {
    where: TransportWhereUniqueInput
    update: XOR<TransportUpdateWithoutCarInput, TransportUncheckedUpdateWithoutCarInput>
    create: XOR<TransportCreateWithoutCarInput, TransportUncheckedCreateWithoutCarInput>
  }

  export type TransportUpdateWithWhereUniqueWithoutCarInput = {
    where: TransportWhereUniqueInput
    data: XOR<TransportUpdateWithoutCarInput, TransportUncheckedUpdateWithoutCarInput>
  }

  export type TransportUpdateManyWithWhereWithoutCarInput = {
    where: TransportScalarWhereInput
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyWithoutCarInput>
  }

  export type UserCreateWithoutTransportInput = {
    firstName: string
    lastName: string
    register: string
    location: string
    penalty?: PenaltyCreateNestedManyWithoutUserInput
    notifications?: PermissionNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransportInput = {
    id?: number
    firstName: string
    lastName: string
    register: string
    location: string
    penalty?: PenaltyUncheckedCreateNestedManyWithoutUserInput
    notifications?: PermissionNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransportInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransportInput, UserUncheckedCreateWithoutTransportInput>
  }

  export type CarCreateWithoutTransportInput = {
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date | string
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
    penalties?: PenaltyCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutTransportInput = {
    id?: number
    axleCount: number
    buildYear: string
    cabinNumber: string
    capacity: string
    className: string
    colorName: string
    countryName: string
    fuelType: string
    height: string
    importDate: Date | string
    length: string
    manCount: number
    markName: string
    mass: string
    modelName: string
    motorNumber: string
    ownerType: $Enums.OwnerType
    plateNumber: string
    type: string
    wheelPosition: $Enums.WheelPosition
    width: string
    location: string
    penalties?: PenaltyUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutTransportInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutTransportInput, CarUncheckedCreateWithoutTransportInput>
  }

  export type AreaCreateWithoutTransportsInput = {
    area: JsonNullValueInput | InputJsonValue
    callCenters?: CallCenterCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutTransportsInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    callCenters?: CallCenterUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutTransportsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutTransportsInput, AreaUncheckedCreateWithoutTransportsInput>
  }

  export type NotificationCreateWithoutTransportInput = {
    callCenter: CallCenterCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutTransportInput = {
    id?: number
    callCenterId: number
  }

  export type NotificationCreateOrConnectWithoutTransportInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutTransportInput, NotificationUncheckedCreateWithoutTransportInput>
  }

  export type NotificationCreateManyTransportInputEnvelope = {
    data: NotificationCreateManyTransportInput | NotificationCreateManyTransportInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTransportInput = {
    update: XOR<UserUpdateWithoutTransportInput, UserUncheckedUpdateWithoutTransportInput>
    create: XOR<UserCreateWithoutTransportInput, UserUncheckedCreateWithoutTransportInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransportInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransportInput, UserUncheckedUpdateWithoutTransportInput>
  }

  export type UserUpdateWithoutTransportInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalty?: PenaltyUpdateManyWithoutUserNestedInput
    notifications?: PermissionNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransportInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalty?: PenaltyUncheckedUpdateManyWithoutUserNestedInput
    notifications?: PermissionNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpsertWithoutTransportInput = {
    update: XOR<CarUpdateWithoutTransportInput, CarUncheckedUpdateWithoutTransportInput>
    create: XOR<CarCreateWithoutTransportInput, CarUncheckedCreateWithoutTransportInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutTransportInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutTransportInput, CarUncheckedUpdateWithoutTransportInput>
  }

  export type CarUpdateWithoutTransportInput = {
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalties?: PenaltyUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutTransportInput = {
    id?: IntFieldUpdateOperationsInput | number
    axleCount?: IntFieldUpdateOperationsInput | number
    buildYear?: StringFieldUpdateOperationsInput | string
    cabinNumber?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    importDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    manCount?: IntFieldUpdateOperationsInput | number
    markName?: StringFieldUpdateOperationsInput | string
    mass?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    motorNumber?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumOwnerTypeFieldUpdateOperationsInput | $Enums.OwnerType
    plateNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    wheelPosition?: EnumWheelPositionFieldUpdateOperationsInput | $Enums.WheelPosition
    width?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    penalties?: PenaltyUncheckedUpdateManyWithoutCarNestedInput
  }

  export type AreaUpsertWithWhereUniqueWithoutTransportsInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutTransportsInput, AreaUncheckedUpdateWithoutTransportsInput>
    create: XOR<AreaCreateWithoutTransportsInput, AreaUncheckedCreateWithoutTransportsInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutTransportsInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutTransportsInput, AreaUncheckedUpdateWithoutTransportsInput>
  }

  export type AreaUpdateManyWithWhereWithoutTransportsInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutTransportsInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: IntFilter<"Area"> | number
    area?: JsonFilter<"Area">
  }

  export type NotificationUpsertWithWhereUniqueWithoutTransportInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutTransportInput, NotificationUncheckedUpdateWithoutTransportInput>
    create: XOR<NotificationCreateWithoutTransportInput, NotificationUncheckedCreateWithoutTransportInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutTransportInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutTransportInput, NotificationUncheckedUpdateWithoutTransportInput>
  }

  export type NotificationUpdateManyWithWhereWithoutTransportInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutTransportInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    transportId?: IntFilter<"Notification"> | number
    callCenterId?: IntFilter<"Notification"> | number
  }

  export type AreaCreateWithoutCallCentersInput = {
    area: JsonNullValueInput | InputJsonValue
    transports?: TransportCreateNestedManyWithoutAreasInput
  }

  export type AreaUncheckedCreateWithoutCallCentersInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    transports?: TransportUncheckedCreateNestedManyWithoutAreasInput
  }

  export type AreaCreateOrConnectWithoutCallCentersInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutCallCentersInput, AreaUncheckedCreateWithoutCallCentersInput>
  }

  export type NotificationCreateWithoutCallCenterInput = {
    transport: TransportCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutCallCenterInput = {
    id?: number
    transportId: number
  }

  export type NotificationCreateOrConnectWithoutCallCenterInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutCallCenterInput, NotificationUncheckedCreateWithoutCallCenterInput>
  }

  export type NotificationCreateManyCallCenterInputEnvelope = {
    data: NotificationCreateManyCallCenterInput | NotificationCreateManyCallCenterInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutCallCentersInput = {
    update: XOR<AreaUpdateWithoutCallCentersInput, AreaUncheckedUpdateWithoutCallCentersInput>
    create: XOR<AreaCreateWithoutCallCentersInput, AreaUncheckedCreateWithoutCallCentersInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutCallCentersInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutCallCentersInput, AreaUncheckedUpdateWithoutCallCentersInput>
  }

  export type AreaUpdateWithoutCallCentersInput = {
    area?: JsonNullValueInput | InputJsonValue
    transports?: TransportUpdateManyWithoutAreasNestedInput
  }

  export type AreaUncheckedUpdateWithoutCallCentersInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    transports?: TransportUncheckedUpdateManyWithoutAreasNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutCallCenterInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutCallCenterInput, NotificationUncheckedUpdateWithoutCallCenterInput>
    create: XOR<NotificationCreateWithoutCallCenterInput, NotificationUncheckedCreateWithoutCallCenterInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutCallCenterInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutCallCenterInput, NotificationUncheckedUpdateWithoutCallCenterInput>
  }

  export type NotificationUpdateManyWithWhereWithoutCallCenterInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutCallCenterInput>
  }

  export type TransportCreateWithoutAreasInput = {
    status?: boolean
    destination: string
    user: UserCreateNestedOneWithoutTransportInput
    car: CarCreateNestedOneWithoutTransportInput
    notifications?: NotificationCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateWithoutAreasInput = {
    id?: number
    userId: number
    carId: number
    status?: boolean
    destination: string
    notifications?: NotificationUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportCreateOrConnectWithoutAreasInput = {
    where: TransportWhereUniqueInput
    create: XOR<TransportCreateWithoutAreasInput, TransportUncheckedCreateWithoutAreasInput>
  }

  export type CallCenterCreateWithoutAreaInput = {
    email: string
    password: string
    notifications?: NotificationCreateNestedManyWithoutCallCenterInput
  }

  export type CallCenterUncheckedCreateWithoutAreaInput = {
    id?: number
    email: string
    password: string
    notifications?: NotificationUncheckedCreateNestedManyWithoutCallCenterInput
  }

  export type CallCenterCreateOrConnectWithoutAreaInput = {
    where: CallCenterWhereUniqueInput
    create: XOR<CallCenterCreateWithoutAreaInput, CallCenterUncheckedCreateWithoutAreaInput>
  }

  export type CallCenterCreateManyAreaInputEnvelope = {
    data: CallCenterCreateManyAreaInput | CallCenterCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type TransportUpsertWithWhereUniqueWithoutAreasInput = {
    where: TransportWhereUniqueInput
    update: XOR<TransportUpdateWithoutAreasInput, TransportUncheckedUpdateWithoutAreasInput>
    create: XOR<TransportCreateWithoutAreasInput, TransportUncheckedCreateWithoutAreasInput>
  }

  export type TransportUpdateWithWhereUniqueWithoutAreasInput = {
    where: TransportWhereUniqueInput
    data: XOR<TransportUpdateWithoutAreasInput, TransportUncheckedUpdateWithoutAreasInput>
  }

  export type TransportUpdateManyWithWhereWithoutAreasInput = {
    where: TransportScalarWhereInput
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyWithoutAreasInput>
  }

  export type CallCenterUpsertWithWhereUniqueWithoutAreaInput = {
    where: CallCenterWhereUniqueInput
    update: XOR<CallCenterUpdateWithoutAreaInput, CallCenterUncheckedUpdateWithoutAreaInput>
    create: XOR<CallCenterCreateWithoutAreaInput, CallCenterUncheckedCreateWithoutAreaInput>
  }

  export type CallCenterUpdateWithWhereUniqueWithoutAreaInput = {
    where: CallCenterWhereUniqueInput
    data: XOR<CallCenterUpdateWithoutAreaInput, CallCenterUncheckedUpdateWithoutAreaInput>
  }

  export type CallCenterUpdateManyWithWhereWithoutAreaInput = {
    where: CallCenterScalarWhereInput
    data: XOR<CallCenterUpdateManyMutationInput, CallCenterUncheckedUpdateManyWithoutAreaInput>
  }

  export type CallCenterScalarWhereInput = {
    AND?: CallCenterScalarWhereInput | CallCenterScalarWhereInput[]
    OR?: CallCenterScalarWhereInput[]
    NOT?: CallCenterScalarWhereInput | CallCenterScalarWhereInput[]
    id?: IntFilter<"CallCenter"> | number
    email?: StringFilter<"CallCenter"> | string
    password?: StringFilter<"CallCenter"> | string
    areaId?: IntFilter<"CallCenter"> | number
  }

  export type TransportCreateWithoutNotificationsInput = {
    status?: boolean
    destination: string
    user: UserCreateNestedOneWithoutTransportInput
    car: CarCreateNestedOneWithoutTransportInput
    areas?: AreaCreateNestedManyWithoutTransportsInput
  }

  export type TransportUncheckedCreateWithoutNotificationsInput = {
    id?: number
    userId: number
    carId: number
    status?: boolean
    destination: string
    areas?: AreaUncheckedCreateNestedManyWithoutTransportsInput
  }

  export type TransportCreateOrConnectWithoutNotificationsInput = {
    where: TransportWhereUniqueInput
    create: XOR<TransportCreateWithoutNotificationsInput, TransportUncheckedCreateWithoutNotificationsInput>
  }

  export type CallCenterCreateWithoutNotificationsInput = {
    email: string
    password: string
    area: AreaCreateNestedOneWithoutCallCentersInput
  }

  export type CallCenterUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email: string
    password: string
    areaId: number
  }

  export type CallCenterCreateOrConnectWithoutNotificationsInput = {
    where: CallCenterWhereUniqueInput
    create: XOR<CallCenterCreateWithoutNotificationsInput, CallCenterUncheckedCreateWithoutNotificationsInput>
  }

  export type TransportUpsertWithoutNotificationsInput = {
    update: XOR<TransportUpdateWithoutNotificationsInput, TransportUncheckedUpdateWithoutNotificationsInput>
    create: XOR<TransportCreateWithoutNotificationsInput, TransportUncheckedCreateWithoutNotificationsInput>
    where?: TransportWhereInput
  }

  export type TransportUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: TransportWhereInput
    data: XOR<TransportUpdateWithoutNotificationsInput, TransportUncheckedUpdateWithoutNotificationsInput>
  }

  export type TransportUpdateWithoutNotificationsInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTransportNestedInput
    car?: CarUpdateOneRequiredWithoutTransportNestedInput
    areas?: AreaUpdateManyWithoutTransportsNestedInput
  }

  export type TransportUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutTransportsNestedInput
  }

  export type CallCenterUpsertWithoutNotificationsInput = {
    update: XOR<CallCenterUpdateWithoutNotificationsInput, CallCenterUncheckedUpdateWithoutNotificationsInput>
    create: XOR<CallCenterCreateWithoutNotificationsInput, CallCenterUncheckedCreateWithoutNotificationsInput>
    where?: CallCenterWhereInput
  }

  export type CallCenterUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CallCenterWhereInput
    data: XOR<CallCenterUpdateWithoutNotificationsInput, CallCenterUncheckedUpdateWithoutNotificationsInput>
  }

  export type CallCenterUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutCallCentersNestedInput
  }

  export type CallCenterUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    areaId?: IntFieldUpdateOperationsInput | number
  }

  export type PenaltyCreateManyUserInput = {
    id?: number
    amount: string
    carId: number
  }

  export type TransportCreateManyUserInput = {
    id?: number
    carId: number
    status?: boolean
    destination: string
  }

  export type PermissionNotificationCreateManyUserInput = {
    id?: number
    message: string
  }

  export type PenaltyUpdateWithoutUserInput = {
    amount?: StringFieldUpdateOperationsInput | string
    car?: CarUpdateOneRequiredWithoutPenaltiesNestedInput
  }

  export type PenaltyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type PenaltyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
  }

  export type TransportUpdateWithoutUserInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    car?: CarUpdateOneRequiredWithoutTransportNestedInput
    areas?: AreaUpdateManyWithoutTransportsNestedInput
    notifications?: NotificationUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutTransportsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionNotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionNotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionNotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type PenaltyCreateManyCarInput = {
    id?: number
    userId: number
    amount: string
  }

  export type TransportCreateManyCarInput = {
    id?: number
    userId: number
    status?: boolean
    destination: string
  }

  export type PenaltyUpdateWithoutCarInput = {
    amount?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPenaltyNestedInput
  }

  export type PenaltyUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type PenaltyUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type TransportUpdateWithoutCarInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTransportNestedInput
    areas?: AreaUpdateManyWithoutTransportsNestedInput
    notifications?: NotificationUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutTransportsNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyTransportInput = {
    id?: number
    callCenterId: number
  }

  export type AreaUpdateWithoutTransportsInput = {
    area?: JsonNullValueInput | InputJsonValue
    callCenters?: CallCenterUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutTransportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    callCenters?: CallCenterUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutTransportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
  }

  export type NotificationUpdateWithoutTransportInput = {
    callCenter?: CallCenterUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutTransportInput = {
    id?: IntFieldUpdateOperationsInput | number
    callCenterId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUncheckedUpdateManyWithoutTransportInput = {
    id?: IntFieldUpdateOperationsInput | number
    callCenterId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateManyCallCenterInput = {
    id?: number
    transportId: number
  }

  export type NotificationUpdateWithoutCallCenterInput = {
    transport?: TransportUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutCallCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUncheckedUpdateManyWithoutCallCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
  }

  export type CallCenterCreateManyAreaInput = {
    id?: number
    email: string
    password: string
  }

  export type TransportUpdateWithoutAreasInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTransportNestedInput
    car?: CarUpdateOneRequiredWithoutTransportNestedInput
    notifications?: NotificationUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateManyWithoutAreasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type CallCenterUpdateWithoutAreaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationUpdateManyWithoutCallCenterNestedInput
  }

  export type CallCenterUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notifications?: NotificationUncheckedUpdateManyWithoutCallCenterNestedInput
  }

  export type CallCenterUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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