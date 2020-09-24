import React from 'react'
import '../Home.css'
import Banner from './Banner'
import  Card  from './Card'

const Home = () => {
    return(
        <div className="home">
            <Banner/>

            <div className="home__section">
                <Card src="https://s3-media0.fl.yelpcdn.com/bphoto/2sx-b53oBM6fEQ4my2ekKw/348s.jpg" title="Gravity studios" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab" price="$150/night"  />
                <Card src="https://s3-media0.fl.yelpcdn.com/bphoto/E3C4sYJAW2rurx3YqD56ag/348s.jpg" title= "Jungle Lords" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab" price="$150/night"   />
                <Card src="https://s3-media0.fl.yelpcdn.com/bphoto/XeTGrowofFhEOo5wV5fqsQ/348s.jpg" title="Electrical Audio" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab" price="$150/night"  />
            </div>
            <div className="home__section">
                <Card src="https://s3-media0.fl.yelpcdn.com/bphoto/avOiKLYjBRInajckOFlsMg/348s.jpg" title="Chicago Recording Company" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab" price="$150/night"  />
                <Card src="https://s3-media0.fl.yelpcdn.com/bphoto/nkiTMAaz2JbUIsPKQZdPnQ/348s.jpg" title="Classick studios" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab"  price="$150/night"  />
                <Card src="https://s3-media0.fl.yelpcdn.com/bphoto/uAjoI1a1Z-XnkZTHsgTBDw/348s.jpg" title="Tightrope Recording" description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab"  price="$150/night" />
            </div>
        </div>

    )
}

export default Home;
