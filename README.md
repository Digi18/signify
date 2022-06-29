# Signify

Application contain 4 routes.

1) POST  /api/addReview

Data needs to be entered  on this route is ---> review, author, review_source, rating, title, product_name

2) GET  /api/getReviews

Above route will fetch all the reviews available.


3) GET  /api/getRatings?rating=4

Here rating field in url will be provided by the user so that reviews can be fetched based on that rating only.


4) GET  /api/getAverage?year=2017&month=05

We need to pass year(YYYY) and month(MM) in specified format so that average rating for that particular month can be calcuated.It fetches details like Average rating,Total reviewer who revied that month, Review total
along with month and year.


Testing library used in application is MOCHA and CHAI.

Database used is MONGODB ATLAS along with MONGOOSE ORM.

MISCELLANEOUS library used are:

#express-rate-limit -> To prevent server from Ddos,DOS and brute-froce attack.it limits the no. of request for certain period.

#helmet -> for securing headers of application.

#cors ->  This will enable outside requests to communicate with the APIs. 
