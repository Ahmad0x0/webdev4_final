// Runs the script when the window finishes loading
window.onload = function () {


    // Array containing details of rare books
    const rareBooks = [
        {
            title: "The Ancient Manuscript",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e851bc9-e6bd-4763-ad66-34daae39a16e/dgif4he-fd4c6838-5ea2-4dfd-ae10-5578fd27ee29.jpg/v1/fill/w_400,h_588,q_75,strp/the_ancient_manuscript___book_cover_designer_by_book_cover_designer_dgif4he-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlODUxYmM5LWU2YmQtNDc2My1hZDY2LTM0ZGFhZTM5YTE2ZVwvZGdpZjRoZS1mZDRjNjgzOC01ZWEyLTRkZmQtYWUxMC01NTc4ZmQyN2VlMjkuanBnIiwiaGVpZ2h0IjoiPD01ODgiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzdlODUxYmM5LWU2YmQtNDc2My1hZDY2LTM0ZGFhZTM5YTE2ZVwvYm9vay1jb3Zlci1kZXNpZ25lci00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.B31nsZu2dHG-ZdUVYQ_3LF7WdiMKVAZfMdShqDKU2Hk",
            alt: "Rare Book 1",
            description: "An exquisite piece dating back to the 14th century, filled with timeless wisdom.",
        },
        {
            title: "The Forgotten Chronicles",
            image: "https://m.media-amazon.com/images/I/61zZ544-d9L._AC_UF1000,1000_QL80_.jpg",
            alt: "Rare Book 2",
            description: "A rare compilation of stories that shaped civilizations.",
        },
        {
            title: "The Golden Folio",
            image: "https://secondtimebooksonline.com/cdn/shop/files/IMG_2560.jpg?v=1717615583&width=1946",
            alt: "Rare Book 3",
            description: "A masterpiece adorned with gold leaf, offering insights into ancient art.",
        },
    ];

    // Array containing details of book genres
    const genres = [
        {
            name: "Adventure",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8ptraXjJsTWe9sMwPq_BH4TaC8qhCEAEsA&s",
            alt: "Adventure Genre",
        },
        {
            name: "Mystery",
            image: "https://iai.tv/assets/Uploads/_resampled/FillWyI4MDAiLCI1MDAiXQ/Firefly-mystical-experience-30809.webp",
            alt: "Mystical Genre",
        },
        {
            name: "Fantasy",
            image: "https://img.freepik.com/free-photo/fantasy-landscape-floating-islands-illustration_23-2151844198.jpg",
            alt: "Fantasy Genre",
        },
        {
            name: "Self-Discovery",
            image: "https://media.istockphoto.com/id/1313456479/photo/man-and-soul-yoga-lotus-pose-meditation-on-nebula-galaxy-background.jpg?s=612x612&w=0&k=20&c=jJ0pVed-sHjDBtomrO7KmR4qtIfH8OaNhjmEsXvJmAI=",
            alt: "Self-Discovery Genre",
        },
        {
            name: "Scientific",
            image: "https://www.guideir.com/Public/Uploads/uploadfile/images/20220609/18ScientificResearch2.jpg",
            alt: "Historical Genre",
        },
    ];


    // Rendering genres 
    const genresContainer = document.getElementById("library-genres-list");
    genres.forEach(genre => {
        const genreItem = document.createElement("div");
        genreItem.classList.add("library-genre-item");

        genreItem.innerHTML = `
            <img src="${genre.image}" alt="${genre.alt}" class="library-genre-image">
            <h3 class="library-genre-name">${genre.name}</h3>
        `;
        genresContainer.appendChild(genreItem);
    });

    // Rendering Rare Books
    const rarestBooksContainer = document.getElementById("rarest-books-list");
    rareBooks.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.alt}" class="book-image">
            <h3 class="rarest-book-title">${book.title}</h3>
            <p class="rarest-book-text">${book.description}</p>
        `;
        rarestBooksContainer.appendChild(bookCard);
    });



   // Array containing details of all books in the library
    const books = [
        { id: 1, title: "The Enchanted Forest", author: "Ahmad Aljammal", genre: "Adventure", description: "A magical journey through a mystical forest.", image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626119277i/58544640.jpg", rating: 3, price: 15 },
        { id: 2, title: "Space Odyssey", author: "John Smith", genre: "Scientific", description: "Explore the mysteries of the universe.", image_url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501163944/space-odyssey-9781501163944_hr.jpg", rating: 4, price: 20 },
        { id: 3, title: "The Hidden Clue", author: "Alice Brown", genre: "Mystery", description: "A detective uncovers hidden truths.", image_url: "https://m.media-amazon.com/images/I/81-w2HVsBkL._AC_UF894,1000_QL80_.jpg", rating: 5, price: 18 },
        { id: 4, title: "Eternal Love", author: "Emily White", genre: "Adventure", description: "A timeless tale of love and longing.", image_url: "https://m.media-amazon.com/images/I/71TTWq4K86L._AC_UF1000,1000_QL80_.jpg", rating: 4, price: 22 },
        { id: 5, title: "The Lost Expedition", author: "Robert King", genre: "Adventure", description: "A thrilling journey to uncharted lands.", image_url: "https://images-cdn.ubuy.co.in/645d03fd22565b24ba01aa10-the-lost-expedition-a-game-of-survival.jpg", rating: 4, price: 14 },
        { id: 7, title: "The Lost City", author: "John Smith", genre: "Adventure", description: "An explorer sets out to find a lost civilization deep in the jungle.", image_url: "https://m.media-amazon.com/images/I/91bNEM4wAXL._AC_UF894,1000_QL80_.jpg", rating: 4, price: 19 },
        { id: 8, title: "Mystery of the Ancient Tomb", author: "Emily Davis", genre: "Mystery", description: "A thrilling investigation of an ancient tomb and its secrets.", image_url: "https://images.booksense.com/images/247/859/9781774859247.jpg", rating: 4, price: 17 },
        { id: 9, title: "Journey to the Center of the Earth", author: "Jules Verne", genre: "Scientific", description: "A group of explorers venture into the Earth's core in this science fiction classic.", image_url: "https://m.media-amazon.com/images/I/81TR1ssoUIL._AC_UF1000,1000_QL80_.jpg", rating: 5, price: 21 },
        { id: 10, title: "The Shadow King", author: "A. M. Knight", genre: "Fantasy", description: "A young hero must rise against an ancient dark power.", image_url: "https://thecirclebookshop.com/cdn/shop/files/9781838777975_5568ab41-c89e-418a-955a-50ee3e3a458f.jpg?v=1722653690", rating: 5, price: 23 },
        { id: 11, title: "Beyond the Stars", author: "Samantha Green", genre: "Scientific", description: "A space voyage that leads to unexpected discoveries about humanity.", image_url: "https://m.media-amazon.com/images/I/71zwgBWQz2L._AC_UF1000,1000_QL80_.jpg", rating: 4, price: 16 },
        { id: 12, title: "The Mysterious Island", author: "Jules Verne", genre: "Mystery", description: "Shipwrecked on a mysterious island, survivors uncover its many secrets.", image_url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781665934299/the-mysterious-island-9781665934299_hr.jpg", rating: 5, price: 18 },
        { id: 13, title: "The Secret Garden", author: "Frances Hodgson Burnett", genre: "Self-Discovery", description: "A young orphan discovers the magic of a hidden garden.", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIksyehEJtnBpzy4z4Vtx-MF7FI44dvFI-Q&s", rating: 4, price: 14 },
        { id: 14, title: "The Dark Tower", author: "Stephen King", genre: "Fantasy", description: "The first book in a series of epic horror and fantasy novels.", image_url: "https://i5.walmartimages.com/seo/The-Dark-Tower-The-Dark-Tower-VII-The-Dark-Tower-Series-7-Paperback-9780743254564_f615c578-f487-4d20-b80a-5bc6d1aac76f_1.5ae87e2a02c55270fdb3c7504ddf5f78.jpeg", rating: 5, price: 25 },
        { id: 15, title: "The Silent Witness", author: "Karen Harper", genre: "Mystery", description: "A gripping mystery where the key witness has gone silent.", image_url: "https://bookouture.com/wp-content/uploads/Works/9781800190214-1500-672x1024.jpg", rating: 4, price: 13 },
        { id: 16, title: "Into the Wild", author: "Jon Krakauer", genre: "Self-Discovery", description: "A true story of a young man’s journey into the Alaskan wilderness.", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEGF2b2rZ1jWPEpQMDj0tHJLtTJvYi5a-3g&s", rating: 5, price: 24 },
        { id: 21, title: "Dragon's Legacy", author: "Celia Hart", genre: "Fantasy", description: "An epic tale of a kingdom defended by ancient dragons.", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7TqWd04_-OI3QNsRNfj76vsGrkg6GoSkrA&s", rating: 5, price: 22 },
        { id: 22, title: "The Crimson Clue", author: "Arthur Blake", genre: "Mystery", description: "A mysterious murder leaves detectives searching for answers.", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQWS3XXDtcXmD6s5YoF9aaeA9gWEkVLMkvw&s", rating: 4, price: 15 },
        { id: 23, title: "The Vanishing Act", author: "Laura Grey", genre: "Mystery", description: "A famous magician disappears during a live performance.", image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334776694i/13562763.jpg", rating: 4, price: 12 },
        { id: 25, title: "Galactic Explorers", author: "Mark Stellar", genre: "Scientific", description: "A thrilling journey through uncharted galaxies.", image_url: "https://m.media-amazon.com/images/I/81-N+8efeSL._UF1000,1000_QL80_.jpg", rating: 5, price: 23 },
        { id: 27, title: "Journey Within", author: "Alex Monroe", genre: "Self-Discovery", description: "A personal quest to uncover the true meaning of life.", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hJx3TZhCwb6WUDbeoOrUUGjIi7cNB3m5pQ&s", rating: 4, price: 19 }
    ];

   
    let cart = [];
    
    // Function to update the cart view
    function updateCart() {
        const cartContainer = document.getElementById("cart-container");
        cartContainer.innerHTML = ""; 
    
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }
    
        let totalPrice = 0;
    
        cart.forEach((book, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
    
            cartItem.innerHTML = `
                <img src="${book.image_url}" alt="Book Image" style="width: 80px;">
                <div>
                    <h4>${book.title}</h4>
                    <p><strong>Price:</strong> $${book.price}</p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
    
            cartContainer.appendChild(cartItem);
            totalPrice += book.price;
        });
    
        const totalPriceElement = document.createElement("p");
        totalPriceElement.innerHTML = `<strong>Total Price:</strong> $${totalPrice}`;
        cartContainer.appendChild(totalPriceElement);
    
        // Attach event listeners to "Remove" buttons
        const removeButtons = document.querySelectorAll(".remove-btn");
        removeButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                removeFromCart(index);
            });
        });
    }
    
    // Function to remove a book from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart(); 
    }
    
    
    // Function to add a book to the cart
    function addToCart(bookId) {
        const book = books.find(b => b.id === bookId);
        if (book) {
            cart.push(book);
            
            alert(`${book.title} added to the cart.`);
            updateCart(); 
        }
    }
    

    // Group books by genre for display
    const groupedBooks = books.reduce((acc, book) => {
        if (!acc[book.genre]) acc[book.genre] = [];
        acc[book.genre].push(book);
        return acc;
    }, {});
    
    const booksContainer = document.getElementById("books-container");
    for (const [genre, books] of Object.entries(groupedBooks)) {
        const genreTitle = document.createElement("h2");
        genreTitle.classList.add("special-books-title");
        genreTitle.innerText = genre;
        booksContainer.appendChild(genreTitle);
    
        const booksGrid = document.createElement("div");
        booksGrid.classList.add("books-grid");
    
        books.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
        
            bookCard.innerHTML = `
                <img src="${book.image_url}" alt="Book Image">
                <h3>
                    <a href="book-details.php?id=${book.id}&title=${encodeURIComponent(book.title)}">
                        ${book.title}
                    </a>
                </h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Description:</strong> ${book.description}</p>
                <div class="rating">
                    <strong>Rating:</strong> ${book.rating} / 5
                </div>
                <p style="font-size:25px;"><strong>Price:</strong> <span style="color:red;">$${book.price}</span></p>
            `;
        
            const addToCartButton = document.createElement("button");
            addToCartButton.classList.add("btn-table");
            addToCartButton.textContent = "Add to Cart";
            addToCartButton.addEventListener("click", () => addToCart(book.id));
            bookCard.appendChild(addToCartButton);
        
            booksGrid.appendChild(bookCard);
        });
        
    
        booksContainer.appendChild(booksGrid);
    }
    
    // Event listener for "View Cart" button
    document.getElementById("view-cart-btn").addEventListener("click", () => {
        updateCart();
        document.getElementById("cart-page").style.display = "block";
        document.getElementById("books-page").style.display = "none";
    });
    
    document.getElementById("back-to-books-btn").addEventListener("click", () => {
        document.getElementById("cart-page").style.display = "none";
        document.getElementById("books-page").style.display = "block";
    });
    
    
};
