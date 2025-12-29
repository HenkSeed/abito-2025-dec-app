import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary search-btn">
                                <img
                                    className="search-btn__icon"
                                    src="/image/search.svg"
                                    alt="Search"
                                />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <Outlet />
            </main>
        </>
    )
}
