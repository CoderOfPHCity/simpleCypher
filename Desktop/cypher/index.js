
function genKey() {
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  let key = ''
  while (key.length < 100) {
    key += chars[Math.floor(Math.random()*26)]
  }
  return key
}
export class Cipher {
  constructor(key = genKey()) {
    this._key = key
    // Create int version of key
    this._key_int = new Array(key.length)
    for (let i = 0; i < key.length; i++) {
      this._key_int[i] = key[i].charCodeAt(0) - 'a'.charCodeAt(0)
    }
  }
  decChar(ec, k) {
    let mec = ec.charCodeAt(0) - 'a'.charCodeAt(0) - k
    if (mec < 0) {
      mec += 26
    }
    return String.fromCharCode('a'.charCodeAt(0)+mec)
  }
  encChar(c, k) {
    let mc = c.charCodeAt(0) - 'a'.charCodeAt(0) + k
    if (mc >= 26) {
      mc -= 26
    }
    return String.fromCharCode('a'.charCodeAt(0)+mc)
  }
  encode(s) {
    let es = ''
    let i = 0
    for (const c of s) {
      es += this.encChar(c, this._key_int[i])
      i = (i + 1) % this._key_int.length
    }
    return es
  }
  decode(es) {
    let s = ''
    let i = 0
    for (const ec of es) {
      s += this.decChar(ec, this._key_int[i])
      i = (i + 1) % this._key_int.length
    }
    return s
  }
  get key() {
    return this._key
  }
}
