import { Post } from '../models'

export const utilService = {
  saveToStorage,
  loadFromStorage,
  makeId,
}

function saveToStorage(key: string, value: Post[]) {
  if (typeof key !== 'string' && !value) return
  var valueTostringify = JSON.stringify(value)
  if (valueTostringify) localStorage.setItem(key, valueTostringify)
}

function loadFromStorage(key: string) {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function makeId(length = 8) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
