import axios from 'axios'

export const ENDPOINT = 'https://api.magicthegathering.io'
export const VERSION = 'v1'

class Path {
  static join(...args) {
    return args.join('/')
  }
}

class QueryBuilder {
  constructor(type) {
    this.type = type || ''
    this.id = null
    this.params = {}
  }

  get origin() {
    return Path.join(ENDPOINT, VERSION, this.type)
  }

  get urlParams() {
    if(this.params && Object.keys(this.params).length > 0)
      return '?' + Object.keys(this.params).map(key => `${key}=${this.params[key]}`).join('&')
    return ''
  }

  get callee() {
    if(this.id) return Path.join(this.origin, this.id) + this.urlParams
    return this.origin + this.urlParams
  }

  async json() {
    const response = await axios.get(this.callee, this.params)
    const headers = response.headers
    const data = { totalCount: headers['total-count'] }
    data[this.type] = response[this.type]
    return data
  }

  where(params) {
    this.params = Object.assign({}, this.params, params)
    return this
  }

  async findBy(id) {
    this.id = id
    return await this.json()
  }

  async findAll() {
    return await this.json()
  }
}

class Queryable {
  static get type() {
    return ''
  }

  static where(params) {
    const builder = new QueryBuilder(this.type)
    return builder.where(params)
  }

  static async findBy(id) {
    const builder = new QueryBuilder(this.type)
    return await builder.findBy(id)[this.type]
  }

  static async findAll() {
    const builder = new QueryBuilder(this.type)
    return await builder.findAll()
  }
}

export class Cards extends Queryable {
  /**
   * @override from Queryable
   */
  static get type() {
    return 'cards'
  }
}

export class Sets extends Queryable {
  /**
   * @override from Queryable
   */
  static get type() {
    return 'sets'
  }
}

export class Types {}

export class Subtypes {}

export class Supertypes {}

export class Formats {}

