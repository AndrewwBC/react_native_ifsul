export interface AuthUserContextProps {
  storeUserSession: (email: string, pass: string) => Promise<void>;
  retrieveUserSession: () => Promise<any>;
  deleteUserSession: () => Promise<void>;
  signIn: (
    email: string,
    pass: string,
  ) => Promise<
    | { emailIsNotVerified?: true }
    | { userToken?: string }
    | {
        errorMsg?:
          | 'Usuário não cadastrado.'
          | 'Erro na senha.'
          | 'Email inválido.'
          | 'Usuário desabilitado.'
          | 'Email em uso. Tente outro email.'
          | 'Erro desconhecido. Contate o administrador';
      }
  >;
}
