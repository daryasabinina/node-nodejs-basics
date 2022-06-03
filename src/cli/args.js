export const parseArgs = () => {
    let passedArgs = '';
    process.argv.slice(2).forEach((val, index) => {
        if (index%2 === 0) {
            passedArgs = passedArgs ? passedArgs + `, ${val.slice(2)}` : `${val.slice(2)}`;
        } else {
            passedArgs = passedArgs + ` is ${val}`;
        }
    });

    console.log(passedArgs);
};

parseArgs();
