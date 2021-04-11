import * as React from 'react';
import { AdminModel as OriginalAdminModel } from '../../interface/models';

export interface AdminModel extends OriginalAdminModel {
  name: string;
}

interface BackendBaseContextInterface {
  currentAdmin: AdminModel;
}

export const BackendBaseContext = React.createContext<BackendBaseContextInterface>({
  currentAdmin: {
    id: NaN,
    family_name: '',
    given_name: '',
    family_name_kana: '',
    given_name_kana: '',
    email: '',
    password: '',
    password_confirmation: '',
    remember_digest: '',
    created_at: '',
    updated_at: '',
    name: '',
  },
});
