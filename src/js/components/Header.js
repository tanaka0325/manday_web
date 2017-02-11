import React from 'react'

const Header = () => {
  return (
    <section className="hero is-dark is-medium">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item title">
              manday
            </a>
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item">
              <i className="fa fa-search" />
              検索
            </a>
            <a className="nav-item">
              <i className="fa fa-user-plus" />
              登録
            </a>
            <a className="nav-item">
              <i className="fa fa-sign-in" />
              ログイン
            </a>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header
