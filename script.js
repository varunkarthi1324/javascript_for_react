const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
//destructuring an array
const book = getBook(3);
book;

const {
  title,
  author,
  genres,
  hasMovieAdaptation,
  pages,
  publicationDate,
  reviews,
  translations,
} = book;
console.log(title, author, genres);

//rest operator
const [primarygenre, secondarygenre, ...Othergenre] = genres;

console.log(primarygenre, secondarygenre, Othergenre);

//spread operator
const newgenre = ["epic fantasy", ...genres];
newgenre;

const updateBook = { moviePublicationDate: "2001-12-19", ...book };
updateBook;

// function getyear(str) {
//   return str.split("-")[0];
// }
const getyear = (str) => str.split("-")[0];

const summary = `${title}, a ${pages} a book,written by ${author} which is published in ${getyear(
  publicationDate
)},the book is adapted from ${hasMovieAdaptation ? "" : "nothing"}`;
summary;

const range = pages > 1000 ? "over a thousand" : "less than thousand";
console.log(`the book has ${range}`);
console.log(summary);

//And is for falsy value
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "this book has a movie");
console.log("jones" && "some string");
console.log(0 && "some string");
//or is for true operator
console.log(true || "some string");
console.log(false || "some string");

// const spanishtrans = book.translations.spanish || "no transalation";
// spanishtrans;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(count);

// nullish coaleashing operator

function getTotalreview(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodread + librarything;
}
console.log(getTotalreview(book));

//optional chaining
function getTotalreview(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodread + librarything;
}

//mapping
const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialdata = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalreview(book),
}));

console.log(essentialdata);

//filter
const longbooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longbooks);

const adventurebook = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

adventurebook;

// reduce
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//sort
const arr = [5, 2, 7, 6, 1, 3];
const des_sorted = arr.slice().sort((a, b) => b - a);
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(des_sorted);

const sorted_pages = books.slice().sort((a, b) => a.pages - b.pages);
sorted_pages;

//working with immutable array
const newbook = {
  id: 6,
  title: "love life",
  author: "anonymous",
};

const booksAfterAdd = [...books, newbook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 12 } : book
);
booksAfterUpdate;
map-update,filter-delete,split-new element

//in vs code use quokka for better experience
*/

//async fn and await

// console.log(
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// );

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
console.log(getTodos());
