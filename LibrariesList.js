5 LINQ for JavaScript Libraries

* 1. LINQ to JavaScript (JSLINQ)
* 2. JLinq
example:
var results = jLinq.from(records.users)

    //you can join records
    .join(records.locations, "location", "locationId", "id")

    //write queries on the data
    .startsWith("firstname", "j")
    .or("k") //automatically remembers field and command names

    //even query joined items
    .equals("location.state", "TX")

    //and even do custom selections
    .select(function(rec) {
        return {
            fullname : rec.firstname + " " + rec.lastname,
            city : rec.location.city,
            ageInTenYears : (rec.age + 10)
        };
    });

* 3. Reactive Extensions for Javascript (RxJS)
* 4. linq.js – LINQ for JavaScript
* 5. $Linq

http://dotnet.dzone.com/articles/5-linq-javascript-libraries
