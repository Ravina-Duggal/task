import AmazingSunglasses from "./AmazingSunglasses";

export default function Index() {
    return (
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
                            <img src="assets/images/season.jpg" className="d-block w-100 rounded-5" alt="..." width={"860px"} height={"500px"} />
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/sale.jpg" className="d-block w-100 rounded-5" alt="..." width={"860px"} height={"500px"} />
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/spring.jpg" className="d-block w-100 rounded-5" alt="..." width={"860px"} height={"500px"} />
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
                </div> <br /><br /><br /><br />
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <button class="button ative" id="button1 "><i class="fa-solid fa-trophy"></i>Popular Coupons</button>
                        <button class="button" id="button2"><i class="fa-solid fa-stopwatch"></i>Ending Soon</button>
                        <button class="button" id="button3"><i class="fa-solid fa-fire-flame-curved"></i>Latest Coupons</button>

                    </div>

                </div>
                <br /><br /><br />
               
                <div className="container cn">
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

           <div className="container cn">
           <div className="navi" >
                <div className="cupn text-center" >Deals of the day</div><br/>
                <div className="bck" ></div>
            </div>
        <div className="row mt-3 g-4">
             
             <div className="col-lg-3">
               <div className="maincardWraper">
                 <div className="cardWraperBody">
                     <img width = {"80px"} height={"20px"} src="/assets/images/amazon.png" />
                     <p>Amazon</p>
                     <div className="cardWrapercont rap">Flat 30% off</div>
                 </div>
                 <div className="cardWraperfoot">
                     <div className="cardWraperbtn">Grab now</div>
                 </div>
             </div>
             </div>
             <div className="col-lg-3">
               <div className="maincardWraper">
                 <div className="cardWraperBody">
                     <img width = {"80px"} height={"20px"} src="/assets/images/amazon.png" />
                     <p>Amazon</p>
                     <div className="cardWrapercont rap">Flat 30% off</div>
                 </div>
                 <div className="cardWraperfoot">
                     <div className="cardWraperbtn">Grab now</div>
                 </div>
             </div>
             </div>
             <div className="col-lg-3">
               <div className="maincardWraper">
                 <div className="cardWraperBody">
                     <img width = {"80px"} height={"20px"} src="/assets/images/amazon.png" />
                     <p>Amazon</p>
                     <div className="cardWrapercont rap">Flat 30% off </div>
                 </div>
                 <div className="cardWraperfoot">
                     <div className="cardWraperbtn">Grab now</div>
                 </div>
             </div>
             </div>
             <div className="col-lg-3">
               <div className="maincardWraper">
                 <div className="cardWraperBody">
    
                     <img width = {"80px"} height={"20px"} src="/assets/images/amazon.png" />
                     <p>Amazon</p>
                     <div className="cardWrapercont rap">Flat 30% off </div>
                 </div>
                 <div className="cardWraperfoot">
                     <div className="cardWraperbtn">Grab now</div>
                 </div>
             </div>
             </div>
           </div>
           </div><br/><br/>
                
            </div><br /><br />
            <div className="container cn ">

                <div className="navi" >
                    <div className="cupn text-center" >Coupon By Categories</div><br />
                    <div className="bck" ></div>
                </div>
                <div className="man" >
                    <div className="del">
                        <div className="fshn">
                            <img width={"36px"} height={"36px"} src="/assets/images/fashn.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/ramen.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/makeup.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/toys.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/server.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/game.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/phone.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/travel.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                        <div className="fshn" >
                            <img width={"36px"} height={"36px"} src="/assets/images/movies.png" />
                            <div className="wrd">Fashion</div>
                        </div>
                    </div>
                    <div className="name">
                        <div className="lex">
                            <div className="cat" >
                                <div className="lux">
                                    <img width={" 80px"} height={"24px"} src="/assets/images/amazon.png" />
                                    <div className="rav" >Amazon</div>
                                </div>
                                <div className="ravu">
                                    <div className="bibo">Flat 30% Off</div>
                                    <div className="rab">
                                        <div className="rabi">Grab Now</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat" >
                                <div className="lux">
                                    <img width={" 80px"} height={"24px"} src="/assets/images/amazon.png" />
                                    <div className="rav" >Amazon</div>
                                </div>
                                <div className="ravu">
                                    <div className="bibo">Flat 30% Off</div>
                                    <div className="rab">
                                        <div className="rabi">Grab Now</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat" >
                                <div className="lux">
                                    <img width={" 80px"} height={"24px"} src="/assets/images/amazon.png" />
                                    <div className="rav" >Amazon</div>
                                </div>
                                <div className="ravu">
                                    <div className="bibo">Flat 30% Off</div>
                                    <div className="rab">
                                        <div className="rabi">Grab Now</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat" >
                                <div className="lux">
                                    <img width={" 80px"} height={"24px"} src="/assets/images/amazon.png" />
                                    <div className="rav" >Amazon</div>
                                </div>
                                <div className="ravu">
                                    <div className="bibo">Flat 30% Off</div>
                                    <div className="rab">
                                        <div className="rabi">Grab Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div><br/>
            <AmazingSunglasses/>
            <div className="container cn">
        
    <div className="popl">
        <div className=" deal ">
                <div className=" the">Popular Membership</div>
                <div className="of "></div>
            </div>           
            <div className="start" >
                <div className="summ" >
                    <div className="rdy" >
                        <div className="rs" ></div>
                        <img width={" 420px"} height= {"420px"}  left = {"0px"}  top= {"0px"}  position= {'absolute'}  src="/assets/images/sale.png" />
                    </div>
                    <div className="rdy" >
                        <div className="rs" ></div>
                        <img width={" 420px"} height= {"420px"}  left = {"0px"}  top= {"0px"}  position= {'absolute'}  src="/assets/images/zon.png" />
                    </div>
                </div>
                <div className="rumi" >
                    <div className="rssb">
                        <div className="org"></div>
                        <img width={" 420px"} height= {"420px"}  left = {"0px"}  top= {"0px"}  position= {'absolute'} src="/assets/images/food.png" />
                    </div>
                    <div className="rssb">
                        <div className="org"></div>
                        <img width={" 420px"} height= {"420px"}  left = {"0px"}  top= {"0px"}  position= {'absolute'} src="/assets/images/sun.png" />
                    </div>
                </div>
            </div>

            </div>

        </div><br/><br/><br/><br/>

            <div className="subscribeNew">
                <div className="container">
                    <div className="mainContentsub">
                        <div className="subCribeDiv">
                            <img src="/assets/images/form-img.png" alt="" />
                            <div className="ContantSubmain">
                                <h2>Subscribe to our <br />
                                    Newsletter!</h2>
                                <p>Be the first to get exclusive offers <br />
                                    ands the latest news</p>

                                <input type="text" placeholder="Enter your email address" className="inputdesign" />
                                <a className="btn btn-danger mt-3">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="HowitWork">
                <div className="container">
                    <div className="headingwork">
                        <h2>How It Works?</h2>
                    </div>
                    <div className="HowitWorkMain">
                        <div className="CardWorks">
                            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.666687" width="56" height="56" rx="12" fill="#F01C21" />
                                <rect x="0.666687" width="56" height="56" rx="12" fill="white" fill-opacity="0.85" />
                                <g clip-path="url(#clip0_1_315)">
                                    <path d="M26.6667 27V24L31.6667 28L26.6667 32V29H17.6667V27H26.6667ZM19.1247 31H21.2487C21.9467 32.7191 23.2204 34.1422 24.8518 35.0259C26.4832 35.9097 28.371 36.1991 30.1922 35.8447C32.0135 35.4904 33.655 34.5142 34.836 33.0832C36.017 31.6523 36.6642 29.8554 36.6667 28C36.6677 26.1427 36.0225 24.3428 34.8416 22.9092C33.6607 21.4756 32.0178 20.4976 30.1947 20.1428C28.3715 19.7881 26.4817 20.0787 24.8495 20.965C23.2172 21.8512 21.9442 23.2778 21.2487 25H19.1247C20.3987 20.943 24.1887 18 28.6667 18C34.1897 18 38.6667 22.477 38.6667 28C38.6667 33.523 34.1897 38 28.6667 38C24.1887 38 20.3987 35.057 19.1247 31Z" fill="#0C1230" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_315">
                                        <rect width="24" height="24" fill="white" transform="translate(16.6667 16)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h3 className="text14 mt24">Signup</h3>
                            <p className="text16 mt8">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                        </div>

                        <div className="CardWorks">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.52588e-05" width="56" height="56" rx="12" fill="#F01C21" />
                                <rect x="1.52588e-05" width="56" height="56" rx="12" fill="white" fill-opacity="0.85" />
                                <g clip-path="url(#clip0_1_321)">
                                    <path d="M18 25.5V20C18 19.7348 18.1054 19.4804 18.2929 19.2929C18.4804 19.1054 18.7348 19 19 19H37C37.2652 19 37.5196 19.1054 37.7071 19.2929C37.8947 19.4804 38 19.7348 38 20V25.5C37.337 25.5 36.7011 25.7634 36.2322 26.2322C35.7634 26.7011 35.5 27.337 35.5 28C35.5 28.663 35.7634 29.2989 36.2322 29.7678C36.7011 30.2366 37.337 30.5 38 30.5V36C38 36.2652 37.8947 36.5196 37.7071 36.7071C37.5196 36.8946 37.2652 37 37 37H19C18.7348 37 18.4804 36.8946 18.2929 36.7071C18.1054 36.5196 18 36.2652 18 36V30.5C18.6631 30.5 19.2989 30.2366 19.7678 29.7678C20.2366 29.2989 20.5 28.663 20.5 28C20.5 27.337 20.2366 26.7011 19.7678 26.2322C19.2989 25.7634 18.6631 25.5 18 25.5ZM20 23.968C20.7512 24.3403 21.3835 24.9151 21.8255 25.6275C22.2676 26.3399 22.5018 27.1616 22.5018 28C22.5018 28.8384 22.2676 29.6601 21.8255 30.3725C21.3835 31.085 20.7512 31.6597 20 32.032V35H36V32.032C35.2488 31.6597 34.6165 31.085 34.1745 30.3725C33.7325 29.6601 33.4983 28.8384 33.4983 28C33.4983 27.1616 33.7325 26.3399 34.1745 25.6275C34.6165 24.9151 35.2488 24.3403 36 23.968V21H20V23.968ZM25 25H31V27H25V25ZM25 29H31V31H25V29Z" fill="#0C1230" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_321">
                                        <rect width="24" height="24" fill="white" transform="translate(16 16)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h3 className="text14 mt24">Signup</h3>
                            <p className="text16 mt8">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                        </div>

                        <div className="CardWorks">
                            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.333374" width="56" height="56" rx="12" fill="#F01C21" />
                                <rect x="0.333374" width="56" height="56" rx="12" fill="white" fill-opacity="0.85" />
                                <g clip-path="url(#clip0_1_327)">
                                    <path d="M19.3334 19H37.3334C37.5986 19 37.8529 19.1054 38.0405 19.2929C38.228 19.4804 38.3334 19.7348 38.3334 20V36C38.3334 36.2652 38.228 36.5196 38.0405 36.7071C37.8529 36.8946 37.5986 37 37.3334 37H19.3334C19.0682 37 18.8138 36.8946 18.6263 36.7071C18.4387 36.5196 18.3334 36.2652 18.3334 36V20C18.3334 19.7348 18.4387 19.4804 18.6263 19.2929C18.8138 19.1054 19.0682 19 19.3334 19ZM36.3334 27H20.3334V35H36.3334V27ZM36.3334 25V21H20.3334V25H36.3334ZM30.3334 31H34.3334V33H30.3334V31Z" fill="#0C1230" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_327">
                                        <rect width="24" height="24" fill="white" transform="translate(16.3334 16)" />
                                    </clipPath>
                                </defs>
                            </svg>


                            <h3 className="text14 mt24">Signup</h3>
                            <p className="text16 mt8">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="wantpartmain">
                    <div className="contentWantleft">
                        <h3 className="redtext32">Want to be <br /> a part of our team</h3>
                        <p className="text14">Be a part of best site of discount <br /> coupons</p>

                        <div className="btnSocial">
                            <div className="btnApple">
                                <img src="/assets/images/appleicons.png" alt="" />
                                <div className="btnTextwrappper">
                                    <p className="text10">Download From</p>
                                    <h4 className="textapp14">App Store</h4>
                                </div>
                            </div>
                            <div className="btnApple">
                                <img src="/assets/images/playstore.png" alt="" />
                                <div className="btnTextwrappper">
                                    <p className="text10">Download From</p>
                                    <h4 className="textapp14">App Store</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/images/moble.png" alt="" className="moblePhone" />
                </div>
            </div>

            <div className="PopCategoriesMain">
                <div className="container">
                    <div className="PopCategories">
                        <img src="assets/images/popularidea.png" alt="" />

                        <div className="rightdivpopcate">
                            <div className="headingwork">
                                <h2>Popular Categories</h2>
                            </div>

                            <table>
                                <tr>
                                    <td>fight</td>
                                    <td>Bus</td>
                                    <td>Entertainment</td>
                                    <td>Jewellery</td>
                                </tr>
                                <tr>
                                    <td>fight</td>
                                    <td>Bus</td>
                                    <td>Entertainment</td>
                                    <td>Jewellery</td>
                                </tr>
                                <tr>
                                    <td>fight</td>
                                    <td>Bus</td>
                                    <td>Entertainment</td>
                                    <td>Jewellery</td>
                                </tr>
                                <tr>
                                    <td>fight</td>
                                    <td>Bus</td>
                                    <td>Entertainment</td>
                                    <td>Jewellery</td>
                                </tr>
                                <tr>
                                    <td>fight</td>
                                    <td>Bus</td>
                                    <td>Entertainment</td>
                                    <td>Jewellery</td>
                                </tr>
                                <tr>
                                    <td>fight</td>
                                    <td>Bus</td>
                                    <td>Entertainment</td>
                                    <td>Jewellery</td>
                                </tr>
                                <tr>
                                    <td>fight</td>
                                    <td>Bus</td>
                                    <td>Entertainment</td>
                                    <td>Jewellery</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}