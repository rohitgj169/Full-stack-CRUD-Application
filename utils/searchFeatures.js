class SearchFeatures {
    constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
    }
    filter() {
      const queryObj = { ...this.queryString };
      const excludedFields = ["page", "sort", "limit", "fields"];
      excludedFields.forEach((el) => delete queryObj[el]);
  
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(
        /\b(gt|lt|gte|lte)\b/g,
        (replaceValue) => `$${replaceValue}`
      );
      this.query = this.query.find(JSON.parse(queryStr));
      return this;
    }
    sort() {
      if (this.queryString.sort) {
        const sortBy = this.queryString.sort.split(",").join(" ");
        this.query = this.query.sort(sortBy);
      } else {
        this.query = this.query.sort("-createDate");
      }
      return this;
    }
    paginate() {
      const pageValue = this.queryString.page * 1 || 1;
      const limitValue = this.queryString.limit * 1 || 5;
      const skipValue = (pageValue - 1) * limitValue;
      this.query = this.query.skip(skipValue).limit(limitValue);
  
      return this;
    }
  }

  module.exports = SearchFeatures;