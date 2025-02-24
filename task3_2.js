const workingObject = {
    a: middleArray
};

const copy1 = Object.assign({}, workingObject);

const copy2 = { ...workingObject };

const copy3 = JSON.parse(JSON.stringify(workingObject));

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

const copy4 = deepCopy(workingObject);