interface BaseModel {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface AdminModel extends BaseModel {
  family_name: string;
  given_name: string;
  family_name_kana: string;
  given_name_kana: string;
  email: string;
  password: string;
  password_confirmation: string;
  remember_digest: string | null;
}
