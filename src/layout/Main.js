import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
<div>
{/* Header with Background Image */}
<header id="page-top" className="business-header img-fluid">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="display-3 text-center text-white mt-4"></h1>
      </div>
    </div>
  </div>
</header>

{/* Page Content */}
<div className="container" id="about">
  <div className="row">
    <div className="col-sm-8">
      <h2 className="mt-4">'Smart' paint &amp; Windscreen Repair Service</h2>
      <p>
We have decades of experience in the Motor Trade and our services are utilised by Franchised Motor Vehicle Dealerships,
through Independant Used Car Retailers to the general public. Whether your car is leased,rented or owned by you, we can help bring
it back to its very best, getting rid of scratches, scrapes and dings for much less than traditional bodyshop repairers.</p>

<p>Minor scratches can be repaired from £35 per panel, depending on the position, severity &amp; techniques needed to repair your vehicle.
  We offer a full 'walkround' repair service for lease vehicles being returned which could save you many hundreds of pounds.
</p>
      <p>
        <a className="btn btn-primary btn-lg" href="#comments">Customer Comments &raquo;</a>
      </p>
    </div>
    <div className="col-sm-4">
      <h2 className="mt-4">Contact Us</h2>
      <address>
        <strong>Autoview</strong>
        <br />North West
        <br />UK
        <br />
      </address>
      <address>
        <abbr title="Phone">P: </abbr>
        (07971) 834654
        <br />
        <abbr title="Email">E:</abbr>
        <a href="mailto:#"> info@carrepairpreston.co.uk</a>
      </address>
    </div>
  </div>
  {/* row */}

  <div className="row" id="services">
    <div className="col-sm-4 my-4">
      <div className="card">
        <img className="card-img-top" src="/img/paintrepairban.png" alt="" />
        <div className="card-body">
          <h4 className="card-title">Paint Repairs</h4>
          <p className="card-text">Our highly skillled technicians can make unsightly scratches blend in with the rest of the vehicle,using techniques that have been refined over many years and high quality 'trade only' materials.</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4 my-4">
      <div className="card">
        <img className="card-img-top" src="/img/wscreenbanner.png" alt="" />
        <div className="card-body">
          <h4 className="card-title">Windscreen Stone Chips </h4>
          <p className="card-text">Whilst your car is having its annual M.O.T test, the inspector will check for cracks or chips in the windscreen. Any chips greater than just 10mm in Zone 'A' will fail the mot test. In Zone 'B' anything greater than 40mm will fail the test or any significant scratching, which impairs the drivers vision, will also generate a fail.</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4 my-4">
      <div className="card">
        <img className="card-img-top" src="/img/10offban.png" alt="" />
        <div className="card-body">
          <h4 className="card-title">10% off Multiple Repairs</h4>
          <p className="card-text">We come to your at your home or office, and only need an electricity supply and small amount of water to repair your vehicle. So if you need more than one area repaired, you will automatically receive 10% off subsequent repairs.</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>
    {/* row */}
</div>
  {/* /.container */}
  <hr />
  <div>
    <br />
    <h1>Previous Work</h1>
  </div>
  {/* gallery here */}
  <br />
</div>
);
  }
}
