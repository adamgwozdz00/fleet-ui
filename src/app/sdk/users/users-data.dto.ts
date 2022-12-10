export interface UsersDataDTO {
  users: UserDTO[]
}

export interface UserDTO {
  firstName: string,
  id: number,
  lastName: string,
  title: string
}
