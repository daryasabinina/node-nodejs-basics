export const parseEnv = () => {
    const variables = Object.entries(process.env).reduce((accum, [key, value]) => {
        if (key.startsWith('RSS_')) {
            accum.push(`${key}=${value}`);
        }
        return accum;
    }, []);

    const parsedVariables = variables.join('; ')
    console.log(parsedVariables)
};

parseEnv();
