import { Component } from '@angular/core';
import { Book } from '../models/book';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  // book : Book = {
  //   id: 1,
  //   title: 'Python',
  //   author: 'Durga Prasad'
  // }

  newBookTitle: string = "";
  newBookAuthor: string = "";
  books : Book[] = []
  ngOnInit(): void {
    let saveBooks = localStorage.getItem("books")
    this.books = saveBooks ? JSON.parse(saveBooks) : []
  }

  addBook(){
    // alert(this.newBookAuthor + " " + this.newBookAuthor)
    if(this.newBookTitle.trim().length && this.newBookAuthor){
      let newBook : Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }
      this.books.push(newBook)

      this.newBookTitle = "";
      this.newBookAuthor = "";

      // alert(this.books.length)
      //using local storage to store data in JSON formate into the browser
      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  deleteBook(index: number){
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }
}
