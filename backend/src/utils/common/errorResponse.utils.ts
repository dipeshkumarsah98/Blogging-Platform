export default (status: number, message: string, details: string) => ({
  success: false,
  status,
  message,
  details,
});
