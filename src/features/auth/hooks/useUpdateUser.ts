// Placeholder until Supabase auth is wired up in this starter.
export type UseUpdateUserResult = {
  updateUser: (
    data: { password: string },
    options?: { onSuccess?: () => void }
  ) => void;
  isUpdating: boolean;
};

export function useUpdateUser(): UseUpdateUserResult {
  return {
    updateUser: () => {},
    isUpdating: false,
  };
}
