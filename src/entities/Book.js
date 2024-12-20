class Book {
  constructor({
    bookId,
    title,
    author,
    category,
    price,
    discount,
    stockQuantity,
    currency,
    description,
    publishedYear,
    createdAt,
    updatedAt,
    imageData,
  }) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.stockQuantity = stockQuantity;
    this.currency = currency;
    this.description = description;
    this.publishedYear = publishedYear;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.imageData = imageData;
  }

  toJson() {
    return {
      bookId: this.bookId,
      title: this.title,
      author: this.author,
      category: this.category,
      price: this.price,
      discount: this.discount,
      stockQuantity: this.stockQuantity,
      currency: this.currency,
      description: this.description,
      publishedYear: this.publishedYear,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      imageData: this.imageData,
    };
  }

  static fromJson(json) {
    return new Book(
      json.bookId,
      json.title,
      json.author,
      json.category,
      json.price,
      json.discount,
      json.stockQuantity,
      json.currency,
      json.description,
      json.publishedYear,
      json.createdAt,
      json.updatedAt,
      json.imageData
    );
  }
}

export default Book;
