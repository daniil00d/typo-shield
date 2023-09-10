// первый шаг: сделать некоторый тип, который принимает как первый тип строку с
// некоторой функцией с неизвестными типами, последующие же аргументы будут
// этими самыми неизвестными типами

export type EndpointConstraint<Input, Output> = (input: Input) => Output;
export type EndpointConstraintDefault = () => void;

// Parser
type ForwardOperator = "->";
type BackwardOperator = "<-";
type BidirectionalOperator = "<->";
type Operator = ForwardOperator | BackwardOperator | BidirectionalOperator;

type InputOperand = "Input";
type OutputOperand = "Output";
type Operand = InputOperand | OutputOperand;

export type EndpointSchema<Input = unknown, Output = unknown> = {
  Input: Input;
  Output: Output;
};

export type ParseEndpoint<
  DSL, // Output <- Input
  Schema extends EndpointSchema
> = DSL extends `${infer LeftOperand extends Operand} ${infer InfOperator extends Operator} ${infer RightOperand extends Operand}`
  ? InfOperator extends ForwardOperator
    ? EndpointConstraint<Schema[LeftOperand], Schema[RightOperand]>
    : InfOperator extends BackwardOperator
    ? EndpointConstraint<Schema[RightOperand], Schema[LeftOperand]>
    : EndpointConstraint<
        Schema[RightOperand] | Schema[LeftOperand],
        Schema[RightOperand] | Schema[LeftOperand]
      >
  : EndpointConstraintDefault;
