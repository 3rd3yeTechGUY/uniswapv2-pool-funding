var connected = false;
var address;
let ethBalance;
var tknBalance;

var fwdContract;
var tknContract;

const fwdABI = require("../build/contracts/V2Forwarder.json");
const tknABI = require("./Nugget.json");

const fwdSC = "0x6b85961B8c9977aDBf3D3E7f8057C69783B5aF38";
const tknSC = "0x9Bf3677003497C531F26A7Fb628DFfF32608513B";
const wrapperSC = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";


window.addEventListener('load', async () => {
    // connect to wallet
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        await ethereum.request({ method: 'eth_requestAccounts' }).then(function (result) {
            address = result[0];
            console.log(address);
        });

        connected = true;
        $(".info-box").html("Connection successful.");
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        address = await web3.eth.getAccounts();
        connected = true;
        $(".info-box").html("Connection successful. Consider updating your Wallet.");
    }
    // Non-dapp browsers...
    else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
        $(".info-box").html("To continue please install <a href='https://metamask.io/' target='_blank'>MetaMask</a>.");
    }

    web3.eth.handleRevert = true;

    fwdContract = new web3.eth.Contract(fwdABI.abi, fwdSC, {from: address});
    tknContract = new web3.eth.Contract(tknABI.abi, tknSC, {from: address});

    refresh();

    // load 
    if (connected) {
        // send dialog
        $(".approve").click(async function () {
            amount0 = $("#amount0").val();
            amount1 = $("#amount1").val();
            console.log(web3.utils.toWei(amount0));
            console.log(web3.utils.toWei(amount1));
            await tknContract.methods.approve(fwdSC, web3.utils.toWei(amount1)).send()
            .on("receipt", function () {
                console.log("approved");
            });
        });
        $(".send").click(async function () {
            amount0 = $("#amount0").val();
            amount1 = $("#amount1").val();
            console.log(web3.utils.toWei(amount0));
            console.log(web3.utils.toWei(amount1));
            fwdContract.methods.fund(wrapperSC, tknSC, 0, web3.utils.toWei(amount1)).send({value: web3.utils.toWei(amount0)})
            .on("receipt", function (result) {
                console.log("finito" + result);
            });
        });
    }
});

async function refresh() {
    await updateBalances();
    updateUI();
}

async function updateBalances() {
    // read eth balance
    await web3.eth.getBalance(address)
    .then(function (result) {
        ethBalance = result;
    });
    //read ngt balance
    await tknContract.methods.balanceOf(address).call()
    .then(function (result) {
        tknBalance = result;
    });
}

async function updateUI() {
    $(".balance-eth").text(web3.utils.fromWei(ethBalance.toString()));
    $(".balance-tkn").text(web3.utils.fromWei(tknBalance.toString()));
    $(".address").text(address);
}