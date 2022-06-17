export interface IInput {
  type: string,
  name: string,
  label?: string,
  data?: any,
}

export interface IUser{
  id?: string;
  post?: IPost[];
  name: string;
  email: string;
  password?: string;
  isActive?: boolean;
}

export interface IPost{
  id?: string;
  user?: IUser;
  title: string;
  content: string;
  created_at?: Date;
}

export interface IFormData{
  title: string,
  input: {
    name: string,
    type: keyof '' | 'text' | 'password' | 'content',
    value: string,
    label: string,
    validate?: [ 'required'?, 'minLength'? ]
  }[],
}
