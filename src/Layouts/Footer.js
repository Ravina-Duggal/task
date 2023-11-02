import { Link } from "react-router-dom";

export default function Footer(){
  return(
      <>
           
            {/* <!-- Footer start--> */}
<footer id="contect" className="text-center text-lg-start foote-bg1 text-muted  footerbg">
{/* <!-- Section: Social media --> */}
<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-muted">
  {/* <!-- Left --> */}
  <div className="me-5 d-none d-lg-block footer-info">
    <span>Get connected with us on social networks:</span>
  </div>
  {/* <!-- Left --> */}

  {/* <!-- Right --> */}
  <div className="footer-top-icons">
    <a href="" className="me-4 ">
      <i className="fab fa-facebook-f"></i>
    </a>
   
    <a href="" className="me-4 ">
    <i class="fa-brands fa-youtube"></i>
    </a>
    <a href="" className="me-4 link-insta ">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="" className="me-4 ">
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
  {/* <!-- Right --> */}
</section>
{/* <!-- Section: Social media --> */}

{/* <!-- Section: Links  --> */}
<section className="">
  <div className="container text-center text-md-start mt-5">
    <div className="row mt-3 ">
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-start  footer-bottom-link">
        {/* <!-- Content --> */}
        <div>
        <h6 className="text-uppercase fw-bold mb-4">
             <Link to="/" className="text-light">                            <img className="im" width={"120px"} height={"50px"} src="/assets/images/logo.png" /></Link>
          </h6>
          <p className="text-justify">
          "Explore the enchanting world of poetry on our website, where words "
          </p>
          <h6 className="text-uppercase fw-bold mb-4">
             <Link to="/" className="text-light">                            <img className="im" width={"160px"} height={"100px"} src="/assets/images/5a902db97f96951c82922874.png" /></Link>
          </h6>
          <h6 className="text-uppercase fw-bold mb-4">
             <Link to="/" className="text-light">                            <img className="im" width={"160px"} height={"100px"} src="/assets/images/5a902dbf7f96951c82922875.png" /></Link>
          </h6>
         
          {/* <Link to="/"><img src="/assets/images/Poeticatma_logo.png" className="poetic-logo2" /></Link> */}
        </div>
      </div>
     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-start footer-bottom-link">
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4">
          Quick Links
        </h6>
        <p>
          <Link to="/" className="text-reset">Home</Link>
        </p>
        <p>
          <Link to="#" className="text-reset">Coupen</Link>
        </p>
        <p>
          <Link to="#" className="text-reset">Deals</Link>
        </p>
        <p>
          <Link to="#" className="text-reset">Stores</Link>
        </p>
        
        
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-start footer-bottom-link">
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4">
          Important Links
        </h6>
        <p>
          <Link to="/contact" className="text-reset">Contact Us</Link>
        </p>
        <p>
          <Link to="" className="text-reset">Help Desk</Link>
        </p>
        <p>
          <Link to="" className="text-reset">FAQs</Link>
        </p>
        <p>
          <Link to="" className="text-reset">Privacy policy</Link>
        </p>
      </div>
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-start footer-top-icons footer-bottom-link">
        {/* <!-- Links --> */}
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3 "></i> Jalandhar-144009, punjab</p>
        <p>
          <i className="fas fa-envelope me-3 "></i>
          samridhi@gmail.com
        </p>
        <p><i className="fas fa-phone me-3 "></i> + 91 1234567891</p>
        <p><i className="fas fa-print me-3 "></i> + 91 1234567890</p>
      </div>
    </div>
  </div>
</section>
{/* <!-- Section: Links  --> */}

{/* <!-- Copyright --> */}
<div className="text-center footer-text p-4 foote-bg2" >
  © 2023:
  <a className="footer-text fw-bold" href="">Samridhi Digital pvt Ltd. <span className="px-2">All Rights Reserved</span></a>
</div>
{/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}

        </>
  )
}