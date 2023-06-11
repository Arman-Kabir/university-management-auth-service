/**
 * ####mod14
 * #2--Pagination
 * /api/v1/academic-semesters?page = 01&limit=10
 * /api/v1/academic-semesters?sortBt = year&sortOrder = desc
 * /api/v1/academic-semesters?page = 1&limit=01&sortBy=year& sortOrder=desc
 * 
 * page:Number(req.query.page)
 * limit:Number(req.query.limit)
 * sortBy:req.query.year
 * sortOrder:req.query.order
 * 
 * const paginatedOptions={
 * page:Number(req.query.page)
 * limit:Number(req.query.limit)
 * sortBy:req.query.year
 * sortOrder:req.query.sortOrder
 * }
 * 
 * 
 */
