export const WHATSAPP_NUMBER = "573233971537";
export const WHATSAPP_DISPLAY = "+57 323 397 1537";

export function whatsappLink(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}`;
}
