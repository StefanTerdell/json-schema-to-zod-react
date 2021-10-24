import { parseAnyOf } from "./parseAnyOf";
import { parseBoolean } from "./parseBoolean";
import { parseDefault } from "./parseDefault";
import { parseMultipleType } from "./parseMultipleType";
import { parseNot } from "./parseNot";
import { parseNull } from "./parseNull";
import { parseAllOf } from "./parseAllOf";
import { parseArray } from "./parseArray";
import { parseConst } from "./parseConst";
import { parseEnum } from "./parseEnum";
import { parseIfThenElse } from "./parseIfThenElse";
import { parseNumber } from "./parseNumber";
import { parseObject } from "./parseObject";
import { parseString } from "./parseString";
import {
  JSONSchema7,
  JSONSchema7Definition,
  JSONSchema7Type,
  JSONSchema7TypeName,
} from "json-schema";

const is = {
  object: (x: JSONSchema7): x is JSONSchema7 & { type: "object" } =>
    x.type === "object",
  array: (x: JSONSchema7): x is JSONSchema7 & { type: "array" } =>
    x.type === "array",
  multipleType: (
    x: JSONSchema7
  ): x is JSONSchema7 & { type: JSONSchema7TypeName[] } =>
    Array.isArray(x.type),
  anyOf: (
    x: JSONSchema7
  ): x is JSONSchema7 & {
    anyOf: JSONSchema7Definition[];
  } => !!x.anyOf,
  allOf: (
    x: JSONSchema7
  ): x is JSONSchema7 & {
    allOf: JSONSchema7Definition[];
  } => !!x.allOf,
  not: (
    x: JSONSchema7
  ): x is JSONSchema7 & {
    not: JSONSchema7Definition;
  } => !!x.not,
  enum: (
    x: JSONSchema7
  ): x is JSONSchema7 & {
    enum: JSONSchema7Type | JSONSchema7Type[];
  } => !!x.enum,
  const: (
    x: JSONSchema7
  ): x is JSONSchema7 & {
    const: JSONSchema7Type;
  } => !!x.const,
  primitive: <T extends "string" | "number" | "integer" | "boolean" | "null">(
    x: JSONSchema7,
    p: T
  ): x is JSONSchema7 & { type: T } => x.type === p,
  conditional: (
    x: JSONSchema7
  ): x is JSONSchema7 & {
    if: JSONSchema7Definition;
    then: JSONSchema7Definition;
    else: JSONSchema7Definition;
  } => Boolean(x.if && x.then && x.else),
};

export const parseSchema = (schema: JSONSchema7 | boolean): string => {
  if (typeof schema !== "object") return "z.unknown()";
  if (is.object(schema)) {
    return parseObject(schema);
  } else if (is.array(schema)) {
    return parseArray(schema);
  } else if (is.multipleType(schema)) {
    return parseMultipleType(schema);
  } else if (is.anyOf(schema)) {
    return parseAnyOf(schema);
  } else if (is.allOf(schema)) {
    return parseAllOf(schema);
  } else if (is.not(schema)) {
    return parseNot(schema);
  } else if (is.enum(schema)) {
    return parseEnum(schema); //<-- needs to come before primitives
  } else if (is.const(schema)) {
    return parseConst(schema);
  } else if (is.primitive(schema, "string")) {
    return parseString(schema);
  } else if (is.primitive(schema, "number")) {
    return parseNumber(schema);
  } else if (is.primitive(schema, "boolean")) {
    return parseBoolean(schema);
  } else if (is.primitive(schema, "null")) {
    return parseNull(schema);
  } else if (is.conditional(schema)) {
    return parseIfThenElse(schema);
  } else {
    return parseDefault(schema);
  }
};
