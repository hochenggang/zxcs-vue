// 定义数据类型

type Book = [string, string, string, string]
type Books = Array<Book>
type Chapter = [ string, number, number]
type Chapters = Array<Chapter>
type History = [string, string, string, string]

export type { History, Book, Books, Chapter, Chapters }
