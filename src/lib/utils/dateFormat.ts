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
 * @param dateString - The date string to format
 * @returns Formatted date string in Spanish
 */
export const formatDateES = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = MONTHS_ES[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} ${year}`;
};

/**
 * Formats a date string to a custom format
 * @param dateString - The date string to format
 * @param locale - The locale to use for formatting (defaults to 'es')
 * @param options - DateTimeFormatOptions for custom formatting
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  locale: string = "es",
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, options);
};
