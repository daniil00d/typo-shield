import { Equal, Expect } from '@core/utils/test';
import { EndpointConstraintDefault, EndpointSchema, ParseEndpoint } from './01.simple_dsl';

type UserInput = { id: number };
type UserOutput = { username: string; email: string };

/**
 * Здесь хочется получить тип-ограничение вида:
 *
 * ```ts
 * type UserEndpointConstraint = (input: UserInput) => UserOutput
 * ```
 */
type UserEndpoint__1 = ParseEndpoint<
  `Input -> Output`,
  EndpointSchema<UserInput, UserOutput>
>;
type UserEndpoint__2 = ParseEndpoint<
  `Output -> Input`,
  EndpointSchema<UserInput, UserOutput>
>;
type UserEndpoint__3 = ParseEndpoint<
  `Input <- Output`,
  EndpointSchema<UserInput, UserOutput>
>;
type UserEndpoint__4 = ParseEndpoint<
  `Output <- Input`,
  EndpointSchema<UserInput, UserOutput>
>;

type UserEndpoint__5 = ParseEndpoint<
  `Output <-> Input`,
  EndpointSchema<UserInput, UserOutput>
>;

// tests and wrongs
type UserEndpoint__wrong = ParseEndpoint<
  `Output + Input`,
  EndpointSchema<UserInput, UserOutput>
>;

type UserEndpoint__5_test = Expect<
  Equal<
    UserEndpoint__5,
    (input: UserInput | UserOutput) => UserInput | UserOutput
  >
>;
type UserEndpoint__wrong_test = Expect<
  Equal<UserEndpoint__wrong, EndpointConstraintDefault>
>;

type UserEndpoint__1_test = Expect<
  Equal<UserEndpoint__1, (input: UserInput) => UserOutput>
>;

type UserEndpoint__2_test = Expect<
  Equal<UserEndpoint__2, (input: UserOutput) => UserInput>
>;

type UserEndpoint__3_test = Expect<
  Equal<UserEndpoint__3, (input: UserOutput) => UserInput>
>;

type UserEndpoint__4_test = Expect<
  Equal<UserEndpoint__4, (input: UserInput) => UserOutput>
>;
