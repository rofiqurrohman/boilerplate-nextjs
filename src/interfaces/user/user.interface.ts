type UserID = number;

export interface IUser {
  id: UserID;
  email?: string;
  mobile?: string;
  full_name: string;
}
