
function person (name, email,join_date){
    this.name= name;
    this.email = email;
    this.join_date = date;

    person.prototype.formatDATE= function (){

    }

    function getJoinDate (){
        join_date: {
            dd='01',
            mm= '04',
            yy= '2024'

        }
        return `this person joined on ${this.join_date} `
    }

};

function student (name, email, join_date,course, batchID, modules){
    person.call(this.name, this.email, this.join_date) //binding of person in student
    this.course = course,
    this.batchID = batchID,

    function courseProgress (){
        courseProgress = numOfmodules/noOfcourses
        return courseProgress;
    }


};
student.prototype_proto_= person.prototype

student.prototype.calculateProgress= function (){
    let count = 0;
    for (let i=0;i<this.course.length, i++ ){
        if (this.course[i].completed ===true){
            count ++;
        }
    }
    return (cpunt/this.course.length)*100;

}

function teachers (name, email, join_date,specialisation, courseTeaching){
    person.call(this.name,email,join_date)
    this.specialisation= specialisation,
    this.courseTeaching = courseTeaching,

    teachers.prototype.calculateLoad = function(){
        let load = 0;
        for (let =0, i<this.courseTeaching.length, i++){
            load= load + this.courseTeaching[i].hours
        }
        return load
    }

}
let student_s1 = new student ('naman','naman@gmail.com','20/20/2024')[
    {
        name: 'os',
        
    }
]
console.log(student_s1.calculateProgress)

teacher t1= new teacher ('dhruv', 'dhruv@gmail.com', '14-05-2024')