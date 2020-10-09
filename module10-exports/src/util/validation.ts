// Validation logic
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable) {
  const { value, required, minLength, maxLength, min, max } = validatableInput;

  let isValid = true;

  if (required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }

  if (minLength && typeof value === 'string') {
    isValid = isValid && value.length >= minLength;
  }

  if (maxLength && typeof value === 'string') {
    isValid = isValid && value.length <= maxLength;
  }

  if (min && typeof value === 'number') {
    isValid = isValid && value >= min;
  }

  if (max && typeof value === 'number') {
    isValid = isValid && value <= max;
  }

  return isValid;
}
