require('dotenv').config();
const hre = require('hardhat');

async function main() {
    const OtakuHero = await hre.ethers.getContractFactory('OtakuHero');
    const otakuHero = await OtakuHero.deploy(process.env.MOE_ERC20_CA);

    await otakuHero.deployed();

    console.log(`Otaku Hero contract has been deployed : ${otakuHero.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })