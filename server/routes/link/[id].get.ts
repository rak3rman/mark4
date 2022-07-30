import { sendRedirect } from "h3";

export default defineEventHandler(async (event) => {
    // @ts-ignore
    const redirect = await LINKAGES.get(event.context.params.id);
    if (redirect === null) {
        return await sendRedirect(event, "/link-not-found")
    }
    return await sendRedirect(event, redirect)
})