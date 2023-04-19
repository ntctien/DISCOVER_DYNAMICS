import React from 'react'
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import TourItem from "../components/TourItem"

const TourDetail = () => {
  const { id } = useParams()
  const [tourItem,setItem] = useState(null)

  useEffect(() => {
    const tourItem = TourItem.find((id) => TourItem.id === parseInt(id))
    window.scrollTo(0, 0)
    if (tourItem) {
      setItem(tourItem);
    }
  }, [id])
  return (
    <div>
      <div>
        {/* Search bar */}
        <SearchBar />
        <nav className="navbar">
          <a href="/home" title="Home">Trang chu</a>&sol;<a href="/home/destination" title="Destination">Diem den</a>&sol;<a href="/home/destination/detail" title="Tour Detail">{ tourItem.name }</a>
        </nav>
      </div>
      <div>
        {tourItem ? (
          <main>
            <div className='detail-container'>
            <div className="pt-5 pb-32 px-[80px] w-full center-col">
                  {/* Detail */}
                  <Title text={"Chương trình tour"} />
                  
                  <section className='detail-content'>
                      <h1 className='title'>{ tourItem.name }</h1>
                      <img src={tourItem.image} alt='' />
                      <p>Tour Details</p>
                  </section>
              </div>
            </div>
          </main>
        ) : ( <h1>not found</h1>
        )}
      </div>
      <div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default TourDetail