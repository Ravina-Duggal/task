export default function Home(){
    return(
        <>
           <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/images/season.jpg" className="d-block w-100 rounded-5" alt="..." width= {"860px"} height={"500px"} />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/sale.jpg" className="d-block w-100 rounded-5" alt="..."  width= {"860px"} height={"500px"} />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/images/spring.jpg" className="d-block w-100 rounded-5" alt="..." width= {"860px"} height={"500px"} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> <br/><br/><br/><br/>
            <div class="container">
        <div class="d-flex justify-content-center">
            <button class="button ative" id="button1 "><i class="fa-solid fa-trophy"></i>Popular Coupons</button>
            <button class="button" id="button2"><i class="fa-solid fa-stopwatch"></i>Ending Soon</button>
            <button class="button" id="button3"><i class="fa-solid fa-fire-flame-curved"></i>Latest Coupons</button>
          
        </div>
       
    </div>
             <br/><br/><br/>
            </div>
            <div className="container">
     {/* <!-- ===crousel= start==== --> */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row mt-3 g-4">
             
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
            </div>
            <div className="row mt-3  g-4">
             
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mt-3 g-4">
             
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
            </div>
            <div className="row mt-3 g-4">
             
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mt-3 g-4">
             
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
            </div>
            <div className="row mt-3 g-4">
             
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
                <div className="maincardWraper">
                  <div className="cardWraperBody">
                      <div className="cardWraperoffer">Upto 60% off on<br/>Appliances</div>
                      <img width={"150px"} height = {"50px"} src="/assets/images/amazon.png" />
                      <div className="cardWrapercont">Upto 60% off on summer Appliances</div>
                  </div>
                  <div className="cardWraperfoot">
                      <div className="cardWraperbtn">Grab now</div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div><br/><br/><br/>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon text-danger" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- ===crousel=end==== --> */}
           </div> <br/><br/>
        </>
    )
}