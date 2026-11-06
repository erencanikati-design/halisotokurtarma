import { COMPANY_INFO } from '../data/constants';

/**
 * Normalizes phone number into international format without leading zero
 * e.g., "05353579525" -> "905353579525"
 */
export const getCleanPhone = () => {
  const raw = COMPANY_INFO.rawPhone || '05353579525';
  const clean = raw.replace(/\D/g, '');
  if (clean.startsWith('90')) return clean;
  if (clean.startsWith('0')) return '9' + clean;
  return '90' + clean;
};

/**
 * Opens WhatsApp with prefilled message, attempting to attach live GPS coordinates.
 * @param {string} customMsg - Optional custom message
 * @param {function} onStatusChange - Optional callback for loading state
 */
export const sendWhatsAppWithLocation = (customMsg = null, onStatusChange = null) => {
  const baseMessage = customMsg || COMPANY_INFO.whatsappMessage;
  const targetPhone = getCleanPhone();

  if (typeof window === 'undefined') return;

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    window.location.href = url;
  };

  if (onStatusChange) onStatusChange('getting_location');

  let finished = false;

  const completeWithLocation = (lat, lng) => {
    if (finished) return;
    finished = true;
    if (onStatusChange) onStatusChange('ready');
    const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;
    const finalMessage = `${baseMessage}\n\n📍 Bulunduğum Canlı Konum:\n${mapsUrl}`;
    openWhatsApp(finalMessage);
  };

  const completeFallback = () => {
    if (finished) return;
    finished = true;
    if (onStatusChange) onStatusChange('fallback');
    const finalMessage = `${baseMessage}\n(Not: WhatsApp içindeki ataş 📎 simgesinden konumumu gönderebilirim.)`;
    openWhatsApp(finalMessage);
  };

  if (navigator.geolocation) {
    // 10 second timeout for mobile GPS locks
    const timer = setTimeout(() => {
      completeFallback();
    }, 9000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timer);
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        completeWithLocation(lat, lng);
      },
      (error) => {
        clearTimeout(timer);
        console.warn('Geolocation error or denied:', error);
        completeFallback();
      },
      {
        enableHighAccuracy: false, // Much faster lock on mobile phones using cellular/WiFi
        timeout: 8000,
        maximumAge: 60000
      }
    );
  } else {
    completeFallback();
  }
};

