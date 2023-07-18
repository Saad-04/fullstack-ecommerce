class ApiFeatures {

    constructor(query, queryString) {
        this.query = query;
        this.queryStr = queryString
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        } : {
            
        }
        console.log(keyword)
        this.query = this.query.find({ ...keyword })
        return this
    }
}

module.exports = ApiFeatures