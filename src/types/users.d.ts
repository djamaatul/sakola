export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  status: string;
  created_at: Date;
  created_by?: string | null;
  updated_at?: Date;
  updated_by?: string | null;
};
