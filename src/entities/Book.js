class Book {
  constructor({
    bookId,
    title,
    authorId,
    categoryId,
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
    this.authorId = authorId;
    this.categoryId = categoryId;
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
      authorId: this.authorId,
      categoryId: this.categoryId,
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
      json.authorId,
      json.categoryId,
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
