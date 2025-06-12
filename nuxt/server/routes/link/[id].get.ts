import { sendRedirect } from "h3";

declare global {
  const LINKAGES: {
    get(key: string): Promise<string | null>;
  };
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid link ID",
    });
  }

  const redirect = await LINKAGES.get(id);

  if (redirect === null) {
    return await sendRedirect(event, "/link-not-found");
  }

  return await sendRedirect(event, redirect);
});
