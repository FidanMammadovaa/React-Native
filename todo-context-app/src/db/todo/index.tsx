import * as SQLite from 'expo-sqlite'

export function createDatabase()
{
    const db = SQLite.openDatabase('todo.db')
    return db
}