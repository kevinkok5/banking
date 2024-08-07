import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Kevin', lastName: 'Chris', email: "kchristevi1@gmail.com"}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox
               type="greeting"
               title="Welcome"
               user={loggedIn?.firsName || "Guest"}
               subtext= "Access and manage your account and transaction efficiently."
               />
               <TotalBalanceBox 
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.25} 
               />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar 
            user={loggedIn}
            transactions = {[]}
        banks={[{currentBalance: 123.45}, {currentBalance: 543.21}]}
         />
    </section>
  )
}

export default Home