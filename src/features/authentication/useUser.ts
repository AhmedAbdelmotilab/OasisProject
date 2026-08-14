// Placeholder until Supabase auth is wired up in this starter.
export type UseUserResult = {
  user: {
    email: string;
    user_metadata: { fullName: string };
  };
};

export function useUser(): UseUserResult {
  return {
    user: { email: "", user_metadata: { fullName: "" } },
  };
}
