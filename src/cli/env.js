export const parseEnv = () => {
    let variables = ''
    for (const variable in process.env) {
        if (variable.startsWith('RSS_')) {
            const varWithVal = `${variable}=${process.env[variable]}`
            if (!variables) {
                variables = variables + varWithVal ;
            } else {
                variables = variables + '; ' + varWithVal;
            }
        }
    }
    console.log(variables);
};

parseEnv();
