
export class GifClass {
  id: number
  description: string
  url:string
  dateUpload: string
  by:string

  constructor(obj: any) {
    const { id, images , title , username , import_datetime
    } = obj
    const {fixed_height } = images
    const {url} = fixed_height
    this.dateUpload = import_datetime
    this.id = id
    this.description = title
    this.url = url
    this.by = username
  }
}


