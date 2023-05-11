
const HEX: string[] = "0123456789ABCDEF".split("");

const getRandomInt = (min: number, max: number) => parseInt( ((Math.random() * max + 1) - min).toString() );

// Get random color
const randomHex = () => {
    let hex: string = "#";

    for (let _ = 0; _ < 6; _++) {
        hex += HEX[ getRandomInt(0, HEX.length) ];
    };

    return hex;
};

export default randomHex;