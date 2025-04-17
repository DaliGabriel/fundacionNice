/**
 * Utility functions for formatting dates in different formats.
 * Provides both Spanish-specific and customizable date formatting options.
 *
 * @module DateFormat
 */

/**
 * Array of month names in Spanish.
 * Used for Spanish-specific date formatting.
 */
const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

/**
 * Formats a date string to Spanish format: "DD de Month YYYY"
 *
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string in Spanish format
 *
 * @example
 * formatDateES("2023-04-15") // Returns "15 de Abril 2023"
 *
 * @throws {Error} If the input date string is invalid
 */
export const formatDateES = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = MONTHS_ES[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} ${year}`;
};

/**
 * Formats a date string using the Intl.DateTimeFormat API.
 * Provides flexible date formatting with locale support.
 *
 * @param {string} dateString - The date string to format
 * @param {string} [locale="es"] - The locale to use for formatting
 * @param {Intl.DateTimeFormatOptions} [options] - Custom formatting options
 * @returns {string} Formatted date string according to the specified options
 *
 * @example
 * // Basic usage
 * formatDate("2023-04-15") // Returns "15/4/2023" (Spanish format)
 *
 * @example
 * // With custom options
 * formatDate("2023-04-15", "en-US", {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric'
 * }) // Returns "Saturday, April 15, 2023"
 *
 * @throws {Error} If the input date string is invalid
 */
export const formatDate = (
  dateString: string,
  locale: string = "es",
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, options);
};
