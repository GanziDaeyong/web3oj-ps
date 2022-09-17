const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyCode = await ethers.getContractFactory(
    "MyMultiplicationCalculator" // my code here ex) MyPlusCalculator
  );
  const MyCodeDeployed = await MyCode.connect(myAccount).deploy();
  await MyCodeDeployed.deployed(); // my deployed code

  const ProblemContract = "0x01c0B4BCE9A419B0DD9fCB6560b931aa7725727D"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const ProbCode = await ethers.getContractFactory(
    "MultiplicationCalculatorProblem" // prob code here ex) PlusCalcularotProblem
  );
  const ProbCodeAttached = ProbCode.attach(ProblemContract);
  ProbCodeAttached.connect(myAccount).setMultiplicationCalculator(
    MyCodeDeployed.address
  );
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
