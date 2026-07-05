export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}

export function formatAuthError(error: { message?: string } | null | undefined): string {
  if (!error?.message) {
    return 'Something went wrong. Please try again.';
  }

  return error.message;
}
