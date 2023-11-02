export default function Header(){
    return(
        <> 
            <div className="container">
                <div className="row  ">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
                        <img className="" height={"80px"} src="/assets/images/logo.png" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-group mt-4 text-secondary">
                            <input type="text" className="form-control" placeholder="Search For brand, category, coupon" aria-label="Search" aria-describedby="search-button" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3 ps-5" >
                        <button type="button" className="btn btn-danger">LOGIN / SIGN UP</button>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg headerbg  ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown ">
                        <ul className="navbar-nav justify-content-center ">
                            <li className="nav-item  ">
                                <a className="nav-link " aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/coupon">Coupons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/deals">Deal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/store">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav><br/><br/>
        </>
    )
}