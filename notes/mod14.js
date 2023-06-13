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
 * #6 Search and Filters
 * /api/v1/academic-semesters?searchTerm = Aut  [Partial Match , Case Insensetive]
 * /api/v1/academic-semesters?year = 2023 [Exact Match]
 * /api/v1/academic-semesters?title=Autumn[Exact Match]
 * /api/v1/academic-semesters?code=01[Exact Match]
 *
 * searchTerm:req.query.searchTerm,
 * year:req.query.year,
 * title:req.query.title,
 * code:req.query.code
 *
 * const filters={
 * searchTerm:req.query.searchTerm,
 * year:req.query.year,
 * title:req.query.title,
 * code:req.query.code
 * }
 *
 *
 */
