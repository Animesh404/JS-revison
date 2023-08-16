// try{
//     console.log(x);
// }catch (err){
//     console.log('Error: '+err);
// }

const double = num => {
    if(isNaN(num))  throw new Error(num + ' is not a number')
    return number * 2;
};

try{
    const y = double('Hello');
}catch(err){
    console.log(err);
};
