const { ethers } = require("hardhat");
const hre = require("hardhat");

async function pSol() {
  const [myAccount] = await ethers.getSigners();

  // const MyCode = await ethers.getContractFactory(
  //   "p7" // my code here ex) MyPlusCalculator
  // );
  // const MyCodeDeployed = await MyCode.connect(myAccount).deploy();
  // await MyCodeDeployed.deployed(); // my deployed code

  // MyCodeDeployed.connect(myAccount).customapprove(
  //   "0xd89d28d759A9Ec48185ac92125A24d58fc408dDa",
  //   20
  // );
  const ProblemContract = "0xd89d28d759A9Ec48185ac92125A24d58fc408dDa"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const ProbCode = await ethers.getContractFactory(
    "ERC20Approve" // prob code here ex) PlusCalcularotProblem
  );
  const ProbCodeAttached = ProbCode.attach(ProblemContract);
  ProbCodeAttached.connect(myAccount).setWeb3ojt(
    "0x5F271a847ee9708883041cD8a4b85aD63eE330Ec"
  );
}

async function main() {
  pSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
