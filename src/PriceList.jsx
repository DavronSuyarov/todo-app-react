import React from 'react'

const PriceList  = ()=>{
    return (
        <div className="container my-5 py-2" id="price-table">
        <h2 className="text-center font-weight-bold d-block mb-3">Check our pricing</h2>
        <div className="row">
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
                <h4 className="my-4">STARTUP</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">0</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>Up to 5 Documents</li>
                    <li>Up to 3 Reviews</li>
                    <li>5 team Members</li>
                    <li>Limited Support</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">Get Free</a>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5 rounded" id="price-table__premium">
                <h4 className="my-4">PREMIUM</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">10</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>Up to 15 Documents</li>
                    <li>Up to 10 Reviews</li>
                    <li>25 team Members</li>
                    <li>Limited Support</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-green">Get Free</a>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
                <h4 className="my-4">PROFESSIONAL</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">30</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>Unlimited Documents</li>
                    <li>Unlimited Reviews</li>
                    <li>Unlimited Members</li>
                    <li>Unlimited Support</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">Get Free</a>
            </div>
        </div>
    </div>
    )
}

export default PriceList