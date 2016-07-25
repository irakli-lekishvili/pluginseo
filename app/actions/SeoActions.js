import alt from 'alt'
import { createActions } from 'alt-utils/lib/decorators'

@createActions(alt)
export default class SeoActions {
  updateTodo(id, text) {
    return { id, text }
  }
}
