export interface InputFileImporter {

  import(data: string | ArrayBuffer): Promise<void>

}
