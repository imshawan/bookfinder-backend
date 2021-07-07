# bookfinder-backend 

## Operations Supported

*   GET     https://bookfinder-backend.herokuapp.com/getAllBooks (Fetch all stored books)
*   POST    https://bookfinder-backend.herokuapp.com/search (Search for books using tags)
*   POST    https://bookfinder-backend.herokuapp.com/addBooks (To add books)


### Add Books [POST]

```bash
{
        "title": "Harry Potter 3",
        "author": "JK Rowling",
        "pdate": "2004",
        "tags": [
            "harry",
            "potter",
            "harry potter 3",
            "jk rowling",
            "harry potter"
        ]
}
```

### Search [POST]

```bash
{
    "tags": "potter"
}
```