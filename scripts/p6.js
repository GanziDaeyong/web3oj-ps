const { ethers } = require("hardhat");
const hre = require("hardhat");

async function pSol() {
  const [myAccount] = await ethers.getSigners();

  // const MyCode = await ethers.getContractFactory(
  //   "p6" // my code here ex) MyPlusCalculator
  // );
  // const MyCodeDeployed = await MyCode.connect(myAccount).deploy();
  // await MyCodeDeployed.deployed(); // my deployed code

  // MyCodeDeployed.connect(myAccount).customsend(
  //   "0x7C86AFbcC0d747810C4BA863B34311Fc57e630F5",
  //   20
  // );
  const ProblemContract = "0x7C86AFbcC0d747810C4BA863B34311Fc57e630F5"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const ProbCode = await ethers.getContractFactory(
    "ERC20Transfer" // prob code here ex) PlusCalcularotProblem
  );
  const ProbCodeAttached = ProbCode.attach(ProblemContract);
  ProbCodeAttached.connect(myAccount).setWeb3ojt(
    "0x5De5e843523FB6289B112Df7CE5368f3d5F50408"
  );
}

async function main() {
  pSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
