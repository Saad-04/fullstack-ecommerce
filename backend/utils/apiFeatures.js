class ApiFeatures {

    constructor(query, queryString) {
        this.query = query; //this.query is the arrayObject of all products 
        this.queryStr = queryString//querystring is the req.query
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'}} : {}

        console.log(keyword)
        // here single product store in this.query 
        this.query = this.query.find({ ...keyword })//this is single product 
        return this//resturn this 
    }
}

module.exports = ApiFeatures