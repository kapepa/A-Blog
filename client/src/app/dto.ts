export interface IInput {
  type: string,
  name: string,
  label?: string,
  data?: any,
}

export interface IUser{
  id: string;
  name: string;
  email: string;
  password?: string;
  isActive?: boolean;
}

export interface IFormData{
  title: string,
  input: {
    name: string,
    type: string,
    value: string,
    label: string,
    validate?: [ 'required'?, 'minLength'? ]
  }[],
}
