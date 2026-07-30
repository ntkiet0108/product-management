export const mergeField = (field) => {

    return {
        valid: Object.values(field).every(f => f.valid),

        error: Object.entries(field).reduce((res, [k, f]) => {
            res[k] = f.error;
            return res;
        }, {}),

        getData: () => Object.entries(field).reduce((res, [k, f]) => {
            res[k] = f.getData();
            return res;
        }, {})
    }
}