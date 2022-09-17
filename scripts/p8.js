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
  const ProblemContract = "0x654536920B2BB3BEBba61014625e2832B2eB515F"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const ProbCode = await ethers.getContractFactory(
    "ERC20TransferFrom" // prob code here ex) PlusCalcularotProblem
  );
  const ProbCodeAttached = ProbCode.attach(ProblemContract);

  const contractCreator = "0x85ba85216CC19D106f82e7d605221d4CF7B6e2D3";

  // const amountproc = 20 * 10 ** 18;

  ProbCodeAttached.connect(myAccount).transferFrom(
    contractCreator,
    myAccount.address,
    "20000000000000000000"
  );
}

async function main() {
  pSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
