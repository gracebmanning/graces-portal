import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function ThankYou() {
    return (
      <div className="container">
        <Navbar/>
        <div className="mainContent">
            <div className="contentBoxCenter">
                <h2>Thank you for your message!</h2>
                <br/>
                <h3>I will get back to you shortly (if applicable).</h3>
            </div>
        </div>
        <Sidebar/>
      </div>
    );
  }
