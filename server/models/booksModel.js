const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  books: {
    type: [
      {
        title: String,
        genres: { type: String, required: false },
        summary: { type: String, required: false },
        img: String,
        link: String,
      },
    ],
    default: [
      {
        title: "Game of Thrones: Clash of Kings",
        genres: "Drama|Thriller",
        summary:
          "A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright.",
        img: "http://books.google.com/books/content?id=72aHpwAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73aS5LTAH_tDpwPWo6_FLYOn5xEQKdOrlYF0BtjIw8A5uyuH2ezdW8XYRVCWTWTEtlLMl_qDhDS-7hYXv1E6jzt3QpkFp4rymtj94Tsu7Z22XoBJs6BG9jSpk-OqBzkybNnh5ac&source=gbs_api",
        link: "https://books.google.co.in/books/about/A_Clash_of_Kings.html?id=R7Wp_JlmFIQC&redir_esc=y",
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        genres: "Fantasy",
        summary:
          "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
        img: "https://books.google.co.in/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE7390vcNelJmMItRcRoj7CjeLa0Ytirl-NPa4BDaYywyJm9V0EbjVkAFmwmtcoMxke9uJwxjc8cRiXm8YvzJdiWqKWvKsjy8EAvuETsC_Au2NiRBpINqrHZlDBLx11hkQ0hpgrtf",
        link: "https://www.google.co.in/books/edition/Harry_Potter_and_the_Sorcerer_s_Stone/3YUrtAEACAAJ?hl=en",
      },
      {
        title: "Harry Potter and the Deathly Hallows",
        genres: "Drame|Thriller",
        summary:
          "A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright.",
        img: "http://books.google.com/books/content?id=N6DeDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        link: "https://www.google.co.in/books/edition/Harry_Potter_and_the_Deathly_Hallows/N6DeDQAAQBAJ?hl=en",
      },
      {
        title: "The Serpent's Revenge",
        genres: "Drame|Thriller",
        summary:
          "A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright.",
        img: "http://books.google.com/books/content?id=cl5CDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://www.google.co.in/books/edition/The_Serpent_s_Revenge/cl5CDQAAQBAJ?hl=en&gbpv=0",
      },
      {
        title: "Harry Potter and the Chamber Secrets",
        genres: "Drame|Thriller",
        summary:
          "A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright.",
        img: "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "https://www.google.co.in/books/edition/Harry_Potter_and_the_Chamber_of_Secrets/5iTebBW-w7QC?hl=en",
      },
      {
        title: "The Magic Drum and Other Favourite Stories",
        genres: "Drame|Thriller",
        summary:
          "A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright.",
        img: "http://books.google.com/books/content?id=_cwDAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://www.google.co.in/books/edition/The_Magic_Drum_and_Other_Favourite_Stori/_cwDAQAAQBAJ?hl=en&gbpv=0",
      },
      {
        title: "Making India Awesome",
        genres: "Drame|Thriller",
        summary:
          "A Clash of Kings picks up the story where A Game of Thrones leaves off. The Seven Kingdoms are plagued by civil war, the Night's Watch mounts a reconnaissance force north of the Wall, and in the distant east, Daenerys Targaryen continues her quest to return to the Seven Kingdoms and claim her birthright.",
        img: "http://books.google.com/books/content?id=kxc6jgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "https://www.google.co.in/books/edition/Making_India_Awesome/kxc6jgEACAAJ?hl=en",
      },
    ],
  },
});

const BooksModel = mongoose.model("booksSchema", booksSchema);

module.exports = BooksModel;