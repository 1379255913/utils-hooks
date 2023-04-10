export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

export function isNumber(value: any): value is number {
  return typeof value === "number";
}

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function isSymbol(value: any): value is symbol {
  return typeof value === "symbol";
}

export function isArray(value: any): value is Array<any> {
  return Array.isArray(value);
}

export function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

export function isNull(value: any): value is null {
  return value === null;
}

export function isUndefined(value: any): value is undefined {
  return value === undefined;
}

export function isEmpty(value: any): boolean {
  return (
    value === null ||
    value === undefined ||
    (isString(value) && value.trim() === "") ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && !Object.keys(value).length)
  );
}

export function isFunction(value: any): value is Function {
  return typeof value === "function";
}

export function isObject(value: any): value is Record<any, any> {
  return value !== null && typeof value === "object";
}

export function isDate(value: any): value is Date {
  return value instanceof Date;
}

export function isPromise(value: any): value is Promise<any> {
  return isObject(value) && isFunction(value.then) && isFunction(value.catch);
}
