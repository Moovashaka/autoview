import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
<div>
{/* Header with Background Image */}
<header className="business-header img-fluid">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="display-3 text-center text-white mt-4"></h1>
      </div>
    </div>
  </div>
</header>

{/* Page Content */}
<div className="container">

  <div className="row">
    <div className="col-sm-8">
      <h2 className="mt-4">'Smart' paint &amp; Windscreen Repair Service</h2>
      <p>
We have decades of experience in the Motor Trade and our services are utilised by Franchised Motor Vehicle Dealerships,
through Independant Used Car Retailers to the general public. Whether your car is leased,rented or owned by you, we can help you bring
it back to its very best, getting rid of scratches, scrapes and dings for much less than traditional bodyshop repairers.</p>

<p>Passionate about all things Automotive we have put together a series of articles around motoring and Motorsport including Used Car Guides,
  which we hope you will find useful when you are purchasing a used car.
</p>
      <p>
        <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
      </p>
    </div>
    <div className="col-sm-4">
      <h2 className="mt-4">Contact Us</h2>
      <address>
        <strong>Start Bootstrap</strong>
        <br />3481 Melrose Place
        <br />Beverly Hills, CA 90210
        <br />
      </address>
      <address>
        <abbr title="Phone">P:</abbr>
        (123) 456-7890
        <br />
        <abbr title="Email">E:</abbr>
        <a href="mailto:#">name@example.com</a>
      </address>
    </div>
  </div>
  {/* row */}

  <div className="row">
    <div className="col-sm-4 my-4">
      <div className="card">
        <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4 my-4">
      <div className="card">
        <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4 my-4">
      <div className="card">
        <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
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
  </div>
);
}
}
