export function getControlvalue(ctrlvalue: string | number): number {
    const numValue = Number(ctrlvalue.toString().trim());
    return isNumber(numValue) ? numValue : 0;
  }

  export function isNumber(value: string | number): boolean {
    return !Number.isNaN(Number(value));
  }