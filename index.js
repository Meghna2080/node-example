var rect = require('./rectangle');
// var rect={
//     perimeter:(x,y)=>(2*(x+y)),
//     area: (x,y)=>(x*y)
// };

function solveRect(l,b){
    console.log("Solving for rectangle with l="+l+"and b ="+b);
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR: ",err.message);
        }
        else{
            console.log("The area of rectangle of dimensions l= "+l+"and b ="+b+"is"+ rectangle.area());
            console.log("The perimeter of rectangle of dimensions l= "+l+"and b ="+b+"is"+ rectangle.perimeter());
        }
    });
    console.log("This Statement is after a call to rect()");

    // if(l<=0 || b<=0){
    //     console.log("Rectangle dimensions should be greater than zero: l="+l+", b="+b);
    // }
    // else{
    //     console.log("The area of rectangle is"+ rect.area(l,b));
    //     console.log("The perimeter of rectangle is"+ rect.perimeter(l,b));
    // }

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);