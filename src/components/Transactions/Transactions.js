import React from 'react'
import './Transactions.css'
import { MdSearch, MdFilterList } from 'react-icons/md'
import Transaction from '../Transaction/Transaction'
import transactions from '../../data/transactions'

function Transactions() {
  return (
    <div className='transactions'>
      <div className='transactions__header'>
        <h4>Last Transactions</h4>
        <div className='transactions__actions'>
          <button className='btn btn--secondary'>
            <MdSearch />
          </button>
          <button className='btn btn--secondary'>
            <MdFilterList />
          </button>
        </div>
      </div>
      <div className='transaction__content'>
        {transactions.map((item) => (
          <Transaction key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Transactions
