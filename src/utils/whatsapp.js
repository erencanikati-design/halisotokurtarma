import { COMPANY_INFO } from '../data/constants';

/**
 * Normalizes phone number into international format without leading zero
 * e.g., "05353579525" -> "905353579525"
 */
const getCleanPhone = () => {
  const raw = COMPANY_INFO.rawPhone || '05353579525';
  const clean = raw.replace(/\D/g, '');
  if (clean.startsWith('90')) return clean;
  if (clean.startsWith('0')) return '9' + clean;
  return '90' + clean;
};

/**
 * Opens WhatsApp with prefilled message, attempting to attach live GPS coordinates if permitted.
 * @param {string} customMsg - Optional custom message
 * @param {function} onStatusChange - Optional callback for loading state
 */
export const sendWhatsAppWithLocation = (customMsg = null, onStatusChange = null) => {
  const baseMessage = customMsg || COMPANY_INFO.whatsappMessage;
  const targetPhone = getCleanPhone();

  if (typeof window === 'undefined') return;

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    // window.location.href is much more reliable on mobile devices than window.open
    window.location.href = url;
  };

  if (onStatusChange) onStatusChange('getting_location');

  let resolved = false;

  // Set a safety timeout fallback in case user ignores geolocation prompt
  const fallbackTimer = setTimeout(() => {
    if (!resolved) {
      resolved = true;
      if (onStatusChange) onStatusChange('fallback');
      openWhatsApp(baseMessage);
    }
  }, 4000);

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (resolved) return;
        resolved = true;
        clearTimeout(fallbackTimer);
        if (onStatusChange) onStatusChange('ready');
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;
        const finalMessage = `${baseMessage}\n\n📍 Canlı Konumum: ${mapsUrl}`;
        openWhatsApp(finalMessage);
      },
      (error) => {
        if (resolved) return;
        resolved = true;
        clearTimeout(fallbackTimer);
        if (onStatusChange) onStatusChange('fallback');
        openWhatsApp(baseMessage);
      },
      { timeout: 3500, enableHighAccuracy: true, maximumAge: 30000 }
    );
  } else {
    resolved = true;
    clearTimeout(fallbackTimer);
    if (onStatusChange) onStatusChange('fallback');
    openWhatsApp(baseMessage);
  }
};

