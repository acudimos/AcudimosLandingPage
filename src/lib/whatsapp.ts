export const WHATSAPP_NUMBER = "573184277698";
export const WHATSAPP_DISPLAY = "+57 318 427 7698";

export function whatsappLink(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}`;
}
