export function isNullOrUndefinedOrEmpty(value: any) {
    return value === undefined || value === null || value.length === 0 || value === "";
  }