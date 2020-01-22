/* 
  Form Interface
*/
export interface OfferForm {
  _id?: string;
  offerName: string;
  offerImage?: string;
  conditions: Condition[];
  questions: Question[];
}

/*
  Conditions Interface
*/

// General Type
type Condition = PriceCondition | QuantityCondition;

// Condition Types
export enum ConditionTypes {
  PRICE,
  QUANTITY
}

export interface PriceCondition {
  type: ConditionTypes.PRICE;
  data: {
    price: number;
  };
}

export interface QuantityCondition {
  type: ConditionTypes.QUANTITY;
  data: {
    quantity: number;
  };
}

/*
  Questions Interface
*/

// General Type
type Question = BranchingQuestion | SelectingQuestion;

// Question Types
export enum QuestionTypes {
  BRANCHING,
  SELECTING
}

export interface BranchingQuestion {
  type: QuestionTypes.BRANCHING;
  data: BranchingOption[];
}

export interface BranchingOption {
  label: string;
  condition: ConditionModifier[];
  questions: Question[];
}

export interface SelectingQuestion {
  type: QuestionTypes.SELECTING;
  data: SelectingOption[];
}

export interface SelectingOption {
  label: string;
  condition: ConditionModifier[];
}

/*
  Condition Modifier Interface
*/

// General Type
type ConditionModifier = PriceConditionModifier | QuantityConditionModifier;

export interface PriceConditionModifier extends PriceCondition {
  type: ConditionTypes.PRICE;
  data: {
    price: number;
  };
}

export interface QuantityConditionModifier extends QuantityCondition {
  type: ConditionTypes.QUANTITY;
  data: {
    quantity: number;
  };
}
