// src/routes/dashboard/+layout.server.ts
export const load = async ({ locals }) => {
  return {
    profile: locals.profile,
  }
}
