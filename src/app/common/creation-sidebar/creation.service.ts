export interface CreationService<INPUT> {
  create(input: INPUT): Promise<any>
}
