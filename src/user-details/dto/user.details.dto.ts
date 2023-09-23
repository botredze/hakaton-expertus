

export class CreateUserDetalsDto{
  userid: number;
  firstName:string;
  lastName:string;
  age?: number;
  avatar?: string;
  language?: string;
  createdAt: string;
}

export interface UserData {
  email: string;
  userDetails: {
    firstName: string | null;
    lastName: string | null;
    age: number | null;
    avatar: string | null;
    language: string | null;
    createdAt: string | null;
  };
}
