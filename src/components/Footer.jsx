

const Footer = () => {
    return (
        <div className="container mx-auto lg:px-60 space-y-8 p-8 lg:mt-20 mt-10 bg-slate-100">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>

            </div>
            <div className="divider"></div>
            <div className="flex gap-10 lg:gap-40 justify-center items-center">
            <nav className="flex flex-col">
    <h6 className="footer-title opacity-100">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title opacity-100">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title opacity-100">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
            </div>
        </div>
    );
};

export default Footer;