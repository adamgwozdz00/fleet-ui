export interface RegistrationDTO {
  firstName: string,
  lastName: string,
  password: string,
  role: "USER" | "ADMIN",
  title: string,
  username: string
}
