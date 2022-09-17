const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyCode = await ethers.getContractFactory(
    "MyDivisionCalculator" // my code here ex) MyPlusCalculator
  );
  const MyCodeDeployed = await MyCode.connect(myAccount).deploy();
  await MyCodeDeployed.deployed(); // my deployed code

  const ProblemContract = "0xaA772b74d8FAB17320C6a0BE769d8363CC5fBA93"; // 이곳에 덧셈 문제 인스턴스 컨트랙트 주소를 넣으세요
  const ProbCode = await ethers.getContractFactory(
    "DivisionCalculatorProblem" // prob code here ex) PlusCalcularotProblem
  );
  const ProbCodeAttached = ProbCode.attach(ProblemContract);
  ProbCodeAttached.connect(myAccount).setDivisionCalculator(
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
