import logo from './logo.svg';
import React, { Component } from 'react'
import Web3 from 'web3'
import {kq_dashboard_abi, kq_dashboard_address, gfarm_abi, gfarm_address} from './config'

import './App.css'

// https://www.npmjs.com/package/comma-number
//https://www.dappuniversity.com/articles/ethereum-dapp-react-tutorial#intro
class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider)
    const commaNumber = require('comma-number')
    // Using this will transform them into strings
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const kq_dashboard = new web3.eth.Contract(kq_dashboard_abi, kq_dashboard_address)
    this.setState({ kq_dashboard })
    const gfarm = new web3.eth.Contract(gfarm_abi, gfarm_address)
    this.setState({ gfarm })

    const gfarmBalance = await gfarm.methods.balanceOf('0xDcdB7cc659462b9602ee2F55333E6619C6EdF2Bb').call() / 1000000000000000000
    this.setState({gfarmBalance})
    const truegfarmBalance = commaNumber(Math.floor(this.state.gfarmBalance * 100) /100)
    this.setState({truegfarmBalance})
    const gfarmValue = 151
    this.setState({gfarmValue})
    const totalgfarmValue = Math.floor((this.state.gfarmValue * this.state.gfarmBalance)*100) / 100
    this.setState({totalgfarmValue})

    const Supply = await kq_dashboard.methods.totalSupply_().call() / 1000000
    this.setState({ Supply })
    const trueSupply = commaNumber(Math.floor(this.state.Supply * 100) / 100)
    this.setState({trueSupply})
    const Burned = await kq_dashboard.methods.totalBurned().call() / 1000000
    this.setState({ Burned })
    const trueBurned = commaNumber(Math.floor(this.state.Burned * 100) / 100)
    this.setState({trueBurned})
    const Balance = await kq_dashboard.methods.balanceOf(accounts[0]).call() / 1000000
    this.setState({ Balance })
    const trueBalance = commaNumber(Math.floor(this.state.Balance * 100) / 100)
    this.setState({trueBalance})
    const coinValue = .46
    this.setState({coinValue})
    const accountValue = this.state.Balance * this.state.coinValue
    this.setState({accountValue})
    const trueAccountValue = commaNumber(Math.floor(this.state.accountValue * 100) / 100)
    this.setState({trueAccountValue})

    const fundWalletValue = Math.floor(this.state.totalgfarmValue * 100) /100
    this.setState({fundWalletValue}) 
    

  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <html lang="en">
    <head>
      <title>KQ Dashboard</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1>KQ Dashboard</h1>
            <p>Your portal to yield funds</p>
          </div>
        </div>
        <div className="container shadow-lg p-3 my-3 bg-dark text-white rounded">
        <p>Your account: {this.state.account}</p>
        <p>Total Token Supply is <strong>{this.state.trueSupply}</strong></p>
        <p>Total Burned is <strong>{this.state.trueBurned}</strong></p>
        <p>Account Balance is <strong>{this.state.trueBalance}</strong> </p>
        <p>Price per token is <strong>${this.state.coinValue}</strong></p>
        <p>Account Value is <strong>${this.state.trueAccountValue}</strong></p>
        <br>
        </br>
        <h3>Coins in Fund</h3>
        <p>I don't believe I have to find the abi for each token to know about it, I believe listing the token irregardless
          is possible, however I am unsure of how to enter the price as well as owned amount. I believe this along with finding
          the value of each pool will be challenging until I finally can actively get the value of the Fund at any time. 
        </p>
        <p>Amount of Gfarm in Fund <strong>{this.state.truegfarmBalance}</strong></p>
        <p>Value of Gfarm in Fund $<strong>{this.state.totalgfarmValue}</strong></p>
        <p>Amount of Matic in Fund <strong>NAN</strong></p>
        <p>Value of Matic in Fund $<strong>NAN</strong></p>
        <p>Amount of Quick in Fund <strong>NAN</strong></p>
        <p>Value of Quick in Fund $<strong>NAN</strong></p>
        <p>Amount of ETH in Fund <strong>NAN</strong></p>
        <p>Value of ETH in Fund $<strong>NAN</strong></p>
        <p>Total Value of Coins in Fund: $<strong>{this.state.fundWalletValue}</strong></p>
        <br>
        </br>
        <h3>Pools Fund is in</h3>
        <p>Value of Quickswap Quick/Gfarm lp $<strong>NAN</strong></p>
        <p>Value of Quickswap ETH/Gfarm lp $<strong>NAN</strong></p>
        <p>Value of Stablecoin Provison $<strong>NAN</strong></p>
        <p>Value of Moonwolf $<strong>NAN</strong></p>
        <p>Total Value of Pools in Fund</p>
        <br></br>
        <h2>Total Value of Fund is $<strong>NAN</strong></h2>
      </div>
    
        
        <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
        
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
      </body>
    </html>
    );
  }
}

export default App;