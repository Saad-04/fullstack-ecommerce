class ApiFeatures {
  constructor(query, queryString) {
    this.query = query; //this.query is the arrayObject of all products
    this.queryStr = queryString; //querystring is the req.query
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
        name: {
          $regex: this.queryStr.keyword,
          $options: "i",
        },
      }
      : {};
    // here single product store in this.query
    this.query = this.query.find({ ...keyword }); //this is single product
    return this; //resturn this
  }

  filters() {
    const copyQuery = { ...this.queryStr };//this copyquery is the name of query like 
    // ?q=name this q=copyquery 
    const removeField = ['keyword', 'page', 'limit']
    removeField.forEach(e => delete copyQuery[e])

    let queryStr = JSON.stringify(copyQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;

  }


  pagination(resultPerPage) {
    let pageNumber = Number(this.queryStr.page) || 1;
    let skip = resultPerPage * (pageNumber - 1);
    this.query = this.query.skip(skip).limit(resultPerPage);
    return this;
  }

}

module.exports = ApiFeatures;
