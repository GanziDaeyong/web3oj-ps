const { ethers } = require("hardhat");
const hre = require("hardhat");

async function pSol() {
  const [myAccount] = await ethers.getSigners();

  //   const MyCode = await ethers.getContractFactory(
  //     "p5" // my code here ex) MyPlusCalculator
  //   );
  //   const MyCodeDeployed = await MyCode.connect(myAccount).deploy();
  //   await MyCodeDeployed.deployed(); // my deployed code

  const ProblemContract = "0x64C6247a213D17e85E5befdbF6a5Bf4cfa55F31D"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const ProbCode = await ethers.getContractFactory(
    "ERC20Init" // prob code here ex) PlusCalcularotProblem
  );
  const ProbCodeAttached = ProbCode.attach(ProblemContract);
  ProbCodeAttached.connect(myAccount).setWeb3ojt(
    "0x9d1fe967A1580eb176e352526Bc23884Df0cB3d5"
  );
}

async function main() {
  pSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
