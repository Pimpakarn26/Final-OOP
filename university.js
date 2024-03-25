class University {
    name = "";
    location = "";
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    getName(){
        return this.name;
    }
    addDepartment(department){
        this.department.push(department);
    }
    addStudent(student){
        this.student.push(student);
    }
    removeDepartment(department){
        this.department.splice(department)
    }
    removeStudent(student){
        this.student.splice(student);
    }
    addProfessor(professor){
        this.professor.push(professor);
    }
    removeProfessor(professor){
        this.professor.splice(professor);
    }
    getDepartment(){
        return this.department;
    }
    getStudent(){
        return this.student;
    }
    getProfessor(){
        return this.professor;
    }
    toString() {
        return `
        University : ${this.name}, 
        Location : ${this.location}
        `;
    }
}

class Department {
    name = "";
    constructor(name) {
        this.name = name;
    }
    getName(){
        this.name =this.name;
    } 
    getCourse(){
        return this.course;
    }
    getStudent(){
        return this.student;
    }
    addCourse(course){
        this.course.push(course);
    }
    removeCourse(course){
        this.course.splice(course);
    }
    addStudent(student) {
        this.student.push(student);
    }
    removeStudent(student) {
        this.student.splice(student);
    }
    addProfessor(professor) {
        this.professor.push(professor);
    }
    removeProfessor(professor) {
        this.professor.splice(professor);
    }
   
    toString() {
        return `
        Department : ${this.name}
        `;
    }
}

class Course {
    code = "";
    title = "";
    constructor(code, title){
        this.code = code;
        this.title = title;
    }
    addStudent(student) {
        this.student.push(student);
    }
    removeStudent(student) {
        this.student.splice(student);
    }
    getProfessor(){
        return this.professor;
    }
    setProfessor(professor){
        this.professor = professor;
    }
    toString() {
        return `
        Course : ${this.code}, 
        ${this.title}
        `;
    }
}


class Person {
    name = "";
    address = "";
    email = "";
    constructor(name, address, email){
        this.name = name;
        this.address = address;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getEmail() {
        return this.email;
    }
    toString() {
        return `
        Person 
        name : ${this.name}, 
        Address : ${this.address}, 
        Email : ${this.email}
        `;
    }
}

class Student extends Person {
    studentId = "";
    year = 0;
    constructor(name, studentId, year){
        super(name)
        this.studentId = studentId;
        this.year = year;
    }
    registerCourse(course){
        this.course.push(course);
    }
    dropCourse(course){
        this.course.splice(course);
    }
    getCourse(){
        return this.course;
    }
    toString() {
        return `
        Student : ${this.name}, 
        Student lD : ${this.studentId}, 
        Year ${this.year}
        `;
    }
}

class Professor extends Person {
    staffld = "";
    constructor(name, staffld){
        super(name)
        this.staffld = staffld;
    }
    teachCourse(course){
        this.course.push(course);
    }
    stopTeachingCourse(course){
        this.course.splice(course);
    }
    getCourse() {
        return this.course;
    }
    toString() {
        return `
        Professor : ${this.name}, 
        Staff lD : ${this.staffld}
        `;
    }
}



const main = () => {
    /*ผลลัพธ์มหาวิทยาลัย*/
    const university = new University(
        "NPRU", 
        "85 Malaiman Road, Nakhon Pathom, Thailand"
        )
    console.log(university.toString());

    /*ผลลัพธ์สาขา*/
    const department = new Department(
        "Sofeware Engineering"
    )
    console.log(department.toString());

    /*ผลลัพธ์วิชา*/
    const course = new Course(
        "CS101",
        "Introduction to Programming"
    )
    console.log(course.toString());

    /*บุคคล*/
    const person1 = new Person(
        "Bonus",
        "Rayong",
        "bopimsae@gmail.com"
    )
    const person2 = new Person(
        "Dr.Warachet Uttha",
        "Nakhon Pathom",
        "Wara@gmail.com"
    )
    //console.log(person1.toString());
    //console.log(person2.toString());

    /*ผลลัพธ์นักศึกษา*/
    const student = new Student(
        "Bonus",
        "S009",
        "2"
    ) 
    console.log(student.toString());
    
    /*ผลลัพธ์อาจารย์*/
    const professor = new Professor(
        "Dr.Warachet Uttha",
        "P001"
    )
    console.log(professor.toString());
}


main();