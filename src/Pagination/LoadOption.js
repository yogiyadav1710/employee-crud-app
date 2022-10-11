import items from "./DBname.json";
console.log(items);

const parseSelectAsync = async (items) => {
    if (items) {
        const { emp } = items;
        return await emp.map(({ id: value, name: label }) => ({
            value,
            label: `${value} | ${label}`,
            name: value
        }));
    }
};

const isNumber = /^\d(.*\d)?$/;

const loadOptions = async (search, prevOptions) => {

    let options = await parseSelectAsync(items);
    let filteredOptions;
    if (!search) {
        filteredOptions = options;
    } else {
        const searchLower = search.toLowerCase();
        console.log(searchLower);
        filteredOptions = options.filter(
            ({ label, name }) =>
                label.toLowerCase().includes(searchLower) ||
                (search.match(isNumber) && Number(search) === name)
        );
    }

    const hasMore = filteredOptions.length > prevOptions.length + 10;
    const slicedOptions = filteredOptions.slice(
        prevOptions.length,
        prevOptions.length + 10
    );

    console.log({ slicedOptions, hasMore });
    return {
        options: slicedOptions,
        hasMore
    };
};

export default loadOptions;
