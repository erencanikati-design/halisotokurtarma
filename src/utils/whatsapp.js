import { COMPANY_INFO } from '../data/constants';

/**
 * Opens WhatsApp with prefilled message, attempting to attach live GPS coordinates if permitted.
 * @param {string} customMsg - Optional custom message
 * @param {function} onStatusChange - Optional callback for loading state
 */
export const sendWhatsAppWithLocation = (customMsg = null, onStatusChange = null) => {
  const baseMessage = customMsg || COMPANY_INFO.whatsappMessage;
  const phoneNumber = COMPANY_INFO.rawPhone;

  if (typeof window === 'undefined') return;

  if (onStatusChange) onStatusChange('getting_location');

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (onStatusChange) onStatusChange('ready');
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;
        const finalMessage = `${baseMessage}\n\n📍 Canlı Konumum: ${mapsUrl}`;
        window.open(`https://wa.me/90${phoneNumber}?text=${encodeURIComponent(finalMessage)}`, '_blank');
      },
      (error) => {
        // Fallback without coordinates if user denies or location times out
        if (onStatusChange) onStatusChange('fallback');
        window.open(`https://wa.me/90${phoneNumber}?text=${encodeURIComponent(baseMessage)}`, '_blank');
      },
      { timeout: 7000, enableHighAccuracy: true, maximumAge: 30000 }
    );
  } else {
    if (onStatusChange) onStatusChange('fallback');
    window.open(`https://wa.me/90${phoneNumber}?text=${encodeURIComponent(baseMessage)}`, '_blank');
  }
};

